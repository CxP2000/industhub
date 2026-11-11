#!/usr/bin/env python3
"""Build a clean uploadable ZIP of the bilingual static site.

Layout inside the archive mirrors the site root:
  index.html / products/ / resources/ / ...  -> English site (site root)
  zh/                                       -> Chinese site
  assets/ css/ js/                          -> shared static resources
  robots.txt sitemap.xml .nojekyll

Excluded on purpose: _dev/, .git/, .workbuddy/, wordpress-theme/ and any
older delivery zip. Re-running overwrites the output atomically.
"""
import os
import zipfile

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
OUT = os.path.join(ROOT, 'industhub-site-zh-en-20261111.zip')
INCLUDE_DIRS = ['assets', 'css', 'js', 'products', 'resources', 'zh']
INCLUDE_FILES = ['404.html', 'about.html', 'contact.html', 'index.html',
                 'news.html', 'robots.txt', 'sitemap.xml', '.nojekyll',
                 'CHANGELOG.md', '.gitignore']
# Shared content toolchain, so a collaborator using web upload (no git clone)
# can still run the update workflow documented in CHANGELOG.md.
TOOLCHAIN = [
    '_dev/en_worklist.tsv',
    '_dev/fix-scripts/gen_en_site.py',
    '_dev/fix-scripts/en_translations.py',
    '_dev/fix-scripts/en_translations_core.py',
    '_dev/fix-scripts/en_translations_rows.py',
    '_dev/fix-scripts/en_translations_rows2.py',
    '_dev/fix-scripts/sync_resources.py',
    '_dev/fix-scripts/tighten_product_images.py',
    '_dev/fix-scripts/build_delivery_zip.py',
]
SKIP_DIRS = {'.git', '_dev', '__pycache__', '.workbuddy', 'wordpress-theme'}


def main():
    tmp = OUT + '.tmp'
    z = zipfile.ZipFile(tmp, 'w', zipfile.ZIP_DEFLATED, compresslevel=6)
    count = 0
    raw = 0
    for d in INCLUDE_DIRS:
        for dp, dns, fns in os.walk(os.path.join(ROOT, d)):
            dns[:] = [x for x in dns if x not in SKIP_DIRS]
            for f in fns:
                if f.endswith('.pyc'):
                    continue
                p = os.path.join(dp, f)
                arc = os.path.relpath(p, ROOT).replace(os.sep, '/')
                z.write(p, arc)
                count += 1
                raw += os.path.getsize(p)
    for f in INCLUDE_FILES + TOOLCHAIN:
        p = os.path.join(ROOT, f)
        if os.path.isfile(p):
            z.write(p, f)
            count += 1
            raw += os.path.getsize(p)
    z.close()
    os.replace(tmp, OUT)
    print('wrote', os.path.basename(OUT))
    print('  files:', count, '| raw bytes:', raw, '| zip bytes:', os.path.getsize(OUT))


if __name__ == '__main__':
    main()
