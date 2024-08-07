---
title: 過濾器（Filter）
---

A filter is used to modify some specified data. Hexo passes data to filters in sequence and the filters then modify the data one after the other. This concept was borrowed from [WordPress](http://codex.wordpress.org/Plugin_API#Filters).

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

You can define the `priority`. Lower `priority` means that it will be executed first. 您可指定過濾器的優先度 `priority`，`priority` 值越低的過濾器會越先執行，預設的 `priority` 是 10。 We recommend using user-configurable priority value that user can specify in the config, e.g. `hexo.config.your_plugin.priority`.

## 執行過濾器

```js
hexo.extend.filter.exec(type, data, options);
hexo.extend.filter.execSync(type, data, options);
```

| 選項        | 描述                                |
| --------- | --------------------------------- |
| `context` | Context                           |
| `args`    | Arguments. This must be an array. |

The first argument passed into each filter is `data`. The `data` passed into the next filter can be modified by returning a new value. If nothing is returned, the data remains unmodified. 您還可使用 `args` 指定過濾器的其他參數。 舉例來說：

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

您也可使用以下方法來執行過濾器：

```js
hexo.execFilter(type, data, options);
hexo.execFilterSync(type, data, options);
```

## 移除過濾器

```js
hexo.extend.filter.unregister(type, filter);
```

**Example**

```js
// Unregister a filter which is registered with named function

const filterFn = (data) => {
  data = "something";
  return data;
};
hexo.extend.filter.register("example", filterFn);

hexo.extend.filter.unregister("example", filterFn);
```

```js
// Unregister a filter which is registered with commonjs module

hexo.extend.filter.register("example", require("path/to/filter"));

hexo.extend.filter.unregister("example", require("path/to/filter"));
```

## 過濾器列表

以下是 Hexo 所使用的過濾器。

### before_post_render

在文章開始渲染前執行。 您可參考 [文章渲染](posts.html#渲染) 以瞭解執行順序。

For example, to transform the title to lower case:

```js
hexo.extend.filter.register("before_post_render", function (data) {
  data.title = data.title.toLowerCase();
  return data;
});
```

### after_post_render

在文章渲染完成後執行。 您可參考 [文章渲染](posts.html#渲染) 以瞭解執行順序。

舉例來說，把 `@username` 取代為 Twitter 的使用者連結。

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

在 Hexo 即將結束時執行，也就是在 `hexo.exit` 被呼叫後執行。

```js
hexo.extend.filter.register("before_exit", function () {
  // ...
});
```

### before_generate

在產生器執行開始前執行。

```js
hexo.extend.filter.register("before_generate", function () {
  // ...
});
});
```

### after_generate

Executed after generation finishes.

```js
hexo.extend.filter.register("after_generate", function () {
  // ...
});
```

### template_locals

修改模板的 [區域變數](../docs/variables.html)。

舉例來說，在模板的區域變數中新增目前的時間：

```js
hexo.extend.filter.register("template_locals", function (locals) {
  locals.now = Date.now();
  return locals;
});
```

### after_init

在 Hexo 初始化完成後執行，也就是在 `hexo.init` 執行完成後執行。

```js
hexo.extend.filter.register("after_init", function () {
  // ...
});
```

### new_post_path

Executed when creating a post to determine the path of new posts.

```js
hexo.extend.filter.register("new_post_path", function (data, replace) {
  // ...
});
```

### post_permalink

Used to determine the permalink of posts.

```js
hexo.extend.filter.register("post_permalink", function (data) {
  // ...
});
```

### after_render

Executed after rendering finishes. 在渲染後執行，您可參考 [渲染](rendering.html#after_render_過濾器) 以瞭解更多資訊。

### after_clean

Executed after generated files and cache are removed with `hexo clean` command.

```js
hexo.extend.filter.register("after_clean", function () {
  // remove some other temporary files
});
```

### server_middleware

新增伺服器的 Middleware。 `app` 是一個 [Connect][] 實例。

舉例來說，在回應標頭中新增 `X-Powered-By: Hexo`。

```js
hexo.extend.filter.register("server_middleware", function (app) {
  app.use(function (req, res, next) {
    res.setHeader("X-Powered-By", "Hexo");
    next();
  });
});
```

[Connect]: https://github.com/senchalabs/connect
