<header id="banner" class="wrapper">
  <div class="inner">
    <h2 id="banner-title">{{ page.subtitle }}</h2>
    <div id="banner-start">
      <span id="banner-start-command">npm install hexo-cli -g</span><a id="banner-start-link" href="docs/"><i class="fa fa-arrow-right"></i></a>
    </div>
    <div id="banner-share">{{ partial('partial/share') }}</div>
  </div>
</header>
<div id="content-wrap">
  <div class="wrapper">
    <div class="inner">
      {{ page.content }}
      <ul id="intro-cmd-wrap">
        <li class="intro-cmd-item">npm install hexo-cli -g</li>
        <li class="intro-cmd-item">hexo init blog</li>
        <li class="intro-cmd-item">cd blog</li>
        <li class="intro-cmd-item">npm install</li>
        <li class="intro-cmd-item">hexo server</li>
      </ul>
      <div id="intro-get-started-wrap">
        <a href="docs/" id="intro-get-started-link">{{ __('index.get_started') }}</a>
      </div>
    </div>
  </div>
</div>
<div id="theme-wrap">
  <div class="wrapper">
    <div class="inner theme-wrapper">
      <div class="theme-thumbnail">
        <div class="theme-thumbnail-container">
          <img src="/themes/screenshots/landscape.png">
        </div>
      </div>
      <div class="theme-intro">
        <div class="theme-intro-container">
          <h2 class="theme-intro-title">{{ site.data.themes.length }} Themes</h2>
          <p class="theme-intro-text">Powerful and robust theming system that capable of making any website. Writing your template using many template engines.</p>
          <a href="themes/" id="theme-link">Check out the Hexo themes</a>
        </div>
      </div>
    </div>
  </div>
</div>
