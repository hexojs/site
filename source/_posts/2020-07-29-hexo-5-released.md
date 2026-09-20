---
title: Hexo 5.0.0 Released
---

Hexo is a Nodejs-powered static site generator. It offers powerful [API](https://hexo.io/api/) to integrate existing npm packages for web development and programmatically inserts certain content into articles.

This is our biggest release to date with tons of new features, performance improvements and bugfixes. According to our benchmark (which we run in every pull request to detect regression), Hexo 5 processed 500 posts in [16 seconds](https://travis-ci.com/github/hexojs/hexo/jobs/365986028), whereas [4.2.0](https://travis-ci.com/github/hexojs/hexo/jobs/269501202) processed 300 posts at the same time. Hexo now requires Nodejs 10+, Nodejs has dropped support of version 8 since 31 Dec 2019; although Nodejs 10.x is still supported, but since it's going to be deprecated in less than a year (April 2021), we recommend using Nodejs 12+.

Refer to our [installation guide](https://hexo.io/docs/) to install Hexo.

To upgrade to Hexo v5, change the following line in your package.json,

``` diff package.json
-  "hexo": "^4.2.1",
+  "hexo": "^5.0.0",
```

## Breaking change

- refactor(external_link): migrate config during load_config [@SukkaW] [#4414] [#4371]
  - See [Writing](https://hexo.io/docs/configuration#Writing) section for new options (introduced back in v4)

  ``` yml _config.yml
  # Deprecated
  external_link: true|false

  # New option
  external_link:
    enable: true|false

  # Deprecated
  use_date_for_updated: true

  # New option
  # https://hexo.io/docs/configuration#Date-Time-format
  updated_option: date
  ```

  - If you check `external_link` for [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) value, since it's now automatically converted to object, it will always be truthy:

  ``` js
  <% if (config.external_link) { %>
  ```

  - If you wish to maintain backward compatibility with past versions:

  ``` js
  <% if ((typeof config.external_link === 'boolean' && config.external_link === true) || (typeof config.external_link === 'object' && config.external_link.enable === true)) { %>
  ```

- refactor(box): remove Bluebird.asCallback [@SukkaW] [#4379]
  - Callback syntax for [`Box`](https://hexo.io/api/box) is never documented nor utilized in Hexo's internal.
  - This is also a reminder that we might drop callbacks from all Hexo API in future. [#3328]
- feat: bring up config.[updated_option](https://hexo.io/docs/configuration#Date-Time-format) [@SukkaW] [#4278]
  - This can be useful for a theme that prefers to display `Updated:` only when it's set in the article's front-matter.
- feat(open_graph): drop 'keywords' option from front-matter [@curbengh] [#4174]
  - Search engines no longer support `keywords`.
- fix: override site's permalink using an article's front-matter [@SukkaW] [#4359]
  - User config:

  ``` yml _config.yml
  permalink: :year/:month/:day/:title/
  ```

  - Front-matter

  ``` yml source/foo-bar.md
  ---
  title: foo bar
  permalink: breaking-news/
  ---
  ```

  - That post will be available on `http://yourhexo.com/breaking-news/`
  - A reminder that permalink must have a trailing `.html` or `/`

  ``` yml
  permalink: :year/:month/:day/:title/ # default
  # or
  permalink: :year/:month/:day/:title.html
  ```

- Remove lodash from global variable [@SukkaW] [#4266]
  - Lodash `_` is no longer available in Hexo API.

  ``` js
  // Dropped
  <% const arrayB = _.uniq(arrayA) %>
  ```

  - We encourage the use of native JS API over Lodash, we find [this guide](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore) to be helpful.
  - If you prefer to use Lodash, you can always install it and make it available via [`Helper`](https://hexo.io/api/helper) API
- chore/ci: drop Node.js 8 and add Node.js 14 [@SukkaW] [#4255]
  - Node 8 has [reached EOL](https://github.com/nodejs/Release) on 31 Dec 2019.
- refactor: remove site config from theme config [@SukkaW] [#4145]
  - Previously `hexo.theme.config` is merged into `hexo.config`, they are now separated to avoid possible conflict in configuration.

## New feature

- feat([tag](https://hexo.io/api/tag)): show source of the error & beautify [@SukkaW] [#4420]
- feat([post_link](https://hexo.io/docs/tag-plugins#Include-Posts)): better error message when a post could not be located [#4426]
  - The error message is now clearer when there is an incorrect filename.
- skip assets of unpublished posts and delete them if exist [@DaemondShu] [#3489]
  - When there is an unpublished post:

  ``` yml
  ---
  title: Still a draft....
  published: false
  ---
  ```

  - That post including its assets will not be generated into the `public/` folder.
- feat(extend/injector): bring up new extend Injector [@SukkaW] [#4049]
  - Refer to the API [documentation](https://hexo.io/api/injector) for usage.
- feat: add prism highlight support [@SukkaW] [#4119]
  - Refer to the [documentation](https://hexo.io/docs/syntax-highlight#PrismJS) for usage.
- feat([tagcloud](https://hexo.io/docs/helpers#tagcloud)): new option class & level [@stevenjoezhang] [#4370]
  - Ability to add class name for CSS styling.
- feat(config): validate config before processing posts [@SukkaW] [#4381]
- feat(post_permalink): add `:second` attribute option for post permalink [@kkocdko] [#4185]
  - Example:

  ``` yml
  permalink: :year/:month/:day/:hour/:minute/:second/:title.html
  ```

  - Refer to [Permalinks](https://hexo.io/docs/permalinks) for available attributes.
- feat([youtube_tag](https://hexo.io/docs/tag-plugins#YouTube)): add cookie option [@curbengh] [#4155]
  - When disabled, cookie is not set/sent in the youtube video embed.
- feat(youtube_tag): support playlist [@SukkaW] [#4139]
  - Ability to embed a playlist.
- feat(load_theme_config): support alternate theme config [@SukkaW] [#4120]
  - Theme can be configured in a file `_config.[name].yml`, e.g. `_config.landscape.yml` for [hexo-theme-landscape](https://github.com/hexojs/hexo-theme-landscape).
  - Placed the file in the root folder, same as the current `_config.yml`.
  - Refer to the [documentation](https://hexo.io/docs/configuration#Alternate-Theme-Config) for configuration priority.
- feat([feed_tag](https://hexo.io/docs/helpers#feed-tag)): support parsing config.feed [@curbengh] [#4029]
  - Better integration with [hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed).
- feat(tag): add unregister() method [@SukkaW] [#4046]
  - This means you can now unregister existing [tag plugins](https://hexo.io/docs/tag-plugins) and replace it with your own with the same name.
- feat(filter): add `_after_html_render` filter [@jiangtj] [#4051]
  - perf(filter): set `after_render:html` as alias of `_after_html_render` [@curbengh] [#4073]
  - Existing `after_render:html` filter plugins automatically benefit from this improvement.
- feat(load_config): support theme_dir in node_modules [@SukkaW] [#4112]
- fix(list_tags): custom class for each element [@noraj] [#4059]
  - Customize the class name for each element `<ul>`, `<li>`, `<a>`, `<span>` for [list_tags](https://hexo.io/docs/helpers#list-tags) plugin.

## Performance

- perf(tag): rendering optimization [@SukkaW] [#4418]
- perf(external_link): faster regexp & condition shorthand [@SukkaW] [#4436]
- perf(external_link): optimize regex [@SukkaW] [#4008]
- perf(filter): shorthand syntax [@SukkaW] [#4377]
- perf(backtick_code): shorthand [@SukkaW] [#4369]
- perf: avoid running irrelevant plugins in 'clean' command [@curbengh] [#4386]
  - To maintain compatibility with third-party [console](https://hexo.io/api/console) plugins, this only applies to `hexo clean`, not `hexo c` alias.
- perf(titlecase): lazy require [@SukkaW] [#4417]
- perf(tag/code): performance improvements [@SukkaW] [#4416]
- perf(post): simplify codeblock escape [@SukkaW] [#4254]
- perf(meta_generator): avoid unnecessary check [@SukkaW] [#4208]
- perf(external_link): cache config [@SukkaW] [#4134]
- perf(open_graph): avoid using htmlTag() and enhance cache [@SukkaW] [#4125]
- refactor(list_archives): reduce calls to date.format() [@dailyrandomphoto] [#4011]
- fix(moment.locale): avoid lookup repeatedly with the wrong names [@dailyrandomphoto] [#4007]

## Fix

- fix(box): ignore .git and node modules in the theme folder [@jiangtj] [#4306]
- fix: allow empty title [@stevenjoezhang] [#4344]
- fix(#4236): don't create "/index" directories when [post_asset_folder](https://hexo.io/docs/asset-folders) is true [@jiangtj] [#4258]
- fix(#4317): non-greedy regexp for tag escape [@SukkaW] [#4358]
- fix(post): use non-greedy regular expressions [@stevenjoezhang] [#4161]
- fix(post): properly escape swig tag inside post [@SukkaW] [#4352]
  - swig tag inside a single backtick is now interpreted as code embed.
  - <pre><code>`{% foo %}{{ bar }}{% endfoo %}`</code></pre>
- fix(logging): log database only in relevant commands [@curbengh] [#4387]
  - `Writing database to ${dbPath}/db.json` message shouldn't show up in `hexo clean` and `hexo version`.
- fix(server-cache): must match exact alias [@curbengh] [#4388]
  - Improve compatibility with 3rd-party console plugins that may have a name that starts with an 's'.
- fix(tag-code): parse 'wrap' option [@curbengh] [#4391]
  - [`highlight.wrap`](https://hexo.io/docs/configuration#Writing) option in user config is now properly passed to the [`codeblock`](https://hexo.io/docs/tag-plugins#Code-Block) tag plugin
- fix: remove unused type check [@Himself65] [#4398]
- fix: access error code from error object directly [@SukkaW] [#4280]
  - Improve compatibility with native JS API
- fix: load_plugin with extra line EOF [@SukkaW] [#4256]
- fix: parsing code error in backticks [@seaoak] [#4229]
- fix(toc_helper): escape class name and handle null id [@curbengh] [#4009]
- fix(meta_generator): match existing `<meta>` with different order [@SukkaW] [#4017]
- fix(excerpt): stricter regex [@curbengh] [#4443]
  - Now only the following variants of [excerpt tag](https://hexo.io/docs/tag-plugins#Post-Excerpt) are valid.
  1. `<!--more-->`
  2. `<!-- more-->`
  3. `<!--more -->`
  4. `<!-- more -->`

## Refactor

- refactor(meta_generator): no longer ignore empty [@SukkaW] [#4442]
- refactor(external_link): migrate config during load_config [@SukkaW] [#4414]
- Reduce array#reduce [@segayuu] [#4299]
- Correct using createSha1Hash() with pipe() [@seaoak] [#4323]
- refactor(post): reduce promise [@SukkaW] [#4337]
- refactor: simplify code [@2997ms] [#4408]
- refactor(external_link): filter regexp [@segayuu] [#4412]
- refactor(hexo): merge theme_config before generation [@SukkaW] [#4360]
- refactor(nunjucks): dedicated nunjucks renderer [@SukkaW] [#4356]
- refactor: drop hexo-util#HashStream [@SukkaW] [#4279]
- refactor(toc): avoid using htmlTag [@SukkaW] [#4183]
- refactor(hexo_index): remove unused parameter [@curbengh] [#4153]
- Refactor(class): Replace prototype to class syntax [@segayuu] [#4151]
- refactor: copy object with spread operator [@SukkaW] [#4140]
- refactor: simplify code [@Himself65] [#4138]
- refactor: utilize Object.entries [@SukkaW] [#4118]
- refactor: utilize hexo-util pr-169 [@SukkaW] [#4045]
- refactor(hexo/index): use Set [@SukkaW] [#4013]
- refactor: Class syntax [@SukkaW] [#4100]
- refactor(helper): minor changes [@SukkaW] [#4061]
- style: space for asyncArrow [@SukkaW] [#4102]
- Reduce stream [@segayuu] [#4333]

## Misc

- refactor: port shell script to javascript [@Himself65] [#4405]
- refactor(console/generate): class & destructure assign [@SukkaW] [#4338]
- Fix not to pass callback to hexo-fs [@segayuu] [#4339]
- style: es6 string extensions & destructure [@SukkaW] [#4357]
- Migrate Travis and Appveyor tp GitHub Actions
  - ci(appveyor): drop appveyor [@SukkaW] [#4402]
  - chore: add release release-drafter (#3858) [@YoshinoriN] [#4165]
  - ci: add GitHub Actions to run linter [@Himself65] [#4143]
  - ci(travis): remove Windows [@curbengh] [#4076]
  - ci(github_actions): Create tester job [@segayuu] [#4169]
  - Move coveralls from travis to github actions [@segayuu] [#4326]
- ci(benchmark): generate flamegraph [@SukkaW] [#4000]
- ci(flamegraph): fix 0x [@SukkaW] [#4116]
- Fix issues found by [lgtm.com](https://lgtm.com/projects/g/hexojs/hexo/)
  - fix(console_generate): remove unnecessary boolean-to-object conversion [@curbengh] [#4152]
  - fix: remove useless conditions [@curbengh] [#4147]
  - fix: return callback if called [@curbengh] [#4178]
- refactor(benchmark): minor changes [@SukkaW] [#4411]
- github(issue_template): add special notice [@SukkaW] [#4348]
  - add mandarin issue template

Refer to the [release note](https://github.com/hexojs/hexo/releases/tag/5.0.0) for a complete changelog.

[#4414]: https://github.com/hexojs/hexo/pull/4414
[#4371]: https://github.com/hexojs/hexo/pull/4371
[#4379]: https://github.com/hexojs/hexo/pull/4379
[#3328]: https://github.com/hexojs/hexo/issues/3328
[#4278]: https://github.com/hexojs/hexo/pull/4278
[#4174]: https://github.com/hexojs/hexo/pull/4174
[#4359]: https://github.com/hexojs/hexo/pull/4359
[#4266]: https://github.com/hexojs/hexo/pull/4266
[#4255]: https://github.com/hexojs/hexo/pull/4255
[#4145]: https://github.com/hexojs/hexo/pull/4145
[#4420]: https://github.com/hexojs/hexo/pull/4420
[#4426]: https://github.com/hexojs/hexo/pull/4426
[#3489]: https://github.com/hexojs/hexo/pull/3489
[#4049]: https://github.com/hexojs/hexo/pull/4049
[#4119]: https://github.com/hexojs/hexo/pull/4119
[#4370]: https://github.com/hexojs/hexo/pull/4370
[#4381]: https://github.com/hexojs/hexo/pull/4381
[#4185]: https://github.com/hexojs/hexo/pull/4185
[#4155]: https://github.com/hexojs/hexo/pull/4155
[#4139]: https://github.com/hexojs/hexo/pull/4139
[#4120]: https://github.com/hexojs/hexo/pull/4120
[#4029]: https://github.com/hexojs/hexo/pull/4029
[#4046]: https://github.com/hexojs/hexo/pull/4046
[#4051]: https://github.com/hexojs/hexo/pull/4051
[#4073]: https://github.com/hexojs/hexo/pull/4073
[#4112]: https://github.com/hexojs/hexo/pull/4112
[#4059]: https://github.com/hexojs/hexo/pull/4059
[#4418]: https://github.com/hexojs/hexo/pull/4418
[#4436]: https://github.com/hexojs/hexo/pull/4436
[#4008]: https://github.com/hexojs/hexo/pull/4008
[#4377]: https://github.com/hexojs/hexo/pull/4377
[#4369]: https://github.com/hexojs/hexo/pull/4369
[#4386]: https://github.com/hexojs/hexo/pull/4386
[#4417]: https://github.com/hexojs/hexo/pull/4417
[#4416]: https://github.com/hexojs/hexo/pull/4416
[#4254]: https://github.com/hexojs/hexo/pull/4254
[#4208]: https://github.com/hexojs/hexo/pull/4208
[#4134]: https://github.com/hexojs/hexo/pull/4134
[#4125]: https://github.com/hexojs/hexo/pull/4125
[#4011]: https://github.com/hexojs/hexo/pull/4011
[#4007]: https://github.com/hexojs/hexo/pull/4007
[#4306]: https://github.com/hexojs/hexo/pull/4306
[#4344]: https://github.com/hexojs/hexo/pull/4344
[#4258]: https://github.com/hexojs/hexo/pull/4258
[#4358]: https://github.com/hexojs/hexo/pull/4358
[#4161]: https://github.com/hexojs/hexo/pull/4161
[#4352]: https://github.com/hexojs/hexo/pull/4352
[#4387]: https://github.com/hexojs/hexo/pull/4387
[#4388]: https://github.com/hexojs/hexo/pull/4388
[#4391]: https://github.com/hexojs/hexo/pull/4391
[#4398]: https://github.com/hexojs/hexo/pull/4398
[#4280]: https://github.com/hexojs/hexo/pull/4280
[#4256]: https://github.com/hexojs/hexo/pull/4256
[#4229]: https://github.com/hexojs/hexo/pull/4229
[#4009]: https://github.com/hexojs/hexo/pull/4009
[#4017]: https://github.com/hexojs/hexo/pull/4017
[#4443]: https://github.com/hexojs/hexo/pull/4443
[#4442]: https://github.com/hexojs/hexo/pull/4442
[#4299]: https://github.com/hexojs/hexo/pull/4299
[#4323]: https://github.com/hexojs/hexo/pull/4323
[#4337]: https://github.com/hexojs/hexo/pull/4337
[#4408]: https://github.com/hexojs/hexo/pull/4408
[#4412]: https://github.com/hexojs/hexo/pull/4412
[#4360]: https://github.com/hexojs/hexo/pull/4360
[#4356]: https://github.com/hexojs/hexo/pull/4356
[#4279]: https://github.com/hexojs/hexo/pull/4279
[#4183]: https://github.com/hexojs/hexo/pull/4183
[#4153]: https://github.com/hexojs/hexo/pull/4153
[#4151]: https://github.com/hexojs/hexo/pull/4151
[#4140]: https://github.com/hexojs/hexo/pull/4140
[#4138]: https://github.com/hexojs/hexo/pull/4138
[#4118]: https://github.com/hexojs/hexo/pull/4118
[#4045]: https://github.com/hexojs/hexo/pull/4045
[#4013]: https://github.com/hexojs/hexo/pull/4013
[#4100]: https://github.com/hexojs/hexo/pull/4100
[#4061]: https://github.com/hexojs/hexo/pull/4061
[#4102]: https://github.com/hexojs/hexo/pull/4102
[#4333]: https://github.com/hexojs/hexo/pull/4333
[#4405]: https://github.com/hexojs/hexo/pull/4405
[#4338]: https://github.com/hexojs/hexo/pull/4338
[#4339]: https://github.com/hexojs/hexo/pull/4339
[#4357]: https://github.com/hexojs/hexo/pull/4357
[#4402]: https://github.com/hexojs/hexo/pull/4402
[#4165]: https://github.com/hexojs/hexo/pull/4165
[#4143]: https://github.com/hexojs/hexo/pull/4143
[#4076]: https://github.com/hexojs/hexo/pull/4076
[#4169]: https://github.com/hexojs/hexo/pull/4169
[#4326]: https://github.com/hexojs/hexo/pull/4326
[#4000]: https://github.com/hexojs/hexo/pull/4000
[#4116]: https://github.com/hexojs/hexo/pull/4116
[#4152]: https://github.com/hexojs/hexo/pull/4152
[#4147]: https://github.com/hexojs/hexo/pull/4147
[#4178]: https://github.com/hexojs/hexo/pull/4178
[#4411]: https://github.com/hexojs/hexo/pull/4411
[#4348]: https://github.com/hexojs/hexo/pull/4348
[@SukkaW]: https://github.com/SukkaW
[@curbengh]: https://github.com/curbengh
[@DaemondShu]: https://github.com/DaemondShu
[@stevenjoezhang]: https://github.com/stevenjoezhang
[@kkocdko]: https://github.com/kkocdko
[@jiangtj]: https://github.com/jiangtj
[@noraj]: https://github.com/noraj
[@dailyrandomphoto]: https://github.com/dailyrandomphoto
[@Himself65]: https://github.com/Himself65
[@seaoak]: https://github.com/seaoak
[@segayuu]: https://github.com/segayuu
[@2997ms]: https://github.com/2997ms
[@YoshinoriN]: https://github.com/YoshinoriN
