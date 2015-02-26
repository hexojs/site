title: Data Files
---
Sometimes you may need to use some data in templates which is not in posts, or you want to reuse these data. Then you can try the new "**Data files**" introducing in Hexo 3. This feature loads YAML or JSON files in `source/_data` folder so you can use them in your site.

For example, add `menu.yml` in `source/_data` folder.

``` yaml
Home: /
Gallery: /gallery/
Archives: /archives/
```

And you can use them in templates:

```
{% for link in site.data.menu %}
  <a href="{{ link }}">{{ loop.key }}</a>
{% endfor %}
```