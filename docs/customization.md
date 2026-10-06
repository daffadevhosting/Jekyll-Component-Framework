---
layout: docs
title: Customization
description: Theming and customizing the framework
permalink: /docs/customization/
---

# Customization

## Brand colors

Override CSS custom properties:

```css
:root {
  --color-primary: #ff4d00;
  --color-primary-hover: #e64500;
  --radius-md: 0.5rem;
}
```

Place overrides in a stylesheet loaded after `main.css`, or edit `_tokens.scss`.

## Dark mode

Supported values on `<html>`:

- `data-theme="light"`
- `data-theme="dark"`
- `data-theme="system"` (resolved via `prefers-color-scheme`)

User preference is stored in `localStorage` under the key `theme`.

## Adding a component

1. Create `_includes/components/my-component.html`
2. Create `assets/scss/components/_my-component.scss`
3. Import it in `assets/css/main.scss`
4. Add JS under `assets/js/components/` if interactive
5. Document under `docs/components/`

Use the naming convention:

```text
.c-my-component
.c-my-component--variant
.c-my-component__element
```

## Creating a new template

A new commercial template typically only needs:

- Custom layouts
- Pages / content
- Branding (tokens)
- Optional extra sections

You should **not** rewrite the component library.
