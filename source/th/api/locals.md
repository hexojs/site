---
title: Local Variables
---

local variable จะใช้มาเป็น template rendering ซึ่งจะเป็น variable `site` ที่อยู่ใน template

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
