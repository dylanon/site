---
layout:		page
title: 		SpiderWebShow Thought Residency
permalink:	/thought-residency/
---

<div class="panel panel-default page-description">
  <div class="panel-body text-center">
	30-second thoughts about <strong>online performance</strong>, <strong>theatre technology</strong>, <strong>emerging artists</strong>, and the <strong>Canadian theatre landscape</strong>.
	Recorded and published on <a href="https://spiderwebshow.ca/thought-residency-dylan-on/">spiderwebshow.ca</a> every Tuesday, Wednesday, and Thursday throughout June 2017.
  </div>
</div>

<ul class="post-list">
      {% for post in site.categories.thought-residency reversed %}
        <li>
          {{ post.content }}
					<small class="timestamp"><a href="{{ post.url }}">{{ post.date | date: "%B %e, %Y" }}</a></small>
        </li>
      {% endfor %}
</ul>