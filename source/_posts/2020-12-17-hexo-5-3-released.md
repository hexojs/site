---
title: Hexo 5.3.0 released
---

## Hexo 5.3.0

### New features

- expose `escape_html` helper method for string manipulation to templates @awwong1 [#4581]
- list_tags: span element & custom class for label @noraj [#4578]

### Fixes

- fix(load_plugins): ignore plugin whose name is started with "hexo-theme" @stevenjoezhang [#4592]
- fix(codeblock): closing code fence may be followed only by spaces @stevenjoezhang [#4574]

### Refactor

- Replace `process.mainModule` with `require.main` @stevenjoezhang [#4583]

## Docs

- docs(badge): replace david-dm with more reliable shields.io @curbengh [#4538]

[#4581]: https://github.com/hexojs/hexo/pull/4581
[#4578]: https://github.com/hexojs/hexo/pull/4578
[#4592]: https://github.com/hexojs/hexo/pull/4592
[#4574]: https://github.com/hexojs/hexo/pull/4574
[#4583]: https://github.com/hexojs/hexo/pull/4583
[#4538]: https://github.com/hexojs/hexo/pull/4538
