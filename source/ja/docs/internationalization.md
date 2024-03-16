---
title: Internationalization (i18n)
---
You can use internationalization to present your site in different languages. The default language is set by modifying the `language` setting in `_config.yml`. You can also set multiple languages and modify the order of default languages.

``` yaml
language: zh-tw

language:
- zh-tw
- en
```

### Language Files

Language files can be YAML or JSON files. You should put them into the `languages` folder in the theme. There is support for the [printf format](https://github.com/alexei/sprintf.js) in language files.

### Templates

Use `__` or `_p` helpers in templates to get the translated strings. The former is for normal usage and the latter is for plural strings. For example:

``` yaml en.yml
index:
  title: Home
  add: Add
  video:
    zero: No videos
    one: One video
    other: %d videos
```

``` js
<%= __('index.title') %>
// Home

<%= _p('index.video', 3) %>
// 3 videos
```

### Path

You can set the language of pages in front-matter, or modify the `i18n_dir` setting in `_config.yml` to enable automatic detection by Hexo.

``` yaml
i18n_dir: :lang
```

The default value of `i18n_dir` setting is `:lang`, which means that Hexo will detect the language within the first segment of URL. For example:

``` plain
/index.html => en
/archives/index.html => en
/zh-tw/index.html => zh-tw
```

The string will only be served as a language when the language file exists. So `archives` in `/archives/index.html` (example 2) will not get served as a language.
