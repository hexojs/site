title: 主題
---
打造 Hexo 主題非常容易，您只要在 `themes` 資料夾內，新增一個資料夾，並修改 `_config.yml` 內的 `theme` 設定，即可切換主題。一個主題可能會有以下的結構：

``` plain
.
├── _config.yml
├── languages
├── layout
├── scripts
└── source
```

### _config.yml

主題的配置檔案。修改時會自動更新，無需重啟伺服器。

### languages

語言資料夾。請參見 [本地化 (i18n)](localization.html)。

### layout

佈局資料夾。用於放置主題的模板檔案，決定了網站內容的呈現方式，Hexo 內建 [Swig] 模板引擎，您可另外安裝外掛來獲得 [EJS]、[Haml] 或 [Jade] 支援，Hexo 根據模板檔案的副檔名來決定所使用的模板引擎，例如：

``` plain
EJS: layout.ejs
Swig: layout.swig
```

您可參考 [模板](templates.html) 以獲得更多資訊。

### scripts

腳本資料夾。在啟動時，Hexo 會載入此資料夾內的 JavaScript 檔案，請參見 [外掛](plugins.html) 以獲得更多資訊。

### source

原始檔案資料夾，除了模板以外的 Asset，例如 CSS、JavaScript 檔案等，應該放在這個資料夾。檔案或資料夾開頭名稱為 `_`（底線）或隱藏檔案會被忽略。

如果檔案可以被渲染的話，會經過處理再儲存到 `public` 資料夾，否則會直接拷貝到 `public` 資料夾。

### 發佈

當您完成主題後，可以考慮將它發佈到 [主題列表](/themes)，讓更多人能夠使用您的主題，在發佈前建議先進行 [主題單元測試](https://github.com/hexojs/hexo-theme-unit-test)，確保每一項功能都能正常運作。發佈主題的步驟和 [更新文件](contributing.html#更新文件) 非常類似。

1. Fork [hexojs/site]
2. 把檔案庫（repository）複製到電腦上，並安裝相依套件。

    {% code %}
    $ git clone https://github.com/<username>/site.git
    $ cd site
    $ npm install
    {% endcode %}

3. 編輯 `source/_data/themes.yml`，在檔案中新增您的主題，例如：

    {% code %}
    - name: landscape
      description: A brand new default theme for Hexo.
      link: https://github.com/hexojs/hexo-theme-landscape
      preview: http://hexo.io/hexo-theme-landscape
      tags:
        - official
        - responsive
        - widget
        - two_column
        - one_column
    {% endcode %}

4. 在 `source/themes/screenshots` 新增同名的截圖檔案，圖片必須為 800x500 的 PNG 檔案。
5. 推送（push）分支。
6. 建立一個新的合併申請（pull request）。

[EJS]: https://github.com/hexojs/hexo-renderer-ejs
[Swig]: http://paularmstrong.github.com/swig/
[Haml]: https://github.com/hexojs/hexo-renderer-haml
[Jade]: https://github.com/hexojs/hexo-renderer-jade
[hexojs/site]: https://github.com/hexojs/site