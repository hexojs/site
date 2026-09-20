---
title: Setup
---

{% youtube 0m2HnATkHOk %}

เมื่อติดตั้ง hexo แล้ว รันคำสั่งต่อไปเพื่อ initialize hexo ใน `<folder>`

```bash
$ hexo init <folder>
$ cd <folder>
$ npm install
```

เมื่อเสร็จการ initialization โครงสร้าง folder ของ project คุณจะเป็นอย่างนี้:

```plain
.
├── _config.yml
├── package.json
├── scaffolds
├── source
|   ├── _drafts
|   └── _posts
└── themes
```

### \_config.yml

ไฟล์ของไซต์ [configuration](configuration.html) คุณสามารถตั้งค่ามากขึ้น ณ ท่ีนี้ You can configure most settings here.

### package.json

ข้อมูลของแอป. renderer ของ [EJS](https://ejs.co/) [Stylus](http://learnboost.github.io/stylus/) และ [Markdown](http://daringfireball.net/projects/markdown/) จะติดตั้ง by default คุณสามารถลยออก renderer พวกนี้ได้ในเวลาภายหลัง If you want, you can uninstall them later.

```json package.json
{
  "name": "hexo-site",
  "version": "0.0.0",
  "private": true,
  "hexo": {
    "version": ""
  },
  "dependencies": {
    "hexo": "^7.0.0",
    "hexo-generator-archive": "^2.0.0",
    "hexo-generator-category": "^2.0.0",
    "hexo-generator-index": "^3.0.0",
    "hexo-generator-tag": "^2.0.0",
    "hexo-renderer-ejs": "^2.0.0",
    "hexo-renderer-stylus": "^3.0.0",
    "hexo-renderer-marked": "^6.0.0",
    "hexo-server": "^3.0.0",
    "hexo-theme-landscape": "^1.0.0"
  }
}
```

### scaffolds

[Scaffold](writing.html#Scaffolds) folder. folder [Scaffold](writing.html#Scaffolds) เมื่อคุณสร้างโพสต์ใหม่ขึ้นมา hexo จะเรียงข้อมูลไฟล์ตาม folder นี้

### source

source folder. This is where you put your site's content. Hexo ignores hidden files and files or folders whose names are prefixed with `_` (underscore) - except the `_posts` folder. ท่ีนี้เป็นท่ีวางเนื้อหาเว็บไซต์ของคุณ hexo ละเลยไฟล์ท่ีถูกซ่อนหรือ folder ท่ีมี `_` เป็นคำนำหน้าในชื่อไฟล์ (นอกจาก folder `_posts`) ไฟล์ท่ี renderable (เช่น Markdown และ HTML) จะถูกจถูกจัดการและใส่เข้า folder `public` ในเมื่อไฟล์อื่นๆจะถูก copy เท่านั้น

### themes

[Theme](themes.html) folder. folder [Theme](themes.html) hexo generate เว็บไซต์คงที่ด้วยผสมเนื่อหาของไซต์กับธีม
