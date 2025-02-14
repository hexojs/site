---
title: 控制台（Console）
---

控制台是 Hexo 與使用者之間溝通的橋樑。 It registers and describes the available console commands.

## 概要

```js
hexo.extend.console.register(name, desc, options, function (args) {
  // ...
});
```

| Argument  | 描述 |
| --------- | -- |
| `name`    | 名稱 |
| `desc`    | 描述 |
| `options` | 選項 |

An argument `args` will be passed into the function. This is the argument that users type into the terminal. It's parsed by [Minimist][].

## 選項

### 用法

The usage of a console command. For example:

```js
{
  usage: "[layout] <title>";
}
// hexo new [layout] <title>
```

### arguments

The description of each argument of a console command. For example:

```js
{
  arguments: [
    { name: "layout", desc: "Post layout" },
    { name: "title", desc: "Post title" },
  ];
}
```

### options

The description of each option of a console command. For example:

```js
{
  options: [{ name: "-r, --replace", desc: "Replace existing files" }];
}
```

### desc

More detailed information about a console command.

## 範例

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
