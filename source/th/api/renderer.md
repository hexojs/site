---
title: Renderer
---

renderer ใช้มา render เนื้อหา

## Synopsis

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

| Argument | Description                                                 |
| -------- | ----------------------------------------------------------- |
| `name`   | Input filename extension (lower case, without leading `.`)  |
| `output` | Output filename extension (lower case, without leading `.`) |
| `sync`   | Sync mode                                                   |

argument สองตัวนั้นจะส่งเข้า render function:

| Argument | Description                                                                                       |
| -------- | ------------------------------------------------------------------------------------------------- |
| `data`   | Include two attributes: file path `path` and file content `text`. `path` won't necessarily exist. |
| `option` | Options                                                                                           |

## ตัวอย่าง

### โหมด async

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

### โหมด sync

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
