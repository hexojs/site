title: Filter
---
A filter is used to modify some specified data. Hexo passes data to filters in sequence and the filters then modify the data one after the other. This concept was borrowed from [WordPress](http://codex.wordpress.org/Plugin_API#Filters).

## Synopsis

``` js
hexo.extend.filter.register(type, function(){
  // ...
}, priority);
```

You can define the `priority`. Lower `priority` means that it will be executed first. The default `priority` is 10. We recommend using user-configurable priority value that user can specify in the config, e.g. `hexo.config.your_plugin.priority`.

## Execute Filters

``` js
hexo.extend.filter.exec(type, data, options);
hexo.extend.filter.execSync(type, data, options);
```

Option | Description
--- | ---
`context` | Context
`args` | Arguments. This must be an array.

The first argument passed into each filter is `data`. The `data` passed into the next filter can be modified by returning a new value. If nothing is returned, the data remains unmodified. You can even use `args` to specify other arguments in filters. For example:

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

**Example**

``` js
// Unregister a filter which is registered with named function

const filterFn = (data) => {
  data = 'something';
  return data;
};
hexo.extend.filter.register('example', filterFn);

hexo.extend.filter.unregister('example', filterFn);
```

``` js
// Unregister a filter which is registered with commonjs module

hexo.extend.filter.register('example', require('path/to/filter'));

hexo.extend.filter.unregister('example', require('path/to/filter'));
```

## Filter List

Here is a list of filters used by Hexo.

### before_post_render

Executed before a post is rendered. Refer to [post rendering](posts.html#Render) to learn the execution steps.

For example, to transform the title to lower case:

``` js
hexo.extend.filter.register('before_post_render', function(data){
  data.title = data.title.toLowerCase();
  return data;
});
```

### after_post_render

Executed after a post is rendered. Refer to [post rendering](posts.html#Render) to learn the execution steps.

For example, to replace `@username` with a link to a Twitter profile:

``` js
hexo.extend.filter.register('after_post_render', function(data){
  data.content = data.content.replace(/@(\d+)/, '<a href="http://twitter.com/$1">#$1</a>');
  return data;
});
```

### before_exit

Executed before Hexo is about to exit -- this will run right after `hexo.exit` is called.

``` js
hexo.extend.filter.register('before_exit', function(){
  // ...
});
```

### before_generate

Executed before generation begins.

``` js
hexo.extend.filter.register('before_generate', function(){
  // ...
});
```

### after_generate

Executed after generation finishes.

``` js
hexo.extend.filter.register('after_generate', function(){
  // ...
});
```

### template_locals

Modify [local variables](../docs/variables.html) in templates.

For example, to add the current time to the local variables of templates:

``` js
hexo.extend.filter.register('template_locals', function(locals){
  locals.now = Date.now();
  return locals;
});
```

### after_init

Executed after Hexo is initialized -- this will run right after `hexo.init` completes.

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

Executed after rendering finishes. You can see [rendering](rendering.html#after_render_Filters) for more info.

### after_clean

Executed after generated files and cache are removed with `hexo clean` command.

``` js
hexo.extend.filter.register('after_clean', function(){
  // remove some other temporary files
});
```

### server_middleware

Add middleware to the server. `app` is a [Connect] instance.

For example, to add `X-Powered-By: Hexo` to the response header:

``` js
hexo.extend.filter.register('server_middleware', function(app){
  app.use(function(req, res, next){
    res.setHeader('X-Powered-By', 'Hexo');
    next();
  });
});
```

[Connect]: https://github.com/senchalabs/connect
