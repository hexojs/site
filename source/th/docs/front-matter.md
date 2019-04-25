---
title: Front-matter
---

{% youtube pfD6FCZdW4Q %}

front-matter เป็น block ของ YAML หรือ JSON ท่ีอยู่ข้างต้นของไฟล์ 
และใช้มาตั้งค่าโพสต์ของคุณ

**YAML**
``` yaml
---
title: Hello World
date: 2013/7/13 20:46:25
---
```

**JSON**
``` json
"title": "Hello World",
"date": "2013/7/13 20:46:25"
;;;
```

### Settings & Their Default Values

Setting | Description | Default
--- | --- | ---
`layout` | Layout |
`title` | Title |
`date` | Published date | File created date
`updated` | Updated date | File updated date
`comments` | Enables comment feature for the post | true
`tags` | Tags (Not available for pages) |
`categories` | Categories (Not available for pages) |
`permalink` | Overrides the default permalink of the post |

#### Categories & Tags

มีแต่โพสต์เท่านั้นท่ีสนับสนุนการตั้งค่าแท็กและประเภท(category)  
ประเภทนั้นจะจัดระบบตามลำดับขั้นให้กับโพสต์ 
ส่วนแท็กนั้นจะไม่เกี่ยวกับเรื่องลำดับขั้นนั้น 
 

**ยกตัวอย่างเช่น:**

``` yaml
categories:
- Sports
- Baseball
tags:
- Injury
- Fight
- Shocking
```

ถ้าคุณอยากจัดหลายลำดับขั้นให้กับโพสต์ กรุณาเขียนรายชื่อของทุกลำดับขั้นให้ 
ด้วยการกระทำอย่างนี้  hexo จะทำให้โพสต์อยู่ในทุกลำดับขั้นท่ีคัดเลือกมา

**ยกตัวอย่างเช่น:**

``` yaml
categories:
- [Sports, Baseball]
- [MLB, American League, Boston Red Sox]
- [MLB, American League, New York Yankees]
- Rivalries
```
