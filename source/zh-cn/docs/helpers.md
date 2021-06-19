---
title: 辅助函数（Helpers）
---
辅助函数帮助您在模版中快速插入内容。辅助函数不能在源文件中使用。

## 网址

### url_for

在路径前加上根路径，从 Hexo 2.7 开始您应该使用此函数而不是 `config.root + path`。

``` js
<%- url_for(path, [option]) %>
```

参数 | 描述 | 默认值
--- | --- | ---
`relative` | 是否输出相对链接 | `config.relative_link` 的值

**示例：**

``` yml
_config.yml
root: /blog/
```

``` js
<%- url_for('/a/path') %>
// /blog/a/path
```

是否输出相对链接，默认遵循配置文件中 `relative_link` 的值
例如， post/page 的相对路径值可能是 `/foo/bar/index.html`

``` yml
_config.yml
relative_link: true
```

``` js
<%- url_for('/css/style.css') %>
// ../../css/style.css
/* 覆盖配置
 * 即使配置文件中启用了 relative_link，你也可以使用 relative 参数禁用相对链接输出，反之亦然
 */
<%- url_for('/css/style.css', {relative: false}) %>
// /css/style.css
```

### relative_url

取得与 `from` 相对的 `to` 路径。

``` js
<%- relative_url(from, to) %>
```

**示例：**

``` js
<%- relative_url('foo/bar/', 'css/style.css') %>
// ../../css/style.css
```

### gravatar

根据邮箱地址返回 Gravatar 头像 URL。

如果你不指定 `options` 参数，将会应用默认参数。否则，你可以将其设置为一个数字，这个数字将会作为 Gravatar 的大小参数。最后，如果你设置它一个对象，它将会被转换为 Gravatar 的一个查询字符串参数。

``` js
<%- gravatar(email, [options]) %>
```

参数 | 描述 | 默认值
--- | --- | ---
`s` | 图片大小 | 80
`d` | 默认头像 |
`f` | 强制使用默认图象 |
`r` | 头像等级限制 |

访问 [Gravatar](https://en.gravatar.com/site/implement/images/) 了解更多。

**示例：**

``` js
<%- gravatar('a@abc.com') %>
// https://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787

<%- gravatar('a@abc.com', 40) %>
// https://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787?s=40

<%- gravatar('a@abc.com' {s: 40, d: 'https://via.placeholder.com/150'}) %>
// https://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787?s=40&d=https%3A%2F%2Fvia.placeholder.com%2F150
```

### full_url_for

在路径前加上根路径和域名。输出会被自动转码。

``` js
<%- full_url_for(path) %>
```

**示例：**

``` yml
_config.yml
url: https://example.com/blog # example
```

``` js
<%- full_url_for('/a/path') %>
// https://example.com/blog/a/path
```

## HTML 标签

### css

载入 CSS 文件。`path` 可以是数组或字符串，如果 `path` 开头不是 `/` 或任何协议，则会自动加上根路径；如果后面没有加上 `.css` 扩展名的话，也会自动加上。Use object type for custom attributes.

``` js
<%- css(path, ...) %>
```

**示例：**

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

载入 JavaScript 文件。`path` 可以是数组或字符串，如果 `path` 开头不是 `/` 或任何协议，则会自动加上根路径；如果后面没有加上 `.js` 扩展名的话，也会自动加上。Use object type for custom attributes.

``` js
<%- js(path, ...) %>
```

**示例：**

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

插入链接。

``` js
<%- link_to(path, [text], [options]) %>
```

参数 | 描述 | 默认值
--- | --- | ---
`external` | 在新视窗打开链接 | false
`class` | Class 名称 |
`id` | ID |

**示例：**

``` js
<%- link_to('http://www.google.com') %>
// <a href="http://www.google.com" title="http://www.google.com">http://www.google.com</a>

<%- link_to('http://www.google.com', 'Google') %>
// <a href="http://www.google.com" title="Google">Google</a>

<%- link_to('http://www.google.com', 'Google', {external: true}) %>
// <a href="http://www.google.com" title="Google" target="_blank" rel="noopener">Google</a>
```

### mail_to

插入电子邮箱链接。

``` js
<%- mail_to(path, [text], [options]) %>
```

参数 | 描述
--- | ---
`class` | Class 名称
`id` | ID
`subject` | 邮件主题
`cc` | 抄送（CC）
`bcc` | 密送（BCC）
`body` | 邮件内容

**示例：**

``` js
<%- mail_to('a@abc.com') %>
// <a href="mailto:a@abc.com" title="a@abc.com">a@abc.com</a>

<%- mail_to('a@abc.com', 'Email') %>
// <a href="mailto:a@abc.com" title="Email">Email</a>
```

### image_tag

插入图片。

``` js
<%- image_tag(path, [options]) %>
```

参数 | 描述
--- | ---
`alt` | 图片的替代文字
`class` | Class 名称
`id` | ID
`width` | 图片宽度
`height` | 图片高度

### favicon_tag

插入 favicon。

``` js
<%- favicon_tag(path) %>
```

### feed_tag

插入 feed 链接。

``` js
<%- feed_tag(path, [options]) %>
```

参数 | 描述 | 默认值
--- | --- | ---
`title` | Feed 标题 | `config.title`
`type` | Feed 类型 | atom

**示例：**

``` js
<%- feed_tag('atom.xml') %>
// <link rel="alternate" href="/atom.xml" title="Hexo" type="application/atom+xml">

<%- feed_tag('rss.xml', { title: 'RSS Feed', type: 'rss' }) %>
// <link rel="alternate" href="/atom.xml" title="RSS Feed" type="application/rss+xml">

/* Defaults to hexo-generator-feed's config if no argument */
<%- feed_tag() %>
// <link rel="alternate" href="/atom.xml" title="Hexo" type="application/atom+xml">
```

## 条件函数

### is_current

检查 `path` 是否符合目前页面的网址。开启 `strict` 选项启用严格比对。

``` js
<%- is_current(path, [strict]) %>
```

### is_home

检查当前页面是否为首页。

``` js
<%- is_home() %>
```

### is_post

检查当前页面是否为文章。

``` js
<%- is_post() %>
```

### is_page

检查当前页面是否为独立页面。

``` js
<%- is_page() %>
```

### is_archive

检查当前页面是否为存档页面。

``` js
<%- is_archive() %>
```

### is_year

检查当前页面是否为年度归档页面。

``` js
<%- is_year() %>
```

### is_month

检查当前页面是否为月度归档页面。

``` js
<%- is_month() %>
```

### is_category

检查当前页面是否为分类归档页面。
如果给定一个字符串作为参数，将会检查目前是否为指定分类。

``` js
<%- is_category() %>
<%- is_category('hobby') %>
```

### is_tag

检查当前页面是否为标签归档页面。
如果给定一个字符串作为参数，将会检查目前是否为指定标签。

``` js
<%- is_tag() %>
<%- is_tag('hobby') %>
```

## 字符串处理

### trim

清除字符串开头和结尾的空格。

``` js
<%- trim(string) %>
```

### strip_html

清除字符串中的 HTML 标签。

``` js
<%- strip_html(string) %>
```

**示例：**

``` js
<%- strip_html('It\'s not <b>important</b> anymore!') %>
// It's not important anymore!
```

### titlecase

把字符串转换为正确的 Title case。

``` js
<%- titlecase(string) %>
```

**示例：**

``` js
<%- titlecase('this is an apple') %>
# This is an Apple
```

### markdown

使用 Markdown 解析字符串。

``` js
<%- markdown(str) %>
```

**示例：**

``` js
<%- markdown('make me **strong**') %>
// make me <strong>strong</strong>
```

### render

解析字符串。

``` js
<%- render(str, engine, [options]) %>
```

**Examples:**

``` js
<%- render('p(class="example") Test', 'pug'); %>
// <p class="example">Test</p>
```

See [Rendering](https://hexo.io/zh-cn/api/rendering) for more details.

### word_wrap

使每行的字符串长度不超过 `length`。`length` 预设为 80。

``` js
<%- word_wrap(str, [length]) %>
```

**示例：**

``` js
<%- word_wrap('Once upon a time', 8) %>
// Once upon\n a time
```

### truncate

移除超过 `length` 长度的字符串。`length` 的默认值是 30。

``` js
<%- truncate(text, length) %>
```

**示例：**

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

## 模板

### partial

载入其他模板文件，您可在 `locals` 设定区域变量。

``` js
<%- partial(layout, [locals], [options]) %>
```

参数 | 描述 | 默认值
--- | --- | ---
`cache` | 缓存（使用 Fragment cache） | `false`
`only` | 限制局部变量。在模板中只能使用 `locals` 中设定的变量。 | `false`

### fragment_cache

局部缓存。它储存局部内容，下次使用时就能直接使用缓存。

``` js
<%- fragment_cache(id, fn);
```

**示例：**

``` js
<%- fragment_cache('header', function(){
  return '<header></header>';
}) %>
```

## 日期与时间

### date

插入格式化的日期。`date` 可以是 UNIX 时间、ISO 字符串、Date 对象或 [Moment.js] 对象。`format` 默认为 `date_format` 配置信息。

``` js
<%- date(date, [format]) %>
```

**示例：**

``` js
<%- date(Date.now()) %>
// 2013-01-01

<%- date(Date.now(), 'YYYY/M/D') %>
// Jan 1 2013
```

### date_xml

插入 XML 格式的日期。`date` 可以是 UNIX 时间、ISO 字符串、Date 对象或 [Moment.js] 对象。

``` js
<%- date_xml(date) %>
```

**示例：**

``` js
<%- date_xml(Date.now()) %>
// 2013-01-01T00:00:00.000Z
```

### time

插入格式化的时间。`date` 可以是 UNIX 时间、ISO 字符串、Date 对象或 [Moment.js] 对象。`format` 默认为 `time_format` 配置信息。

``` js
<%- time(date, [format]) %>
```

**示例：**

``` js
<%- time(Date.now()) %>
// 13:05:12

<%- time(Date.now(), 'h:mm:ss a') %>
// 1:05:12 pm
```

### full_date

插入格式化的日期和时间。`date` 可以是 UNIX 时间、ISO 字符串、Date 对象或 [Moment.js] 对象。`format` 默认为 `date_format + time_format`。

``` js
<%- full_date(date, [format]) %>
```

**示例：**

``` js
<%- full_date(new Date()) %>
// Jan 1, 2013 0:00:00

<%- full_date(new Date(), 'dddd, MMMM Do YYYY, h:mm:ss a') %>
// Tuesday, January 1st 2013, 12:00:00 am
```

### moment

[Moment.js] 函数库。

## 列表

### list_categories

插入分类列表。

``` js
<%- list_categories([options]) %>
```

参数 | 描述 | 默认值
--- | --- | ---
`orderby` | 分类排列方式 | name
`order` | 分类排列顺序。`1`, `asc` 升序；`-1`, `desc` 降序。 | 1
`show_count` | 显示每个分类的文章总数 | true
`style` | 分类列表的显示方式。使用 `list` 以无序列表（unordered list）方式显示。 | list
`separator` | 分类间的分隔符号。只有在 `style` 不是 `list` 时有用。 | ,
`depth` | 要显示的分类层级。`0` 显示所有层级的分类；`-1` 和 `0` 很类似，但是显示不分层级；`1` 只显示第一层的分类。 | 0
`class` | 分类列表的 class 名称。 | category
`transform` | 改变分类名称显示方法的函数 |
`suffix` | 为链接添加前缀 | None

**用例:**

``` js
<%- list_categories(post.categories, {
  class: 'post-category',
  transform(str) {
    return titlecase(str);
  }
}) %>
 <%- list_categories(post.categories, {
  class: 'post-category',
  transform(str) {
    return str.toUpperCase();
  }
}) %>
```

### list_tags

插入标签列表。

``` js
<%- list_tags([options]) %>
```

选项 | 描述 | 预设值
--- | --- | ---
`orderby` | 标签排列方式 | name
`order` | 标签排列顺序。`1`, `asc` 升序；`-1`, `desc` 降序。 | 1
`show_count` | 显示每个标签的文章总数 | true
`style` | 标签列表的显示方式。使用 `list` 以无序列表（unordered list）方式显示。 | list
`separator` | 标签间的分隔符号。只有在 `style` 不是 `list` 时有用。 | ,
`class` | Class name of tag list (string) or customize each tag's class (object, see below). | tag
`transform` | 改变标签名称显示方法的函数。请查看 [list_categories](#list-categories) 中给出的例子 |
`amount` | 要显示的标签数量（0 = 无限制） | 0
`suffix` | 为链接添加前缀 | None

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

### list_archives

插入归档列表。

``` js
<%- list_archives([options]) %>
```

参数 | 描述 | 默认值
--- | --- | ---
`type` | 类型。此设定可为 `yearly` 或 `monthly`。 | monthly
`order` | 排列顺序。`1`, `asc` 升序；`-1`, `desc` 降序。 | 1
`show_count` | 显示每个归档的文章总数 | true
`format` | 日期格式 | MMMM YYYY
`style` | 归档列表的显示方式。使用 `list` 以无序列表（unordered list）方式显示。 | list
`separator` | 归档间的分隔符号。只有在 `style` 不是 `list` 时有用。 | ,
`class` | 归档列表的 class 名称。 | archive
`transform` | 改变归档名称显示方法的函数。请查看 [list_categories](#list-categories) 中给出的例子 |

### list_posts

插入文章列表。

``` js
<%- list_posts([options]) %>
```

参数 | 描述 | 默认值
--- | --- | ---
`orderby` | 文章排列方式 | date
`order` | 文章排列顺序。`1`, `asc` 升序；`-1`, `desc` 降序。 | -1
`style` | 文章列表的显示方式。使用 `list` 以无序列表（unordered list）方式显示。 | list
`separator` | 文章间的分隔符号。只有在 `style` 不是 `list` 时有用。 | ,
`class` | 文章列表的 class 名称。 | post
`amount` | 要显示的文章数量（0 = 无限制） | 6
`transform` | 改变文章名称显示方法的函数。请查看 [list_categories](#list-categories) 中给出的例子 |

### tagcloud

插入标签云。

``` js
<%- tagcloud([tags], [options]) %>
```

参数 | 描述 | 默认值
--- | --- | ---
`min_font` | 最小字体尺寸 | 10
`max_font` | 最大字体尺寸 | 20
`unit` | 字体尺寸的单位 | px
`amount` | 标签总量 | 40
`orderby` | 标签排列方式 | name
`order` | 标签排列顺序。`1`, `sac` 升序；`-1`, `desc` 降序 | 1
`color` | 使用颜色 | false
`start_color` | 开始的颜色。您可使用十六进位值（`#b700ff`），rgba（`rgba(183, 0, 255, 1)`），hsla（`hsla(283, 100%, 50%, 1)`）或 [颜色关键字]。此变量仅在 `color` 参数开启时才有用。 |
`end_color` | 结束的颜色。您可使用十六进位值（`#b700ff`），rgba（`rgba(183, 0, 255, 1)`），hsla（`hsla(283, 100%, 50%, 1)`）或 [颜色关键字]。此变量仅在 `color` 参数开启时才有用。 |
`class` | 标签的 class name 前缀
`level` | 不同 class name 的总数。此变量仅在 `class` 参数设定时才有用。 | 10

## 其他

### paginator

插入分页链接。

``` js
<%- paginator(options) %>
```

参数 | 描述 | 默认值
--- | --- | ---
`base` | 基础网址 | /
`format` | 网址格式 | page/%d/
`total` | 分页总数 | 1
`current` | 目前页数 | 0
`prev_text` | 上一页链接的文字。仅在 `prev_next` 设定开启时才有用。 | Prev
`next_text` | 下一页链接的文字。仅在 `prev_next` 设定开启时才有用。 | Next
`space` | 空白文字 | &hellip;
`prev_next` | 显示上一页和下一页的链接 | true
`end_size` | 显示于两侧的页数 | 1
`mid_size` | 显示于中间的页数 | 2
`show_all` | 显示所有页数。如果开启此参数的话，`end_size` 和 `mid_size` 就没用了。 | false
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

插入 Google 搜索框。

``` js
<%- search_form(options) %>
```

参数 | 描述 | 默认值
--- | --- | ---
`class` | 表单的 class name | search-form
`text` | 搜索提示文字 | Search
`button` | 显示搜索按钮。此参数可为布尔值（boolean）或字符串，当设定是字符串的时候，即为搜索按钮的文字。 | false

### number_format

格式化数字。

``` js
<%- number_format(number, [options]) %>
```

参数 | 描述 | 默认值
--- | --- | ---
`precision` | 数字精度。此选项可为 `false` 或非负整数。 | false
`delimiter` | 千位数分隔符号 | ,
`separator` | 整数和小数之间的分隔符号 | .

**示例：**

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

插入 open graph 资源。

``` js
<%- open_graph([options]) %>
```

参数 | 描述 | 默认值
--- | --- | ---
`title` | 页面标题 (`og:title`) | `page.title`
`type` | 页面类型 (`og:type`) | blog
`url` | 页面网址 (`og:url`) | `url`
`image` | 页面图片 (`og:image`) | 内容中的图片
`site_name` | 网站名称 (`og:site_name`) | `config.title`
`description` | 页面描述 (`og:description`) | 内容摘要或前 200 字
`twitter_card` | Twitter 卡片类型 (`twitter:card`) | summary
`twitter_id` | Twitter ID (`twitter:creator`) |
`twitter_site` | Twitter 网站 (`twitter:site`) |
`google_plus` | Google+ 个人资料链接 |
`fb_admins` | Facebook 管理者 ID |
`fb_app_id` | Facebook 应用程序 ID |

### toc

解析内容中的标题标签 (h1~h6) 并插入目录。

``` js
<%- toc(str, [options]) %>
```

参数 | 描述 | 默认值
--- | --- | ---
`class` | Class 名称 | toc
`list_number` | 显示编号 | true
`max_depth` | 生成 TOC 的最大深度 | 6
`min_depth` | 生成 TOC 的最小深度 | 1

**示例：**

``` js
<%- toc(page.content) %>
```

[颜色关键字]: http://www.w3.org/TR/css3-color/#svg-color
[Moment.js]: http://momentjs.com/
[Open Graph]: http://ogp.me/
