---
title: 辅助函数（Helper）
---

辅助函数帮助您在模板中快速插入内容。 建议您把复杂的代码放在辅助函数而非模板中。

辅助函数不能从 `source` 的文件中访问。

## 概要

```js
hexo.extend.helper.register(name, function () {
  // ...
});
```

## 示例

```js
hexo.extend.helper.register("js", function (path) {
  return '<script src="' + path + '"></script>';
});
```

```js
<%- js('script.js') %>
// <script src="script.js"></script>
```

## 常见问题

### 自定义 helper 应该放在哪里？

请放在 `scripts/` 或 `themes/<yourtheme>/scripts/` 目录中。

### 如何在我的自定义 helper 中使用另外一个已经注册的 helper？

所有的辅助函数都在同一个上下文中执行。 例如，在一个自定义的辅助函数中使用 [`url_for()`](/zh-cn/docs/helpers#url-for)：

```js
hexo.extend.helper.register("lorem", function (path) {
  return '<script src="' + this.url_for(path) + '"></script>';
});
```

### 如何在另一个扩展（例如过滤器、注入器）中使用注册的helper？

`hexo.extend.helper.get` 会返回一个指定名字的 helper，但是你还需要一个 `bind(hexo)`，就像这样：

```js
const url_for = hexo.extend.helper.get("url_for").bind(hexo);
```
