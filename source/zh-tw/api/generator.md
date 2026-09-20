---
title: 產生器（Generator）
---

A generator builds routes based on processed files.

## 概要

```js
hexo.extend.generator.register(name, function (locals) {
  // ...
});
```

A `locals` argument will get passed into the function, containing the [site variables](../docs/variables.html#Site-Variables). You should use this argument to get the website data, thereby avoiding having to access the database directly.

## 更新路由

```js
hexo.extend.generator.register("test", function (locals) {
  // Object
  return {
    path: "foo",
    data: "foo",
  };

  // Array
  return [
    { path: "foo", data: "foo" },
    { path: "bar", data: "bar" },
  ];
});
```

| 屬性       | 描述                                                                                                                                            |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `path`   | 路徑。 不可包含開頭的 `/`。                                                                                                                              |
| `data`   | 資料                                                                                                                                            |
| `layout` | Layout. Specify the layouts for rendering. The value can be a string or an array. If it's ignored then the route will return `data` directly. |

在原始檔案更新時，Hexo 會執行所有產生器並重建路由，**請直接回傳資料，不要直接操作路由**。 **Please return the data and do not access the router directly.**

## 範例

### Archive Page

在 `archives/index.html` 建立一彙整頁面，把所有文章當作資料傳入模板內，這個資料也就等同於模板中的 `page` 變數。 We pass all posts as data to the templates. This data is equivalent to the `page` variable in templates.

Next, set the `layout` attribute to render with the theme templates. We're setting two layouts in this example: if the `archive` layout doesn't exist, the `index` layout will be used instead.

```js
hexo.extend.generator.register("archive", function (locals) {
  return {
    path: "archives/index.html",
    data: locals,
    layout: ["archive", "index"],
  };
});
```

### Archive Page with Pagination

您可透過 [hexo-pagination][] 這個方便的官方工具程式來輕鬆建立分頁彙整。

```js
var pagination = require("hexo-pagination");

hexo.extend.generator.register("archive", function (locals) {
  // hexo-pagination makes an index.html for the /archives route
  return pagination("archives", locals.posts, {
    perPage: 10,
    layout: ["archive", "index"],
    data: {},
  });
});
```

### Generate All Posts

遍歷 `locals.posts` 中的所有文章並產生所有文章的路由。

```js
hexo.extend.generator.register("post", function (locals) {
  return locals.posts.map(function (post) {
    return {
      path: post.path,
      data: post,
      layout: "post",
    };
  });
});
```

### 複製檔案

這次不直接在 `data` 中傳回資料而是傳回一個函數，如此一來這個路由唯有在使用時才會建立 `fs.ReadStream`。

```js
var fs = require("hexo-fs");

hexo.extend.generator.register("asset", function (locals) {
  return {
    path: "file.txt",
    data: function () {
      return fs.createReadStream("path/to/file.txt");
    },
  };
});
```

[hexo-pagination]: https://github.com/hexojs/hexo-pagination
