---
layout: docs
title: Dropdown
description: Dropdown menu component documentation
permalink: /docs/components/dropdown/
---

# Dropdown

Accessible button-triggered menu. JavaScript handles toggle, keyboard interaction, and dismissing the menu.

```liquid
{% raw %}{% include components/dropdown.html
   id="account-menu"
   label="Account"
   items=site.data.demo.dropdown_items
   align="right"
%}{% endraw %}
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `id` | string | — | Required unique id for trigger and menu |
| `label` | string | — | Trigger button text |
| `variant` | string | `outline` | Button variant |
| `size` | string | `md` | Button size: `sm`, `md`, `lg` |
| `items` | array | — | Menu entries described below |
| `align` | string | `left` | `left` or `right` |
| `class` | string | — | Additional CSS classes |

Each item may have `label`, `href`, `danger`, `disabled`, `divider`, or `label_only`. An item with an `href` becomes a link; otherwise it becomes a button.

```yaml
dropdown_items:
  - label: Profile
    href: /profile/
  - divider: true
  - label: Sign out
    danger: true
```
