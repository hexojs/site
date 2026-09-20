---
title: Official plugin hexo-util 1.0.0 & hexo-renderer-marked 2.0.0 released
---

We released a new version of the official plugins [hexo-util] & [hexo-renderer-marked].

## hexo-util 1.0.0

### Breaking changes

- Drop Node 6 compatibility [#61]
- Deprecate hashStream [#45], use `createSha1Hash()`

### Features

- Add Color class from tagcloud hexo helper [#58]
- Allows empty attributes in html tag helper [#36]

### Fixes

- fs.write instead of stdout [#69]
- prevent firstLine being parsed as a string [#67]
- Fix the part where the public API createSha1Hash() was not exported. [#47]

### Refactor

- camel_case_keys.js [#48]
- ES6 [#44] [#46] [#70]

## hexo-renderer-marked 2.0.0

### Breaking changes

- Drop Node 6 compatibility [#98]
- `sanitize` option has been deprecated, replaced by `sanitizeUrl` with limited functions [#102]
- `tables` option has been deprecated. Enabling `gfm` option also enables `tables` [#102]
- Refer to upstream's [changelog] for details on possible breaking changes.

### Features

- Add option to disable headerIds [#106]

### Refactor

- ES6 [#97] [#104]

[hexo-util]: https://github.com/hexojs/hexo-util
[hexo-renderer-marked]: https://github.com/hexojs/hexo-renderer-marked

[#61]: https://github.com/hexojs/hexo-util/pull/61
[#45]: https://github.com/hexojs/hexo-util/pull/45
[#58]: https://github.com/hexojs/hexo-util/pull/58
[#36]: https://github.com/hexojs/hexo-util/pull/36
[#69]: https://github.com/hexojs/hexo-util/pull/69
[#67]: https://github.com/hexojs/hexo-util/pull/67
[#47]: https://github.com/hexojs/hexo-util/pull/47
[#48]: https://github.com/hexojs/hexo-util/pull/48
[#44]: https://github.com/hexojs/hexo-util/pull/44
[#46]: https://github.com/hexojs/hexo-util/pull/46
[#70]: https://github.com/hexojs/hexo-util/pull/70

[#98]: https://github.com/hexojs/hexo-renderer-marked/pull/98
[#102]: https://github.com/hexojs/hexo-renderer-marked/pull/102
[changelog]: https://github.com/markedjs/marked/releases/tag/v0.7.0
[#106]: https://github.com/hexojs/hexo-renderer-marked/pull/106
[#97]: https://github.com/hexojs/hexo-renderer-marked/pull/97
[#104]: https://github.com/hexojs/hexo-renderer-marked/pull/104
