---
title: Data Files
---
บางทีคุณอยากใช้ data ใน template ท่ีเข้าถึงโดยตรงไม่ได้ หรือคุณอยากเอา data
ไปใช้อีกในท่ีอื่นๆ ในกรณีเหล่านี้ hexo 3 จะแนะนำ  **Data files** ใหม่
ด้วยลักษณะนี้ hexo จะโหลดไฟล์ YAML หรือ JSON ใน folder  `source/_data`
และคุณจะใช้ data ในไฟล์ได้ในเว็บไซต์ของตน

{% youtube CN31plHbI-w %}

ยกตัวอย่างเช่น เพิ่ม `menu.yml` ใน folder `source/_data`

``` yaml
Home: /
Gallery: /gallery/
Archives: /archives/
```

และคุณสามารถใช้ data ได้ใน templates:

```
<% for (var link in site.data.menu) { %>
  <a href="<%= site.data.menu[link] %>"> <%= link %> </a>
<% } %>
```

การ render จะเป็นอย่างนี้:

```
<a href="/"> Home </a>
<a href="/gallery/"> Gallery </a>
<a href="/archives/"> Archives </a>
```
