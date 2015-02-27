title: 模版
---
模板決定了網站內容的呈現方式，每個主題至少都應包含一個 `index` 模板，以下是各頁面相對應的模板名稱：

模板 | 用途 | Fallback
--- | --- | ---
`index` | 首頁 |
`post` | 文章 | `index`
`page` | 分頁 | `index`
`archive` | 彙整 | `index`
`category` | 分類彙整 | `archive`
`tag` | 標籤彙整 | `archive`

## 佈局（Layout）

如果頁面結構類似，例如兩個模板都有頁首（Header）和頁尾（Footer），您可考慮透過「佈局」讓兩個模板共享相同的結構。一個佈局檔案必須要能顯示 `body` 變數的內容，如此一來模板的內容才會被顯示，舉例來說：

``` html index.ejs
index
```

``` html layout.ejs
<!DOCTYPE html>
<html>
  <body><%- body %></body>
</html>
```

產生：

``` html
<!DOCTYPE html>
<html>
  <body>index</body>
</html>
```

每個模板預設都套用 `layout` 佈局，您可在 front-matter 指定其他佈局，或是設為 `false` 來關閉佈局功能，您甚至可在佈局中再使用其他佈局來建立巢狀佈局。

## 局部模版（Partial）

局部模板讓您在不同模板之間共享相同的組件，例如頁首（Header）、頁尾（Footer）或側邊欄（Sidebar）等，可利用局部模板功能分割為個別檔案，讓維護更加便利。舉例來說：

``` html partial/header.ejs
<h1 id="logo"><%= config.title %></h1>
```

``` html index.ejs
<%- partial('partial/header') %>
<div id="content">Home page</div>
```

產生：

``` html
<h1 id="logo">My Site</h1>
<div id="content">Home page</div>
```

### 區域變數

您可以在模板中指定區域變數，就能在其他模板中使用。

``` html partial/header.ejs
<h1 id="logo"><%= title></h1>
```

``` html index.ejs
<%- partial('partial/header', {title: 'Hello World'}) %>
<div id="content">Home page</div>
```

產生：

``` html
<h1 id="logo">Hello World</h1>
<div id="content">Home page</div>
```

## 最佳化

如果您的主題太過於複雜，或是需要產生的檔案量太過於龐大，可能會大幅降低效能，除了簡化主題外，您可以考慮 Hexo 2.7 新增的局部快取（Fragment Caching）功能。

本功能借鑑於 [Ruby on Rails](http://guides.rubyonrails.org/caching_with_rails.html#fragment-caching)，它儲存局部區塊的內容，下次便能直接使用快取內容，可以減少資料庫查詢並使產生速度更快。

它可用於頁首、頁尾、側邊欄等資料不常變動的位置，舉例來說：

``` js
<%- fragment_cache('header', function(){
  return '<header></header>';
});
```

如果您使用局部模板的話，可以更簡單：

``` js
<%- partial('header', {}, {cache: true});
```

但是，如果您開啟了 `relative_link` 設定的話，請勿使用局部快取功能，因為相對連結在每個頁面可能不同。