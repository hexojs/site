---
title: Filter
---

A filter is used to modify some specified data. filter ใช้มาเป็นการแก้ไขข้อมูลเฉพาะ hexo ส่งข้อมูลเข้า filter ตามลำดับและ filter จะแก้ไขข้อมูลตามลำดับ ความคิดนี้มาจาก [WordPress](http://codex.wordpress.org/Plugin_API#Filters) This concept was borrowed from [WordPress](http://codex.wordpress.org/Plugin_API#Filters).

## Synopsis

```js
hexo.extend.filter.register(type, function() {
  // User configuration
  const { config } = this;
  if (config.external_link.enable) // do something...

  // Theme configuration
  const { config: themeCfg } = this.theme;
  if (themeCfg.fancybox) // do something...

}, priority);
```

You can define the `priority`. ผู้ใช้สามารถตั้งค่า `priority` ได้ ค่าของ `priority` ยิ่งต่ำหมายถึงว่าจะ execute ยิ่งก่อนตัวอื่น ส่วนค่า default ของ `priority` คือ 10. The default `priority` is 10. We recommend using user-configurable priority value that user can specify in the config, e.g. `hexo.config.your_plugin.priority`.

## Execute Filters

```js
hexo.extend.filter.exec(type, data, options);
hexo.extend.filter.execSync(type, data, options);
```

| Option    | Description                       |
| --------- | --------------------------------- |
| `context` | Context                           |
| `args`    | Arguments. This must be an array. |

The first argument passed into each filter is `data`. argument ตัวแรกคือ `data` การแก้ไขค่าของ`data` จะเป็นการส่ง `data` เข้า filter และส่งค่าใหม่กลับมา ถ้าไม่มีข้อมูลส่งกลับมา ค่าของ `data` จะคงอยู่เหมือนเดิม ผู้ใช้สามารถใช้ `args` มาชี้ถึง argument อื่นๆใน filter ยกตัวอย่างเช่น: If nothing is returned, the data remains unmodified. You can even use `args` to specify other arguments in filters. For example:

```js
hexo.extend.filter.register("test", function (data, arg1, arg2) {
  // data === 'some data'
  // arg1 === 'foo'
  // arg2 === 'bar'

  return "something";
});

hexo.extend.filter.register("test", function (data, arg1, arg2) {
  // data === 'something'
});

hexo.extend.filter.exec("test", "some data", {
  args: ["foo", "bar"],
});
```

ผู้ใช้สามารถใช้วิธีต่อไปเพื่อ execute filter:

```js
hexo.execFilter(type, data, options);
hexo.execFilterSync(type, data, options);
```

## Unregister Filters

```js
hexo.extend.filter.unregister(type, filter);
```

**Example**

```js
// Unregister a filter which is registered with named function

const filterFn = (data) => {
  data = "something";
  return data;
};
hexo.extend.filter.register("example", filterFn);

hexo.extend.filter.unregister("example", filterFn);
```

```js
// Unregister a filter which is registered with commonjs module

hexo.extend.filter.register("example", require("path/to/filter"));

hexo.extend.filter.unregister("example", require("path/to/filter"));
```

## Filter List

ต่อไปเป็นตารางของ filter ท่ีใช้ใน hexo

### before_post_render

Executed before a post is rendered. Refer to [post rendering](posts.html#Render) to learn the execution steps.

ยกตัวอย่างเช่น การเปลี่ยนตัวอักษรเป็นตัวเล็ก:

```js
hexo.extend.filter.register("before_post_render", function (data) {
  data.title = data.title.toLowerCase();
  return data;
});
```

### after_post_render

Executed after a post is rendered. execute หลังการ render ของโพสต์ สำหรับขั้นตอนของ execution ไปดูท่ี [post rendering](posts.html#Render) ได้

ยกตัวอย่างเช่น แทน `@username` ด้วยลิงค์ท่ีชึ้ไปถึงโปรไฟล์ของ Twitter

```js
hexo.extend.filter.register("after_post_render", function (data) {
  data.content = data.content.replace(
    /@(\d+)/,
    '<a href="http://twitter.com/$1">#$1</a>',
  );
  return data;
});
```

### before_exit

execute ก่อนการท่ีจะจบการใช้โปรแกรม hexo -- รันหลังการเรียก `hexo.exit`

```js
hexo.extend.filter.register("before_exit", function () {
  // ...
});
```

### before_generate

execute ก่อนการเริ่มต้นของ generation

```js
hexo.extend.filter.register("before_generate", function () {
  // ...
});
```

### after_generate

execute หลังการเสร็จสิ้นของ generation

```js
hexo.extend.filter.register("after_generate", function () {
  // ...
});
```

### template_locals

แก้ไข [local variables](../docs/variables.html) ใน template

ยกตัวอย่างเช่น เพิ่มเวลาปัจจุบันไปถึง local variable ของ template

```js
hexo.extend.filter.register("template_locals", function (locals) {
  locals.now = Date.now();
  return locals;
});
```

### after_init

execute หลัง initialization ของ hexo -- รันหลังการเสร็จสิ้นของ `hexo.init`

```js
hexo.extend.filter.register("after_init", function () {
  // ...
});
```

### new_post_path

execute เพิ่อให้ path แก่โพสต์ใหม่เมื่อการสร้่างโพสต์ใหม่มา

```js
hexo.extend.filter.register("new_post_path", function (data, replace) {
  // ...
});
```

### post_permalink

Used to determine the permalink of posts.

```js
hexo.extend.filter.register("post_permalink", function (data) {
  // ...
});
```

### after_render

Executed after rendering finishes. execute หลังการเสร็จสิ้นของ rendering สำหรับข้อมูลเพิ่มเติม ไปดูได้ที่ [rendering](rendering.html#after_render_Filters)

### after_clean

execute หลัง generation ของไฟล์ และ cache จะลบออกด้วยคำสั่ง `hexo clean`

```js
hexo.extend.filter.register("after_clean", function () {
  // remove some other temporary files
});
```

### server_middleware

Add middleware to the server. เพิ่ม middleware ไปถึง server `app` เป็น instance ของ [Connect][]

ยกตัวอย่างเช่น เพิ่ม `X-Powered-By: Hexo` ไปให้ response header:

```js
hexo.extend.filter.register("server_middleware", function (app) {
  app.use(function (req, res, next) {
    res.setHeader("X-Powered-By", "Hexo");
    next();
  });
});
```

[Connect]: https://github.com/senchalabs/connect
