---
title: hexo-deployer-git 3.0.0, hexo-renderer-marked 4.0.0 released
---

## hexo-deployer-git 3.0.0

### Changes

- release: 3.0.0 [@stevenjoezhang] [#198](https://github.com/hexojs/hexo-deployer-git/pull/198)
- Replace swig-templates with nunjucks [@stevenjoezhang] [#173](https://github.com/hexojs/hexo-deployer-git/pull/173)

### Dependencies

- chore(deps-dev): bump mocha from 7.2.0 to 8.0.1 @dependabot-preview [#190](https://github.com/hexojs/hexo-deployer-git/pull/190)
- chore(deps-dev): bump eslint from 6.8.0 to 7.1.0 @dependabot-preview [#188](https://github.com/hexojs/hexo-deployer-git/pull/188)
- chore(deps): bump hexo-fs from 2.0.0 to 3.0.1 @dependabot-preview [#178](https://github.com/hexojs/hexo-deployer-git/pull/178)
- chore(deps): bump hexo-util from 1.9.0 to 2.1.0 @dependabot-preview [#184](https://github.com/hexojs/hexo-deployer-git/pull/184)
- Bump eslint-config-hexo from 3.0.0 to 4.1.0 @dependabot-preview [#156](https://github.com/hexojs/hexo-deployer-git/pull/156)
- chore(deps): bump chalk from 3.0.0 to 4.0.0 @dependabot-preview [#176](https://github.com/hexojs/hexo-deployer-git/pull/176)
- chore(deps-dev): bump mocha from 6.2.3 to 7.1.2 @dependabot-preview [#179](https://github.com/hexojs/hexo-deployer-git/pull/179)
- Bump nyc from 14.1.1 to 15.0.0 @dependabot-preview [#157](https://github.com/hexojs/hexo-deployer-git/pull/157)

### Misc

- ci: drop node 8 & add node 14 [@SukkaW] [#181](https://github.com/hexojs/hexo-deployer-git/pull/181)
- chore: add release-drafter [@YoshinoriN] [#166](https://github.com/hexojs/hexo-deployer-git/pull/166)

## hexo-renderer-marked 4.0.0

### Breaking Changes

- bump marked from 1.2.9 to 2.0.0 [#183](https://github.com/hexojs/hexo-renderer-marked/pull/183)
  - `em` and `strong` tokenizers have been merged into one`emStrong` tokenizer
  - Please see [marked v2.0.0 release note](https://github.com/markedjs/marked/releases/tag/v2.0.0)

### New Feature

- feat: add descriptionLists options [@SukkaW] [#179](https://github.com/hexojs/hexo-renderer-marked/pull/179)
  - Enable support for [description lists syntax](https://kramdown.gettalong.org/syntax.html#definition-lists).
    - Currently description lists syntax is not in neither [CommonMark](http://commonmark.org/) or [GFM](https://github.github.com/gfm/#task-list-items-extension-), `hexo-renderer-marked` only provides the option for backward compatibility.
    - By disabling the `descriptionLists`, markdown rendering performance will be improved by **a lot**.

### Docs

- fix tokenizer example [@curbengh] [#178](https://github.com/hexojs/hexo-renderer-marked/pull/178)

### Misc

- fix small typo [@0xflotus] [#180](https://github.com/hexojs/hexo-renderer-marked/pull/180)

[@SukkaW]: https://github.com/SukkaW
[@stevenjoezhang]: https://github.com/stevenjoezhang
[@YoshinoriN]: https://github.com/YoshinoriN
[@curbengh]: https://github.com/curbengh
[@0xflotus]: https://github.com/0xflotus
