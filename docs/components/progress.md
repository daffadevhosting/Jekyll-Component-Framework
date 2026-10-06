---
layout: docs
title: Progress
description: Progress bar component documentation
permalink: /docs/components/progress/
---

# Progress

Determinate and indeterminate progress bars.

## Usage

```liquid
{% raw %}{% include components/progress.html
   value=65
   label="Upload"
   show_value=true
   variant="primary"
%}{% endraw %}
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `value` | number | `0` | Current value |
| `max` | number | `100` | Maximum |
| `label` | string | — | Visible label |
| `show_value` | boolean | false | Show percentage |
| `variant` | string | `primary` | `primary` `success` `warning` `danger` `info` |
| `size` | string | `md` | `sm` `md` `lg` |
| `indeterminate` | boolean | false | Loading state |
| `class` | string | — | Extra classes |

## Example

{% include components/progress.html value=65 label="Upload progress" show_value=true %}
{% include components/progress.html value=100 variant="success" label="Complete" show_value=true %}
{% include components/progress.html indeterminate=true label="Processing..." %}

## Accessibility

Uses `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, and `aria-valuemax`. Indeterminate bars expose `aria-valuetext="Loading"`.
