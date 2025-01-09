---
title: Official plugin hexo-generator-tag 1.0.0, hexo-renderer-ejs 1.0.0 & hexo-renderer-stylus 1.1.0 released
---

We released a new version of the official plugins [hexo-generator-tag], [hexo-renderer-ejs] and [hexo-renderer-stylus].

## hexo-generator-tag 1.0.0

### Breaking change

- chore: require at least node 8 [#25]

### Feature

- Add the "order_by" option [#22]

### Refactor

- refactor(package): use Object.assign instead of object-assign package [#14]
- refactor(ES2015): use let/const & arrow-return [#16]
- refactor: es6-fy [#26](https://github.com/hexojs/hexo-generator-tag/pull/26)

## hexo-renderer-ejs 1.0.0

### Breaking change

- chore: drop node 6 [#20]

### Feature

- Upgrade ejs to v2 (w/ comments support) [#5]. Support `<%# ... %>`.

### Refactor

- refactor: use Object.assign and var to let/const [#8]
- chore(eslint): use eslint instead of jscs [#10]

## hexo-renderer-stylus 1.0.0

### Breaking change

- chore: require at least node 8 [#33]

### Fix

- upgrade dependencies and make it be compatible with node v6 [#13]

### Refactor

- refactor: es6-fy [#34]

### Housekeeping

- chore(package): delete jscs [#26](https://github.com/hexojs/hexo-renderer-stylus/pull/26)
- remove useless file from npm module [#27]

## hexo-renderer-stylus 1.1.0

### Feature

- feat: configurable plugins [#38]

[hexo-generator-tag]: https://github.com/hexojs/hexo-generator-tag
[hexo-renderer-ejs]: https://github.com/hexojs/hexo-renderer-ejs
[hexo-renderer-stylus]: https://github.com/hexojs/hexo-renderer-stylus

[#25]: https://github.com/hexojs/hexo-generator-tag/pull/25
[#22]: https://github.com/hexojs/hexo-generator-tag/pull/22
[#14]: https://github.com/hexojs/hexo-generator-tag/pull/14
[#16]: https://github.com/hexojs/hexo-generator-tag/pull/16
[#97]: https://github.com/hexojs/hexo-generator-tag/pull/97
[#104]: https://github.com/hexojs/hexo-generator-tag/pull/104

[#20]: https://github.com/hexojs/hexo-renderer-ejs/pull/20
[#5]: https://github.com/hexojs/hexo-renderer-ejs/pull/5
[#8]: https://github.com/hexojs/hexo-renderer-ejs/pull/8
[#10]: https://github.com/hexojs/hexo-renderer-ejs/pull/10

[#33]: https://github.com/hexojs/hexo-renderer-stylus/pull/33
[#13]: https://github.com/hexojs/hexo-renderer-stylus/pull/13
[#34]: https://github.com/hexojs/hexo-renderer-stylus/pull/34
[#27]: https://github.com/hexojs/hexo-renderer-stylus/pull/27
[#38]: https://github.com/hexojs/hexo-renderer-stylus/pull/38
