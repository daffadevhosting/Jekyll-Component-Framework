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

<div class="docs-component-example">

  {% assign checkbox_example = site.data.demo.checkbox_example %}
  {% include components/checkbox.html name=checkbox_example.name value=checkbox_example.value label=checkbox_example.label checked=checkbox_example.checked required=checkbox_example.required disabled=checkbox_example.disabled %}

</div>

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `name` | string | — | Form field name |
| `id` | string | `name` | Control id |
| `value` | string | `on` | Submitted value |
| `label` | string | — | Visible label |
| `checked` / `required` / `disabled` | boolean | `false` | Native checkbox states |
| `class` | string | — | Additional classes on the label |
