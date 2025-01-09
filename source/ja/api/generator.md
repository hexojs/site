---
title: ジェネレータ
---

ジェネレータは、処理されたファイルに基づいてルートを構築します。

## 概要

```js
hexo.extend.generator.register(name, function (locals) {
  // ...
});
```

関数には`locals`引数が渡され、[サイト変数](../docs/variables.html#サイト変数)が含まれます。 ウェブサイトデータが必要な場合、直接データベースにアクセスするのを避け、この引数を利用してください。

## ルートの更新

```js
hexo.extend.generator.register("test", function (locals) {
  // Object
  return {
    path: "foo",
    data: "foo",
  };

  // Array
  return [
    { path: "foo", data: "foo" },
    { path: "bar", data: "bar" },
  ];
});
```

| 属性       | 説明                                                                        |
| -------- | ------------------------------------------------------------------------- |
| `path`   | 先頭の`/`を含まないパス。                                                            |
| `data`   | データ                                                                       |
| `layout` | レイアウト。 レンダリングに使用するレイアウトを指定します。 文字列または配列が指定できます。 無指定の場合、ルートは`data`を直接返します。 |

ソースファイルが更新されると、Hexoはすべてのジェネレータを実行し、ルートを再構築します。 **ここではあくまでデータを返し、直接ルーターにアクセスしないでください。 **

## 例

### アーカイブページ

`archives/index.html`にアーカイブページを作成します。 テンプレートにすべての記事をデータとして渡します。 このデータはテンプレート内の`page`変数と同等です。

次に、`layout`属性を設定してテーマテンプレートでレンダリングします。 この例では2つのレイアウトを設定しています。 `archive`レイアウトが存在しない場合は、代わりに`index`レイアウトが使用されます。

```js
hexo.extend.generator.register("archive", function (locals) {
  return {
    path: "archives/index.html",
    data: locals,
    layout: ["archive", "index"],
  };
});
```

### ページネーション付きアーカイブページ

公式ツール[hexo-pagination][]を使用して、ページネーション付きのアーカイブページを簡単に構築できます。

```js
var pagination = require("hexo-pagination");

hexo.extend.generator.register("archive", function (locals) {
  // hexo-pagination makes an index.html for the /archives route
  return pagination("archives", locals.posts, {
    perPage: 10,
    layout: ["archive", "index"],
    data: {},
  });
});
```

### すべての記事を生成

`locals.posts`内のすべての記事を走査し、すべての記事のルートを作成します。

```js
hexo.extend.generator.register("post", function (locals) {
  return locals.posts.map(function (post) {
    return {
      path: post.path,
      data: post,
      layout: "post",
    };
  });
});
```

### ファイルのコピー

この例ではデータを明示的に返さず、ルートが必要なときにのみ`fs.ReadStream`を生成する関数を`data`に設定しています。

```js
var fs = require("hexo-fs");

hexo.extend.generator.register("asset", function (locals) {
  return {
    path: "file.txt",
    data: function () {
      return fs.createReadStream("path/to/file.txt");
    },
  };
});
```

[hexo-pagination]: https://github.com/hexojs/hexo-pagination
