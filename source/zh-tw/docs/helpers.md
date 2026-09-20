---
title: Helpers
---

Helpers are used in templates to help you insert snippets quickly. Helpers cannot be used in source files.

You could easily [write your own custom helper](https://hexo.io/api/helper.html) or use our ready-made helpers.

{% youtube Uc53pW0GJHU %}

## 網址

### url_for

Returns a URL with the root path prefixed. Output is encoded automatically.

```js
<%- url_for(path) %>
```

| Option     | Description          | Default                         |
| ---------- | -------------------- | ------------------------------- |
| `relative` | Output relative link | Value of `config.relative_link` |

**Examples:**

```yml
_config.yml
root: /blog/ # example
```

```js
<%- url_for('/a/path') %>
// /blog/a/path
```

Relative link, follows `relative_link` option by default e.g. post/page path is '/foo/bar/index.html'

```yml
_config.yml
relative_link: true
```

```js
<%- url_for('/css/style.css') %>
// ../../css/style.css

/* Override option
 * you could also disable it to output a non-relative link,
 * even when `relative_link` is enabled and vice versa.
 */
<%- url_for('/css/style.css', {relative: false}) %>
// /css/style.css
```

### relative_url

取得與 `from` 相對的 `to` 路徑。

```js
<%- relative_url(from, to) %>
```

**Examples:**

```js
<%- relative_url('foo/bar/', 'css/style.css') %>
// ../../css/style.css
```

### full_url_for

Returns a URL with the `config.url` prefixed. Output is encoded automatically.

```js
<%- full_url_for(path) %>
```

**Examples:**

```yml
_config.yml
url: https://example.com/blog # example
```

```js
<%- full_url_for('/a/path') %>
// https://example.com/blog/a/path
```

### gravatar

Returns the gravatar image URL from an email.

If you don't specify the [options] parameter, the default options will apply. Otherwise, you can set it to a number which will then be passed on as the size parameter to Gravatar. Finally, if you set it to an object, it will be converted into a query string of parameters for Gravatar.

```js
<%- gravatar(email, [size]) %>
```

| Option | Description       | Default |
| ------ | ----------------- | ------- |
| `s`    | Output image size | 40      |
| `d`    | Default image     |         |
| `f`    | Force default     |         |
| `r`    | Rating            |         |

More info: [Gravatar](https://en.gravatar.com/site/implement/images/)

**Examples:**

```js
<%- gravatar('a@abc.com') %>
// https://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787

<%- gravatar('a@abc.com', 40) %>
// https://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787?s=40

<%- gravatar('a@abc.com' {s: 40, d: 'https://via.placeholder.com/150'}) %>
// https://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787?s=40&d=https%3A%2F%2Fvia.placeholder.com%2F150
```

## HTML 標籤

### css

載入 CSS 檔案。 `path` can be a string, an array, an object or an array of objects. `path` 可以是陣列或字串，如果 `path` 開頭不是 `/` 或任何協議，則會自動加上根路徑；如果後面沒有加上 `.css` 副檔名的話，也會自動加上。 Use object type for custom attributes.

```js
<%- css(path, ...) %>
```

**Examples:**

```js
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

載入 JavaScript 檔案。 `path` can be a string, an array, an object or an array of objects. `path` 可以是陣列或字串，如果 `path` 開頭不是 `/` 或任何協議，則會自動加上根路徑；如果後面沒有加上 `.js` 副檔名的話，也會自動加上。 Use object type for custom attributes.

```js
<%- js(path, ...) %>
```

**Examples:**

```js
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

插入連結。

```js
<%- link_to(path, [text], [options]) %>
```

| Option     | Description | Default |
| ---------- | ----------- | ------- |
| `external` | 在新視窗開啟連結    | false   |
| `class`    | Class 名稱    |         |
| `id`       | ID          |         |

**Examples:**

```js
<%- link_to('http://www.google.com') %>
// <a href="http://www.google.com" title="http://www.google.com">http://www.google.com</a>

<%- link_to('http://www.google.com', 'Google') %>
// <a href="http://www.google.com" title="Google">Google</a>

<%- link_to('http://www.google.com', 'Google', {external: true}) %>
// <a href="http://www.google.com" title="Google" target="_blank" rel="noopener">Google</a>
```

### mail_to

插入電子郵件連結。

```js
<%- mail_to(path, [text], [options]) %>
```

| Option    | Description  |
| --------- | ------------ |
| `class`   | Class 名稱     |
| `id`      | ID           |
| `subject` | 郵件主旨         |
| `cc`      | 副本（CC）       |
| `bcc`     | 密件副本（BCC）    |
| `body`    | Mail content |

**Examples:**

```js
<%- mail_to('a@abc.com') %>
// <a href="mailto:a@abc.com" title="a@abc.com">a@abc.com</a>

<%- mail_to('a@abc.com', 'Email') %>
// <a href="mailto:a@abc.com" title="Email">Email</a>
```

### image_tag

插入圖片。

```js
<%- image_tag(path, [options]) %>
```

| Option   | Description |
| -------- | ----------- |
| `alt`    | 圖片的替代文字     |
| `class`  | Class 名稱    |
| `id`     | ID          |
| `width`  | 圖片寬度        |
| `height` | 圖片高度        |

### favicon_tag

插入 favicon。

```js
<%- favicon_tag(path) %>
```

### feed_tag

插入 feed 連結。

```js
<%- feed_tag(path, [options]) %>
```

| Option  | Description | Default        |
| ------- | ----------- | -------------- |
| `title` | Feed 標題     | `config.title` |
| `type`  | Feed 類型     |                |

**Examples:**

```js
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

檢查 `path` 是否符合目前頁面的網址。 開啟 `strict` 選項啟用嚴格比對。

```js
<%- is_current(path, [strict]) %>
```

### is_home

檢查目前是否為首頁。

```js
<%- is_home() %>
```

### is_home_first_page (+6.3.0)

Check whether the current page is the first of home page.

```js
<%- is_home_first_page() %>
```

### is_post

Check whether the current page is a post.

```js
<%- is_post() %>
```

### is_page

Check whether the current page is a page.

```js
<%- strip_html('It\'s not <b>important</b> anymore!') %>
// It's not important anymore!
```

### is_archive

Check whether the current page is an archive page.

```js
<%- is_archive() %>
```

### is_year

Check whether the current page is a yearly archive page.

```js
<%- is_year() %>
```

### is_month

Check whether the current page is a monthly archive page.

```js
<%- is_month() %>
```

### is_category

Check whether the current page is a category page. If a string is given as parameter, check whether the current page match the given category.

```js
<%- is_category() %>
```

### is_tag

Check whether the current page is a tag page. If a string is given as parameter, check whether the current page match the given tag.

```js
<%- is_tag() %>
```

## String Manipulation

### trim

清除字串的開頭和結尾空白。

```js
<%- trim(string) %>
```

### strip_html

清除字串中的 HTML 標籤。

```js
<%- strip_html(string) %>
```

**Examples:**

```js
<%- strip_html('It\'s not <b>important</b> anymore!') %>
// It's not important anymore!
```

### titlecase

把字串轉換為正確的 Title case。

```js
<%- titlecase(string) %>
```

**Examples:**

```js
<%- titlecase('this is an apple') %>
# This is an Apple
```

### markdown

使用 Markdown 渲染字串。

```js
<%- markdown(str) %>
```

**Examples:**

```js
<%- markdown('make me **strong**') %>
// make me <strong>strong</strong>
```

### render

渲染字串。

```js
<%- render(str, engine, [options]) %>
```

**Examples:**

```js
<%- render('p(class="example") Test', 'pug'); %>
// <p class="example">Test</p>
```

See [Rendering](https://hexo.io/zh-twapi/rendering) for more details.

### word_wrap

使每行的字串長度不超過 `length`。 `length` 預設為 80。

```js
<%- word_wrap(str, [length]) %>
```

**Examples:**

```js
<%- word_wrap('Once upon a time', 8) %>
// Once upon\n a time
```

### truncate

Truncates text after certain `length`. Default is 30 characters.

```js
<%- truncate(text, length) %>
```

**Examples:**

```js
<%- truncate('Once upon a time in a world far far away', 16) %>
// Once upon a time

<%- truncate('Once upon a time in a world far far away', {length: 17, separator: ' '}) %>
// Once upon a...

<%- truncate('And they found that many people were sleeping better.', {length: 25, omission: '... (continued)'}) %>
// And they f... (continued)
```

### escape_html

Escapes HTML entities in a string.

```js
<%- escape_html(str) %>
```

**Examples:**

```js
<%- escape_html('<p>Hello "world".</p>') %>
// &lt;p&gt;Hello &quot;world&quot;.&lt;&#x2F;p&gt;
```

## 模板

### partial

Loads other template files. You can define local variables in `locals`.

```js
<%- partial(layout, [locals], [options]) %>
```

| Option  | Description                       | Default |
| ------- | --------------------------------- | ------- |
| `cache` | 儲存快取（使用 Fragment cache）           | `false` |
| `only`  | 限制區域變數。 在模板中只能使用 `locals` 中設定的變數。 | `false` |

### fragment_cache

Caches the contents in a fragment. It saves the contents within a fragment and serves the cache when the next request comes in.

```js
<%- fragment_cache(id, fn);
```

**Examples:**

```js
<%- fragment_cache('header', function(){
  return '<header></header>';
}) %>
```

## 日期與時間

### date

插入格式化的日期。 `date` 可以是 UNIX 時間、ISO 字串、Date 物件或 [Moment.js][] 物件。 `format` 預設為 `date_format` 設定。

```js
<%- date(date, [format]) %>
```

**Examples:**

```js
<%- date(Date.now()) %>
// 2013-01-01

<%- date(Date.now(), 'MMM D YYYY') %>
// Jan 1 2013
```

### date_xml

插入 XML 格式的日期。 `date` 可以是 UNIX 時間、ISO 字串、Date 物件或 [Moment.js][] 物件。

```js
<%- date_xml(date) %>
```

**Examples:**

```js
<%- date_xml(Date.now()) %>
// 2013-01-01T00:00:00.000Z
```

### time

插入格式化的時間。 `date` 可以是 UNIX 時間、ISO 字串、Date 物件或 [Moment.js][] 物件。 `format` 預設為 `time_format` 設定。

```js
<%- time(date, [format]) %>
```

**Examples:**

```js
<%- time(Date.now()) %>
// 13:05:12

<%- time(Date.now(), 'h:mm:ss a') %>
// 1:05:12 pm
```

### full_date

插入格式化的日期和時間。 `date` 可以是 UNIX 時間、ISO 字串、Date 物件或 [Moment.js][] 物件。 `format` 預設為 `date_format + time_format` 設定。

```js
<%- full_date(date, [format]) %>
```

**Examples:**

```js
<%- full_date(new Date()) %>
// Jan 1, 2013 0:00:00

<%- full_date(new Date(), 'dddd, MMMM Do YYYY, h:mm:ss a') %>
// Tuesday, January 1st 2013, 12:00:00 am
```

### relative_date

Inserts relative time from now. `date` can be unix time, ISO string, date object, or [Moment.js][] object.

```js
<%- relative_date(date) %>
```

**Examples:**

```js
<%- relative_date(new Date()) %>
// a few seconds ago

<%- relative_date(new Date(1000000000000)) %>
// 22 years ago
```

### time_tag

Inserts time tag. Inserts relative time from now. `date` can be unix time, ISO string, date object, or [Moment.js][] object. Inserts time tag. `date` can be unix time, ISO string, date object, or [Moment.js][] object. `format` is `date_format` setting by default.

```js
<%- time_tag(date, [format]) %>
```

**Examples:**

```js
<%- time_tag(new Date()) %>
// <time datetime="2024-01-22T06:35:31.108Z">2024-01-22</time>

<%- time_tag(new Date(), 'MMM-D-YYYY') %>
// <time datetime="2024-01-22T06:35:31.108Z">Jan-22-2024</time>
```

### moment

[Moment.js][] 函式庫。

## 列表

### list_categories

插入彙整列表。

```js
<%- list_categories([categories], [options]) %>
```

| Option       | Description                                                                                                                       | Default  |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `orderby`    | 標籤排列方式                                                                                                                            | name     |
| `order`      | 排列順序。 `1`, `asc` 升冪；`-1`, `desc` 降冪。                                                                                              | 1        |
| `show_count` | Display the number of posts for each category                                                                                     | true     |
| `style`      | Style to display the category list. 分類列表的顯示方式。 使用 `list` 以無序列表（unordered list）方式顯示。 Use `false` or any other value to disable it. | list     |
| `separator`  | 分類間的分隔符號。 只有在 `style` 不是 `list` 時有用。                                                                                              | ,        |
| `depth`      | 要顯示的分類層級。 `0` 顯示所有層級的分類；`-1` 和 `0` 很類似，但是顯示不分層級；`1` 只顯示第一層的分類。                                                                    | 0        |
| `class`      | 分類列表的 class 名稱。                                                                                                                   | category |
| `transform`  | The function that changes the display of category name.                                                                           |          |
| `suffix`     | Add a suffix to link.                                                                                                             | None     |

**Examples:**

```js
檢查目前是否為分類彙整頁面。
```

### list_tags

Inserts a list of all tags.

```js
<%- list_tags([tags], [options]) %>
```

| Option       | Description                                                                                                       | Default |
| ------------ | ----------------------------------------------------------------------------------------------------------------- | ------- |
| `orderby`    | 分類排列方式                                                                                                            | name    |
| `order`      | 分類排列順序。 `1`, `asc` 升冪；`-1`, `desc` 降冪。                                                                            | 1       |
| `show_count` | Display the number of posts for each tag                                                                          | true    |
| `style`      | Style to display the tag list. 使用 `list` 以無序列表（unordered list）方式顯示。 Use `false` or any other value to disable it. | list    |
| `separator`  | 文章間的分隔符號。 只有在 `style` 不是 `list` 時有用。                                                                              | ,       |
| `class`      | Class name of tag list (string) or customize each tag's class (object, see below).                                | tag     |
| `transform`  | The function that changes the display of tag name. See examples in [list_categories](#list-categories).           |         |
| `amount`     | 要顯示的標籤數量（0 = 無限制）                                                                                                 | 0       |
| `suffix`     | Add a suffix to link.                                                                                             | None    |

Class advanced customization:

| Option        | Description                                                                                                                                     | Default                                                  |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `class.ul`    | `<ul>` class name (only for style `list`)                                                                                                 | `tag-list` (list style)                                  |
| `class.li`    | `<li>` class name (only for style `list`)                                                                                                 | `tag-list-item` (list style)                             |
| `class.a`     | `<a>` class name                                                                                                                          | `tag-list-link` (list style) `tag-link` (normal style)   |
| `class.label` | `<span>` class name where the tag label is stored (only for normal style, when `class.label` is set the label is put in a `<span>`) | `tag-label` (normal style)                               |
| `class.count` | `<span>` class name where the tag counter is stored (only when `show_count` is `true`)                                                    | `tag-list-count` (list style) `tag-count` (normal style) |

Examples:

```ejs
<%- list_tags(site.tags, {class: 'classtest', style: false, separator: ' | '}) %>
<%- list_tags(site.tags, {class: 'classtest', style: 'list'}) %>
<%- list_tags(site.tags, {class: {ul: 'ululul', li: 'lilili', a: 'aaa', count: 'ccc'}, style: false, separator: ' | '}) %>
<%- list_tags(site.tags, {class: {ul: 'ululul', li: 'lilili', a: 'aaa', count: 'ccc'}, style: 'list'}) %>
```

### list_archives

插入標籤列表。

```js
<%- list_archives([options]) %>
```

| Option       | Description                                                                                                           | Default   |
| ------------ | --------------------------------------------------------------------------------------------------------------------- | --------- |
| `type`       | 類型。 此設定可為 `yearly` 或 `monthly`。                                                                                       | monthly   |
| `order`      | 文章排列順序。 `1`, `asc` 升冪；`-1`, `desc` 降冪。                                                                                | 1         |
| `show_count` | Display the number of posts for each archive                                                                          | true      |
| `format`     | 日期格式                                                                                                                  | MMMM YYYY |
| `style`      | Style to display the archive list. 使用 `list` 以無序列表（unordered list）方式顯示。 Use `false` or any other value to disable it. | list      |
| `separator`  | 標籤間的分隔符號。 只有在 `style` 不是 `list` 時有用。                                                                                  | ,         |
| `class`      | 彙整列表的 class 名稱。                                                                                                       | archive   |
| `transform`  | The function that changes the display of archive name. See examples in [list_categories](#list-categories).           |           |

### list_posts

插入文章列表。

```js
<%- list_posts([options]) %>
```

| Option      | Description                                                                                              | Default |
| ----------- | -------------------------------------------------------------------------------------------------------- | ------- |
| `orderby`   | Order of posts                                                                                           | date    |
| `order`     | 標籤排列順序。 `1`, `asc` 升冪；`-1`, `desc` 降冪。                                                                   | 1       |
| `style`     | 文章列表的顯示方式。 使用 `list` 以無序列表（unordered list）方式顯示。 Use `false` or any other value to disable it.            | list    |
| `separator` | 彙整間的分隔符號。 只有在 `style` 不是 `list` 時有用。                                                                     | ,       |
| `class`     | 插入分類列表。                                                                                                  | post    |
| `amount`    | 要顯示的文章數量（0 = 無限制）                                                                                        | 6       |
| `transform` | The function that changes the display of post name. See examples in [list_categories](#list-categories). |         |

### tagcloud

插入標籤雲。

```js
<%- tagcloud([tags], [options]) %>
```

| Option                 | Description                                                                                                                  | Default   |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------- | --------- |
| `min_font`             | 最小字體尺寸                                                                                                                       | 10        |
| `max_font`             | 最大字體尺寸                                                                                                                       | 20        |
| `unit`                 | 字體尺寸的單位                                                                                                                      | px        |
| `amount`               | Total amount of tags                                                                                                         | unlimited |
| `orderby`              | Order of tags                                                                                                                | name      |
| `order`                | 標籤排列順序。 `1`, `sac` 升冪；`-1`, `desc` 降冪                                                                                        | 1         |
| `color`                | Colorizes the tag cloud                                                                                                      | false     |
| `start_color`          | 開始的顏色。 您可使用十六進位值（`#b700ff`），rgba（`rgba(183, 0, 255, 1)`），hsla（`hsla(283, 100%, 50%, 1)`）或 [顏色關鍵字][]。 此選項僅在 `color` 設定開啟時才有用。 |           |
| `end_color`            | 結束的顏色。 您可使用十六進位值（`#b700ff`），rgba（`rgba(183, 0, 255, 1)`），hsla（`hsla(283, 100%, 50%, 1)`）或 [顏色關鍵字][]。 此選項僅在 `color` 設定開啟時才有用。 |           |
| `class`                | 標籤的 class name prefix of tags                                                                                                |           |
| `level`                | 不同 class name 的總數。 此選項僅在 `class` 設定時才有用。                                                                                     | 10        |
| `show_count` (+6.3.0)  | Display the number of posts for each tag                                                                                     | false     |
| `count_class` (+6.3.0) | 改變標籤名稱顯示方法的函數                                                                                                                | count     |

**Examples:**

```js
// Default options
<%- tagcloud() %>

// Limit number of tags to 30
<%- tagcloud({amount: 30}) %>
```

## 其他

### paginator

Inserts a paginator.

```js
<%- paginator(options) %>
```

| Option                     | Description                                                                        | Default       |
| -------------------------- | ---------------------------------------------------------------------------------- | ------------- |
| `base`                     | 基礎網址                                                                               | /             |
| `format`                   | 網址格式                                                                               | page/%d/      |
| `total`                    | 顯示於中間的頁數                                                                           | 1             |
| `current`                  | 目前頁數                                                                               | 0             |
| `prev_text`                | 上一頁連結的文字。 僅在 `prev_next` 設定開啟時才有用。                                                 | Prev          |
| `next_text`                | 下一頁連結的文字。 僅在 `prev_next` 設定開啟時才有用。                                                 | Next          |
| `space`                    | 空白文字                                                                               | &hellp;       |
| `prev_next`                | 顯示上一頁和下一頁的連結                                                                       | true          |
| `end_size`                 | The number of pages displayed on the start and the end side                        | 1             |
| `mid_size`                 | The number of pages displayed between current page, but not including current page | 2             |
| `show_all`                 | 顯示所有頁數。 如果開啟此設定的話，`end_size` 和 `mid_size` 就沒用了。                                    | false         |
| `escape`                   | Escape HTML tags                                                                   | true          |
| 移除超過 `length` 的字串。         | 選項                                                                                 | `分頁總數`        |
| `current_class` (+6.3.0)   | 文章排列方式                                                                             | `current`     |
| `space_class` (+6.3.0)     | 千位數分隔符號                                                                            | `space`       |
| `prev_class` (+6.3.0)      | 選項                                                                                 | `extend prev` |
| `next_class` (+6.3.0)      | 顯示於兩側的頁數                                                                           | `extend next` |
| `force_prev_next` (+6.3.0) | 顯示每個分類的文章總數                                                                        | false         |

**Examples:**

```js
<%- paginator({
  prev_text: '<',
  next_text: '>'
}) %>
```

```html
<!-- Rendered as -->
<a href="/1/">&lt;</a>
<a href="/1/">1</a>
2
<a href="/3/">3</a>
<a href="/3/">&gt;</a>
```

```js
<%- paginator({
  prev_text: '<i class="fa fa-angle-left"></i>',
  next_text: '<i class="fa fa-angle-right"></i>',
  escape: false
}) %>
```

```html
<!-- Rendered as -->
<a href="/1/"><i class="fa fa-angle-left"></i></a>
<a href="/1/">1</a>
2
<a href="/3/">3</a>
<a href="/3/"><i class="fa fa-angle-right"></i></a>
```

### search_form

插入 Google 搜尋表單。

```js
<%- search_form(options) %>
```

| Option   | Description                                                                                                | Default     |
| -------- | ---------------------------------------------------------------------------------------------------------- | ----------- |
| `class`  | 表單的 class name                                                                                             | search-form |
| `text`   | 搜尋提示文字                                                                                                     | Search      |
| `button` | 顯示搜尋按鈕。 The value can be a boolean or a string. If the value is a string, it'll be the text of the button. | false       |

### number_format

格式化數字。

```js
<%- number_format(number, [options]) %>
```

| Option      | Description                                              | Default |
| ----------- | -------------------------------------------------------- | ------- |
| `precision` | 數字精確度。 此選項可為 `false` 或非負整數。                              | false   |
| `delimiter` | The thousands delimiter                                  | ,       |
| `separator` | The separator between the fractional and integer digits. | .       |

**Examples:**

```js
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

```js
<%- meta_generator() %>
```

**Examples:**

```js
<%- meta_generator() %>
// <meta name="generator" content="Hexo 4.0.0">
```

### open_graph

插入 [Open Graph][] 資料。

```js
<%- open_graph([options]) %>
```

| Option          | Description                                          | Default                                                 |
| --------------- | ---------------------------------------------------- | ------------------------------------------------------- |
| `title`         | 頁面標題 (`og:title`)                                    | `page.title`                                            |
| `type`          | 頁面類型 (`og:type`)                                     | article(post page)<br>website(non-post page)      |
| `url`           | 頁面網址 (`og:url`)                                      | `url`                                                   |
| `image`         | 頁面圖片 (`og:image`)                                    | All images in the content                               |
| `author`        | Article author (`og:article:author`)                 | `config.author`                                         |
| `date`          | Article published time (`og:article:published_time`) | Page published time                                     |
| `updated`       | Article modified time (`og:article:modified_time`)   | Page modified time                                      |
| `language`      | Article language (`og:locale`)                       | `page.lang \|\| page.language \|\| config.language` |
| `site_name`     | 網站名稱 (`og:site_name`)                                | `config.title`                                          |
| `description`   | 頁面描述 (`og:description`)                              | Page excerpt or first 200 characters of the content     |
| `twitter_card`  | Twitter 卡片類型 (`twitter:card`)                        | summary                                                 |
| `twitter_id`    | Twitter ID (`twitter:creator`)                       |                                                         |
| `twitter_site`  | Twitter 網站 (`twitter:site`)                          |                                                         |
| `twitter_image` | Twitter 圖片 (`twitter:image`)                         |                                                         |
| `google_plus`   | Google+ 個人資料連結                                       |                                                         |
| `fb_admins`     | Facebook 管理者 ID                                      |                                                         |
| `fb_app_id`     | Facebook 應用程式 ID                                     |                                                         |

### toc

Parses all heading tags (h1~h6) in the content and inserts a table of contents.

```js
<%- toc(str, [options]) %>
```

| Option                  | Description                              | Default           |
| ----------------------- | ---------------------------------------- | ----------------- |
| `class`                 | Class 名稱                                 | `toc`             |
| `class_item` (+6.3.0)   | 文章列表的 class 名稱。                          | `${class}-item`   |
| `class_link` (+6.3.0)   | 插入分頁連結。                                  | `${class}-link`   |
| `class_text` (+6.3.0)   | 改變文章名稱顯示方法的函數                            | `${class}-text`   |
| `class_child` (+6.3.0)  | 改變彙整名稱顯示方法的函數                            | `${class}-child`  |
| `class_number` (+6.3.0) | 顯示編號                                     | `${class}-number` |
| `class_level` (+6.3.0)  | 改變分類名稱顯示方法的函數                            | `${class}-level`  |
| `list_number`           | Displays list number                     | true              |
| `max_depth`             | 生成 TOC 的最大深度                             | 6                 |
| `min_depth`             | 生成 TOC 的最小深度                             | 1                 |
| `max_items` (+7.3.0)    | Maximum number of items in generated toc | `Infinity`        |

**Examples:**

```js
<%- toc(page.content) %>
```

#### data-toc-unnumbered (+6.1.0)

Headings with attribute `data-toc-unnumbered="true"` will be marked as unnumbered (list number will not be display).

{% note warn "Warning!" %} %}
For using `data-toc-unnumbered="true"`, the renderer must have the option to add CSS classes.

Please see below PRs.

- https://github.com/hexojs/hexo/pull/4871
- https://github.com/hexojs/hexo-util/pull/269
- https://github.com/hexojs/hexo-renderer-markdown-it/pull/174
  {% endnote %}

[顏色關鍵字]: http://www.w3.org/TR/css3-color/#svg-color
[Moment.js]: http://momentjs.com/
[Open Graph]: http://ogp.me/
