---
title: Events
---

hexo  สืบทอดจาก [EventEmitter]  มันใช้วิธี `on` มาคอยฟัง event ที่ hexo
ส่งออกไป

### deployBefore

ส่งออกไปก่อนการเกิดขึ้นของ deployment

### deployAfter

ส่งออกไปหลังการจบลงของ deployment

### exit

ส่งออกไปก่อนการจบการใช้ hexo

### generateBefore

ส่งออกไปก่อนการเกิดขึ้นของ generation

### generateAfter

ส่งออกไปหลังการจบลงของ generation

### new

ส่งออกไปหลังการสร้างโพสต์ใหม่ event นี้ส่ง data โพสต์กลับ

``` js
hexo.on('new', function(post){
  //
});
```

Data | Description
--- | ---
`post.path` | Full path of the post file
`post.content` | Content of the post file

### processBefore

ส่งออกไปก่อนการเกิดขึ้นของ processing event นี้ส่งกลับ path ท่ีบ่งบอก  root
directory ของ box

### processAfter

ส่งออกไปหลังการจบลงของ processing   event นี้ส่งกลับ path ท่ีบ่งบอก  root directory ของ box

### ready

ส่งออกไปหลังการจบลงของ initialization

[EventEmitter]: https://nodejs.org/dist/latest/docs/api/events.html
