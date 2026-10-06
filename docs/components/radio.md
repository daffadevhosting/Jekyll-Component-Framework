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

{% include components/radio.html name="docs-plan" value="basic" label="Basic" checked=true %}
{% include components/radio.html name="docs-plan" value="pro" label="Pro" %}

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `name` | string | — | Shared form field name for the group |
| `id` | string | `name-value` | Control id |
| `value` | string | — | Submitted value |
| `label` | string | — | Visible label |
| `checked` / `required` / `disabled` | boolean | `false` | Native radio states |
| `class` | string | — | Additional classes on the label |
