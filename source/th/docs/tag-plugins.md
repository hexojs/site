---
title: Tag Plugins
---
ปลั๊กอินแท็กจะแตกต่างกับแท็กโพสต์ ปลั๊กอินแท็กนั้นยืมมาจาก Octopress
และสนับสนุนวิธีท่ีเพิ่มเนื้อหาเฉพาะไปถึงโพสต์ของตนได้อย่างรวดเร็ว

Although you can write your posts in any formats, but the tag plugins will always be available and syntax remains the same.

{% youtube I07XMi7MHd4 %}

_Tag plugins should not be wrapped inside Markdown syntax, e.g. `[]({% post_path lorem-ipsum %})` is not supported._

## Block Quote

Perfect for adding quotes to your post, with optional author, source and title information.
เหมาะสำหรับการเพิ่มการอ้างอิงไปถึงโพสต์ต่างๆ เช่นชื่อผู้เขียน
ที่มาและข้อมูลหัวข้อ

**นามแฝง:** การอ้างอิง

```
{% blockquote [author[, source]] [link] [source_link_title] %}
content
{% endblockquote %}
```

### Examples

**การอ้างอิงท่ีไม่มี argument**

```
{% blockquote %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit lacus ut purus iaculis feugiat. Sed nec tempor elit, quis aliquam neque. Curabitur sed diam eget dolor fermentum semper at eu lorem.
{% endblockquote %}
```

{% blockquote %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit lacus ut purus iaculis feugiat. Sed nec tempor elit, quis aliquam neque. Curabitur sed diam eget dolor fermentum semper at eu lorem.
{% endblockquote %}

**การอ้างอิงจากหนังสือ**

```
{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}
```

{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}

**การอ้างอิงจาก Twitter**

```
{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
NEW: DevDocs now comes with syntax highlighting. http://devdocs.io
{% endblockquote %}
```

{% blockquote @DevDocs <https://twitter.com/devdocs/status/356095192085962752> %}
NEW: DevDocs now comes with syntax highlighting. <http://devdocs.io>
{% endblockquote %}

**การอ้างอิงจากบทความในแว็บ**

```
{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}
```

{% blockquote Seth Godin <http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html> Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}

## Code Block

คุณลักษณะท่ีมีส่วนช่วยในการเพิ่ม code snippet ไปถึงโพสต์ของตน

**นามแฝง:** code

```
{% codeblock [title] [lang:language] [url] [link text] [additional options] %}
code snippet
{% endcodeblock %}
```

Specify additional options in `option:value` format, e.g. `line_number:false first_line:5`.

Extra Options | Description | Default
--- | --- | ---
`line_number` | Show line number | `true`
`highlight` | Enable code highlighting | `true`
`first_line` | Specify the first line number | `1`
`mark` | Line highlight specific line(s), each value separated by a comma. Specify number range using a dash<br>Example: `mark:1,4-7,10` will mark line 1, 4 to 7 and 10. |
`wrap` | Wrap the code block in [`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) | `true`

### Examples

**code block ท่ีไม่มี argument ใดๆ**

```
{% codeblock %}
alert('Hello World!');
{% endcodeblock %}
```

{% codeblock %}
alert('Hello World!');
{% endcodeblock %}

**ซี้ภาษาท่ีได้ใช้ของ code block นั้น**

```
{% codeblock lang:objc %}
[rectangle setX: 10 y: 10 width: 20 height: 20];
{% endcodeblock %}
```

{% codeblock lang:objc %}
[rectangle setX: 10 y: 10 width: 20 height: 20];
{% endcodeblock %}

**เพิ่มแคปชั่นไปถึง code block**

```
{% codeblock Array.map %}
array.map(callback[, thisArg])
{% endcodeblock %}
```

{% codeblock Array.map %}
array.map(callback[, thisArg])
{% endcodeblock %}

**เพิ่มแคปชั่นและ URL ไปถึง code block**

```
{% codeblock _.compact http://underscorejs.org/#compact Underscore.js %}
_.compact([0, 1, false, 2, '', 3]);
=> [1, 2, 3]
{% endcodeblock %}
```

{% codeblock _.compact <http://underscorejs.org/#compact> Underscore.js %}
_.compact([0, 1, false, 2, '', 3]);
=> [1, 2, 3]
{% endcodeblock %}

## Backtick Code Block

มันเหมือนกันกับการใช้ code block แต่จำกัดจำนวน block โดยใช้ backtick สามอัน
{% raw %}
&#96``[language] [title] [url] [link text]
code snippet
&#96;``
{% endraw %}

## Pull Quote

เพิ่ม pull quote ไปถึงโพสต์ของคุณ

```
{% pullquote [class] %}
content
{% endpullquote %}
```

## jsFiddle

เสียบ jsFiddle snippet เข้า:

```
{% jsfiddle shorttag [tabs] [skin] [width] [height] %}
```

## Gist

เสียบ Gist snippet เข้า:

```
{% gist gist_id [filename] %}
```

## iframe

เสียบ iframe เข้า:

```
{% iframe url [width] [height] %}
```

## Image

เสียบรูปภาพที่มีขนาดเฉพาะเข้า:

```
{% img [class names] /path/to/image [width] [height] '"title text" "alt text"' %}
```

## Link

เสียบลิงก์ท่ีมี attribute ว่า `target="_blank"` เข้า:

```
{% link text url [external] [title] %}
```

## Include Code

เสียบ code snippet เข้าไปใน folder `source/downloads/code`:

```
{% include_code [title] [lang:language] path/to/file %}
```

## YouTube

เสียบวิดีโอ YouTube เข้า:

```
{% youtube video_id [type] [cookie] %}
```

### Examples

**Embed a video**

```
{% youtube lJIrF4YjHfQ %}
```

**Embed a playlist**

```
{% youtube PL9hW1uS6HUfscJ9DHkOSoOX45MjXduUxo 'playlist' %}
```

**Enable privacy-enhanced mode**

YouTube's cookie is not used in this mode.

```
{% youtube lJIrF4YjHfQ false %}
{% youtube PL9hW1uS6HUfscJ9DHkOSoOX45MjXduUxo 'playlist' false %}
```

## Vimeo

เสียบวิดีโอ Vimeo ท่ีมีขนาดเฉพาะหรือไม่ได้บ่งชีิขนาดให้ชั้ดเจนเข้า:

```
{% vimeo video_id [width] [height] %}
```

## Include Posts

รวมลิงก์ของโพสต์อื่นๆเข้าไปใน  block:

```
{% post_path filename %}
{% post_link filename [title] [escape] %}
```

เวลาใช้แท็กนี้ ข้อมูล permalink และ folder เช่น ภาษาและวันเดือนปี จะถูกละเลย

ยกตัวอย่างเช่น: `{% raw %}{% post_link how-to-bake-a-cake %}{% endraw %}`

โพสต์ท่ีมีชื่อว่า `how-to-bake-a-cake.md` จะ render
ได้แม้ว่าโพสต์นั้นจะอยู่ใน folder `source/posts/2015-02-my-family-holiday`
และมี permalink เป็น `2018/en/how-to-bake-a-cake`

แทนท่ีจะแสดงให้เห็นหัวข้อโพสต์  คุณสามารถตั้งค่าว่าอะไรของ text
จะโชว์ให้เห็นได้ดัวยการตั้งค่า `post_path` ส่วน syntax ท่ีเป็น `[]()`
จะไม่สนับสนุนโดย hexo ในท่ีนี่

Post's title and custom text are escaped by default. You can use the `escape` option to disable escaping.

ยกตัวอย่างเช่น:

**โชว์หัวข้อโพสต์**

`{% raw %}{% post_link hexo-3-8-released %}{% endraw %}`

{% post_link hexo-3-8-released %}

**โชว์ text ท่ีตั้งค่าด้วยตน**

`{% raw %}{% post_link hexo-3-8-released 'Link to a post' %}{% endraw %}`

{% post_link hexo-3-8-released 'Link to a post' %}

**Escape title.**

```
{% post_link hexo-4-released 'How to use <b> tag in title' %}
```

{% post_link hexo-4-released 'How to use <b> tag in title' %}

**Do not escape title.**

```
{% post_link hexo-4-released '<b>bold</b> custom title' false %}
```

{% post_link hexo-4-released '<b>bold</b> custom title' false %}

## Include Assets

รวม post asset อยู่ใน block

```
{% asset_path filename %}
{% asset_img [class names] slug [width] [height] [title text [alt text]] %}
{% asset_link filename [title] [escape] %}
```

### Embed image

_hexo-renderer-marked 3.1.0+ can (optionally) resolves the post's path of an image automatically, refer to [this section](/docs/asset-folders#Embedding-an-image-using-markdown) on how to enable it._

"foo.jpg" is located at `http://example.com/2020/01/02/hello/foo.jpg`.

**Default (no option)**

`{% asset_img foo.jpg %}`

``` html
<img src="/2020/01/02/hello/foo.jpg">
```

**Custom class**

`{% asset_img post-image foo.jpg %}`

``` html
<img src="/2020/01/02/hello/foo.jpg" class="post-image">
```

**Display size**

`{% asset_img foo.jpg 500 400 %}`

``` html
<img src="/2020/01/02/hello/foo.jpg" width="500" height="400">
```

**Title & Alt**

`{% asset_img logo.svg "lorem ipsum'dolor'" %}`

``` html
<img src="/2020/01/02/hello/foo.jpg" title="lorem ipsum" alt="dolor">
```

## Raw

ถ้าเนื้อหาใน block ก้อนให้เกิด issue สำหรับการ render โพสต์ของคุณ
กรุณาห่อด้วยแท็ก `raw`

```
{% raw %}
content
{% endraw %}
```

## Post Excerpt

text ท่ีวางก่อนแท็ก `<!-- more -->` จะถือเป็นส่วนที่ตัดตอนมาจากโพสต์

**ยกตัวอย่างเช่น:**

```
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
<!-- more -->
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
```
