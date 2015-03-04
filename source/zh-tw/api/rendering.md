title: 渲染
---
在 Hexo 中，有兩個方法可用於渲染檔案或字串，分別是非同步的 `hexo.render.render` 和同步的 `hexo.render.renderSync`，這兩個方法的使用方式十分類似，因此以下僅舉非同步的 `hexo.render.render` 為例。

## 渲染字串

在渲染字串時，您必須指定 `engine`，如此一來 Hexo 才知道該選擇哪個渲染引擎來渲染。

``` js
hexo.render.render({text: 'example', engine: 'swig'}).then(function(result){
  // ...
});
```

## 渲染檔案

在渲染檔案時，您無須指定 `engine`，Hexo 會自動從副檔名猜測所要使用的渲染引擎，當然您也可使用 `engine` 指定。

``` js
hexo.render.render({path: 'path/to/file.swig'}).then(function(result){
  // ...
});
```

## 渲染選項

在渲染時，您可在第二個參數中代入選項。

``` js
hexo.render.render({text: ''}, {foo: 'foo'}).then(function(result){
  // ...
});
```

## after_render 過濾器

在渲染完成後，Hexo 會自動執行相對應的 `after_render` 過濾器，舉例來說，我們可透過這個功能實作 JavaScript 壓縮。

``` js
var UglifyJS = require('uglify-js');

hexo.extend.filter.register('after_render:js', function(str, data){
  var result = UglifyJS.minify(str);
  return result.code;
});
```

## 檢查檔案是否可被渲染

您可透過 `isRenderable` 或 `isRenderableSync` 兩個方法檢查檔案路徑是否可被渲染，只有在相對應的渲染器（renderer）已註冊的情況下才會返回 true。

``` js
hexo.render.isRenderable('layout.swig') // true
hexo.render.isRenderable('image.png') // false
```

## 取得檔案的輸出副檔名

您可透過 `getOutput` 方法取得檔案路徑輸出後的副檔名，如果檔案無法渲染，則會返回空字串。

``` js
hexo.render.getOutput('layout.swig') // html
hexo.render.getOutput('image.png') // '''
```