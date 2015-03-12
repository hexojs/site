title: 渲染引擎（Renderer）
---
渲染引擎用於渲染內容。

## 概要

``` js
hexo.extend.renderer.register(name, output, function(data, options){
  // ...
}, sync);
```

參數 | 描述
--- | ---
`name` | 輸入的副檔名（小寫，不含開頭的 `.`）
`output` | 輸出的副檔名（小寫，不含開頭的 `.`）
`sync` | 同步模式

渲染函數中會傳入兩個參數：

參數 | 描述
--- | ---
`data` | 包含兩個屬性：檔案路徑 `path` 和檔案內容 `text`。`path` 不一定存在。
`option` | 選項

## 範例

### 非同步模式

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

### 同步模式

``` js
var ejs = require('ejs');

hexo.extend.renderer.register('ejs', 'html', function(data, options){
  options.filename = data.path;
  return ejs.render(data.text, options);
}, true);
```