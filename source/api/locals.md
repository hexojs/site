title: Local Variables
---
Local variables are used for template rendering, which is the `site` variable in templates.

## Default Variables

Variable | Description
--- | ---
`posts` | All posts
`pages` | All pages
`categories` | All categories
`tags` | All tags

## Get a Variable

``` js
hexo.locals.get('posts')
```

## Set a Variable

``` js
hexo.locals.set('posts', function(){
  return ...
});
```

## Remove a Variable

``` js
hexo.locals.remove('posts');
```

## Get All Variable

``` js
hexo.locals.toObject();
```

## Invalidate the cache

``` js
hexo.locals.invalidate();
```