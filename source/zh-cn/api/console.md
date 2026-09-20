---
title: 控制台（Console）
---

控制台是 Hexo 与开发者之间沟通的桥梁。 它注册并描述了可用的控制台命令。

## 概要

```js
hexo.extend.console.register(name, desc, options, function (args) {
  // ...
});
```

| 参数        | 描述 |
| --------- | -- |
| `name`    | 名称 |
| `desc`    | 描述 |
| `options` | 选项 |

`args` 参数会被传递到 `function` 中。 这是用户输入终端的参数。 它由 [Minimist][] 解析。

## 选项

### 用法

控制台命令的用法。 例如：

```js
{
  usage: "[layout] <title>";
}
// hexo new [layout] <title>
```

### arguments

控制台各个参数的说明。 例如：

```js
{
  arguments: [
    { name: "layout", desc: "Post layout" },
    { name: "title", desc: "Post title" },
  ];
}
```

### options

控制台的各个选项的说明。 例如：

```js
{
  options: [{ name: "-r, --replace", desc: "Replace existing files" }];
}
```

### desc

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
