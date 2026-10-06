---
layout: post
title: "Progressive enhancement for static sites"
description: "Ship HTML and CSS first; add JavaScript only where interaction requires it."
category: "Performance"
date: 2025-12-03
permalink: /blog/progressive-enhancement/
breadcrumb:
  - label: Home
    url: /
  - label: Blog
    url: /examples/blog/
  - label: Progressive enhancement
previous_url: /blog/liquid-component-api/
previous_label: Liquid component API
next_url: /blog/design-tokens/
next_label: Design tokens
---

Static sites already start strong: HTML and CSS arrive first. Progressive enhancement means interactive pieces still make sense if JavaScript fails or is slow.

## What does not need JS

- Buttons and links
- Cards, badges, alerts
- Forms (native validation)
- Layout and typography

## What does

- Accordion / tabs state
- Modal open/close and focus management
- Dropdown menus
- Theme preference persistence
- Toast notifications
- Copy-to-clipboard on code blocks

Each of those modules is optional. Pages that never include a modal never pay for modal behavior beyond a few bytes of the shared entry file — and even then, initialization is a no-op when no matching DOM exists.

## Reduced motion

Respect `prefers-reduced-motion`. Decorative animations should disable or simplify; essential feedback (like focus) should remain.
