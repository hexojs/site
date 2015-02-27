<aside id="sidebar" role="navigation">
  <div class="inner">
    <strong class="sidebar-title">Recent Posts</strong>
    {% for post in site.posts %}
      <a href="{{ url_for(post.path) }}" class="sidebar-link" title="{{ post.title }}">{{ post.title }}</a>
    {% endfor %}
  </div>
</aside>