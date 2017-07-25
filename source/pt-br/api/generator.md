title: Generator
---
A generator builds routes based on processed files.

## Synopsis

``` js
hexo.extend.generator.register(name, function(locals){
  // ...
});
```

A `locals` argument will get passed into the function, containing the [site variables](../docs/variables.html#Site-Variables). You should use this argument to get the website data, thereby avoiding having to access the database directly.

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

When the source files are updated, Hexo will execute all generators and rebuild the routes. **Please return the data and do not access the router directly.**

## Example

### Archive Page

Create an archive page at `archives/index.html`. We pass all posts as data to the templates. This data is equivalent to the `page` variable in templates.

Next, set the `layout` attribute to render with the theme templates. We're setting two layouts in this example: if the `archive` layout doesn't exist, the `index` layout will be used instead.

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

You can use the convenient official tool [hexo-pagination] to easily build archive pages with pagination.

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

Iterate over all posts in `locals.posts` and create routes for all the posts.

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

This time we don't return the data explicitly but instead set `data` to a function so the route will build `fs.ReadStream` only when needed.

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
