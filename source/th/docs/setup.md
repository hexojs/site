title: Setup
---

{% youtube 0m2HnATkHOk %}

เมื่อติดตั้ง hexo แล้ว รันคำสั่งต่อไปเพื่อ initialise hexo ใน `<folder>`

``` bash
$ hexo init <folder>
$ cd <folder>
$ npm install
```

เมื่อเสร็จการ initialization โครงสร้าง folder ของ project คุณจะเป็นอย่างนี้:

``` plain
.
├── _config.yml
├── package.json
├── scaffolds
├── source
|   ├── _drafts
|   └── _posts
└── themes
```

### _config.yml

ไฟล์ของไซต์ [configuration](configuration.html)  คุณสามารถตั้งค่ามากขึ้น ณ 
ท่ีนี้

### package.json

ข้อมูลของแอป. renderer ของ [EJS](http://embeddedjs.com/)  [Stylus](http://learnboost.github.io/stylus/) และ  [Markdown](http://daringfireball.net/projects/markdown/) 
จะติดตั้ง by default คุณสามารถลยออก renderer พวกนี้ได้ในเวลาภายหลัง

``` json package.json
{
  "name": "hexo-site",
  "version": "0.0.0",
  "private": true,
  "hexo": {
    "version": ""
  },
  "dependencies": {
    "hexo": "^3.0.0",
    "hexo-generator-archive": "^0.1.0",
    "hexo-generator-category": "^0.1.0",
    "hexo-generator-index": "^0.1.0",
    "hexo-generator-tag": "^0.1.0",
    "hexo-renderer-ejs": "^0.1.0",
    "hexo-renderer-stylus": "^0.2.0",
    "hexo-renderer-marked": "^0.2.4",
    "hexo-server": "^0.1.2"
  }
}
```

### scaffolds

folder [Scaffold](writing.html#Scaffolds) เมื่อคุณสร้างโพสต์ใหม่ขึ้นมา hexo 
จะเรียงข้อมูลไฟล์ตาม folder นี้


### source


source folder. ท่ีนี้เป็นท่ีวางเนื้อหาเว็บไซต์ของคุณ hexo 
ละเลยไฟล์ท่ีถูกซ่อนหรือ folder ท่ีมี `_` เป็นคำนำหน้าในชื่อไฟล์ (นอกจาก 
folder `_posts`)  ไฟล์ท่ี renderable (เช่น Markdown และ HTML) 
จะถูกจถูกจัดการและใส่เข้า folder `public` ในเมื่อไฟล์อื่นๆจะถูก copy เท่านั้น


### themes

folder [Theme](themes.html)  hexo generate เว็บไซต์คงที่ด้วยผสมเนื่อหาของไซต์กับธีม
