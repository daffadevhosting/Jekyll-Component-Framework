---
layout: docs
title: Modal
description: Modal dialog component documentation
permalink: /docs/components/modal/
---

# Modal

Accessible dialog with focus trap, Escape to close, and focus restoration.

## Usage

```liquid
{% raw %}{% include components/modal.html
   id="confirm-modal"
   title="Confirm action"
   body="Are you sure you want to continue?"
   size="md"
%}{% endraw %}
```

Trigger:

```html
<button type="button" data-modal-open="confirm-modal">Open</button>
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `id` | string | — | **Required.** Unique modal id |
| `title` | string | — | Dialog title |
| `body` | string | — | Body HTML |
| `footer` | string | — | Footer actions HTML |
| `size` | string | `md` | `sm` `md` `lg` `xl` |
| `class` | string | — | Extra classes on dialog |

## Accessibility

- `role="dialog"` + `aria-modal="true"`
- `aria-labelledby` on the title
- Focus moves into the dialog on open
- Tab cycles inside the dialog
- Escape and backdrop click close
- Focus returns to the trigger

## Example

<button type="button" class="c-button c-button--primary c-button--md" data-modal-open="docs-modal">Open demo modal</button>

{% include components/modal.html
  id="docs-modal"
  title="Demo modal"
  body="This modal demonstrates focus management and Escape handling."
  footer='<button type="button" class="c-button c-button--ghost c-button--md" data-modal-close>Close</button>'
%}
