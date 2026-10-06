---
layout: docs
title: Avatar
description: Avatar component documentation
permalink: /docs/components/avatar/
---

# Avatar

Displays a profile image, initials, or the default user icon. An optional status indicator can communicate presence.

## Usage

```liquid
{% raw %}{% include components/avatar.html
   initials="JD"
   size="lg"
   status="online"
%}{% endraw %}
```

{% include components/avatar.html initials="JD" size="lg" status="online" %}
{% include components/avatar.html initials="AB" shape="square" size="lg" %}

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `src` | string | — | Image URL; processed with Jekyll `relative_url` |
| `alt` | string | — | Accessible name for the avatar |
| `initials` | string | — | Fallback text, limited to two uppercase characters |
| `size` | string | `md` | `xs`, `sm`, `md`, `lg`, `xl` |
| `shape` | string | `circle` | `circle` or `square` |
| `status` | string | — | `online`, `offline`, `busy`, or `away` |
| `class` | string | — | Additional CSS classes |
| `id` | string | — | Element id |
