title: 貢獻
---
## 開發

我們非常歡迎您加入 Hexo 的開發，這份文件將幫助您了解開發流程。

### 開始之前

請遵守以下準則：

- 遵守 [Google JavaScript 代碼風格](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml)。
- 使用 2 個空格縮排。
- 不要把逗號放在最前面。

### 工作流程

1. Fork [hexojs/hexo]
2. 把檔案庫（repository）複製到電腦上，並安裝相依套件。

    {% code %}
    $ git clone https://github.com/<username>/hexo.git
    $ cd hexo
    $ npm install
    $ git submodule update --init
    {% endcode %}

3. 新增一個功能分支。

    {% code %}
    $ git checkout -b new_feature
    {% endcode %}

4. 開始開發。
5. 推送（push）分支。

    {% code %}
    $ git push origin new_feature
    {% endcode %}

6. 建立一個新的合併申請（pull request）並描述變更。

### 注意事項

- 不要修改 `package.json` 的版本號。
- 只有在測試通過的情況下您的合併申請才會被核准，在提交前別忘了進行測試。

    {% code %}
    $ npm test
    {% endcode %}

## 更新文件

Hexo 文件開放原始碼，您可以在 [hexojs/site] 找到原始碼。

### 工作流程

1. Fork [hexojs/site]
2. 把檔案庫（repository）複製到電腦上，並安裝相依套件。

    {% code %}
    $ git clone https://github.com/<username>/site.git
    $ cd site
    $ npm install
    {% endcode %}

3. 開始編輯文件，您可透過伺服器預覽變更。

    {% code %}
    $ hexo server
    {% endcode %}

4. 推送（push）分支。
5. 建立一個新的合併申請（pull request）並描述變更。

### 翻譯

1. 在 `source` 資料夾中建立一個新的語言資料夾（全小寫）。
2. 把 `source` 資料夾中相關的檔案（Markdown 和模板檔案）複製到新的語言資料夾中。
3. 在 `source/_data/language.yml` 中新增語言。
4. 在 `themes/navy/languages` 複製 `en.yml` 並命名為語言名稱（全小寫）。

## 回報問題

當您在使用 Hexo 時遭遇問題，您可試著在 [解決問題](troubleshooting.html) 中尋找解答，或是在 [GitHub](https://github.com/hexojs/hexo/issues) 或 [Google Group](https://groups.google.com/group/hexo) 詢問。詢問時請務必附上以下資訊：

1. 以 [除錯模式](commands.html#除錯模式) 再執行一次。
2. 執行 `hexo vesion` 並檢查版本資訊。
3. 把除錯資訊和版本資訊都貼到 GitHub。

[hexojs/hexo]: https://github.com/hexojs/hexo
[hexojs/site]: https://github.com/hexojs/site