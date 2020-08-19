---
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
  return '<script src="' + path + '"></script>';
});
```

``` js
<%- js('script.js') %>
// <script src="script.js"></script>
```

## FAQ

### Where to place custom helper?

Place it under `scripts/` or `themes/<yourtheme>/scripts/` folder.

### How do I use another registered helper in my custom helper?

All helpers are executed in the same context. For example, to use [`url_for()`](/docs/helpers#url-for) inside a custom helper:

``` js
hexo.extend.helper.register('lorem', function(path) {
  return '<script src="' + this.url_for(path) + '"></script>';
});
```

### How do I use a registered helper in another extension (e.g. Filter, Injector, etc)?

`hexo.extend.helper.get` will return the helper function, but it needs to have hexo as its context, so:

``` js
const url_for = hexo.extend.helper.get('url_for').bind(hexo);
```
