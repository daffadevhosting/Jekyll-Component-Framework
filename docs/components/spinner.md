---
layout: docs
title: Spinner
description: Loading spinner component documentation
permalink: /docs/components/spinner/
---

# Spinner

Lightweight loading indicator.

## Usage

```liquid
{% raw %}{% include components/spinner.html size="md" label="Loading" %}{% endraw %}
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `size` | string | `md` | `sm` `md` `lg` |
| `variant` | string | `primary` | `primary` `secondary` `inverse` |
| `label` | string | `Loading` | Accessible name |
| `block` | boolean | false | Center as block |
| `class` | string | — | Extra classes |

## Example

<div class="u-flex u-gap-4 u-items-center u-mb-6">
{% include components/spinner.html size="sm" %}
{% include components/spinner.html size="md" %}
{% include components/spinner.html size="lg" %}
</div>

## Accessibility

Uses `role="status"` and `aria-label`. Respects `prefers-reduced-motion` (slower spin).
