---
title: 貢獻
---

We welcome you to join the development of Hexo. 🤗

## 開發

我們非常歡迎您加入 Hexo 的開發，這份文件將幫助您了解開發流程。

### 開始之前

請先閱讀 [Contributor Covenant Code of Conduct](https://github.com/hexojs/hexo/blob/master/CODE_OF_CONDUCT.md)。

請遵守以下準則：

- 遵守 [Google JavaScript 代碼風格](https://google.github.io/styleguide/jsguide.html)。
- 使用 2 個空格縮排。
- 不要把逗號放在最前面。

此外，Hexo 有 [ESLint 設定](https://github.com/hexojs/eslint-config-hexo)，因此請務必確認您的貢獻能夠通過 ESLint。

### 工作流程

1. Fork [hexojs/hexo]
2. 把檔案庫（repository）複製到電腦上，並安裝相依套件。

``` bash
$ git clone https://github.com/<username>/hexo.git
$ cd hexo
$ npm install
$ git submodule update --init
```

3. 新增一個功能分支。

``` bash
$ git checkout -b new_feature
```

4. 開始開發。
5. 推送（push）分支。

```
$ git push origin new_feature
```

6. 建立一個新的合併申請（pull request）並描述變更。

### 注意事項

- 不要修改 `package.json` 的版本號。
- 只有在測試通過的情況下您的合併申請才會被核准，在提交前別忘了進行測試。

``` bash
$ npm test
```

## Updating official-plugins

Also, we welcome PR or issue to [official-plugins](https://github.com/hexojs). 🤗

## 更新文件

Hexo 文件開放原始碼，您可以在 [hexojs/site] 找到原始碼。

### 工作流程

1. Fork [hexojs/site]
2. 把檔案庫（repository）複製到電腦上，並安裝相依套件。

``` bash
$ npm install hexo-cli -g # If you don't have hexo-cli installed
$ git clone https://github.com/<username>/site.git
$ cd site
$ npm install
```

3. 開始編輯文件，您可透過伺服器預覽變更。

``` bash
$ hexo server
```

4. 推送（push）分支。
5. 建立一個新的合併申請（pull request）並描述變更。

### 翻譯

1. 在 `source` 資料夾中建立一個新的語言資料夾（全小寫）。
2. 把 `source` 資料夾中相關的檔案（Markdown 和模板檔案）複製到新的語言資料夾中。
3. 在 `source/_data/language.yml` 中新增語言。
4. 在 `themes/navy/languages` 複製 `en.yml` 並命名為語言名稱（全小寫）。

## 回報問題

當您使用 Hexo 遭遇問題時，可試著在 [解決問題](troubleshooting.html) 中尋找解答，或是在 [GitHub](https://github.com/hexojs/hexo/issues) 或 [Google Group](https://groups.google.com/group/hexo) 詢問。若找不到答案，請至 GitHub 回報。

1. 以 [除錯模式](commands.html#除錯模式) 再執行一次。
2. 在 GitHub 上提交新 Issue 時，請按照問題模板中的步驟提供除錯資訊和版本資訊。

[hexojs/hexo]: https://github.com/hexojs/hexo
[hexojs/site]: https://github.com/hexojs/site
