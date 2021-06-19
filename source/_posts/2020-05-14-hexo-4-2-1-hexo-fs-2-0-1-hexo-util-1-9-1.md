---
title: Hexo 4.2.1 & official plugin hexo-fs 2.0.1 & hexo-util 1.9.1 released
---

## Hexo 4.2.1

Before `4.2.0`, Hexo does not work with Node 14. This is a patch release for support Node 14.

### Fix

- chore: incompatible with Node 14 [#4285]
  - This release includes [hexo-util 1.9.1](https://github.com/hexojs/hexo-util/releases/tag/1.9.1) and [hexo-fs 2.0.1](https://github.com/hexojs/hexo-fs/releases/tag/2.0.1)

[#4285]: https://github.com/hexojs/hexo/pull/4285

---

## hexo-util 1.9.1

### Fix

- Fix [`CacheStream()`](https://github.com/hexojs/hexo-util#cachestream) compatibility issue with Node 14 [@curbengh](https://github.com/curbengh) [#205]
  - This fix is backport from [hexo-util 2.0.0](https://github.com/hexojs/hexo-util/releases/tag/2.0.0)

[#205]: https://github.com/hexojs/hexo-util/pull/205

---

## hexo-fs 2.0.1

### Fix

- fix compatibility issue with Node.js 14 in writeFile() and copyFile() @SukkaW (#70)
  - This fix is backport from [hexo-fs 3.0.0](https://github.com/hexojs/hexo-fs/releases/tag/3.0.0)

[#70]: https://github.com/hexojs/hexo-fs/pull/70
