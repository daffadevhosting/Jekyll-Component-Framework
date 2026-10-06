---
layout: docs
title: Components
description: Browse the Jekyll Component Framework documentation
permalink: /docs/components/
---

# Components

Browse the component documentation:

{% for group in site.data.navigation.docs %}
  {% if group.title == "Components" %}
    {% for item in group.items %}
      {% if forloop.first %}
## {{ group.title }}

<ul class="docs-component-list">
      {% endif %}
      {% unless item.url == page.url %}
  <li><a class="l-docs__nav-link" href="{{ item.url | relative_url }}">{{ item.title }}</a></li>
      {% endunless %}
      {% if forloop.last %}
</ul>
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}
