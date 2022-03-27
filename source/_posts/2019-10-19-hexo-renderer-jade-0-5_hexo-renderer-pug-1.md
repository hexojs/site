---
title: Official plugins hexo-renderer-jade 0.5.0 & hexo-renderer-pug 1.0.0 released
---

Since the upstream [jade] package has been replaced by [pug] package and no longer maintained, we've decided to deprecate [hexo-renderer-jade] and replace it with [hexo-renderer-pug].

To migrate, update your "package.json",

``` diff
-  "hexo-renderer-jade": "^0.4.1",
+  "hexo-renderer-pug": "^1.0.0",
```

and rename all `*.jade` files to `*.pug`.

## hexo-renderer-jade 0.5.0

### Breaking change

- Final release, this plugin has been deprecated and replaced by [hexo-renderer-pug] [#35]
- chore: drop node 6 [#29]

### Dependencies

- Update eslint requirement from ^5.9.0 to ^6.1.0 [#28]
- Update mocha requirement from ^5.2.0 to ^6.0.1 [#25]
- chore(package): delete jscs & update eslint-config-hexo to 3.0.0 [#22]
- Update chai requirement from ^3.5.0 to ^4.2.0 [#16]

## hexo-renderer-pug 1.0.0

The plugin was initially imported from [hexo-renderer-jade] repository up until [this commit](https://github.com/hexojs/hexo-renderer-jade/commit/828b04ae71b20b2b320cbbb2486e61508b4346e9).

Following are the changes from the commit onwards

### Breaking changes

- drop Jade [#2]
- rename to hexo-renderer-pug [#1]

### Unit testing

- ci(travis): add windows [#4]

[jade]: https://www.npmjs.com/package/jade
[pug]: https://www.npmjs.com/package/pug
[hexo-renderer-jade]: https://github.com/hexojs/hexo-renderer-jade
[hexo-renderer-pug]: https://github.com/hexojs/hexo-renderer-pug
[#35]: https://github.com/hexojs/hexo-renderer-jade/pull/35
[#29]: https://github.com/hexojs/hexo-renderer-jade/pull/29
[#28]: https://github.com/hexojs/hexo-renderer-jade/pull/28
[#25]: https://github.com/hexojs/hexo-renderer-jade/pull/25
[#22]: https://github.com/hexojs/hexo-renderer-jade/pull/22
[#16]: https://github.com/hexojs/hexo-renderer-jade/pull/16
[#1]: https://github.com/hexojs/hexo-renderer-pug/pull/1
[#2]: https://github.com/hexojs/hexo-renderer-pug/pull/2
[#4]: https://github.com/hexojs/hexo-renderer-pug/pull/4
