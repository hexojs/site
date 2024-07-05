---
title: 数据文件
---

Sometimes you may need to use some data in templates which is not directly available in your posts, or you want to reuse the data elsewhere. For such use cases, Hexo 3 introduced the new **Data files**. 此功能会加载 `source/_data` 内的 YAML 或 JSON 文件，如此一来您便能在网站中复用这些文件了。

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

render like this :

```
<a href="/"> Home </a>
<a href="/gallery/"> Gallery </a>
<a href="/archives/"> Archives </a>
```
