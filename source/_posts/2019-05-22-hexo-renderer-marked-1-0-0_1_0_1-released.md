---
title: Official plugin hexo-renderer-marked 1.0.0 & 1.0.1 Released!!
date: 2019-05-22 23:59
---

We released a new version of the official plugins [hexo-renderer-marked](https://github.com/hexojs/hexo-renderer-marked)

### Breaking changes

- [#92](https://github.com/hexojs/hexo-renderer-marked/pull/92) Require Node.js +6.9
- [#39](https://github.com/hexojs/hexo-renderer-marked/pull/39), [#46](https://github.com/hexojs/hexo-renderer-marked/pull/46), [#62](https://github.com/hexojs/hexo-renderer-marked/pull/62) Markdown todo list render into disable checkbox
- [#87](https://github.com/hexojs/hexo-renderer-marked/pull/87) Update marked 0.3.9 to 0.6.1
  - It has **some breaking changes**. Please see marked's breaking changes.
    - [v0.4.0](https://github.com/markedjs/marked/releases/tag/0.4.0)
    - [v0.5.0](https://github.com/markedjs/marked/releases/tag/v0.5.0)
    - [v0.6.0](https://github.com/markedjs/marked/releases/tag/v0.6.0)

### New feature

- [#55](https://github.com/hexojs/hexo-renderer-marked/pull/55) Add support for basic description/definition lists

### Fixes

- [#70](https://github.com/hexojs/hexo-renderer-marked/issues/70) Text less than 3 chars is not italicized

### Dependencies

- [#73](https://github.com/hexojs/hexo-renderer-marked/pull/73), [#84](https://github.com/hexojs/hexo-renderer-marked/pull/84) Update mocha requirement from ^4.0.1 to ^6.0.0
- [#74](https://github.com/hexojs/hexo-renderer-marked/pull/74) Update babel-eslint requirement from ^8.0.3 to ^10.0.1
- [#76](https://github.com/hexojs/hexo-renderer-marked/pull/76) Update eslint-config-hexo requirement from ^2.0.0 to ^3.0.0
- [#77](https://github.com/hexojs/hexo-renderer-marked/pull/77) Update eslint requirement from ^4.13.1 to ^5.9.0
- [#81](https://github.com/hexojs/hexo-renderer-marked/pull/81) Delete jscs dependency
- [#91](https://github.com/hexojs/hexo-renderer-marked/pull/91) Delete object-assign

### Miscellaneous

- [#96](https://github.com/hexojs/hexo-renderer-marked/pull/96) Shrinked packed size & fix npm installation due to existence of .git folder in v1.0.0

### Docs

- [#79](https://github.com/hexojs/hexo-renderer-marked/issues/79) Update docs to explain modifyAnchors option
