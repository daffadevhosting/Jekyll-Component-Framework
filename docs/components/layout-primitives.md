---
layout: docs
title: Layout Primitives
description: Container, stack, grid, divider, and icon component documentation
permalink: /docs/components/layout-primitives/
---

# Layout Primitives

Reusable layout and icon components built on the framework's design tokens.

## Container

Constrains content to a responsive maximum width with built-in horizontal padding.

```liquid
{% raw %}{% include components/container.html size="lg" content=page.content %}{% endraw %}
```

Available sizes: `sm`, `md`, `lg`, `xl` (default), `2xl`, and `full`.

{% include components/container.html size="sm" content="Container example" %}

## Stack

Arranges its content vertically with a consistent gap.

```liquid
{% raw %}{% include components/stack.html size="lg" content=page.content %}{% endraw %}
```

Available sizes: `xs`, `sm`, `md` (default), `lg`, `xl`, and `2xl`.

{% include components/stack.html size="sm" content="Stack example" %}

## Grid

Creates a responsive grid. Two columns start at the medium breakpoint; three- and four-column layouts expand at their configured breakpoints.

```liquid
{% raw %}{% include components/grid.html columns=3 gap=4 content=page.content %}{% endraw %}
```

`columns` accepts `2`, `3`, or `4`. `gap` accepts spacing steps `1`, `2`, `3`, `4`, `6`, or `8`.

{% include components/grid.html columns=2 gap=4 content="Grid example" %}

## Divider

Renders a semantic horizontal rule using the framework's border tokens.

```liquid
{% raw %}{% include components/divider.html variant="subtle" %}{% endraw %}
```

Available variants: default, `subtle`, and `strong`.

{% include components/divider.html variant="subtle" %}

## Icon

Wraps the shared inline SVG include with the standard `c-icon` class.

```liquid
{% raw %}{% include components/icon.html name="arrow-right" size="1.25em" %}{% endraw %}
```

Use a supported icon name from `_includes/icon.html`. Icons are decorative and hidden from assistive technology by default.

{% include components/icon.html name="arrow-right" %}
