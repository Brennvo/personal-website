---
layout: layouts/main.njk
permalink: /blog/index.html
title: Brennan's Blog
description: Brennan Arvo's blog
---

# Brennan's Blog

<ul>
{% for post in collections.post | reverse %}
  <li>
    <a href="{{post.data.permalink}}">{{ post.data.title }}</a> - <time datetime="{{ page.date | dateTime }}">{{ post.data.date | prettyDate }}</time>
  </li>
{% endfor %}
</ul>
