# Product Source Structure

This folder is organized by product line so future categories do not pile up in one flat `products` directory.

## Current layout

- `index.html` is the main product center.
- `seal-connectors/` is the Quick Seal Connectors product line.
- `seal-connectors/index.html` is the large connector category page.
- `seal-connectors/categories/` contains connector subcategory pages, such as threaded, cooling water pipes, and fuel pipes.
- `seal-connectors/models/` contains detailed model or series pages, such as G10, G10 Pro, G10D, G15, G15 Pro, G15K, G60, G80, and G85.
- `leak-detectors/` is the Leak Detection Systems product line.
- `legacy/` stores old compatibility redirect pages that were moved out of the root product folder.
- Keep real content inside product-line folders. Use `legacy/` only when an old URL redirect needs to be preserved as backup.

## How to add future product lines

Create a new folder under `products/`, for example:

```text
products/coding-marking/
  index.html
  categories/
  models/
```

Keep the product center links pointing to `products/coding-marking/`. Put broad category pages in `categories/` and detailed model pages in `models/`.
