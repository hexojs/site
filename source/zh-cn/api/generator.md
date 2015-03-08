title: 生成器（Generator）
---
生成器根据处理后的原始文件建立路由。

## 概要

``` js
hexo.extend.generator.register(name, function(locals){
});
```

在函数中会传入一个 `locals` 参数，等同于 [网站变量](variables.html#网站变量)，请尽量利用此参数取得网站数据，避免直接存取资料库。

## 更新路由

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

属性 | 描述
--- | ---
`path` | 路径。不可包含开头的 `/`。
`data` | 数据
`layout` | 布局。指定用于渲染的模板，可为字符串或数组，如果省略此属性的话则会直接输出 `data`。

在原始文件更新时，Hexo 会执行所有生成器并重建路由，**请直接回传资料，不要直接操作路由**。

## 范例

### 归档页面

在 `archives/index.html` 建立一归档页面，把所有文章当作资料传入模板内，这个资料也就等同于模板中的 `page` 变量。

然后，设置 `layout` 属性好让 Hexo 使用主题模板来渲染，在此例中同时设定了两个布局，当 `archive` 布局不存在时，会继续尝试 `index` 布局。

``` js
hexo.extend.generator.register('archive', function(locals){
  return {
    path: 'archives/index.html',
    data: locals.posts,
    layout: ['archive', 'index']
  }
});
```

### 有分页的归档页面

您可以通过 [hexo-pagination] 这个方便的官方工具来轻松建立分页归档。

``` js
var pagination = require('hexo-pagination');

hexo.extend.generator.register('archive', function(locals){
  return pagination('archives/index.html', locals.posts, {
    perPage: 10,
    layout: ['archive', 'index'],
    data: {}
  });
});
```

### 生成所有文章

遍历 `locals.posts` 中的所有文章并生成所有文章的路由。

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

### 复制文件

这次不直接在 `data` 中返回数据而是返回一个函数，如此一来这个路由唯有在使用时才会建立 `fs.ReadStream`。

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