---
title: Hexo 6.0.0 Released
---

Hexo v6 is requires Node.js 12.13+. Please use Node.js 12+.

To upgrade to Hexo v6, change the following line in your package.json,

``` diff package.json
-  "hexo": "^5.4.1",
+  "hexo": "^6.0.0",
```

## Breaking Changes

- Drop Node 10 [@stevenjoezhang] [#4779] [#4691]

## Security

- Escape HTML  by default in list_tag [@tomap] [#4743]

**Please see more detail:** [Announcement: About CVE-2021-25987](https://github.com/hexojs/hexo/issues/4838)

## New features

- feat: load hexo plugin in the theme's package.json [@stevenjoezhang] [#4771]
- feat(open_graph): different URLs for `og:image` and `twitter:image` [@KentarouTakeda] [#4748]

## Performance

- perf(tag/helper): memoize [@SukkaW] [#4789]
- perf(external_link): optimize regex [@SukkaW] [#4790]
- refactor/perf: use nanocolors [@SukkaW] [#4788]
- Switch to picocolors [@tomap] [#4825]
- perf: avoid using delete operator [@SukkaW] [#4711]
- perf: overall improvements [@SukkaW] [#4783]
- refactor/perf(post): use state machine to escape swig tag [@SukkaW] [#4780]
- refactor: refactor pagination - paginatorHelper - pagenasionPartShow [@CroMarmot] [#4662]

## Fixes

- fix(post): escape swig full tag with args [@stevenjoezhang] [#4824]
- fix(processor): remove race condition failsafe [@SukkaW] [#4791]
- fix(#4780): curly brackets [@SukkaW] [#4784]
- fix(#4780): empty tag name correction [@SukkaW] [#4786]
- Generate draft assets in draft mode [@darekkay] [#4563]

## Refactor

- refactor: native `Array.flat()` [@curbengh] [#4806]

## Docs

- doc: add homebrew install [@chenrui333] [#4724]
- doc(extend/console): add jsdoc [@SukkaW] [#4500]

## Dependencies

- Cleanup dependabot [@tomap] [#4820]
- chore: bump actions/stale from 3 to 4 @dependabot [#4828]
- chore: bump sinon from 11.1.2 to 12.0.1 @dependabot [#4810]
- chore: bump eslint from 7.32.0 to 8.0.0 @dependabot [#4799]
- chore: bump hexo-log from 2.0.0 to 3.0.0 @dependabot [#4794]
- chore: bump husky from 4.3.8 to 7.0.2 @dependabot [#4763]
- chore: bump sinon from 10.0.1 to 11.1.2 @dependabot [#4747]
- chore: bump mocha from 8.4.0 to 9.1.1 @dependabot [#4765]
- chore: bump lint-staged from 10.5.4 to 11.0.0 @dependabot [#4697]
- Upgrade to GitHub-native Dependabot @dependabot-preview [#4689]
- chore(deps-dev): bump sinon from 9.2.4 to 10.0.0 @dependabot-preview [#4670]
- chore(deps-dev): bump hexo-renderer-marked from 3.3.0 to 4.0.0 @dependabot-preview [#4649]

## New Contributors

* [@CroMarmot] made their first contribution in https://github.com/hexojs/hexo/pull/4662
* [@darekkay] made their first contribution in https://github.com/hexojs/hexo/pull/4563
* [@chenrui333] made their first contribution in https://github.com/hexojs/hexo/pull/4724

**Full Changelog**: https://github.com/hexojs/hexo/compare/5.4.0...6.0.0

[#4779]: https://github.com/hexojs/hexo/pull/4779
[#4691]: https://github.com/hexojs/hexo/pull/4691
[#4743]: https://github.com/hexojs/hexo/pull/4743
[#4748]: https://github.com/hexojs/hexo/pull/4748
[#4771]: https://github.com/hexojs/hexo/pull/4771
[#4789]: https://github.com/hexojs/hexo/pull/4789
[#4790]: https://github.com/hexojs/hexo/pull/4790
[#4788]: https://github.com/hexojs/hexo/pull/4788
[#4825]: https://github.com/hexojs/hexo/pull/4825
[#4711]: https://github.com/hexojs/hexo/pull/4711
[#4783]: https://github.com/hexojs/hexo/pull/4783
[#4780]: https://github.com/hexojs/hexo/pull/4780
[#4662]: https://github.com/hexojs/hexo/pull/4662
[#4824]: https://github.com/hexojs/hexo/pull/4824
[#4791]: https://github.com/hexojs/hexo/pull/4791
[#4784]: https://github.com/hexojs/hexo/pull/4784
[#4786]: https://github.com/hexojs/hexo/pull/4786
[#4563]: https://github.com/hexojs/hexo/pull/4563
[#4806]: https://github.com/hexojs/hexo/pull/4806
[#4724]: https://github.com/hexojs/hexo/pull/4724
[#4500]: https://github.com/hexojs/hexo/pull/4500
[#4820]: https://github.com/hexojs/hexo/pull/4820
[#4828]: https://github.com/hexojs/hexo/pull/4828
[#4810]: https://github.com/hexojs/hexo/pull/4810
[#4799]: https://github.com/hexojs/hexo/pull/4799
[#4794]: https://github.com/hexojs/hexo/pull/4794
[#4763]: https://github.com/hexojs/hexo/pull/4763
[#4747]: https://github.com/hexojs/hexo/pull/4747
[#4765]: https://github.com/hexojs/hexo/pull/4765
[#4697]: https://github.com/hexojs/hexo/pull/4697
[#4689]: https://github.com/hexojs/hexo/pull/4689
[#4670]: https://github.com/hexojs/hexo/pull/4670
[#4649]: https://github.com/hexojs/hexo/pull/4649


[@stevenjoezhang]: https://github.com/stevenjoezhang
[@SukkaW]: https://github.com/SukkaW
[@tomap]: https://github.com/tomap
[@curbengh]: https://github.com/curbengh
[@KentarouTakeda]: https://github.com/KentarouTakeda
[@CroMarmot]: https://github.com/CroMarmot
[@darekkay]: https://github.com/darekkay
[@chenrui333]: https://github.com/chenrui333