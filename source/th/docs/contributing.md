---
title: Contributing
---

We welcome you to join the development of Hexo. 🤗

## Development

We welcome you to join the development of Hexo. This document will help you through the process.
การเข้าร่วมในกานพัฒนาของ hexo นั้นเป็นเรี่องท่ีพวกเรายินดีต้อนรับ
บทความนี้จะเป็นการแนะนำกระบวนการเข้่าร่วมเรื่องนี้

### Before You Start

Please read [Contributor Covenant Code of Conduct](https://github.com/hexojs/hexo/blob/master/CODE_OF_CONDUCT.md) first.

กรุณาทำตามขั้นตอนต่อไป:

- Follow [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html).
- Use soft-tabs with a two space indent.
- Don't put commas first.

Also, Hexo has its own [ESLint config](https://github.com/hexojs/eslint-config-hexo), so please make sure your contribution will make ESLint happy.

### Workflow

1. Fork [hexojs/hexo].
2. Clone the repository to your computer and install dependencies.

``` bash
$ git clone https://github.com/<username>/hexo.git
$ cd hexo
$ npm install
$ git submodule update --init
```

3. Create a feature branch.

``` bash
$ git checkout -b new_feature
```

4. Start hacking.
5. Push the branch:

```
$ git push origin new_feature
```

6. Create a pull request and describe the change.

### Notice

- Don't modify version number in `package.json`.
- Your pull request will only get merged when tests passed. Don't forget to run tests before submission.

``` bash
$ npm test
```

## Updating official-plugins

Also, we welcome PR or issue to [official-plugins](https://github.com/hexojs). 🤗

## Updating Documentation

documentation ของ hexo เป็น open source และคุณสามารถอ่าน source code ได้ท่ี [hexojs/site]

### Workflow

1. Fork [hexojs/site]
2. Clone the repository to your computer and install dependencies.

``` bash
$ npm install hexo-cli -g # If you don't have hexo-cli installed
$ git clone https://github.com/<username>/site.git
$ cd site
$ npm install
```

3. Start editing the documentation. You can start the server for live previewing.

``` bash
$ hexo server
```

4. Push the branch.
5. Create a pull request and describe the change.

### Translating

1. Add a new language folder in `source` folder. (All lower case)
2. Copy Markdown and template files in `source` folder to the new language folder.
3. Add the new language to `source/_data/language.yml`.
4. Copy `en.yml` in `themes/navy/languages` and rename to the language name (all lower case).

## Reporting Issues

เมื่อคุณพบเจอปัญหาการใช้ hexo คุณไปค้นหาวิธีการแก้ไขได้ท่ [Troubleshooting](troubleshooting.html)
หรือไปถามท่ี [GitHub](https://github.com/hexojs/hexo/issues)
กรือไปถามท่ี [Google Group](https://groups.google.com/group/hexo)
ถ้าคุณหาวิธีแก้ไขไม่ได้ กรุณาไปรายงานปัญหาท่ี Github

1. Represent the problem in [debug mode](commands.html#Debug_mode).
2. Follow the steps from issue template to provide debug message and version when submitting a new issue at GitHub.

[hexojs/hexo]: https://github.com/hexojs/hexo
[hexojs/site]: https://github.com/hexojs/site
