title: 建立
---
一旦 Hexo 完成後，請執行下列指令，Hexo 會在指定資料夾中建立所有您需要的檔案。

``` bash
$ hexo init <folder>
$ cd <folder>
$ npm install
```

建立完成後，專案資料夾會有下列檔案：

``` plain
.
├── _config.yml
├── package.json
├── scaffolds
├── scripts
├── source
|   ├── _drafts
|   └── _posts
└── themes
```

### _config.yml

網站 [配置](configuration.html) 檔案，您可以在此配置大部分的設定。

### package.json

應用程式資料。[EJS](http://embeddedjs.com/), [Stylus](http://learnboost.github.io/stylus/) 和 [Markdown](http://daringfireball.net/projects/markdown/) renderer 已預設安裝，您可以稍後移除。

``` json package.json
{
  "name": "hexo-site",
  "version": "0.0.0",
  "private": true,
  "hexo": {
    "version": ""
  },
  "dependencies": {
    "hexo": "^3.0.0",
    "hexo-generator-archive": "^0.1.0",
    "hexo-generator-category": "^0.1.0",
    "hexo-generator-index": "^0.1.0",
    "hexo-generator-tag": "^0.1.0",
    "hexo-renderer-ejs": "^0.1.0",
    "hexo-renderer-stylus": "^0.2.0",
    "hexo-renderer-marked": "^0.2.4",
    "hexo-server": "^0.1.2"
  }
}
```

### scaffolds

[鷹架](writing.html#鷹架（Scaffold）) 資料夾。當您建立新文章時，Hexo 會根據 scaffold 來建立檔案。

### scripts

[腳本](plugins.html#腳本（Scripts）) 資料夾。腳本是擴充 Hexo 的最簡易方式，在此資料夾內的 JavaScript 檔案會被自動執行。

### source

原始檔案資料夾是放置內容的地方。檔案 / 資料夾名稱開頭為 `_` (底線) 和隱藏檔案會被忽略，除了 `_posts` 資料夾以外。Markdown 和 HTML 檔案會被處理並放到 `public` 資料夾，而其他檔案會被拷貝過去。

### themes

[主題](themes.html) 資料夾。Hexo 會根據主題來產生靜態檔案。