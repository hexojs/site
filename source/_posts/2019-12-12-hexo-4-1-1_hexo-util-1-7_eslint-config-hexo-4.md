---
title: Hexo 4.1.1, hexo-util 1.7.0 & eslint-config-hexo 4.0.0 released
---

We have released a bugfix release for [hexo], and new version of official hexo plugins [hexo-util] and [eslint-config-hexo].

[hexo]: https://github.com/hexojs/hexo
[hexo-util]: https://github.com/hexojs/hexo-util
[eslint-config-hexo]: https://github.com/hexojs/eslint-config-hexo

## hexo 4.1.1

### Feature

- Add `trailing_html:` to [`pretty_urls:`](/docs/configuration#URL) option to remove ".html" from url [#3917]
  - Use the following config to remove the trailing ".html" from permalink [variables](/docs/variables)

  ``` yml
  _config.yml
  pretty_urls:
    trailing_html: false
  ```

  - Example: `https://example.com/page/about.html` -> `https://example.com/page/about`

### Fixes

- Set default locales (in "language_TERRITORY" format) for [`og:locale`](https://ogp.me/#optional) Open Graph tag [#3921]
  - Previously `og:locale` was inserted only if [`language:`](/docs/configuration#Site) is configured in "language-TERRITORY" format
  - With this fix, if the language is "en", `og:locale` will default to "en_US". Refer to the pull request for the full list.
- [`meta_generator()`](/docs/helpers#meta-generator) helper should output the correct Hexo version [#3925]
- [`permalink_defaults:`](/docs/configuration#URL) option should be parsed, not replaced [#3926]
- "node_modules/" and ".git/" folders in themes/ are now always ignored [#3918]

### Refactor

- Further reduces lodash usage [#3880]

[#3917]: https://github.com/hexojs/hexo/pull/3917
[#3921]: https://github.com/hexojs/hexo/pull/3921
[#3925]: https://github.com/hexojs/hexo/pull/3925
[#3926]: https://github.com/hexojs/hexo/pull/3926
[#3918]: https://github.com/hexojs/hexo/pull/3918
[#3880]: https://github.com/hexojs/hexo/pull/3880

## hexo-util 1.7.0

### Features

- [`deepMerge()`](https://github.com/hexojs/hexo-util#deepmergetarget-source) utility [#141]
  - Based on [deepmerge](https://github.com/TehShrike/deepmerge) library
  - target object is not modified, which is different to Object.assign() and lodash.merge
- [`prettyUrls()`](https://github.com/hexojs/hexo-util#prettyurlsurl-options) utility [#152]
  - This is used to remove trailing `.html` or `index.html` from a url string
  - Typically used for SEO, particularly to create [canonical url](https://support.google.com/webmasters/answer/139066?hl=en)

### Fixes

- `wrap:` option is no longer disabled when `hljs:` is enabled in code highlight [`highlight()`](https://github.com/hexojs/hexo-util#highlightstr-options) utility [#138]
  - Since `wrap:` is enabled by default, if you prefer previous behavior of `hljs:`, you need to specifically disable `wrap:`,

  ``` yml
  _config.yml
  highlight:
    wrap: false
    hljs: true
  ```

- `url_for()` & `full_url_for()` should ignore absolute url (i.e. links that start with "http" or double slash "//") [#147]
- Selecting a codeblock should not include line number [#153]
  - This reverts breaking change introduced in [#132]

[#141]: https://github.com/hexojs/hexo-util/pull/141
[#152]: https://github.com/hexojs/hexo-util/pull/152
[#138]: https://github.com/hexojs/hexo-util/pull/138
[#147]: https://github.com/hexojs/hexo-util/pull/147
[#153]: https://github.com/hexojs/hexo-util/pull/153
[#132]: https://github.com/hexojs/hexo-util/pull/132

## eslint-config-hexo 4.0.0

### Features

- Support up to ES2020 syntax by using eslint-plugin-node v10 [#23]
- Prefer ES6+ syntax [#22]
- Remove deprecated/duplicated rules [#4], [#6], [#21]

### Fix

- Retain [legacy](https://nodejs.org/docs/latest-v8.x/api/url.html#url_legacy_url_api) URL API [#19]
  - Contrary to the pull request's description, Node 8 actually does support the newer [WHATWG URL](https://nodejs.org/docs/latest-v8.x/api/url.html#url_the_whatwg_url_api) API.
  - However, it is later found that migrating completely to the newer API caused performance regression, so for now hexo uses a mixture of legacy and newer API. [hexojs/hexo#3833](https://github.com/hexojs/hexo/issues/3833), [hexojs/hexo#3846](https://github.com/hexojs/hexo/issues/3846)

[#23]: https://github.com/hexojs/eslint-config-hexo/pull/23
[#22]: https://github.com/hexojs/eslint-config-hexo/pull/22
[#4]: https://github.com/hexojs/eslint-config-hexo/pull/4
[#6]: https://github.com/hexojs/eslint-config-hexo/pull/6
[#21]: https://github.com/hexojs/eslint-config-hexo/pull/21
[#19]: https://github.com/hexojs/eslint-config-hexo/pull/19
