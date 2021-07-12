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
`layout` | Layout | [`config.default_layout`](/th/docs/configuration#Writing)
`title` | Title |
`date` | Published date | File created date
`updated` | Updated date | File updated date
`comments` | Enables comment feature for the post | true
`tags` | Tags (Not available for pages) |
`categories` | Categories (Not available for pages) |
`permalink` | Overrides the default permalink of the post |
`excerpt` | Page excerpt in plain text. Use [this plugin](/docs/tag-plugins#Post-Excerpt) to format the text |
`disableNunjucks` | Disable rendering of Nunjucks tag `{{ }}`/`{% %}` and [tag plugins](/docs/tag-plugins) when enabled
`lang` | Set the language to override [auto-detection](/docs/internationalization#Path) | Inherited from `_config.yml`

#### Layout

The default layout is `post`, in accordance to the value of [`default_layout`]((/docs/configuration#Writing)) setting in `_config.yml`. When the layout is disabled (`layout: false`) in an article, it will not be processed with a theme. However, it will still be rendered by any available renderer: if an article is written in Markdown and a Markdown renderer (like the default [hexo-renderer-marked](https://github.com/hexojs/hexo-renderer-marked)) is installed, it will be rendered to HTML.

[Tag plugins](/docs/tag-plugins) are always processed regardless of layout, unless disabled by the `disableNunjucks` setting or [renderer](/api/renderer#Disable-Nunjucks-tags).

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
