---
title: Local Variables
---

Local variables are used for template rendering, which is the `site` variable in templates.

## Default Variables

| 變數           | 描述   |
| ------------ | ---- |
| `posts`      | 所有文章 |
| `pages`      | 所有分頁 |
| `categories` | 所有分類 |
| `tags`       | 所有標籤 |

## 取得變數

```js
hexo.locals.get("posts");
```

## 設定變數

```js
hexo.locals.set('posts', function(){
  return ...
});
```

## 移除變數

```js
hexo.locals.remove("posts");
```

## 取得所有變數

```js
hexo.locals.toObject();
```

## Invalidate the cache

```js
hexo.locals.invalidate();
```
