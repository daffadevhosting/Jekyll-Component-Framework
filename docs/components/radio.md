---
layout: docs
title: Radio
description: Radio component documentation
permalink: /docs/components/radio/
---

# Radio

Styled native radio option. Use the same `name` for mutually exclusive choices and a distinct value for each.

```liquid
{% raw %}{% include components/radio.html name="plan" value="basic" label="Basic" checked=true %}
{% include components/radio.html name="plan" value="pro" label="Pro" %}{% endraw %}
```

<div class="docs-component-example">

  {% assign radio_example = site.data.demo.radio_examples %}
  {% for option in radio_example.options %}
    {% include components/radio.html name=radio_example.name value=option.value label=option.label checked=option.checked required=option.required disabled=option.disabled %}
  {% endfor %}

</div>

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `name` | string | — | Shared form field name for the group |
| `id` | string | `name-value` | Control id |
| `value` | string | — | Submitted value |
| `label` | string | — | Visible label |
| `checked` / `required` / `disabled` | boolean | `false` | Native radio states |
| `class` | string | — | Additional classes on the label |
