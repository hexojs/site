{% set page.title = 'News' %}
<div id="content-wrap">
  <div id="content" class="wrapper">
    <div id="content-inner">
      <div class="article-container">
        <div class="inner">
          {% for post in page.posts %}
            {{ partial('partial/post', {post: post, loop_index: loop.index}) }}
          {% endfor %}
        </div>
      </div>
      {{ partial('partial/recent_posts') }}
    </div>
  </div>
</div>