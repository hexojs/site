---
title: 事件
---

Hexo 继承了 [EventEmitter][]，您可以用 `on` 方法监听 Hexo 所发布的事件，也可以使用 `emit` 方法对 Hexo 发布事件，更详细的说明请参阅 Node.js 的 API。 Use the `on` method to listen for events emitted by Hexo, and use the `emit` method to emit events. For more information, refer to the Node.js API documentation.

### deployBefore

Emitted before deployment begins.

### deployAfter

Emitted after deployment finishes.

### exit

在 Hexo 结束前发布。

### generateBefore

Emitted before generation begins.

### generateAfter

Emitted after generation finishes.

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
