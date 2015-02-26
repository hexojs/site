title: 資料檔案
---
有時您可能需要在主題中使用某些資料，而這些資料並不在文章內，或是想要重複使用，那麼您可以考慮使用 Hexo 3 新增的「資料檔案」功能。此功能會載入 `source/_data` 內的 YAML 或 JSON 檔案，如此一來您便能在網站中使用。

舉例來說，在 `source/_data` 資料夾中新增 `menu.yml` 檔案：

``` yaml
Home: /
Gallery: /gallery/
Archives: /archives/
```

您就能在模板中使用這些資料：

```
{% for link in site.data.menu %}
  <a href="{{ link }}">{{ loop.key }}</a>
{% endfor %}
```