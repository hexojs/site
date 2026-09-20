---
title: インジェクター
---

インジェクターは、生成されたHTMLファイルの`<head>`や`<body>`に静的なコードスニペットを追加します。 Hexoは`after_render:html`フィルターが実行される**前に**インジェクターを実行します。

## 概要

```js
hexo.extend.injector.register(entry, value, to);
```

### entry `<string>`

HTML内でコードが挿入される場所です。

以下の値がサポートされています:

- `head_begin`: `<head>`の直後にコードスニペットを挿入します（デフォルト）。
- `head_end`: `</head>`の直前にコードスニペットを挿入します。
- `body_begin`: `<body>`の直後にコードスニペットを挿入します。
- `body_end`: `</body>`の直前にコードスニペットを挿入します。

### value `<string> | <Function>`

> 文字列を返す関数がサポートされています。

挿入されるコードスニペットです。

### to `<string>`

コードスニペットが挿入されるページです。

- `default`: すべての記事やページに挿入します（デフォルト）。
- `home`: ホームページのみに挿入します（`is_home()`ヘルパーが`true`の場合）。
- `post`: 記事ページのみに挿入します（`is_post()`ヘルパーが`true`の場合）。
- `page`: ページのみに挿入します（`is_page()`ヘルパーが`true`の場合）。
- `archive`: アーカイブページのみに挿入します（`is_archive()`ヘルパーが`true`の場合）。
- `category`: カテゴリページのみに挿入します（`is_category()`ヘルパーが`true`の場合）。
- `tag`: タグページのみに挿入します（`is_tag()`ヘルパーが`true`の場合）。
- カスタムレイアウト名も使用可能です。 詳細は[執筆 - レイアウト](../docs/writing#レイアウト)を参照してください。

---

他にも内部関数があります。 詳細は、[hexojs/hexo#4049](https://github.com/hexojs/hexo/pull/4049) を参照してください。

## 例

```js
const css = hexo.extend.helper.get("css").bind(hexo);
const js = hexo.extend.helper.get("js").bind(hexo);

hexo.extend.injector.register(
  "head_end",
  () => {
    return css(
      "https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css",
    );
  },
  "music",
);

hexo.extend.injector.register(
  "body_end",
  '<script src="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js">',
  "music",
);

hexo.extend.injector.register("body_end", () => {
  return js("/js/jquery.js");
});
```

上記の設定では、`music`レイアウトの任意のページの`</head>`に`APlayer.min.css` (`<link>`タグ) を、`</body>`に`APlayer.min.js` (`<script>`タグ) を、 またすべてのページの`</body>`に`jquery.js` (`<script>` タグ) を挿入します。

## ユーザー設定へのアクセス

以下のいずれかを方法を使用します:

1.

```js
const css = hexo.extend.helper.get("css").bind(hexo);

hexo.extend.injector.register("head_end", () => {
  const { cssPath } = hexo.config.fooPlugin;
  return css(cssPath);
});
```

2.

```js index.js
/* global hexo */

hexo.extend.injector.register("head_end", require("./lib/inject").bind(hexo));
```

```js lib/inject.js
module.exports = function () {
  const css = this.extend.helper.get("css");
  const { cssPath } = this.config.fooPlugin;
  return css(cssPath);
};
```

```js lib/inject.js
function injectFn() {
  const css = this.extend.helper.get("css");
  const { cssPath } = this.config.fooPlugin;
  return css(cssPath);
}

module.exports = injectFn;
```

3.

```js index.js
/* global hexo */

hexo.extend.injector.register("head_end", require("./lib/inject")(hexo));
```

```js lib/inject.js
module.exports = (hexo) => () => {
  const css = hexo.extend.helper.get("css").bind(hexo);
  const { cssPath } = hexo.config.fooPlugin;
  return css(cssPath);
};
```

```js lib/inject.js
const injectFn = (hexo) => {
  const css = hexo.extend.helper.get("css").bind(hexo);
  const { cssPath } = hexo.config.fooPlugin;
  return css(cssPath);
};

module.exports = (hexo) => injectFn(hexo);
```
