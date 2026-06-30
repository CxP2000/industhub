# IndustHub WordPress Structure Plan

This document defines the recommended WordPress structure before the site is rebuilt or migrated into WordPress. The goal is to keep the website organized, scalable, and easy to maintain from the WordPress admin panel.

## 1. Main Navigation

Recommended top menu:

```text
Home
Products
  Quick Seal Connectors
  Leak Detectors
  Liquid Cooling Connectors
News
About
Contact
Get Quote
```

Chinese menu:

```text
首页
产品
  快速密封连接器
  检漏仪
  液冷接头
新闻
关于
联系
获取报价
```

Notes:

- Keep `Products` for catalog and model pages.
- Keep application and resource entries inside the relevant product family pages instead of putting them in the top navigation.
- Use `News` for company updates and occasional product-line updates.
- For SEO and GEO, technical content can still exist as resource-style posts in WordPress, but it should be surfaced through product pages and internal links rather than a crowded top menu.

Static prototype pages now matching this structure:

```text
/products/index.html
/news.html
/zh/products/index.html
/zh/news.html
```

## 2. WordPress Page Types

Use a mix of standard Pages, Posts, and Custom Post Types.

### Standard Pages

```text
/
/products/
/news/
/about/
/contact/
/privacy-policy/
/terms/
```

Chinese equivalents:

```text
/zh/
/zh/products/
/zh/news/
/zh/about/
/zh/contact/
```

### Custom Post Type: Products

Recommended custom post type:

```text
product
```

Recommended product URLs:

```text
/products/quick-seal-connectors/g10-cooling-water-pipe-connector/
/products/quick-seal-connectors/g20a-liquid-cooling-connector/
/products/leak-detectors/l530-differential-electronic-regulator/
```

Recommended product taxonomies:

```text
Product Family
  Quick Seal Connectors
  Leak Detectors
  Liquid Cooling Connectors

Product Application
  Automotive EV
  Battery Thermal
  HVAC
  Medical Devices
  Packaging
  Industrial Valves

Interface Type
  Threaded
  Straight Tube
  Flared Tube
  Fuel Pipe
  Cooling Water Pipe
  Gas Cylinder Filling
```

### Resource-Style Content

Resource-style content can be created as posts, pages, or a custom post type later, but it should not be exposed as a crowded top navigation item at launch.

Possible custom post type:

```text
resource
```

Recommended resource URLs if a resource content type is added later:

```text
/products/leak-detectors/resources/direct-vs-differential-pressure-testing/
/products/leak-detectors/resources/leak-test-fixture-checklist/
/products/seal-connectors/resources/connector-inquiry-checklist/
/products/seal-connectors/resources/liquid-cooling-connector-selection/
```

Recommended resource categories:

```text
Selection Guides
Application Notes
Technical Basics
RFQ Checklists
Downloads
```

### Standard Posts: News

Use WordPress Posts for real company updates only:

```text
/news/product-line-update-2026/
/news/industhub-website-launch/
/news/exhibition-update/
```

Avoid putting all SEO technical content under News. For B2B industrial websites, resource-style content should usually sit under the relevant product family and be linked from the product catalog.

## 3. Recommended URL Structure

Preferred English structure:

```text
/products/
/products/quick-seal-connectors/
/products/quick-seal-connectors/threaded/
/products/quick-seal-connectors/g85-high-pressure-external-thread/
/products/leak-detectors/
/products/leak-detectors/l530-differential-electronic-regulator/
/news/
/about/
/contact/
```

Preferred Chinese structure:

```text
/zh/products/
/zh/products/quick-seal-connectors/
/zh/products/leak-detectors/
/zh/news/
/zh/about/
/zh/contact/
```

Important:

- Do not use `.html` URLs in WordPress if starting fresh.
- Use clean trailing-slash URLs.
- Set 301 redirects from current static `.html` URLs to future WordPress URLs when launching.

## 4. Product Page Fields

In WordPress, each product should have structured fields. Use ACF or a similar custom fields plugin.

Recommended fields:

```text
Product model
Product family
Short description
Hero image
Gallery images
Typical application
Interface type
Pressure range
Media
Operation mode
Material
Seal material
Selection notes
Related products
Related resources
CTA text
```

Leak detector extra fields:

```text
Test method
Pressure regulation method
Channels
Sensor range
Valve configuration
Data / integration notes
```

Connector extra fields:

```text
Connection type
Sealing position
Actuation method
Typical interface
Automation suitability
```

## 5. Resource Page Fields

Recommended fields:

```text
Resource type
Target buyer question
Related product family
Related applications
Summary answer
Key points
FAQ
CTA
Download file
```

This structure helps future SEO and GEO because every article has a clear question, answer, related product, and next action.

## 6. Homepage Structure

Recommended homepage sections:

```text
Hero
  Clear positioning
  Main product routes
  Quote CTA

Product Routes
  Quick Seal Connectors
  Leak Detectors
  Liquid Cooling Connectors
  Future Industrial Equipment

Application Entry
  Automotive EV
  Battery Thermal
  HVAC
  Medical Devices
  Packaging
  Industrial Parts

Why IndustHub
  Selection support
  Industrial application experience
  Product + engineering support

Product Resources Preview
  3 latest product-related resources

CTA
  Send drawing / Request quote
```

## 7. WordPress Admin Workflow

Suggested workflow after launch:

1. Add product families first.
2. Add product models with images and structured fields.
3. Add application pages.
4. Add resource pages for selection and technical questions.
5. Add occasional news posts.
6. Update menus and internal links.
7. Submit sitemap in Google Search Console and Bing Webmaster Tools.

## 8. Recommended Plugins

Use only what is necessary.

```text
SEO: Rank Math or Yoast SEO
Custom fields: Advanced Custom Fields
Forms: Fluent Forms, WPForms, or Contact Form 7
Multilingual: WPML, Polylang, or TranslatePress
Caching: LiteSpeed Cache if the server supports it
Security: Wordfence or equivalent
Redirects: Redirection
```

## 9. Migration Notes

Current static site URLs should be mapped to clean WordPress URLs.

Examples:

```text
/products/seal-connectors/index.html
-> /products/quick-seal-connectors/

/products/seal-connectors/categories/liquid-cooling.html
-> /products/quick-seal-connectors/liquid-cooling/

/products/leak-detectors/resources/direct-vs-differential-pressure-testing.html
-> /products/leak-detectors/resources/direct-vs-differential-pressure-testing/

/news.html
-> /news/

/contact.html
-> /contact/
```

Create 301 redirects during launch so existing links and search signals are not wasted.
