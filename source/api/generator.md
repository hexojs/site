title: Generator
---
A generator builds routes based on processed files.

## Synopsis

``` js
hexo.extend.generator.register(name, function(locals){
  // ...
});
```

An argument `locals` will be passed into the function, which equals to the [site variables](variables.html#Site_Variables). You should use this argument to get data of website and avoid accessing the database directly.

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

When source files are updated, Hexo will execute all generators and rebuild routes. **Please return the data and do not access the router directly.**

## Example

### Archive Page

Create an archive page at `archives/index.html`. We pass all posts as data to the templates. This data equals to the `page` variable in templates.

Then, Set `layout` attribute to render with theme templates.  We set two layouts in this example. When `archive` layout does not exist, it will try `index` layout instead.

``` js
hexo.extend.generator.register('archive', function(locals){
  return {
    path: 'archives/index.html',
    data: locals.posts,
    layout: ['archive', 'index']
  }
});
```

### Archive Page with Pagination

You can use the convenient official tool [hexo-pagination] to build archive pages with pagination easily.

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

### Generate All Posts

Iterate all posts in `locals.posts` and create routes for all posts.

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

This time we don't return a data but a function in `data` so that this route will build `fs.ReadStream` only when it's using.

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