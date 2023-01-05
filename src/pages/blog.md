---
layout: layouts/base.njk
permalink: /blog/index.html
title: Brennan's Blog
---

# Brennan's Blog

<ul>
{% for post in collections.post %}
  <li>
    <a href="{{post.data.permalink}}">{{ post.data.title }} : {{ post.data.date | formatDate }}</a>
  </li>
{% endfor %}
</ul>
