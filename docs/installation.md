---
layout: docs
title: Installation
description: Install and run Jekyll Component Framework
permalink: /docs/installation/
---

# Installation

## Clone & install

```bash
git clone <repo-url> jekyll-component-framework
cd jekyll-component-framework
bundle install
```

## Development server

```bash
bundle exec jekyll serve
```

## Production build

```bash
bundle exec jekyll build
```

Output is written to `_site/`.

## Configuration

Edit `_config.yml`:

```yaml
title: Your Site Name
url: https://example.com
baseurl: ""

theme_config:
  primary_color: "#6366f1"
  dark_mode: true
  default_theme: "system"
```

Brand colors are primarily controlled via CSS variables in `assets/scss/_tokens.scss` or your own override stylesheet.
