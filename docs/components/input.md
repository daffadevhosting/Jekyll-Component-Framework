---
layout: docs
title: Input
description: Text input component documentation
permalink: /docs/components/input/
---

# Input

Styled native input with optional label, hint, and validation error.

```liquid
{% raw %}{% include components/input.html
   name="email"
   label="Email"
   type="email"
   autocomplete="email"
   required=true
%}{% endraw %}
```

{% include components/input.html name="docs-input-email" label="Email" type="email" autocomplete="email" hint="We will only use this to contact you." %}

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `name` | string | — | Form field name |
| `id` | string | `name` | Control id and label association |
| `type` | string | `text` | Native input type |
| `label` | string | — | Visible label |
| `placeholder` | string | — | Placeholder text |
| `value` | string | — | Initial value |
| `hint` | string | — | Supporting text, hidden when an error is provided |
| `error` | string | — | Validation message and invalid state |
| `required` / `disabled` | boolean | `false` | Native control states |
| `size` | string | `md` | `sm`, `md`, `lg` |
| `autocomplete` | string | — | Native autocomplete value |
| `class` | string | — | Additional classes on the wrapper |
