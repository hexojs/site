---
title: Renderer
---

A renderer is used to render content.

## 概要

```js
hexo.extend.renderer.register(
  name,
  output,
  function (data, options) {
    // ...
  },
  sync,
);
```

| Argument | 描述                   |
| -------- | -------------------- |
| `name`   | 輸入的副檔名（小寫，不含開頭的 `.`） |
| `output` | 輸出的副檔名（小寫，不含開頭的 `.`） |
| `sync`   | 同步模式                 |

Three arguments will be passed into the render function:

| Argument   | 描述                                                  |
| ---------- | --------------------------------------------------- |
| `data`     | 包含兩個屬性：檔案路徑 `path` 和檔案內容 `text`。 `path` 不一定存在。      |
| `option`   | 選項                                                  |
| `callback` | Callback function of two parameters `err`, `value`. |

## 範例

### 非同步模式

```js
var stylus = require("stylus");

// Callback
hexo.extend.renderer.register(
  "styl",
  "css",
  function (data, options, callback) {
    stylus(data.text).set("filename", data.path).render(callback);
  },
);

// Promise
hexo.extend.renderer.register("styl", "css", function (data, options) {
  return new Promise(function (resolve, reject) {
    resolve("test");
  });
});
```

### 同步模式

```js
var ejs = require("ejs");

hexo.extend.renderer.register(
  "ejs",
  "html",
  function (data, options) {
    options.filename = data.path;
    return ejs.render(data.text, options);
  },
  true,
);
```

### Disable Nunjucks tags

Nunjucks tags `{{ }}` or `{% %}` (utilized by [tag plugin](/docs/tag-plugins)) are processed by default, to disable:

```js
function lessFn(data, options) {
  // do something
}

lessFn.disableNunjucks = true;

hexo.extend.renderer.register("less", "css", lessFn);
```
