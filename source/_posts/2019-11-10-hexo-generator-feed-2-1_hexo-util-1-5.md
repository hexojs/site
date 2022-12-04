---
title: Official plugins hexo-generator-feed 2.1.0 & hexo-util 1.5.0 released
---

We have released a new version of the official plugins [hexo-generator-feed] & [hexo-util].

[hexo-generator-feed]: https://github.com/hexojs/hexo-generator-feed
[hexo-util]: https://github.com/hexojs/hexo-util

## hexo-generator-feed 2.1.0

### Breaking change

- Requires Node 8.10 or newer [#99]

### Features

- Add rss [autodiscovery](http://www.rssboard.org/rss-autodiscovery) element by default [#96]
- Support feed icon in RSS2 [#102]
- Support generating both atom and rss2 [#100]

### Fixes

- Percent-encode `/root/`, in addition to pathname [#93]
- Fix autodiscovery element did not get injected into head element that has more than one line [#99]

[#99]: https://github.com/hexojs/hexo-generator-feed/pull/99
[#96]: https://github.com/hexojs/hexo-generator-feed/pull/96
[#102]: https://github.com/hexojs/hexo-generator-feed/pull/102
[#100]: https://github.com/hexojs/hexo-generator-feed/pull/100
[#93]: https://github.com/hexojs/hexo-generator-feed/pull/93

## hexo-generator-feed 2.0.0

### Breaking change

- Drop Node 6, v2 onwards must use Node 8 or above [#85]

### Features

- Support post with `image` front-matter [#68]
- Feed icon is now customizable [#69]
- Support specifying per-post description by specifying "intro" in front-matter [#58]
- Support feed icon [#57]
- Post order can be specified. Order by newest post by default. [#64]

### Fix

- Avoid percent-encoding the domain for compatibility with [IDN](https://en.wikipedia.org/wiki/Internationalized_domain_name) [#82]

### Housekeeping

- chore(package): delete jscs & use eslint [#72]
- Avoid publishing unnecessary files [#70]

[#85]: https://github.com/hexojs/hexo-generator-feed/pull/85
[#68]: https://github.com/hexojs/hexo-generator-feed/pull/68
[#69]: https://github.com/hexojs/hexo-generator-feed/pull/69
[#58]: https://github.com/hexojs/hexo-generator-feed/pull/58
[#57]: https://github.com/hexojs/hexo-generator-feed/pull/57
[#64]: https://github.com/hexojs/hexo-generator-feed/pull/64
[#82]: https://github.com/hexojs/hexo-generator-feed/pull/82
[#72]: https://github.com/hexojs/hexo-generator-feed/pull/72
[#70]: https://github.com/hexojs/hexo-generator-feed/pull/70

## hexo-util 1.5.0

### Breaking change

- IDN is no longer punycoded in [`encodeURL()`](https://github.com/hexojs/hexo-util#encodeurlstr). IDN, regardless in punycode or unicode, is now always output in unicode. This also affect [`decodeURL()`](https://github.com/hexojs/hexo-util#decodeurlstr) [#116]

### Feature

- Check whether a link is an external URL using [`isExternalLink()`](https://github.com/hexojs/hexo-util#isexternallinkurl) [#119]

### Fixes

- Support disabling `wrap:` option in [`highlight()`](https://github.com/hexojs/hexo-util#highlightstr-options) [#112]
- Backquote is also escaped in [`escapeHTML()`](https://github.com/hexojs/hexo-util#escapehtmlstr) [#118]

[#116]: https://github.com/hexojs/hexo-util/pull/116
[#119]: https://github.com/hexojs/hexo-util/pull/119
[#112]: https://github.com/hexojs/hexo-util/pull/112
[#118]: https://github.com/hexojs/hexo-util/pull/118
