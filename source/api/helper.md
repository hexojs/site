---
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
