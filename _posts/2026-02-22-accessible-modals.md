---
layout: post
title: "Accessible modals without a framework"
description: "Focus trap, Escape handling, and restoring focus for dialogs in vanilla JavaScript."
category: "Accessibility"
date: 2026-02-22
permalink: /blog/accessible-modals/
breadcrumb:
  - label: Home
    url: /
  - label: Blog
    url: /examples/blog/
  - label: Accessible modals
previous_url: /blog/design-tokens/
previous_label: Design tokens
next_url: /blog/liquid-component-api/
next_label: Liquid component API
---

Modals are easy to get wrong. A usable dialog needs more than a centered box and a close button.

## Essentials

1. **`role="dialog"`** and **`aria-modal="true"`**
2. **Label** the dialog with `aria-labelledby` pointing at the title
3. **Focus** the first interactive element (or the close button) when opened
4. **Trap focus** so Tab cycles inside the dialog
5. **Escape** closes the dialog
6. **Restore focus** to the trigger that opened it
7. **Lock body scroll** while open

## Progressive enhancement

The trigger can be a plain button with `data-modal-open="id"`. The modal markup stays in the page (or is injected once). Without JavaScript, you can still link to a full page version of the same content — the JS layer only enhances the experience.

## What we ship

The framework's `modal.js` implements focus trap, Escape, backdrop click, and focus restoration. Pair it with the Liquid include for consistent markup across templates.
