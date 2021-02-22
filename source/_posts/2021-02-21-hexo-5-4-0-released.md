---
title: hexo 5.4.0 released
---

## Hexo 5.4.0

### New features

- feat: handle config.root is not exist [@jiangtj] [#4616]

### Breaking change

- fix(excerpt): use span instead of anchor element for better SEO performance @stevenjoezhang] [#4627]

### Fixes

- fix(box): set property awaitWriteFinish for chokidar filewatcher [@stevenjoezhang] [#4633]
- fix(codeblock): match whitespace but not newlines [@stevenjoezhang] [#4625]
- fix(i18n): page.lang is undefined when using the key `language` in front-matter [@stevenjoezhang] [#4614]

### Misc

- github: update actions/setup-node action to v2 [@stevenjoezhang] [#4604]
- chore/ci: migrate from probot/stale to GitHub Actions [@stevenjoezhang] [#4598]

### Dependencies

- chore(deps): bump js-yaml from 3.14.1 to 4.0.0 @dependabot-preview [#4607]

[@jiangtj]: https://github.com/jiangtj
[@stevenjoezhang]: https://github.com/stevenjoezhang

[#4616]: https://github.com/hexojs/hexo/pull/4616
[#4627]: https://github.com/hexojs/hexo/pull/4627
[#4633]: https://github.com/hexojs/hexo/pull/4633
[#4625]: https://github.com/hexojs/hexo/pull/4625
[#4614]: https://github.com/hexojs/hexo/pull/4614
[#4604]: https://github.com/hexojs/hexo/pull/4604
[#4598]: https://github.com/hexojs/hexo/pull/4598