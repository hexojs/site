---
title: Tag
---
A tag allows users to quickly and easily insert snippets into their posts.

## Synopsis

``` js
hexo.extend.tag.register(name, function(args, content){
  // ...
}, options);
```

Two arguments will be passed into the tag function: `args` and `content`. `args` contains the arguments passed into the tag plugin and `content` is the wrapped content from the tag plugin.

Since the introduction of asynchronous rendering in Hexo 3, we are using [Nunjucks] for rendering. The behavior may be somewhat different from that in [Swig].

## Options

### ends

Use end tags. This option is `false` by default.

### async

Enable async mode. This option is `false` by default.

## Examples

### Without End Tags

Insert a Youtube video.

``` js
hexo.extend.tag.register('youtube', function(args){
  var id = args[0];
  return '<div class="video-container"><iframe width="560" height="315" src="http://www.youtube.com/embed/' + id + '" frameborder="0" allowfullscreen></iframe></div>';
});
```

### With End Tags

Insert a pull quote.

``` js
hexo.extend.tag.register('pullquote', function(args, content){
  var className =  args.join(' ');
  return '<blockquote class="pullquote' + className + '">' + content + '</blockquote>';
}, {ends: true});
```

### Async Rendering

Insert a file.

``` js
var fs = require('hexo-fs');
var pathFn = require('path');

hexo.extend.tag.register('include_code', function(args){
  var filename = args[0];
  var path = pathFn.join(hexo.source_dir, filename);

  return fs.readFile(path).then(function(content){
    return '<pre><code>' + content + '</code></pre>';
  });
}, {async: true});
```

[Nunjucks]: http://mozilla.github.io/nunjucks/
[Swig]: http://paularmstrong.github.io/swig/
