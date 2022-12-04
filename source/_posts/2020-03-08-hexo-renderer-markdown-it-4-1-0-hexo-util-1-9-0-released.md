---
title: hexo-renderer-markdown-it 4.1.0 & hexo-util 1.9.0 released
---

## hexo-renderer-markdown-it 4.1.0

### Feature

- `permalinkSide` option [@curbengh](https://github.com/curbengh) [#105].

By default, when `permalink` option is enabled, the permalink symbol is prepended before each heading. If you prefer to append to the end of each heading:

``` yml
markdown:
  anchors:
    permalink: true
    permalinkSide: 'right'
```

### Housekeeping

- Remove unneeded `sluggo` dependency [@curbengh](https://github.com/curbengh) [#99].
  - It has been replaced by hexo-util's slugize [@curbengh](https://github.com/curbengh) [#95].
- Update nyc from 14.1.1 to 15.0.0 [#100]

[#105]: https://github.com/hexojs/hexo-renderer-markdown-it/pull/105
[#99]: https://github.com/hexojs/hexo-renderer-markdown-it/pull/99
[#95]: https://github.com/hexojs/hexo-renderer-markdown-it/pull/95
[#100]: https://github.com/hexojs/hexo-renderer-markdown-it/pull/100

---

## hexo-util 1.9.0

### Features

- feat(prism): add data-language attribute [@SukkaW](https://github.com/SukkaW) [#177]
- feat(prism): add mark & firstLine option support [@SukkaW](https://github.com/SukkaW) [#172]
- feat: bring up prism highlight support [@SukkaW](https://github.com/SukkaW) [#168]
  - Laying the groundwork for the planned support of [prism](https://prismjs.com/) highlight library in the upcoming Hexo v5, in addition to the current [highlight.js](https://highlightjs.org/) library.

### Fixes

- fix(is_external_link): handle invalid url [@SukkaW](https://github.com/SukkaW) [#183]
- fix(prism): add strip_indent support [@SukkaW](https://github.com/SukkaW) [#184]
- fix(tocObj): skip permalink symbol  [@curbengh](https://github.com/curbengh) [#175]
- Fix highlighting when hljs=true [@ppwwyyxx](https://github.com/ppwwyyxx) [#171]
- htmlTag - toString() before match() for scalar values. [@KentarouTakeda](https://github.com/KentarouTakeda) [#176]

### Refactor

- refactor: optimize cache [@SukkaW](https://github.com/SukkaW) [#170]
- refactor(highlight): add strip-indent [@SukkaW](https://github.com/SukkaW) [#169]
- refactor(toc_obj): simplify the code [@SukkaW](https://github.com/SukkaW) [#181]

### Dependencies

- chore(deps-dev): bump mocha from 6.2.2 to 7.0.0 [#173]

[#177]: https://github.com/hexojs/hexo-util/pull/177
[#172]: https://github.com/hexojs/hexo-util/pull/172
[#168]: https://github.com/hexojs/hexo-util/pull/168
[#183]: https://github.com/hexojs/hexo-util/pull/183
[#184]: https://github.com/hexojs/hexo-util/pull/184
[#175]: https://github.com/hexojs/hexo-util/pull/175
[#171]: https://github.com/hexojs/hexo-util/pull/171
[#176]: https://github.com/hexojs/hexo-util/pull/176
[#170]: https://github.com/hexojs/hexo-util/pull/170
[#169]: https://github.com/hexojs/hexo-util/pull/169
[#181]: https://github.com/hexojs/hexo-util/pull/181
[#173]: https://github.com/hexojs/hexo-util/pull/173
