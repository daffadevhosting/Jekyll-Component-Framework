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
%}{% endraw %}
```

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

See live usage on the [SaaS example](/examples/saas/) and [Portfolio example](/examples/portfolio/).
