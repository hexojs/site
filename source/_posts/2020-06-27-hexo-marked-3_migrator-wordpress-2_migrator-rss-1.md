---
title: Official plugins hexo-renderer-marked 3.0.0, hexo-migrator-wordpress 2.0.0 & hexo-migrator-rss 1.0.0 released
---

## hexo-renderer-marked 3.0.0

### Breaking change

- Remove codeblock highlight. [#134]
  - This plugin is now neutral to the code highlight library used
- Drop support of Node 8 [#155]

### Feature

- `prependRoot` option to prepend `root:` value to image path. [#111]
  - This is useful when you have custom `root:` value.
  - Example:

  ``` yml
  root: /blog/
  marked:
    prependRoot: true # disabled by default
  ```

  - When embedding an internal image, instead of using `![image-title](/blog/foo/bar.jpg)`, you can save some typing by using `![image-title](/foo/bar.jpg)` instead. When this feature is enabled, `/blog` will be automatically prepended to `/foo/bar.jpg`.
- `external_link` option to open links in new tab. [#116] [#119]
  - Usage:

  ``` yml
  external_link:
    enable: false
    exclude: []
    nofollow: false
  ```

  - `exclude: ['foo.com', 'bar.net']` skips over links that start with `foo.com` or `bar.net`, e.g. `https://foo.com/post-a/` & `https://bar.net/post-b/`. Subdomains need to be specified when applicable, including "www"; the example given here doesn't apply to `http://www.bar.com/post-c`.
  - `nofollow: true` adds `rel="noopener external nofollow noreferrer"` for [SEO](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types), otherwise it's just `rel="noopener"` if `external_link:` is enabled.
- Support title attribute in image link [#122]
  - `![caption](http://bar.com/b.jpg "a-title")` -> `<img src="http://bar.com/b.jpg" alt="caption" title="a-title">`
- Ability to override the default rendering functions. Refer to the [docs](https://github.com/hexojs/hexo-renderer-marked#extensibility) for instruction. [#129]
  - Example usage include adding a custom class name to a link or an image embed.

### Fix

- For safety, all links and image links are now encoded by default. [#112]
  - Example: `/foo/bár.jpg` -> `/foo/b%C3%A1r.jpg`

### Refactor

- Utilize existing [`isExternalLink`](https://github.com/hexojs/hexo-util#isexternallinkurl-sitehost-exclude) of hexo-util to simplify codebase. [#124]

### Dependency

- Upgrade marked from 0.7.0 to 1.0.0 [#128] [#144]

[#134]: https://github.com/hexojs/hexo-renderer-marked/pull/134
[#155]: https://github.com/hexojs/hexo-renderer-marked/pull/155
[#111]: https://github.com/hexojs/hexo-renderer-marked/pull/111
[#116]: https://github.com/hexojs/hexo-renderer-marked/pull/116
[#119]: https://github.com/hexojs/hexo-renderer-marked/pull/119
[#122]: https://github.com/hexojs/hexo-renderer-marked/pull/122
[#129]: https://github.com/hexojs/hexo-renderer-marked/pull/129
[#112]: https://github.com/hexojs/hexo-renderer-marked/pull/112
[#124]: https://github.com/hexojs/hexo-renderer-marked/pull/124
[#128]: https://github.com/hexojs/hexo-renderer-marked/pull/128
[#144]: https://github.com/hexojs/hexo-renderer-marked/pull/144

---

## hexo-migrator-wordpress 2.0.0

v2 is a complete rewrite to utilize modern APIs. By no means it is feature-complete, please test it on your wordpress.xml and report any item that did not get imported.

### Breaking change

- Requires Node 12+, drop support < Node 12 [#61]
  - A requirement of camaro v6 which utilizes [`worker_threads`](https://nodejs.org/api/worker_threads.html).

### Feature

- `--skipduplicate` option to skip importing posts which have similar title as existing ones. [#57]
  - Disabled by default
  - Usage: `hexo migrate wordpress /path/to/wordpress.xml --skipduplicate`
- `--limit [number]` option to set the maximum number of posts to import. [#57]
  - Default to importing all posts.
  - Usage: `hexo migrate wordpress /path/to/wordpress.xml --limit 3`
- `--alias` option to redirect post to wordpress-hosted post. [#57]
  - Requires [hexo-generator-alias](http://github.com/hexojs/hexo-generator-alias)
  - Usage: `hexo migrate wordpress /path/to/wordpress.xml --alias`

### Refactor

- Complete rewrite to utilize modern API/library. It enables more flexible parsing of input xml with the ability to support custom elements and future formats. [#57]

### Dependency

- Upgrade turndown from 4.0.2 to 6.0.0 [#41] [#58]

[#61]: https://github.com/hexojs/hexo-migrator-wordpress/pull/61
[#57]: https://github.com/hexojs/hexo-migrator-wordpress/pull/57
[#41]: https://github.com/hexojs/hexo-migrator-wordpress/pull/41
[#58]: https://github.com/hexojs/hexo-migrator-wordpress/pull/58

---

## hexo-migrator-rss 1.0.0

v1 is a complete rewrite to utilize modern APIs. By no means it is feature-complete, please test it on your atom.xml/rss.xml and report any item that did not get imported.

### Breaking change

- Requires Node 12+, drop support < Node 12 [#60]
  - A requirement of [camaro@6](https://github.com/hexojs/hexo-migrator-rss/pull/58) which utilizes [`worker_threads`](https://nodejs.org/api/worker_threads.html).

### Feature

- `--skipduplicate` option to skip importing posts which have similar title as existing ones. [#44]
  - Disabled by default
  - Usage: `hexo migrate rss /path/to/feed.xml --skipduplicate`
- `--limit [number]` option to set the maximum number of posts to import. [#37]
  - Default to importing all posts.
  - Usage: `hexo migrate rss /path/to/feed.xml --limit 3`

### Refactor

- Complete rewrite to utilize modern API/library. It enables more flexible parsing of input feed with the ability to support custom elements and future formats. [#34]

### Dependencies

- Upgrade camaro from 4.2.0 to 6.0.2 [#58](https://github.com/hexojs/hexo-migrator-rss/pull/58)
- Upgrade turndown from 5.0.3 to 6.0.0 [#47]
- Upgrade got from 10.7.0 to 11.0.1 [#49]
- Upgrade hexo-util from 1.9.0 to 2.1.0 [#53]
- Upgrade hexo-fs from 2.0.0 to 3.0.1 [#50]

[#60]: https://github.com/hexojs/hexo-migrator-rss/pull/60
[#44]: https://github.com/hexojs/hexo-migrator-rss/pull/44
[#37]: https://github.com/hexojs/hexo-migrator-rss/pull/37
[#34]: https://github.com/hexojs/hexo-migrator-rss/pull/34
[#47]: https://github.com/hexojs/hexo-migrator-rss/pull/47
[#49]: https://github.com/hexojs/hexo-migrator-rss/pull/49
[#53]: https://github.com/hexojs/hexo-migrator-rss/pull/53
[#50]: https://github.com/hexojs/hexo-migrator-rss/pull/50
