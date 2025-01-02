---
title: 事件
---

Hexo 继承了 [EventEmitter][]。 您可以用 `on` 方法监听 Hexo 所发布的事件，也可以使用 `emit` 方法对 Hexo 发布事件。 更详细的说明请参阅 Node.js 的 API。

### deployBefore

在部署开始前触发。

### deployAfter

在部署完成后触发。

### exit

在 Hexo 退出前触发。

### generateBefore

在生成器开始前触发。

### generateAfter

在生成器后触发。

### new

在文章文件建立后发布。 该事件返回文章参数。

```js
hexo.on("new", function (post) {
  //
});
```

| 数据             | 描述        |
| -------------- | --------- |
| `post.path`    | 文章文件的完整路径 |
| `post.content` | 文章文件的内容   |

### processBefore

在处理原始文件前发布。 此事件会返回一个路径，代表 盒（Box）的根目录。

### processAfter

在原始文件处理后发布。 此事件会返回一个路径，代表 盒（Box）的根目录。

### ready

在初始化完成后发布。

[EventEmitter]: https://nodejs.org/dist/latest/docs/api/events.html
