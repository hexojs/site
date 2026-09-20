---
title: hexo 8.1.0 Released
---

refs: [GitHub Release Note: v8.1.0](https://github.com/hexojs/hexo/releases/tag/v8.1.0)

## Performances

- perf: fix potential cache miss issues with moize by [@D-Sketon] in [#5694](https://github.com/hexojs/hexo/pull/5694)
- perf: reduce ObjectAssign overhead by [@D-Sketon] in [#5698](https://github.com/hexojs/hexo/pull/5698)
- perf: faster archy by [@D-Sketon] in [#5700](https://github.com/hexojs/hexo/pull/5700)
- perf: reduce the number of match calls in metaGenerator by [@D-Sketon] in [#5707](https://github.com/hexojs/hexo/pull/5707)
- perf: faster `escapeAllSwigTags` by [@D-Sketon] in [#5699](https://github.com/hexojs/hexo/pull/5699)

## Fixes

- fix/perf: Incorrect TOC anchor generation by [@D-Sketon] in [#5696](https://github.com/hexojs/hexo/pull/5696)
- fix(regression): missing tags and categories when running `hexo s` with cache existed by [@D-Sketon] in [#5697](https://github.com/hexojs/hexo/pull/5697)
- fix: fix ts error in test by [@D-Sketon] in [#5709](https://github.com/hexojs/hexo/pull/5709)
- fix(regression): remove overly strict invalid tag format check in Swig parser by [@D-Sketon] in [#5691](https://github.com/hexojs/hexo/pull/5691)
- fix(processor/post): updated post assets not being copied in hot processing when `post_asset_folder` is enabled by [@yoshinorin] in [#5704](https://github.com/hexojs/hexo/pull/5704)
- fix: nunjucks/code blocks in HTML comments were incorrectly converted by [@D-Sketon] in [#5616](https://github.com/hexojs/hexo/pull/5616)

## Refactor

- refactor(toc): support skipping heading level by [@stevenjoezhang] in [#5653](https://github.com/hexojs/hexo/pull/5653)

## Dependencies

- chore: bump actions/setup-node from 5 to 6 by @dependabot[bot] in [#5708](https://github.com/hexojs/hexo/pull/5708)
- chore(deps): bump actions/download-artifact from 4 to 5 by @dependabot[bot] in [#5682](https://github.com/hexojs/hexo/pull/5682)
- chore(deps): bump actions/download-artifact from 5 to 6 by @dependabot[bot] in [#5710](https://github.com/hexojs/hexo/pull/5710)
- chore(deps): bump actions/upload-artifact from 4 to 5 by @dependabot[bot] in [#5711](https://github.com/hexojs/hexo/pull/5711)
- chore(deps): bump hexo-util from 3 to 4 by [@D-Sketon] in [#5712](https://github.com/hexojs/hexo/pull/5712)

## Full Changelog

- [v8.0.0...v8.1.0](https://github.com/hexojs/hexo/compare/v8.0.0...v8.1.0)

[@stevenjoezhang]: https://github.com/stevenjoezhang
[@D-Sketon]: https://github.com/D-Sketon
[@yoshinorin]: https://github.com/yoshinorin
