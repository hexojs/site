---
title: Official plugins warehouse 3.0.0 & hexo-util 1.2.0, 1.3.0, 1.3.1 released
---

We released a new version of the official plugins [warehouse] & [hexo-util].

## warehouse 3.0.0

### Breaking change

- Replace constructor function to class declaration [#30], refer to [the docs](https://github.com/hexojs/warehouse#30-breaking-change) for more info on updating to the new syntax.
- chore: drop node 6 [#49]

### Refactor

- Remove old compatibility code [#57]
- Convert method definitions [#52]
- Split Schema class [#58]
- refactor: use instanceof Date instead of util.isDate [#37]

## hexo-util 1.3.1

### Fix

- fix(encode_url): skip encode non-urls [#102]

## hexo-util 1.3.0

### Breaking change

- fix(html_tag): escape html and encode url by default [#93]
  - insert `false` to the 4th argument to disable escape
  - e.g. `htmlTag('a', {href: 'http://foo.com/'}, '<b>bold</b>', false)`

### Feature

- feat: decodeURL() [#97]

### Fix

- fix(encodeURL): encode path once only [#92]
- fix(html_tag): encode url value of url-related attributes and skip escape/encode `<style>` [#96]
- fix(html_tag): encode url() in style tag [#101]

## hexo-util 1.2.0

### Feature

- add gravatar() [#81]
- add url_for() & relative_url() [#82]
- add full_url_for() [#84]

### Fix

- fix(encodeURL): support hash/anchor, auth and port number [#85]

[warehouse]: https://github.com/hexojs/warehouse
[hexo-util]: https://github.com/hexojs/hexo-util

[#30]: https://github.com/hexojs/warehouse/pull/30
[#49]: https://github.com/hexojs/warehouse/pull/49
[#57]: https://github.com/hexojs/warehouse/pull/57
[#52]: https://github.com/hexojs/warehouse/pull/52
[#58]: https://github.com/hexojs/warehouse/pull/58
[#37]: https://github.com/hexojs/warehouse/pull/37

[#102]: https://github.com/hexojs/hexo-util/pull/102
[#93]: https://github.com/hexojs/hexo-util/pull/93
[#97]: https://github.com/hexojs/hexo-util/pull/97
[#92]: https://github.com/hexojs/hexo-util/pull/92
[#96]: https://github.com/hexojs/hexo-util/pull/96
[#101]: https://github.com/hexojs/hexo-util/pull/101
[#81]: https://github.com/hexojs/hexo-util/pull/81
[#82]: https://github.com/hexojs/hexo-util/pull/82
[#84]: https://github.com/hexojs/hexo-util/pull/84
[#85]: https://github.com/hexojs/hexo-util/pull/85
