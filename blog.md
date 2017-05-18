---
layout: blog
title: blog
permalink: /blog
---

<div class="row">

  <div class="col-sm-4 hidden blog-title-push">
    <h1 class="invisible">Blog</h1>
  </div>

  <div class="col-sm-8">

    <p class="blog-view-header h1-mynameis text-lowercase">
      My name is <span class="text-accent">Dylan On</span>.<br>
      <span class="text-accent">This</span> is my blog.
    </p>

  </div>

</div>

<div class="row">

  <div class="col-sm-8 col-sm-push-4">

    <ul class="blog-list">
      {% for post in site.posts %}
        <li>
          {% if post.categories contains 'longform' %}
            <a href="{{ post.url }}"><h2>{{ post.title }}</h2></a>
            {{ post.excerpt }}
            <small class="timestamp"><a href="{{ post.url }}">Read more &rarr;</a></small>
            <small class="datestamp">{{ post.date | date: "%B %e, %Y" }}</small>
          {% else %}
            {{ post.content }}
            <small class="timestamp"><a href="{{ post.url }}">{{ post.date | date: "%B %e, %Y at %l:%M%P" }}</a></small>
          {% endif %}
        </li>
      {% endfor %}
    </ul>
    
  </div>

  <hr class="sm-hide">

  <div class="blog-sidebar col-sm-4 col-sm-pull-8 text-lowercase">

    <p class="h2 no-top-margin">About</p>
    <p>
      Arts admin by day, web designer by night.<br>I’m passionate about performance, tech, and dogs.
    </p>
    
    <p class="h2">Archives</p>

  </div>

</div>