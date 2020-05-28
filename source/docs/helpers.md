---
title: Helpers
---
Helpers are used in templates to help you insert snippets quickly.  Helpers cannot be used in source files.

You could easily [write your own custom helper](https://hexo.io/api/helper.html) or use our ready-made helpers.

{% youtube Uc53pW0GJHU %}

## URL

### url_for

Returns a url with the root path prefixed. Output is encoded automatically.

``` js
<%- url_for(path, [option]) %>
```

Option | Description | Default
--- | --- | ---
`relative` | Output relative link | Value of `config.relative_link`

**Examples:**

``` yml
_config.yml
root: /blog/ # example
```

``` js
<%- url_for('/a/path') %>
// /blog/a/path
```

Relative link, follows `relative_link` option by default
e.g. post/page path is '/foo/bar/index.html'

``` yml
_config.yml
relative_link: true
```

``` js
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

Returns the relative URL from `from` to `to`.

``` js
<%- relative_url(from, to) %>
```

**Examples:**

``` js
<%- relative_url('foo/bar/', 'css/style.css') %>
// ../../css/style.css
```

### full_url_for

Returns a url with the `config.url` prefixed. Output is encoded automatically.

``` js
<%- full_url_for(path) %>
```

**Examples:**

``` yml
_config.yml
url: https://example.com/blog # example
```

``` js
<%- full_url_for('/a/path') %>
// https://example.com/blog/a/path
```

### gravatar

Returns the gravatar image url from an email.

If you didn't specify the [options] parameter, the default options will apply. Otherwise, you can set it to a number which will then be passed on as the size parameter to Gravatar. Finally, if you set it to an object, it will be converted into a query string of parameters for Gravatar.

``` js
<%- gravatar(email, [options]) %>
```

Option | Description | Default
--- | --- | ---
`s` | Output image size | 80
`d` | Default image |
`f` | Force default |
`r` | Rating |

More info: [Gravatar](https://en.gravatar.com/site/implement/images/)

**Examples:**

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

Loads CSS files. `path` can be an array or a string. `path` can be a string, an array, an object or an array of objects. [`/<root>/`](/docs/configuration#URL) value is prepended while `.css` extension is appended to the `path` automatically. Use object type for custom attributes.

``` js
<%- css(path, ...) %>
```

**Examples:**

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

Loads JavaScript files. `path` can be a string, an array, an object or an array of objects. [`/<root>/`](/docs/configuration#URL) value is prepended while `.js` extension is appended to the `path` automatically. Use object type for custom attributes.

``` js
<%- js(path, ...) %>
```

**Examples:**

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

Inserts a link.

``` js
<%- link_to(path, [text], [options]) %>
```

Option | Description | Default
--- | --- | ---
`external` | Opens the link in a new tab | false
`class` | Class name |
`id` | ID |

**Examples:**

``` js
<%- link_to('http://www.google.com') %>
// <a href="http://www.google.com" title="http://www.google.com">http://www.google.com</a>

<%- link_to('http://www.google.com', 'Google') %>
// <a href="http://www.google.com" title="Google">Google</a>

<%- link_to('http://www.google.com', 'Google', {external: true}) %>
// <a href="http://www.google.com" title="Google" target="_blank" rel="noopener">Google</a>
```

### mail_to

Inserts a mail link.

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

**Examples:**

``` js
<%- mail_to('a@abc.com') %>
// <a href="mailto:a@abc.com" title="a@abc.com">a@abc.com</a>

<%- mail_to('a@abc.com', 'Email') %>
// <a href="mailto:a@abc.com" title="Email">Email</a>
```

### image_tag

Inserts an image.

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

Inserts a favicon.

``` js
<%- favicon_tag(path) %>
```

### feed_tag

Inserts a feed link.

``` js
<%- feed_tag(path, [options]) %>
```

Option | Description | Default
--- | --- | ---
`title` | Feed title |
`type` | Feed type | atom

## Conditional Tags

### is_current

Check whether `path` matches the URL of the current page. Use `strict` options to enable strict matching.

``` js
<%- is_current(path, [strict]) %>
```

### is_home

Check whether the current page is home page.

``` js
<%- is_home() %>
```

### is_post

Check whether the current page is a post.

``` js
<%- is_post() %>
```

### is_page

Check whether the current page is a page.

``` js
<%- is_page() %>
```

### is_archive

Check whether the current page is an archive page.

``` js
<%- is_archive() %>
```

### is_year

Check whether the current page is a yearly archive page.

``` js
<%- is_year() %>
```

### is_month

Check whether the current page is a monthly archive page.

``` js
<%- is_month() %>
```

### is_category

Check whether the current page is a category page.
If a string is given as parameter, check whether the current page match the given category.

``` js
<%- is_category() %>
<%- is_category('hobby') %>
```

### is_tag

Check whether the current page is a tag page.
If a string is given as parameter, check whether the current page match the given tag.

``` js
<%- is_tag() %>
<%- is_tag('hobby') %>
```

## String Manipulation

### trim

Removes prefixing and trailing spaces of a string.

``` js
<%- trim(string) %>
```

### strip_html

Sanitizes all HTML tags in a string.

``` js
<%- strip_html(string) %>
```

**Examples:**

``` js
<%- strip_html('It\'s not <b>important</b> anymore!') %>
// It's not important anymore!
```

### titlecase

Transforms a string into proper title caps.

``` js
<%- titlecase(string) %>
```

**Examples:**

``` js
<%- titlecase('this is an apple') %>
# This is an Apple
```

### markdown

Renders a string with Markdown.

``` js
<%- markdown(str) %>
```

**Examples:**

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

See [Rendering](https://hexo.io/api/rendering) for more details.

### word_wrap

Wraps text into lines no longer than `length`. `length` is 80 by default.

``` js
<%- word_wrap(str, [length]) %>
```

**Examples:**

``` js
<%- word_wrap('Once upon a time', 8) %>
// Once upon\n a time
```

### truncate

Truncates text after certain `length`. Default is 30 characters.

``` js
<%- truncate(text, [options]) %>
```

**Examples:**

``` js
<%- truncate('Once upon a time in a world far far away', {length: 17}) %>
// Once upon a ti...

<%- truncate('Once upon a time in a world far far away', {length: 17, separator: ' '}) %>
// Once upon a...

<%- truncate('And they found that many people were sleeping better.', {length: 25, omission: '... (continued)'}) %>
// And they f... (continued)
```

## Templates

### partial

Loads other template files. You can define local variables in `locals`.

``` js
<%- partial(layout, [locals], [options]) %>
```

Option | Description | Default
--- | --- | ---
`cache` | Cache contents (Use fragment cache) | `false`
`only` | Strict local variables. Only use variables set in `locals` in templates. | `false`

### fragment_cache

Caches the contents in a fragment. It saves the contents within a fragment and serves the cache when the next request comes in.

``` js
<%- fragment_cache(id, fn);
```

**Examples:**

``` js
<%- fragment_cache('header', function(){
  return '<header></header>';
}) %>
```

## Date & Time

### date

Inserts formatted date. `date` can be unix time, ISO string, date object, or [Moment.js] object. `format` is `date_format` setting by default.

``` js
<%- date(date, [format]) %>
```

**Examples:**

``` js
<%- date(Date.now()) %>
// 2013-01-01

<%- date(Date.now(), 'YYYY/M/D') %>
// Jan 1 2013
```

### date_xml

Inserts date in XML format. `date` can be unix time, ISO string, date object, or [Moment.js] object.

``` js
<%- date_xml(date) %>
```

**Examples:**

``` js
<%- date_xml(Date.now()) %>
// 2013-01-01T00:00:00.000Z
```

### time

Inserts formatted time. `date` can be unix time, ISO string, date object, or [Moment.js] object. `format` is `time_format` setting by default.

``` js
<%- time(date, [format]) %>
```

**Examples:**

``` js
<%- time(Date.now()) %>
// 13:05:12

<%- time(Date.now(), 'h:mm:ss a') %>
// 1:05:12 pm
```

### full_date

Inserts formatted date and time. `date` can be unix time, ISO string, date object, or [Moment.js] object. `format` is `date_format + time_format` setting by default.

``` js
<%- full_date(date, [format]) %>
```

**Examples:**

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

Inserts a list of all categories.

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
`class` | Class name of category list. | category
`transform` | The function that changes the display of category name. |
`suffix` | Add a suffix to link. | None

**Examples:**

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

Inserts a list of all tags.

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
`transform` | The function that changes the display of tag name. See examples in [list_categories](#list-categories). |
`amount` | The number of tags to display (0 = unlimited) | 0
`suffix` | Add a suffix to link. | None

### list_archives

Inserts a list of archives.

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
`transform` | The function that changes the display of archive name. See examples in [list_categories](#list-categories). |

### list_posts

Inserts a list of posts.

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
`transform` | The function that changes the display of post name. See examples in [list_categories](#list-categories). |

### tagcloud

Inserts a tag cloud.

``` js
<%- tagcloud([tags], [options]) %>
```

Option | Description | Default
--- | --- | ---
`min_font` | Minimum font size | 10
`max_font` | Maximum font size | 20
`unit` | Unit of font size | px
`amount` | Total amount of tags | unlimited
`orderby` | Order of tags | name
`order` | Sort order. `1`, `asc` as ascending; `-1`, `desc` as descending | 1
`color` | Colorizes the tag cloud | false
`start_color` | Start color. You can use hex (`#b700ff`), rgba (`rgba(183, 0, 255, 1)`), hsla (`hsla(283, 100%, 50%, 1)`) or [color keywords]. This option only works when `color` is true. |
`end_color` | End color. You can use hex (`#b700ff`), rgba (`rgba(183, 0, 255, 1)`), hsla (`hsla(283, 100%, 50%, 1)`) or [color keywords]. This option only works when `color` is true. |

**Examples:**

``` js
// Default options
<%- tagcloud() %>

// Limit number of tags to 30
<%- tagcloud({amount: 30}) %>
```

## Miscellaneous

### paginator

Inserts a paginator.

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
`show_all` | Display all pages. If this is set to true, `end_size` and `mid_size` will not work | false
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

Inserts a Google search form.

``` js
<%- search_form(options) %>
```

Option | Description | Default
--- | --- | ---
`class` | The class name of form | search-form
`text` | Search hint word | Search
`button` | Display search button. The value can be a boolean or a string. If the value is a string, it'll be the text of the button. | false

### number_format

Formats a number.

``` js
<%- number_format(number, [options]) %>
```

Option | Description | Default
--- | --- | ---
`precision` | The precision of number. The value can be `false` or a nonnegative integer. | false
`delimiter` | The thousands delimiter | ,
`separator` | The separator between the fractional and integer digits. | .

**Examples:**

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

Inserts [Open Graph] data.

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

Parses all heading tags (h1~h6) in the content and inserts a table of contents.

``` js
<%- toc(str, [options]) %>
```

Option | Description | Default
--- | --- | ---
`class` | Class name | toc
`list_number` | Displays list number | true
`max_depth` | Maximum heading depth of generated toc | 6
`min_depth` | Minimum heading depth of generated toc | 1

**Examples:**

``` js
<%- toc(page.content) %>
```

[color keywords]: http://www.w3.org/TR/css3-color/#svg-color
[Moment.js]: http://momentjs.com/
[Open Graph]: http://ogp.me/
