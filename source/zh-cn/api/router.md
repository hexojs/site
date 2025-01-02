---
title: 路由
---

路由存储了网站中所用到的所有路径。

## 获取路径

`get` 方法会传回一个 [Stream][]。 例如，把该路径的数据存储到某个指定位置：

```js
var data = hexo.route.get("index.html");
var dest = fs.createWriteStream("somewhere");

data.pipe(dest);
```

## 设置路径

您可以在 `set` 方法中使用字符串、[Buffer][] 或函数，如下：

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

您也可以设置一个布尔值来声明路径是否被修改。 这可以加快文件生成，因为它允许忽略未修改的文件。

```js
hexo.route.set("index.html", {
  data: "index",
  modified: false,
});

// hexo.route.isModified('index.html') => false
```

## 移除路径

```js
hexo.route.remove("index.html");
```

## 获取路由列表

```js
hexo.route.list();
```

## 格式化路径

`format` 方法可将字符串转为合法的路径。

```js
hexo.route.format("archives/");
// archives/index.html
```

[Stream]: http://nodejs.org/api/stream.html
[Buffer]: http://nodejs.org/api/buffer.html
