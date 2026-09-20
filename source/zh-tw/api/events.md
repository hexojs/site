---
title: 事件
---

Hexo 繼承了 [EventEmitter][]，您可用 `on` 方法監聽 Hexo 所發佈的事件，亦可用 `emit` 方法對 Hexo 發佈事件，更詳細的說明請參閱 Node.js 的 API。 Use the `on` method to listen for events emitted by Hexo, and use the `emit` method to emit events. For more information, refer to the Node.js API documentation.

### deployBefore

Emitted before deployment begins.

### deployAfter

Emitted after deployment finishes.

### exit

Emitted before Hexo exits.

### generateBefore

Emitted before generation begins.

### generateAfter

Emitted after generation finishes.

### new

Emitted after a new post has been created. This event returns the post data:

```js
hexo.on("new", function (post) {
  //
});
```

| 資料             | 描述                       |
| -------------- | ------------------------ |
| `post.path`    | 文章檔案的完整路徑                |
| `post.content` | Content of the post file |

### processBefore

Emitted before processing begins. 此事件會回傳一個路徑，代表箱子（Box）的根目錄。

### processAfter

Emitted after processing finishes. 此事件會回傳一個路徑，代表箱子（Box）的根目錄。

### ready

Emitted after initialization finishes.

[EventEmitter]: https://nodejs.org/dist/latest/docs/api/events.html
