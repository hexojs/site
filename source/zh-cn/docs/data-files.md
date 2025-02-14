---
title: 数据文件
---

有时，您可能需要在模板中使用一些无法直接在帖子中使用的数据，或者您想在其他地方重复使用这些数据。 对于这种情况，Hexo 3 引入了新的**数据文件**。 此功能会加载 `source/_data` 内的 YAML 或 JSON 文件，如此一来您便能在网站中复用这些文件了。

{% youtube CN31plHbI-w %}

举例来说，在 `source/_data` 文件夹中新建 `menu.yml` 文件：

```yaml
Home: /
Gallery: /gallery/
Archives: /archives/
```

您就能在模板中使用这些数据：

```
<% for (var link in site.data.menu) { %>
  <a href="<%= site.data.menu[link] %>"> <%= link %> </a>
<% } %>
```

渲染就像这样：

```
<a href="/"> Home </a>
<a href="/gallery/"> Gallery </a>
<a href="/archives/"> Archives </a>
```
