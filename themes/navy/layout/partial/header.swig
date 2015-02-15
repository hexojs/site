<header id="header" class="wrapper">
  <div class="inner">
    <h1>
      <a href="{{ url_for_lang('') }}" id="logo">Hexo</a>
    </h1>
    <nav id="main-nav">
      <ul>
        {{ header_menu() }}
        <li class="main-nav-item">
          <a href="https://github.com/{{ config.github }}" class="main-nav-link"><i class="fa fa-github-alt"></i></a>
        </li>
      </ul>
    </nav>
    <div id="lang-select-wrap">
      <label id="lang-select-label"><i class="fa fa-globe"></i><span>{{ site.data.languages[page.lang] }}</span></label>
      <select id="lang-select" data-canonical="{{ canonical_path_for_nav() }}">
        {% for lang in site.data.languages %}
          <option value="{{ loop.key }}"{% if page.lang === loop.key %} selected{% endif %}>{{ lang }}</option>
        {% endfor %}
      </select>
    </div>
    <div id="search-btn-wrap" class="main-nav-item">
      <a id="search-btn" class="main-nav-link st-search-launcher"><i class="fa fa-search"></i></a>
    </div>
  </div>
</header>