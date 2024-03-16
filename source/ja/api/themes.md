---
title: Themes
---
`hexo.theme` inherits from [Box](box.html), and also saves templates.

## Get a View

``` js
hexo.theme.getView(path);
```

## Set a View

``` js
hexo.theme.setView(path, data);
```

## Remove a View

``` js
hexo.theme.removeView(path);
```

## View

Views have two methods: `render` and `renderSync`. These two methods are identical, but the former is asynchronous and the latter is synchronous. So for the sake of simplicity, we will only discuss `render` here.

``` js
var view = hexo.theme.getView('layout.swig');

view.render({foo: 1, bar: 2}).then(function(result){
  // ...
});
```

You can pass options to the `render` method and it will try to process the template with the corresponding renderer and load the [helpers](helper.html). When rendering is complete, it will try to find whether a layout exists. If `layout` is `false` or if it doesn't exist, the result will be returned directly.
