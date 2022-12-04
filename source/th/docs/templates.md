---
title: Templates
---
template ให้คำนิยามของรูปแบบการโชว์เนื้อหาของแว็บไซต์คุณโดยตั้งค่าว่าทุกเพจของคุณต้องดูเป็นยังไง ตารางต่อไปเป็น template ท่ีเกี่ยวข้องของทุกเพจท่ีมีอยู่ในไซต์ของคุณ ธีมอันหนึ่งนั้นอย่างน้อยต้องมี template `index` รวมอยู่ด้วย

{% youtube mb65bQ4iUc4 %}

Template | Page | Fallback
--- | --- | ---
`index` | Home page |
`post` | Posts | `index`
`page` | Pages | `index`
`archive` | Archives | `index`
`category` | Category archives | `archive`
`tag` | Tag archives | `archive`

## Layouts

เมื่อเพจต่างๆนั้นแชร์โครงสร้างท่ีคล้ายกัน - เช่น ถ้าสอง template นั้นล้วนมีทั้ง
 header และ footer - คุณสามารถใช้ `layout`
 ไปตั้งค่าให้เพจต่างๆในครั้งเดียวได้ ทุกไฟล์ layout ต้องมี variable `body`
 รวมอยู่ด้วย ยกตัวอย่างเช่น:

``` html index.ejs
index
```

``` html layout.ejs
<!DOCTYPE html>
<html>
  <body><%- body %></body>
</html>
```

yields:

``` html
<!DOCTYPE html>
<html>
  <body>index</body>
</html>
```

template `layout` จะถูกใช้โดย template อื่นๆ ทั้งหมด
คุณสามารถตั้งค่าเพิ่มขึ้นใน front-matter หรือตั้งค่าเป็น `false` เพื่อ
disable template `layout`  
นอกจากนี้แล้วคุณยังสามารถสร้างโครงสร้างท่ีซับซ้อนขึ้นและรังอยู่ใต้ template
ด้านบนสุด

## Partials

partial ใช้มาเป็น  component ท่ีแชว์ได้ระหว่าง template ต่างๆของคุณ
ตัวอย่างทั่วไปคือ header footer และ sidebar คุณอาจจะอยากวาง partial
ใรไฟล์ท่ีแตกต่างกันเพื่อทำให้การรักษาแว็บไซต์ของคุณสะดวกขึ้น ยกตัวอย่างเช่น:

``` html partial/header.ejs
<h1 id="logo"><%= config.title %></h1>
```

``` html index.ejs
<%- partial('partial/header') %>
<div id="content">Home page</div>
```

yields:

``` html
<h1 id="logo">My Site</h1>
<div id="content">Home page</div>
```

## Local Variables

คุณสามารถให้คำนิยามแต่ local variable ใน template และใช้ local variable
เหล่านี้ใน template  อื่นๆ

``` html partial/header.ejs
<h1 id="logo"><%= title %></h1>
```

``` html index.ejs
<%- partial('partial/header', {title: 'Hello World'}) %>
<div id="content">Home page</div>
```

yields:

``` html
<h1 id="logo">Hello World</h1>
<div id="content">Home page</div>
```

## Optimization

ถ้าธีมของคุณซับซ้อนเกินไปหรือจำนวนไฟล์ท่ีต้อง generate มากเกินไป
ประสิทธิภาพของการ generate ไฟล์ ของ hexo จะลดให้ต่ำกว่าปกติเป็นอย่างมาก
เพื่อแก้ไขปัญหานี้ คุณต้องลดความซับซ้อนของ code หรือลองใช้ Fragment Caching
ซึ่งได้แนะนำแล้วใน hexo 2.7

คุณลักษณะนี้ยืมมาจาก [Ruby on Rails](http://guides.rubyonrails.org/caching_with_rails.html#fragment-caching)
code น้ั้นจะบันทึกไว้เป็น fragment และ fragment นั้นจะถูก cach ให้เมื่อ
request ท่ีเพิ่มเติมขึ้นถูกเรียก ดั้งนั้นจะได้ลดจำนวน query ของ database  
และเพิ่มความเร็วของ generation ไฟล์

caching ของ fragment จะเหมาะสมท่ีสุดกับ header footer sidebar
หรือเนื้อหาคงท่ีอื่นๆ ยกตัวอย่างเช่น:

``` js
<%- fragment_cache('header', function(){
  return '<header></header>';
});
```

แม้ว่่าการใช้ partial จะง่ายกว่า:

``` js
<%- partial('header', {}, {cache: true});
```

{% note warn %}
`fragment_cache()` will cache the rendered result and output the cached result to other pages. This should only be used on partials that are expected **not** to change across different pages. Otherwise, it should **not** be enabled.
For example, it should be disabled when `relative_link` is enabled in the config. This is because relative links may appear differently across pages.
{% endnote %}
