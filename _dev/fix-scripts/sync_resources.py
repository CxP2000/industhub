#!/usr/bin/env python3
"""Sync resource articles across the static site.

Usage: python _dev/fix-scripts/sync_resources.py

After adding an article:
  1. Put the detail page in zh/resources/articles/<slug>.html
  2. Add two meta tags in <head>:
       <meta name="res-channel" content="news|company|cases|faq">
       <meta name="res-summary" content="one-line summary for list pages">
  3. Run this script.

It rebuilds (idempotent, no fabricated content, no dates):
  - zh/resources/index.html        4 channel blocks
  - zh/resources/cases/index.html  case list
  - zh/index.html                  HOME-LATEST block
  - channel pages' res-article-list when present
  - sitemap.xml                    article URLs (add missing, drop stale)
"""
import io
import os
import re
import glob

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
ART_DIR = os.path.join(ROOT, "zh", "resources", "articles")

CHANNELS = {
    "news": "新闻资讯",
    "company": "公司动态",
    "cases": "应用案例",
    "faq": "常见问答",
}

EMPTY = ('<li><p style="color:#8aa3b8;font-size:.92rem;margin:0;">'
         '本频道暂无已发布文章，内容整理中。</p></li>')


def read(rel):
    with io.open(os.path.join(ROOT, rel), encoding="utf-8") as f:
        return f.read()


def write(rel, text):
    with io.open(os.path.join(ROOT, rel), "w", encoding="utf-8") as f:
        f.write(text)


def collect():
    items = []
    for path in sorted(glob.glob(os.path.join(ART_DIR, "*.html"))):
        s = io.open(path, encoding="utf-8").read()
        ch = re.search(r'<meta name="res-channel" content="([^"]+)"', s)
        title = re.search(r"<h1[^>]*>(.*?)</h1>", s, re.S)
        summary = re.search(r'<meta name="res-summary" content="([^"]+)"', s)
        if not (ch and title and summary):
            print("  SKIP (missing meta):", os.path.basename(path))
            continue
        if ch.group(1) not in CHANNELS:
            print("  SKIP (unknown channel):", os.path.basename(path))
            continue
        items.append({
            "slug": os.path.basename(path),
            "channel": ch.group(1),
            "title": re.sub(r"<[^>]+>", "", title.group(1)).strip(),
            "summary": summary.group(1).strip(),
            "mtime": os.path.getmtime(path),
        })
    items.sort(key=lambda x: -x["mtime"])
    return items


def li(it, prefix, tag=False):
    label = CHANNELS[it["channel"]]
    head = '<span class="home-latest-tag">%s</span>' % label if tag else ""
    return ('<li><a href="%s%s">%s<h3>%s</h3><p>%s</p></a></li>'
            % (prefix, it["slug"], head, it["title"], it["summary"]))


def replace_ul(text, channel, prefix, tag=False):
    """Replace the res-article-list inside the section whose <h2> matches."""
    label = CHANNELS[channel]
    blocks = re.findall(r'<section class="res-channel">.*?</section>', text, re.S)
    target = None
    for b in blocks:
        if "<h2>%s</h2>" % label in b:
            target = b
            break
    if target is None:
        return text, False
    # hub blocks stay compact: 3 latest per channel, "查看更多 +" leads to the full list
    rows = [li(it, prefix, tag) for it in ITEMS if it["channel"] == channel][:3]
    body = "\n      ".join(rows) if rows else EMPTY
    new = re.sub(r'(<ul class="res-article-list">).*?(</ul>)',
                 lambda m: m.group(1) + "\n      " + body + "\n    " + m.group(2),
                 target, count=1, flags=re.S)
    return text.replace(target, new, 1), True


def sync_hub():
    rel = "zh/resources/index.html"
    s = read(rel)
    for ch in CHANNELS:
        s, ok = replace_ul(s, ch, "articles/")
        print("  hub %-8s %s" % (ch, "OK" if ok else "section not found"))
    write(rel, s)


def sync_cases():
    for rel, prefix in [("zh/resources/cases/index.html", "../articles/"),
                        ("zh/resources/news.html", "articles/"),
                        ("zh/resources/company.html", "articles/"),
                        ("zh/resources/faq.html", "articles/")]:
        s = read(rel)
        if '<ul class="res-article-list">' not in s:
            print("  %-46s no list (kept as-is)" % rel)
            continue
        ch = "cases" if "/cases/" in rel else os.path.basename(rel).replace(".html", "")
        rows = [li(it, prefix) for it in ITEMS if it["channel"] == ch]
        body = "\n      ".join(rows) if rows else EMPTY
        s2, n = re.subn(r'(<ul class="res-article-list">).*?(</ul>)',
                        lambda m: m.group(1) + "\n      " + body + "\n    " + m.group(2),
                        s, count=1, flags=re.S)
        write(rel, s2)
        print("  %-46s %s" % (rel, "OK" if n else "no match"))


def sync_home():
    rel = "zh/index.html"
    s = read(rel)
    rows = [li(it, "resources/articles/", tag=True) for it in ITEMS[:4]]
    body = "\n      ".join(rows) if rows else EMPTY
    pat = re.compile(r'(<!--HOME-LATEST-START-->)(.*?)(<!--HOME-LATEST-END-->)', re.S)
    s2, n = pat.subn(lambda m: m.group(1) + "\n      " + body + "\n      " + m.group(3), s, count=1)
    write(rel, s2)
    print("  home latest block:", "OK" if n else "MARKER NOT FOUND", "(%d items)" % len(rows))


def sync_sitemap():
    rel = "sitemap.xml"
    s = read(rel)
    live = set(it["slug"] for it in ITEMS)
    # drop stale article URLs (single-line and multi-line forms)
    s = re.sub(r'\s*<url>\s*<loc>https://industhub\.com/zh/resources/articles/[^<]+</loc>\s*</url>', '', s)
    s = re.sub(r'^\s*<url><loc>https://industhub\.com/zh/resources/articles/[^<]+</loc>.*?</url>\s*$\n?', '', s, flags=re.M)
    for it in ITEMS:
        url = ("  <url>\n    <loc>https://industhub.com/zh/resources/articles/%s</loc>\n  </url>\n" % it["slug"])
        if "/articles/%s<" % it["slug"] not in s:
            s = s.replace("</urlset>", url + "</urlset>")
    write(rel, s)
    print("  sitemap article URLs:", len(live))


if __name__ == "__main__":
    ITEMS = collect()
    print("Found %d articles: %s" % (len(ITEMS), ", ".join(i["slug"] for i in ITEMS)))
    sync_hub()
    sync_cases()
    sync_home()
    sync_sitemap()
    print("Done. All list blocks rebuilt from real article files.")
