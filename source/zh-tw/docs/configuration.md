---
title: 配置
---
您可以在 `_config.yml` 或 [替代配置檔](#使用替代配置檔) 中修改網站配置。

{% youtube A0Enyn70jKU %}

### 網站

| 設定          | 描述                                                                                                                                                                               |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`       | 網站標題                                                                                                                                                                           |
| `subtitle`    | 網站副標題                                                                                                                                                                         |
| `description` | 網站描述                                                                                                                                                                           |
| `keywords`    | 網站的關鍵詞。支援多個關鍵詞。                                                                                                                                                     |
| `author`      | 您的名字                                                                                                                                                                           |
| `language`    | 網站使用的語言，參考 [2-lettter ISO-639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)，預設為 `en`                                                                |
| `timezone`    | 網站時區，Hexo 預設使用您電腦的時區，您可以在 [時區列表](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) 尋找適當的時區，例如 `America/New_York` 、 `Japan` 與 `UTC` |

### 網址

| 設定                         | 描述                                                                                    | 預設值                      |
| ---------------------------- | --------------------------------------------------------------------------------------- | --------------------------- |
| `url`                        | 網站的網址，must starts with `http://` or `https://`                                    |
| `root`                       | 網站的根目錄                                                                            | `url's pathname`            |
| `permalink`                  | 文章 [永久連結](permalinks.html) 的格式                                                 | `:year/:month/:day/:title/` |
| `permalink_defaults`         | `permalink` 中各區段的預設值                                                            |
| `pretty_urls`                | 改寫 [`permalink`](variables.html) 的值來美化 URL                                       |
| `pretty_urls.trailing_index` | 是否在永久鏈接中保留尾部的 `index.html`，設置為 `false` 時去除                          | `true`                      |
| `pretty_urls.trailing_html`  | 是否在永久鏈接中保留尾部的 `.html`, 設置為 `false` 時去除 (_對尾部的 `index.html`無效_) | `true`                      |

{% note info 網站存放在子目錄 %}
如果您的網站存放在子目錄中，例如 `http://example.org/blog`，請將您的 `url` 設為 `http://example.org/blog` 並把 `root` 設為 `/blog/`。
{% endnote %}

### 目錄

| 設定           | 描述                                                                                                              | 預設值           |
| -------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------- |
| `source_dir`   | 原始檔案資料夾，這個資料夾用於存放您的內容                                                                        | `source`         |
| `public_dir`   | 靜態檔案資料夾，這個資料夾用於存放建立完畢的檔案                                                                  | public           |
| `tag_dir`      | 標籤資料夾                                                                                                        | `tags`           |
| `archive_dir`  | 彙整資料夾                                                                                                        | `archives`       |
| `category_dir` | 分類資料夾                                                                                                        | `categories`     |
| `code_dir`     | Include code 資料夾                                                                                               | `downloads/code` |
| `i18n_dir`     | 國際化（i18n）資料夾                                                                                              | `:lang`          |
| `skip_render`  | 跳過指定檔案的渲染，您可使用 [glob 表達式](https://github.com/micromatch/micromatch#extended-globbing) 來配對路徑 |

### 寫作

設定 | 描述 | 預設值
--- | --- | ---
`new_post_name` | 新文章的檔案名稱 | `:title.md`
`default_layout` | 預設佈局 | `post`
`auto_spacing` | 在西方文字與東方文字中加入空白 | `false`
`titlecase` | 把標題轉換為 title case | `false`
`external_link` | 在新頁籤中開啟連結 | `true`
`external_link.enable` | 在新頁籤中開啟連結 | `true`
`external_link.field` | 應用至整個 `site` 或僅只於 `post` | `site`
`external_link.exclude` | 主機名稱除外。適用於特指子網域，包含 `www` | `[]`
`filename_case` | 把檔案名稱轉換為: `1` 小寫或 `2` 大寫 | `0`
`render_drafts` | 顯示草稿 | `false`
`post_asset_folder` | 啟動 [Asset 資料夾](asset-folders.html) | `false`
`relative_link` | 把連結改為與根目錄的相對位址 | `false`
`future` | 顯示未來的文章 | `true`
`syntax_highlighter` | 程式碼區塊語法強調 (highlight) 設定，請見使用方式指南的[語法強調](/zh-tw/docs/syntax-highlight)區塊 | `highlight.js`
`highlight` | 程式碼區塊語法強調設定，請見使用方式指南的 [Highlight.js](/zh-tw/docs/syntax-highlight#Highlight-js) 區塊 |
`prismjs` | 程式碼區塊的設定，請見使用方式指南的 [PrismJS](/zh-tw/docs/syntax-highlight#PrismJS) 區塊 |

### 分類 & 標籤

| 設定               | 描述     | 預設值          |
| ------------------ | -------- | --------------- |
| `default_category` | 預設分類 | `uncategorized` |
| `category_map`     | 分類別名 |
| `tag_map`          | 標籤別名 |

### 日期 / 時間格式

Hexo 使用 [Moment.js](http://momentjs.com/) 來解析和顯示時間。

設定 | 描述 | 預設值
--- | --- | ---
`date_format` | 日期格式 | `YYYY-MM-DD`
`time_format` | 時間格式 | `HH:mm:ss`
`updated_option` | 當 front-matter 沒有提供 [`updated`](/zh-tw/docs/variables#頁面變數) 的值則使用此值| `mtime`

{% note info updated_option %}
當 front-matter 沒有提供 `updated` 值，則 `updated_option` 控制此值：

- `mtime`: 使用檔案修改日期作為 `updated`。Hexo 自從 3.0.0 版本開始有這個預設行為。
- `date`: 使用 `date` 作為 `updated`。 通常與 Git 的工作流程搭配使用，與檔案修改日期可能不同。
- `empty`: 當沒有提供時直接捨棄 `updated`。 可能與多數的主題及外掛不相容。

`use_date_for_updated` 已在版本 v7.0.0 開始移除。請使用 `updated_option: 'date'` 作為代替。
{% endnote %}

### 分頁

| 設定             | 描述                                  | 預設值 |
| ---------------- | ------------------------------------- | ------ |
| `per_page`       | 一頁顯示的文章量 (`0` = 關閉分頁功能) | `10`   |
| `pagination_dir` | 分頁目錄                              | `page` |

### 擴充套件

| 設定     | 描述                                        |
| -------- | ------------------------------------------- |
| `theme`  | 使用主題名稱, 設為 `false` 表示關閉主題功能 |
| `deploy` | 佈署設定                                    |

### 包含/排除 檔案或資料夾

Hexo 會根據配置檔中 `include` / `exlude` 欄位設定，了解要 處理/忽略 哪些特定的檔案或資料夾。

`include` 以及 `exclude` 選項只會應用在 `source/` 資料夾， 然而 `ignore` 選項則會應用在所有的資料夾。

設定 | 描述
--- | ---
`include` | Hexo 預設會忽略隱藏檔案與隱藏資料夾，但列在這個欄位中的檔案，Hexo 仍然會去處理
`exclude` | 列在這裡的檔案將會被 Hexo 忽略
`ignore` | 忽略檔案以及資料夾

範例:

```yaml
# 包含/排除 檔案或資料夾
include:
  - ".nojekyll"
  # 包括 'source/css/_typing.css'
  - "css/_typing.css"
  # 包括 'source/_css/' 中的任何檔案，但不包括子目錄及其其中的檔案。
  - "_css/*"
  # 包含 'source/_css/' 中的任何檔案和子目錄下的任何檔案
  - "_css/**/*"

exclude:
  # 不包括 'source/js/test.js'
  - "js/test.js"
  # 不包括 'source/js/' 中的檔案、但包含子目錄下的所有目錄和檔案
  - "js/*"
  # 不包括 'source/js/' 中的檔案和子目錄下的任何檔案
  - "js/**/*"
  # 不包括 'source/js/' 目錄下的所有檔案名以 'test' 開頭的檔案，但包括其它檔案和子目錄的單一檔案
  - "js/test*"
  # 不包括 'source/js/' 及其子目錄中任何以 'test' 開頭的檔案
  - "js/**/test*"
  # 不要用 exclude 来忽略 'source/_posts/' 中的檔案。你应该使用 'skip_render'，或者在要忽略的檔案的檔案名之前加一个下划线 '_'
  # 在这里配置一个 - "_posts/hello-world.md" 是没有用的。

ignore:
  # 忽略任何名稱為 'foo' 的資料夾。
  - "**/foo"
  # 只忽略 'themes/' 中的 'foo' 資料夾。
  - "**/themes/*/foo"
  # 與上一個相同，但應用至每個 'themes/' 的子資料夾。
  - "**/themes/**/foo"
```

列表中的每一項都必須用單引號或雙引號包裹起來。

`include` 和 `exclude` 並不適用於 `themes/` 目錄下的檔案。如果需要忽略 `themes/` 目錄下的部分檔案或資料夾，可以使用 `ignore` 或在檔案名之前添加下劃線 `_`。

### 使用替代配置檔

使用 `hexo` 指令時，只要在指令後面加上 `--config` 參數與自訂配置檔 (需為 JSON 或 YAML 檔) 路徑即可指定此次想要搭配使用的配置檔。該參數也可以是以逗號分隔的檔案列表 (注意中間不得有空格) 來滿足一次使用多個配置檔的需求。

範例:

```bash
# 使用自訂的 'custom.yml' 取代預設的 '_config.yml'
$ hexo server --config custom.yml

# 使用多個配置檔, 有衝突時優先使用 'custom2.json'
$ hexo server --config custom.yml,custom2.json
```

使用多個配置檔會合併產生一個 `_multiconfig.yml`。當合併遇到衝突時，列在愈後面的檔案，有愈高的優先權。可以使用任意數量帶有任意層級物件的 JSON 或 YAML 檔。注意**檔案列表字串中不得有空白**。

以前述的多個配置檔範例來說明，若 `custom.yml` 中有 `foo: bar`，且 `custom2.json` 中有 `"foo": "dinosaur"`，最終在 `_multiconfig.yml` 裡的將會是 `foo: dinosaur`。

### 備用的主題設定

Hexo 主題是獨立的專案，具有個別的 `_config.yml` 檔案。

除了複製一個主題並維護一個由您設定的自創分支，您也在任何地方為它進行設定。

**頁面中的主要設定檔案的 `theme_config`**

> 從 Hexo 2.8.2 後開始支援

```yml
# _config.yml
theme: "my-theme"
theme_config:
  bio: "My awesome bio"
  foo:
    bar: "a"
```

```yml
# themes/my-theme/_config.yml
bio: "Some generic bio"
logo: "a-cool-image.png"
  foo:
    baz: 'b'
```

在主題設定中的結果：

```json
{
  "bio": "My awesome bio",
  "logo": "a-cool-image.png",
  "foo": {
    "bar": "a",
    "baz": "b"
  }
}
```

**專用的 `_config.[theme].yml` 檔案**

> 從 Hexo 5.0.0 後開始支援

檔案應該要被放在 site 資料夾中，`yml` 和 `json` 兩種格式都支援。在 `_config.yml` 中的 `theme` 必須進行設定，讓 Hexo 可以讀取 `_config.[theme].yml`

```yml
# _config.yml
theme: "my-theme"
```

```yml
# _config.my-theme.yml
bio: "My awesome bio"
foo:
  bar: "a"
```

```yml
# themes/my-theme/_config.yml
bio: "Some generic bio"
logo: "a-cool-image.png"
  foo:
    baz: 'b'
```

在主題設定中的結果：

```json
{
  "bio": "My awesome bio",
  "logo": "a-cool-image.png",
  "foo": {
    "bar": "a",
    "baz": "b"
  }
}
```

{% note %}
我們強烈建議您將主題設定只存放在一個地方。但如果你有將主題設定存放在不同地方，下列的資訊是有些重要的：在頁面主要設定檔案中的 `theme_config` 在合併的時候具有最高優先權，而在專用的主題設定檔案中，主題資料夾中的 `_config.yml` 檔案則是最低優先權。
{% endnote %}
