---
layout: layouts/base.njk
permalink: /old/index.html
title: Brennan's Website
---

# A website for Brennan, created by Brennan.

<section class="chalkboard" aria-live="polite">
  <h2 class="text--md chalkboard__text chalkboard__title">
    Joke of the day!
  </h2>
  <button class="tooltip-btn" onclick="alert('One of my favorite things about my neighborhood in Austin is the person who writes a new joke on a chalkboard under their mailbox each day. \n\nSince I don\'t yet own a home, this is my version of it. Please note: the jokes presented here are not my own. They are served from a publicly curated list.')">?</button>
  <div id="chalkboard-content">
    <details>
      <summary>{{ joke.setup }}</summary>
      <span class="chalkboard__joke-pun">{{ joke.delivery }}</span>
    </details>
  </div>
  <div class="chalk"></div>
  <div class="eraser"></div>
</section>
