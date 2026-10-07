---
layout: docs
title: Offcanvas
description: Accessible offcanvas side panel component
permalink: /docs/components/offcanvas/
---

# Offcanvas

An accessible side panel that slides in from the left or right. It traps keyboard focus while open and closes with Escape or a backdrop click.

## Usage

Add a trigger and the panel to the page:

```liquid
{% raw %}{% include components/button.html
   label="Open navigation"
   variant="outline"
   offcanvas_open="site-navigation"
%}

{% include components/offcanvas.html
   id="site-navigation"
   title="Navigation"
   position="left"
   content="<nav><a href='/docs/'>Documentation</a></nav>"
%}{% endraw %}
```

The `offcanvas_open` button parameter adds the trigger attributes and keeps `aria-expanded` in sync as the panel opens and closes. For a custom trigger, use `data-offcanvas-open="site-navigation"` on a button.

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `id` | string | — | **Required.** Unique panel id, matched by the trigger |
| `title` | string | — | Panel title, used by `aria-labelledby` |
| `position` | string | `right` | Panel placement: `left` or `right` |
| `content` | string | — | Panel body HTML |
| `footer` | string | — | Optional footer actions HTML |
| `class` | string | — | Extra classes on the panel |

## Accessibility

- Uses `role="dialog"`, `aria-modal="true"`, and a labelled title.
- Moves focus into the panel and traps Tab navigation until the panel closes.
- Escape, the close button, and clicking the backdrop close the panel.
- Restores focus to the trigger and prevents background scrolling while open.
- Respects the user's reduced-motion preference.

## Example

<div class="docs-component-example">

  {% include components/button.html label="Open panel" offcanvas_open="docs-offcanvas-example" %}
  {% capture offcanvas_content %}<p>This panel can contain navigation, filters, or other supporting content.</p>{% endcapture %}
  {% include components/offcanvas.html id="docs-offcanvas-example" title="Example panel" position="right" content=offcanvas_content %}

</div>
