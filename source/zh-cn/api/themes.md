---
title: 主题
---

`hexo.theme` 除了继承 [Box](box.html) 外，还具有存储模板的功能。

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

模板本身有两个方法可供使用：`render` 和 `renderSync`。 These two methods are identical, but the former is asynchronous and the latter is synchronous. So for the sake of simplicity, we will only discuss `render` here.

```js
var view = hexo.theme.getView("layout.swig");

view.render({ foo: 1, bar: 2 }).then(function (result) {
  // ...
});
```

您可以以向 `render` 方法传入对象作为参数，`render` 方法会先使用对应的渲染引擎进行解析，并加载 [辅助函数](helper.html)。 When rendering is complete, it will try to find whether a layout exists. If `layout` is `false` or if it doesn't exist, the result will be returned directly.
