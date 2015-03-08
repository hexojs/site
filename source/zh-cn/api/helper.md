title: 辅助函数（Helper）
---
辅助函数帮助您在模板中快速插入内容，建议您把复杂的代码放在辅助函数而非模板中。

## 概要

``` js
hexo.extend.helper.register(name, function(){
});
```

## 范例

``` js
hexo.extend.helper.register('js', function(path){
  return '<script type="text/javascript" src="' + path + '"></script>';
});
```

``` js
<%- js('script.js') %>
// <script type="text/javascript" src="script.js"></script>
```