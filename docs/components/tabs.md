---
layout: docs
title: Tabs
description: Tabs component documentation
permalink: /docs/components/tabs/
---

# Tabs

Tabbed interface following the WAI-ARIA Tabs pattern.

## Usage

```liquid
{% raw %}{% include components/tabs.html
   id="settings"
   items=page.tab_items
   variant="default"
%}{% endraw %}
```

Each item: `{ label, content, disabled }`.

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `id` | string | — | **Required** |
| `items` | array | — | Tab definitions |
| `variant` | string | `default` | `default` `pills` |
| `class` | string | — | Extra classes |

## Accessibility

- `role="tablist"`, `role="tab"`, `role="tabpanel"`
- Arrow keys, Home, and End move focus
- Only the active tab is in the tab order (`tabindex="0"`)
