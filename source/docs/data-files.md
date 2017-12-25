title: Data Files
---
Sometimes you may need to use some data in templates which is not directly available in your posts, or you want to reuse the data elsewhere. For such use cases, Hexo 3 introduced the new **Data files**. This feature loads YAML or JSON files in `source/_data` folder so you can use them in your site.

{% youtube CN31plHbI-w %}

For example, add `menu.yml` in `source/_data` folder.

``` yaml
Home: /
Gallery: /gallery/
Archives: /archives/
```

And you can use them in templates:

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