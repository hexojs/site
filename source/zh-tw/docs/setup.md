---
title: 建立
---

{% youtube xvIRGmKWpFM %}

一旦 Hexo 完成後，請執行下列指令，Hexo 會在指定資料夾中建立所有您需要的檔案。

```bash
$ hexo init <folder>
$ cd <folder>
$ npm install
```

Once initialized, here's what your project folder will look like:

```plain
.
├── _config.yml
├── package.json
├── scaffolds
├── source
|   ├── _drafts
|   └── _posts
└── themes
```

### \_config.yml

網站 [配置](configuration.html) 檔案，您可以在此配置大部分的設定。 You can configure most settings here.

### package.json

Application data. [EJS](https://ejs.co/), [Stylus](http://learnboost.github.io/stylus/) 和 [Markdown](http://daringfireball.net/projects/markdown/) renderer 已預設安裝，您可以稍後移除。 If you want, you can uninstall them later.

```json package.json
{
  "name": "hexo-site",
  "version": "0.0.0",
  "private": true,
  "hexo": {
    "version": ""
  },
  "dependencies": {
    "hexo": "^7.0.0",
    "hexo-generator-archive": "^2.0.0",
    "hexo-generator-category": "^2.0.0",
    "hexo-generator-index": "^3.0.0",
    "hexo-generator-tag": "^2.0.0",
    "hexo-renderer-ejs": "^2.0.0",
    "hexo-renderer-stylus": "^3.0.0",
    "hexo-renderer-marked": "^6.0.0",
    "hexo-server": "^3.0.0",
    "hexo-theme-landscape": "^1.0.0"
  }
}
```

### scaffolds

[鷹架](writing.html#鷹架（Scaffold）) 資料夾。 當您建立新文章時，Hexo 會根據 scaffold 來建立檔案。

### source

Source folder. This is where you put your site's content. 檔案 / 資料夾名稱開頭為 `_` (底線) 和隱藏檔案會被忽略，除了 `_posts` 資料夾以外。 Markdown 和 HTML 檔案會被處理並放到 `public` 資料夾，而其他檔案會被拷貝過去。

### themes

[主題](themes.html) 資料夾。 Hexo 會根據主題來產生靜態檔案。
