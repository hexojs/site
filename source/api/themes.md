title: Themes
---
Besides inheriting from [Box](box.html), `hexo.theme` saves templates.

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

There're two methods for views: `render` and `renderSync`. These two methods are same but the former is synchronous and the letter asynchronous. So I only take `render` for example.

``` js
var view = hexo.theme.getView('layout.swig');

view.render({foo: 1, bar: 2}).then(function(result){
  // ...
});
```

You can pass options in `render` method. `render` will try to process the template with the corresponding renderer and load [helpers](helper.html). When rendering done, it will try to find whether the layout exists. If `layout` is `false` or does not exist, it will return the result directly.