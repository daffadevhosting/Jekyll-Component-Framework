---
layout: docs
title: Design Tokens
description: Design token system documentation
permalink: /docs/tokens/
---

# Design Tokens

All visual decisions flow through CSS custom properties in `assets/scss/_tokens.scss`.

## Categories

- **Color** — brand, semantic (success/warning/danger/info), surface, text, border
- **Typography** — font families, sizes, weights, line heights
- **Spacing** — 4px-based scale (`--space-1` … `--space-24`)
- **Radius** — `--radius-sm` … `--radius-full`
- **Shadow** — xs → xl + focus ring
- **Container** — max widths for layouts
- **Z-index** — dropdown, modal, toast, etc.
- **Transition** — fast / base / slow

## Spacing utilities

Padding utilities use the spacing tokens directly. For example, `u-p-5` applies
padding on every side, `u-px-5` applies horizontal padding, and `u-py-5`
applies vertical padding. Each direction supports `0`, `1`–`6`, `8`, `10`,
`12`, `16`, `20`, and `24`.

## Overriding

```css
:root {
  --color-primary: #ff4d00;
  --color-primary-hover: #e64500;
  --radius-md: 0.5rem;
}
```

## Dark theme

Tokens are redefined under `[data-theme="dark"]` and via `prefers-color-scheme` when preference is `system`.

Never hard-code colors inside component SCSS — always use tokens so rebranding stays one change.
