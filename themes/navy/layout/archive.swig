{% set page.title = 'News' %}
<div id="content-wrap">
  <div id="content" class="wrapper">
    <div id="content-inner">
      <div class="article-container">
        {% for post in page.posts %}
          {{ partial('partial/post', {post: post}) }}
        {% endfor %}
      </div>
      {{ partial('partial/recent_posts') }}
    </div>
  </div>
</div>