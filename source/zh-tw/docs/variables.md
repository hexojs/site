---
title: 變數
---

{% youtube T9oAax-IRw0 %}

### Global Variables

| 變數       | 描述                              | Type                                    |
| -------- | ------------------------------- | --------------------------------------- |
| `site`   | Sitewide information.           | `object`; see [Site Variables][]        |
| `page`   | 針對該頁面的資訊以及 front-matter 所設定的變數。 | `object`; see [Page Variables][]        |
| `config` | 網站配置                            | `object` (your site's \_config file)  |
| `theme`  | 主題配置。 繼承自網站配置。                  | `object` (your theme's \_config file) |
| `path`   | 目前頁面的路徑（不含根路徑）                  | `網站變數`                                  |
| `url`    | 目前頁面的完整網址                       | `網站變數`                                  |
| `env`    | 環境變數                            | ???                                     |

{% note warn %}
Lodash has been removed from global variables since Hexo 5.0.0. [You-Dont-Need-Lodash-Underscore](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore) might be helpful for your migration.
{% endnote %}

### Site Variables

| 變數                | 描述   | Type                   |
| ----------------- | ---- | ---------------------- |
| `site.posts`      | 所有文章 | [Query][queryo] object |
| `site.pages`      | 所有分頁 | [Query][queryo] object |
| `site.categories` | 所有分類 | [Query][queryo] object |
| `site.tags`       | 所有標籤 | [Query][queryo] object |

### 頁面變數

**文章（post, page, ...）**

| 變數                 | 描述                                            | Type                     |
| ------------------ | --------------------------------------------- | ------------------------ |
| `page.title`       | 文章標題                                          | `string`                 |
| `page.date`        | Article created date                          | 文章建立日期（[Moment.js][] 物件） |
| `page.updated`     | Article last updated date                     | 文章更新日期（[Moment.js][] 物件） |
| `page.comments`    | Comment enabled or not                        | `boolean`                |
| `page.layout`      | Layout name                                   | `string`                 |
| `page.content`     | 文章的完整網址                                       | `string`                 |
| `page.excerpt`     | 文章的原始內容                                       | `string`                 |
| `page.more`        | 除了文章摘要的其餘內容                                   | `string`                 |
| `page.source`      | The path of the source file                   | `string`                 |
| `page.full_source` | Full path of the source file                  | `string`                 |
| `page.path`        | 文章網址（不含根路徑）。 我們通常在主題中使用 `url_for(page.path)`。 | `文章的完整內容`                |
| `page.permalink`   | 文章的完整原始路徑                                     | `留言是否開啟`                 |
| `page.prev`        | 如果此為第一篇文章則為 `null`。                           | ???                      |
| `page.next`        | 下一篇文章。 如果此為最後一篇文章則為 `null`。                   | ???                      |
| `page.raw`         | The raw data of the article                   | ???                      |
| `page.photos`      | 文章的照片（用於相簿）                                   | array of ???             |
| `page.link`        | 文章的外連連結（用於連結文章）                               | `string`                 |

**彙整 (archive)**：與 `index` 佈局相同，但新增以下變數。

| 變數                | 描述                              | Type           |
| ----------------- | ------------------------------- | -------------- |
| `page.published`  | True if the post is not a draft | `boolean`      |
| `page.categories` | All categories of the post      | `array` of ??? |
| `page.tags`       | All tags of the post            | `array` of ??? |

**首頁（index）**

| 變數                 | 描述                                                                     | Type     |
| ------------------ | ---------------------------------------------------------------------- | -------- |
| `page.per_page`    | Posts displayed per page                                               | `number` |
| `page.total`       | Total number of pages                                                  | `number` |
| `page.current`     | 目前頁數                                                                   | `number` |
| `page.current_url` | 目前分頁的網址                                                                | `string` |
| `page.posts`       | Posts in this page ([Data Model](https://hexojs.github.io/warehouse/)) | `object` |
| `page.prev`        | 上一頁的頁數。 如果此頁是第一頁的話則為 `0`。                                              | `number` |
| `page.prev_link`   | 下一頁的網址。 如果此頁是最後一頁的話則為 `''`。                                            | `string` |
| `page.next`        | 下一頁的頁數。 如果此頁是最後一頁的話則為 `0`。                                             | `number` |
| `page.next_link`   | 上一頁的連結。 如果此頁是第一頁的話則為 `''`。                                             | `string` |
| `page.path`        | 目前頁面的路徑（不含根目錄）。 我們通常在主題中使用 `url_for(page.path)`。                       | `string` |

**標籤 (tag)**：與 `index` 佈局相同，但新增以下變數。

| 變數             | 描述                                            | Type      |
| -------------- | --------------------------------------------- | --------- |
| `page.archive` | 等於 `true`                                     | `boolean` |
| `page.year`    | 彙整年份（4 位數）                                    | `number`  |
| `page.month`   | Archive month (2-digit without leading zeros) | `number`  |

**分類 (category)**：與 `index` 佈局相同，但新增以下變數。

| 變數              | 描述   | Type     |
| --------------- | ---- | -------- |
| `page.category` | 分類名稱 | `string` |

Lodash has been removed from global variables since Hexo 5.0.0. [You-Dont-Need-Lodash-Underscore](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore) might be helpful for your migration.

| Variable   | 文章摘要 | Type     |
| ---------- | ---- | -------- |
| `page.tag` | 標籤名稱 | `string` |

[queryo]: https://hexojs.github.io/warehouse/classes/query.default.html

[Moment.js]: http://momentjs.com/
[Site Variables]: #Site-Variables
[Page Variables]: #Page-Variables
