title: 變數
---
### 全局變數

變數 | 描述
--- | ---
`site` | [網站變數](#網站變數)
`page` | 針對該頁面的資訊以及 front-matter 所設定的變數。
`config` | 網站配置
`theme` | 主題配置。繼承自網站配置。
`_` (單底線) | [Lodash] 函式庫
`path` | 目前頁面的路徑（不含根路徑）
`url` | 目前頁面的完整網址
`env` | 環境變數

### 網站變數

變數 | 描述
--- | ---
`site.posts` | 所有文章
`site.pages` | 所有分頁
`site.categories` | 所有分類
`site.tags` | 所有標籤

### 頁面變數

**文章（post, page, ...）**

變數 | 描述
--- | ---
`page.title` | 文章標題
`page.date` | 文章建立日期（[Moment.js] 物件）
`page.updated` | 文章更新日期（[Moment.js] 物件）
`page.categories` | 文章分類
`page.tags` | 文章標籤
`page.comments` | 留言是否開啟
`page.layout` | 佈局名稱
`page.content` | 文章的完整內容
`page.excerpt` | 文章摘要
`page.more` | 除了文章摘要的其餘內容
`page.source` | 文章原始路徑
`page.full_source` | 文章的完整原始路徑
`page.path` | 文章網址（不含根路徑）。我們通常在主題中使用 `url_for(page.path)`。
`page.permalink` | 文章的完整網址
`page.prev` | 上一篇文章。如果此為第一篇文章則為 `null`。
`page.next` | 下一篇文章。如果此為最後一篇文章則為 `null`。
`page.raw` | 文章的原始內容
`page.photos` | 文章的照片（用於相簿）
`page.link` | 文章的外連連結（用於連結文章）

**首頁（index）**

變數 | 描述
--- | ---
`page.per_page` | 每頁顯示的文章數量
`page.total` | 總頁數
`page.current` | 目前頁數
`page.current_url` | 目前分頁的網址
`page.posts` | 本頁文章
`page.prev` | 上一頁的頁數。如果此頁是第一頁的話則為 `0`。
`page.prev_link` | 上一頁的連結。如果此頁是第一頁的話則為 `''`。
`page.next` | 下一頁的頁數。如果此頁是最後一頁的話則為 `0`。
`page.next_link` | 下一頁的網址。如果此頁是最後一頁的話則為 `''`。
`page.path` | 目前頁面的路徑（不含根目錄）。我們通常在主題中使用 `url_for(page.path)`。

**彙整 (archive)**：與 `index` 佈局相同，但新增以下變數。

變數 | 描述
--- | ---
`archive` | 等於 `true`
`year` | 彙整年份（4 位數）
`month` | 彙整月份（不含開頭的零）

**分類 (category)**：與 `index` 佈局相同，但新增以下變數。

變數 | 描述
--- | ---
`category` | 分類名稱

**標籤 (tag)**：與 `index` 佈局相同，但新增以下變數。

變數 | 描述
--- | ---
`tag` | 標籤名稱

[Lodash]: http://lodash.com/
[Moment.js]: http://momentjs.com/