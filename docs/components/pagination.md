---
layout: docs
title: Pagination
description: Pagination component documentation
permalink: /docs/components/pagination/
---

# Pagination

Provides previous/next links and a compact range of page links. It renders only when `total` is greater than one.

```liquid
{% raw %}{% include components/pagination.html
   current=3
   total=8
   base_url="/blog"
%}{% endraw %}
```

{% include components/pagination.html current=3 total=8 base_url="/blog" %}

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `current` | number | `1` | Current page, one-based |
| `total` | number | `1` | Total page count |
| `base_url` | string | — | Base path; page one uses the base path and later pages use `/page/N/` |
| `size` | string | `md` | `sm`, `md`, `lg` |
| `aria_label` | string | `Pagination` | Accessible navigation name |
| `class` | string | — | Additional CSS classes |

For Jekyll pagination, pass `paginator.page` and `paginator.total_pages`.
