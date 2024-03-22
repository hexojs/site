---
title: ローカル変数
---
ローカル変数はテンプレートのレンダリングに使用され、テンプレート内の`site`変数です。

## デフォルト変数

変数 | 説明
--- | ---
`posts` | すべての投稿
`pages` | すべてのページ
`categories` | すべてのカテゴリー
`tags` | すべてのタグ

## 変数の取得

``` js
hexo.locals.get('posts')
```

## 変数の設定

``` js
hexo.locals.set('posts', function(){
  return ...
});
```

## 変数の削除

``` js
hexo.locals.remove('posts');
```

## すべての変数を取得

``` js
hexo.locals.toObject();
```

## キャッシュの無効化

``` js
hexo.locals.invalidate();
```
