---
title: Hexo 6.2.0 Released
---

## Fixes

* fix[#4917](https://github.com/hexojs/hexo): suppress YAMLException when load js-yaml by @yoshinorin in [#4927](https://github.com/hexojs/hexo/pull/4927)
    * This change is workaround for [#4917](https://github.com/hexojs/hexo). Please see PR comments.
* chore(deps): bump warehouse from 4.0.0 to 4.0.1 by @yoshinorin in [#4943](https://github.com/hexojs/hexo/pull/4943)
    * This change is workaround for  #4922. Please see [warehouse #123](https://github.com/hexojs/warehouse/pull/123)

## Refactors

* chore: replace deprecated `String.prototype.substr()` by @CommanderRoot in [#4918](https://github.com/hexojs/hexo/pull/4918)

## Dependencies

* chore: bump sinon from 12.0.1 to 13.0.2 by @dependabot in [#4944](https://github.com/hexojs/hexo/pull/4944)
* chore: bump mocha from 9.2.2 to 10.0.0 by @dependabot in [#4960](https://github.com/hexojs/hexo/pull/4960)
* chore(deps): bump hexo-util from 2.6.0 to 2.6.1 by @yoshinorin in [#4957](https://github.com/hexojs/hexo/pull/4957)
* chore: bump actions/checkout from 2 to 3 by @dependabot in [#4905](https://github.com/hexojs/hexo/pull/4905)

## Miscs

* chore(bot): delete stale bot by @yoshinorin in [#4901](https://github.com/hexojs/hexo/pull/4901)
* chore(ISSUE_TEMPLATE): delete `Your theme _config.yml` section by @yoshinorin in [#4931](https://github.com/hexojs/hexo/pull/4931)

## New Contributors

* [@CommanderRoot] made their first contribution in [](https://github.com/hexojs/hexo/pull/4918)

[@CommanderRoot]: https://github.com/CommanderRoot
[@yoshinorin]: https://github.com/yoshinorin

**Full Changelog**: https://github.com/hexojs/hexo/compare/6.1.0...6.2.0