---
title:  Official plugins hexo-front-matter 3.0.0, hexo-server 3.0.0, hexo-renderer-less-4.0.0 released
---

## [hexo-front-matter 3.0.0](https://github.com/hexojs/hexo-front-matter/releases/tag/3.0.0)

### Breaking Changes

* chore: drop node.js 10.x support by [@yoshinorin] in [#49](https://github.com/hexojs/hexo-front-matter/pull/49)

### Performance

* refactor/perf: regexp & split shorthand [@SukkaW] [#34](https://github.com/hexojs/hexo-front-matter/pull/34)

### Dependencies

* chore(deps): bump js-yaml from 3.14.1 to 4.1.0 by @dependabot-preview in [#37](https://github.com/hexojs/hexo-front-matter/pull/37)
* Bump eslint from 7.32.0 to 8.0.1 by @dependabot in [#47](https://github.com/hexojs/hexo-front-matter/pull/47)
* chore(deps-dev): bump mocha from 8.4.0 to 9.1.3 by @dependabot in [#48](https://github.com/hexojs/hexo-front-matter/pull/48)

### Misc

* chore(ci): migrate to GitHub Actions from TravisCI by [@yoshinorin] in [#50](https://github.com/hexojs/hexo-front-matter/pull/50)
* Upgrade to GitHub-native Dependabot by @dependabot-preview in [#38](https://github.com/hexojs/hexo-front-matter/pull/38)

**Full Changelog**: https://github.com/hexojs/hexo-front-matter/compare/2.0.0...3.0.0

---

## [hexo-server 3.0.0](https://github.com/hexojs/hexo-server/releases/tag/3.0.0)

### Breaking Changes

- chore: drop nodejs 10.x [@yoshinorin] [#192](https://github.com/hexojs/hexo-server/pull/192)

### Fixes

- fix: send correct MIME for rss file [@XieJiSS] [#145](https://github.com/hexojs/hexo-server/145)
- Check if header has already been set [@9662] [#49](https://github.com/hexojs/hexo-server/49)

### Performance

- refactor: replace chalk with nanocolors [@SukkaW] [#171](https://github.com/hexojs/hexo-server/171)
- Switch to picocolors [@tomap] [#177](https://github.com/hexojs/hexo-server/177)

### Refactor

- refactor: use the WHATWG URL API instead of `url.format` [@yoshinorin] [#193](https://github.com/hexojs/hexo-server/193)

### Changes

- chore(docs): update badges [@yoshinorin] [#194](https://github.com/hexojs/hexo-server/194)

### Dependencies

- chore(deps): bump mime from 2.5.2 to 3.0.0 @dependabot [#181](https://github.com/hexojs/hexo-server/181)
- chore(deps-dev): bump sinon from 11.1.2 to 12.0.1 @dependabot [#183](https://github.com/hexojs/hexo-server/183)
- chore(deps-dev): bump sinon from 10.0.1 to 11.1.2 @dependabot [#167](https://github.com/hexojs/hexo-server/167)
- chore(deps-dev): bump sinon from 9.2.4 to 10.0.1 @dependabot-preview [#154](https://github.com/hexojs/hexo-server/154)
- chore(deps-dev): bump eslint from 8.1.0 to 8.5.0 @dependabot [#190](https://github.com/hexojs/hexo-server/190)
- chore(deps-dev): bump eslint from 7.32.0 to 8.1.0 @dependabot [#178](https://github.com/hexojs/hexo-server/178)
- chore(deps-dev): bump hexo from 5.4.0 to 6.0.0 @dependabot [#191](https://github.com/hexojs/hexo-server/191)
- chore(deps): bump open from 8.2.1 to 8.3.0 @dependabot [#172](https://github.com/hexojs/hexo-server/172)
- chore(deps): bump open from 8.3.0 to 8.4.0 @dependabot [#179](https://github.com/hexojs/hexo-server/179)
- chore(deps-dev): bump mocha from 8.4.0 to 9.1.3 @dependabot [#176](https://github.com/hexojs/hexo-server/176)
- chore(deps-dev): bump supertest from 5.0.0 to 6.1.3 @dependabot-preview [#147](https://github.com/hexojs/hexo-server/147)
- chore(deps): bump open from 7.4.2 to 8.0.9 @dependabot [#159](https://github.com/hexojs/hexo-server/159)
- Upgrade to GitHub-native Dependabot @dependabot-preview [#157](https://github.com/hexojs/hexo-server/157)
- chore(deps-dev): bump supertest from 4.0.2 to 5.0.0 @dependabot-preview [#141](https://github.com/hexojs/hexo-server/141)

### New Contributors

* @XieJiSS made their first contribution in [#145](https://github.com/hexojs/hexo-server/pull/145)
* @9662 made their first contribution in [#49](https://github.com/hexojs/hexo-server/pull/49)

**Full Changelog**: https://github.com/hexojs/hexo-server/compare/2.0.0...3.0.0

---

## [hexo-renderer-less-4.0.0](https://github.com/hexojs/hexo-renderer-less/releases/tag/4.0.0)

### Breaking Changes

* chore(deps): bump less from 3.13.1 to 4.1.2 by @dependabot in [#66](https://github.com/hexojs/hexo-renderer-less/pull/66)
    *  Please see [less v4.0.0 release docs](https://github.com/less/less.js/releases/tag/v4.0.0)
* Remove node 10 support [@tomap] [198738c](https://github.com/hexojs/hexo-renderer-less/commit/198738c97423002cc810442672d092fd5c0037da)

### Dependencies

* chore(deps-dev): bump eslint from 7.32.0 to 8.1.0 by @dependabot in [#70](https://github.com/hexojs/hexo-renderer-less/pull/70)
* chore(deps-dev): bump hexo from 5.4.0 to 6.0.0 by @dependabot in [#71](https://github.com/hexojs/hexo-renderer-less/pull/71)
* chore(deps-dev): bump mocha from 8.4.0 to 9.1.3 by @dependabot in [#69](https://github.com/hexojs/hexo-renderer-less/pull/69)

### Misc

* Upgrade to GitHub-native Dependabot by @dependabot-preview in [#58](https://github.com/hexojs/hexo-renderer-less/pull/58)
* chore(ci): fix send coverage report by [@yoshinorin] in [#72](https://github.com/hexojs/hexo-renderer-less/pull/72)

**Full Changelog**: https://github.com/hexojs/hexo-renderer-less/compare/2.0.2...4.0.0

[@SukkaW]: https://github.com/SukkaW
[@tomap]: https://github.com/tomap
[@yoshinorin]: https://github.com/yoshinorin
[@XieJiSS]: https://github.com/XieJiSS
[@9662]: https://github.com/9662