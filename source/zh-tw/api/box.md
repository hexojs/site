title: 箱子（Box）
---
「箱子」是 Hexo 用來處理特定資料夾中的檔案的容器，在 Hexo 中有兩個箱子，分別是 `hexo.source` 和 `hexo.theme`，前者用於處理 `source` 資料夾，而後者用於處理主題資料夾。

## 載入檔案

箱子提供了兩種方法來載入檔案：`process`, `watch`，前者用於載入資料夾內的所有檔案；而後者除了執行 `process` 以外，還會繼續監看檔案變動。

``` js
box.process().then(function(){
  // ...
});

box.watch().then(function(){
  // 之後可呼叫 box.unwatch() 停止檔案監看
});
```

## 路徑比對

箱子提供了多種路徑比對的模式，您可使用正規表達式（regular expression）、函數、或是一種類似於 Express 的路徑字串，例如：

``` plain
posts/:id => posts/89
posts/*path => posts/2015/title
```

您可參考 [util.Pattern] 以獲得更多資訊。

## 處理器（Processor）

處理器（Processor）是箱子中非常重要的元素，它用於處理檔案，您可使用上述的路徑比對來限制該處理器所要處理的檔案類型。使用 `addProcessor` 來註冊處理器。

``` js
box.addProcessor('posts/:id', function(file){
  //
});
```

箱子在處理時會把目前處理的檔案內容（`file`）傳給處理器，您可透過此參數取得該檔案的資訊。

屬性 | 描述
--- | ---
`source` | 檔案完整路徑
`path` | 檔案相對於箱子的路徑
`type` | 檔案類型。有 `create`, `update`, `skip`, `delete`。
`params` | 從路徑比對中取得的資訊

箱子還提供了一些方法，讓您無須自行處理檔案 IO。

方法 | 描述
--- | ---
`read` | 讀取檔案
`readSync` | 同步讀取檔案
`stat` | 讀取檔案狀態
`statSync` | 同步讀取檔案狀態
`render` | 渲染檔案
`renderSync` | 同步渲染檔案

[util.Pattern]: https://github.com/hexojs/hexo-util#patternrule