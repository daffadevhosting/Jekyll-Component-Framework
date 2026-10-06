---
layout: docs
title: Breadcrumb
description: Breadcrumb navigation component documentation
permalink: /docs/components/breadcrumb/
---

# Breadcrumb

Shows the current page's location within a hierarchy. Provide an `items` array; the last item is rendered as the current page.

```liquid
{% raw %}{% include components/breadcrumb.html items=site.data.demo.breadcrumb %}{% endraw %}
```

{% include components/breadcrumb.html items=site.data.demo.breadcrumb %}

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `items` | array | — | Entries with `label` and optional `url`; the last item is current |
| `aria_label` | string | `Breadcrumb` | Accessible navigation name |
| `class` | string | — | Additional CSS classes |
| `id` | string | — | Element id |
