---
title: Hexo 4.1.0 Released
---

### Breaking changes

- Requires Node 8.10 or above [#3778]
  - Node 8 is going to be deprecated in [less than a month](https://github.com/nodejs/Release/blob/master/README.md), we strongly urge to upgrade to Node 10 or newer
- `og:locale` [Open Graph](https://ogp.me/) tag won't be inserted if `language:` (in config, front-matter of post/page or [`open_graph()`](/docs/helpers#open-graph) helper) is not in `language-TERRITORY` format [#3808]
  - `en` is invalid
  - `en-GB` is valid
  - Not all locales are supported (e.g. `en-AU` is not valid), see [official list](https://developers.facebook.com/docs/messenger-platform/messenger-profile/supported-locales/)
  - Dash (e.g. "en-GB") must be used for multilingual support, dash is automatically transformed to underscore (e.g. "en_GB") in `og:locale`
  - Verify the corresponding file exists in the `languages/` folder of installed theme before changing the `language:` config

### Features

- Support adding hour and minute to post permalink [#3629]
  - Example usage:

  ``` yml
  _config.yml
  permalink: :year/:month/:day/:hour/:minute/:title/
  ```

  - Results in `https://example.com/2019/12/09/23/59/a-post/`
- Insert `article:published_time` [#3674] `article:author` [#3805] Open Graph tags
- Enable `lazyload` in iframe-related tag plugins [#3798]
  - Affects [`iframe`](/docs/tag-plugins#iframe), [`jsfiddle`](/docs/tag-plugins#jsFiddle), [`vimeo`](/docs/tag-plugins#Vimeo), [`youtube`](/docs/tag-plugins#YouTube) tag plugins
  - Requires [supported browsers](https://caniuse.com/#feat=loading-lazy-attr) to benefit from this feature
  - Unsupported browsers would simply ignore the attribute, thus it is safe to use and always enabled
- `meta_generator` helper to insert [metadata](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) element tag [#3782]
  - Example usage:
  - Insert the following snippet (if EJS is used) inside `<head>` element of your theme layout,

  ``` js
  <%- meta_generator() %>
  ```

  - would output `<meta name="generator" content="Hexo 4.1.0">`
  - Hexo 3.9.0+ inserts the tag automatically; to get the performance benefit (of the `meta_generator` helper), [`meta_generator:`](/docs/configuration#Extensions) option should be disabled,

  ``` yml
  _config.yml
  meta_generator: false
  ```

- Support custom attributes in [`js()`](/docs/helpers#js) [#3681] and [`css()`](/docs/helpers#css) [#3690] helpers
  - Example usage:

  ``` js
  <%- js({ src: 'script.js', integrity: 'foo', async: true }) %>
  // <script src="/script.js" integrity="foo" async></script>

  <%- css({ href: 'style.css', integrity: 'foo' }) %>
  // <link rel="stylesheet" href="/style.css" integrity="foo">
  ```

- Support `wrap:` option to enable/disable wrapping backtick codeblock in `<table>` element [#3827]
  - Enabled by default, enabling `line_number` also enables it
  - Configure in [`highlight:`](/docs/configuration#Writing)

  ``` yml
  _config.yml
  highlight:
    line_number: false # must be disabled to disable wrap:
    wrap: false
  ```

  - This option also can be passed to [`codeblock()`](/docs/tag-plugins#Code-Block) tag plugin [#3848]

  ``` js
  {% codeblock lang:js wrap:false %}
  const foo = (bar) => {
    return bar;
  };
  {% endcodeblock %}
  ```

  - Outputs,
  {% codeblock lang:js wrap:false %}
  const foo = (bar) => {
    return bar;
  };
  {% endcodeblock %}

### Fixes

- Retain blank lines in a codeblock attached in blockquote [#3770]
- Replaced deprecated `og_updated_time` Open Graph tag with `article:modified_time` [#3674]
- Replaced deprecated `keywords` Open Graph tag with `article:tag` [#3805]
- meta_generator tag should be inserted into `<head>` that spans multiple lines [#3778]
- No longer clear database `db.json` when running `hexo new` or `hexo --help` [#3793]
- Completely ignore files/folders specified in [`ignore:`](/docs/configuration#Include-Exclude-Files-or-Folders) option [#3797]
  - If you're using Webpack or related tools in your theme, the `node_modules` folder could cause some issues
  - A temporary workaround is to configure Hexo to ignore that folder,

  ``` yml
  _config.yml
  ignore: '**/themes/*/node_modules/**'
  ```

  - The workaround will no longer be necessary in future version
- jsfiddle, vimeo and youtube tag plugins now use https only [#3806]
- `external_link` filter should not process data URLs (e.g. `mailto:` & `javascript:`) [#3812] and `<article>` element [#3895]
- Prevent unnecessary insertion of front-matter when using alias in Hexo [CLI](/docs/commands) [#3830]
  - `-p` is alias of `--path`
  - `-s` is alias of `--slug`
  - `-r` is alias of `--replace`
- Applies `include:` and `exclude:` [options](/docs/configuration#Include-Exclude-Files-or-Folders) to post's asset folder [#3882]
- `ignore:` option should work for files, in addition to folders [#3878]

### Housekeeping

- Add [FOSSA](https://fossa.com/) license analyzer for open-source software license compliance [#3779]
- Run benchmark in CI to catch regression [#3776]
- Further reduces lodash usage [#3786], [#3788], [#3790], [#3785], [#3809], [#3791], [#3810], [#3826], [#3867], [#3845]
- Remove unnecessary file at the end of unit test [#3792]
- Add funding source to npm [#3851]
- Update strip-ansi from 5.2.0 to 6.0.0 [#3852]
- Update chalk from 2.4.2 to 3.0.0 [#3853]

[#3778]: https://github.com/hexojs/hexo/pull/3778
[#3808]: https://github.com/hexojs/hexo/pull/3808
[#3629]: https://github.com/hexojs/hexo/pull/3629
[#3674]: https://github.com/hexojs/hexo/pull/3674
[#3805]: https://github.com/hexojs/hexo/pull/3805
[#3798]: https://github.com/hexojs/hexo/pull/3798
[#3782]: https://github.com/hexojs/hexo/pull/3782
[#3681]: https://github.com/hexojs/hexo/pull/3681
[#3690]: https://github.com/hexojs/hexo/pull/3690
[#3827]: https://github.com/hexojs/hexo/pull/3827
[#3848]: https://github.com/hexojs/hexo/pull/3848
[#3770]: https://github.com/hexojs/hexo/pull/3770
[#3674]: https://github.com/hexojs/hexo/pull/3674
[#3805]: https://github.com/hexojs/hexo/pull/3805
[#3793]: https://github.com/hexojs/hexo/pull/3793
[#3797]: https://github.com/hexojs/hexo/pull/3797
[#3806]: https://github.com/hexojs/hexo/pull/3806
[#3895]: https://github.com/hexojs/hexo/pull/3895
[#3830]: https://github.com/hexojs/hexo/pull/3830
[#3882]: https://github.com/hexojs/hexo/pull/3882
[#3779]: https://github.com/hexojs/hexo/pull/3779
[#3776]: https://github.com/hexojs/hexo/pull/3776
[#3786]: https://github.com/hexojs/hexo/pull/3786
[#3788]: https://github.com/hexojs/hexo/pull/3788
[#3790]: https://github.com/hexojs/hexo/pull/3790
[#3785]: https://github.com/hexojs/hexo/pull/3785
[#3809]: https://github.com/hexojs/hexo/pull/3809
[#3791]: https://github.com/hexojs/hexo/pull/3791
[#3810]: https://github.com/hexojs/hexo/pull/3810
[#3826]: https://github.com/hexojs/hexo/pull/3826
[#3867]: https://github.com/hexojs/hexo/pull/3867
[#3845]: https://github.com/hexojs/hexo/pull/3845
[#3792]: https://github.com/hexojs/hexo/pull/3792
[#3851]: https://github.com/hexojs/hexo/pull/3851
[#3852]: https://github.com/hexojs/hexo/pull/3852
[#3853]: https://github.com/hexojs/hexo/pull/3853
