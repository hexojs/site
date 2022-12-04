---
title: Migration
---
## RSS

ขั้นแรก ติดตั้งปลั๊กอิน `hexo-migrator-rss`

``` bash
$ npm install hexo-migrator-rss --save
```

เมื่อเสร็จการติดตั้งปลั๊กอินแล้วรันคำสั่งต่อไปเพื่อย้ายโพสต์ทั้งหมดจาก RSS   
 `source` นั้นเป็น path ของไฟล์หรือ URL ได้

``` bash
$ hexo migrate rss <source>
```

## Jekyll

ย้ายไฟล์ทั้งหมดใน folder Jekyll  `_posts` ไป folder  `source/_posts`
แก้ไขการตั้งค่า `new_post_name` ใน `_config.yml`:

``` yaml
new_post_name: :year-:month-:day-:title.md
```

## Octopress

ย้ายไฟล์ทั้งหมดใน folder `source/_posts` ของ Octopress ไปถึง  `source/_posts`
แก้ไขการตั้งค่า `new_post_name` ใน `_config.yml`:

``` yaml
new_post_name: :year-:month-:day-:title.md
```

## WordPress

ขั้นแรก ติดตั้งปลั๊กอิน `hexo-migrator-wordpress`

``` bash
$ npm install hexo-migrator-wordpress --save
```

นำไซตื WordPress ของคุณออกไปได้ด้วยการตั้งค่า "Tools" → "Export" →
"WordPress"  ใน dashboard ของ WordPress (สำหรับข้อมูลเพิ่มเติมไปดูที่ [WordPress support page](http://en.support.wordpress.com/export/))

แล้วรัน:

``` bash
$ hexo migrate wordpress <source>
```

`source`  เป็น  path ของไฟล์หรือ URL ของไฟล์ท่ี  WordPress ท่ีส่งออกมา

## Joomla

ขั้นแรก ติดตั้งปลั๊กอิน `hexo-migrator-joomla`

```bash
$ npm install hexo-migrator-joomla --save
```

นำออกบทความ Joomla ของคุณได้โดยใช้ component  [J2XML](http://extensions.joomla.org/extensions/migration-a-conversion/data-import-a-export/12816?qh=YToxOntpOjA7czo1OiJqMnhtbCI7fQ%3D%3D)

แล้วรัน:

```bash
$ hexo migrate joomla <source>
```

`source`  เป็น  path ของไฟล์หรือ URL ของไฟล์ท่ี  Joomla ท่ีส่งออกมา
