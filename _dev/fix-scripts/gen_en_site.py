#!/usr/bin/env python3
"""Generate the English site from the Chinese site (zh/) as the single source of truth.

Architecture (user approved 2026-11-11):
  /            = English (root, primary domain)
  /zh/         = Chinese

Rules:
  - NEVER restore pages from _dev/trash/en-site-removed or products-en.
  - Only real facts are translated: model names, pressures, dimensions, lead
    times, MOQ and company data are carried over verbatim. No invented content.
  - Every English page keeps the exact DOM structure of its Chinese counterpart;
    only text nodes, lang, canonical/hreflang and relative-path depth change.
  - Idempotent: re-running regenerates the same output.

Translation data lives in en_translations.py (COMMON exact strings, TERMS
substring fallbacks, PAGES per-page strings).
"""
import os
import re
import sys
from en_translations import COMMON, TERMS, PAGES, META, JSON_LD

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
DEV = os.path.join(ROOT, '_dev')
SITE = "https://industhub.com"

# Stable worklist: id -> Chinese text. Translations are keyed by id so large
# batches of prose can be added without repeating the source strings.
TEXT_TO_ID = {}
WORKLIST = os.path.join(DEV, 'en_worklist.tsv')
if os.path.exists(WORKLIST):
    with open(WORKLIST, encoding='utf-8') as f:
        for line in f:
            parts = line.rstrip('\n').split('\t')
            if len(parts) >= 2:
                try:
                    TEXT_TO_ID[parts[1]] = int(parts[0])
                except ValueError:
                    pass
try:
    from en_translations_rows import ROWS
except ImportError:
    ROWS = {}
try:
    from en_translations_rows2 import ROWS2
    ROWS.update(ROWS2)
except ImportError:
    pass

# Batch 1: core pages. Batch 2: 24 model pages + 13 articles + 5 leak resources.
BATCH1 = [
    "index.html", "about.html", "contact.html", "404.html",
    "products/seal-connectors/index.html",
    "products/leak-detectors/index.html",
    "products/seal-connectors/categories/threaded.html",
    "products/seal-connectors/categories/tube-od.html",
    "products/seal-connectors/categories/tube-id.html",
    "products/seal-connectors/categories/irregular.html",
    "products/seal-connectors/categories/face-seal.html",
    "products/seal-connectors/categories/automation.html",
    "products/seal-connectors/categories/liquid-cooling-male-female.html",
    "products/seal-connectors/categories/c-series-male-female.html",
    "products/seal-connectors/categories/gas-cylinder-filling.html",
    "products/seal-connectors/categories/electrical-connectors.html",
    "products/leak-detectors/models/l520-differential-manual-regulator.html",
    "products/leak-detectors/models/l530-differential-electronic-regulator.html",
    "resources/index.html",
    "resources/news.html",
    "resources/company.html",
    "resources/faq.html",
    "resources/cases/index.html",
]

# Batch 2: 24 model pages + 13 articles + 5 leak-detector resources.
# zh/news.html is excluded: it is a legacy alias whose canonical points to
# /zh/resources/news.html and it is not in the sitemap.
BATCH2 = [
    "products/leak-detectors/resources/index.html",
    "products/leak-detectors/resources/fixture-checklist.html",
    "products/leak-detectors/resources/leak-rate-basics.html",
    "products/leak-detectors/resources/pressure-decay-test-cycle.html",
    "products/leak-detectors/resources/sensor-range-choice.html",
    "products/seal-connectors/models/g10-cooling-water-pipe-connector.html",
    "products/seal-connectors/models/g10-pro-cooling-water-pipe-connector.html",
    "products/seal-connectors/models/g10d-cooling-water-pipe-connector.html",
    "products/seal-connectors/models/g15-fuel-pipe-connector.html",
    "products/seal-connectors/models/g15-pro-fuel-pipe-connector.html",
    "products/seal-connectors/models/g15k-fuel-pipe-connector.html",
    "products/seal-connectors/models/g15t-fuel-pipe-connector.html",
    "products/seal-connectors/models/g20a-liquid-cooling-connector.html",
    "products/seal-connectors/models/g20f-flat-face-liquid-cooling-connector.html",
    "products/seal-connectors/models/g25a-liquid-cooling-connector.html",
    "products/seal-connectors/models/g25f-electrical-connector-test-quick-connector.html",
    "products/seal-connectors/models/g30-straight-tube-connector.html",
    "products/seal-connectors/models/g35-straight-flared-tube-connector.html",
    "products/seal-connectors/models/g35c-compact-tube-connector.html",
    "products/seal-connectors/models/g60-external-thread-connector.html",
    "products/seal-connectors/models/g65-threaded-quick-seal-connector.html",
    "products/seal-connectors/models/g70-external-tube-quick-connector.html",
    "products/seal-connectors/models/g70-gas-cylinder-filling-connector.html",
    "products/seal-connectors/models/g70p-pneumatic-gas-cylinder-filling-connector.html",
    "products/seal-connectors/models/g72k-irregular-tube-port-connector.html",
    "products/seal-connectors/models/g72r-male-female-quick-connector.html",
    "products/seal-connectors/models/g80-internal-thread-connector.html",
    "products/seal-connectors/models/g85-high-pressure-external-thread.html",
    "products/seal-connectors/models/g90-lever-type-connector.html",
    "resources/articles/automotive-hose-low-pressure-quick-sealing.html",
    "resources/articles/ev-cold-plate-leak-test-g30-selection.html",
    "resources/articles/ev-powertrain-integrated-test-connections.html",
    "resources/articles/ev-radiator-leak-test-connectors.html",
    "resources/articles/g25a-peu-coolant-channel-test.html",
    "resources/articles/g70k-compressor-flared-tube-leak-test.html",
    "resources/articles/g70sp-cold-plate-barb-port-sealing.html",
    "resources/articles/g80-brake-caliper-leak-test.html",
    "resources/articles/gas-cylinder-filling-connector-maintenance.html",
    "resources/articles/gas-cylinder-filling-connector-troubleshooting.html",
    "resources/articles/gas-stove-tight-space-connector.html",
    "resources/articles/glass-pvc-tube-leak-test-sealing.html",
    "resources/articles/water-heater-copper-tube-leak-test.html",
]
# Legacy alias stub: a 0-second meta-refresh page whose canonical must point
# at the real news page, not at itself.
ALIAS_CANONICAL = {
    "news.html": "resources/news.html",
}
ALL_PAGES = BATCH1 + BATCH2 + list(ALIAS_CANONICAL)

# Text-node / attribute-value pattern. Attributes that carry human-readable copy.
TEXT_NODE = re.compile(r'(>)([^<>]+)(<)')
TEXT_ATTR = re.compile(r'(\b(?:content|alt|title|aria-label|placeholder|value|download)=")([^"]*)(")')
HTML_COMMENT = re.compile(r'(<!--)(.*?)(-->)', re.S)
CJK = re.compile(r'[\u3400-\u9fff\u3000-\u303f\uff00-\uffef]')


def _longest_first(d):
    return sorted(d.items(), key=lambda kv: -len(kv[0]))


COMMON_SORTED = _longest_first(COMMON)
TERMS_SORTED = _longest_first(TERMS)


def translate_text(s, page_map):
    """Translate one text node / attribute value. Exact match first, then terms."""
    key = s.strip()
    if not key or not CJK.search(key):
        return s
    # Preserve surrounding whitespace (many nodes are indented).
    lead = s[:len(s) - len(s.lstrip())]
    trail = s[len(s.rstrip()):]
    for src, dst in page_map:
        if key == src:
            return lead + dst + trail
    for src, dst in COMMON_SORTED:
        if key == src:
            return lead + dst + trail
    rid = TEXT_TO_ID.get(key)
    if rid is not None and ROWS.get(rid):
        return lead + ROWS[rid] + trail
    # Exact matches only. Partial substitution produces mixed-language copy,
    # so untranslated nodes are reported by residual_cjk().
    return s


SHARED_DIRS = ('assets/', 'css/', 'js/')


def convert_depth(html):
    """Only SHARED assets (assets/ css/ js/) live one level higher for the EN
    site. Page-to-page links keep their depth: /zh/products/x/ -> /zh/contact.html
    and /products/x/ -> /contact.html both need two '../'."""
    def fix(m):
        pre, url, post = m.group(1), m.group(2), m.group(3)
        core = url
        while core.startswith('../'):
            core = core[3:]
        if core.startswith(SHARED_DIRS) and url.startswith('../'):
            url = url[3:]
        return pre + url + post
    # src/href attributes
    html = re.sub(r'((?:href|src)=["\'])([^"\']+)(["\'])', fix, html)
    # inline style url(...)
    html = re.sub(r'(url\(["\']?)([^)"\']+)(["\']?\))', fix, html)
    return html


def rewrite_head(html, rel):
    """lang, title/meta/og, canonical + bidirectional hreflang."""
    html = re.sub(r'<html\s+lang="zh-CN"[^>]*>', '<html lang="en">', html, count=1)
    zh_url = SITE + '/zh/' + ('' if rel == 'index.html' else rel)
    en_url = SITE + '/' + ('' if rel == 'index.html' else rel)
    if rel.endswith('index.html'):
        # canonical uses directory URLs (matching existing zh convention)
        base = rel[:-len('index.html')]
        zh_url = SITE + '/zh/' + base
        en_url = SITE + '/' + base
    if rel in ALIAS_CANONICAL:
        # Alias stubs are not indexable themselves: point canonical and all
        # alternates at the real page.
        target = ALIAS_CANONICAL[rel]
        en_url = SITE + '/' + target
        zh_url = SITE + '/zh/' + target

    # Per-page title & description
    meta = META.get(rel, {})
    if meta.get('title'):
        html = re.sub(r'<title>.*?</title>', '<title>' + meta['title'] + '</title>', html, count=1, flags=re.S)
    if meta.get('description'):
        html = re.sub(r'(<meta name="description" content=")[^"]*(")',
                      lambda m: m.group(1) + meta['description'] + m.group(2), html, count=1)
        html = re.sub(r'(<meta property="og:description" content=")[^"]*(")',
                      lambda m: m.group(1) + meta['description'] + m.group(2), html, count=1)
    if meta.get('og_title'):
        html = re.sub(r'(<meta property="og:title" content=")[^"]*(")',
                      lambda m: m.group(1) + meta['og_title'] + m.group(2), html, count=1)

    # Rebuild the hreflang block from scratch: the ZH source already carries
    # en/x-default lines, and substituting only the zh-CN line duplicated them.
    canonical = '<link rel="canonical" href="' + en_url + '">'
    html = re.sub(r'<link rel="canonical" href="[^"]*">', canonical, html, count=1)
    html = re.sub(r'[ \t]*<link rel="alternate" hreflang="[^"]+" href="[^"]*">[ \t]*\n?', '', html)
    alternates = (canonical + '\n'
                  '<link rel="alternate" hreflang="en" href="' + en_url + '">\n'
                  '<link rel="alternate" hreflang="zh-CN" href="' + zh_url + '">\n'
                  '<link rel="alternate" hreflang="x-default" href="' + en_url + '">')
    html = html.replace(canonical, alternates, 1)
    # JSON-LD: only @id/url values inside ld+json need /zh/ -> /. A global
    # replace would corrupt the zh-CN alternate URL we just wrote.
    html = re.sub(r'<meta property="og:locale" content="[^"]*">',
                  '<meta property="og:locale" content="en_US">', html)
    return JSONLD_BLOCK.sub(
        lambda m: m.group(1) + m.group(2).replace('"inLanguage": "zh-CN"', '"inLanguage": "en"')
                                       .replace(SITE + '/zh/', SITE + '/') + m.group(3),
        html)


JSONLD_BLOCK = re.compile(r'(<script[^>]*application/ld\+json[^>]*>)(.*?)(</script>)', re.S | re.I)
JSONLD_SORTED = _longest_first(JSON_LD)


# JSON string literals can contain escaped quotes (e.g. 1/8\" BSP); a naive
# "([^"]*)" splits there and mis-aligns every following string, which is how
# Chinese PropertyValue names/values slipped through both translation and checks.
JSON_STR = re.compile(r'"((?:\\.|[^"\\])*)"')


def translate_jsonld(html):
    """Translate each JSON-LD string value independently so short names/descriptions
    can reuse the same worklist IDs instead of mapping whole minified blobs."""
    def fix_block(m):
        body = m.group(2)
        def fix_str(sm):
            v = sm.group(1)
            if not CJK.search(v):
                return sm.group(0)
            for src, dst in JSONLD_SORTED:
                v = v.replace(src, dst)
            out = translate_text(v, [])
            # A translation may contain a raw double quote (e.g. 1/8" to 2").
            # Escape it here or the ld+json block stops being valid JSON; this
            # is idempotent for translations that already carry \".
            out = out.replace('\\"', '"').replace('"', '\\"')
            return '"' + out + '"'
        return m.group(1) + JSON_STR.sub(fix_str, body) + m.group(3)
    return JSONLD_BLOCK.sub(fix_block, html)


# On the ZH site these two model pages hand out the Chinese L530 datasheet as
# their primary download. The EN site has a real English datasheet, so swap
# only the .model-download button (the "Chinese / English" links in the body
# stay as explicitly labelled options).
EN_DATASHEET_DOWNLOAD = {
    "products/leak-detectors/models/l520-differential-manual-regulator.html":
        "L5-Series-Datasheet-EN.pdf",
    "products/leak-detectors/models/l530-differential-electronic-regulator.html":
        "L530-Datasheet-EN.pdf",
}
MODEL_DOWNLOAD_RE = re.compile(
    r'(<a class="model-download" href="[^"]*?)L530-datasheet-zh\.pdf("[^>]*?download=")([^"]*)(")')


def apply_en_asset_fixes(html, rel):
    if rel not in EN_DATASHEET_DOWNLOAD:
        return html
    return MODEL_DOWNLOAD_RE.sub(
        lambda m: m.group(1) + 'L530-datasheet-en.pdf' + m.group(2)
                  + EN_DATASHEET_DOWNLOAD[rel] + m.group(4),
        html, count=1)


def translate_html(html, rel):
    page_map = _longest_first(PAGES.get(rel, {}))
    html = translate_jsonld(html)
    html = HTML_COMMENT.sub(
        lambda m: m.group(1) + translate_text(m.group(2), page_map) + m.group(3), html)
    html = TEXT_NODE.sub(lambda m: m.group(1) + translate_text(m.group(2), page_map) + m.group(3), html)
    html = TEXT_ATTR.sub(lambda m: m.group(1) + translate_text(m.group(2), page_map) + m.group(3), html)
    html = rewrite_head(html, rel)
    html = convert_depth(html)
    html = apply_en_asset_fixes(html, rel)
    return html


def residual_cjk(html):
    """Chinese left after translation: visible text, attribute values, and
    individual JSON-LD string values (script bodies are never treated as prose)."""
    out = []
    clean = re.sub(r'<script\b[^>]*>.*?</script>', '', html, flags=re.S | re.I)
    for m in TEXT_NODE.finditer(clean):
        s = m.group(2).strip()
        if s and CJK.search(s):
            out.append(s)
    for m in TEXT_ATTR.finditer(clean):
        s = m.group(2).strip()
        if s and CJK.search(s):
            out.append(s)
    for block in JSONLD_BLOCK.finditer(html):
        for sm in JSON_STR.finditer(block.group(2)):
            s = sm.group(1).strip()
            if s and CJK.search(s):
                out.append(s)
    for m in HTML_COMMENT.finditer(html):
        s = m.group(2).strip()
        if s and CJK.search(s):
            out.append(s)
    return out


HREF_RE = re.compile(r'(href=")([^"]+)(")')


def apply_language_fallback(html, rel):
    """Batch-2 pages (24 models, 13 articles, 5 leak resources) are published in
    Chinese only. Point those links at the matching /zh/ page instead of leaving
    a 404. Replaced automatically once batch 2 ships (targets then exist)."""
    dp = os.path.dirname(rel)
    depth = 0 if not dp else len(dp.split('/'))
    up = '../' * depth

    def fix(m):
        href = m.group(2)
        if href.startswith(('#', 'http', 'mailto:', 'tel:', 'javascript:', '//')) or '://' in href:
            return m.group(0)
        anchor = ''
        if '#' in href:
            href, tail = href.split('#', 1)
            anchor = '#' + tail
        clean = href.split('?')[0]
        if not clean:
            return m.group(0)
        tgt = os.path.normpath(os.path.join(dp, clean)).replace('\\', '/')
        if os.path.exists(os.path.join(ROOT, tgt)):
            return m.group(0)
        if os.path.exists(os.path.join(ROOT, 'zh', tgt)):
            return m.group(1) + up + 'zh/' + tgt + anchor + m.group(3)
        return m.group(0)
    return HREF_RE.sub(fix, html)


def main():
    # Fail loudly instead of silently producing half-translated pages when a
    # data module (en_translations_core.py) is missing from a fresh checkout.
    if len(COMMON) < 300 or len(ROWS) < 2600:
        print('FATAL: translation data incomplete (COMMON=%d, ROWS=%d). '
              'Check that en_translations_core.py / en_translations_rows*.py '
              'are present next to gen_en_site.py.' % (len(COMMON), len(ROWS)))
        return 1
    check_only = '--check' in sys.argv
    total_residual = 0
    report = []
    # Two passes when writing: pass 1 creates all English files, pass 2 lets
    # apply_language_fallback() see them so batch-1 links stop pointing at /zh/.
    for _ in range(1 if check_only else 2):
        total_residual = 0
        report = []
        for rel in ALL_PAGES:
            src = os.path.join(ROOT, 'zh', rel)
            dst = os.path.join(ROOT, rel)
            raw = open(src, encoding='utf-8-sig').read()
            out = apply_language_fallback(translate_html(raw, rel), rel)
            left = residual_cjk(out)
            total_residual += len(left)
            if left:
                report.append((rel, left))
            if not check_only:
                os.makedirs(os.path.dirname(dst), exist_ok=True)
                with open(dst, 'w', encoding='utf-8', newline='') as f:
                    f.write(out)
    print(('CHECK' if check_only else 'GENERATED'), len(ALL_PAGES), 'pages; residual CJK nodes:', total_residual)
    for rel, left in report:
        print('\n---', rel, '(', len(left), ')')
        for s in left[:40]:
            print('   ', s[:110])
    return 0 if total_residual == 0 else 1


if __name__ == '__main__':
    sys.exit(main())
