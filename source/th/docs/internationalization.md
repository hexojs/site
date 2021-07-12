---
title: Internationalization (i18n)
---
คุณสามารถใช้ internationalization มาโชว์ไซต์ของคุณด้วยภาษาต่างๆ ภาษา dafault 
ของไซต์นั้นแก้ไขได้ใน  `language` ของ `_config.yml` 
คุณยังตั้งค่าหลายภาษาและแก้ไขลำดับของภาษา default ได้เช่นกัน

``` yaml
language: zh-tw

language:
- zh-tw
- en
```

### Language Files

ไฟล์ของภาษาจะเป็นไฟล์ YAML หรือ JSON คุณต้องไลฟ์เหล่านี้อยู่ใน folder 
`language` ของธีม สำหรับข้อมูลเพิ่มเติมของไฟล์ภาษา ไปดูได้ท่ี [printf format](https://github.com/alexei/sprintf.js)

### Templates

คุณใช้ helper ของ `__` หรือ `_p` ใน template ได้เพื่อได้  string ท่ีแปลมาแล้ว
 ตัวแรกใช้ในกรณีทางการ ส่วนตัวหลังใช้ในกรณีท่ีมีหลาย string ยกตัวอย่างเช่น：

``` yaml en.yml
index:
  title: Home
  add: Add
  video:
    zero: No videos
    one: One video
    other: %d videos
```

``` js
<%= __('index.title') %>
// Home

<%= _p('index.video', 3) %>
// 3 videos
```

### Path

คุณสามารถตั้งค่าภาษาของเพจได้ใน front-matter หรือแก้ไขการตั้งค่า  `i18n_dir` 
ได้ใน `_config.yml` เพื่อ enable การเฝ้าดูไฟล์ของ hexo

``` yaml
i18n_dir: :lang
```

default value ของการตั้งค่า  `i18n_dir` คือ `:lang` ซึ่งหมายความว่า hexo 
จะสืบค้นภาษาท่ีอยู่ใน segment ตัวแรกของ URL ยกตัวอย่างเช่น：

``` plain
/index.html => en
/archives/index.html => en
/zh-tw/index.html => zh-tw
```

string นั้นจะมีผลได้ในแต่กรณีท่ีไลฟ์ภาษานั้นมีอยู่จริงๆ ดังนั้น `archives` ใน
 `/archives/index.html` (ตัวอย่างท่ีสอง) จะไม่เกิดผลในการตั้งค่าภาษาของเว็บไซต์
