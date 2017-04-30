---
layout: page
title: dylanon's indie blog
permalink: /blog
---

<ul class="blog-list">
  {% for post in site.posts %}
    <li>
      {% if post.categories contains 'longform' %}
      	<a href="{{ post.url }}"><h2>{{ post.title }}</h2></a>
      	{{ post.excerpt }}
      	<small>{{ post.date | date: "%B %e, %Y" }}</small>
      	<small class="timestamp"><a href="{{ post.url }}">Read more &rarr;</a></small>
      {% else %}
      	{{ post.content }}
      	<small class="timestamp"><a href="{{ post.url }}">{{ post.date | date: "%B %e, %Y at %l:%M%P" }}</a></small>
      {% endif %}
    </li>
  {% endfor %}
</ul>