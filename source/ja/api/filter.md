---
title: フィルター
---

フィルターは特定のデータを変更します。 Hexoはデータをフィルターに順番に渡し、フィルターがデータを1つずつ変更します。 このコンセプトは[WordPress](http://codex.wordpress.org/Plugin_API#Filters)に基づいています。

## 概要

```js
hexo.extend.filter.register(type, function() {
  // User configuration
  const { config } = this;
  if (config.external_link.enable) // do something...

  // Theme configuration
  const { config: themeCfg } = this.theme;
  if (themeCfg.fancybox) // do something...

}, priority);
```

`priority`の設定が可能です。 低い`priority`が先に実行されます。 デフォルトの`priority`は10です。 この値は、ユーザーが設定ファイルで指定可能な値を利用することをお勧めします。 例: `hexo.config.your_plugin.priority`。

## フィルターの実行

```js
hexo.extend.filter.exec(type, data, options);
hexo.extend.filter.execSync(type, data, options);
```

| オプション     | 説明                |
| --------- | ----------------- |
| `context` | コンテキスト            |
| `args`    | 引数。 配列でなければなりません。 |

各フィルターに渡される最初の引数は`data`です。 新たな値を返却することで、次のフィルターに渡される`data`を変更できます。 何も返却しない場合データは変更されません。 `args`を使用してフィルターに他の引数を指定することもできます。 例えば:

```js
hexo.extend.filter.register("test", function (data, arg1, arg2) {
  // data === 'some data'
  // arg1 === 'foo'
  // arg2 === 'bar'

  return "something";
});

hexo.extend.filter.register("test", function (data, arg1, arg2) {
  // data === 'something'
});

hexo.extend.filter.exec("test", "some data", {
  args: ["foo", "bar"],
});
```

フィルターを実行するために以下の方法も使用できます:

```js
hexo.execFilter(type, data, options);
hexo.execFilterSync(type, data, options);
```

## フィルターの登録解除

```js
hexo.extend.filter.unregister(type, filter);
```

**例**

```js
// 名前付き関数で登録されたフィルターを登録解除

const filterFn = (data) => {
  data = "something";
  return data;
};
hexo.extend.filter.register("example", filterFn);

hexo.extend.filter.unregister("example", filterFn);
```

```js
// commonjsモジュールで登録されたフィルターを登録解除

hexo.extend.filter.register("example", require("path/to/filter"));

hexo.extend.filter.unregister("example", require("path/to/filter"));
```

## フィルターリスト

Hexoで使用されるフィルターの一覧です。

### before_post_render

記事がレンダリングされる前に実行されます。 実行手順については、[記事のレンダリング](posts.html#レンダリング)を参照してください。

例えば、タイトルを小文字に変換するには:

```js
hexo.extend.filter.register("before_post_render", function (data) {
  data.title = data.title.toLowerCase();
  return data;
});
```

### after_post_render

記事がレンダリングされた後に実行されます。 実行手順については、[記事のレンダリング](posts.html#レンダリング)を参照してください。

例えば、`@username`をTwitterプロファイルへのリンクに置き換えるには:

```js
hexo.extend.filter.register("after_post_render", function (data) {
  data.content = data.content.replace(
    /@(\d+)/,
    '<a href="http://twitter.com/$1">#$1</a>',
  );
  return data;
});
```

### before_exit

Hexoが終了する直前、つまり`hexo.exit`が呼び出された直後に実行されます。

```js
hexo.extend.filter.register("before_exit", function () {
  // ...
});
```

### before_generate

生成が開始される直前に実行されます。

```js
hexo.extend.filter.register("before_generate", function () {
  // ...
});
```

### after_generate

生成が終了した直後に実行されます。

```js
hexo.extend.filter.register("after_generate", function () {
  // ...
});
```

### template_locals

テンプレートの[ローカル変数](../docs/variables.html)を変更します。

例えば、テンプレートのローカル変数に現在の時間を追加するには:

```js
hexo.extend.filter.register("template_locals", function (locals) {
  locals.now = Date.now();
  return locals;
});
```

### after_init

Hexoが初期化、つまり`hexo.init`が完了した直後に実行されます。

```js
hexo.extend.filter.register("after_init", function () {
  // ...
});
```

### new_post_path

新しい記事を作成する際のパスを決定するために実行されます。

```js
hexo.extend.filter.register("new_post_path", function (data, replace) {
  // ...
});
```

### post_permalink

記事のパーマリンクを決定するために使用されます。

```js
hexo.extend.filter.register("post_permalink", function (data) {
  // ...
});
```

### after_render

レンダリングが完了した直後に実行されます。 詳細については、[レンダリング](rendering.html#after-renderフィルター)を参照してください。

### after_clean

`hexo clean`コマンドで生成されたファイルとキャッシュが削除された後に実行されます。

```js
hexo.extend.filter.register("after_clean", function () {
  // remove some other temporary files
});
```

### server_middleware

サーバーにミドルウェアを追加します。 `app`は[Connect][]インスタンスです。

例えば、レスポンスヘッダーに`X-Powered-By: Hexo`を追加するには:

```js
hexo.extend.filter.register("server_middleware", function (app) {
  app.use(function (req, res, next) {
    res.setHeader("X-Powered-By", "Hexo");
    next();
  });
});
```

[Connect]: https://github.com/senchalabs/connect
