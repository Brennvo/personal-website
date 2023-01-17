---
layout: layouts/default.njk
permalink: /blog/index.html
title: Brennan's Blog
---

# Brennan's Blog

<ul>
{% for post in collections.post %}
  <li>
    <a href="{{post.data.permalink}}">{{ post.data.title }}</a> - <time datetime="{{ page.date | dateTime }}">{{ post.data.date | prettyDate }}</time>
  </li>
{% endfor %}
</ul>
