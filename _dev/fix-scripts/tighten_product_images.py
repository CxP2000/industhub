#!/usr/bin/env python3
"""Make product photos fill their 1:1 gallery cards.

Most catalog renders are 1000x1000 with the product covering only 50-75% of
the longest side, so they look tiny in .visual-family-gallery-3 cards. This
script crops a centred square around the non-white content (18% padding) and
writes a NEW "<stem>-tight.<ext>" file; originals are never modified.

Only model pages are repointed at the tight files, so category cards, the
product hub and the homepage keep their original composition.

Usage:  python3 tighten_product_images.py --dry-run | --apply
"""
import os
import re
import sys
from PIL import Image, ImageChops

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import gen_en_site as g

PAD = 1.18          # keep 18% breathing room around the product
OUT = 1000          # output square size
MIN_SOURCE = 600    # ignore thumbnails
MIN_GAIN = 1.15     # require >=15% relative gain in product/canvas ratio

IMG_EXT = ('.jpg', '.jpeg', '.png')


def collect_model_images():
    imgs = set()
    for rel in g.ALL_PAGES:
        if '/models/' not in rel:
            continue
        d = open(os.path.join(ROOT, 'zh', rel), encoding='utf-8-sig').read()
        for src in re.findall(r'<img[^>]+src="([^"]+)"', d):
            if 'assets/images/products/' in src and '-tight' not in src:
                imgs.add(os.path.normpath(os.path.join(ROOT, 'zh', os.path.dirname(rel), src)))
    return sorted(imgs)


def content_bbox(path):
    """Return (square_side, bbox, rgb_image) or None when the image should be
    left alone (thumbnail, non-white background, or already full)."""
    im0 = Image.open(path)
    if max(im0.size) < MIN_SOURCE:
        return None
    transparent = im0.mode in ('RGBA', 'LA') or 'transparency' in im0.info
    if transparent:
        # Composite onto white first. Using the alpha channel directly would
        # report the whole canvas when the PNG has an opaque white background
        # (e.g. g72k-product.png), so the product would never be cropped.
        rgba = im0.convert('RGBA')
        im = Image.new('RGB', im0.size, (255, 255, 255))
        im.paste(rgba, mask=rgba.getchannel('A'))
    else:
        im = im0.convert('RGB')
    diff = ImageChops.difference(im, Image.new('RGB', im.size, (255, 255, 255))).convert('L')
    bbox = diff.point(lambda x: 255 if x > 28 else 0).getbbox()
    px = im.load()
    w, h = im.size
    corners = [px[2, 2], px[w - 3, 2], px[2, h - 3], px[w - 3, h - 3]]
    if not all(min(c) > 238 for c in corners):
        return None
    if not bbox:
        return None
    w, h = im.size
    bw, bh = bbox[2] - bbox[0], bbox[3] - bbox[1]
    side = min(min(w, h), int(max(bw, bh) * PAD))
    # Compare how much of the frame the product fills before vs after the
    # crop. Works for both square renders and wide/transparent originals.
    before = max(bw, bh) / max(w, h)
    after = max(bw, bh) / side
    if after < before * MIN_GAIN:
        return None
    return side, bbox, im


def tight_path(path):
    stem, ext = os.path.splitext(path)
    return stem + '-tight' + ext


def crop_one(path, dry):
    r = content_bbox(path)
    if not r:
        return None
    side, bbox, im = r
    cx = (bbox[0] + bbox[2]) / 2
    cy = (bbox[1] + bbox[3]) / 2
    left = int(cx - side / 2)
    top = int(cy - side / 2)
    # If the crop window falls outside the canvas, pad with white instead of
    # shifting the product off-centre.
    canvas = Image.new('RGB', (side, side), (255, 255, 255))
    src_box = (max(0, left), max(0, top), min(im.width, left + side), min(im.height, top + side))
    if src_box[2] > src_box[0] and src_box[3] > src_box[1]:
        piece = im.crop(src_box)
        canvas.paste(piece, (src_box[0] - left, src_box[1] - top))
    out = canvas.resize((OUT, OUT), Image.LANCZOS)
    dst = tight_path(path)
    if not dry:
        if dst.lower().endswith('.png'):
            out.save(dst, 'PNG', optimize=True)
        else:
            out.save(dst, 'JPEG', quality=92, optimize=True)
    return dst


def main():
    dry = '--dry-run' in sys.argv
    files = collect_model_images()
    made = []
    for p in files:
        dst = crop_one(p, dry)
        if dst:
            made.append((p, dst))
    print(('DRY-RUN' if dry else 'APPLIED'), '| model images:', len(files),
          '| tight images to create:', len(made))
    for src, dst in made[:8]:
        print('  ', os.path.relpath(src, ROOT), '->', os.path.basename(dst))
    if dry:
        return

    # Repoint ONLY model pages (ZH source). EN pages are regenerated afterwards.
    # Key by the full resolved path: many folders contain a "1.jpg", so a
    # basename map would wrongly rewrite unrelated images.
    tight_map = {os.path.normpath(src): os.path.basename(dst) for src, dst in made}
    # Folder names can contain spaces ("G10 pro", "G15 Pro"), so do not use \s
    # as a boundary here.
    ASSET_URL = re.compile(r'((?:\.\./)+assets/images/products/[^"\'<>]+?\.(?:jpg|jpeg|png))')
    changed = 0
    for rel in g.ALL_PAGES:
        if '/models/' not in rel:
            continue
        p = os.path.join(ROOT, 'zh', rel)
        d = open(p, encoding='utf-8-sig').read()

        def repl(m):
            url = m.group(1)
            if '-tight' in url:
                return url
            target = os.path.normpath(os.path.join(os.path.dirname(p), url))
            if target in tight_map:
                return url.rsplit('/', 1)[0] + '/' + tight_map[target]
            return url

        new = ASSET_URL.sub(repl, d)
        if new != d:
            open(p, 'w', encoding='utf-8').write(new)
            changed += 1
    print('ZH model pages repointed:', changed)


if __name__ == '__main__':
    main()
