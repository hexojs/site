---
title: ルーター
---

ルーターはサイトで使用されるすべてのパスを保存します。

## パスの取得

`get`メソッドは[Stream][]を返却します。 たとえば、指定された宛先にパスデータを保存するには:

```js
var data = hexo.route.get("index.html");
var dest = fs.createWriteStream("somewhere");

data.pipe(dest);
```

## パスの設定

`set`メソッドは文字列、[Buffer][]、または関数を引数に取ります。

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

パスが変更されたかどうかのブール値も設定できます。 これにより、変更されていないファイルを無視することでファイル生成を高速化できます。

```js
hexo.route.set("index.html", {
  data: "index",
  modified: false,
});

// hexo.route.isModified('index.html') => false
```

## パスの削除

```js
hexo.route.remove("index.html");
```

## ルートのリストを取得

```js
hexo.route.list();
```

## パスのフォーマット

`format`メソッドは文字列を有効なパスに変換します。

```js
hexo.route.format("archives/");
// archives/index.html
```

[Stream]: http://nodejs.org/api/stream.html
[Buffer]: http://nodejs.org/api/buffer.html
