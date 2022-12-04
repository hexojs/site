---
title: Server
---
## [hexo-server]

ด้วยการประกาศของ hexo 3   เซิร์ฟเวอร์ถูกย้ายออกมากจาก module หลัก คุณต้องการติดตั้ง [hexo-server] ก่อนการเริ่มใช้เซิร์ฟเวอร์

``` bash
$ npm install hexo-server --save
```

เมื่อติดตั้งเซิร์ฟเวอร์แล้ว รันคำสั่งต่อไปเพื่อเริ่มใช้เซิร์ฟเวอร์
เว็บไซต์ของคุณจะรันอยู่ท่ี `http://localhost:4000` by default
เมื่อเซิร์ฟเวอร์รันอยู่ hexo จะเฝ้าดูการเปลี่ยนแปลงของไฟล์และอัปเดทโดยอัตโนมัติ ดังนั้นจะไม่ต้องเปิดใหม่ด้วยตน

``` bash
$ hexo server
```

If you want to change the port or if you're encountering `EADDRINUSE` errors, use the `-p` option to set a different port.
ถ้าคุณอยากเปลี่ยน port หรือพบข้อผิดพลาดว่า `EADDRINUSE` ใช้ตัวเลือก `-p` ไปตั้งค่าเป็น port อื่น

``` bash
$ hexo server -p 5000
```

### Static Mode

ในโหมดคงที่  ระบบจะเฝ้าดูแต่ไฟล์ท่ีอยู่ใน folder `public` 
เท่านั้นและไม่เฝ้าดูไฟล์อื่นๆ คุณต้องรันคำสั่ง `hexo generate` 
ก่อนเปิดเซิร์ฟเวอร์ โหลดนี้ปกติใช้แต่ในกรณี production

``` bash
$ hexo server -s
```

### Custom IP

hexo รันเซิร์ฟเวอร์อยู่ท่ี `0.0.0.0` by default คุณสามารถเปลียนการตั้งค่า IP default นี้

``` bash
$ hexo server -i 192.168.1.1
```

## Pow

[Pow] เป็นเซร์ฟเวอร์ rack ท่ี zero-config สำหรับ mac

### Install

``` bash
$ curl get.pow.cx | sh
```

### Setup

symlink folder เข้า `~/.pow`

``` bash
$ cd ~/.pow
$ ln -s /path/to/myapp
```

เว็บไซต์ของคุณจะรันอยุ่ท่ี `http://myapp.test` URL นั้นจะอยู่บน symlink 
ท่ีตั้งขึ้นมา

[hexo-server]: https://github.com/hexojs/hexo-server
[Pow]: http://pow.cx/
