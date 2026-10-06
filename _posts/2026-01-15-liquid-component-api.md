---
layout: post
title: "Why Liquid component APIs beat copy-paste HTML"
description: "A consistent include API keeps commercial templates maintainable."
category: "Architecture"
date: 2026-01-15
permalink: /blog/liquid-component-api/
breadcrumb:
  - label: Home
    url: /
  - label: Blog
    url: /examples/blog/
  - label: Liquid component API
previous_url: /blog/accessible-modals/
previous_label: Accessible modals
next_url: /blog/progressive-enhancement/
next_label: Progressive enhancement
---

Copy-pasting button markup across twenty pages works until you need a new variant or an accessibility fix. Then you hunt through the whole site.

## A predictable API

```liquid
{% raw %}{% include components/button.html
   label="Get Started"
   href="/pricing/"
   variant="primary"
   size="lg"
%}{% endraw %}
```

Every component in this framework follows the same ideas:

- Named parameters with sensible defaults
- Optional parameters never emit invalid HTML
- Variants and sizes as explicit strings
- Extra `class` / `id` / `aria_label` when needed

## Commercial templates

When the framework is the base for SaaS, Agency, and Portfolio themes, the template author should mostly write **layouts, pages, and content** — not rewrite buttons and modals. That is only possible if the component API is stable and documented.
