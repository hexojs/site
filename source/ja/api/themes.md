---
title: テーマ
---

`hexo.theme`は[Box](box.html)を継承し、テンプレートを保存します。

## ビューの取得

```js
hexo.theme.getView(path);
```

## ビューの設定

```js
hexo.theme.setView(path, data);
```

## ビューの削除

```js
hexo.theme.removeView(path);
```

## ビュー

ビューには`render`と`renderSync`の2つのメソッドがあります。 これら2つのメソッドは、前者は非同期であり後者は同期である以外は同じです。 簡略化のため、ここでは`render`についてのみ説明します。

```js
var view = hexo.theme.getView("layout.swig");

view.render({ foo: 1, bar: 2 }).then(function (result) {
  // ...
});
```

`render`メソッドにオプションを渡すことで、対応するレンダラーを使用してテンプレートを処理し、[ヘルパー](helper.html)を読み込みます。 レンダリングが完了すると、レイアウトが存在するかどうかを探します。 `layout`が`false`であるか、存在しない場合は、結果が直接返されます。
