---
title: レンダラー
---
レンダラーは、コンテンツをレンダリングするために使用されます。

## 概要

``` js
hexo.extend.renderer.register(name, output, function(data, options){
  // ...
}, sync);
```

引数 | 説明
--- | ---
`name` | 入力ファイルの拡張子（小文字、先頭の`.`なし）
`output` | 出力ファイルの拡張子（小文字、先頭の`.`なし）
`sync` | 同期モード

レンダリング関数には3つの引数が渡されます:

引数 | 説明
--- | ---
`data` | ファイルパス`path`とファイルコンテンツ`text`の2つの属性を含みます。`path`が必ずしも存在するわけではありません。
`option` | オプション
`callback` | `err`, `value`の2つのパラメータを持つコールバック関数。

## 例

### 非同期モード

``` js
var stylus = require('stylus');

// Callback
hexo.extend.renderer.register('styl', 'css', function(data, options, callback){
  stylus(data.text).set('filename', data.path).render(callback);
});

// Promise
hexo.extend.renderer.register('styl', 'css', function(data, options){
  return new Promise(function(resolve, reject){
    resolve('test');
  });
});
```

### 同期モード

``` js
var ejs = require('ejs');

hexo.extend.renderer.register('ejs', 'html', function(data, options){
  options.filename = data.path;
  return ejs.render(data.text, options);
}, true);
```

### Nunjucksタグを無効にする

Nunjucksタグ`{{ }}`や`{% %}`（[タグプラグイン](/docs/tag-plugins)で使用される）はデフォルトで処理されますが、無効にするには:

``` js
function lessFn(data, options) {
  // do something
}

lessFn.disableNunjucks = true

hexo.extend.renderer.register('less', 'css', lessFn);
```
