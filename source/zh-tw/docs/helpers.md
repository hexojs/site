title: 輔助函數（Helpers）
---
輔助函數幫助您在模版中快速插入內容。

## 網址

### url_for

在路徑前加上根路徑，從 Hexo 2.7 開始您應該使用此函數，避免使用 `config.root + path`。

``` js
<%- url_for(path) %>
```

### relative_url

取得與 `from` 相對的 `to` 路徑。

``` js
<%- relative_url(from, to) %>
```

### gravatar

插入 Gravatar 圖片。

``` js
<%- gravatar(email, [size]);
```

**範例：**

``` js
<%- gravatar('a@abc.com') %>
// http://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787

<%- gravatar('a@abc.com', 40) %>
// http://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787?s=40
```

## HTML 標籤

### css

載入 CSS 檔案。`path` 可以是陣列或字串，如果 `path` 開頭不是 `/` 或任何協議，則會自動加上根路徑；如果後面沒有加上 `.css` 副檔名的話，也會自動加上。

``` js
<%- css(path, ...) %>
```

**範例：**

``` js
<%- css('style.css') %>
// <link rel="stylesheet" href="/style.css" type="text/css">

<%- css(['style.css', 'screen.css']) %>
// <link rel="stylesheet" href="/style.css" type="text/css">
// <link rel="stylesheet" href="/screen.css" type="text/css">
```

### js

載入 JavaScript 檔案。`path` 可以是陣列或字串，如果 `path` 開頭不是 `/` 或任何協議，則會自動加上根路徑；如果後面沒有加上 `.js` 副檔名的話，也會自動加上。

``` js
<%- js(path, ...) %>
```

**範例：**

``` js
<%- js('script.js') %>
// <script type="text/javascript" src="/script.js"></script>

<%- js(['script.js', 'gallery.js']) %>
// <script type="text/javascript" src="/script.js"></script>
// <script type="text/javascript" src="/gallery.js"></script>
```

### link_to

插入連結。

``` js
<%- link_to(path, [text], [options]) %>
```

選項 | 描述 | 預設值
--- | --- | ---
`external` | 在新視窗開啟連結 | false
`class` | Class 名稱 |
`id` | ID |

**範例：**

``` js
<%- link_to('http://www.google.com') %>
// <a href="http://www.google.com" title="http://www.google.com">http://www.google.com</a>

<%- link_to('http://www.google.com', 'Google') %>
// <a href="http://www.google.com" title="Google">Google</a>

<%- link_to('http://www.google.com', 'Google', {external: true}) %>
// <a href="http://www.google.com" title="Google" target="_blank" rel="external">Google</a>
```

### mail_to

插入電子郵件連結。

``` js
<%- mail_to(path, [text], [options]) %>
```

選項 | 描述
--- | ---
`class` | Class 名稱
`id` | ID
`subject` | 郵件主旨
`cc` | 副本（CC）
`bcc` | 密件副本（BCC）
`body` | 郵件內容

**範例：**

``` js
<%- mail_to('a@abc.com') %>
// <a href="mailto:a@abc.com" title="a@abc.com">a@abc.com</a>

<%- mail_to('a@abc.com', 'Email') %>
// <a href="mailto:a@abc.com" title="Email">Email</a>
```

### image_tag

插入圖片。

``` js
<%- image_tag(path, [options]) %>
```

選項 | 描述
--- | ---
`alt` | 圖片的替代文字
`class` | Class 名稱
`id` | ID
`width` | 圖片寬度
`height` | 圖片高度

### favicon_tag

插入 favicon。

``` js
<%- favicon_tag(path) %>
```

### feed_tag

插入 feed 連結。

``` js
<%- feed_tag(path, [options]) %>
```

選項 | 描述 | 預設值
--- | --- | ---
`title` | Feed 標題 |
`type` | Feed 類型 | atom

## 判斷函數

### is_current

檢查 `path` 是否符合目前頁面的網址。開啟 `strict` 選項啟用嚴格比對。

``` js
<%- is_current(path, [strict]) %>
```

### is_home

檢查目前是否為首頁。

``` js
<%- is_home() %>
```

### is_post

檢查目前是否為文章。

``` js
<%- is_post() %>
```

### is_archive

檢查目前是否為彙整頁面。

``` js
<%- is_archive() %>
```

### is_year

檢查目前是否為年度彙整頁面。

``` js
<%- is_year() %>
```

### is_month

檢查目前是否為每月彙整頁面。

``` js
<%- is_month() %>
```

### is_category

檢查目前是否為分類彙整頁面。

``` js
<%- is_category() %>
```

### is_tag

檢查目前是否為標籤彙整頁面。

``` js
<%- is_tag() %>
```

## 字串處理

### trim

清除字串的開頭和結尾空白。

``` js
<%- trim(string) %>
```

### strip_html

清除字串中的 HTML 標籤。

``` js
<%- strip_html(string) %>
```

**範例：**

``` js
<%- strip_html('It's not <b>important</b> anymore!') %>
// It's not important anymore!
```

### titlecase

把字串轉換為正確的 Title case。

``` js
<%- titlecase(string) %>
```

**範例：**

``` js
<%- titlecase('this is an apple') %>
# This is an Apple
```

### markdown

使用 Markdown 渲染字串。

``` js
<%- markdown(str) %>
```

**範例：**

``` js
<%- markdown('make me **strong**') %>
// make me <strong>strong</strong>
```

### render

渲染字串。

``` js
<%- render(str, engine, [options]) %>
```

### word_wrap

使每行的字串長度不超過 `length`。`length` 預設為 80。

``` js
<%- word_wrap(str, [length]) %>
```

**範例：**

``` js
<%- word_wrap('Once upon a time', 8) %>
// Once upon\n a time
```

### truncate

移除超過 `length` 的字串。

``` js
<%- truncate(text, length) %>
```

**範例：**

``` js
<%- truncate('Once upon a time in a world far far away', 16) %>
// Once upon a time
```

## 模板

### partial

載入其他模板檔案，您可在 `locals` 設定區域變數。

``` js
<%- partial(layout, [locals], [options]) %>
```

選項 | 描述 | 預設值
--- | --- | ---
`cache` | 儲存快取（使用 Fragment cache） | `false`
`only` | 限制區域變數。在模板中只能使用 `locals` 中設定的變數。 | `false`

### fragment_cache

儲存局部快取。它儲存局部內容，下次使用時就能直接使用快取。

``` js
<%- fragment_cache(id, fn);
```

**範例：**

``` js
<%- fragment_cache('header', function(){
  return '<header></header>';
}) %>
```

## 日期與時間

### date

插入格式化的日期。`date` 可以是 UNIX 時間、ISO 字串、Date 物件或 [Moment.js] 物件。`format` 預設為 `date_format` 設定。

``` js
<%- date(date, [format]) %>
```

**範例：**

``` js
<%- date(Date.now()) %>
// 2013-01-01

<%- date(Date.now(), 'MMM D YYYY') %>
// Jan 1 2013
```

### date_xml

插入 XML 格式的日期。`date` 可以是 UNIX 時間、ISO 字串、Date 物件或 [Moment.js] 物件。

``` js
<%- date_xml(date) %>
```

**範例：**

``` js
<%- date_xml(Date.now()) %>
// 2013-01-01T00:00:00.000Z
```

### time

插入格式化的時間。`date` 可以是 UNIX 時間、ISO 字串、Date 物件或 [Moment.js] 物件。`format` 預設為 `time_format` 設定。

``` js
<%- time(date, [format]) %>
```

**範例：**

``` js
<%- time(Date.now()) %>
// 13:05:12

<%- time(Date.now(), 'h:mm:ss a') %>
// 1:05:12 pm
```

### full_date

插入格式化的日期和時間。`date` 可以是 UNIX 時間、ISO 字串、Date 物件或 [Moment.js] 物件。`format` 預設為 `date_format + time_format` 設定。

``` js
<%- full_date(date, [format]) %>
```

**範例：**

``` js
<%- full_date(new Date()) %>
// Jan 1, 2013 0:00:00

<%- full_date(new Date(), 'dddd, MMMM Do YYYY, h:mm:ss a') %>
// Tuesday, January 1st 2013, 12:00:00 am
```

### moment

[Moment.js] 函式庫。

## 列表

### list_categories

插入分類列表。

``` js
<%- list_categories([categories], [options]) %>
```

選項 | 描述 | 預設值
--- | --- | ---
`orderby` | 分類排列方式 | name
`order` | 分類排列順序。`1`, `asc` 升冪；`-1`, `desc` 降冪。 | 1
`show_count` | 顯示每個分類的文章總數 | true
`style` | 分類列表的顯示方式。使用 `list` 以無序列表（unordered list）方式顯示。 | list
`separator` | 分類間的分隔符號。只有在 `style` 不是 `list` 時有用。 | ,
`depth` | 要顯示的分類層級。`0` 顯示所有層級的分類；`-1` 和 `0` 很類似，但是顯示不分層級；`1` 只顯示第一層的分類。 | 0
`class` | 分類列表的 class 名稱。 | category
`transform` | 改變分類名稱顯示方法的函數 | 

### list_tags

插入標籤列表。

``` js
<%- list_tags([tags], [options]) %>
```

選項 | 描述 | 預設值
--- | --- | ---
`orderby` | 標籤排列方式 | name
`order` | 標籤排列順序。`1`, `asc` 升冪；`-1`, `desc` 降冪。 | 1
`show_count` | 顯示每個標籤的文章總數 | true
`style` | 標籤列表的顯示方式。使用 `list` 以無序列表（unordered list）方式顯示。 | list
`separator` | 標籤間的分隔符號。只有在 `style` 不是 `list` 時有用。 | ,
`class` | 標籤列表的 class 名稱。 | tag
`transform` | 改變標籤名稱顯示方法的函數 | 
`amount` | 要顯示的標籤數量（0 = 無限制） | 0

### list_archives

插入彙整列表。

``` js
<%- list_archives([options]) %>
```

選項 | 描述 | 預設值
--- | --- | ---
`type` | 類型。此設定可為 `yearly` 或 `monthly`。 | monthly
`order` | 排列順序。`1`, `asc` 升冪；`-1`, `desc` 降冪。 | 1
`show_count` | 顯示每個彙整的文章總數 | true
`format` | 日期格式 | MMMM YYYY
`style` | 彙整列表的顯示方式。使用 `list` 以無序列表（unordered list）方式顯示。 | list
`separator` | 彙整間的分隔符號。只有在 `style` 不是 `list` 時有用。 | ,
`class` | 彙整列表的 class 名稱。 | archive
`transform` | 改變彙整名稱顯示方法的函數 | 

### list_posts

插入文章列表。

``` js
<%- list_posts([options]) %>
```

選項 | 描述 | 預設值
--- | --- | ---
`orderby` | 文章排列方式 | date
`order` | 文章排列順序。`1`, `asc` 升冪；`-1`, `desc` 降冪。 | -1
`style` | 文章列表的顯示方式。使用 `list` 以無序列表（unordered list）方式顯示。 | list
`separator` | 文章間的分隔符號。只有在 `style` 不是 `list` 時有用。 | ,
`class` | 文章列表的 class 名稱。 | post
`amount` | 要顯示的文章數量（0 = 無限制） | 6
`transform` | 改變文章名稱顯示方法的函數 | 

### tagcloud

插入標籤雲。

``` js
<%- tagcloud([tags], [options]) %>
```

選項 | 描述 | 預設值
--- | --- | ---
`min_font` | 最小字體尺寸 | 10
`max_font` | 最大字體尺寸 | 20
`unit` | 字體尺寸的單位 | px
`amount` | 標籤總量 | 40
`orderby` | 標籤排列方式 | name
`order` | 標籤排列順序。`1`, `sac` 升冪；`-1`, `desc` 降冪 | 1
`color` | 使用顏色 | false
`start_color` | 開始的顏色。您可使用十六進位值（`#b700ff`），rgba（`rgba(183, 0, 255, 1)`），hsla（`hsla(283, 100%, 50%, 1)`）或 [顏色關鍵字]。此選項僅在 `color` 設定開啟時才有用。 |
`end_color` | 結束的顏色。您可使用十六進位值（`#b700ff`），rgba（`rgba(183, 0, 255, 1)`），hsla（`hsla(283, 100%, 50%, 1)`）或 [顏色關鍵字]。此選項僅在 `color` 設定開啟時才有用。 |

## 其他

### paginator

插入分頁連結。

``` js
<%- paginator(options) %>
```

選項 | 描述 | 預設值
--- | --- | ---
`base` | 基礎網址 | /
`format` | 網址格式 | page/%d/
`total` | 分頁總數 | 1
`current` | 目前頁數 | 0
`prev_text` | 上一頁連結的文字。僅在 `prev_next` 設定開啟時才有用。 | Prev
`next_text` | 下一頁連結的文字。僅在 `prev_next` 設定開啟時才有用。 | Next
`space` | 空白文字 | &hellp;
`prev_next` | 顯示上一頁和下一頁的連結 | true
`end_size` | 顯示於兩側的頁數 | 1
`mid_size` | 顯示於中間的頁數 | 2
`show_all` | 顯示所有頁數。如果開啟此設定的話，`end_size` 和 `mid_size` 就沒用了。 | false

### search_form

插入 Google 搜尋表單。

``` js
<%- search_form(options) %>
```

選項 | 描述 | 預設值
--- | --- | ---
`class` | 表單的 class name | search-form
`text` | 搜尋提示文字 | Search
`button` | 顯示搜尋按鈕。此設定可為布林值（boolean）或字串，當設定是字串的時候，即為搜尋按鈕的文字。 | false

### number_format

格式化數字。

``` js
<%- number_format(number, [options]) %>
```

選項 | 描述 | 預設值
--- | --- | ---
`precision` | 數字精確度。此選項可為 `false` 或非負整數。 | false
`delimiter` | 千位數分隔符號 | ,
`separator` | 整數和小數之間的分隔符號 | .

**範例：**

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

### open_graph

插入 [Open Graph] 資料。

``` js
<%- open_graph([options]) %>
```

選項 | 描述 | 預設值
--- | --- | ---
`title` | 頁面標題 (`og:title`) | `page.title`
`type` | 頁面類型 (`og:type`) | blog
`url` | 頁面網址 (`og:url`) | `url`
`image` | 頁面圖片 (`og:image`) | 內容中的圖片
`site_name` | 網站名稱 (`og:site_name`) | `config.title`
`description` | 頁面描述 (`og:desription`) | 內容摘要或前 200 字
`twitter_card` | Twitter 卡片類型 (`twitter:card`) | summary
`twitter_id` | Twitter ID (`twitter:creator`) |
`twitter_site` | Twitter 網站 (`twitter:site`) |
`google_plus` | Google+ 個人資料連結 |
`fb_admins` | Facebook 管理者 ID |
`fb_app_id` | Facebook 應用程式 ID |

### toc

解析內容中的標題標籤 (h1~h6) 並插入目錄。

``` js
<%- toc(str, [options]) %>
```

選項 | 描述 | 預設值
--- | --- | ---
`class` | Class 名稱 | toc
`list_number` | 顯示編號 | true

**範例：**

``` js
<%- toc(page.content) %>
```

[顏色關鍵字]: http://www.w3.org/TR/css3-color/#svg-color
[Moment.js]: http://momentjs.com/
[Open Graph]: http://ogp.me/