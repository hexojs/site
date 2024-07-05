---
title: 渲染
---

在 Hexo 中，有两个方法可用于渲染文件或字符串，分别是异步的 `hexo.render.render` 和同步的 `hexo.render.renderSync`，这两个方法的使用方式十分类似，因此下文仅以异步的 `hexo.render.render` 为例。 Unsurprisingly, the two methods are very similar so only the asynchronous `hexo.render.render` will be further discussed in the below paragraphs.

## 渲染字符串

在渲染字符串时，您必须指定 `engine`，如此一来 Hexo 才知道该使用哪个渲染引擎来渲染。

```js
hexo.render.render({ text: "example", engine: "swig" }).then(function (result) {
  // ...
});
});
```

## 渲染文件

在渲染文件时，您无须指定 `engine`，Hexo 会自动根据扩展名猜测所要使用的渲染引擎，当然您也可以使用 `engine` 指定。 Of course, you are also allowed to explicitly define the `engine`.

```js
hexo.render.render({ path: "path/to/file.swig" }).then(function (result) {
  // ...
});
});
```

## 渲染选项

You can pass in an options object as the second argument.

```js
hexo.render.render({ text: "" }, { foo: "foo" }).then(function (result) {
  // ...
});
});
```

## after_render 过滤器

在渲染完成后，Hexo 会自动执行相对应的 `after_render` 过滤器，举例来说，我们可以通过这个功能实现 JavaScript 的压缩。 For example, we can use this feature to implement a JavaScript minifier.

```js
var UglifyJS = require("uglify-js");

hexo.extend.filter.register("after_render:js", function (str, data) {
  var result = UglifyJS.minify(str);
  return result.code;
});
```

## 检查文件是否可被渲染

您可以通过 `isRenderable` 或 `isRenderableSync` 两个方法检查文件路径是否可以被渲染，只有在相对应的渲染器（renderer）已注册的情况下才会返回 true。 Only when a corresponding renderer has been registered will this method return true.

```js
hexo.render.isRenderable("layout.swig"); // true
hexo.render.isRenderable("image.png"); // false
```

## 获取文件的输出扩展名

Use the `getOutput` method to get the extension of the rendered output. If a file is not renderable, the method will return an empty string.

```js
hexo.render.getOutput("layout.swig"); // html
hexo.render.getOutput("image.png"); // '''
```

## 禁用 Nunjucks 标签

如果你没有使用 [标签插件](/zh-cn/docs/tag-plugins) 并且想要在你的文章中使用 `{{ }}` 或 `{% %}` 而不使用 [转义](/zh-cn/docs/troubleshooting#转义（Escape）内容), 你可以通过以下方式在现有的渲染器中禁用对 Nunjucks 标签的处理：

```js
// 以下示例仅适用于".md "文件扩展名
// 您可能需要覆盖其他扩展名，例如'.markdown'、'.mkd'等
const renderer = hexo.render.renderer.get("md");
if (renderer) {
  renderer.disableNunjucks = true;
  hexo.extend.renderer.register("md", "html", renderer);
}
```
