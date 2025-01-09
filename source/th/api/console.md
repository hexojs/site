---
title: Console
---

console เป็นสะพานระหว่าง Hexo และผู้ใช้ของมัน และ console บันทึกและอธิบายคำสั่ง console ที่มีอยู่ It registers and describes the available console commands.

## Synopsis

```js
hexo.extend.console.register(name, desc, options, function (args) {
  // ...
});
```

| Argument  | Description |
| --------- | ----------- |
| `name`    | Name        |
| `desc`    | Description |
| `options` | Options     |

An argument `args` will be passed into the function. This is the argument that users type into the terminal. It's parsed by [Minimist][].

## Options

### usage

วิธีการใช้งานของคำสั่ง console ยกตัวอย่างเช่น For example:

```js
{
  usage: "[layout] <title>";
}
// hexo new [layout] <title>
```

### arguments

คำอธิบายทุก argument ของคำสั่ง console ยกตัวอย่างเช่น For example:

```js
{
  arguments: [
    { name: "layout", desc: "Post layout" },
    { name: "title", desc: "Post title" },
  ];
}
```

### options

คำอธิบายทุกตัวเลือกของคำสั่ง console ยกตัวอย่างเช่น For example:

```js
{
  options: [{ name: "-r, --replace", desc: "Replace existing files" }];
}
```

### desc

ข้อมูลเพิ่มเติมสำหรับคำสั่ง console

## Example

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
