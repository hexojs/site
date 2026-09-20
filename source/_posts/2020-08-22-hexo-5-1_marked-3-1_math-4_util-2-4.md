---
title: Hexo 5.1.0, hexo-renderer-marked 3.1.0, hexo-math 4.0.0 & hexo-util 2.4.0 released
---

## Hexo 5.1.0

### Features

- feat(highlight): parse 'caption' option to prismHighlight [@curbengh] [#4476]
  - `caption` is now available in prismjs:

  ``` yml _config.yml
  highlight:
    enable: false
  prismjs:
    enable: true
  ```

  - It can be used in triple backtick codeblock:

  ```` markdown
  ``` js caption
  console.log('foo')
  ```
  ````

  - above codeblock will be rendered as:
    (class attributes are omitted for brevity)

    ``` html
    <pre><div class="caption"><span>caption</span></div><code>console...</code></pre>
    ```

  - you can style the caption by:

    ``` css
    pre div.caption {
      font-size: 0.9em;
      color: #888;
    }

    pre div.caption a {
      float: right;
    }
    ```

  - also available via [`codeblock`](https://hexo.io/docs/tag-plugins#Code-Block) and [`include_code`](https://hexo.io/docs/tag-plugins#Include-Code) tag plugins.

- fix: refactor post escape [@SukkaW] [#4472]
  - fixed issue with prismjs that, in some cases, did not remove hexo's processing tag properly
- Remove plugins option in config [@stevenjoezhang] [#4475]

  ``` yml
  # _config.yml
  plugins:
  ```

  - `plugins` option has been deprecated long ago and it's now completely dropped
  - plugins should be saved in `scripts/` folder or installed via npm `package.json`.

### Performance

- perf(backtick_code): avoid duplicated escaping [@SukkaW] [#4478]

[#4476]: https://github.com/hexojs/hexo/pull/4476
[#4472]: https://github.com/hexojs/hexo/pull/4472
[#4475]: https://github.com/hexojs/hexo/pull/4475
[#4478]: https://github.com/hexojs/hexo/pull/4478

---

## Hexo 5.0.2

### Changes

- Revert "perf: avoid running plugins in 'clean' command" [#4386] [@curbengh] [#4470]
  - This fixes error in `hexo clean`.

[#4386]: https://github.com/hexojs/hexo/pull/4386
[#4470]: https://github.com/hexojs/hexo/pull/4470

---

## Hexo 5.0.1

### Changes

- fix(helpers): call url_for from hexo-util [@curbengh] [#4447]
  - [helpers](/docs/helpers) are now accessible from APIs such as [`Injector`](/api/injector#Example)
- perf(external_link): update regexp [@SukkaW] [#4467]
  - regex of [`external_link`](https://github.com/hexojs/hexo/blob/master/lib/plugins/filter/after_render/external_link.js) filter now pre-match external links, instead of solely rely on [`isExternalLink`](https://github.com/hexojs/hexo-util#isexternallinkurl-sitehost-exclude)
- perf(injector): shorthand optimization [@SukkaW] [#4462]

[#4447]: https://github.com/hexojs/hexo/pull/4447
[#4467]: https://github.com/hexojs/hexo/pull/4467
[#4462]: https://github.com/hexojs/hexo/pull/4462

---

## hexo-renderer-marked 3.1.0

### Features

- feat: postAsset to prepend post's relative path [#159]
  - With this feature, [`asset_img`](https://hexo.io/docs/tag-plugins#Embed-image) tag plugin is no longer required.
  - Only applies to [`post_asset_folder`](https://hexo.io/docs/asset-folders)
  - An example is "image.jpg" is located at "/2020/01/02/foo/image.jpg", which is a post asset of "/2020/01/02/foo/".
    - `![](image.jpg)` becomes `<img src="/2020/01/02/foo/image.jpg">`
  - To enable:

  ``` yml _config.yml
  post_asset_folder: true
  marked:
    prependRoot: true
    postAsset: true
  ```

- feat: lazyload [#156]
  - Load image only when it's coming into view. [Explainer](https://github.com/scott-little/lazyload)
  - `loading="lazy"` will be injected to every image embed `<img>`.
  - Only takes effect on [supported browsers](https://caniuse.com/#feat=loading-lazy-attr).
  - To enable:

  ``` yml
  marked:
    lazyload: true
  ```

### Dependency

- chore(deps-dev): bump hexo from 4.2.1 to 5.0.0 [#158]

[#159]: https://github.com/hexojs/hexo-renderer-marked/pull/159
[#156]: https://github.com/hexojs/hexo-renderer-marked/pull/156
[#158]: https://github.com/hexojs/hexo-renderer-marked/pull/158

---

## hexo-math 4.0.0

### Breaking change

- The syntax is changed to tag plugin syntax `{% %}` [#130]
  - Examples:

  ```
  {% katex %}
  c = \pm\sqrt{a^2 + b^2}
  {% endkatex %}
  ```

  ```
  {% mathjax %}
  \frac{1}{x^2-1}
  {% endmathjax %}
  ```

  - The renderer option is highly customizable and it can be different across posts and even within a post, refer to the [documentation](https://github.com/hexojs/hexo-math#hexo-math) for usage guide.
  - If you prefer to use `$...$` syntax, we recommend [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax) which is also developed a Hexo developer, [@stevenjoezhang].

### Misc

- Drop Travis CI [#134]

[#130]: https://github.com/hexojs/hexo-math/pull/130
[#134]: https://github.com/hexojs/hexo-math/pull/134

---

## hexo-util 2.4.0

### Breaking change

- fix(highlight): use `<div>` when wrap is disabled [@curbengh] [#229]
  - when `wrap` is disabled:

  ``` yml _config.yml
  highlight:
    wrap: false # defaults to true
  ```

  - previously, caption is rendered as:

  ``` html
  <pre>
  <figcaption>caption</figcaption>
  <code></code>
  </pre>
  ```

  - it's now rendered as:

  ``` html
  <pre>
  <div class="caption">caption</div>
  <code></code>
  </pre>
  ```

### Feature

- feat(prism): caption [@curbengh] [#227]
  - caption is rendered as:

  ``` html
  <pre>
  <div class="caption">caption</div>
  <code></code>
  </pre>
  ```

[#229]: https://github.com/hexojs/hexo-util/pull/229
[#227]: https://github.com/hexojs/hexo-util/pull/227

---

## hexo-util 2.3.0

### Changes

- feat(highlight): support 'tab' & 'mark' when wrap is disabled [@curbengh] [#225]
  - Previously `tab` and `mark` options were only availble when `wrap` is enabled, now they are also available even when `wrap` is disabled.
  - Example:

  ``` yml _config.yml
  highlight:
    tab_replace: '  '
    wrap: false
  ```

  ``` js
  {% codeblock lang:js mark:2,5 %}
  const input = [
    { name: 'lorem', item: 'ipsum' },
    { name: 'per', item: 'doming' },
    { name: 'dolor', item: 'lorem' },
    { name: 'usu', item: 'pericula' }
  ]
  {% endcodeblock %}
  ```

- ci: drop appveyor [@curbengh] [#224]
- docs(spawn): link to upstream docs [@curbengh] [#223]
  - [`spawn()`](https://github.com/hexojs/hexo-util#spawncommand-args-options) is a nice wrapper around [`child_process.spawn()`](https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options), so it supports similar options.

[#225]: https://github.com/hexojs/hexo-util/pull/225
[#224]: https://github.com/hexojs/hexo-util/pull/224
[#223]: https://github.com/hexojs/hexo-util/pull/223

## hexo-util 2.2.0

### Features

- perf(cache): Use faster [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) instead of Object. [@SukkaW] [#209]
- feat(cache): cache#dump & cache#size [@SukkaW] [#209]

  ``` js
  // Output number of key-value pairs
  cache.size();
  // 3

  // Outputs everything in cache
  cache.dump();
  /*
  {
    foo: 'bar',
    baz: 123,
    qux: 456
  }
  */
  ```

### Fixes

- Support string argument in [`spawn()`](https://github.com/hexojs/hexo-util#spawncommand-args-options) [@curbengh] [#220]
  - Previously `spawn()` only supports array argument:

  ``` js
  spawn('cat', ['test.txt']).then((content) => {
    console.log(content);
  });
  ```

  - Now string argument is also valid:

  ``` js
  spawn('cat', 'test.txt').then((content) => {
    console.log(content);
  });
  ```

- fix(highlight): support [caption](https://hexo.io/docs/tag-plugins#Backtick-Code-Block) when wrap is disabled [@curbengh] [#210]

  ``` yml _config.yml
  highlight:
    wrap: false
  ```

  <pre><code>```js caption
  const hi = 'bob'
  ```</code></pre>

### Housekeeping

- Drop Node 13 from CI [@curbengh] [#219]
- refactor(encode/decode_url): replace decodeURI with native [querystring.unescape](https://nodejs.org/api/querystring.html#querystring_querystring_unescape_str) [@curbengh] [#214]

### Dependencies

- chore(deps-dev): bump mocha from 7.2.0 to 8.0.1 [#211]
- chore(deps-dev): bump eslint from 6.8.0 to 7.0.0 [#207]

[#209]: https://github.com/hexojs/hexo-util/pull/209
[#220]: https://github.com/hexojs/hexo-util/pull/220
[#210]: https://github.com/hexojs/hexo-util/pull/210
[#219]: https://github.com/hexojs/hexo-util/pull/219
[#214]: https://github.com/hexojs/hexo-util/pull/214
[#211]: https://github.com/hexojs/hexo-util/pull/211
[#207]: https://github.com/hexojs/hexo-util/pull/207

---

## hexo-util 2.1.0

### Breaking change

- Remove `HashStream()` function [@curbengh] [#198]
  - Deprecated in [#45], part of [v1.0.0](https://github.com/hexojs/hexo-util/releases/tag/1.0.0) release
  - Replaced by [`createSha1Hash()`](https://github.com/hexojs/hexo-util/tree/master#createsha1hash)

### Refactor

- refactor: prototype to class syntax [@curbengh] [#199]

[#198]: https://github.com/hexojs/hexo-util/pull/198
[#45]: https://github.com/hexojs/hexo-util/pull/45
[#199]: https://github.com/hexojs/hexo-util/pull/199

---

## hexo-util 2.0.0

### Breaking change

- Drop support of Node 8 [@SukkaW] [#191] [#193]
- Requires `autoDetect` to be enabled and `lang` to be unset to use sublanguage [`highlight()`](https://github.com/hexojs/hexo-util#highlightstr-options) [@curbengh] [#192] [#196]

### Fix

- Fix [`CacheStream()`](https://github.com/hexojs/hexo-util#cachestream) compatibility issue with Node 14 [@curbengh] [#195]

### Misc

- docs(isExternalLink): add JSDoc [@YoshinoriN] [#190]

### Dependencies

- chore(deps-dev): bump rewire from 4.0.1 to 5.0.0 [#187]

[#191]: https://github.com/hexojs/hexo-util/pull/191
[#193]: https://github.com/hexojs/hexo-util/pull/193
[#192]: https://github.com/hexojs/hexo-util/pull/192
[#196]: https://github.com/hexojs/hexo-util/pull/196
[#195]: https://github.com/hexojs/hexo-util/pull/195
[#190]: https://github.com/hexojs/hexo-util/pull/190
[#187]: https://github.com/hexojs/hexo-util/pull/187

[@curbengh]: https://github.com/curbengh
[@SukkaW]: https://github.com/SukkaW
[@stevenjoezhang]: https://github.com/stevenjoezhang
[@YoshinoriN]: https://github.com/YoshinoriN
