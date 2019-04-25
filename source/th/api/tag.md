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

[Nunjucks]: http://mozilla.github.io/nunjucks/
[Swig]: http://paularmstrong.github.io/swig/
