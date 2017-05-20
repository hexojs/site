title: Helper
---
Helper는 템플릿에 쉽고 빠르게 정보(snippet)을 추가할 수 있게 도와줍니다. 우리는 당신이 복잡한 코드를 다룰 때 템플릿 대신 helper를 사용하는 것을 추천합니다.

## 개요

``` js
hexo.extend.helper.register(name, function(){
  // ...
});
```

## 예시

``` js
hexo.extend.helper.register('js', function(path){
  return '<script type="text/javascript" src="' + path + '"></script>';
});
```

``` js
<%- js('script.js') %>
// <script type="text/javascript" src="script.js"></script>
```
