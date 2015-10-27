title: Rendering
---
There are two methods for rendering files or strings in Hexo: the asynchronous `hexo.render.render` method and the synchronous `hexo.render.renderSync` method. Unsurprisingly, the two methods are very similar so only the asynchronous `hexo.render.render` will be further discussed in the below paragraphs.

## Render a String

When rendering a string, you must specify an `engine` to let Hexo know which rendering engine it should use.

``` js
hexo.render.render({text: 'example', engine: 'swig'}).then(function(result){
  // ...
});
```

## Render a File

When rendering a file, it's not necessary to specify an `engine` because Hexo will detect the relevant rendering engine automatically based on the extension of the file. Of course, you are also allowed to explicitly define the `engine`.

``` js
hexo.render.render({path: 'path/to/file.swig'}).then(function(result){
  // ...
});
```

## Render Options

You can pass in an options object as the second argument.

``` js
hexo.render.render({text: ''}, {foo: 'foo'}).then(function(result){
  // ...
});
```

## after_render Filters

When rendering is complete, Hexo will execute the corresponding `after_render` filters. For example, we can use this feature to implement a JavaScript minifier.

``` js
var UglifyJS = require('uglify-js');

hexo.extend.filter.register('after_render:js', function(str, data){
  var result = UglifyJS.minify(str);
  return result.code;
});
```

## Check Whether a File is Renderable

You can use the `isRenderable` or `isRenderableSync` method to check whether a file path is renderable. Only when a corresponding renderer has been registered will this method return true.

``` js
hexo.render.isRenderable('layout.swig') // true
hexo.render.isRenderable('image.png') // false
```

## Get the Output Extension

Use the `getOutput` method to get the extension of the rendered output. If a file is not renderable, the method will return an empty string.

``` js
hexo.render.getOutput('layout.swig') // html
hexo.render.getOutput('image.png') // '''
```
