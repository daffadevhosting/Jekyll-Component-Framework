---
layout: docs
title: SEO
description: Configure Thicket UI SEO metadata and structured data
permalink: /docs/seo/
---

# SEO

Thicket UI keeps `jekyll-seo-tag` as the owner of page titles, descriptions, canonical URLs, Open Graph, Twitter metadata, and its page-level JSON-LD. The shared `seo/site-schema.html` include adds the site's `Organization` JSON-LD entity without duplicating those tags.

The include is already loaded by both the default and documentation layouts. Blog posts use the default layout, so their `BlogPosting` data from `jekyll-seo-tag` remains intact.

## Configure the site identity

Update `_data/site.yml`:

```yaml
name: Thicket UI
description: Thoughtful, accessible Liquid components for Jekyll.
logo: /assets/images/thicket-mark.svg
same_as:
  - https://github.com/example
  - https://www.linkedin.com/company/example
```

`same_as` is optional. Use absolute URLs for official social or organization profiles. The logo and organization URL are emitted as absolute URLs and account for `url` and `baseurl` from `_config.yml`.

## Page-level metadata

Set a page-specific title and description in its front matter. `jekyll-seo-tag` uses these to generate page metadata and the canonical URL:

```yaml
---
title: Component Garden
description: Accessible Liquid components for distinctive Jekyll sites.
image: /assets/images/share-card.png
---
```

For pages that should not be indexed, use the plugin's `noindex: true` front matter setting.

## Validation

Build the site and inspect the generated `<head>`:

```bash
bundle exec jekyll build
```

Each rendered page should have one `Organization` JSON-LD entity from Thicket UI and one page-level JSON-LD block from `jekyll-seo-tag`. Canonical, Open Graph, Twitter, and page metadata remain managed by the plugin.
