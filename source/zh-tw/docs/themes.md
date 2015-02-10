title: 主題
---
打造 Hexo 主題非常容易，您只要在 `themes` 資料夾內，新增一個任意名稱的資料夾，並修改 `_config.yml` 內的 `theme` 設定，即可切換主題。一個主題可能會有以下的結構：

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

[EJS]: https://github.com/hexojs/hexo-renderer-ejs
[Swig]: http://paularmstrong.github.com/swig/
[Haml]: https://github.com/hexojs/hexo-renderer-haml
[Jade]: https://github.com/hexojs/hexo-renderer-jade