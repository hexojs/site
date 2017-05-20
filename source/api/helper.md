title: Helper
---
A helper makes it easy to quickly add snippets to your templates. We recommend using helpers instead of templates when you're dealing with more complicated code.

Helpers can not be accessed from `source` files.

## Synopsis

``` js
hexo.extend.helper.register(name, function(){
  // ...
});
```

## Example

``` js
hexo.extend.helper.register('js', function(path){
  return '<script type="text/javascript" src="' + path + '"></script>';
});
```

``` js
<%- js('script.js') %>
// <script type="text/javascript" src="script.js"></script>
```
