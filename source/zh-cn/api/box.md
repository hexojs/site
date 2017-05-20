title:  Box
---
「Box」是 Hexo 用来处理特定文件夹中的文件的容器，在 Hexo 中有两个 Box，分别是 `hexo.source` 和 `hexo.theme`，前者用于处理 `source` 文件夹，而后者用于处理主题文件夹。

## 载入文件

Box 提供了两种方法来载入文件：`process`, `watch`，前者用于载入文件夹内的所有文件；而后者除了执行 `process` 以外，还会继续监视文件变动。

``` js
box.process().then(function(){
  // ...
});

box.watch().then(function(){
  // 之后可调用 box.unwatch()，停止监视文件
});
```

## 比对路径

Box 提供了多种比对路径的模式，您可以以使用正则表达式（regular expression）、函数、或是一种类似于 Express 的路径字符串，例如：

``` plain
posts/:id => posts/89
posts/*path => posts/2015/title
```

您可以以参考 [util.Pattern] 以获得更多信息。

## 处理器（Processor）

处理器（Processor）是 Box 中非常重要的元素，它用于处理文件，您可以使用上述的路径对比来限制该处理器所要处理的文件类型。使用 `addProcessor` 来添加处理器。

``` js
box.addProcessor('posts/:id', function(file){
  //
});
```

Box 在处理时会把目前处理的文件内容（`file`）传给处理器，您可以通过此参数获得该文件的数据。

属性 | 描述
--- | ---
`source` | 文件完整路径
`path` | 文件相对于 Box 的路径
`type` | 文件类型。有 `create`, `update`, `skip`, `delete`。
`params` | 从路径对比中取得的信息

Box 还提供了一些方法，让您无须手动处理文件 I/O。

方法 | 描述
--- | ---
`read` | 读取文件
`readSync` | 同步读取文件
`stat` | 读取文件状态
`statSync` | 同步读取文件状态
`render` | 渲染文件
`renderSync` | 同步渲染文件

[util.Pattern]: https://github.com/hexojs/hexo-util#patternrule