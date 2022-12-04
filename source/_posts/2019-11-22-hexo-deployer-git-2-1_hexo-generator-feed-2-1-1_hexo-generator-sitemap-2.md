---
title: Official plugins hexo-deployer-git 2.1.0, hexo-generator-feed 2.1.1 & hexo-generator-sitemap 2.0.0 released
---

We have released a new version of the official plugins [hexo-deployer-git], [hexo-generator-feed] and [hexo-generator-sitemap].

[hexo-deployer-git]: https://github.com/hexojs/hexo-deployer-git
[hexo-generator-feed]: https://github.com/hexojs/hexo-generator-feed
[hexo-generator-sitemap]: https://github.com/hexojs/hexo-generator-sitemap

## hexo-deployer-git 2.1.0

### Features

- Support authenticating using an access token (either the value itself or an environment variable) specified in the config [#135]
  - Refer to [the doc](https://github.com/hexojs/hexo-deployer-git/blob/master/README.md) for usage guide.

[#135]: https://github.com/hexojs/hexo-deployer-git/pull/135

## hexo-generator-feed 2.1.1

### Fixes

- namespace in atom.xml should use `http` not `https` [#105]
- Skip generating feed if there is no post [#107]

[#105]: https://github.com/hexojs/hexo-generator-feed/pull/105
[#107]: https://github.com/hexojs/hexo-generator-feed/pull/107

## hexo-generator-sitemap 2.0.0

### Breaking change

- Drop Node 6, now requires Node 8.6+ [#54]

### Features

- Switch minimatch to micromatch for faster file exclusion and support more search patterns [#57]
  - See [micromatch docs](https://github.com/micromatch/micromatch#extended-globbing) for supported patterns.
- Add [rel-sitemap tag](http://microformats.org/wiki/rel-sitemap) [#71]
  - Disabled by default as it's not widely supported by search engines yet

### Fixes

- Publish default template [#50]
- Encode url except the domain (for IDN compatibility) [#68]
- Skip generate if there are no posts and pages [#78]

### Refactor

- Update to ES6 syntax [#40], [#56], [#67]
- Utilize the faster `Array.push()` instead of `Array.concat()` [#76]

### Dependencies

- Update eslint from v1 to v6 [#34], [#39], [#53]
- Update mocha from v2 to v6 [#35]
- Update nunjucks from v2 to v3 [#38]
- Replace istanbul with nyc [#51]

[#54]: https://github.com/hexojs/hexo-generator-sitemap/pull/54
[#57]: https://github.com/hexojs/hexo-generator-sitemap/pull/57
[#71]: https://github.com/hexojs/hexo-generator-sitemap/pull/71
[#50]: https://github.com/hexojs/hexo-generator-sitemap/pull/50
[#68]: https://github.com/hexojs/hexo-generator-sitemap/pull/68
[#78]: https://github.com/hexojs/hexo-generator-sitemap/pull/78
[#40]: https://github.com/hexojs/hexo-generator-sitemap/pull/40
[#56]: https://github.com/hexojs/hexo-generator-sitemap/pull/56
[#67]: https://github.com/hexojs/hexo-generator-sitemap/pull/67
[#76]: https://github.com/hexojs/hexo-generator-sitemap/pull/76
[#34]: https://github.com/hexojs/hexo-generator-sitemap/pull/34
[#39]: https://github.com/hexojs/hexo-generator-sitemap/pull/39
[#53]: https://github.com/hexojs/hexo-generator-sitemap/pull/53
[#35]: https://github.com/hexojs/hexo-generator-sitemap/pull/35
[#38]: https://github.com/hexojs/hexo-generator-sitemap/pull/38
[#51]: https://github.com/hexojs/hexo-generator-sitemap/pull/51
