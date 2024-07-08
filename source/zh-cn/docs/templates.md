---
title: 模版
---

模板决定了网站内容的呈现方式。 以下是各页面相对应的模板名称。 每个主题至少都应包含一个 `index` 模板。

{% youtube mb65bQ4iUc4 %}

| 模板         | 页面   | 回退        |
| ---------- | ---- | --------- |
| `index`    | 首页   |           |
| `post`     | 文章   | `index`   |
| `page`     | 分页   | `index`   |
| `archive`  | 归档   | `index`   |
| `category` | 分类归档 | `archive` |
| `tag`      | 标签归档 | `archive` |

## 布局（Layout）

如果页面结构类似，例如两个模板都有页首（Header）和页脚（Footer），您可考虑通过「布局」让两个模板共享相同的结构。 一个布局文件必须要能显示 `body` 变量的内容，如此一来模板的内容才会被显示。 例如：

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

生成：

```html
<!doctype html>
<html>
  <body>
    index
  </body>
</html>
```

每个模板都默认使用 `layout` 布局。 您可在 front-matter 指定其他布局，或是设为 `false` 来关闭布局功能。 您甚至可在布局中再使用其他布局来建立嵌套布局。

## Partials

Partials are useful for sharing components between your templates. Typical examples include headers, footers or sidebars. You may want to put your partials in separate files to make maintaining your website significantly more convenient. 例如：

```html partial/header.ejs
<h1 id="logo"><%= config.title %></h1>
```

```html index.ejs
<%- partial('partial/header') %>
<div id="content">Home page</div>
```

生成：

```html
<h1 id="logo">My Site</h1>
<div id="content">Home page</div>
```

## 局部变量

您可以在局部模板中指定局部变量并使用。

```html partial/header.ejs
<h1 id="logo"><%= title %></h1>
```

```html index.ejs
<%- partial('partial/header', {title: 'Hello World'}) %>
<div id="content">Home page</div>
```

生成：

```html
<h1 id="logo">Hello World</h1>
<div id="content">Home page</div>
```

## 优化

如果您的主题过于复杂或需要生成的文件数量过多，Hexo 的文件生成性能可能会开始大幅下降。 除了简化主题外，您可以考虑 Hexo 2.7 新增的局部缓存（Fragment Caching） 功能。

本功能借鉴于 [Ruby on Rails](http://guides.rubyonrails.org/caching_with_rails.html#fragment-caching)。 它储存局部内容，下次便能直接使用缓存内容。 可以减少文件夹查询并使生成速度更快。

局部模板让您在不同模板之间共享相同的组件，例如页首（Header）、页脚（Footer）或侧边栏（Sidebar）等，可利用局部模板功能分割为个别文件，让维护更加便利。 举例来说：

```js
<%- fragment_cache('header', function(){
  return '<header></header>';
});
```

如果您使用局部模板的话，可以更简单：

```js
<%- partial('header', {}, {cache: true});
```

{% note warn %}
`fragment_cache()` 将会缓存第一次的渲染结果，并在之后直接输出缓存的结果。 因此只有在不同页面的渲染结果都**相同**时才应使用局部缓存。 否则，**不**应该被开启。 比如，在配置中启用了 `relative_link` 后不应该使用局部缓存。 因为相对链接在每个页面可能不同。
{% endnote %}
