---
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

## FAQ

### custom helper 应该放在哪里？

放置在 `themes/<yourtheme>/scripts` 目录中。

### 如何在我的 custom helper 中使用另外一个已经注册的 helper？

`hexo.extend.helper.get` 会返回一个指定名字的 helper，但是你还需要一个 `bind(hexo)`，就像这样：

``` js
const url_for = hexo.extend.helper.get('url_for').bind(hexo);
```

