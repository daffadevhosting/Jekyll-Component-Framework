---
layout: docs
title: Select
description: Select component documentation
permalink: /docs/components/select/
---

# Select

Styled native select with optional label, placeholder, hint, and error.

```liquid
{% raw %}{% include components/select.html
   name="plan"
   label="Plan"
   placeholder="Choose a plan"
   options=site.data.demo.select_options
   required=true
%}{% endraw %}
```

## Example

<div class="docs-component-example">

{% include components/select.html name="docs-plan" label="Plan" placeholder="Choose a plan" options=site.data.demo.select_options required=true hint="You can change your plan at any time." %}

</div>

Each option has `value`, `label`, and optional `selected` properties.

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `name` | string | — | Form field name |
| `id` | string | `name` | Control id and label association |
| `label` | string | — | Visible label |
| `placeholder` | string | — | Disabled empty option shown before a value is selected |
| `options` | array | — | Entries with `value`, `label`, optional `selected` |
| `value` | string | — | Selects the option whose value matches |
| `hint` | string | — | Supporting text |
| `error` | string | — | Validation message and invalid state |
| `required` / `disabled` | boolean | `false` | Native control states |
| `class` | string | — | Additional classes on the wrapper |
