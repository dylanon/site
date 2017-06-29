---
layout:		page
title: 		SpiderWebShow Thought Residency
permalink:	/thought-residency
---

<ul class="post-list">
      {% for post in site.categories.thought-residency reversed %}
        <li>
          <a href="{{ post.url }}"><h2>{{ post.title }}</h2></a>
          {{ post.content }}
          <small class="timestamp">{{ post.date | date: "%B %e, %Y" }}</small>
        </li>
      {% endfor %}
</ul>