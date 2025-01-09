---
title: Contributing
---

We welcome you to join the development of Hexo. 🤗

## Development

We welcome you to join the development of Hexo. This document will help you through the process.

### Before You Start

Please read [Contributor Covenant Code of Conduct](https://github.com/hexojs/hexo/blob/master/CODE_OF_CONDUCT.md) first.

Please follow the coding style:

- Follow [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html).
- Use soft-tabs with a two space indent.
- Don't put commas first.

Also, Hexo has its own [ESLint config](https://github.com/hexojs/eslint-config-hexo), so please make sure your contribution will make ESLint happy.

### Workflow

1. Fork [hexojs/hexo][].
2. Clone the repository to your computer and install dependencies.

```bash
$ git clone https://github.com/<username>/hexo.git
$ cd hexo
$ npm install
$ git submodule update --init
```

3. Create a feature branch.

```bash
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

```bash
$ npm test
```

## Updating official-plugins

Also, we welcome PR or issue to [official-plugins](https://github.com/hexojs). 🤗

## Updating Documentation

documentation ของ hexo เป็น open source และคุณสามารถอ่าน source code ได้ท่ี [hexojs/site][]

### Workflow

1. Fork [hexojs/site][]
2. Clone the repository to your computer and install dependencies.

```bash
$ npm install hexo-cli -g # If you don't have hexo-cli installed
$ git clone https://github.com/<username>/site.git
$ cd site
$ npm install
```

3. Start editing the documentation. You can start the server for live previewing.

```bash
$ hexo server
```

4. Push the branch.
5. Create a pull request and describe the change.

### Translating

#### Contribute translations

[![Crowdin](https://badges.crowdin.net/hexo/localized.svg)](https://crowdin.com/project/hexo)

Now we use the [Crowdin](https://crowdin.com/project/hexo) platform for translation, where anyone can contribute translations and vote for translations without manual git operations.

#### Add a new language

1. Submit a new issue to let us know. The members with access to the [Crowdin Project](https://crowdin.com/project/hexo) add the language in settings.
1. After adding language in Crowdin, anyone can contribute translations on it.
1. Add the new language to [`source/_data/language.yml`](https://github.com/hexojs/site/blob/master/source/_data/languages.yml).
1. Copy `en.yml` in `themes/navy/languages` and rename to the language name (all lower case).

## Reporting Issues

เมื่อคุณพบเจอปัญหาการใช้ hexo คุณไปค้นหาวิธีการแก้ไขได้ท่ [Troubleshooting](troubleshooting.html) หรือไปถามท่ี [GitHub](https://github.com/hexojs/hexo/issues) กรือไปถามท่ี [Google Group](https://groups.google.com/group/hexo) ถ้าคุณหาวิธีแก้ไขไม่ได้ กรุณาไปรายงานปัญหาท่ี Github If you can't find the answer, please report it on GitHub.

1. Represent the problem in [debug mode](commands.html#Debug_mode).
2. Follow the steps from issue template to provide debug message and version when submitting a new issue at GitHub.

[hexojs/hexo]: https://github.com/hexojs/hexo
[hexojs/site]: https://github.com/hexojs/site
