---
title: 渲染
---

在 Hexo 中，有兩個方法可用於渲染檔案或字串，分別是非同步的 `hexo.render.render` 和同步的 `hexo.render.renderSync`，這兩個方法的使用方式十分類似，因此以下僅舉非同步的 `hexo.render.render` 為例。 Unsurprisingly, the two methods are very similar so only the asynchronous `hexo.render.render` will be further discussed in the below paragraphs.

## 渲染字串

在渲染字串時，您必須指定 `engine`，如此一來 Hexo 才知道該選擇哪個渲染引擎來渲染。

```js
hexo.render.render({ text: "example", engine: "swig" }).then(function (result) {
  // ...
});
```

## 渲染檔案

在渲染檔案時，您無須指定 `engine`，Hexo 會自動從副檔名猜測所要使用的渲染引擎，當然您也可使用 `engine` 指定。 Of course, you are also allowed to explicitly define the `engine`.

```js
hexo.render.render({ path: "path/to/file.swig" }).then(function (result) {
  // ...
});
```

## 渲染選項

You can pass in an options object as the second argument.

```js
hexo.render.render({ text: "" }, { foo: "foo" }).then(function (result) {
  // ...
});
```

## after_render 過濾器

在渲染完成後，Hexo 會自動執行相對應的 `after_render` 過濾器，舉例來說，我們可透過這個功能實作 JavaScript 壓縮。 For example, we can use this feature to implement a JavaScript minifier.

```js
var UglifyJS = require("uglify-js");

hexo.extend.filter.register("after_render:js", function (str, data) {
  var result = UglifyJS.minify(str);
  return result.code;
});
```

## 檢查檔案是否可被渲染

您可透過 `isRenderable` 或 `isRenderableSync` 兩個方法檢查檔案路徑是否可被渲染，只有在相對應的渲染器（renderer）已註冊的情況下才會返回 true。 Only when a corresponding renderer has been registered will this method return true.

```js
hexo.render.isRenderable("layout.swig"); // true
hexo.render.isRenderable("image.png"); // false
```

## Get the Output Extension

Use the `getOutput` method to get the extension of the rendered output. If a file is not renderable, the method will return an empty string.

```js
hexo.render.getOutput("layout.swig"); // html
hexo.render.getOutput("image.png"); // '''
```

## Disable Nunjucks tags

If you are not using a [tag plugin](/docs/tag-plugins) and want to use `{{ }}` or `{% %}` in your post without using content [escaping](/docs/troubleshooting#Escape-Contents), you can disable processing of Nunjucks tag in existing renderer by:

```js
// following example only applies to '.md' file extension
// you may need to cover other extensions, e.g. '.markdown', '.mkd', etc
const renderer = hexo.render.renderer.get("md");
if (renderer) {
  renderer.disableNunjucks = true;
  hexo.extend.renderer.register("md", "html", renderer);
}
```
