---
title: Hexo 7.0.0 (RC1) Released
---

> [GitHub Release Note: v7.0.0 (RC1)](https://github.com/hexojs/hexo/releases/tag/v7.0.0-rc1)

## Migration Guide

Some of the built-in tags have been dropped (E.g. `gist`, `youtube`, `jsfiddle`, and `vimeo`). If you use those tags in your existing blog posts, you can install [hexo-tag-embed](https://github.com/hexojs/hexo-tag-embed) to continue using them with Hexo 7.0.0.

```sh
$ npm i hexo-tag-embed
```

> **Note**
>
> No need to install if you are not using (or will not use) `gist`, `youtube`, `jsfiddle`, `vimeo` tags in your post or page.

## Breaking Changes

* chore: require node14+ by [@yoshinorin] in [#5061](https://github.com/hexojs/hexo/pull/5061)
* Dropped tag features. Please see `Migration Guide` section.
    * refactor: drop `gist` tag by [@yoshinorin] in [#5067](https://github.com/hexojs/hexo/pull/5067)
    * refactor: drop `youtube` tag by [@yoshinorin] in [#5064](https://github.com/hexojs/hexo/pull/5064)
    * refactor: drop `jsfiddle` tag by [@yoshinorin] in [#5066](https://github.com/hexojs/hexo/pull/5066)
    * refactor: drop `vimeo` tag by [@yoshinorin] in [#5065](https://github.com/hexojs/hexo/pull/5065)
* Dropped features
    * refactor: drop `external_link` boolean type by [@yoshinorin] in [#5063](https://github.com/hexojs/hexo/pull/5063)
    * refactor: drop `use_date_for_updated` option for `updated_option` by [@yoshinorin] in [#5062](https://github.com/hexojs/hexo/pull/5062)

## Notable Changes

* Migrate TypeSctipt
    * refactor: prepare for migration to typescript by [@stevenjoezhang] in [#5094](https://github.com/hexojs/hexo/pull/5094)
    * refactor: migrate typescript by [@stevenjoezhang] in [#5092](https://github.com/hexojs/hexo/pull/5092)

## New Features

* feat(tags/post_link): search for both slug and title by [@stevenjoezhang] in [#5114](https://github.com/hexojs/hexo/pull/5114)
* feat(open_graph): drop google_plus by [@stevenjoezhang] in [#5115](https://github.com/hexojs/hexo/pull/5115)
* feat(tags/img): support quotes in img title and alt by [@stevenjoezhang] in [#5112](https://github.com/hexojs/hexo/pull/5112)
* feat(console-new): support default title from path by [@xu-song] in [#4714](https://github.com/hexojs/hexo/pull/4714)
* feat: add an option to disable titlecase in post by [@renbaoshuo] in [#5156](https://github.com/hexojs/hexo/pull/5156)

## Fixes

* fix(#1099): hexo server error when changing the config by [@D-Sketon] in [#5055](https://github.com/hexojs/hexo/pull/5055)
* fix: exclude_languages does not work in code blocks by [@stevenjoezhang] in [#5088](https://github.com/hexojs/hexo/pull/5088)
* When promisifying, store does not preserve disableNunjucks property by [@tcr] in [#2670](https://github.com/hexojs/hexo/pull/2670)
* fix(post): skip before_post_render and after_post_render on non-posts by [@stevenjoezhang] in [#5118](https://github.com/heojs/hexo/pull/5118)
* fix: Failed to create post with special character title by [@D-Sketon] in [#5149](https://github.com/hexojs/hexo/pull/5149)
* fix(box): check for invalid file by [@stevenjoezhang] in [#5173](https://github.com/hexojs/hexo/pull/5173)

## Performance

* perf: reduce the number of traversals through posts by [@stevenjoezhang] in [#5119](https://github.com/hexojs/hexo/pull/5119)

## Refactor

* refactor highlight: add extend api for highlight by [@stevenjoezhang] in [#5095](https://github.com/hexojs/hexo/pull/5095)
* refactor: use the `WHATWG URL API` instead of `url.resolve` by [@yoshinorin] in [#5136](https://github.com/hexojs/hexo/pull/5136)

## Dependencies

* chore: bump sinon from 13.0.2 to 14.0.0 by @dependabot in [#4965](https://github.com/hexojs/hexo/pull/4965)
* chore: bump lint-staged from 11.2.6 to 13.0.3 by @dependabot in [#5008](https://github.com/hexojs/hexo/pull/5008)
* chore: bump husky from 7.0.4 to 8.0.1 by @dependabot in [#4966](https://github.com/hexojs/hexo/pull/4966)
* chore: bump hexo-fs from 3.1.0 to 4.0.0 by @dependabot in [#5077](https://github.com/hexojs/hexo/pull/5077)
* chore: bump hexo-renderer-marked from 5.0.0 to 6.0.0 by @dependabot in [#5081](https://github.com/hexojs/hexo/pull/5081)
* chore: bump hexo-front-matter from 3.0.0 to 4.0.0 by @dependabot in [#5087](https://github.com/hexojs/hexo/pull/5087)
* chore: bump abbrev from 1.1.1 to 2.0.0 by @dependabot in [#5093](https://github.com/hexojs/hexo/pull/5093)
* chore: bump hexo-i18n from 1.0.0 to 2.0.0 by @dependabot in [#5099](https://github.com/hexojs/hexo/pull/5099)
* chore: bump hexo-util from 2.7.0 to 3.0.1 by @dependabot in [#5107](https://github.com/hexojs/hexo/pull/5107)
* chore: bump warehouse from 4.0.2 to 5.0.0 by @dependabot in [#5101](https://github.com/hexojs/hexo/pull/5101)
* chore(deps): update `hexo-log` from `3.2.0` to `4.0.1` by [@yoshinorin] in [#5096](https://github.com/hexojs/hexo/pull/5096)
* chore: bump sinon from 14.0.2 to 15.0.0 by @dependabot in [#5121](https://github.com/hexojs/hexo/pull/5121)

## Test

* test(benchmark): update hexo-many-posts repo by [@SukkaW] in [#5128](https://github.com/hexojs/hexo/pull/5128)
* test(list_route): improve coverage by [@stevenjoezhang] in [#5097](https://github.com/hexojs/hexo/pull/5097)

## New Contributors

* [@D-Sketon] made their first contribution in [#5055](https://github.com/hexojs/hexo/pull/5055)
* [@xu-song] made their first contribution in [#4714](https://github.com/hexojs/hexo/pull/4714)
* [@tcr] made their first contribution in [#2670](https://github.com/hexojs/hexo/pull/2670)

## Full Changelog

* [#](https://github.com/hexojs/hexo/compare/6.3.0...v7.0.0-rc1

[@stevenjoezhang]: https://github.com/stevenjoezhang
[@renbaoshuo]: https://github.com/renbaoshuo
[@xu-song]: https://github.com/xu-song
[@D-Sketon]: https://github.com/D-Sketon
[@tcr]: https://github.com/tcr
[@SukkaW]: https://github.com/SukkaW
[@yoshinorin]: https://github.com/yoshinorin