---
title: hexo 8.0.0 Released
---

refs: [GitHub Release Note: v8.0.0](https://github.com/hexojs/hexo/releases/tag/v8.0.0)

## Breaking Changes

- chore: drop Node.js 16 by [@stevenjoezhang] in [#5592](https://github.com/hexojs/hexo/pull/5592)
- chore: drop Node.js 18 by [@stevenjoezhang] in [#5674](https://github.com/hexojs/hexo/pull/5674)

## New Features

- feat: bind hexo context to helper function callback by [@dimaslanjaka] in [#5555](https://github.com/hexojs/hexo/pull/5555)
- feat: add url config validation by [@ShaytonXu] in [#5578](https://github.com/hexojs/hexo/pull/5578)
- feat: add permalink variable `timestamp` by [@uiolee] in [#5611](https://github.com/hexojs/hexo/pull/5611)
- feat: Support additional options for Backtick Code Block by [@D-Sketon] in [#5625](https://github.com/hexojs/hexo/pull/5625)
- feat(load_config): enforce stricter extension checks by [@stevenjoezhang] in [#5591](https://github.com/hexojs/hexo/pull/5591)

## Fixes

- fix:changed the judgement of whether it has been injected by [@mRNA16] in [#5573](https://github.com/hexojs/hexo/pull/5573)
- fix(escapeAllSwigTags): backtrack when tag is incomplete by [@D-Sketon] in [#5618](https://github.com/hexojs/hexo/pull/5618)
- fix: `hexo.locals.get('posts')` doesn't show all posts by [@D-Sketon] in [#5612](https://github.com/hexojs/hexo/pull/5612)
- fix: Parsing error for code blocks in list items by [@D-Sketon] in [#5617](https://github.com/hexojs/hexo/pull/5617)
- fix(open_graph): sort the tags by [@stevenjoezhang] in [#5656](https://github.com/hexojs/hexo/pull/5656)
- Escape HTML in title of `code` and `include_code` tags by [@tommy351] in [#5688](https://github.com/hexojs/hexo/pull/5688)

## Performances

- perf(external_link): optimize external link filter by [@D-Sketon] in [#5598](https://github.com/hexojs/hexo/pull/5598)
- perf(PostCategory/PostTag): add binary relation index for performance by [@D-Sketon] in [#5605](https://github.com/hexojs/hexo/pull/5605)
- perf(listArchives): add cache for posts by [@D-Sketon] in [#5624](https://github.com/hexojs/hexo/pull/5624)
- perf(escapeAllSwigTags): reducing GC overhead by [@D-Sketon] in [#5620](https://github.com/hexojs/hexo/pull/5620)
- perf: skip tag render when there is no swigTags by [@D-Sketon] in [#5650](https://github.com/hexojs/hexo/pull/5650)
- perf: faster text-table by [@D-Sketon] in [#5665](https://github.com/hexojs/hexo/pull/5665)
- warehouse6
  - perf(model): add caching for data keys by [@D-Sketon] in [#271](https://github.com/hexojs/warehouse/pull/271)

## Refactor

- refactor(common): delete unused function `ignoreTmpAndHiddenFile` by [@yoshinorin] in [#5600](https://github.com/hexojs/hexo/pull/5600)
- delete scripts `pretest` by [@uiolee] in [#5610](https://github.com/hexojs/hexo/pull/5610)
- refactor(moment): remove unused timezone setting by [@stevenjoezhang] in [#5654](https://github.com/hexojs/hexo/pull/5654)

## Test

- test(box/file): extend the mocha timeout to prevent the async file read test from failing by [@yoshinorin] in [#5601](https://github.com/hexojs/hexo/pull/5601)
- test: improve coverage by [@D-Sketon] in [#5638](https://github.com/hexojs/hexo/pull/5638)

## Depenrencies

- chore(deps-dev): bump @types/node to ^20.16.10 by [@uiolee] in [#5558](https://github.com/hexojs/hexo/pull/5558)
- chore(deps): remove resolve by [@stevenjoezhang] in [#5594](https://github.com/hexojs/hexo/pull/5594)
- chore(deps): update dependencies by [@yoshinorin] in [#5597](https://github.com/hexojs/hexo/pull/5597)
- chore(deps): update `cheerio` from `0.22` to `1.0.0` by [@yoshinorin] in [#5603](https://github.com/hexojs/hexo/pull/5603)
- chore(deps): migrate `husky` from `8.x` to `9.x` by [@yoshinorin] in [#5602](https://github.com/hexojs/hexo/pull/5602)
- chore(deps): update eslint by [@stevenjoezhang] in [#5599](https://github.com/hexojs/hexo/pull/5599)
- chore(deps): bump actions/checkout from 4 to 5 by [@dependabot[bot]] in [#5684](https://github.com/hexojs/hexo/pull/5684)
- chore(deps): bump strip-ansi from 6.0.1 to 7.1.0 by [@dependabot[bot]] in [#5218](https://github.com/hexojs/hexo/pull/5218)
- chore: bump actions/setup-node from 4 to 5 by [@dependabot[bot]] in [#5687](https://github.com/hexojs/hexo/pull/5687)

## Misc

- chore(lint): apply eslint to test files by [@yoshinorin] in [#5655](https://github.com/hexojs/hexo/pull/5655)

## New Contributors

- [@mRNA16] made their first contribution in [#5573](https://github.com/hexojs/hexo/pull/5573)
- [@ShaytonXu] made their first contribution in [#5578](https://github.com/hexojs/hexo/pull/5578)

## Full Changelog

- [v7.3.0...v8.0.0](https://github.com/hexojs/hexo/compare/v7.3.0...v8.0.0)

[@stevenjoezhang]: https://github.com/stevenjoezhang
[@uiolee]: https://github.com/uiolee
[@dimaslanjaka]: https://github.com/dimaslanjaka
[@ShaytonXu]: https://github.com/ShaytonXu
[@D-Sketon]: https://github.com/D-Sketon
[@yoshinorin]: https://github.com/yoshinorin
[@mRNA16]: https://github.com/mRNA16
[@tommy351]: https://github.com/tommy351
