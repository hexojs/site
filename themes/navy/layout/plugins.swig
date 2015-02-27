<div id="content-wrap">
  <div class="wrapper">
    <div class="inner">
      <header id="plugin-list-header">
        <h1 id="plugin-list-title">{{ page.title }}</h1>
        <input type="search" id="plugin-search-input" placeholder="Search">
        <div id="plugin-list-count">{{ site.data[page.data].length }} items</div>
      </header>
      <ul id="plugin-list">
        {% for plugin in _.sortBy(site.data[page.data], 'name') %}
          {{ partial('partial/' + page.partial, {plugin: plugin}) }}
        {% endfor %}
      </ul>
    </div>
  </div>
</div>
<script>window.SEARCH_INDEX = {{ lunr_index(site.data[page.data]) }}</script>