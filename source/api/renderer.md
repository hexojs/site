---
title: Renderer
---
A renderer is used to render content.

## Synopsis

``` js
hexo.extend.renderer.register(name, output, function(data, options){
  // ...
}, sync);
```

Argument | Description
--- | ---
`name` | Input filename extension (lower case, without leading `.`)
`output` | Output filename extension (lower case, without leading `.`)
`sync` | Sync mode

Three arguments will be passed into the render function:

Argument | Description
--- | ---
`data` | Include two attributes: file path `path` and file content `text`. `path` won't necessarily exist.
`option` | Options
`callback` | Callback function of two parameters `err`, `value`.

## Example

### Async Mode

``` js
var stylus = require('stylus');

// Callback
hexo.extend.renderer.register('styl', 'css', function(data, options, callback){
  stylus(data.text).set('filename', data.path).render(callback);
});

// Promise
hexo.extend.renderer.register('styl', 'css', function(data, options){
  return new Promise(function(resolve, reject){
    resolve('test');
  });
});
```

### Sync Mode

``` js
var ejs = require('ejs');

hexo.extend.renderer.register('ejs', 'html', function(data, options){
  options.filename = data.path;
  return ejs.render(data.text, options);
}, true);
```
