<header id="header" class="wrapper">
  <div id="header-inner" class="inner">
    <h1 id="logo-wrap">
      <a href="{{ url_for_lang('') }}" id="logo">Hexo</a>
    </h1>
    <nav id="main-nav">
      <ul>
        {{ header_menu('main-nav') }}
        <li class="main-nav-item">
          <a href="https://github.com/{{ config.github }}" class="main-nav-link"><i class="fa fa-github-alt"></i></a>
        </li>
      </ul>
    </nav>
    <div id="lang-select-wrap">
      <label id="lang-select-label"><i class="fa fa-globe"></i><span>{{ lang_name(page.lang) }}</span></label>
      <select id="lang-select" data-canonical="{{ canonical_path_for_nav() }}">
        {% for lang in site.data.languages %}
          <option value="{{ loop.key }}"{% if page.lang === loop.key %} selected{% endif %}>{{ lang_name(loop.key) }}</option>
        {% endfor %}
      </select>
    </div>
    <div id="search-btn-wrap" class="main-nav-item">
      <a id="search-btn" class="main-nav-link st-search-launcher"><i class="fa fa-search"></i></a>
    </div>
    <a id="mobile-nav-toggle">
      <span class="mobile-nav-toggle-bar"></span>
      <span class="mobile-nav-toggle-bar"></span>
      <span class="mobile-nav-toggle-bar"></span>
    </a>
    <a id="mobile-search-btn" class="st-search-launcher"></a>
  </div>
</header>