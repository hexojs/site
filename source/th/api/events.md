---
title: Events
---

hexo สืบทอดจาก [EventEmitter][] มันใช้วิธี `on` มาคอยฟัง event ที่ hexo ส่งออกไป Use the `on` method to listen for events emitted by Hexo, and use the `emit` method to emit events. For more information, refer to the Node.js API documentation.

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

Emitted after a new post has been created. ส่งออกไปหลังการสร้างโพสต์ใหม่ event นี้ส่ง data โพสต์กลับ

```js
hexo.on("new", function (post) {
  //
});
```

| Data           | Description                |
| -------------- | -------------------------- |
| `post.path`    | Full path of the post file |
| `post.content` | Content of the post file   |

### processBefore

Emitted before processing begins. This event returns a path representing the root directory of the box.

### processAfter

Emitted after processing finishes. ส่งออกไปก่อนการเกิดขึ้นของ processing event นี้ส่งกลับ path ท่ีบ่งบอก root directory ของ box

### ready

ส่งออกไปหลังการจบลงของ initialization

[EventEmitter]: https://nodejs.org/dist/latest/docs/api/events.html
