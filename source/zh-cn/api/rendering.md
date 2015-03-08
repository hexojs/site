title: 渲染
---
在 Hexo 中，有两个方法可用于渲染文件或字符串，分别是非同步的 `hexo.render.render` 和同步的 `hexo.render.renderSync`，这两个方法的使用方式十分类似，因此以下仅以非同步的 `hexo.render.render` 为例。

## 渲染字符串

在渲染字符串时，您必须指定 `engine`，如此一来 Hexo 才知道该使用哪个渲染引擎来渲染。

``` js
hexo.render.render({text: 'example', engine: 'swig'}).then(function(result){
  // ...
});
```

## 渲染文件

在渲染文件时，您无须指定 `engine`，Hexo 会自动根据扩展名猜测所要使用的渲染引擎，当然您也可以使用 `engine` 指定。

``` js
hexo.render.render({path: 'path/to/file.swig'}).then(function(result){
  // ...
});
```

## 渲染选项

在渲染时，您可以向第二个参数中传入参数。

``` js
hexo.render.render({text: ''}, {foo: 'foo'}).then(function(result){
  // ...
});
```

## after_render 过滤器

在渲染完成后，Hexo 会自动执行相对应的 `after_render` 过滤器，举例来说，我们可以通过这个功能实现 JavaScript 的压缩。

``` js
var UglifyJS = require('uglify-js');

hexo.extend.filter.register('after_render:js', function(str, data){
  var result = UglifyJS.minify(str);
  return result.code;
});
```

## 检查文件是否可被渲染

您可以通过 `isRenderable` 或 `isRenderableSync` 两个方法检查文件路径是否可以被渲染，只有在相对应的渲染器（renderer）已注册的情况下才会返回 true。

``` js
hexo.render.isRenderable('layout.swig') // true
hexo.render.isRenderable('image.png') // false
```

## 获取文件的输出扩展名

您可以通过 `getOutput` 方法取得文件路径输出后的扩展名，如果文件无法渲染，则会返回空字符串。

``` js
hexo.render.getOutput('layout.swig') // html
hexo.render.getOutput('image.png') // '''
```