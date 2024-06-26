---
title: 控制台（Console）
---

控制台是 Hexo 与开发者之间沟通的桥梁。它注册并描述了可用的控制台命令。

## 概要

```js
hexo.extend.console.register(name, desc, options, function (args) {
  // ...
});
```

| 参数      | 描述 |
| --------- | ---- |
| `name`    | 名称 |
| `desc`    | 描述 |
| `options` | 选项 |

在函数中会传入 `args` 参数，此参数是使用者在终端中所传入的参数，是一个经 [Minimist] 解析的对象。

## 选项

### 用法

控制台的操作方法，例如：

```js
{
  usage: "[layout] <title>";
}
// hexo new [layout] <title>
```

### 参数

控制台各个参数的说明，例如：

```js
{
  arguments: [
    { name: "layout", desc: "Post layout" },
    { name: "title", desc: "Post title" },
  ];
}
```

### 选项

控制台的各个选项的说明，例如：

```js
{
  options: [{ name: "-r, --replace", desc: "Replace existing files" }];
}
```

### 描述

关于控制台命令的更详细的信息。

## 示例

```js
hexo.extend.console.register(
  "config",
  "Display configuration",
  function (args) {
    console.log(hexo.config);
  },
);
```

[Minimist]: https://github.com/minimistjs/minimist
