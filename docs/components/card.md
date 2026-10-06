---
layout: docs
title: Card
description: Card component documentation
permalink: /docs/components/card/
---

# Card

Container for grouped content — title, body, media, and footer.

## Usage

```liquid
{% raw %}{% include components/card.html
   title="Feature"
   subtitle="Optional subtitle"
   body="Description text goes here."
   elevated=true
   hoverable=true
%}{% endraw %}
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `title` | string | Card heading |
| `subtitle` | string | Secondary text under title |
| `body` | string | Main content (HTML allowed) |
| `footer` | string | Footer content |
| `media` | string | Image URL |
| `media_alt` | string | Image alt text |
| `hoverable` | boolean | Elevate on hover |
| `elevated` | boolean | Stronger shadow |
| `borderless` | boolean | No border |
| `class` | string | Extra classes |
| `id` | string | Element id |

## Example

<div class="l-grid l-grid--cols-2 u-mb-6">
{% include components/card.html title="Elevated" body="Card with elevated shadow." elevated=true %}
{% include components/card.html title="Hoverable" body="Hover to see the effect." hoverable=true %}
</div>

## Accessibility

Uses `<article>` semantics. Provide meaningful titles. Decorative images should use empty `alt`.
