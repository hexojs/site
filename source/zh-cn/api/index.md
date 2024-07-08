---
title: API
---

本文件提供您更丰富的 API 信息，使您更容易修改 Hexo 源代码或编写插件。 如果您只是想查询 Hexo 的基本使用方法，请参阅 [文档](../docs/)。

在开始之前，请注意本文件仅适用于 Hexo 3 及以上版本。

## 初始化

首先，我们必须建立一个 Hexo 实例（instance）。 一个新的实例需要两个参数：网站根目录 `base_dir`，以及包含初始化选项的对象。 接着执行 `init` 方法后，Hexo 会加载插件及配置文件。

```js
var Hexo = require("hexo");
var hexo = new Hexo(process.cwd(), {});

hexo.init().then(function () {
  // ...
});
```

| 选项                 | 描述                                                              | 默认值                                 |
| ------------------ | --------------------------------------------------------------- | ----------------------------------- |
| `debug`            | 开启调试模式。 在终端中显示调试信息，并在根目录中存储 `debug.log` 日志文件。                   | `false`                             |
| `safe`             | 开启安全模式。 不加载任何插件。                                                | `false`                             |
| `silent`           | 开启安静模式。 不在终端中显示任何信息。                                            | `false`                             |
| `config`           | 指定配置文件的路径。                                                      | `_config.yml`                       |
| `draft` / `drafts` | 是否将草稿加入到文章列表中。 <br>例如在 `hexo.locals.get('posts')` 中获取草稿内容 | \_config.yml 中 `render_drafts` 的值 |

## 加载文件

Hexo 提供了两种方法来加载文件：`load` 和 `watch`。 `load` 用于加载 `source` 文件夹中的所有文件以及主题数据。 `watch` 执行与 `load` 相同的操作，但还会开始连续监视文件更改。

Both methods will load the list of files and pass them to the corresponding processors. After all files have been processed, they will call upon the generators to create the routes.

```js
hexo.load().then(function () {
  // ...
});

hexo.watch().then(function () {
  // 之后可以调用 hexo.unwatch()，停止监视文件
});
```

## 执行指令

Any console command can be called explicitly using the `call` method on the Hexo instance. Such a call takes two arguments: the name of the console command, and an options argument. Different options are available for the different console commands.

```js
hexo.call("generate", {}).then(function () {
  // ...
});
```

```js
hexo.call("list", { _: ["post"] }).then(function () {
  // ...
});
```

## 退出

无论控制台命令完成与否，都应调用 `exit` 方法。 这样 Hexo 就能优雅地退出，并完成保存数据库等重要工作。

```js
hexo
  .call("generate")
  .then(function () {
    return hexo.exit();
  })
  .catch(function (err) {
    return hexo.exit(err);
  });
```
