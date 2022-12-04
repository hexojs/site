---
title: Box
---
box เป็น container ที่ใช้มาจัดการไฟล์ภายใน folder เฉพาะ Hexo ใช้ box ที่แตกต่างกันสองตัว ซึ้งก็คือ `hexo.source` และ `hexo.theme` ตัวแรกใช้มาจัดการ folder `source` และตัวท่ีสองใช้มาจัดการ folder `theme`

## Files Loading

box สนับสนุนวิธีการโหลดไฟล์สองวิธี ซึ้งก็คือ `process` และ `watch`  วิธีตัว `process` จะโหลดไฟล์ทั้งหมดใน folder ส่วนวิธีตัว  `watch`
นอกจากจะมีการกระทำที่เหมือนวิธีตัว `process` แล้วแถมยังเฝ้าดูการเปลี่ยนแปลงของไฟล์ที่อยู่ใน folder นั้นด้วย

``` js
box.process().then(function(){
  // ...
});

box.watch().then(function(){
  // You can call box.unwatch() later to stop watching.
});
```

## Path Matching

box สนับสนุนวิธีหลายอย่างสำหรับ path matching คุณสามารถใช้ regExp function หรือ Express-style pattern string เวลาทำเรื่อง path mathching

``` plain
posts/:id => posts/89
posts/*path => posts/2015/title
```

สำหรับข้อมูลเพิ่มเติม สามารถดูได้ที่ [util.Pattern]

## Processors

processor เป็น element จำเป็นสำหรับ box และใช้มาจัดการไฟล์ คุณสามารถใช้ path matching  ที่กล่าวข้างบนมาจำกัดขอบแขดไฟล์ที่อยากจัดการจริงๆ คุณลงทะเบียน processor ตัวใหม่ได้ด้วยวิธี `addProcessor`

``` js
box.addProcessor('posts/:id', function(file){
  //
});
```

box ส่งเนื้อหาของไฟล์ที่ถูกคัดเลือกไปให้ processor ข้อมูลที่เกี่ยวกับปฎิบัติการนี้จะอ่านได้จาก `file` ที่เป็น argument ของ callback ได้

Attribute | Description
--- | ---
`source` | Full path of the file
`path` | Relative path to the box of the file
`type` | File type. The value can be `create`, `update`, `skip`, `delete`.
`params` | The information from path matching.

box ยังสนับสนุนวิธีหลายวิธีที่ให้ความสะดวกว่าคุณไม่ต้องทำ IO ของไฟล์ด้วยตนเอง

Method | Description
--- | ---
`read` | Read a file
`readSync` | Read a file synchronously
`stat` | Read the status of a file
`statSync` | Read the status of a file synchronously
`render` | Render a file
`renderSync` | Render a file synchronously

[util.Pattern]: https://github.com/hexojs/hexo-util#patternrule
