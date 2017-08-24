title: 配置
---
您可以在 `_config.yml` 或 [替代配置檔](#Using-an-Alternate-Config) 中修改網站配置。

### 網站

設定 | 描述
--- | ---
`title` | 網站標題
`subtitle` | 網站副標題
`description` | 網站描述
`author` | 您的名字
`language` | 網站使用的語言，參考 [2-lettter ISO-639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)，預設為 `en`
`timezone` | 網站時區，Hexo 預設使用您電腦的時區，您可以在 [時區列表](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) 尋找適當的時區，例如 `America/New_York` 、 `Japan` 與 `UTC`

### 網址

設定 | 描述 | 預設值
--- | --- | ---
`url` | 網站的網址 |
`root` | 網站的根目錄 |
`permalink` | 文章 [永久連結](permalinks.html) 的格式 | `:year/:month/:day/:title/`
`permalink_defaults` | `permalink` 中各區段的預設值 |

{% note info 網站存放在子目錄 %}
如果您的網站存放在子目錄中，例如 `http://example.org/blog`，請將您的 `url` 設為 `http://example.org/blog` 並把 `root` 設為 `/blog/`。
{% endnote %}

### 目錄

設定 | 描述 | 預設值
--- | --- | ---
`source_dir` | 原始檔案資料夾，這個資料夾用於存放您的內容 | `source`
`public_dir` | 靜態檔案資料夾，這個資料夾用於存放建立完畢的檔案 | public
`tag_dir` | 標籤資料夾 | `tags`
`archive_dir` | 彙整資料夾 | `archives`
`category_dir` | 分類資料夾 | `categories`
`code_dir` | Include code 資料夾 | `downloads/code`
`i18n_dir` | 國際化（i18n）資料夾 | `:lang`
`skip_render` | 跳過指定檔案的渲染，您可使用 [glob 表達式](https://github.com/isaacs/minimatch) 來配對路徑 |

### 寫作

設定 | 描述 | 預設值
--- | --- | ---
`new_post_name` | 新文章的檔案名稱 | `:title.md`
`default_layout` | 預設佈局 | `post`
`auto_spacing` | 在西方文字與東方文字中加入空白 | `false`
`titlecase` | 把標題轉換為 title case | `false`
`external_link` | 在新頁籤中開啟連結 | `true`
`filename_case` | 把檔案名稱轉換為: `1` 小寫或 `2` 大寫 | `0`
`render_drafts` | 顯示草稿 | `false`
`post_asset_folder` | 啟動 [Asset 資料夾](asset-folders.html) | `false`
`relative_link` | 把連結改為與根目錄的相對位址 | `false`
`future` | 顯示未來的文章 | `true`
`highlight` | 程式碼區塊的設定 |

### 分類 & 標籤

設定 | 描述 | 預設值
--- | --- | ---
`default_category` | 預設分類 | `uncategorized`
`category_map` | 分類別名 |
`tag_map` | 標籤別名 |

### 日期 / 時間格式

Hexo 使用 [Moment.js](http://momentjs.com/) 來解析和顯示時間。

設定 | 描述 | 預設值
--- | --- | ---
`date_format` | 日期格式 | `YYYY-MM-DD`
`time_format` | 時間格式 | `HH:mm:ss`

### 分頁

設定 | 描述 | 預設值
--- | --- | ---
`per_page` | 一頁顯示的文章量 (`0` = 關閉分頁功能) | `10`
`pagination_dir` | 分頁目錄 | `page`

### 擴充套件

設定 | 描述
--- | ---
`theme` | 使用主題名稱, 設為 `false` 表示關閉主題功能
`deploy` | 佈署設定


### 包含/排除 檔案或資料夾

Hexo 會根據配置檔中 `include` / `exlude` 欄位設定，了解要 處理/忽略 哪些特定的檔案或資料夾。

設定 | 描述
--- | ---
`include` | Hexo 預設會忽略隱藏檔與隱藏資料夾，但列在這個欄位中的檔案，Hexo 仍然會去處理
`exclude` | 列在這裡的檔案將會被 Hexo 忽略

範例:
```yaml
# 包含/排除 檔案或資料夾
include:
  - .nojekyll
exclude:
  - .DS_Store
```

### 使用替代配置檔

使用 `hexo` 指令時，只要在指令後面加上 `--config` 參數與自訂配置檔 (需為 JSON 或 YAML 檔) 路徑即可指定此次想要搭配使用的配置檔。該參數也可以是以逗號分隔的檔案列表 (注意中間不得有空格) 來滿足一次使用多個配置檔的需求。

範例:

``` bash
# 使用自訂的 'custom.yml' 取代預設的 '_config.yml'
$ hexo server --config custom.yml

# 使用多個配置檔, 有衝突時優先使用 'custom2.json'
$ hexo server --config custom.yml,custom2.json
```

使用多個配置檔會合併產生一個 `_multiconfig.yml`。當合併遇到衝突時，列在愈後面的檔案，有愈高的優先權。可以使用任意數量帶有任意層級物件的 JSON 或 YAML 檔。注意**檔案列表字串中不得有空白**。

以前述的多個配置檔範例來說明，若 `custom.yml` 中有 `foo: bar`，且 `custom2.json` 中有 `"foo": "dinosaur"`，最終在 `_multiconfig.yml` 裡的將會是 `foo: dinosaur`。
