---
title: 資料檔案
---

Sometimes you may need to use some data in templates which is not directly available in your posts, or you want to reuse the data elsewhere. For such use cases, Hexo 3 introduced the new **Data files**. 此功能會載入 `source/_data` 內的 YAML 或 JSON 檔案，如此一來您便能在網站中使用。

{% youtube CN31plHbI-w %}

舉例來說，在 `source/_data` 資料夾中新增 `menu.yml` 檔案：

```yaml
Home: /
Gallery: /gallery/
Archives: /archives/
```

您就能在模板中使用這些資料：

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
