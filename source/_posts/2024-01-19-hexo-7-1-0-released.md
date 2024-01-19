---
title: Hexo 7.1.0 Released
---

> [GitHub Release Note: v7.1.0](https://github.com/hexojs/hexo/releases/tag/v7.1.0)

## Notable Changes

* chore(Hexo): add event emitter descriptor by [@dimaslanjaka] in [#5302](https://github.com/hexojs/hexo/pull/5302)
* refactor: refactor types by [@D-Sketon] in [#5344](https://github.com/hexojs/hexo/pull/5344)

## New Features

* Added URL hash support for post_link tag by [@iliayatsenko] in [#5356](https://github.com/hexojs/hexo/pull/5356)

## Fixes

* fix(types): cast from `number` to `string` explicitly by [@yoshinorin] in [#5342](https://github.com/hexojs/hexo/pull/5342)
* fix: permalink should be overwritten when post_asset_folder is true by [@D-Sketon] in [#5254](https://github.com/hexojs/hexo/pull/5254)
* fix(escapeAllSwigTags): check tag completeness by [@uiolee] in [#5395](https://github.com/hexojs/hexo/pull/5395)

## CI/CD

* ci(commenter): use workflows_run event to comment flamegraph by [@uiolee] in [#5384](https://github.com/hexojs/hexo/pull/5384)
* ci(benchmark): add PR permissions for comment by [@uiolee] in [#5334](https://github.com/hexojs/hexo/pull/5334)

## Dependencies

* chore: bump typescript from 4.9.5 to 5.3.2 by @dependabot in [#5358](https://github.com/hexojs/hexo/pull/5358)
* chore(deps-dev): remove @ts/eslint-plugin, parser by [@uiolee] in [#5290](https://github.com/hexojs/hexo/pull/5290)
* chore: bump c8 from 8.0.1 to 9.0.0 by @dependabot in [#5290](https://github.com/hexojs/hexo/pull/5391)
* chore(dev-deps): bump sinon from 15.2.0 to 17.0.1 by @dependabot in [#5343](https://github.com/hexojs/hexo/pull/5343)
* chore(dev-deps): bump lint-staged from 14.0.1 to 15.2.0 by @dependabot in [#5373](https://github.com/hexojs/hexo/pull/5373)

## New Contributors

* [@iliayatsenko] made their first contribution in [#5356](https://github.com/hexojs/hexo/pull/5356)

## Full Changelog

[v7.0.0...v7.1.0](https://github.com/hexojs/hexo/compare/v7.0.0...v7.1.0)

[@uiolee]: https://github.com/uiolee
[@iliayatsenko]: https://github.com/iliayatsenko
[@D-Sketon]: https://github.com/D-Sketon
[@dimaslanjaka]: https://github.com/dimaslanjaka
[@yoshinorin]: https://github.com/yoshinorin
