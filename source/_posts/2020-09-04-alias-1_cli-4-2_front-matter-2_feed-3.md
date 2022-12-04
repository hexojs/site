---
title: Official plugins hexo-generator-alias 1.0.0, hexo-cli 4.2.0, hexo-front-matter 2.0.0 & hexo-generator-feed 3.0.0 released
---

## hexo-generator-alias 1.0.0

### Breaking change

- Requires Node 10.13+ [#54]

### Feature

- feat: 'redirect' option [#48]
  - See [this section](https://github.com/hexojs/hexo-generator-alias#redirect) for usage.
- feat: redirect to post using slug [#55]
  - See [this section](https://github.com/hexojs/hexo-generator-alias#redirect-to-a-post) for usage.
  - Works similarly to [`post_path`](https://hexo.io/docs/tag-plugins#Include-Posts) tag plugin.

### Fix

- fix(alias): url must be absolute [#52]
  - <https://support.google.com/webmasters/answer/139066#rel-canonical-link-method>

[#54]: https://github.com/hexojs/hexo-generator-alias/pull/54
[#48]: https://github.com/hexojs/hexo-generator-alias/pull/48
[#55]: https://github.com/hexojs/hexo-generator-alias/pull/55
[#52]: https://github.com/hexojs/hexo-generator-alias/pull/52

## hexo-cli 4.2.0

### Changes

- feat(init): support pnpm and drop yarn 2 [#227]
- fix(init): show where to run npm [#228]

### Dependencies

- chore(deps-dev): bump mocha from 8.0.1 to 8.1.1 [#231]
- chore(deps-dev): bump eslint from 7.5.0 to 7.6.0 [#230]

[#227]: https://github.com/hexojs/hexo-cli/pull/227
[#228]: https://github.com/hexojs/hexo-cli/pull/228
[#231]: https://github.com/hexojs/hexo-cli/pull/231
[#230]: https://github.com/hexojs/hexo-cli/pull/230

## hexo-front-matter 2.0.0

### Breaking change

- chore: drop node 8 [#32]
- Specific function must now be declared, instead of declaring an object

  ```diff
  - const yfm = require('hexo-front-matter');
  + const { parse: yfm } = require('hexo-front-matter');
  ```

### Refactor

- refactor: forEach() [#21]
- refactor/perf: regexp & split shorthand [#34]

### Housekeeping

- chore(deps-dev): bump mocha from 7.2.0 to 8.0.1 [#33]
- chore(deps-dev): bump mocha from 6.2.2 to 7.1.1 [#30]
- chore(deps-dev): bump eslint from 6.8.0 to 7.1.0 [#32]
- chore(deps-dev): bump eslint-config-hexo from 3.0.0 to 4.0.0 [#24]

[#21]: https://github.com/hexojs/hexo-front-matter/pull/21
[#34]: https://github.com/hexojs/hexo-front-matter/pull/34
[#33]: https://github.com/hexojs/hexo-front-matter/pull/33
[#30]: https://github.com/hexojs/hexo-front-matter/pull/30
[#32]: https://github.com/hexojs/hexo-front-matter/pull/32
[#24]: https://github.com/hexojs/hexo-front-matter/pull/24

## hexo-generator-feed 3.0.0

### Breaking change

- Drop Node 8 [#153]

### Fix

- Compatibility with Hexo 5 [#117]
- Utilize [`full_url_for()`](https://github.com/hexojs/hexo-util/#full_url_forpath) [#143] [#149]
  - This is to avoid manually concat `root` prefix which may leads to undesired double slash in an url.
- fix(template): remove extra spacing [#128]

### Dependencies

- chore(deps-dev): update hexo from 4.0.0 to 5.0.0 [#117]
- chore(deps-dev): bump mocha from 7.2.0 to 8.0.1 [#146]
- chore(deps): bump hexo-util from 1.9.0 to 2.1.0 [#139]
- chore(deps-dev): bump eslint from 6.8.0 to 7.0.0 [#141]
- chore(deps-dev): bump camaro from 4.2.0 to 5.0.0 [#137]

[#153]: https://github.com/hexojs/hexo-generator-feed/pull/153
[#117]: https://github.com/hexojs/hexo-generator-feed/pull/117
[#143]: https://github.com/hexojs/hexo-generator-feed/pull/143
[#149]: https://github.com/hexojs/hexo-generator-feed/pull/149
[#128]: https://github.com/hexojs/hexo-generator-feed/pull/128
[#117]: https://github.com/hexojs/hexo-generator-feed/pull/117
[#146]: https://github.com/hexojs/hexo-generator-feed/pull/146
[#139]: https://github.com/hexojs/hexo-generator-feed/pull/139
[#141]: https://github.com/hexojs/hexo-generator-feed/pull/141
[#137]: https://github.com/hexojs/hexo-generator-feed/pull/137
