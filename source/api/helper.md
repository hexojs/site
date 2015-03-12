title: Helper
---
A helper helps you insert snippets to templates easily. It's ecommended to put complicated code in helpers intead of templates.

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