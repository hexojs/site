---
title: Themes
---

{% youtube 5ROIU_9dYe4 %}

การสร้างธีมของ hexo เป็นเรื่องเรียบง่าย - คุณต้องการสร้าง folder ใหม่ เพื่อเริ่มใช้ธีมของคุณ ไปแก้ไขการตั้งค่าของ `theme` ในไฟล์ `_config.yml` ธีมของ hexo จะมีโครงสร้างต่อไป: To start using your theme, modify the `theme` setting in your site's `_config.yml`. A theme should have the following structure:

```plain
.
├── _config.yml
├── languages
├── layout
├── scripts
└── source
```

### \_config.yml

Theme configuration file. ไฟล์การตั้งค่าธีม Unlike the site's primary configuration file การแก้ไขไฟล์นี้แล้วไม่ต้องเปิดเซิร์ฟเวอร์ใหม่

### languages

Language folder. folder ภาษา สำหรับข้อมูลเพิ่มเติมไปดูท่ี [internationalization (i18n)](internationalization.html)

### layout

layout folder. This folder contains the theme's template files, which define the appearance of your website. ใน folder นี้มีไฟล์ template ของธีม ซึ่งตั้งค่ารูปลักษณ์ของเว็บไซต์ hexo ใช้ [Nunjucks][] เป็น template engine by default แต่คุณเปลี่ยนเป็น engine อื่นๆได้ เช่น [EJS][], [Haml][], [Jade][] หรือ [Pug][] hexo เลือก engine ของ template ตาม extension ของไฟล์ ยกตัวอย่างเช่น: Hexo chooses the template engine based on the file extension of the template (just like the posts). For example:

```plain
layout.ejs   - uses EJS
layout.njk   - uses Nunjucks
```

สำหรับข้อมูลเพิ่มเติม ไปดูที่ [templates](templates.html)

### scripts

folder ของ script. hexo จะโหลดไฟล์ JavaScript ทั้งหมดใน folder นี้ในช่วง initialization สำหรับข้อมูลเพิ่มเติม ไปดูท่ี [plugins](plugins.html) For more info, see [plugins](plugins.html).

### source

source folder. Place your assets (e.g. CSS and JavaScript files) here. Hexo ignores hidden files and files or folders prefixed with `_` (underscore).

hexo จะจัดการและบันทึกไฟล์ทั้งหมดท่ี renderable ไปถึง folder `public` ส่วนไฟล์ท่ี non-renderable จะถูก copy ไปถึง folder `public` โดยตรง Non-renderable files will be copied to the `public` folder directly.

### Publishing

When you have finished building your theme, you can publish it to the [theme list](/themes). เมื่อคุณเสร็จการสร้างธีมของตน คุณสามารถประกาศไปถึง [theme list](/themes) ก่อนการประกาศคุณต้องรัน \[theme unit test\](<https://github> .com/hexojs/hexo-theme-unit-test) เพื่อทำให้แน่ใจว่าทุกสิ่งทุกอย่างเป็นไปได้ดี ขั้นตอนการประกาศธีมจะคล้ายกับขั้นตอนของ [updating documentation](contributing.html#Updating_Documentation) The steps for publishing a theme are very similar to those for [updating documentation](contributing.html#Updating_Documentation).

1. Fork [hexojs/site][]
2. Clone the repository to your computer and install dependencies.

   ```shell
   $ git clone https://github.com/<username>/site.git
   $ cd site
   $ npm install
   ```

3. Create a new yaml file in `source/_data/themes/`, use your theme name as the file name

4. Edit `source/_data/themes.yml` and add your theme. For example:

   ```yaml
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

5. Add a screenshot (with the same name as the theme) to `source/themes/screenshots`. It must be a 800\*500px PNG.
6. Push the branch.
7. Create a pull request and describe the change.

[EJS]: https://github.com/hexojs/hexo-renderer-ejs
[Haml]: https://github.com/hexojs/hexo-renderer-haml
[Jade]: https://github.com/hexojs/hexo-renderer-jade
[Pug]: https://github.com/maxknee/hexo-render-pug
[hexojs/site]: https://github.com/hexojs/site
[Nunjucks]: https://mozilla.github.io/nunjucks/
