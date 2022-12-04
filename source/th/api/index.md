---
title: API
---

 บทความนี้แนะนำข้อมูลเกี่ยวกับ API และมีส่วนช่วยต่อผู้ใช้ท่ีอยากปรับ source code ของ hexo  หรือเขียนปลั๊กอินใหม่ ถ้าคุณสนใจวิธีการใช้้พื้นฐานของ hexo กรุณาไปอ่น [docs](../docs) แทน

บทความนี้สำหรับ hexo 3 หรือเวอร์ชั่นใหม่กว่านี้เท่านั้น

## Initialize

ขั้นตอนแรกคือการสร้าง instance ของ hexo.  instance
จะประกอบด้วยสองส่วน:`base_dir` ซึ่งเป็น root directory ของเว็บไซต์ และ object ท่ีมี initialization options  ขั้นตอนท่ีสองใช้วิธี `init`เพื่อ initialize instance  ด้วยวิธีนี้ hexo จะโหลด configuration และปลั๊กอินของมัน

``` js
var Hexo = require('hexo');
var hexo = new Hexo(process.cwd(), {});

hexo.init().then(function(){
  // ...
});
```

Option | Description | Default
--- | --- | ---
`debug` | Enable debug mode. Display debug messages in the terminal and save `debug.log` in the root directory. | `false`
`safe` | Enable safe mode. Don't load any plugins. | `false`
`silent` | Enable silent mode. Don't display any messages in the terminal. | `false`
`config` | Specify the path of the configuration file. | `_config.yml`
`draft` / `drafts`| Enable to add drafts to the posts list.<br> example: when you use `hexo.locals.get('posts')` | `render_drafts` of _config.yml

## Load Files

hexo โหลดไฟล์ด้วยสองวิธี: `load` และ `watch` .  วิธี `load` ใช้มาเพื่อโหลดไฟล์ใน folder `source` และ data ของธีม ส่วนวิธี `watch` ทำเรื่องเดียวกันกับวิธี  `load` แต่จะเริ่มบันทึกการเปลี่ยนแปลงของไฟล์อย่างต่อเนื่อง

ทั้งสองวิธีนี้จะโหลด list ของไฟล์และส่งไฟล์เข้า processor ท่ีเกี่ยวข้อง หลังการ process ของไฟล์ทั้งหมด จะมี generator มาสร้าง route

``` js
hexo.load().then(function(){
  // ...
});

hexo.watch().then(function(){
  // You can call hexo.unwatch() later to stop watching.
});
```

## Execute Commands

ด้วยวิธี `call` ผู้ใช้สามารถเรียกคำสั่ง console สำหรับ instance ของ hexo การเรียกคำสั่ง console นี้ประกอบด้วยสอง argument: ชื่อคำสั่ง console และ argument ของ option  คำสั่ง console ที่แตกต่างกันนั้นจะมี option ท่ีแตกต่างกัน

``` js
hexo.call('generate', {}).then(function(){
  // ...
});
```

``` js
hexo.call('list', { _: ['post'] }).then(function() {
  // ...
})
```

## Exit

ด้วยวิธี `exit` คุณสามารถจบคำสั่ง console อย่างสง่างามและทำสิ่งสำคัญให้ เช่นการบันทึก database

``` js
hexo.call('generate').then(function(){
  return hexo.exit();
}).catch(function(err){
  return hexo.exit(err);
});
```
