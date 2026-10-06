---
layout: docs
title: Hero Section
description: Hero marketing section documentation
permalink: /docs/sections/hero/
---

# Hero

Primary landing section with title, subtitle, actions, and optional media.

## Usage

```liquid
{% raw %}{% include sections/hero.html
   eyebrow="New release"
   title="Build faster with components"
   subtitle="A production-ready system for Jekyll."
   primary_label="Get Started"
   primary_href="/docs/"
   secondary_label="Examples"
   secondary_href="/examples/saas/"
   variant="default"
   heading_level=1
%}{% endraw %}
```

## Example

<div class="docs-component-example">

  {% assign hero_example = site.data.saas.hero %}
  {% include sections/hero.html
    eyebrow=hero_example.eyebrow
    title=hero_example.title
    subtitle=hero_example.subtitle
    primary_label=hero_example.primary_label
    primary_href=hero_example.primary_href
    secondary_label=hero_example.secondary_label
    secondary_href=hero_example.secondary_href
    variant="default"
    heading_level=2
  %}

</div>

## Parameters

| Parameter | Description |
|-----------|-------------|
| `eyebrow` | Small label above the title |
| `title` | Main heading |
| `subtitle` | Supporting text |
| `primary_label` / `primary_href` | Primary CTA |
| `secondary_label` / `secondary_href` | Secondary CTA |
| `media` / `media_alt` | Optional image |
| `variant` | `default` or `split` |
| `heading_level` | Heading level from `1` to `6`; defaults to `1` |

See live usage on the [SaaS example]({{ "/examples/saas/" | relative_url }}) and [Portfolio example]({{ "/examples/portfolio/" | relative_url }}).
