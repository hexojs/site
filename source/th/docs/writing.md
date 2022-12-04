---
title: Writing
---

{% youtube AIqBubK6ZLc %}

คุณสามรถรันคำสั่งต่อไปเพื่อสร้างโพสต์ใหม่หรือเพจใหม่:

``` bash
$ hexo new [layout] <title>
```

`post` เป็น `layout` default แต่คุณตั้งค่า layout ของตนได้โดยเปลี่ยนการตั้งค่าของ `default_layout` ใน  `_config.yml` ได้

### Layout

ใน hexo มี layout ทั้งหมดสามอย่าง: `post` `page`  และ `draft` ไฟล์ที่สร้างมาในต่าง layout จะอยู่ใน path ท่ีแตกต่างกัน 
โพสต์ท่ีสร้างมาใหม่จะบันทึกอยู่ใน folder  `source/_posts`

Layout | Path
--- | ---
`post` | `source/_posts`
`page` | `source`
`draft` | `source/_drafts`

{% note tip Disabling layout %}
If you don't want an article (post/page) to be processed with a theme, set `layout: false` in its front-matter. Refer to [this section](/docs/front-matter#Layout) for more details.
{% endnote %}

### Filename

hexo ใช้หัวข้อของโพสต์เป็นชื่อไฟล์ คุณสามารถตั้งค่า `new_post_name` ในไฟล์ 
`_config.yml` เพื่อเปลี่ยนชื่อไฟล์ default ยกตัวอย่างเช่น 
`:year-:month-:day-:title.md` 
จะทำให้ชื่อไฟล์มีกาลเวลาของการสร้างไฟล์รวมอยู่ด้วย คุณใช้ placeholder ต่อไปได้:

Placeholder | Description
--- | ---
`:title` | Post title (lower case, with spaces replaced by hyphens)
`:year` | Created year, e.g. `2015`
`:month` | Created month (leading zeros), e.g. `04`
`:i_month` | Created month (no leading zeros), e.g. `4`
`:day` | Created day (leading zeros), e.g. `07`
`:i_day` | Created day (no leading zeros), e.g. `7`

### Drafts

`draft` เป็น layout อย่างหนึ่งของ hexo โพสต์ท่ีตั้งค่า layout เป็น draft 
นั้นจะถูกบันทึกอยู่ใน folder `source/_drafts`  คุณสามารถใช้คำสั่ง `publish` ไปย้ายไฟล์ไปถึง folder `source/_posts`  ในท่ีนี้คำสั่ง `publish` คล้ายกับคำสั่ง `new`

``` bash
$ hexo publish [layout] <title>
```

draft จะไม่ render ให้เห็นในเว็บ by default คุณสามารถเพิ่มตัวเลือก `--draft` 
ให้เมื่อรัน hexo หรือ enable `render_drafts` ในไฟล์ `_config.yml` เพื่อ render draft

### Scaffolds

เมื่อสร้างโพสต์ขึ้นมา hexo จะสร้างไฟล์ตามไฟล์ท่ีมีอยู่ใน folder `scaffolds`  ยกตัวอย่างเช่น：

``` bash
$ hexo new photo "My Gallery"
```

เมื่อรันคำสั่งนี้ hexo จะลองหา `photo.md` ใน folder  `scaffolds`  และตามด้วยการสร้างโพสต์ขึ้นมา placeholder ต่อไปเป็น placeholder 
ท่ีตั้งค่าได้ใน scaffold：

Placeholder | Description
--- | ---
`layout` | Layout
`title` | Title
`date` | File created date

### Supported Formats

Hexo support posts written in any format, as long as the corresponding renderer plugin is installed.

For example, Hexo has `hexo-renderer-marked` and `hexo-renderer-ejs` installed by default, so you can write your posts in `markdown` or in `ejs`. If you have `hexo-renderer-pug` installed, then you can even write your post in pug template language.

You can rename your posts and change to file extension from `.md` to `.ejs`, then Hexo will use `hexo-renderer-ejs` to render that file, so do the other formats.
