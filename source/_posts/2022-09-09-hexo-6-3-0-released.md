---
title: Hexo 6.3.0 Released
---

## New Features

* feat(tag/post_link): throw on post_link error by [@xbc5] in [#4938](https://github.com/hexojs/hexo/pull/4938)
* feat(tag/include_code): robust for url compuation of `view raw` by [@stevenjoezhang] in [#4996](https://github.com/hexojs/hexo/pull/4996)
* feat(paginator): allow custom class name by [@renbaoshuo] in [#5001](https://github.com/hexojs/hexo/pull/5001)
* feat(helper/toc): more flexible class name by [@renbaoshuo] in [#5010](https://github.com/hexojs/hexo/pull/5010)
* feat(helper/tagcloud): show_count option (#5047) by [@renbaoshuo] in [#5048](https://github.com/hexojs/hexo/pull/5048)
* feat(tag/code): add `language_attr` option (hexojs/hexo-util#278) by [@renbaoshuo] in [#5017](https://github.com/hexojs/hexo/pull/5017)
* feat(helper/is): add `is_home_first_page()` helper by [@renbaoshuo] in [#5006](https://github.com/hexojs/hexo/pull/5006)

## Improvements

* let post_link use original post title as title attribute by [@ppwwyyxx] in [#4973](https://github.com/hexojs/hexo/pull/4973)

## Fixes

* fix(hexo/index): `db.json` file path in debug logging on Windows by [@stevenjoezhang] in [#4994](https://github.com/hexojs/hexo/pull/4994)
* fix(tag): show source file in unformatted error message by [@curbengh] in [#5031](https://github.com/hexojs/hexo/pull/5031)
* Don't use data-uri for og:image by [@KentarouTakeda] in [#5053](https://github.com/hexojs/hexo/pull/5053)

## Refactors

* refactor(helper/open_graph): use whatwg url api by [@renbaoshuo] in [#5007](https://github.com/hexojs/hexo/pull/5007)
* chore(mail_to): use native URLSearchParams by [@renbaoshuo] in [#5002](https://github.com/hexojs/hexo/pull/5002)

## Test

* test: replace nyc with c8 by [@stevenjoezhang] in [#5040](https://github.com/hexojs/hexo/pull/5040)
* chore(test/extend/tag): async function (#3328) by [@renbaoshuo] in [#5003](https://github.com/hexojs/hexo/pull/5003)

## CI/CD

* chore: Set permissions for GitHub actions by [@neilnaveen] in [#4947](https://github.com/hexojs/hexo/pull/4947)
* chore: delete `release-drafter` by [@yoshinorin] in [#5044](https://github.com/hexojs/hexo/pull/5044)
* chore: improved benchmark result in github actions by [@renbaoshuo] in [#5013](https://github.com/hexojs/hexo/pull/5013)

## Dependencies

* chore(deps): bump hexo-util and warehouse by [@yoshinorin] in [#5028](https://github.com/hexojs/hexo/pull/5028)
* chore(deps): bump hexo-log from 3.0.0 to 3.2.0 by [@yoshinorin] in [#5054](https://github.com/hexojs/hexo/pull/5054)

## Misc

* Update license year by [@renbaoshuo] in [#5041](https://github.com/hexojs/hexo/pull/5041)
* chore: update issue template by [@yoshinorin] in [#5030](https://github.com/hexojs/hexo/pull/5030)
* chore: update .gitignore by [@yoshinorin] in [#4967](https://github.com/hexojs/hexo/pull/4967)

## New Contributors

* @xbc5 made their first contribution in [#4938](https://github.com/hexojs/hexo/pull/4938)
* @neilnaveen made their first contribution in [#4947](https://github.com/hexojs/hexo/pull/4947)
* @ppwwyyxx made their first contribution in [#4973](https://github.com/hexojs/hexo/pull/4973)

## Full Changelog

*  https://github.com/hexojs/hexo/compare/6.2.0...6.3.0

[@xbc5]: https://github.com/xbc5
[@stevenjoezhang]: https://github.com/stevenjoezhang
[@renbaoshuo]: https://github.com/renbaoshuo
[@ppwwyyxx]: https://github.com/ppwwyyxx
[@curbengh]: https://github.com/curbengh
[@KentarouTakeda]: https://github.com/KentarouTakeda
[@neilnaveen]: https://github.com/neilnaveen
[@yoshinorin]: https://github.com/yoshinorin
