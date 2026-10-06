---
layout: docs
title: Button
description: Button component documentation
permalink: /docs/components/button/
---

# Button

Primary action component. Renders as `<button>` or `<a>` depending on `href`.

## Usage

```liquid
{% raw %}{% include components/button.html
   label="Get Started"
   href="/pricing/"
   variant="primary"
   size="lg"
%}{% endraw %}
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `label` | string | — | Button text |
| `href` | string | — | If set, renders as link |
| `variant` | string | `primary` | `primary` `secondary` `outline` `ghost` `danger` `success` |
| `size` | string | `md` | `sm` `md` `lg` |
| `type` | string | `button` | `button` `submit` `reset` |
| `disabled` | boolean | false | Disabled state |
| `icon` | string | — | Icon name |
| `icon_position` | string | `left` | `left` `right` |
| `icon_only` | boolean | false | Icon-only button |
| `block` | boolean | false | Full width |
| `class` | string | — | Extra classes |
| `id` | string | — | Element id |
| `aria_label` | string | — | Accessible label |

## Variants

<div class="u-flex u-gap-3 u-flex-wrap u-mb-6">
{% include components/button.html label="Primary" variant="primary" %}
{% include components/button.html label="Secondary" variant="secondary" %}
{% include components/button.html label="Outline" variant="outline" %}
{% include components/button.html label="Ghost" variant="ghost" %}
{% include components/button.html label="Danger" variant="danger" %}
{% include components/button.html label="Success" variant="success" %}
</div>

## Accessibility

- Uses native `<button>` or `<a role="button">`
- Visible focus ring via `:focus-visible`
- `disabled` / `aria-disabled` supported
- Icon-only buttons require `aria_label` or `label`
