title: 配置
---
您可以在 `_config.yml` 中修改大部份的配置。

### 網站

設定 | 描述
--- | ---
`title` | 網站標題
`subtitle` | 網站副標題
`description` | 網站描述
`author` | 您的名字
`language` | 網站使用的語言
`timezone` | 網站時區。Hexo 預設使用您電腦的時區。[時區列表](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

### 網址

設定 | 描述 | 預設值
--- | --- | ---
`url` | 網站的網址 |
`root` | 網站的根目錄 |
`permalink` | 文章 [永久連結](permalinks.html) 的格式 | :year/:month/:day/:title/
`permalink_default` | 永久連結中各區段的預設值 |

{% note info 網站存放在子目錄 %}
如果您的網站存放在子目錄中，例如 `http://yoursite.com/blog`，則請將您的 `url` 設為 `http://yoursite.com/blog` 並把 `root` 設為 `/blog/`。
{% endnote %}

### 目錄 

設定 | 描述 | 預設值
--- | --- | ---
`source_dir` | 原始檔案資料夾，這個資料夾用於存放您的內容。 | source
`public_dir` | 靜態檔案資料夾，這個資料夾用於存放建立完畢的檔案。 | public
`tag_dir` | 標籤資料夾 | tags
`archive_dir` | 彙整資料夾 | archives
`category_dir` | 分類資料夾 | categories
`code_dir` | Include code 資料夾 | downloads/code
`i18n_dir` | 國際化（i18n）資料夾 | :lang
`skip_render` | 跳過指定檔案的渲染，您可使用 glob 來配對路徑。 |

### 寫作

設定 | 描述 | 預設值
--- | --- | ---
`new_post_name` | 新文章的檔案名稱 | :title.md
`default_layout` | 預設佈局 | post
`auto_spacing` | 在西方文字與東方文字中加入空白 | false
`titlecase` | 把標題轉換為 title case | false
`external_link` | 在新頁籤中開啟連結 | true
`filename_case` | 把檔案名稱轉換為 (1) 小寫或 (2) 大寫 | 0
`render_drafts` | 顯示草稿 | false
`post_asset_folder` | 啟動 [Asset 資料夾](asset-folders.html) | false
`relative_link` | 把連結改為與根目錄的相對位址 | false
`future` | 顯示未來的文章 | true
`highlight` | 程式碼區塊的設定 |

### 分類 & 標籤

設定 | 描述 | 預設值
--- | --- | ---
`default_category` | 預設分類 | uncategorized
`category_map` | 分類別名 |
`tag_map` | 標籤別名 |

### 日期 / 時間格式

Hexo 使用 [Moment.js](http://momentjs.com/) 來解析和顯示時間。

設定 | 描述 | 預設值
--- | --- | ---
`date_format` | 日期格式 | MMM D YYYY
`time_format` | 時間格式 | H:mm:ss

### 分頁

設定 | 描述 | 預設值
--- | --- | ---
`per_page` | 一頁顯示的文章量 (0 = 關閉分頁功能) | 10
`pagination_dir` | 分頁目錄 | page

### 擴充套件

設定 | 描述
--- | ---
`theme` | 目前主題
`deploy` | 佈署設定