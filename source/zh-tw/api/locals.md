title: 區域變數
---
區域變數用於模版渲染，也就是模版中的 `site` 變數。

## 預設變數

變數 | 描述
--- | ---
`posts` | 所有文章
`pages` | 所有分頁
`categories` | 所有分類
`tags` | 所有標籤

## 取得變數

``` js
hexo.locals.get('posts')
```

## 設定變數

``` js
hexo.locals.set('posts', function(){
  return ...
});
```

## 移除變數

``` js
hexo.locals.remove('posts');
```

## 取得所有變數

``` js
hexo.locals.toObject();
```

## 清除快取

``` js
hexo.locals.invalidate();
```