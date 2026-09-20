---
title: Official plugins hexo-util 1.6.0, hexo-generator-feed 2.2.0 & hexo-uglify 1.1.0 released
---

We have released a new version of the official plugins [hexo-util], [hexo-generator-feed] and [hexo-uglify].

[hexo-util]: https://github.com/hexojs/hexo-util
[hexo-generator-feed]: https://github.com/hexojs/hexo-generator-feed
[hexo-uglify]: https://github.com/hexojs/hexo-uglify

## hexo-util 1.6.0

### Breaking changes

- [`isExternalLink`] no longer requires `bind(hexo)` [#140]
  - Pass the site config or an url as parameter

  ``` js
  isExternalLink('https://example.com', hexo.config.url);
  ```

- [`url_for()`] & [`full_url_for()`] no longer process folder name with semicolon [#130]
  - This is necessary to avoid processing data urls (e.g. `mailto:` & `data:`]

### Fixes

- Fix performance regression introduced in 1.5.0 [#125], [#124], [#128]
  - Affected `url_for()`, `full_url_for()`, `isExternalLink()`
  - For background, see [hexojs/hexo#3833] & [hexojs/hexo#3846]
- Remove unnecessary new line `<br>` element from codeblock [#132]
- Handle underscore sign in [`permalink()`] [#139]
- Applies `pretty_urls.trailing_index` [option](https://hexo.io/docs/configuration#URL) to `url_for()` and `full_url_for()`, to remove the trailing `index.html` from links. [#134]
- Replace [node-html-entities] with [`escapeHTML()`] in [`highlight()`] [#129]
  - `escapeHTML()` escapes more characters compared to node-html-entities.
  - This also means more unsafe characters are now escaped in codeblock
- Escape equal `=` sign to `&#x3D;` in `escapeHTML()` [#131]
  - Equal sign can be misused to create another attribute in html element, this fix prevents that

[#140]: https://github.com/hexojs/hexo-util/pull/140
[#130]: https://github.com/hexojs/hexo-util/pull/130
[#129]: https://github.com/hexojs/hexo-util/pull/129
[#131]: https://github.com/hexojs/hexo-util/pull/131
[#125]: https://github.com/hexojs/hexo-util/pull/125
[#124]: https://github.com/hexojs/hexo-util/pull/124
[#128]: https://github.com/hexojs/hexo-util/pull/128
[#132]: https://github.com/hexojs/hexo-util/pull/132
[#139]: https://github.com/hexojs/hexo-util/pull/139
[#134]: https://github.com/hexojs/hexo-util/pull/134
[`isExternalLink`]: https://github.com/hexojs/hexo-util#isexternallinkurl-sitehost-exclude
[`url_for()`]: https://github.com/hexojs/hexo-util#url_forpath-option
[`full_url_for()`]: https://github.com/hexojs/hexo-util#full_url_forpath
[node-html-entities]: https://github.com/mdevils/node-html-entities
[`escapeHTML()`]: https://github.com/hexojs/hexo-util#escapehtmlstr
[`highlight()`]: https://github.com/hexojs/hexo-util#highlightstr-options
[hexojs/hexo#3833]: https://github.com/hexojs/hexo/issues/3833
[hexojs/hexo#3846]: https://github.com/hexojs/hexo/issues/3846
[`permalink()`]: https://github.com/hexojs/hexo-util#permalinkrule-options

## hexo-generator-feed 2.2.0

### Feature

- Support custom template, in addition to the default [atom.xml](https://github.com/hexojs/hexo-generator-feed/blob/master/atom.xml) & [rss2.xml](https://github.com/hexojs/hexo-generator-feed/blob/master/rss2.xml) templates. [#110]

  ``` yml
  feed:
    template: './path/to/template'
  ```

### Fix

- Fix compatibility issue with existing themes [#114]

[#110]: https://github.com/hexojs/hexo-generator-feed/pull/110
[#114]: https://github.com/hexojs/hexo-generator-feed/pull/114

## hexo-uglify 1.1.0

### Feature

- Support minifying javascript files with ES6+ syntax by utilizing [Terser](https://github.com/terser/terser) [#71](https://github.com/hexojs/hexo-uglify/pull/71)
  - Still defaults to [UglifyJS](https://github.com/mishoo/UglifyJS2) (which doesn't support ES6)
  - To enable ES6 support,

  ``` yml
  uglify:
    es6: true
  ```

## hexo-uglify 1.0.0

### Breaking change

- Drop EOL Node 6, now requires Node 8.6 [#46]

### Feature

- Switch minimatch to micromatch, for faster exclusion operation and to support more [globbing patterns](https://github.com/micromatch/micromatch#extended-globbing) [#40]

### Refactors

- Use native `Object.assign()` [#12]
- Switch to eslint and drop gulp, to be inline with hexo's [style](https://github.com/hexojs/eslint-config-hexo) [#37]

### Dependencies

- Update mocha from 2.0.1 to 6.2.0 [#6], [#16], [#42]
- Update coveralls from 2.11.2 to 3.0.2 [#9]
- Update chai from 1.9.1 to 4.2.0 [#8]
- Update eslint from 5.16.0 to 6.1.0  [#43]
- Update uglify-js from 2.6.0 to 3.6.0 [#36]

[#46]: https://github.com/hexojs/hexo-uglify/pull/46
[#40]: https://github.com/hexojs/hexo-uglify/pull/40
[#12]: https://github.com/hexojs/hexo-uglify/pull/12
[#37]: https://github.com/hexojs/hexo-uglify/pull/37
[#6]: https://github.com/hexojs/hexo-uglify/pull/6
[#16]: https://github.com/hexojs/hexo-uglify/pull/16
[#42]: https://github.com/hexojs/hexo-uglify/pull/42
[#9]: https://github.com/hexojs/hexo-uglify/pull/9
[#8]: https://github.com/hexojs/hexo-uglify/pull/8
[#43]: https://github.com/hexojs/hexo-uglify/pull/43
[#36]: https://github.com/hexojs/hexo-uglify/pull/36
