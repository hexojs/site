---
title: API
---

本文件提供您更豐富的 API 資訊，使您更容易修改 Hexo 原始碼或撰寫外掛。 如果您只是想要查詢關於 Hexo 的基本使用方法，請參閱 [文件](../docs/)。

在開始之前，請注意本文件僅適用於 Hexo 3 及以上版本。

## 初始化

First, we have to create a Hexo instance. A new instance takes two arguments: the root directory of the website, `base_dir`, and an object containing the initialization options. Next, we initialize this instance by calling the `init` method on it, which will then cause Hexo to load its configuration and plugins.

```js
var Hexo = require("hexo");
var hexo = new Hexo(process.cwd(), {});

hexo.init().then(function () {
  // ...
});
```

| 選項                 | 描述                                                                                                 | Default                           |
| ------------------ | -------------------------------------------------------------------------------------------------- | --------------------------------- |
| `debug`            | 開啟除錯模式。 在終端機中顯示除錯訊息，並在根目錄中儲存 `debug.log` 記錄檔。                                                      | `false`                           |
| `safe`             | 開啟安全模式。 不要載入任何外掛。                                                                                  | `false`                           |
| `silent`           | 開啟安靜模式。 不要在終端機中顯示任何訊息。                                                                             | `false`                           |
| `config`           | 指定配置檔案的路徑。                                                                                         | `_config.yml`                     |
| `draft` / `drafts` | Enable to add drafts to the posts list.<br> example: when you use `hexo.locals.get('posts')` | `render_drafts` of \_config.yml |

## 載入檔案

Hexo 提供了兩種方法來載入檔案：`load`, `watch`，前者用於載入 `source` 資料夾內的所有檔案及主題資料；而後者除了執行 `load` 以外，還會繼續監看檔案變動。 `load` is used for loading all files in the `source` folder as well as the theme data. `watch` does the same things `load` does, but will also start watching for file changes continuously.

Both methods will load the list of files and pass them to the corresponding processors. After all files have been processed, they will call upon the generators to create the routes.

```js
hexo.load().then(function () {
  // ...
});

hexo.watch().then(function () {
  // 之後可呼叫 hexo.unwatch() 停止檔案監看
});
```

## 執行指令

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

## Exit

You should call the `exit` method upon successful or unsuccessful completion of a console command. This allows Hexo to exit gracefully and finish up important things such as saving the database.

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
