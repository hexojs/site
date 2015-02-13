title: 分页
---

当博客中有大量文章时，将其分成几页就显得很有用出。Hexo 支持分页功能。下面就教您如何使用 Hexo 中的分页功能。

开始之前，您需要开启分页功能。编辑 `per_page` 参数并设置一个每页显示的文章数。如果想关闭分页功能，只需要要设为 `0` 即可。

``` yaml
per_page: 10
```

您可以编写如下配置，以关闭或开启特定页面的分页功能。

- 2: 开启分页功能
- 1: 关闭分页功能
- 0: 完全关闭

``` yaml
archive: 2
category: 2
tag: 2
```

## 基础

最基础的分页功能就两个链接："Previous page" 和 "Next page"。比如：

```
<% if (page.prev){ %>
  <a href="<%- url_for(page.prev_link) %>">Prev</a>
<% } %>
<% if (page.next){ %>
  <a href="<%- url_for(page.next_link) %>">Next</a>
<% } %>
```

## 分页函数

为了使用数字显示分页，您可以使用分页功能的辅助函数。它可以帮您快速插入分页。

```
<%- paginator() %>
```

For more info, see [Helpers](/docs/helpers.html#paginator).
