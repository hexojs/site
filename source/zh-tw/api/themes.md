title: 主題
---
`hexo.theme` 除了繼承 [盒子](box.html) 外，還身兼儲存模板的功能。

## 取得模板

``` js
hexo.theme.getView(path);
```

## 設定模板

``` js
hexo.theme.setView(path, data);
```

## 移除模板

``` js
hexo.theme.removeView(path);
```

## 模板

模板本身有兩個方法可供使用：`render` 和 `renderSync`，兩者功能一樣，只是前者為非同步函數，而後者為同步函數，因此以下僅以 `render` 舉例。

``` js
var view = hexo.theme.getView('layout.swig');

view.render({foo: 1, bar: 2}).then(function(result){
  // ...
});
```

您可在 `render` 方法傳入選項作為參數，`render` 方法會先使用相應的渲染引擎進行處理，並載入 [輔助函數](helper.html)，渲染完成後，會試著尋找佈局（layout）是否存在，當 `layout` 設為 `false` 或不存在時則會直接回傳渲染結果。