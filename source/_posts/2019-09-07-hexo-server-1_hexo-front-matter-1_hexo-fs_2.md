---
title: Official plugin hexo-server 1.0.0, hexo-front-matter 1.0.0 & hexo-fs 2.0.0 released
---

We released a new version of the official plugins [hexo-server], [hexo-front-matter] & [hexo-fs].

## hexo-server 1.0.0

### Breaking change

- Drop node 6 [#87]

### Refactor

- Refactor: es2016nify [#68]
- refactor: Test refactor es2016 [#67]

### Housekeeping

- Move jscs to eslint [#65]

## hexo-front-matter 1.0.0

### Breaking change

- chore: drop node 6 [#18]

### Refactor

- Migrate to ES6 [#9]

### Housekeeping

- Use eslint instead of jscs [#10]

## hexo-fs 2.0.0

### Breaking change

- Drop node 6 [#34]

### Refactor

- `Object.hasOwnProperty` syntax for compatibility with eslint v6 [#37]
- Refactor(test): useful chai-as-promised [#43]
- Destructure path module [#44]
- Refactor(test): Tuple to Object map [#45]

[hexo-server]: https://github.com/hexojs/hexo-server
[hexo-front-matter]: https://github.com/hexojs/hexo-front-matter
[hexo-fs]: https://github.com/hexojs/hexo-fs

[#87]: https://github.com/hexojs/hexo-server/pull/87
[#68]: https://github.com/hexojs/hexo-server/pull/68
[#67]: https://github.com/hexojs/hexo-server/pull/67
[#65]: https://github.com/hexojs/hexo-server/pull/65

[#18]: https://github.com/hexojs/hexo-front-matter/pull/18
[#9]: https://github.com/hexojs/hexo-front-matter/pull/9
[#10]: https://github.com/hexojs/hexo-front-matter/pull/10

[#34]: https://github.com/hexojs/hexo-fs/pull/34
[#37]: https://github.com/hexojs/hexo-fs/pull/37
[#43]: https://github.com/hexojs/hexo-fs/pull/43
[#44]: https://github.com/hexojs/hexo-fs/pull/44
[#45]: https://github.com/hexojs/hexo-fs/pull/45
