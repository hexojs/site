title: 标签插件（Tag）
---
标签插件帮助开发者在文章中快速插入内容。

## 概要

``` js
hexo.extend.tag.register(name, function(args, content){
}, options);
```

标签函数会传入两个参数：`args` 和 `content`，前者代表开发者在使用标签插件时传入的参数，而后者则是标签插件所覆盖的内容。

从 Hexo 3 开始，因为新增了非同步渲染功能，而改用 [Nunjucks] 作为渲染引擎，其行为可能会与过去使用的 [Swig] 有些许差异。

## 选项

### ends

使用结束标签，此选项默认为 `false`。

### async

开启非同步模式，此选项默认为 `false`。

## 范例

### 没有结束标签

插入 Youtube 影片。

``` js
hexo.extend.tag.register('youtube', function(args){
  var id = args[0];
  return '<div class="video-container"><iframe width="560" height="315" src="http://www.youtube.com/embed/' + id + '" frameborder="0" allowfullscreen></iframe></div>';
});
```

### 有结束标签

插入 pull quote。

``` js
hexo.extend.tag.register('pullquote', function(args, content){
  var className =  args.join(' ');
  return '<blockquote class="pullquote' + className + '">' + content + '</blockquote>';
}, {ends: true});
```

### 非同步渲染

插入文件。

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