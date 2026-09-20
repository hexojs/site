---
title: タグ
---

タグを使用することで、記事に簡単にスニペットを挿入できます。

## 概要

```js
hexo.extend.tag.register(
  name,
  function (args, content) {
    // ...
  },
  options,
);
```

タグ関数には`args`と`content`の2つの引数が渡されます。 `args`はタグに渡された引数、`content`はタグでラップされたコンテンツです。

Hexo 3での非同期レンダリングの導入以来、レンダリングには[Nunjucks][]が使用されています。 [Swig][]の挙動とは少し異なる場合があります。

## タグの登録解除

`unregister()`を使用して、既存の[タグプラグイン](../docs/tag-plugins)をカスタム関数で置き換えます。

```js
hexo.extend.tag.unregister(name);
```

**例**

```js
const tagFn = (args, content) => {
  content = "something";
  return content;
};

// https://hexo.io/docs/tag-plugins#YouTube
hexo.extend.tag.unregister("youtube");

hexo.extend.tag.register("youtube", tagFn);
```

## Options

### ends

終了タグを使用します。 デフォルトで`false`です。

### async

非同期モードを有効にします。 デフォルトで`false`です。

## 例

### 終了タグなし

Youtubeビデオを挿入します。

```js
hexo.extend.tag.register("youtube", function (args) {
  var id = args[0];
  return (
    '<div class="video-container"><iframe width="560" height="315" src="http://www.youtube.com/embed/' +
    id +
    '" frameborder="0" allowfullscreen></iframe></div>'
  );
});
```

### 終了タグあり

プルクオートを挿入します。

```js
hexo.extend.tag.register(
  "pullquote",
  function (args, content) {
    var className = args.join(" ");
    return (
      '<blockquote class="pullquote' +
      className +
      '">' +
      content +
      "</blockquote>"
    );
  },
  { ends: true },
);
```

### 非同期レンダリング

ファイルを挿入します。

```js
var fs = require("hexo-fs");
var pathFn = require("path");

hexo.extend.tag.register(
  "include_code",
  function (args) {
    var filename = args[0];
    var path = pathFn.join(hexo.source_dir, filename);

    return fs.readFile(path).then(function (content) {
      return "<pre><code>" + content + "</code></pre>";
    });
  },
  { async: true },
);
```

## Front Matterとユーザー設定

以下の方法で利用できます:

1.

```js
hexo.extend.tag.register('foo', function (args) {
  const [firstArg] = args;

  // User config
  const { config } = hexo;
  const editor = config.author + firstArg;

  // Theme config
  const { config: themeCfg } = hexo.theme;
  if (themeCfg.fancybox) // do something...

  // Front-matter
  const { title } = this; // article's (post/page) title

  // Article's content
  const { _content } = this; // original content
  const { content } = this; // HTML-rendered content

  return 'foo';
});
```

2.

```js index.js
hexo.extend.tag.register("foo", require("./lib/foo")(hexo));
```

```js lib/foo.js
module.exports = hexo => {
  return function fooFn(args) {
    const [firstArg] = args;

    const { config } = hexo;
    const editor = config.author + firstArg;

    const { config: themeCfg } = hexo.theme;
    if (themeCfg.fancybox) // do something...

    const { title, _content, content } = this;

    return 'foo';
  };
};
```

[Nunjucks]: https://mozilla.github.io/nunjucks/
[Swig]: https://node-swig.github.io/swig-templates/
