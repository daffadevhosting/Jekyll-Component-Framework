---
layout: docs
title: Components
description: Component library overview for Jekyll Component Framework
permalink: /docs/components/
---

# Components

All UI primitives ship as Liquid includes under `_includes/components/`.

## Start here

- [Button]({{ "/docs/components/button/" | relative_url }})
- [Card]({{ "/docs/components/card/" | relative_url }})
- [Form controls]({{ "/docs/components/forms/" | relative_url }})
- [Modal]({{ "/docs/components/modal/" | relative_url }})
- [Navbar]({{ "/docs/components/navbar/" | relative_url }})

## Full list

Use the sidebar for the complete catalog (actions, content, forms, feedback, and navigation).

## Usage pattern

```liquid
{% raw %}{% include components/button.html
   label="Get Started"
   href="/docs/"
   variant="primary"
%}{% endraw %}
```

Paths passed to `href` are processed with `relative_url`, so the site works with a `baseurl` (for example GitHub Pages project sites).
