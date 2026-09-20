---
title: Hexo 5.2.0, hexo-migrator-wordpress 2.1.2, hexo-renderer-marked 3.2.0, hexo-renderer-stylus 2.0.1 & hexo-renderer-less 2.0.2 released
---

## Hexo 5.2.0

### Changes

- perf(external_link): faster regexp [@SukkaW] [#4536]
  - prioritise `http(s)://` over `//`
- feat: support 'disableNunjucks' in front-matter [@curbengh] [#4518]
  - Enable this option to disable [tag plugin](https://hexo.io/docs/tag-plugins)
  - Setting this option in front-matter will override the same option set by the renderer (e.g. [hexo-renderer-marked](https://github.com/hexojs/hexo-renderer-marked))

  ``` yml
  ---
  title: foo
  date: 2020-01-02 03:04:05
  disableNunjucks: true|false
  ---
  ```

- fix: avoid escaping front-matter if unnecessary [@curbengh] [#4522]
  - using variable (e.g. `{{ title }}`) with special characters no longer result in double-quote wrap
- fix: validate value of [config.url](https://hexo.io/docs/configuration#URL) [@curbengh] [#4520]
  - `config.url` should starts with "http://" or "https://"
- fix(router): convert string to buffer in route stream [@ppoffice] [#4517]
  - fix crash in `hexo generate --bail`
- fix(disableNunjucks): query both async and sync versions of renderer [@curbengh] [#4498]
  - [`disableNunjucks`](https://hexo.io/api/renderer#Disable-Nunjucks-tags) option should now works reliably with synchronous renderer
- feat(load_plugin): ignore pkg name endswith theme name [@SukkaW] [#4497]
  - An initial effort to support scoped package

### Housekeeping

- chore/ci: move benchmark & profiling to Actions [@SukkaW] [#4525] [#4514] [#4335]
  - Travis is now completely replaced by Actions (in this repo)
- chore: use example.com for example domain [@YoshinoriN] [#4512]

[@SukkaW]: https://github.com/SukkaW
[@curbengh]: https://github.com/curbengh
[@ppoffice]: https://github.com/ppoffice
[@YoshinoriN]: https://github.com/YoshinoriN
[#4536]: https://github.com/hexojs/hexo/pull/4536
[#4518]: https://github.com/hexojs/hexo/pull/4518
[#4522]: https://github.com/hexojs/hexo/pull/4522
[#4520]: https://github.com/hexojs/hexo/pull/4520
[#4517]: https://github.com/hexojs/hexo/pull/4517
[#4498]: https://github.com/hexojs/hexo/pull/4498
[#4497]: https://github.com/hexojs/hexo/pull/4497
[#4525]: https://github.com/hexojs/hexo/pull/4525
[#4514]: https://github.com/hexojs/hexo/pull/4514
[#4335]: https://github.com/hexojs/hexo/pull/4335
[#4512]: https://github.com/hexojs/hexo/pull/4512

---

## hexo-migrator-wordpress 2.1.2

### Fix

- fix(import-image): regex and image slug [#103]
  - replacing image embed link in a post should now also works within a paragraph that has a pair of bracket "()".
- fix(parseFeed): sanitize input [#106]
  - xml parser [camaro](https://github.com/tuananh/camaro) may throw error if there is an unprintable character in the input. Those unsafe characters are now removed before being parsed by camaro.

[#103]: https://github.com/hexojs/hexo-migrator-wordpress/pull/103
[#106]: https://github.com/hexojs/hexo-migrator-wordpress/pull/106

---

## hexo-migrator-wordpress 2.1.1

## Fix

- fix: avoid handling non-post asset [#99]
  - A post may embeds external images and they should not be processed by `import-image`.

[#99]: https://github.com/hexojs/hexo-migrator-wordpress/pull/99

---

## hexo-renderer-marked 3.2.0

### Features

- feat: mangle option [#164]
  - a built-in [option](https://marked.js.org/using_advanced#options) of marked
  - only useful against a _basic_ crawler used by spam bot.
- feat: disableNunjucks option [#166]
  - enable this option to disable processing of Nunjucks tag `{{ }}` `{% %}`, particularly useful if you're not going to use [tag plugins](https://hexo.io/docs/tag-plugins).
- feat: extend filter to tokenizer [#165]
  - It's now possible to customize the [tokenizer](https://marked.js.org/using_pro#tokenizer).
  - Refer to [this section](https://github.com/hexojs/hexo-renderer-marked#tokenizer) for example.
- feat: 'quotes' option to override smartypants [#161]
  - it's now possible to specify the quote symbols to replace.
  - e.g. `quotes: '«»“”'`

### Fixes

- fix: handle invalid URL [#163]
  - invalid URL like `http://localhost:4000lorem` is no longer [encoded](https://github.com/hexojs/hexo-util#encodeurlstr).
- fix: autolink option should not apply on markdown syntax [#162]
  - `autolink:` no longer affects `<http://example.com>`.
  - on another note, marked renderer doesn't detect `example.com`, if a link doesn't starts with protocol (e.g. `http://`), a link must starts with www to be detected (for autolink).

[#164]: https://github.com/hexojs/hexo-renderer-marked/pull/164
[#166]: https://github.com/hexojs/hexo-renderer-marked/pull/166
[#165]: https://github.com/hexojs/hexo-renderer-marked/pull/165
[#161]: https://github.com/hexojs/hexo-renderer-marked/pull/161
[#163]: https://github.com/hexojs/hexo-renderer-marked/pull/163
[#162]: https://github.com/hexojs/hexo-renderer-marked/pull/162

---

## hexo-renderer-stylus 2.0.1

### Fix

- fix: enable disableNunjucks to avoid rendering nunjucks tag [#55]
  - it's now safe to use:

  ```
  div::before
    content: "{{}}"
  ```

[#55]: https://github.com/hexojs/hexo-renderer-stylus/pull/55

---

## hexo-renderer-stylus 2.0.0

### Breaking change

- Drop Node 8 [#54] [#50]

### Feature

- feat: execute hexo filter with stylus context [#45]
  - It's now possible to interact with [stylus API](https://stylus-lang.com/docs/js.html) via hexo's filter API, see [our guide](https://github.com/hexojs/hexo-renderer-stylus#extensibility).

  ``` js
  hexo.extend.filter.register('stylus:renderer', function(style) {
    style
      // we may define a global variable by passing a `Node`
      .define('has-canvas', require('stylus').nodes.false);
      // stylus also casts JavaScript values to their Stylus equivalents when possible
      .define('families', ['Helvetica Neue', 'Helvetica', 'sans-serif'])
      // also allows you to provide a JavaScript-defined function to Stylus
      .define('get-list', function() {
        return ['foo', 'bar', 'baz'];
      });
  })
  ```

### Misc

- docs: setting variables [#41]
  - This feature has been available since 0.3.1 but not documented until now.
  - Refer to [our guide](https://github.com/hexojs/hexo-renderer-stylus#setting-stylus-variables).

[#54]: https://github.com/hexojs/hexo-renderer-stylus/pull/54
[#50]: https://github.com/hexojs/hexo-renderer-stylus/pull/50
[#45]: https://github.com/hexojs/hexo-renderer-stylus/pull/45
[#41]: https://github.com/hexojs/hexo-renderer-stylus/pull/41

---

## hexo-renderer-less 2.0.2

### Fix

- fix: enable disableNunjucks to avoid rendering nunjucks tag [#52]
  - it's now safe to use:

  ``` css
  div::before {
    content: "{{}}";
  }
  ```

[#52]: https://github.com/hexojs/hexo-renderer-less/pull/52

---

## hexo-renderer-less 2.0.0

### Breaking changes

- Drop Node 8 [#48] [#44]
- `compress` option has been deprecated [#30]
  - Deprecated by upstream.

### Features

- feat: support Less.js options [#47]
  - Support Less.js [options](http://lesscss.org/usage/#less-options)
  - Example:

  ``` yml _config.yml
  less:
    options:
      globalVars:
        var1: 'some value'
  ```

- feat: supports globbing [#37]
  - Example:

  ``` yml _config.yml
  less:
    paths:
      - '**/css/variables/*'
  ```

[#48]: https://github.com/hexojs/hexo-renderer-less/pull/48
[#44]: https://github.com/hexojs/hexo-renderer-less/pull/44
[#30]: https://github.com/hexojs/hexo-renderer-less/pull/30
[#47]: https://github.com/hexojs/hexo-renderer-less/pull/47
[#37]: https://github.com/hexojs/hexo-renderer-less/pull/37
