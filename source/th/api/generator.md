---
title: Generator
---
generator สร้าง route บนพื้นฐานของไฟล์ท่ีได้จัดการ

## Synopsis

``` js
hexo.extend.generator.register(name, function(locals){
  // ...
});
```

argument `locals` จะส่งเข้า function โดยมี [site variables](../docs/variables.html#Site-Variables) เข้าด้วยกัน ผู้ใช้สามารถใช้ argument นี้เพื่อได้ data ของเว็บไซต์ ด้งนั้นจะไม่ต้องเข้าถึง database โดยตรง

## Update Routes

``` js
hexo.extend.generator.register('test', function(locals){
  // Object
  return {
    path: 'foo',
    data: 'foo'
  };

  // Array
  return [
    {path: 'foo', data: 'foo'},
    {path: 'bar', data: 'bar'}
  ];
});
```

Attribute | Description
--- | ---
`path` | Path not including the prefixing `/`.
`data` | Data
`layout` | Layout. Specify the layouts for rendering. The value can be a string or an array. If it's ignored then the route will return `data` directly.

เมื่ออัปเดท source file แฃ้ว hexo จะ execute generator ทั้งหมดและสร้างขึ้น route ใหม่ **กรุณาอย่าเข้าถึง router โดยตรง**

## Example

### Archive Page

สร้างเพจ archive ได้ท่ี `archives/index.html`  โพสต์จะเป็นแบบ  data ท่ีส่งเข้า template. data นี้คล้ายกับ variable `page` ของ template

ต่อไปจะตั้งค่า attribute ของ `layout` เพื่อ render theme template เฉพาะ ในตัวอย่างต่อไปจะตั้งค่า layout อย่างนี้: ถ้า layout  `archive` ไม่มี จะใช้ layout `index` แทน

``` js
hexo.extend.generator.register('archive', function(locals){
  return {
    path: 'archives/index.html',
    data: locals,
    layout: ['archive', 'index']
  }
});
```

### Archive Page with Pagination

ผู้ใช้สามารถใช้เครื่องมือทางการ [hexo-pagination] อย่างสะดวกไปสร้างเพจ archive ท่ีมีหมายเลขหน้า

``` js
var pagination = require('hexo-pagination');

hexo.extend.generator.register('archive', function(locals){
  // hexo-pagination makes an index.html for the /archives route
  return pagination('archives', locals.posts, {
    perPage: 10,
    layout: ['archive', 'index'],
    data: {}
  });
});
```

### Generate All Posts

โพสต์ทั้งหมดจะมีอยู่ใน `locals.posts` ด้วยแล้วจะสร้าง route ให้โพสต์ทั้งหมด

``` js
hexo.extend.generator.register('post', function(locals){
  return locals.posts.map(function(post){
    return {
      path: post.path,
      data: post,
      layout: 'post'
    };
  });
});
```

### Copy Files

คราวนี้  `data` จะเป็น function และ route `fs.ReadStream` ของ `data` จะสร้างขึ้นมาในเวลาที่ต้องการ

``` js
var fs = require('hexo-fs');

hexo.extend.generator.register('asset', function(locals){
  return {
    path: 'file.txt',
    data: function(){
      return fs.createReadStream('path/to/file.txt')
    }
  };
});
```

[hexo-pagination]: https://github.com/hexojs/hexo-pagination
