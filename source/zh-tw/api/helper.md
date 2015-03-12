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
  return '<script type="text/javascript" src="' + path + '"></script>';
});
```

``` js
<%- js('script.js') %>
// <script type="text/javascript" src="script.js"></script>
```