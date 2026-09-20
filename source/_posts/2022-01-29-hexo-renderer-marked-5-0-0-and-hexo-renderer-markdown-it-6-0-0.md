---
title: Official plugins hexo-renderer-marked 5.0.0 and hexo-renderer-markdown-it 6.0.0 released
---

> ## [hexo-renderer-marked 5.0.0](https://github.com/hexojs/hexo-renderer-marked/releases/tag/5.0.0)

### Breaking Changes

* Support node >=12 by [@tomap] in [#201](https://github.com/hexojs/hexo-renderer-marked/pull/201)
* Enable prependRoot by default by [@tomap] in [#203](https://github.com/hexojs/hexo-renderer-marked/pull/203)

### Refactor

* refactor: call parent class url tokenizer method by [@yoshinorin] in [#218](https://github.com/hexojs/hexo-renderer-marked/pull/218)

### Dependencies

* chore(deps): bump marked from 2.1.3 to 3.0.4 by @dependabot in [#208](https://github.com/hexojs/hexo-renderer-marked/pull/208)
* chore(deps): bump marked from 3.0.8 to 4.0.1 by @dependabot in [#214](https://github.com/hexojs/hexo-renderer-marked/pull/214)
* chore(deps): bump jsdom from 16.7.0 to 17.0.0 by @dependabot in [#199](https://github.com/hexojs/hexo-renderer-marked/pull/199)
* chore(deps): bump jsdom from 17.0.0 to 18.0.0 by @dependabot in [#212](https://github.com/hexojs/hexo-renderer-marked/pull/212)
* chore(deps): bump jsdom from 18.1.1 to 19.0.0 by @dependabot in [#215](https://github.com/hexojs/hexo-renderer-marked/pull/215)
* chore(deps-dev): bump eslint from 7.32.0 to 8.0.0 by @dependabot in [#211](https://github.com/hexojs/hexo-renderer-marked/pull/211)
* chore(deps-dev): bump hexo from 5.4.0 to 6.0.0 by @dependabot in [#217](https://github.com/hexojs/hexo-renderer-marked/pull/217)
* chore(deps-dev): bump eslint-config-hexo from 4.2.0 to 5.0.0 by @dependabot in [#129](https://github.com/hexojs/hexo-renderer-marked/pull/129)

### Docs

* Explain security risk of using this plugin by [@tomap] in [#210](https://github.com/hexojs/hexo-renderer-marked/pull/210)

**Full Changelog**: https://github.com/hexojs/hexo-renderer-marked/compare/v4.1.0...5.0.0

---

> ## [hexo-renderer-markdown-it 6.0.0](https://github.com/hexojs/hexo-renderer-markdown-it/releases/tag/6.0.0)

### Breaking Changes

* chore: drop node.js 10.x by [@yoshinorin] in [#168](https://github.com/hexojs/hexo-renderer-markdown-it/pull/168)

### Performance

* perf(#57): avoid creating instance each time when render each file by [@yoshinorin] in [#135](https://github.com/hexojs/hexo-renderer-markdown-it/pull/135)

### Docs

* docs: add example of adding custom function to a plugin by [@curbengh] in [#128](https://github.com/hexojs/hexo-renderer-markdown-it/pull/128)
* docs(slugize): default separator is a dash by [@curbengh] in [#130](https://github.com/hexojs/hexo-renderer-markdown-it/pull/130)
* Move all documentation inside readme by [@tomap] in [#154](https://github.com/hexojs/hexo-renderer-markdown-it/pull/154)

### Test

* test(plugins): custom option by [@curbengh] in [#127](https://github.com/hexojs/hexo-renderer-markdown-it/pull/127)
* test: 'langPrefix' option by [@curbengh] in [#129](https://github.com/hexojs/hexo-renderer-markdown-it/pull/129)

### Dependencies

* chore(deps): bump markdown-it from 11.0.1 to 12.0.0 by @dependabot-preview in [#133](https://github.com/hexojs/hexo-renderer-markdown-it/pull/133)
* chore(deps): bump markdown-it-emoji from 1.4.0 to 2.0.0 by @dependabot-preview in [#134](https://github.com/hexojs/hexo-renderer-markdown-it/pull/134)
* chore(ci): migrate to GitHub Actions from TravisCI by [@yoshinorin] in [#169](https://github.com/hexojs/hexo-renderer-markdown-it/pull/169)
* chore(deps-dev): bump hexo from 5.4.0 to 6.0.0 by @dependabot in [#166](https://github.com/hexojs/hexo-renderer-markdown-it/pull/166)
* chore(deps-dev): bump mocha from 8.4.0 to 9.1.3 by @dependabot in [#158](https://github.com/hexojs/hexo-renderer-markdown-it/pull/158)
* chore(deps-dev): bump eslint from 7.32.0 to 8.6.0 by @dependabot in [#170](https://github.com/hexojs/hexo-renderer-markdown-it/pull/170)
* chore(deps-dev): bump eslint-config-hexo from 4.2.0 to 5.0.0 by @dependabot in [#172](https://github.com/hexojs/hexo-renderer-markdown-it/pull/172)

### Miscs

* Clean up tests by [@curbengh] in [#132](https://github.com/hexojs/hexo-renderer-markdown-it/pull/132)
* Upgrade to GitHub-native Dependabot by @dependabot-preview in [#145](https://github.com/hexojs/hexo-renderer-markdown-it/pull/145)

## New Contributors

* [@tomap] made their first contribution in [#](https://github.com/hexojs/hexo-renderer-markdown-it/pull/154)

**Full Changelog**: https://github.com/hexojs/hexo-renderer-markdown-it/compare/5.0.0...6.0.0



[@tomap]: https://github.com/tomap
[@yoshinorin]: https://github.com/yoshinorin
[@curbengh]: https://github.com/curbengh