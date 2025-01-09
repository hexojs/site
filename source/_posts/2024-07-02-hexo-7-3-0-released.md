---
title: hexo 7.3.0 Released
---

refs: [GitHub Release Note: v7.3.0](https://github.com/hexojs/hexo/releases/tag/v7.3.0)

## New Features

- feat(renderScaffold): deepMerge frontMatter of post and scaffold by [@uiolee] in [#5472](https://github.com/hexojs/hexo/pull/5472)
- feat: add option to use slug as title of post by [@uiolee] in [#5470](https://github.com/hexojs/hexo/pull/5470)
- feat(helper/toc): specify maximum number of items to output by [@KentarouTakeda] in [#5487](https://github.com/hexojs/hexo/pull/5487)

## Fixes

- Revert "refactor: backslashes on Windows (#5457)" by [@stevenjoezhang] in [#5481](https://github.com/hexojs/hexo/pull/5481)

## Performances

- perf(processor/post): improve processing speed when `config.post_asset_folder` is enabled by [@yoshinorin] in [#5473](https://github.com/hexojs/hexo/pull/5473)

## Test

- Revert "test: add test case for issue #4334" by [@D-Sketon] in [#5475](https://github.com/hexojs/hexo/pull/5475)

## CI

- ci(comment): fix wrong condition by [@uiolee] in [#5471](https://github.com/hexojs/hexo/pull/5471)

## Misc

- build: upgrade ecmascript version by [@uiolee] in [#5507](https://github.com/hexojs/hexo/pull/5507)

## Full Changelog

- [v7.2.0...v7.3.0](https://github.com/hexojs/hexo/compare/v7.2.0...v7.3.0)

[@uiolee]: https://github.com/uiolee
[@D-Sketon]: https://github.com/D-Sketon
[@stevenjoezhang]: https://github.com/stevenjoezhang
[@yoshinorin]: https://github.com/yoshinorin
[@KentarouTakeda]: https://github.com/KentarouTakeda
