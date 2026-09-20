---
title: Official plugins hexo-util 2.1.0 and hexo-fs 3.0.1 released
---

In preparation for the eventual release of Hexo 5.0.0, we have released new versions of the official plugins [hexo-util] and [hexo-fs].

Summary:

- We are dropping support of Node 8 across Hexo ecosystem, please upgrade to Node 10.13 or higher.
- Currently Hexo has compatibility issues with Node 14, to be fixed in Hexo 5.0.0. See below for temporary workarounds.

[hexo-util]: https://github.com/hexojs/hexo-util
[hexo-fs]: https://github.com/hexojs/hexo-fs

## Workarounds

There are two temporary workarounds in Node 14 usage:

1. Downgrade to Node 10 or 12. If you use `.nvmrc` as part of your CI workflow, you need to change the content to `10` or `12`.
2. If you prefer to use Node 14, force upgrade hexo-util and hexo-fs:

``` diff package.json
{
  ...
  "dependencies": {
    "hexo": "^4.0.0",
    "hexo-generator-archive": "^1.0.0",
    "hexo-generator-category": "^1.0.0",
    "hexo-generator-index": "^1.0.0",
    "hexo-generator-tag": "^1.0.0",
    "hexo-renderer-ejs": "^1.0.0",
    "hexo-renderer-stylus": "^1.1.0",
    "hexo-renderer-marked": "^2.0.0",
    "hexo-server": "^1.0.0",
+    "hexo-util": "^2.1.0",
+    "hexo-fs": "^3.0.1"
  }
}
```

```
$ rm -rf node_modules/
$ npm install
```

The upcoming Hexo 5.0.0 will be compatible with Node 14. Stay tune.

## hexo-util 2.1.0

## Breaking change

- Remove `HashStream()` function [@curbengh](https://github.com/curbengh) [#198]
  - Deprecated in [#45], part of [v1.0.0](https://github.com/hexojs/hexo-util/releases/tag/1.0.0) release
  - Replaced by [`createSha1Hash()`](https://github.com/hexojs/hexo-util/tree/master#createsha1hash)

## hexo-util 2.0.0

### Breaking change

- Drop support of Node 8 [@SukkaW](https://github.com/SukkaW) [#191] [#193]
- Requires `autoDetect` to be enabled and `lang` to be unset to use sublanguage [`highlight()`](https://github.com/hexojs/hexo-util#highlightstr-options) [@curbengh](https://github.com/curbengh) [#192] [#196]

### Fix

- Fix [`CacheStream()`](https://github.com/hexojs/hexo-util#cachestream) compatibility issue with Node 14 [@curbengh](https://github.com/curbengh) [#195]

### Misc

- docs(isExternalLink): add JSDoc [@YoshinoriN](https://github.com/YoshinoriN) [#190](https://github.com/hexojs/hexo-util/pull/190)

### Dependencies

- chore(deps-dev): bump rewire from 4.0.1 to 5.0.0 [#187]

[#198]: https://github.com/hexojs/hexo-util/pull/198
[#45]: https://github.com/hexojs/hexo-util/pull/45
[#191]: https://github.com/hexojs/hexo-util/pull/191
[#193]: https://github.com/hexojs/hexo-util/pull/193
[#192]: https://github.com/hexojs/hexo-util/pull/192
[#196]: https://github.com/hexojs/hexo-util/pull/196
[#195]: https://github.com/hexojs/hexo-util/pull/195
[#187]: https://github.com/hexojs/hexo-util/pull/187

## hexo-fs 3.0.1

### Changes

- Requires at least Node 10.13 [@curbengh](https://github.com/curbengh) [#63]
  - Requires Node 10.12+ to create folder recursively using `mkdirs()` and `mkdirsSync()` [#55]. While hexo-fs previously supported this feature, it had custom implementation; hexo-fs 3+ uses native implementation instead.
- chore(deps): update hexo-util to 2.0.0 [@curbengh](https://github.com/curbengh) [#64]

## hexo-fs 3.0.0

### Breaking change

- Drop support of Node 8 [@curbengh](https://github.com/curbengh) [#51]

### Feature

- Utilize native recursive option for `mkdirs()` and `mkdirsSync()` [@segayuu](https://github.com/segayuu) [#55]

### Fix

- fix compatibility issue with Node.js 14 in `writeFile()` and `copyFile()` [@SukkaW](https://github.com/SukkaW) [#60]

### Refactor

- Replace `escape-string-regexp` package with hexo-util [`escapeRegex()`](https://github.com/hexojs/hexo-util#escaperegexstr) [@SukkaW](https://github.com/SukkaW) [#56]
- refactor: es6 syntax [@SukkaW](https://github.com/SukkaW) [#57]
- Utilize native promise API in `fs.promises` [@segayuu](https://github.com/segayuu) [#53]
  - If you need to catch error code, it's now `err.code`, not `err.cause.code`, see [#190](https://github.com/hexojs/hexo-cli/pull/190)

### Misc

- Add release-drafter for easier changelog editing [@YoshinoriN](https://github.com/YoshinoriN) [#58]
- chore(deps-dev): bump nyc from 14.1.1 to 15.0.0 [#52]
- chore(deps-dev): bump mocha from 6.2.2 to 7.0.0 [#54]
- Bump eslint-config-hexo from 3.0.0 to 4.0.0 [#48]

[#63]: https://github.com/hexojs/hexo-fs/pull/63
[#55]: https://github.com/hexojs/hexo-fs/pull/55
[#64]: https://github.com/hexojs/hexo-fs/pull/64
[#51]: https://github.com/hexojs/hexo-fs/pull/51
[#55]: https://github.com/hexojs/hexo-fs/pull/55
[#60]: https://github.com/hexojs/hexo-fs/pull/60
[#56]: https://github.com/hexojs/hexo-fs/pull/56
[#57]: https://github.com/hexojs/hexo-fs/pull/57
[#53]: https://github.com/hexojs/hexo-fs/pull/53
[#58]: https://github.com/hexojs/hexo-fs/pull/58
[#52]: https://github.com/hexojs/hexo-fs/pull/52
[#54]: https://github.com/hexojs/hexo-fs/pull/54
[#48]: https://github.com/hexojs/hexo-fs/pull/48
