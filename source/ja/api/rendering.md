---
title: レンダリング
---

Hexoにはファイルや文字列をレンダリングするための2つの方法があります。 非同期の`hexo.render.render`メソッドと同期の`hexo.render.renderSync`メソッドです。 これら2つの方法は非常に似ているため、以下では非同期の`hexo.render.render`についてのみ詳しく説明します。

## 文字列のレンダリング

文字列をレンダリングする際、Hexoがどのレンダリングエンジンを使用すべきか知るために`engine`を指定する必要があります。

```js
hexo.render.render({ text: "example", engine: "swig" }).then(function (result) {
  // ...
});
```

## ファイルのレンダリング

ファイルをレンダリングする際は、Hexoがファイルの拡張子に基づいて自動的に関連するレンダリングエンジンを検出するため、`engine`を指定する必要はありません。 もちろん、`engine`を明示的に定義することもできます。

```js
hexo.render.render({ path: "path/to/file.swig" }).then(function (result) {
  // ...
});
```

## レンダリングオプション

第二引数としてオプションオブジェクトを渡すことができます。

```js
hexo.render.render({ text: "" }, { foo: "foo" }).then(function (result) {
  // ...
});
```

## after_renderフィルター

レンダリングが完了すると、Hexoは対応する`after_render`フィルターを実行します。 例えば、この機能を使用してJavaScriptのミニファイを実装できます。

```js
var UglifyJS = require("uglify-js");

hexo.extend.filter.register("after_render:js", function (str, data) {
  var result = UglifyJS.minify(str);
  return result.code;
});
```

## ファイルがレンダリング可能かどうかをチェック

`isRenderable`または`isRenderableSync`メソッドを使用して、ファイルパスがレンダリング可能かチェックできます。 対応するレンダラーが登録されている場合のみ、このメソッドはtrueを返します。

```js
hexo.render.isRenderable("layout.swig"); // true
hexo.render.isRenderable("image.png"); // false
```

## 出力拡張子を取得

レンダリングされた出力の拡張子を取得するには、`getOutput`メソッドを使用します。 ファイルがレンダリング可能でない場合、このメソッドは空の文字列を返します。

```js
hexo.render.getOutput("layout.swig"); // html
hexo.render.getOutput("image.png"); // '''
```

## Nunjucksタグを無効にする

[タグプラグイン](../docs/tag-plugins)を使用していない場合で、コンテンツの[エスケープ](../docs/troubleshooting#コンテンツのエスケープ)を使用せずに記事内で`{{ }}`または`{% %}`を使用したい場合は、既存のレンダラーでNunjucksタグの処理を無効にすることができます:

```js
// 以下の例は'.md'ファイル拡張子にのみ適用されます
// 他の拡張子も指定する必要があるかもしれません。 例: '.markdown', '.mkd'
const renderer = hexo.render.renderer.get("md");
if (renderer) {
  renderer.disableNunjucks = true;
  hexo.extend.renderer.register("md", "html", renderer);
}
```
