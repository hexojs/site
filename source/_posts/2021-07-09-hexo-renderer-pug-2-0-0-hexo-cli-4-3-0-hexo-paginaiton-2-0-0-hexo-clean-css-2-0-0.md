---
title: Official plugins hexo-cli 4.3.0, hexo-renderer-pug 2.0.0, hexo-paginaiton 2.0.0, hexo-clean-css 2.0.0
---

## hexo-cli 4.3.0

> [4.3.0 Release](https://github.com/hexojs/hexo-cli/releases/tag/4.3.0)

### Feature

- feat(version): show distro version [@curbengh] [#239](https://github.com/hexojs/hexo-cli/pull/239)

### Refactor

- refactor & style: let command default to be 'help' [@cokemine] [#277](https://github.com/hexojs/hexo-cli/pull/277)

### CI/CD

- Update actions/setup-node action to v2 [@stevenjoezhang] [#274](https://github.com/hexojs/hexo-cli/pull/274)

### Misc

- Publish assets [@stevenjoezhang] [#266](https://github.com/hexojs/hexo-cli/pull/266)

### Dependencies

- chore: bump eslint from 7.7.0 to 7.28.0 @dependabot [#243](https://github.com/hexojs/hexo-cli/pull/243) [#237](https://github.com/hexojs/hexo-cli/pull/237) [#275](https://github.com/hexojs/hexo-cli/pull/275) [#296](https://github.com/hexojs/hexo-cli/pull/296) [#310](https://github.com/hexojs/hexo-cli/pull/310)
- chore(deps): bump hexo-util from 2.2.0 to 2.5.0 @dependabot-preview [#234](https://github.com/hexojs/hexo-cli/pull/234) [#238](https://github.com/hexojs/hexo-cli/pull/238) [#299](https://github.com/hexojs/hexo-cli/pull/299)
- chore(deps): [security] bump highlight.js from 10.1.1 to 10.5.0 @dependabot-preview [#262](https://github.com/hexojs/hexo-cli/pull/262) [#268](https://github.com/hexojs/hexo-cli/pull/268)
- chore(deps-dev): bump mocha from 8.1.1 to 8.2.0 @dependabot-preview [#258](https://github.com/hexojs/hexo-cli/pull/258) [#288](https://github.com/hexojs/hexo-cli/pull/288) [#253](https://github.com/hexojs/hexo-cli/pull/253)
- chore: bump glob-parent from 5.1.1 to 5.1.2 @dependabot [#312](https://github.com/hexojs/hexo-cli/pull/312)
- chore: bump sinon from 9.0.2 to 11.1.1 @dependabot [#235](https://github.com/hexojs/hexo-cli/pull/235) [#251](https://github.com/hexojs/hexo-cli/pull/251) [#257](https://github.com/hexojs/hexo-cli/pull/257) [#272](https://github.com/hexojs/hexo-cli/pull/272) [#293](https://github.com/hexojs/hexo-cli/pull/293) [#306](https://github.com/hexojs/hexo-cli/pull/306)
 
- Upgrade to GitHub-native Dependabot @dependabot-preview [#297](https://github.com/hexojs/hexo-cli/pull/297)
- chore(deps): bump chalk from 4.1.0 to 4.1.1 @dependabot-preview [#295](https://github.com/hexojs/hexo-cli/pull/295)
- chore(deps-dev): bump chai from 4.2.0 to 4.3.4 @dependabot-preview [#276](https://github.com/hexojs/hexo-cli/pull/276) [#289](https://github.com/hexojs/hexo-cli/pull/289)
- chore(deps): bump resolve from 1.17.0 to 1.20.0 @dependabot-preview [#279](https://github.com/hexojs/hexo-cli/pull/279)
- chore(deps): [security] bump y18n from 4.0.0 to 4.0.1 @dependabot-preview [#292](https://github.com/hexojs/hexo-cli/pull/292)
- chore(deps): [security] bump prismjs from 1.20.0 to 1.23.0 @dependabot-preview [#232](https://github.com/hexojs/hexo-cli/pull/232) [#283](https://github.com/hexojs/hexo-cli/pull/283)
- chore(deps-dev): bump hexo-renderer-marked from 3.3.0 to 4.0.0 @dependabot-preview [#247](https://github.com/hexojs/hexo-cli/pull/247) [#278](https://github.com/hexojs/hexo-cli/pull/278)

---

## hexo-renderer-pug 2.0.0

> [2.0.0](https://github.com/hexojs/hexo-renderer-pug/releases/tag/2.0.0)

### Breaking changes

- Drop Node.js 8.x & 10.x [@yoshinorin] [#9](https://github.com/hexojs/hexo-renderer-pug/pull/9)

### Dependencies

- Update dependencies [@stevenjoezhang] [e91059d3](https://github.com/hexojs/hexo-renderer-pug/commit/e91059d39b512a3203554a75c59d2d74a0023807)

### CI/CD

- ci: migrate to GitHub actions [@stevenjoezhang] [71d55f5c](https://github.com/hexojs/hexo-renderer-pug/commit/71d55f5cb7d6a78505fa882353237a93699635d5)

### Docs

- docs(readme): update badge [@stevenjoezhang] [da47e906](https://github.com/hexojs/hexo-renderer-pug/commit/da47e90632fde479647e3279fc21b1b4f57ac148)

---

## hexo-pagination 2.0.0

> [hexo-pagination 2.0.0](https://github.com/hexojs/hexo-pagination/releases/tag/v2.0.0)

### Breaking Changes

- drop Node.js 8 [@yoshinorin] [#42](https://github.com/hexojs/hexo-pagination/pull/42)

### Refactor

- destructure & default parameters [@SukkaW] [#24](https://github.com/hexojs/hexo-pagination/pull/24)
- use Object.assign & Map [@SukkaW] [#36](https://github.com/hexojs/hexo-pagination/pull/36)

### Dependencies

- eslint-config-hexo from 3.0.0 to 4.1.0 @dependabot [#23](https://github.com/hexojs/hexo-pagination/pull/23)

- bump nyc from 14.1.1 to 15.0.0 @dependabot [#25](https://github.com/hexojs/hexo-pagination/pull/25)
- bump mocha from 6.2.3 to 8.1.1 @dependabot [#30](https://github.com/hexojs/hexo-pagination/pull/30) [#35](https://github.com/hexojs/hexo-pagination/pull/35)
- bump eslint from 6.8.0 to 7.1.0 @dependabot [#32](https://github.com/hexojs/hexo-pagination/pull/32)

### CI/CD

- drop node 8 and add node 12 [@SukkaW] [33111c](https://github.com/hexojs/hexo-pagination/commit/33111c9fd614b158de689f1c3a3dba65f64ba37b)

### Docs

- http://hexo.io to https://hexo.io [@yoshinorin] [#41](https://github.com/hexojs/hexo-pagination/pull/41)

### Misc

- Update and rename mocha.opts to .mocharc.yml [@SukkaW] [51524ba](https://github.com/hexojs/hexo-pagination/commit/51524ba)
- Upgrade to GitHub-native Dependabot @dependabot [#38](https://github.com/hexojs/hexo-pagination/pull/38)

---

### hexo-clean-css 2.0.0

> [hexo-clean-css 2.0.0](https://github.com/hexojs/hexo-clean-css/releases/tag/2.0.0)

### Breaking Changes

- Drop node 8 support [@tomap] [#35](https://github.com/hexojs/hexo-clean-css/pull/35)

### Refactor

- use async/await [@curbengh] [#21](https://github.com/hexojs/hexo-clean-css/pull/21)

### Dependencis

- bump nyc from 14.1.1 to 15.0.0 @dependabot-bot [#22](https://github.com/hexojs/hexo-clean-css/pull/22)
- bump clean-css from 4.2.3 to 5.1.2 @dependabot-bot [#33](https://github.com/hexojs/hexo-clean-css/pull/33)
- bump mocha from 6.2.2 to 8.0.1 @dependabot-bot [#26](https://github.com/hexojs/hexo-clean-css/pull/26) [#29](https://github.com/hexojs/hexo-clean-css/pull/29)
- bump eslint from 6.8.0 to 7.1.0 @dependabot-bot [#28](https://github.com/hexojs/hexo-clean-css/pull/28)

### CI/CD

- drop node 8 and add node 12 [@SukkaW] [#28](https://github.com/hexojs/hexo-clean-css/pull/28)
- Fix wrong path for actions [@tomap] [#36](https://github.com/hexojs/hexo-clean-css/pull/36)

### Misc

- Upgrade to GitHub-native Dependabot @dependabot-bot [#34](https://github.com/hexojs/hexo-clean-css/pull/34)

[@stevenjoezhang]: https://github.com/stevenjoezhang
[@SukkaW]: https://github.com/SukkaW
[@tomap]: https://github.com/tomap
[@curbengh]: https://github.com/curbengh
[@yoshinorin]: https://github.com/yoshinorin
[@cokemine]: https://github.com/cokemine