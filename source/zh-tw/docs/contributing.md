---
title: 貢獻
---

我們歡迎你加入 Hexo 的開發。 🤗

## 開發

我們非常歡迎您加入 Hexo 的開發，這份文件將幫助您了解開發流程。 This document will help you through the process.

### 開始之前

請先閱讀 [Contributor Covenant Code of Conduct](https://github.com/hexojs/hexo/blob/master/CODE_OF_CONDUCT.md)。

Please follow the coding style:

- 遵守 [Google JavaScript 代碼風格](https://google.github.io/styleguide/jsguide.html)。
- 使用 2 個空格縮排。
- 不要把逗號放在最前面。

此外，Hexo 有 [ESLint 設定](https://github.com/hexojs/eslint-config-hexo)，因此請務必確認您的貢獻能夠通過 ESLint。

### 工作流程

1. Fork [hexojs/hexo][]
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

### 注意事項

- 不要修改 `package.json` 的版本號。
- 只有在測試通過的情況下您的合併申請才會被核准，在提交前別忘了進行測試。 Don't forget to run tests before submission.

```bash
$ npm test
```

## 更新官方外掛 (official-plugins)

此外，我們歡迎你發 PR 或是 Issue 至[official-plugins](https://github.com/hexojs)。 🤗

## 更新文件

Hexo 文件開放原始碼，您可以在 [hexojs/site][] 找到原始碼。

### 工作流程

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

4. 推送（push）分支。
5. Create a pull request and describe the change.

### 翻譯

#### Contribute translations

[![Crowdin](https://badges.crowdin.net/hexo/localized.svg)](https://crowdin.com/project/hexo)

Now we use the [Crowdin](https://crowdin.com/project/hexo) platform for translation, where anyone can contribute translations and vote for translations without manual git operations.

#### Add a new language

1. Submit a new issue to let us know. The members with access to the [Crowdin Project](https://crowdin.com/project/hexo) add the language in settings.
1. After adding language in Crowdin, anyone can contribute translations on it.
1. 在 `source/_data/language.yml` 中新增語言。
1. 在 `themes/navy/languages` 複製 `en.yml` 並命名為語言名稱（全小寫）。

## 回報問題

當您使用 Hexo 遭遇問題時，可試著在 [解決問題](troubleshooting.html) 中尋找解答，或是在 [GitHub](https://github.com/hexojs/hexo/issues) 或 [Google Group](https://groups.google.com/group/hexo) 詢問。 若找不到答案，請至 GitHub 回報。

1. 以 [除錯模式](commands.html#除錯模式) 再執行一次。
2. 在 GitHub 上提交新 Issue 時，請按照問題模板中的步驟提供除錯資訊和版本資訊。

[hexojs/hexo]: https://github.com/hexojs/hexo
[hexojs/site]: https://github.com/hexojs/site
