---
layout: docs
title: Badge
description: Badge component documentation
permalink: /docs/components/badge/
---

# Badge

Compact label for status, category, or count information.

## Usage

```liquid
{% raw %}{% include components/badge.html
   label="New"
   variant="success"
   dot=true
%}{% endraw %}
```

<div class="docs-component-example">

  {% for badge in site.data.demo.badge_examples %}
    {% include components/badge.html label=badge.label variant=badge.variant size=badge.badge_size dot=badge.dot %}
  {% endfor %}

</div>

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `label` | string | — | Badge text |
| `variant` | string | `primary` | `primary`, `secondary`, `success`, `warning`, `danger`, `info`, `neutral` |
| `size` | string | `md` | `sm`, `md`, `lg` |
| `dot` | boolean | `false` | Shows a decorative status dot |
| `class` | string | — | Additional CSS classes |
