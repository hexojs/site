---
title: 生成器（Generator）
---

生成器根据处理后的原始文件建立路由。

## 概要

```js
hexo.extend.generator.register(name, function (locals) {});
});
```

`locals` 参数会被传递到此函数，其中包含 [网站变量](../docs/variables.html#网站变量)，请尽量利用此参数取得网站数据，避免直接访问数据库。 You should use this argument to get the website data, thereby avoiding having to access the database directly.

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

| 属性       | 描述                                                                                                                                        |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `path`   | 路径。 不可包含开头的 `/`。                                                                                                                          |
| `data`   | 数据                                                                                                                                        |
| `layout` | 布局。 Specify the layouts for rendering. The value can be a string or an array. If it's ignored then the route will return `data` directly. |

在原始文件更新时，Hexo 会执行所有生成器并重建路由，**请直接回传数据，不要直接操作路由**。 **Please return the data and do not access the router directly.**

## 示例

### 归档页面

Create an archive page at `archives/index.html`. We pass all posts as data to the templates. 在 `archives/index.html` 建立一归档页面，把所有文章当作数据传入模板内，这个数据也就等同于模板中的 `page` 变量。

Next, set the `layout` attribute to render with the theme templates. We're setting two layouts in this example: if the `archive` layout doesn't exist, the `index` layout will be used instead.

```js
hexo.extend.generator.register("archive", function (locals) {
  return {
    path: "archives/index.html",
    data: locals.posts,
    layout: ["archive", "index"],
  };
});
```

### 有分页的归档页面

您可以通过 [hexo-pagination][] 这个方便的官方工具来轻松建立分页归档。

```js
var pagination = require("hexo-pagination");

hexo.extend.generator.register("archive", function (locals) {
  return pagination("archives/index.html", locals.posts, {
    perPage: 10,
    layout: ["archive", "index"],
    data: {},
  });
});
```

### 生成所有文章

遍历 `locals.posts` 中的所有文章并生成所有文章的路由。

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

### 复制文件

这次我们不明确返回数据，而是将 `data` 设置为一个函数，这样路由只会在需要时才会构建 `fs.ReadStream`。

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
