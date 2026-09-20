---
title: 路由
---

路由儲存了網站中所用到的所有路徑。

## 取得路徑

`get` 方法會傳回一個 [Stream][]，例如把該路徑的資料儲存到某個指定位置。 For example, to save the path data to a specified destination:

```js
var data = hexo.route.get("index.html");
var dest = fs.createWriteStream("somewhere");

data.pipe(dest);
```

## 設定路徑

您可在 `set` 方法中使用字串、[Buffer][] 或函數，如下：

```js
// String
hexo.route.set("index.html", "index");

// Buffer
hexo.route.set("index.html", new Buffer("index"));

// Function (Promise)
hexo.route.set("index.html", function () {
  return new Promise(function (resolve, reject) {
    resolve("index");
  });
});

// Function (Callback)
hexo.route.set("index.html", function (callback) {
  callback(null, "index");
});
```

You can also set a boolean for whether a path has been modified or not. This can speed up file generation as it allows for ignoring the unmodified files.

```js
hexo.route.set("index.html", {
  data: "index",
  modified: false,
});

// hexo.route.isModified('index.html') => false
```

## 移除路徑

```js
hexo.route.remove("index.html");
```

## Get the List of Routes

```js
hexo.route.list();
```

## 格式化路徑

`format` 方法可將字串轉為合法的路徑。

```js
hexo.route.format("archives/");
// archives/index.html
```

[Stream]: http://nodejs.org/api/stream.html
[Buffer]: http://nodejs.org/api/buffer.html
