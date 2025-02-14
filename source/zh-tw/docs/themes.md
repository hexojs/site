---
title: 主題
---

{% youtube 5ROIU_9dYe4 %}

打造 Hexo 主題非常容易，您只要在 `themes` 資料夾內，新增一個資料夾，並修改 `_config.yml` 內的 `theme` 設定，即可切換主題。 To start using your theme, modify the `theme` setting in your site's `_config.yml`. 一個主題可能會有以下的結構：

```plain
.
├── _config.yml
├── languages
├── layout
├── scripts
└── source
```

### \_config.yml

主題的配置檔案。 Unlike the site's primary configuration file, 主題的配置檔案修改時會自動更新，無需重啟 Hexo 伺服器。

### languages

語言資料夾。 請參見 [國際化 (i18n)](internationalization.html)。

### layout

佈局資料夾。 This folder contains the theme's template files, which define the appearance of your website. 用於放置主題的模板檔案，決定了網站內容的呈現方式，Hexo 內建 [Nunjucks][] 模板引擎，您可另外安裝外掛來獲得 [EJS][]、或 [Pug][] 支援，Hexo 根據模板檔案的副檔名來決定所使用的模板引擎，例如： Hexo chooses the template engine based on the file extension of the template (just like the posts). For example:

```plain
layout.ejs   - uses EJS
layout.njk   - uses Nunjucks
```

您可參考 [模板](templates.html) 以獲得更多資訊。

### scripts

Script folder. Hexo will automatically load all JavaScript files in this folder during initialization. For more info, see [plugins](plugins.html).

### source

Source folder. Place your assets (e.g. CSS and JavaScript files) here. 檔案或資料夾開頭名稱為 `_`（底線）或隱藏檔案會被忽略。

Hexo will process and save all renderable files to the `public` folder. Non-renderable files will be copied to the `public` folder directly.

### Publishing

When you have finished building your theme, you can publish it to the [theme list](/themes). 當您完成主題後，可以考慮將它發佈到 [主題列表](/themes)，讓更多人能夠使用您的主題，在發佈前建議先進行 [主題單元測試](https://github.com/hexojs/hexo-theme-unit-test)，確保每一項功能都能正常運作。 發佈主題的步驟和 [更新文件](contributing.html#更新文件) 非常類似。

1. Fork [hexojs/site][]
2. Clone the repository to your computer and install dependencies.

   ```shell
   $ git clone https://github.com/<username>/site.git
   $ cd site
   $ npm install
   ```

3. 編輯 `source/_data/themes.yml`，在檔案中新增您的主題，例如：

4. Edit `source/_data/themes/<your-theme-name>.yml` and add your theme. For example:

   ```yaml
   description: A brand new default theme for Hexo.
   link: https://github.com/hexojs/hexo-theme-landscape
   preview: http://hexo.io/hexo-theme-landscape
   tags:
     - official
     - responsive
     - widget
     - two_column
     - one_column
   ```

5. 在 `source/themes/screenshots` 新增同名的截圖檔案，圖片必須為 800x500 的 PNG 檔案。 It must be a 800\*500px PNG.
6. 推送（push）分支。
7. Create a pull request and describe the change.

[EJS]: https://github.com/hexojs/hexo-renderer-ejs
[Pug]: https://github.com/hexojs/hexo-renderer-pug
[hexojs/site]: https://github.com/hexojs/site
[Nunjucks]: https://mozilla.github.io/nunjucks/
