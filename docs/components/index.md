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

{% for group in site.data.navigation.docs %}
  {% if group.title == "Components" %}
    {% for item in group.items %}
      {% unless item.url == page.url %}
- [{{ item.title }}]({{ item.url | relative_url }})
      {% endunless %}
    {% endfor %}
  {% endif %}
{% endfor %}

## Usage pattern

```liquid
{% raw %}{% include components/button.html
   label="Get Started"
   href="/docs/"
   variant="primary"
%}{% endraw %}
```

Paths passed to `href` are processed with `relative_url`, so the site works with a `baseurl` (for example GitHub Pages project sites).
