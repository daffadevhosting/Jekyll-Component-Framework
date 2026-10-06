---
layout: docs
title: Textarea
description: Textarea component documentation
permalink: /docs/components/textarea/
---

# Textarea

Styled multiline text control with an associated label and optional hint or validation error.

```liquid
{% raw %}{% include components/textarea.html
   name="message"
   label="Message"
   rows=5
   required=true
%}{% endraw %}
```

{% include components/textarea.html name="docs-textarea-message" label="Message" rows=5 placeholder="How can we help?" hint="Please do not include sensitive information." %}

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `name` | string | — | Form field name |
| `id` | string | `name` | Control id and label association |
| `label` | string | — | Visible label |
| `rows` | number | `4` | Visible text rows |
| `placeholder` | string | — | Placeholder text |
| `value` | string | — | Initial content |
| `hint` | string | — | Supporting text |
| `error` | string | — | Validation message |
| `required` / `disabled` | boolean | `false` | Native control states |
| `class` | string | — | Additional classes on the wrapper |
