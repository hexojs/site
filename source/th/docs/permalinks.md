---
title: Permalinks
---
คุณสามารถตั้งค่า permalink ของเว็บไซตืตนในไฟล์ `_config.yml` หรือใน
front-matter ของทุกโพสต์

### Variables

นอกจาก variable  ต่อไป คุณสามารถตั้งค่า attribute ใดๆ ใน permalink ได้เช่นกัน

Variable | Description
--- | ---
`:year` | Published year of posts (4-digit)
`:month` | Published month of posts (2-digit)
`:i_month` | Published month of posts (Without leading zeros)
`:day` | Published day of posts (2-digit)
`:i_day` | Published day of posts (Without leading zeros)
`:hour` | Published hour of posts (2-digit)
`:minute` | Published minute of posts (2-digit)
`:second` | Published second of posts (2-digit)
`:title` | Filename (relative to "source/_posts/" folder)
`:name` | Filename
`:post_title` | Post title
`:id` | Post ID (_not persistent across [cache reset](/th/docs/commands#clean)_)
`:category` | Categories. If the post is uncategorized, it will use the `default_category` value.
`:hash` | SHA1 hash of filename (same as `:title`) and date (12-hexadecimal)

ตุณสามารถตั้งค่า default value ของทุก variable ใน permalink โดยตั้งค่า
`permalink_defaults`:

``` yaml
permalink_defaults:
  lang: en
```

### Examples

``` yaml source/_posts/hello-world.md
title: Hello World
date: 2013-07-14 17:01:34
categories:
- foo
- bar
```

Setting | Result
--- | ---
`:year/:month/:day/:title/` | 2013/07/14/hello-world/
`:year-:month-:day-:title.html` | 2013-07-14-hello-world.html
`:category/:title/` | foo/bar/hello-world/
`:title-:hash/` | hello-world-a2c8ac003b43/

``` yaml source/_posts/lorem/hello-world.md
title: Hello World
date: 2013-07-14 17:01:34
categories:
- foo
- bar
```

Setting | Result
--- | ---
`:year/:month/:day/:title/` | 2013/07/14/lorem/hello-world/
`:year/:month/:day/:name/` | 2013/07/14/hello-world/

### Multi-language Support

เมื่อสร้างเว็บไซต์ท่ีสนับสนุนหลายภาษา คุณสามารถแก้ไขการตั้งค่า  
`new_post_name` และ  `permalink` อย่างนี้:

``` yaml
new_post_name: :lang/:title.md
permalink: :lang/:title/
```

เมื่อคุณสร้างโพสต์ใหม่ออกมา โพสต์นั้นจะถูกบันทึกไปถึง:

``` bash
$ hexo new "Hello World" --lang tw
# => source/_posts/tw/Hello-World.md
```

และ URL จะเป็นอย่างนี้:

``` plain
http://localhost:4000/tw/hello-world/
```
