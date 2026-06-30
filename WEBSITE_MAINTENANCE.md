# IndustHub Website Maintenance Guide

This site is currently a static HTML/CSS website. The later production version is expected to move into WordPress, so the static files should be treated as a visual and structure prototype.

For the planned WordPress structure, see `WORDPRESS_STRUCTURE_PLAN.md`.

## Common Files

- `index.html` / `zh/index.html`: home pages.
- `products/index.html` / `zh/products/index.html`: product center pages.
- `products/seal-connectors/`: quick seal connector category, subcategory, and model pages.
- `products/leak-detectors/`: leak detector category, model, application, and resource pages.
- `news.html` / `zh/news.html`: news and technical insights landing pages.
- `about.html`, `contact.html`, `privacy.html`, `terms.html`: company and policy pages.
- `css/style.css`: global visual style, layout, cards, product grids, nav, footer, and responsive rules.
- `assets/images/products/`: product images.
- `sitemap.xml`: public URL list for search engines.

## How to Edit Website Information

1. Identify the page that owns the content.
2. Edit the visible text inside that HTML file.
3. Keep English and Chinese pages aligned when both versions exist.
4. If you add a new public page, add it to navigation where relevant and to `sitemap.xml`.
5. If you add a new image, put it under `assets/images/` and use a relative path from the HTML file.

## How to Add a News Article Later

For now, `news.html` is a landing page with article cards. When you want full article pages, create a folder like this:

```text
news/
  connector-selection-checklist.html
  leak-test-fixture-basics.html
zh/news/
  connector-selection-checklist.html
  leak-test-fixture-basics.html
```

Then update:

- `news.html` and `zh/news.html` card links.
- `sitemap.xml` with the new URLs.
- Any footer or related resource links if needed.

## Recommended News Topics

- Connector selection checklist for threaded ports, tube ends, and filling points.
- Direct pressure vs differential pressure leak testing.
- Leak test fixture checklist and common repeatability problems.
- Liquid cooling connector selection for battery and thermal management systems.
- How to prepare a useful RFQ for custom sealing or leak testing projects.

## Before Publishing Changes

Run these checks:

```powershell
git diff --check
rg "FRESH LIGHT|BALANCED FRESH|fresh-teal" css/style.css
```

Open the main pages in a browser and check desktop and mobile widths when possible.
## 中文维护说明

这个网站现在是静态 HTML 网站，还没有后台 CMS。后续修改信息时，通常就是直接改对应的 `.html` 文件。

常见修改位置：

- 首页内容：`index.html` 和 `zh/index.html`
- 产品中心：`products/index.html` 和 `zh/products/index.html`
- 快速密封连接器：`products/seal-connectors/` 和 `zh/products/seal-connectors/`
- 检漏仪：`products/leak-detectors/` 和 `zh/products/leak-detectors/`
- 新闻/技术文章入口：`news.html` 和 `zh/news.html`
- 公司介绍、联系方式、隐私条款：根目录对应 HTML 文件
- 全站样式：`css/style.css`
- 产品图片：`assets/images/products/`
- 搜索引擎 URL 列表：`sitemap.xml`

如果以后要正式持续发新闻文章，建议从静态页面升级到以下两种方式之一：

1. 继续静态化：为每篇文章新建一个 HTML 文件，适合更新频率低的官网。
2. 接入 CMS：例如 WordPress、Headless CMS 或轻量后台，适合以后经常发文章、案例和产品更新。
