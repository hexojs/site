---
title: 主題
---

`hexo.theme` 除了繼承 [盒子](box.html) 外，還身兼儲存模板的功能。

## Get a View

```js
hexo.theme.getView(path);
```

## Set a View

```js
hexo.theme.setView(path, data);
```

## Remove a View

```js
hexo.theme.removeView(path);
```

## View

Views have two methods: `render` and `renderSync`. These two methods are identical, but the former is asynchronous and the latter is synchronous. So for the sake of simplicity, we will only discuss `render` here.

```js
var view = hexo.theme.getView("layout.swig");

view.render({ foo: 1, bar: 2 }).then(function (result) {
  // ...
});
```

您可在 `render` 方法傳入選項作為參數，`render` 方法會先使用相應的渲染引擎進行處理，並載入 [輔助函數](helper.html)，渲染完成後，會試著尋找佈局（layout）是否存在，當 `layout` 設為 `false` 或不存在時則會直接回傳渲染結果。 When rendering is complete, it will try to find whether a layout exists. If `layout` is `false` or if it doesn't exist, the result will be returned directly.
