---
title: ヘルパー
---

ヘルパーを使用すると、テンプレートにスニペットを簡単に追加できます。 より複雑なコードを扱う場合、テンプレートよりもヘルパーを使用することをお勧めします。

ヘルパーは`source`ファイルからアクセスできません。

## 概要

```js
hexo.extend.helper.register(name, function () {
  // ...
});
```

## 例

```js
hexo.extend.helper.register("js", function (path) {
  return '<script src="' + path + '"></script>';
});
```

```js
<%- js('script.js') %>
// <script src="script.js"></script>
```

## FAQ

### カスタムヘルパーをどこに配置するか？

`scripts/`または`themes/<yourtheme>/scripts/`フォルダーの下に配置してください。

### カスタムヘルパー内で別の登録済みヘルパーをどのように使用するか？

すべてのヘルパーは同じコンテキストで実行されます。 例えば、カスタムヘルパー内で[`url_for()`](../docs/helpers#url-for)を使用するには:

```js
hexo.extend.helper.register("lorem", function (path) {
  return '<script src="' + this.url_for(path) + '"></script>';
});
```

### 登録済みヘルパーを他の拡張機能（例: フィルター、インジェクター）でどのように使用するか？

`hexo.extend.helper.get`はヘルパー関数を返しますが、それにはhexoがコンテキストとして必要ですので:

```js
const url_for = hexo.extend.helper.get("url_for").bind(hexo);
```
