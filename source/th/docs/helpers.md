---
title: Helpers
---

helper จะถูกใช้ใน template เพื่อช่วยเสียบ snippet ได้รวดเร็ว แต่ helper
นั้นไม่สามารถใช้ในไฟล์ source ได้ คุณสามารถ[write your own custom helper](https://hexo.io/api/helper.html)
ได้ง่ายๆ หรือใช้ helper ท่ีเตรียมไว้ให้ได้

{% youtube Uc53pW0GJHU %}

## URL

### url_for

ส่งกลับ url ท่ีมี root path ตั้งขึ้นไว้  คุณต้องใช้ helper นี้แทน `config
.root + path` ของ hexo 2.7

``` js
<%- url_for(path) %>
```

### relative_url

ส่งกลับ relative URL จาก `from` ไปเป็น `to`

``` js
<%- relative_url(from, to) %>
```

### gravatar

เสียบรูปภาพ Gravatar เข้า:

ถ้าคุณไม่ได้ป่งชี้ parameter ของ [options] ให้ชัดเจน จะมีการตั้งค่าให้  by
default  แล้วคุณก็สามารถตั้งค่า option ด้วยตนเอง ถ้าคุณตั้งค่านี้เป็น object
object นั้นจะถูกเปลี่ยนไปเป็น query string

``` js
<%- gravatar(email, [options]) %>
```

**ยกตัวอย่างเช่น:**

``` js
<%- gravatar('a@abc.com') %>
// https://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787

<%- gravatar('a@abc.com', 40) %>
// https://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787?s=40

<%- gravatar('a@abc.com' {s: 40, d: 'https://via.placeholder.com/150'}) %>
// https://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787?s=40&d=https%3A%2F%2Fvia.placeholder.com%2F150
```

## HTML Tags

### css

โหลดไฟล์ CSS  `path` นั้นเป็น array หรือ string ได้  ถ้า `path` นั้นไม่มี `/`
หรือ protocol ใดๆ เป็นคำนำหน้า มันจะมี root URL เป็นคำนำหน้า
ถ้าคุณไม่ได้เพิ่ม extension ท่ีเป็น `.css`  หลัง `path`  extension
นั้นจะถูกเพิ่มให้ไฟล์โดยอัตโนมัติ
Use object type for custom attributes.

``` js
<%- css(path, ...) %>
```

**ยกตัวอย่างเช่น:**

``` js
<%- css('style.css') %>
// <link rel="stylesheet" href="/style.css">

<%- css(['style.css', 'screen.css']) %>
// <link rel="stylesheet" href="/style.css">
// <link rel="stylesheet" href="/screen.css">

<%- css({ href: 'style.css', integrity: 'foo' }) %>
// <link rel="stylesheet" href="/style.css" integrity="foo">

<%- css([{ href: 'style.css', integrity: 'foo' }, { href: 'screen.css', integrity: 'bar' }]) %>
// <link rel="stylesheet" href="/style.css" integrity="foo">
// <link rel="stylesheet" href="/screen.css" integrity="bar">
```

### js

โหลดไฟล์ JavaScript  `path` นั้นเป็น array หรือ string ได้  ถ้า `path`
นั้นไม่มี `/` หรือ protocol ใดๆ เป็นคำนำหน้า มันจะมี root URL เป็นคำนำหน้า
ถ้าคุณไม่ได้เพิ่ม extension ท่ีเป็น `.js`  หลัง `path`  extension
นั้นจะถูกเพิ่มให้ไฟล์โดยอัตโนมัติ
Use object type for custom attributes.

``` js
<%- js(path, ...) %>
```

**ยกตัวอย่างเช่น:**

``` js
<%- js('script.js') %>
// <script src="/script.js"></script>

<%- js(['script.js', 'gallery.js']) %>
// <script src="/script.js"></script>
// <script src="/gallery.js"></script>

<%- js({ src: 'script.js', integrity: 'foo', async: true }) %>
// <script src="/script.js" integrity="foo" async></script>

<%- js([{ src: 'script.js', integrity: 'foo' }, { src: 'gallery.js', integrity: 'bar' }]) %>
// <script src="/script.js" integrity="foo"></script>
// <script src="/gallery.js" integrity="bar"></script>
```

### link_to

เสียบลิงก์เข้า:

``` js
<%- link_to(path, [text], [options]) %>
```

Option | Description | Default
--- | --- | ---
`external` | Opens the link in a new tab | false
`class` | Class name |
`id` | ID |

**ยกตัวอย่างเช่น:**

``` js
<%- link_to('http://www.google.com') %>
// <a href="http://www.google.com" title="http://www.google.com">http://www.google.com</a>

<%- link_to('http://www.google.com', 'Google') %>
// <a href="http://www.google.com" title="Google">Google</a>

<%- link_to('http://www.google.com', 'Google', {external: true}) %>
// <a href="http://www.google.com" title="Google" target="_blank" rel="noopener">Google</a>
```

### mail_to

เสียบลิงก์ของเมล์เข้า:

``` js
<%- mail_to(path, [text], [options]) %>
```

Option | Description
--- | ---
`class` | Class name
`id` | ID
`subject` | Mail subject
`cc` | CC
`bcc` | BCC
`body` | Mail content

**ยกตัวอย่างเช่น:**

``` js
<%- mail_to('a@abc.com') %>
// <a href="mailto:a@abc.com" title="a@abc.com">a@abc.com</a>

<%- mail_to('a@abc.com', 'Email') %>
// <a href="mailto:a@abc.com" title="Email">Email</a>
```

### image_tag

เสียบรูปภาพเข้า:

``` js
<%- image_tag(path, [options]) %>
```

Option | Description
--- | ---
`alt` | Alternative text of the image
`class` | Class name
`id` | ID
`width` | Image width
`height` | Image height

### favicon_tag

เสียบ favicon เข้า:

``` js
<%- favicon_tag(path) %>
```

### feed_tag

เสียบลิงก์ฟีดเข้า:

``` js
<%- feed_tag(path, [options]) %>
```

Option | Description | Default
--- | --- | ---
`title` | Feed title | `config.title`
`type` | Feed type | atom

**Examples:**

``` js
<%- feed_tag('atom.xml') %>
// <link rel="alternate" href="/atom.xml" title="Hexo" type="application/atom+xml">

<%- feed_tag('rss.xml', { title: 'RSS Feed', type: 'rss' }) %>
// <link rel="alternate" href="/atom.xml" title="RSS Feed" type="application/rss+xml">

/* Defaults to hexo-generator-feed's config if no argument */
<%- feed_tag() %>
// <link rel="alternate" href="/atom.xml" title="Hexo" type="application/atom+xml">
```

## Conditional Tags

### is_current

ตรวจได้ว่า `path` นั้นเหมาะกับ URL ของเพจปัจจุบันหรือไม่  คุณใช้ตัวเลือก
`strict` ไปเปิด strict matching ได้

``` js
<%- is_current(path, [strict]) %>
```

### is_home

ตรวจได้ว่าเพจปัจจุบันเป็นหน้าหลักหรือไม่

``` js
<%- is_home() %>
```

### is_post

ตรวจได้ว่าเพจปัจจุบันเป็นโพสต์หรือไม่

``` js
<%- is_post() %>
```

### is_archive

ตรวจได้ว่าเพจปัจจุบันเป็นเพจ archive หรือไม่

``` js
<%- is_archive() %>
```

### is_year

ตรวจได้ว่าเพจปัจจุบันเป็นเพจ archive ต่อปีหรือไม่

``` js
<%- is_year() %>
```

### is_month

ตรวจได้ว่าเพจปัจจุบันเป็นเพจ archive ต่อเดือนหรือไม่

``` js
<%- is_month() %>
```

### is_category

ตรวจได้ว่าเพจปัจจุบันเป็นเพจ category หรือไม่
ถ้า parameter นั้นเป็น string  จะตรวจได้ว่าเพจปัจจุบันอยู่ใน category
นั้นหรือไม่

``` js
<%- is_category() %>
<%- is_category('hobby') %>
```

### is_tag

ตรวจได้ว่าเพจปัจจุบันเป็นเพจแท็กหรือไม่
ถ้า parameter นั้นเป็น string จะตรวจได้ว่าเพจปัจจุบันเหมาะกับแท็กนั้นหรือไม่

``` js
<%- is_tag() %>
<%- is_tag('hobby') %>
```

## String Manipulation

### trim

ลบ space ท่ีอยู่ข้่างต้นหรือระหว่างตัวอักษรต่างๆของ string

``` js
<%- trim(string) %>
```

### strip_html

ลบแท็ก HTML ทั้งหมดของ string

``` js
<%- strip_html(string) %>
```

**ยกตัวอย่างเช่น:**

``` js
<%- strip_html('It\'s not <b>important</b> anymore!') %>
// It's not important anymore!
```

### titlecase

เปลี่ยน string ไปเป็นตัวอักษรท่ีถูกต้อง

``` js
<%- titlecase(string) %>
```

**ยกตัวอย่างเช่น:**

``` js
<%- titlecase('this is an apple') %>
# This is an Apple
```

### markdown

render string ด้วย Markdown

``` js
<%- markdown(str) %>
```

**ยกตัวอย่างเช่น:**

``` js
<%- markdown('make me **strong**') %>
// make me <strong>strong</strong>
```

### render

Renders a string.

``` js
<%- render(str, engine, [options]) %>
```

**Examples:**

``` js
<%- render('p(class="example") Test', 'pug'); %>
// <p class="example">Test</p>
```

See [Rendering](https://hexo.io/th/api/rendering) for more details.

### word_wrap

ทุกบรรทัดของ text จะไม่ยาวเกิน  `length` ค่า  `length` นั้นจะเป็น 80 ตัวอักษร
 by default

``` js
<%- word_wrap(str, [length]) %>
```

**ยกตัวอย่างเช่น:**

``` js
<%- word_wrap('Once upon a time', 8) %>
// Once upon\n a time
```

### truncate

ตัด text ให้สั้นตามการตั้งค่าของ `length` การตั้งค่า `length` default
เป็นตัวอักษร 30 ตัว

``` js
<%- truncate(text, [options]) %>
```

**ยกตัวอย่างเช่น:**

``` js
<%- truncate('Once upon a time in a world far far away', {length: 17}) %>
// Once upon a ti...

<%- truncate('Once upon a time in a world far far away', {length: 17, separator: ' '}) %>
// Once upon a...

<%- truncate('And they found that many people were sleeping better.', {length: 25, omission: '... (continued)'}) %>
// And they f... (continued)
```

### escape_html

Escapes HTML entities in a string.

``` js
<%- escape_html(str) %>
```

**Examples:**

``` js
<%- escape_html('<p>Hello "world".</p>') %>
// &lt;p&gt;Hello &quot;world&quot;.&lt;&#x2F;p&gt;
```

## Templates

### partial

โหลดไฟล์ template อื่นๆ คุณสามารถตั้งค่า local variable ใน `locals`

``` js
<%- partial(layout, [locals], [options]) %>
```

Option | Description | Default
--- | --- | ---
`cache` | Cache contents (Use fragment cache) | `false`
`only` | Strict local variables. Only use variables set in `locals` in templates. | `false`

### fragment_cache

cache เนื้อหาอยู่ใน fragment มันจะบันทึกเนื้อหาอยู่ใน fragment และ cache
นั้นจะทำให้ request ท่ีเกี่ยวข้องนั้นมีการตอบรับเร็วขึ้น

``` js
<%- fragment_cache(id, fn);
```

**ยกตัวอย่างเช่น:**

``` js
<%- fragment_cache('header', function(){
  return '<header></header>';
}) %>
```

## Date & Time

### date

เสียบวันเดือนปีท่ีได้จัดรูปแบบแล้วเข้า:

`date` นั้นจะเป็น unix time, ISO string, date object, หรือ [Moment.js] object
 ได้ `format` นั้นถูกตั้งค่าเป็น `date_format` อยู่แล้ว by default

``` js
<%- date(date, [format]) %>
```

**ยกตัวอย่างเช่น:**

``` js
<%- date(Date.now()) %>
// 2013-01-01

<%- date(Date.now(), 'YYYY/M/D') %>
// Jan 1 2013
```

### date_xml

เสียบวันเดือนปีเข้าในรูปแบบ XML :

`date` นั้นจะเป็น unix time, ISO string, date object, หรือ [Moment.js] object
 ได้

``` js
<%- date_xml(date) %>
```

**ยกตัวอย่างเช่น:**

``` js
<%- date_xml(Date.now()) %>
// 2013-01-01T00:00:00.000Z
```

### time

เสียบกาลเวลาท่ีได้จัดรูปแบบแล้วเข้า:

`date` นั้นเป็น unix time, ISO string, date object, หรือ [Moment.js] object ได้
`format` นั้นถูกตั้งค่าเป็น `time_format` อยู่แล้ว by default

``` js
<%- time(date, [format]) %>
```

**ยกตัวอย่างเช่น:**

``` js
<%- time(Date.now()) %>
// 13:05:12

<%- time(Date.now(), 'h:mm:ss a') %>
// 1:05:12 pm
```

### full_date

เสียบวันเดือนปีและกาลเวลาท่ีได้จัดรูปแบบแล้วเข้า:

`date` นั้นเป็น unix time, ISO string, date object, หรือ [Moment.js] object ได้
`format` นั้นถูกตั้งค่าเป็น `date_format + time_format` อยู่แล้ว by default

``` js
<%- full_date(date, [format]) %>
```

**ยกตัวอย่างเช่น:**

``` js
<%- full_date(new Date()) %>
// Jan 1, 2013 0:00:00

<%- full_date(new Date(), 'dddd, MMMM Do YYYY, h:mm:ss a') %>
// Tuesday, January 1st 2013, 12:00:00 am
```

### moment

[Moment.js] library.

## List

### list_categories

เสียบรายชื่อของ category ทั้งหมดเข้า:

``` js
<%- list_categories([options]) %>
```

Option | Description | Default
--- | --- | ---
`orderby` | Order of categories | name
`order` | Sort of order. `1`, `asc` for ascending; `-1`, `desc` for descending | 1
`show_count` | Display the number of posts for each category | true
`style` | Style to display the category list. `list` displays categories in an unordered list.  | list
`separator` | Separator between categories. (Only works if `style` is not `list`) | ,
`depth` | Levels of categories to be displayed. `0` displays all categories and child categories; `-1` is similar to `0` but displayed in flat; `1` displays only top level categories. | 0
`class` | Class name of tag list (string) or customize each tag's class (object, see below). | tag
`transform` | The function that changes the display of category name. |
`suffix` | Add a suffix to link. | None

Class advanced customization:

Option | Description | Default
--- | --- | ---
`class.ul` | `<ul>` class name (only for style `list`) | `tag-list` (list style)
`class.li` | `<li>` class name (only for style `list`) | `tag-list-item` (list style)
`class.a` | `<a>` class name | `tag-list-link` (list style) `tag-link` (normal style)
`class.label` | `<span>` class name where the tag label is stored (only for normal style, when `class.label` is set the label is put in a `<span>`) | `tag-label` (normal style)
`class.count` | `<span>` class name where the tag counter is stored (only when `show_count` is `true`) | `tag-list-count` (list style) `tag-count` (normal style)

Examples:

```ejs
<%- list_tags(site.tags, {class: 'classtest', style: false, separator: ' | '}) %>
<%- list_tags(site.tags, {class: 'classtest', style: 'list'}) %>
<%- list_tags(site.tags, {class: {ul: 'ululul', li: 'lilili', a: 'aaa', count: 'ccc'}, style: false, separator: ' | '}) %>
<%- list_tags(site.tags, {class: {ul: 'ululul', li: 'lilili', a: 'aaa', count: 'ccc'}, style: 'list'}) %>
```

### list_tags

เสียบรายชื่อของแท็กทั้งหมดเข้า:

``` js
<%- list_tags([options]) %>
```

Option | Description | Default
--- | --- | ---
`orderby` | Order of categories | name
`order` | Sort of order. `1`, `asc` for ascending; `-1`, `desc` for descending | 1
`show_count` | Display the number of posts for each tag | true
`style` | Style to display the tag list. `list` displays tags in an unordered list.  | list
`separator` | Separator between categories. (Only works if `style` is not `list`) | ,
`class` | Class name of tag list. | tag
`transform` | The function that changes the display of tag name. |
`amount` | The number of tags to display (0 = unlimited) | 0
`suffix` | Add a suffix to link. | None

Class advanced customization:

Option | Description | Default
--- | --- | ---
`class.ul` | `<ul>` class name (only for style `list`) | `tag-list` (list style)
`class.li` | `<li>` class name (only for style `list`) | `tag-list-item` (list style)
`class.a` | `<a>` class name | `tag-list-link` (list style) `tag-link` (normal style)
`class.count` | `<span>` class name where the tag counter is stored (only when `show_count` is `true`) | `tag-list-count` (list style) `tag-count` (normal style)

Examples:

```ejs
<%- list_tags(site.tags, {class: 'classtest', style: false, separator: ' | '}) %>
<%- list_tags(site.tags, {class: 'classtest', style: 'list'}) %>
<%- list_tags(site.tags, {class: {ul: 'ululul', li: 'lilili', a: 'aaa', count: 'ccc'}, style: false, separator: ' | '}) %>
<%- list_tags(site.tags, {class: {ul: 'ululul', li: 'lilili', a: 'aaa', count: 'ccc'}, style: 'list'}) %>
```

### list_archives

เสียบรายชื่อ archive เข้า:

``` js
<%- list_archives([options]) %>
```

Option | Description | Default
--- | --- | ---
`type` | Type. This value can be `yearly` or `monthly`. | monthly
`order` | Sort of order. `1`, `asc` for ascending; `-1`, `desc` for descending | 1
`show_count` | Display the number of posts for each archive | true
`format` | Date format | MMMM YYYY
`style` | Style to display the archive list. `list` displays archives in an unordered list.  | list
`separator` | Separator between archives. (Only works if `style` is not `list`) | ,
`class` | Class name of archive list. | archive
`transform` | The function that changes the display of archive name. |

### list_posts

เสียบรายชื่อโพสต์เข้า:

``` js
<%- list_posts([options]) %>
```

Option | Description | Default
--- | --- | ---
`orderby` | Order of posts | date
`order` | Sort of order. `1`, `asc` for ascending; `-1`, `desc` for descending | 1
`style` | Style to display the post list. `list` displays posts in an unordered list.  | list
`separator` | Separator between posts. (Only works if `style` is not `list`) | ,
`class` | Class name of post list. | post
`amount` | The number of posts to display (0 = unlimited) | 6
`transform` | The function that changes the display of post name. |

### tagcloud

เสียบ tag cloud เข้า:

``` js
<%- tagcloud([tags], [options]) %>
```

Option | Description | Default
--- | --- | ---
`min_font` | Minimal font size | 10
`max_font` | Maximum font size | 20
`unit` | Unit of font size | px
`amount` | Total amount of tags | 40
`orderby` | Order of tags | name
`order` | Sort order. `1`, `sac` as ascending; `-1`, `desc` as descending | 1
`color` | Colorizes the tag cloud | false
`start_color` | Start color. You can use hex (`#b700ff`), rgba (`rgba(183, 0, 255, 1)`), hsla (`hsla(283, 100%, 50%, 1)`) or [color keywords]. This option only works when `color` is true. |
`end_color` | End color. You can use hex (`#b700ff`), rgba (`rgba(183, 0, 255, 1)`), hsla (`hsla(283, 100%, 50%, 1)`) or [color keywords]. This option only works when `color` is true. |
`class` | Class name prefix of tags
`level` | The number of different class names. This option only works when `class` is set. | 10

## Miscellaneous

### paginator

เสียบ paginator เข้า:

``` js
<%- paginator(options) %>
```

Option | Description | Default
--- | --- | ---
`base` | Base URL | /
`format` | URL format | page/%d/
`total` | The number of pages | 1
`current` | Current page number | 0
`prev_text` | The link text of previous page. Works only if `prev_next` is set to true. | Prev
`next_text` | The link text of next page. Works only if `prev_next` is set to true. | Next
`space` | The space text | &hellp;
`prev_next` | Display previous and next links | true
`end_size` | The number of pages displayed on the start and the end side | 1
`mid_size` | The number of pages displayed between current page, but not including current page | 2
`show_all` | Display all pages. If this is set true, `end_size` and `mid_size` will not works. | false
`escape` | Escape HTML tags | true

**Examples:**

``` js
<%- paginator({
  prev_text: '<',
  next_text: '>'
}) %>
```

``` html
<!-- Rendered as -->
<a href="/1/">&lt;</a>
<a href="/1/">1</a>
2
<a href="/3/">3</a>
<a href="/3/">&gt;</a>
```

``` js
<%- paginator({
  prev_text: '<i class="fa fa-angle-left"></i>',
  next_text: '<i class="fa fa-angle-right"></i>',
  escape: false
}) %>
```

``` html
<!-- Rendered as -->
<a href="/1/"><i class="fa fa-angle-left"></i></a>
<a href="/1/">1</a>
2
<a href="/3/">3</a>
<a href="/3/"><i class="fa fa-angle-right"></i></a>
```

### search_form

เสียบฟอร์ม search ของ Google เข้า:

``` js
<%- search_form(options) %>
```

Option | Description | Default
--- | --- | ---
`class` | The class name of form | search-form
`text` | Search hint word | Search
`button` | Display search button. The value can be a boolean or a string. When the value is a string, it'll be the text of the button. | false

### number_format

จัดรูปแบบตัวเลข:

``` js
<%- number_format(number, [options]) %>
```

Option | Description | Default
--- | --- | ---
`precision` | The precision of number. The value can be `false` or a nonnegative integer. | false
`delimiter` | The thousands delimiter | ,
`separator` | The separator between the fractional and integer digits. | .

**ยกตัวอย่างเช่น:**

``` js
<%- number_format(12345.67, {precision: 1}) %>
// 12,345.68

<%- number_format(12345.67, {precision: 4}) %>
// 12,345.6700

<%- number_format(12345.67, {precision: 0}) %>
// 12,345

<%- number_format(12345.67, {delimiter: ''}) %>
// 12345.67

<%- number_format(12345.67, {separator: '/'}) %>
// 12,345/67
```

### meta_generator

Inserts [generator tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta).

``` js
<%- meta_generator() %>
```

**Examples:**

``` js
<%- meta_generator() %>
// <meta name="generator" content="Hexo 4.0.0">
```

### open_graph

เสียบข้อมูล [Open Graph] เข้า:

``` js
<%- open_graph([options]) %>
```

Option | Description | Default
--- | --- | ---
`title` | Page title (`og:title`) | `page.title`
`type` | Page type (`og:type`) | blog
`url` | Page URL (`og:url`) | `url`
`image` | Page images (`og:image`) | All images in the content
`site_name` | Site name (`og:site_name`) | `config.title`
`description` | Page description (`og:description`) | Page excerpt or first 200 characters of the content
`twitter_card` | Twitter card type (`twitter:card`) | summary
`twitter_id` | Twitter ID (`twitter:creator`) |
`twitter_site` | Twitter Site (`twitter:site`) |
`google_plus` | Google+ profile link |
`fb_admins` | Facebook admin ID |
`fb_app_id` | Facebook App ID |

### toc

parse แท็ก heading (h1~h6) ในโพสต์และเสียบสารบัญเข้า:

``` js
<%- toc(str, [options]) %>
```

Option | Description | Default
--- | --- | ---
`class` | Class name | toc
`list_number` | Displays list number | true
`max_depth` | Maximum heading depth of generated toc | 6
`min_depth` | Minimum heading depth of generated toc | 1

**ยกตัวอย่างเช่น:**

``` js
<%- toc(page.content) %>
```

[color keywords]: http://www.w3.org/TR/css3-color/#svg-color
[Moment.js]: http://momentjs.com/
[Open Graph]: http://ogp.me/
