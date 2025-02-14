---
title: 主题
---

`hexo.theme` 除了继承 [Box](box.html) 外，还具有存储模板的功能。

## 获取视图

```js
hexo.theme.getView(path);
```

## 设置视图

```js
hexo.theme.setView(path, data);
```

## 移除视图

```js
hexo.theme.removeView(path);
```

## 视图

模板本身有两个方法可供使用：`render` 和 `renderSync`。 这两种方法是相同的，但是前者是异步的，后者是同步的。 所以为了简洁起见，我们将只在这里讨论 `render`。

```js
var view = hexo.theme.getView("layout.swig");

view.render({ foo: 1, bar: 2 }).then(function (result) {
  // ...
});
```

您可以以向 `render` 方法传入对象作为参数，`render` 方法会先使用对应的渲染引擎进行解析，并加载 [辅助函数](helper.html)。 当渲染完成时，它将尝试查找布局是否存在。 如果 `layout` 为 `false` 或者如果它不存在，将直接返回结果。
