---
title: 標籤外掛（Tag）
---
標籤外掛幫助使用者在文章中快速插入內容。

## 概要

``` js
hexo.extend.tag.register(name, function(args, content){
  // ...
}, options);
```

標籤函數會傳入兩個參數：`args` 和 `content`，前者代表使用者在使用標籤外掛時傳入的參數，而後者則是標籤外掛所包覆的內容。

自 Hexo 3 開始，因為新增了非同步渲染功能，而改用 [Nunjucks] 作為渲染引擎，其行為可能會與過去使用的 [Swig] 有些許差異。

## 移除標籤外掛

Use `unregister()` to replace existing [tag plugins](/docs/tag-plugins) with custom functions.

``` js
hexo.extend.tag.unregister(name);
```

**Example**

``` js
const tagFn = (args, content) => {
  content = 'something';
  return content;
};

// https://hexo.io/docs/tag-plugins#YouTube
hexo.extend.tag.unregister('youtube');

hexo.extend.tag.register('youtube', tagFn);
```

## 選項

### ends

使用結尾標籤，此選項預設為 `false`。

### async

開啟非同步模式，此選項預設為 `false`。

## 範例

### 沒有結尾標籤

插入 Youtube 影片。

``` js
hexo.extend.tag.register('youtube', function(args){
  var id = args[0];
  return '<div class="video-container"><iframe width="560" height="315" src="http://www.youtube.com/embed/' + id + '" frameborder="0" allowfullscreen></iframe></div>';
});
```

### 有結尾標籤

插入 pull quote。

``` js
hexo.extend.tag.register('pullquote', function(args, content){
  var className =  args.join(' ');
  return '<blockquote class="pullquote' + className + '">' + content + '</blockquote>';
}, {ends: true});
```

### 非同步渲染

插入檔案。

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

## Front-matter and user configuration

Any of the following options is valid:

1.

``` js
hexo.extend.tag.register('foo', function (args) {
  const [firstArg] = args;

  // User config
  const { config } = hexo;
  const editor = config.author + firstArg;

  // Theme config
  const { config: themeCfg } = hexo.theme;
  if (themeCfg.fancybox) // do something...

  // Front-matter
  const { title } = this; // article's (post/page) title

  // Article's content
  const { _content } = this; // original content
  const { content } = this; // HTML-rendered content

  return 'foo';
});
```

2.

``` js index.js
hexo.extend.tag.register('foo', require('./lib/foo')(hexo));
```

``` js lib/foo.js
module.exports = hexo => {
  return function fooFn(args) {
    const [firstArg] = args;

    const { config } = hexo;
    const editor = config.author + firstArg;

    const { config: themeCfg } = hexo.theme;
    if (themeCfg.fancybox) // do something...

    const { title, _content, content } = this;

    return 'foo';
  };
};
```

[Nunjucks]: https://mozilla.github.io/nunjucks/
[Swig]: https://node-swig.github.io/swig-templates/
