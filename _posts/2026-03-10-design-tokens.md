---
layout: post
title: "Building a design token system for Jekyll"
description: "How CSS custom properties and a small token layer make rebranding and dark mode straightforward."
category: "Design Systems"
date: 2026-03-10
permalink: /blog/design-tokens/
breadcrumb:
  - label: Home
    url: /
  - label: Blog
    url: /examples/blog/
  - label: Design tokens
previous_url: /blog/progressive-enhancement/
previous_label: Progressive enhancement
next_url: /blog/accessible-modals/
next_label: Accessible modals
---

A design token system does not need a complex pipeline. For Jekyll sites, **CSS custom properties** are enough to centralize color, spacing, radius, and type scale.

## Why tokens matter

Without tokens, every component hard-codes values. Changing the brand color means hunting through dozens of SCSS files. With tokens, you change one variable:

```css
:root {
  --color-primary: #285943;
}
```

The entire framework — buttons, links, focus rings, badges — updates together.

## Dark mode

Tokens map cleanly to themes. Define a second set under `[data-theme="dark"]` and optionally resolve `system` via `prefers-color-scheme`. Persist the user choice in `localStorage` and apply it in a small inline script before paint to avoid a flash of the wrong theme.

## Practical rules

1. **Never hard-code colors** in component SCSS — always reference tokens.
2. **Keep the token list intentional** — not hundreds of unused variables.
3. **Expose overrides** so product teams can rebrand without forking components.

That is the foundation of this framework's `_tokens.scss` file.
