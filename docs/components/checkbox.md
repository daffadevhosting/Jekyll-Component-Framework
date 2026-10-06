---
layout: docs
title: Checkbox
description: Checkbox component documentation
permalink: /docs/components/checkbox/
---

# Checkbox

Styled native checkbox with an associated text label.

```liquid
{% raw %}{% include components/checkbox.html
   name="terms"
   value="accepted"
   label="I agree to the terms"
   required=true
%}{% endraw %}
```

{% include components/checkbox.html name="docs-checkbox" value="accepted" label="I agree to the terms" %}

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `name` | string | — | Form field name |
| `id` | string | `name` | Control id |
| `value` | string | `on` | Submitted value |
| `label` | string | — | Visible label |
| `checked` / `required` / `disabled` | boolean | `false` | Native checkbox states |
| `class` | string | — | Additional classes on the label |
