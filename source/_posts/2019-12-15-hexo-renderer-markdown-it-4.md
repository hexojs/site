---
title: Official plugin hexo-renderer-markdown-it 4.0.0 released
---

We have released a new version of the official plugin [hexo-renderer-markdown-it]

[hexo-renderer-markdown-it]: https://github.com/hexojs/hexo-renderer-markdown-it

### Breaking changes

- We have updated the default config to be consistent with [hexo-renderer-marked] [#90], [#92]
  - New defaults:

  ``` yml
  markdown:
    render:
      html: true
      xhtmlOut: false
      breaks: true
      linkify: true
      typographer: true
      quotes: '“”‘’'
    plugins:
    anchors:
      level: 2
      collisionSuffix: ''
      permalink: false
      permalinkClass: 'header-anchor'
      permalinkSymbol: '¶'
      case: 0
      separator: '-'
  ```

  - Previous defaults (other configs remain the same):

  ``` yml
  markdown:
    anchors:
      permalink: true
      level: 1
      collisionSuffix: 'v'
      case: 1
  ```

- Requires Node 8.6+ [#79]

### Features

- Include official markdown-it plugins [#52], [#86], [#87]
  - They are disabled by default
  - Included plugins:

  ``` yml
  markdown:
    plugins:
      - markdown-it-abbr
      - markdown-it-cjk-breaks
      - markdown-it-container
      - markdown-it-deflist
      - markdown-it-emoji
      - markdown-it-footnote
      - markdown-it-ins
      - markdown-it-mark
      - markdown-it-sub
      - markdown-it-sup
  ```

- Include [markdown-it-cjk-breaks] plugin [#56]
  - To enable:

  ``` yml
  markdown:
    plugins:
      - markdown-it-cjk-breaks
  ```

- Add new options to `anchors:` [#95]

  ``` yml
  markdown:
    anchors:
      case: 0 # Set to 1 to transform anchors to lowercase, 2 for uppercase
      separator: '-' # Replace the space with a dash, can be any character
  ```

### Housekeeping

- Update markdown-it from v8 to v10 [#80], [#88]
- Update mocha from v3 to v5 [#60]

[hexo-renderer-marked]: https://github.com/hexojs/hexo-renderer-marked
[markdown-it-cjk-breaks]: https://github.com/markdown-it/markdown-it-cjk-breaks
[#90]: https://github.com/hexojs/hexo-renderer-markdown-it/pull/90
[#92]: https://github.com/hexojs/hexo-renderer-markdown-it/pull/92
[#79]: https://github.com/hexojs/hexo-renderer-markdown-it/pull/79
[#52]: https://github.com/hexojs/hexo-renderer-markdown-it/pull/52
[#86]: https://github.com/hexojs/hexo-renderer-markdown-it/pull/86
[#87]: https://github.com/hexojs/hexo-renderer-markdown-it/pull/87
[#56]: https://github.com/hexojs/hexo-renderer-markdown-it/pull/56
[#95]: https://github.com/hexojs/hexo-renderer-markdown-it/pull/95
[#80]: https://github.com/hexojs/hexo-renderer-markdown-it/pull/80
[#88]: https://github.com/hexojs/hexo-renderer-markdown-it/pull/88
[#60]: https://github.com/hexojs/hexo-renderer-markdown-it/pull/60
