title: 事件
---
Hexo 繼承了 [EventEmitter]，您可用 `on` 方法監聽 Hexo 所發佈的事件，亦可用 `emit` 方法對 Hexo 發佈事件，更詳細的說明請參閱 Node.js 的 API。

### deployBefore

在佈署工作執行前發佈。

### deployAfter

在佈署工作執行成功後發佈。

### exit

在 Hexo 結束前發佈。

### generateBefore

在產生靜態檔案前發佈。

### generateAfter

在靜態檔案產生完成後發佈。

### new

在文章檔案建立完成後發佈。此事件會回傳資料參數。

``` js
hexo.on('new', function(post){
  // 
});
```

資料 | 描述
--- | ---
`post.path` | 文章檔案的完整路徑
`post.content` | 文章檔案的內容

### processBefore

在處理原始檔案前發佈。此事件會回傳一個路徑，代表箱子（Box）的根目錄。

### processAfter

在原始檔案處理完成後發佈。此事件會回傳一個路徑，代表箱子（Box）的根目錄。

### ready

在初始化完成後發佈。

[EventEmitter]: http://nodejs.org/api/events.html