---
title: Themes
---

{% youtube 5ROIU_9dYe4 %}

การสร้างธีมของ hexo เป็นเรื่องเรียบง่าย - คุณต้องการสร้าง folder ใหม่ เพื่อเริ่มใช้ธีมของคุณ ไปแก้ไขการตั้งค่าของ `theme` ในไฟล์ `_config.yml` ธีมของ hexo จะมีโครงสร้างต่อไป:

``` plain
.
├── _config.yml
├── languages
├── layout
├── scripts
└── source
```

### _config.yml

ไฟล์การตั้งค่าธีม  Unlike the site's primary configuration file  การแก้ไขไฟล์นี้แล้วไม่ต้องเปิดเซิร์ฟเวอร์ใหม่

### languages

folder ภาษา สำหรับข้อมูลเพิ่มเติมไปดูท่ี [internationalization (i18n)](internationalization.html)

### layout

layout folder. ใน folder นี้มีไฟล์ template ของธีม ซึ่งตั้งค่ารูปลักษณ์ของเว็บไซต์   hexo ใช้ [Swig] เป็น template engine by default แต่คุณเปลี่ยนเป็น engine อื่นๆได้ เช่น [EJS], [Haml], [Jade] หรือ [Pug] hexo เลือก engine ของ template ตาม extension ของไฟล์ ยกตัวอย่างเช่น:

``` plain
layout.ejs   - uses EJS
layout.swig  - uses Swig
```

สำหรับข้อมูลเพิ่มเติม ไปดูที่ [templates](templates.html)

### scripts

folder ของ script.  hexo  จะโหลดไฟล์ JavaScript ทั้งหมดใน folder นี้ในช่วง
initialization สำหรับข้อมูลเพิ่มเติม ไปดูท่ี [plugins](plugins.html)

### source

source folder. คุณวางไฟล์ของตน(เช่น ไฟล์ CSS และ JavaScript)ได้ท่ีนี่ hexo
ละเลย ไฟล์ท่ีซ่อนอยู่และไฟล์ท่ีมี `_` เป็นคำนำหน้าในชื่อ

hexo จะจัดการและบันทึกไฟล์ทั้งหมดท่ี renderable ไปถึง folder `public`
ส่วนไฟล์ท่ี non-renderable จะถูก copy ไปถึง folder `public` โดยตรง

### Publishing

เมื่อคุณเสร็จการสร้างธีมของตน คุณสามารถประกาศไปถึง [theme list](/themes)
ก่อนการประกาศคุณต้องรัน [theme unit test](<https://github>
.com/hexojs/hexo-theme-unit-test)
เพื่อทำให้แน่ใจว่าทุกสิ่งทุกอย่างเป็นไปได้ดี
ขั้นตอนการประกาศธีมจะคล้ายกับขั้นตอนของ [updating documentation](contributing.html#Updating_Documentation)

1. Fork [hexojs/site]
2. Clone the repository to your computer and install dependencies.

    ```shell
    $ git clone https://github.com/<username>/site.git
    $ cd site
    $ npm install
    ```

3. Edit `source/_data/themes.yml` and add your theme. For example:

    ```yaml
    - name: landscape
      description: A brand new default theme for Hexo.
      link: https://github.com/hexojs/hexo-theme-landscape
      preview: http://hexo.io/hexo-theme-landscape
      tags:
        - official
        - responsive
        - widget
        - two_column
        - one_column
    ```

4. Add a screenshot (with the same name as the theme) to `source/themes/screenshots`. It must be a 800*500px PNG.
5. Push the branch.
6. Create a pull request and describe the change.

[EJS]: https://github.com/hexojs/hexo-renderer-ejs
[Swig]: https://github.com/node-swig/swig-templates
[Haml]: https://github.com/hexojs/hexo-renderer-haml
[Jade]: https://github.com/hexojs/hexo-renderer-jade
[Pug]: https://github.com/maxknee/hexo-render-pug
[hexojs/site]: https://github.com/hexojs/site
