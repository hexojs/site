title: Filter
---
A filter is used to modify some specified data. Hexo passes data to filter in sequence and filters can modify the data. This concept is stolen from [WordPress](http://codex.wordpress.org/Plugin_API#Filters).

## Synopsis

``` js
hexo.extend.filter.register(type, function(){
  // ...
}, priority);
```

You can define the `priority`. Lower `priority` executes first. The default `priority` is 10.

## Execute Filters

``` js
hexo.extend.filter.exec(type, data, options);
hexo.extend.filter.execSync(type, data, options);
```

Option | Description
--- | ---
`context` | Context
`args` | Arguments. This must be an array.

The first argument passed into each filter is `data`. You can change `data` in the next filter by returning a new value. If nothing is returned then it won't be changed. You can even use `args` to specify other arguments in filters. For example:

``` js
hexo.extend.filter.register('test', function(data, arg1, arg2){
  // data === 'some data'
  // arg1 === 'foo'
  // arg2 === 'bar'
  
  return 'something';
});

hexo.extend.filter.register('test', function(data, arg1, arg2){
  // data === 'something'
});

hexo.extend.filter.exec('test', 'some data', {
  args: ['foo', 'bar']
});
```

You can also use the following methods to execute filters:

``` js
hexo.execFilter(type, data, options);
hexo.execFilterSync(type, data, options);
```

## Unregister Filters

``` js
hexo.extend.filter.unregister(type, filter);
```

## Filter List

The following is the filters used in Hexo.

### before_post_render

Executed before a post is rendered. You can see [post rendering](posts.html#Render) to learn the execution steps.

For example, transform the title to lower case.

``` js
hexo.extend.filter.register('before_post_render', function(data){
  data.title = data.title.toLowerCase();
  return data;
});
```

### after_post_render

Executed after a post is rendered. You can see [post rendering](posts.html#Render) to learn the execution steps.

For example, replace `@username` to the profile link on Twitter.

``` js
hexo.extend.filter.register('after_post_render', function(data){
  data.content = data.content.replace(/@(\d+)/, '<a href="http://twitter.com/$1">#$1</a>');
  return data;
});
```

### before_exit

Executed before Hexo is about to exit, which means executed after `hexo.exit` get called.

``` js
hexo.extend.filter.register('before_exit', function(){
  // ...
});
```

### before_generate

Executed before generation started.

``` js
hexo.extend.filter.register('before_generate', function(){
  // ...
});
```

### after_generate

Executed after generation done.

``` js
hexo.extend.filter.register('after_generate', function(){
  // ...
});
```

### template_locals

Modify [local variables](../docs/variables.html) in templates.

For example, add the current time to the local variables of templates.

``` js
hexo.extend.filter.register('template_locals', function(locals){
  locals.now = Date.now();
  return locals;
});
```

### after_init

Executed after Hexo is initialized, which means executed after `hexo.init` is done.

``` js
hexo.extend.filter.register('after_init', function(){
  // ...
});
```

### new_post_path

Executed when creating a post to determine the path of new posts.

``` js
hexo.extend.filter.register('new_post_path', function(data, replace){
  // ...
});
```

### post_permalink

Used to determine the permalink of posts.

``` js
hexo.extend.filter.register('post_permalink', function(data){
  // ...
});
```

### after_render

Executed after rendering. You can see [rendering](rendering.html#after_render_Filters) for more info.

### server_middleware

Add middlewares to the server. `app` is a [Connect] instance.

For example, add `X-Powered-By: Hexo` to the response header.

``` js
hexo.extend.filter.register('server_middleware', function(app){
  app.use(function(req, res, next){
    res.setHeader('X-Powered-By', 'Hexo');
    next();
  });
});
```

[Connect]: https://github.com/senchalabs/connect