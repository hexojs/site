title: 模版
---
模板决定了网站内容的呈现方式，每个主题至少都应包含一个 `index` 模板，以下是各页面相对应的模板名称：

模板 | 用途 | 回调
--- | --- | ---
`index` | 首页 |
`post` | 文章 | `index`
`page` | 分页 | `index`
`archive` | 归档 | `index`
`category` | 分类归档 | `archive`
`tag` | 标签归档 | `archive`

## 布局（Layout）

如果页面结构类似，例如两个模板都有页首（Header）和页脚（Footer），您可考虑通过「布局」让两个模板共享相同的结构。一个布局文件必须要能显示 `body` 变量的内容，如此一来模板的内容才会被显示，举例来说：

``` html index.ejs
index
```

``` html layout.ejs
<!DOCTYPE html>
<html>
  <body><%- body %></body>
</html>
```

生成：

``` html
<!DOCTYPE html>
<html>
  <body>index</body>
</html>
```

每个模板都默认使用 `layout` 布局，您可在 front-matter 指定其他布局，或是设为 `false` 来关闭布局功能，您甚至可在布局中再使用其他布局来建立嵌套布局。

## 局部模版（Partial）

局部模板让您在不同模板之间共享相同的组件，例如页首（Header）、页脚（Footer）或侧边栏（Sidebar）等，可利用局部模板功能分割为个别文件，让维护更加便利。举例来说：

``` html partial/header.ejs
<h1 id="logo"><%= config.title %></h1>
```

``` html index.ejs
<%- partial('partial/header') %>
<div id="content">Home page</div>
```

生成：

``` html
<h1 id="logo">My Site</h1>
<div id="content">Home page</div>
```

### 局部变量

您可以在局部模板中指定局部变量并使用。

``` html partial/header.ejs
<h1 id="logo"><%= title></h1>
```

``` html index.ejs
<%- partial('partial/header', {title: 'Hello World'}) %>
<div id="content">Home page</div>
```

生成：

``` html
<h1 id="logo">Hello World</h1>
<div id="content">Home page</div>
```

## 最佳化

如果您的主题太过于复杂，或是需要生成的文件量太过于庞大，可能会大幅降低性能，除了简化主题外，您可以考虑 Hexo 2.7 新增的局部缓存（Fragment Caching） 功能。

本功能借鉴于 [Ruby on Rails](http://guides.rubyonrails.org/caching_with_rails.html#fragment-caching)，它储存局部内容，下次便能直接使用缓存内容，可以减少文件夹查询并使生成速度更快。

它可用于页首、页脚、侧边栏等文件不常变动的位置，举例来说：

``` js
<%- fragment_cache('header', function(){
  return '<header></header>';
});
```

如果您使用局部模板的话，可以更简单：

``` js
<%- partial('header', {}, {cache: true});
```

但是，如果您开启了 `relative_link` 参数的话，请勿使用局部缓存功能，因为相对链接在每个页面可能不同。