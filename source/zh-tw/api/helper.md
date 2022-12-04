---
title: 輔助函數（Helper）
---
輔助函數幫助您在模板中快速插入內容，建議您把複雜的程式碼放在輔助函數而非模板中。

## 概要

``` js
hexo.extend.helper.register(name, function(){
  // ...
});
```

## 範例

``` js
hexo.extend.helper.register('js', function(path){
  return '<script src="' + path + '"></script>';
});
```

``` js
<%- js('script.js') %>
// <script src="script.js"></script>
```

## 常見問題

### 定制 helper 應該放在哪裡？

放置在 `scripts/` 或 `themes/<yourtheme>/scripts/` 資料夾內。

### 如何在我的定制 helper 中使用另外一個已經註冊的 helper？

All helpers are executed in the same context. For example, to use [`url_for()`](/docs/helpers#url-for) inside a custom helper:

``` js
hexo.extend.helper.register('lorem', function(path) {
  return '<script src="' + this.url_for(path) + '"></script>';
});
```

### 如何在其他插件中使用已經註冊的 helper?

`hexo.extend.helper.get` 會返回一個指定名字的 helper，但是你還需要一個 `bind(hexo)`，就像這樣：

``` js
const url_for = hexo.extend.helper.get('url_for').bind(hexo);
```
