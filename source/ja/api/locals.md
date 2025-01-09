---
title: ローカル変数
---

ローカル変数はテンプレート内の`site`変数としてレンダリング時に利用されます。

## デフォルト変数

| 変数           | 説明        |
| ------------ | --------- |
| `posts`      | すべての記事    |
| `pages`      | すべてのページ   |
| `categories` | すべてのカテゴリー |
| `tags`       | すべてのタグ    |

## 変数の取得

```js
hexo.locals.get("posts");
```

## 変数の設定

```js
hexo.locals.set('posts', function(){
  return ...
});
```

## 変数の削除

```js
hexo.locals.remove("posts");
```

## すべての変数を取得

```js
hexo.locals.toObject();
```

## キャッシュの無効化

```js
hexo.locals.invalidate();
```
