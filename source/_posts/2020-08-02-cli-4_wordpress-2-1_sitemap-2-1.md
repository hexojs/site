---
title: Official plugins hexo-cli 4.1.0, hexo-migrator-wordpress 2.1.0, hexo-migrator-rss 1.1.0 & hexo-generator-sitemap 2.1.0 released
---

## hexo-cli 4.1.0

Include changes in [v4.0.0](https://github.com/hexojs/hexo-cli/releases/tag/4.0.0)

### Breaking change

- Requires Node 10.13+ [#195](https://github.com/hexojs/hexo-cli/pull/195)

### Fixes

- More detailed information for `hexo not found` [@stevenjoezhang](https://github.com/stevenjoezhang) [#206](https://github.com/hexojs/hexo-cli/pull/206)
  - When `hexo` binary could not be located, we usually recommend removing the node_modules folder and reinstall the packages.
  - `$ rm -rf node_modules && npm install --force`
- fix(init): fix hexo init error with a number target project name [@brelian](https://github.com/brelian) [#200](https://github.com/hexojs/hexo-cli/pull/200)
  - It's now possible to `hexo init 888`
- fix(init): shallow clone and reduce verbosity [@curbengh](https://github.com/curbengh) [#129](https://github.com/hexojs/hexo-cli/pull/129)
  - This should result in faster `hexo init` due to less file download.
  - `hexo init` operates by git clone [hexo-starter](https://github.com/hexojs/hexo-starter/). With this change, git now just clone recent commit history (shallow clone), instead of full history.
  - `hexo init` is also more _quiet_ while still show error if encountered.
- Improve Node 14 compatibility [#185](https://github.com/hexojs/hexo-cli/pull/185) [#190](https://github.com/hexojs/hexo-cli/pull/190)

### Refactor

- refactor: Class syntax & Destructuring assignment [@SukkaW](https://github.com/SukkaW) [#191](https://github.com/hexojs/hexo-cli/pull/191)
- refactor: destructure hexo-util [@curbengh](https://github.com/curbengh) [#141](https://github.com/hexojs/hexo-cli/pull/141)

### Housekeeping

- chore: update hexo-starter [@curbengh](https://github.com/curbengh) [#147](https://github.com/hexojs/hexo-cli/pull/147)
- chore: add release-drafter [@YoshinoriN](https://github.com/YoshinoriN) [#165](https://github.com/hexojs/hexo-cli/pull/165)
- ci: drop Node 8 [@curbengh](https://github.com/curbengh) [#185](https://github.com/hexojs/hexo-cli/pull/185)
- ci: add GitHub Actions [@curbengh](https://github.com/curbengh) [#223](https://github.com/hexojs/hexo-cli/pull/223)
- chore(deps-dev): bump hexo-renderer-marked from 2.0.0 to 3.0.0 [#216](https://github.com/hexojs/hexo-cli/pull/216)
- chore(deps-dev): bump mocha from 6.2.2 to 8.0.1 [#172](https://github.com/hexojs/hexo-cli/pull/172) [#203](https://github.com/hexojs/hexo-cli/pull/203) [#209](https://github.com/hexojs/hexo-cli/pull/209)
  - test(mocha): use yml format [@curbengh](https://github.com/curbengh) [#192](https://github.com/hexojs/hexo-cli/pull/192)
- chore(deps-dev): bump eslint from 6.8.0 to 7.0.0 [#197](https://github.com/hexojs/hexo-cli/pull/197)
- chore(deps-dev): bump rewire from 4.0.1 to 5.0.0 [#170](https://github.com/hexojs/hexo-cli/pull/170)
- chore(deps): bump chalk from 2.4.2 to 4.0.0 [#131](https://github.com/hexojs/hexo-cli/pull/131) [#178](https://github.com/hexojs/hexo-cli/pull/178)
- chore(deps-dev): bump sinon from 7.5.0 to 9.0.2 [#151](https://github.com/hexojs/hexo-cli/pull/151) [#180](https://github.com/hexojs/hexo-cli/pull/180)
- chore(deps-dev): bump nyc from 14.1.1 to 15.0.0 [#149](https://github.com/hexojs/hexo-cli/pull/149)
- chore(deps-dev): bump eslint-config-hexo from 3.0.0 to 4.1.0 [#139](https://github.com/hexojs/hexo-cli/pull/139) [#143](https://github.com/hexojs/hexo-cli/pull/143)

---

## hexo-migrator-wordpress 2.1.0

### Breaking change

- Drop support of Node 13 due to compatibility issue; this doesn't prevent npm from installing this plugin in Node 13, it shows warning instead. [#96](https://github.com/hexojs/hexo-migrator-wordpress/pull/96)
  - Nodejs has officially dropped support of Node 13 since 1 Jun 2020.
- fix(turndown): headingStyle: 'atx' & codeBlockStyle: 'fenced' [#65](https://github.com/hexojs/hexo-migrator-wordpress/pull/65)
  - More in-line with markdown style preferred by Hexo.

### Feature

- feat: import excerpt with markup [#64](https://github.com/hexojs/hexo-migrator-wordpress/pull/64)
  - Retain original markup of excerpt

  ```
  title: foo bar
  date: 2020-01-01 00:00:00
  ---

  Lorem ipsum [dolor](http://example.com/) sit amet, **nam** ex putant _intellegat_ reprehendunt.

  <!-- more -->

  Cu nulla aeterno nec, tibique deterruisset an eam, ea pro dolorem vituperata.
  ```

- Option to import image attachments (original WP link must be up) [#69](https://github.com/hexojs/hexo-migrator-wordpress/pull/69) [#70](https://github.com/hexojs/hexo-migrator-wordpress/pull/70) [#72](https://github.com/hexojs/hexo-migrator-wordpress/pull/72) [#73](https://github.com/hexojs/hexo-migrator-wordpress/pull/73) [#78](https://github.com/hexojs/hexo-migrator-wordpress/pull/78) [#85](https://github.com/hexojs/hexo-migrator-wordpress/pull/85) [#91](https://github.com/hexojs/hexo-migrator-wordpress/pull/91)
  - All attachments are imported by default, including original-sized and resized.
    - Usage: `$ hexo migrate wordpress /path/export.xml --import-image`
  - There is an option to import original-size images only.
    - Usage: `$ hexo migrate wordpress /path/export.xml --import-image original`
- Import nested categories [#89](https://github.com/hexojs/hexo-migrator-wordpress/pull/89)
  - Imported categories are also no longer nested anymore if the original are not.
- feat: 'default-category' option [#93](https://github.com/hexojs/hexo-migrator-wordpress/pull/93)
  - `Uncategorized` category is now skipped by default.
  - A default category can be set for posts without any category.
  `$ hexo migrate wordpress /path/export.xml --default-category 'unknown'`
  - Category name defaults to the value set in user configuration:

  ``` yml _config.yml
  default_category: uncategorized
  ```

### Fix

- fix: unescape title if escaped [#82](https://github.com/hexojs/hexo-migrator-wordpress/pull/82)
  - A post could be entitled `Some&quot;Title&quot;`, the fix is to detect the pattern and unescape it when necessary.
- fix: stricter excerpt regex [#88](https://github.com/hexojs/hexo-migrator-wordpress/pull/88)
  - Now only the following variants of [excerpt tag](https://hexo.io/docs/tag-plugins#Post-Excerpt) are valid.
  1. `<!--more-->`
  2. `<!-- more-->`
  3. `<!--more -->`
  4. `<!-- more -->`
- fix: handle title with double quotes [#67](https://github.com/hexojs/hexo-migrator-wordpress/pull/67)
  - Escape double quote before passing to yml parser
- fix: restore paragraph [#79](https://github.com/hexojs/hexo-migrator-wordpress/pull/79)
  - Paragraph lost issue only affects [Classic Editor](https://wordpress.org/plugins/classic-editor/)
- Import tags and categories separately [#81](https://github.com/hexojs/hexo-migrator-wordpress/pull/81)

### Documentation

- Add export instruction for Wordpress v5 [#84](https://github.com/hexojs/hexo-migrator-wordpress/pull/84)

---

## hexo-migrator-rss 1.1.0

### Breaking change

- Drop support of Node 13 due to compatibility issue; this doesn't prevent npm from installing this plugin in Node 13, it shows warning instead. [#69](https://github.com/hexojs/hexo-migrator-rss/pull/69)
  - Nodejs has officially dropped support of Node 13 since 1 Jun 2020.
- fix(turndown): headingStyle: 'atx' & codeBlockStyle: 'fenced' [#65](https://github.com/hexojs/hexo-migrator-rss/pull/65)
  - More in-line with markdown style preferred by Hexo.

### Feature

- feat: import excerpt with markup [#65](https://github.com/hexojs/hexo-migrator-rss/pull/65)
  - Retain original markup of excerpt

  ```
  title: foo bar
  date: 2020-01-01 00:00:00
  ---

  Lorem ipsum [dolor](http://example.com/) sit amet, **nam** ex putant _intellegat_ reprehendunt.

  <!-- more -->

  Cu nulla aeterno nec, tibique deterruisset an eam, ea pro dolorem vituperata.
  ```

### Fix

- fix: unescape title if escaped [#71](https://github.com/hexojs/hexo-migrator-rss/pull/71)
  - A post could be entitled `Some&quot;Title&quot;`, the fix is to detect the pattern and unescape it when necessary.
- fix: stricter excerpt regex [#70](https://github.com/hexojs/hexo-migrator-rss/pull/70)
  - Now only the following variants of [excerpt tag](https://hexo.io/docs/tag-plugins#Post-Excerpt) are valid.
  1. `<!--more-->`
  2. `<!-- more-->`
  3. `<!--more -->`
  4. `<!-- more -->`
- fix: handle title with double quotes [#64](https://github.com/hexojs/hexo-migrator-rss/pull/64)
  - Escape double quote before passing to yml parser

---

## hexo-generator-sitemap 2.1.0

### Changes

- Include site's tags, categories and home page in the sitemap [#26](https://github.com/hexojs/hexo-generator-sitemap/pull/26)
- fix(sitemap): use date only in `<lastmod>` [#94](https://github.com/hexojs/hexo-generator-sitemap/pull/94)
  - `2020-01-02 13:42:599Z` => `2020-01-02`
