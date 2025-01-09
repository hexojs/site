---
title: 模版
---

Templates define the presentation of your website by describing what each page should look like. The table below shows the corresponding template for every available page. 模板決定了網站內容的呈現方式，每個主題至少都應包含一個 `index` 模板，以下是各頁面相對應的模板名稱：

{% youtube mb65bQ4iUc4 %}

| 模板         | Page              | Fallback  |
| ---------- | ----------------- | --------- |
| `index`    | 首頁                |           |
| `post`     | 文章                | `index`   |
| `page`     | 分頁                | `index`   |
| `archive`  | Archives          | `index`   |
| `category` | Category archives | `archive` |
| `tag`      | Tag archives      | `archive` |

## 佈局（Layout）

如果頁面結構類似，例如兩個模板都有頁首（Header）和頁尾（Footer），您可考慮透過「佈局」讓兩個模板共享相同的結構。 Every layout file should contain a `body` variable to display the contents of the template in question. For example:

```html index.ejs
index
```

```html layout.ejs
<!doctype html>
<html>
  <body>
    <%- body %>
  </body>
</html>
```

產生：

```html
<!doctype html>
<html>
  <body>
    index
  </body>
</html>
```

By default, the `layout` template is used by all other templates. You can specify additional layouts in the front-matter or set it to `false` to disable it. It's even possible to build a complex nested structure by including more layout templates in your top layout.

## Partials

Partials are useful for sharing components between your templates. Typical examples include headers, footers or sidebars. You may want to put your partials in separate files to make maintaining your website significantly more convenient. For example:

```html partial/header.ejs
<h1 id="logo"><%= config.title %></h1>
```

```html index.ejs
<%- partial('partial/header') %>
<div id="content">Home page</div>
```

產生：

```html
<h1 id="logo">My Site</h1>
<div id="content">Home page</div>
```

## Local Variables

您可以在模板中指定區域變數，就能在其他模板中使用。

```html partial/header.ejs
<h1 id="logo"><%= title></h1>
```

```html index.ejs
<%- partial('partial/header', {title: 'Hello World'}) %>
<div id="content">Home page</div>
```

產生：

```html
<h1 id="logo">Hello World</h1>
<div id="content">Home page</div>
```

## 最佳化

If your theme is exceedingly complex or if the number of files to generate becomes too large, Hexo's file generation performance may begin to decrease considerably. 如果您的主題太過於複雜，或是需要產生的檔案量太過於龐大，可能會大幅降低效能，除了簡化主題外，您可以考慮 Hexo 2.7 新增的局部快取（Fragment Caching）功能。

本功能借鑑於 [Ruby on Rails](http://guides.rubyonrails.org/caching_with_rails.html#fragment-caching)，它儲存局部區塊的內容，下次便能直接使用快取內容，可以減少資料庫查詢並使產生速度更快。 It causes content to be saved as fragments and cached for when additional requests are made. This can reduce the number of database queries and can also speed up file generation.

局部模板讓您在不同模板之間共享相同的組件，例如頁首（Header）、頁尾（Footer）或側邊欄（Sidebar）等，可利用局部模板功能分割為個別檔案，讓維護更加便利。 舉例來說：

```js
<%- fragment_cache('header', function(){
  return '<header></header>';
});
```

Though it may be easier to use partials:

```js
<%- partial('header', {}, {cache: true});
```

{% note warn %}
`fragment_cache()` will cache the rendered result and output the cached result to other pages. This should only be used on partials that are expected **not** to change across different pages. Otherwise, it should **not** be enabled. For example, it should be disabled when `relative_link` is enabled in the config. This is because relative links may appear differently across pages. This should only be used on partials that are expected **not** to change across different pages. Otherwise, it should **not** be enabled. For example, it should be disabled when `relative_link` is enabled in the config. This is because relative links may appear differently across pages.
{% endnote %}
