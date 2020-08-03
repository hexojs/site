---
title: Tag
---
tag ช่วยให้ผู้ใช้เสียบ snippet เข้าไปในโพสต์ของตนอย่างง่ายดายและรวดเร็ว

## Synopsis

``` js
hexo.extend.tag.register(name, function(args, content){
  // ...
}, options);
```

argument ทั้งหมดสองตัวจะส่งเข้า function แท็ก: `args` และ `content`     `args` เป็น argument ท่ีส่งเข้าปลั๊กอินแท็กและ `content` เป็นเนื้อหาท่ีอยู่ในปลั๊กอินแท็ก จากคำแนะนำของ asynchronous rendering ใน hexo 3 รู้ได้ว่า hexo ใช้  [Nunjucks] เพื่อ rendering ซึ่งแตกต่างจาก rendering ใน [Swig]

## Unregister Tags

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

## Options

### ends

ใช้แท็ก end ตัวเลือก default คือ `false`

### async

เปิดโหมด async ตัวเลือก default คือ `false`

## Examples

### Without End Tags

เสียบวิดีโอ youtube ลง

``` js
hexo.extend.tag.register('youtube', function(args){
  var id = args[0];
  return '<div class="video-container"><iframe width="560" height="315" src="http://www.youtube.com/embed/' + id + '" frameborder="0" allowfullscreen></iframe></div>';
});
```

### With End Tags

เสียบ pull quote ลง

``` js
hexo.extend.tag.register('pullquote', function(args, content){
  var className =  args.join(' ');
  return '<blockquote class="pullquote' + className + '">' + content + '</blockquote>';
}, {ends: true});
```

### Async Rendering

เสียบไฟล์ลง

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

[Nunjucks]: http://mozilla.github.io/nunjucks/
[Swig]: http://paularmstrong.github.io/swig/
