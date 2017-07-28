title: 主题
---
`hexo.theme` 除了继承 [Box](box.html) 外，还具有存储模板的功能。

## 获取模板

``` js
hexo.theme.getView(path);
```

## 设置模板

``` js
hexo.theme.setView(path, data);
```

## 移除模板

``` js
hexo.theme.removeView(path);
```

## 模板

模板本身有两个方法可供使用：`render` 和 `renderSync`。两者功能一样，只是前者为非同步函数，而后者为同步函數，因此仅以 `render` 演示调用方法。

``` js
var view = hexo.theme.getView('layout.swig');

view.render({foo: 1, bar: 2}).then(function(result){
  // ...
});
```

您可以以向 `render` 方法传入对象作为参数，`render` 方法会先使用对应的渲染引擎进行解析，并加载 [辅助函数](helper.html)。渲染完成后，会检测布局（layout）是否存在，当 `layout` 设为 `false` 或不存在时，就会直接返回渲染结果。