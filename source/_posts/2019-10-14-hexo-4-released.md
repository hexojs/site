---
title: Hexo 4.0.0 Released
---

To upgrade to Hexo v4, change the following line in your package.json,

``` diff
-  "hexo": "^3.9.0",
+  "hexo": "^4.0.0",
```

## Breaking change

- chore: drop Node 6 [#3598]
- fix post_link, asset_link when title contains unescaped html charaters [#3704]
  - Affects `asset_link`, `post_link` [tag plugins](https://hexo.io/docs/tag-plugins)
  - If you want to retain unescaped characters, set `false` to the final argument `{% asset_link 'filename 'title' 'false' %}`
- fix: encode permalink by default [#3708]
  - If you currently use `encodeURI(post.permalink)` (including `permalink` of page, tag & category variables), there are three options:
    1. Use `encodeURI(decodeURI(post.permalink))` for backward-compatibility with hexo v3.9 (and older)
    2. Use [`encodeURL()`](https://github.com/hexojs/hexo-util#encodeurlstr) function provided by hexo-util, it is backward-compatible
    3. Drop `encodeURI()` function, this breaks backward-compatibility
  - If you want to use the variables in decoded form,
    - Use `decodeURI(post.permalink)`
    - [`decodeURL()`](https://github.com/hexojs/hexo-util#decodeurlstr) of hexo-util can decode [punycoded](https://en.wikipedia.org/wiki/Punycode) domain.
  - This change does not apply to `this.url` variable.
- fix(paginator): add `escape` option for compatibility with hexo-util 1.3.0 [#3728]
  - Theme devs, if you customize `prev_text`/`next_text` with html (e.g. to insert icons), you need to set [`escape: false`](https://github.com/theme-next/hexo-theme-next/blob/7d6272274afcc88edcefe3504e452a502c05329f/layout/_partials/pagination.swig#L8) in the parameter.

## Feature

- feat(filter): use existing excerpt if possible [#3612]
  - Support `excerpt:` in [front-matter](https://hexo.io/docs/front-matter)
- switch minimatch to micromatch [#3538]
  - Refer to [micromatch docs](https://github.com/micromatch/micromatch#extended-globbing) for advanced globbing
- feat: add option to disable meta generator tag [#3653]
  - Add `meta_generator: false` to config to disable
- feat(generator): allow limit parallel generation [#3665]
  - If you experience "Out of memory" issue, try lowering the value in `hexo g --concurrency <number>`
- Option to use date instead of file mtime for updated date [#3235]
  - If you prefer not to use file modification time in the `post.updated` variable, set `use_date_for_updated: true` in config
- feat(list_tags): add Schema "keywords" and Microdata "tag" [#3678]
- feat(permalink_variable): add pretty_urls option to remove index.html from url [#3691]
  - Use the following config to remove the trailing `index.html` from `permalink` [variables](https://hexo.io/docs/variables)

  ``` yml
  pretty_urls:
    trailing_index: false
  ```

  - Does not apply to `this.url` variable (see [#3661]).
  - Should be compatible with existing canonical-related plugins, recommend plugin and theme devs to test
- feat: add `full_url_for` helper [#3701]
  - use this helper `full_url_for(page.path)` instead of `config.url + page.path`
- fix: external_link should use after_render [#3675]
  - added `field` and `exclude` options, see [#3675] for guide.

## Performance

- perf(meta_generator): drop cheerio [#3671]
- perf(open_graph): drop cheerio and use regex [#3680]
- perf(external_link): drop cheerio and use regex [#3685]
- perf(cache): enforce caching across modes [#3756]

## Fix

- fix: set english as default [#3654]
- Use filename when title is not specified in the front-matter [#3672]
- fix: ignore categories / tags with zero posts [#3624]
- fix(open_graph): remove index.html from url [#3661]
- fix(open_graph): remove duplicate twitter card tags [#3668]
- fix(helpers, tag plugins): encode url by default [#3710]
  - Refer to [#3708] for guide on decoding.
- fix(open_graph): percent-encode url, not html escape [#3686]
- fix: Allow backtick code block in "blockquote" tag plugin [#2321]
- fix: Correct processing of backtick code block on blockquote [#3765]
- fix: prevent inserting extra new line character into the end of backtick code block [#3768]

## Dependency

- chore(deps): update tildify requirement from ^1.2.0 to ^2.0.0 [#3541]
- chore(deps): update strip-indent requirement from ^2.0.0 to ^3.0.0 [#3534]
- chore(deps-dev): update husky requirement from ^1.1.3 to ^3.0.0 [#3608]
- chore(deps-dev): update eslint requirement from ^5.9.0 to ^6.0.1 [#3606]
- chore(deps-dev): update lint-staged requirement from ^8.1.0 to ^9.1.0 [#3615]
- chore: update to hexo-util 1.0.1 and hexo-renderer-marked 2.0.0 [#3646]
- chore(deps): update hexo-i18n requirement from ^0.2.1 to ^1.0.0 [#3698]
- chore(deps): update hexo-fs requirement from ^1.0.0 to ^2.0.0 [#3699]
- chore(deps): update hexo-front-matter requirement from ^0.2.3 to ^1.0.0 [#3700]
- chore(deps): update hexo-log requirement from ^0.2.0 to ^1.0.0 [#3730]
- chore(deps): update warehouse requirement from ^2.2.0 to ^3.0.0 [#3736]
- chore(deps): bump hexo-cli from 2.0.0 to 3.0.0 [#3743]

[#3598]: https://github.com/hexojs/hexo/pull/3598
[#3704]: https://github.com/hexojs/hexo/pull/3704
[#3708]: https://github.com/hexojs/hexo/pull/3708
[#3728]: https://github.com/hexojs/hexo/pull/3728
[#3612]: https://github.com/hexojs/hexo/pull/3612
[#3538]: https://github.com/hexojs/hexo/pull/3538
[#3653]: https://github.com/hexojs/hexo/pull/3653
[#3665]: https://github.com/hexojs/hexo/pull/3665
[#3235]: https://github.com/hexojs/hexo/pull/3235
[#3678]: https://github.com/hexojs/hexo/pull/3678
[#3691]: https://github.com/hexojs/hexo/pull/3691
[#3661]: https://github.com/hexojs/hexo/pull/3661
[#3668]: https://github.com/hexojs/hexo/pull/3668
[#3701]: https://github.com/hexojs/hexo/pull/3701
[#3675]: https://github.com/hexojs/hexo/pull/3675
[#3654]: https://github.com/hexojs/hexo/pull/3654
[#3671]: https://github.com/hexojs/hexo/pull/3671
[#3680]: https://github.com/hexojs/hexo/pull/3680
[#3685]: https://github.com/hexojs/hexo/pull/3685
[#3672]: https://github.com/hexojs/hexo/pull/3672
[#3624]: https://github.com/hexojs/hexo/pull/3624
[#3661]: https://github.com/hexojs/hexo/pull/3661
[#3710]: https://github.com/hexojs/hexo/pull/3710
[#3686]: https://github.com/hexojs/hexo/pull/3686
[#3756]: https://github.com/hexojs/hexo/pull/3756
[#2321]: https://github.com/hexojs/hexo/pull/2321
[#3765]: https://github.com/hexojs/hexo/pull/3765
[#3768]: https://github.com/hexojs/hexo/pull/3768
[#3541]: https://github.com/hexojs/hexo/pull/3541
[#3534]: https://github.com/hexojs/hexo/pull/3534
[#3608]: https://github.com/hexojs/hexo/pull/3608
[#3606]: https://github.com/hexojs/hexo/pull/3606
[#3615]: https://github.com/hexojs/hexo/pull/3615
[#3646]: https://github.com/hexojs/hexo/pull/3646
[#3698]: https://github.com/hexojs/hexo/pull/3698
[#3699]: https://github.com/hexojs/hexo/pull/3699
[#3700]: https://github.com/hexojs/hexo/pull/3700
[#3730]: https://github.com/hexojs/hexo/pull/3730
[#3736]: https://github.com/hexojs/hexo/pull/3736
[#3743]: https://github.com/hexojs/hexo/pull/3743
