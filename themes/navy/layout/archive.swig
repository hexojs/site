{% set page.title = 'News' %}
<div id="content-wrap">
  <div class="wrapper">
    <div class="inner">
      {% for post in page.posts %}
        {{ partial('partial/post', {post: post, loop_index: loop.index}) }}
      {% endfor %}
    </div>
  </div>
</div>