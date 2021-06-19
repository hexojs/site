---
title: Posts
---
## Create a New Post

``` js
hexo.post.create(data, replace);
```

Argument | Description
--- | ---
`data` | Data
`replace` | Replace existing files

attribute ของโพสต์จะตั้งค่าอยู่ใน `data` ตารางต่อไปไม่ละเอียดถี่ถ้วนและ attribute อื่นๆสามารถเพิ่มใส่เข้าไปใน front-matter ได้

Data | Description
--- | ---
`title` | Title
`slug` | URL
`layout` | Layout. Defaults to the `default_layout` setting.
`path` | Path. Hexo builds the post path based on the `new_post_path` setting by default.
`date` | Date. Defaults to the current date.

## Publish a Draft

``` js
hexo.post.publish(data, replace);
```

Argument | Description
--- | ---
`data` | Data
`replace` | Replace existing files

attribute ของโพสต์จะตั้งค่าอยู่ใน data ตารางต่อไปไม่ละเอียดถี่ถ้วนและ attribute อื่นๆสามารถเพิ่มใส่เข้าไปใน front-matter ได้

Data | Description
--- | ---
`slug` | File name (Required)
`layout` | Layout. Defaults to the `default_layout` setting.

## Render

``` js
hexo.post.render(source, data);
```

Argument | Description
--- | ---
`source` | Full path of a file (Optional)
`data` | Data

 data ต้องการมี attribute `content`  ถ้าไม่มี hexo จะลองอ่านไฟล์ที่เป็นต้นฉบับ ขั้นตอน execution ของ function นี้จะดังต่อไปนี้

- Execute `before_post_render` filters execute
- Render with Markdown or other renderers (depending on the extension name)
- Render with [Nunjucks]
- Execute `after_post_render` filters

[Nunjucks]: http://mozilla.github.io/nunjucks/
