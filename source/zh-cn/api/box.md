---
title: Box
---

Box 是 Hexo 用来处理特定文件夹中的文件的容器。 在 Hexo 中有两个 Box，分别是 `hexo.source` 和 `hexo.theme`。 前者用于处理 `source` 文件夹，后者用于处理 `theme` 文件夹。

## 加载文件

Box 提供了两种方法来加载文件：`process` 和 `watch`。 `process` 加载文件夹中的所有文件。 `watch` 做了与前者相同的操作，但还会开始监视文件的更改。

```js
box.process().then(function () {
  // ...
});

box.watch().then(function () {
  // 之后可调用 box.unwatch()，停止监视文件。
});
```

## 比对路径

Box 提供了多种比对路径的模式。 您可以以使用正则表达式（regular expression）、函数、或是 Express 风格的模式字符串。 例如：

```plain
posts/:id => posts/89
posts/*path => posts/2015/title
```

您可以以参考 [util.Pattern][] 以获得更多信息。

## 处理器（Processor）

处理器（Processor）是 Box 中非常重要的元素，它用于处理文件。 您可以使用上述的路径对比来限制该处理器所要处理的文件类型。 使用 `addProcessor` 来添加处理器。

```js
box.addProcessor("posts/:id", function (file) {
  //
});
```

Box 将匹配文件的内容传递给处理器。 然后，可以从回调中的 `file` 参数直接读取该信息。

| 属性       | 描述                                              |
| -------- | ----------------------------------------------- |
| `source` | 文件完整路径                                          |
| `path`   | 文件相对于 Box 的路径                                   |
| `type`   | 文件类型。 值可以是 `create`、`update`、`skip` 和 `delete`。 |
| `params` | 从路径对比中取得的信息                                     |

Box 还提供了一些方法，让您无须手动处理文件 I/O。

| 方法           | 描述       |
| ------------ | -------- |
| `read`       | 读取文件     |
| `readSync`   | 同步读取文件   |
| `stat`       | 读取文件状态   |
| `statSync`   | 同步读取文件状态 |
| `render`     | 渲染文件     |
| `renderSync` | 同步渲染文件   |

[util.Pattern]: https://github.com/hexojs/hexo-util#patternrule
