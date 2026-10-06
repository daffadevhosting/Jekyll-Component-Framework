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
   src="/assets/images/avatar-jane.jpg"
   alt="Jane Doe"
   size="lg"
   status="online"
%}{% endraw %}
```

### Profile photos

<div class="avatar-examples">

{% include components/avatar.html src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&h=128&q=80" alt="Portrait of a woman" size="lg" status="online" %}
{% include components/avatar.html src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=128&h=128&q=80" alt="Portrait of a man" shape="square" size="lg" %}

</div>

### Initials fallback

<div class="avatar-examples">

{% include components/avatar.html initials="JD" size="lg" status="online" %}
{% include components/avatar.html initials="AB" shape="square" size="lg" %}

</div>

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
