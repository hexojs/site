---
title: 箱子（Box）
---

Box is a container used for processing files in a specified folder. 「箱子」是 Hexo 用來處理特定資料夾中的檔案的容器，在 Hexo 中有兩個箱子，分別是 `hexo.source` 和 `hexo.theme`，前者用於處理 `source` 資料夾，而後者用於處理主題資料夾。 The former is used to process the `source` folder and the latter to process the `theme` folder.

## 載入檔案

箱子提供了兩種方法來載入檔案：`process`, `watch`，前者用於載入資料夾內的所有檔案；而後者除了執行 `process` 以外，還會繼續監看檔案變動。 `process` loads all files in the folder. `watch` does the same, but also starts watching for file changes.

```js
box.process().then(function () {
  // ...
});

box.watch().then(function () {
  // 之後可呼叫 box.unwatch() 停止檔案監看
});
```

## 路徑比對

Box provides many ways for path matching. You can use a regular expression, a function or an Express-style pattern string. For example:

```plain
posts/:id => posts/89
posts/*path => posts/2015/title
```

您可參考 [util.Pattern][] 以獲得更多資訊。

## 處理器（Processor）

處理器（Processor）是箱子中非常重要的元素，它用於處理檔案，您可使用上述的路徑比對來限制該處理器所要處理的檔案類型。 You can use path matching as described above to restrict what exactly the processor should process. 使用 `addProcessor` 來註冊處理器。

```js
box.addProcessor("posts/:id", function (file) {
  //
});
```

Box passes the content of matched files to processors. This information can then be read straight from the `file` argument in the callback:

| 屬性       | 描述                                            |
| -------- | --------------------------------------------- |
| `source` | 檔案完整路徑                                        |
| `path`   | 檔案相對於箱子的路徑                                    |
| `type`   | 檔案類型。 有 `create`, `update`, `skip`, `delete`。 |
| `params` | The information from path matching.           |

箱子還提供了一些方法，讓您無須自行處理檔案 IO。

| 方法           | 描述                        |
| ------------ | ------------------------- |
| `read`       | 讀取檔案                      |
| `readSync`   | 同步讀取檔案                    |
| `stat`       | Read the status of a file |
| `statSync`   | 同步讀取檔案狀態                  |
| `render`     | 渲染檔案                      |
| `renderSync` | 同步渲染檔案                    |

[util.Pattern]: https://github.com/hexojs/hexo-util#patternrule
