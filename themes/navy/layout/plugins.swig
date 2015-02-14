<div id="content-wrap">
  <div class="wrapper">
    <div class="inner">
      <header id="plugin-list-header">
        <h1 id="plugin-list-title">{{ page.title }}</h1>
        <input type="search" id="plugin-search-input" placeholder="Search plugins...">
        <div id="plugin-list-count">{{ site.data.plugins.length }} plugins</div>
      </header>
      <div id="plugin-tag-cloud">{{ plugin_tag_cloud(site.data.plugins, {min_font: 13, max_font: 26}) }}</div>
      <ul id="plugin-list">
        {% for plugin in _.sortBy(site.data.plugins, 'name') %}
          <li class="plugin on">
            <a href="{{ plugin.link }}" class="plugin-name" target="_blank">{{ plugin.name }}</a>
            <p class="plugin-desc">{{ plugin.description }}</p>
            <div class="plugin-tag-list">
              {% for tag in plugin.tags %}
                <a href="#{{ tag }}" class="plugin-tag">{{ tag }}</a>
              {% endfor %}
            </div>
          </li>
        {% endfor %}
      </ul>
    </div>
  </div>
</div>
<script>window.SEARCH_INDEX = {{ lunr_index(site.data.plugins) }}</script>