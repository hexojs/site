---
title: Box
---

Box is a container used for processing files in a specified folder. box เป็น container ที่ใช้มาจัดการไฟล์ภายใน folder เฉพาะ Hexo ใช้ box ที่แตกต่างกันสองตัว ซึ้งก็คือ `hexo.source` และ `hexo.theme` ตัวแรกใช้มาจัดการ folder `source` และตัวท่ีสองใช้มาจัดการ folder `theme` The former is used to process the `source` folder and the latter to process the `theme` folder.

## Files Loading

box สนับสนุนวิธีการโหลดไฟล์สองวิธี ซึ้งก็คือ `process` และ `watch` วิธีตัว `process` จะโหลดไฟล์ทั้งหมดใน folder ส่วนวิธีตัว `watch` นอกจากจะมีการกระทำที่เหมือนวิธีตัว `process` แล้วแถมยังเฝ้าดูการเปลี่ยนแปลงของไฟล์ที่อยู่ใน folder นั้นด้วย `process` loads all files in the folder. `watch` does the same, but also starts watching for file changes.

```js
box.process().then(function () {
  // ...
});

box.watch().then(function () {
  // You can call box.unwatch() later to stop watching.
});
```

## Path Matching

Box provides many ways for path matching. You can use a regular expression, a function or an Express-style pattern string. For example:

```plain
posts/:id => posts/89
posts/*path => posts/2015/title
```

สำหรับข้อมูลเพิ่มเติม สามารถดูได้ที่ [util.Pattern][]

## Processors

A processor is an essential element of Box and is used to process files. You can use path matching as described above to restrict what exactly the processor should process. Register a new processor with the `addProcessor` method.

```js
box.addProcessor("posts/:id", function (file) {
  //
});
```

Box passes the content of matched files to processors. box ส่งเนื้อหาของไฟล์ที่ถูกคัดเลือกไปให้ processor ข้อมูลที่เกี่ยวกับปฎิบัติการนี้จะอ่านได้จาก `file` ที่เป็น argument ของ callback ได้

| Attribute | Description                                                       |
| --------- | ----------------------------------------------------------------- |
| `source`  | Full path of the file                                             |
| `path`    | Relative path to the box of the file                              |
| `type`    | File type. The value can be `create`, `update`, `skip`, `delete`. |
| `params`  | The information from path matching.                               |

box ยังสนับสนุนวิธีหลายวิธีที่ให้ความสะดวกว่าคุณไม่ต้องทำ IO ของไฟล์ด้วยตนเอง

| Method       | Description                             |
| ------------ | --------------------------------------- |
| `read`       | Read a file                             |
| `readSync`   | Read a file synchronously               |
| `stat`       | Read the status of a file               |
| `statSync`   | Read the status of a file synchronously |
| `render`     | Render a file                           |
| `renderSync` | Render a file synchronously             |

[util.Pattern]: https://github.com/hexojs/hexo-util#patternrule
