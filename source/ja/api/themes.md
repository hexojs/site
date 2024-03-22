---
title: テーマ
---
`hexo.theme`は[Box](box.html)から継承され、テンプレートも保存します。

## ビューの取得

``` js
hexo.theme.getView(path);
```

## ビューの設定

``` js
hexo.theme.setView(path, data);
```

## ビューの削除

``` js
hexo.theme.removeView(path);
```

## ビュー

ビューには`render`と`renderSync`の2つのメソッドがあります。これら2つのメソッドは同一ですが、前者は非同期であり、後者は同期です。簡単にするために、ここでは`render`についてのみ説明します。

``` js
var view = hexo.theme.getView('layout.swig');

view.render({foo: 1, bar: 2}).then(function(result){
  // ...
});
```

`render`メソッドにオプションを渡すことができ、対応するレンダラーを使用してテンプレートを処理し、[ヘルパー](helper.html)を読み込むように試みます。レンダリングが完了すると、レイアウトが存在するかどうかを探します。`layout`が`false`であるか、存在しない場合は、結果が直接返されます。
