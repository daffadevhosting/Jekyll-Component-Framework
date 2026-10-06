---
layout: docs
title: Navbar
description: Responsive site navigation documentation
permalink: /docs/components/navbar/
---

# Navbar

Responsive site header that renders links from `site.data.navigation.main`. The mobile menu and theme toggle are included automatically.

The default layout already includes the navbar. To use it in another layout:

```liquid
{% raw %}{% include components/navbar.html
   brand="Acme"
   brand_url="/"
   elevated=true
%}{% endraw %}
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `brand` | string | `site.title` | Brand text |
| `brand_url` | string | `/` | Brand link |
| `transparent` | boolean | `false` | Applies the transparent style |
| `elevated` | boolean | `false` | Applies the elevated shadow style |
| `class` | string | — | Additional CSS classes |

## Navigation data

Define the links in `_data/navigation.yml`:

```yaml
main:
  - title: Docs
    url: /docs/
  - title: Blog
    url: /blog/
```

The component marks the current page using `page.url`. The mobile toggle exposes its expanded state and is enhanced by the navbar JavaScript module.
