title: Rendering
---
There're two methods for rendering files or strings in Hexo: asynchronous `hexo.render.render` and synchronous `hexo.render.renderSync`. These two methods are very simliar so I only take asynchronous `hexo.render.render` for example.

## Render a String

When rendering a string, you must specify `engine` so Hexo can know which rendering engine should be used for rendering.

``` js
hexo.render.render({text: 'example', engine: 'swig'}).then(function(result){
  // ...
});
```

## Render a File

When rendering a file, you don't have to specify `engine`. Hexo will detect which rendering engine should be used by the extension name of the file. Of course, you can still define `engine`.

``` js
hexo.render.render({path: 'path/to/file.swig'}).then(function(result){
  // ...
});
```

## Render Options

You can pass the second argument as options.

``` js
hexo.render.render({text: ''}, {foo: 'foo'}).then(function(result){
  // ...
});
```

## after_render Filters

When rendering done, Hexo will execute corresponding `after_render` filters. For example, we can use this feature to implement JavaScript minifier.

``` js
var UglifyJS = require('uglify-js');

hexo.extend.filter.register('after_render:js', function(str, data){
  var result = UglifyJS.minify(str);
  return result.code;
});
```

## Check Whether a File is Renderable

You can use `isRenderable` or `isRenderableSync` method to check whether a file path is renderable. Only when the corresponding renderer is registered the method will return true.

``` js
hexo.render.isRenderable('layout.swig') // true
hexo.render.isRenderable('image.png') // false
```

## Get the Output Extension Name

You can use `getOutput` method to get the output extension name of a file. If a file is not renderable, the method will return an empty string.

``` js
hexo.render.getOutput('layout.swig') // html
hexo.render.getOutput('image.png') // '''
```