---
title: 配置
---

您可以在 `_config.yml` 或 [替代配置檔](#使用替代配置檔) 中修改網站配置。

### 網站

| 設定            | 描述                                                                                                                                                                                                                                                                                        |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`       | The title of your website                                                                                                                                                                                                                                                                 |
| `subtitle`    | The subtitle of your website                                                                                                                                                                                                                                                              |
| `description` | 網站描述                                                                                                                                                                                                                                                                                      |
| `keywords`    | The keywords of your website. Supports multiple values.                                                                                                                                                                                                                                   |
| `author`      | 您的名字                                                                                                                                                                                                                                                                                      |
| `language`    | The language of your website. 網站使用的語言，參考 [2-lettter ISO-639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)，預設為 `en` Default is `en`.                                                                                                                                      |
| `timezone`    | The timezone of your website. Hexo uses the setting on your computer by default. 網站時區，Hexo 預設使用您電腦的時區，您可以在 [時區列表](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) 尋找適當的時區，例如 `America/New_York` 、 `Japan` 與 `UTC` Some examples are `America/New_York`, `Japan`, and `UTC`. |

### 網址

| 設定                           | 描述                                                             | Default                     |
| ---------------------------- | -------------------------------------------------------------- | --------------------------- |
| `url`                        | 網站的網址，must starts with `http://` or `https://`                 |                             |
| `root`                       | The root directory of your website                             | `url's pathname`            |
| `permalink`                  | 文章 [永久連結](permalinks.html) 的格式                                 | `:year/:month/:day/:title/` |
| `permalink_defaults`         | Default values of each segment in permalink                    |                             |
| `pretty_urls`                | 改寫 [`permalink`](variables.html) 的值來美化 URL                     |                             |
| `pretty_urls.trailing_index` | 是否在永久鏈接中保留尾部的 `index.html`，設置為 `false` 時去除                     | `true`                      |
| `pretty_urls.trailing_html`  | 是否在永久鏈接中保留尾部的 `.html`, 設置為 `false` 時去除 (_對尾部的 `index.html`無效_) | `true`                      |

{% note info 網站存放在子目錄 %}
如果您的網站存放在子目錄中，例如 `http://example.org/blog`，請將您的 `url` 設為 `http://example.org/blog` 並把 `root` 設為 `/blog/`。
{% endnote %}

範例:

```yaml
# e.g. page.permalink is http://example.com/foo/bar/index.html
pretty_urls:
  trailing_index: false
# becomes http://example.com/foo/bar/
```

### 目錄

| 設定             | 描述                                                                                                                                                             | Default          |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| `source_dir`   | Source folder. Where your content is stored                                                                                                                    | `source`         |
| `public_dir`   | Public folder. Where the static site will be generated                                                                                                         | `public`         |
| `tag_dir`      | Tag directory                                                                                                                                                  | `tags`           |
| `archive_dir`  | Archive directory                                                                                                                                              | `archives`       |
| `category_dir` | 分類資料夾                                                                                                                                                          | `categories`     |
| `code_dir`     | Include code 資料夾                                                                                                                                               | `downloads/code` |
| `i18n_dir`     | i18n directory                                                                                                                                                 | `:lang`          |
| `skip_render`  | Paths that will be copied to `public` raw, without being rendered. 跳過指定檔案的渲染，您可使用 [glob 表達式](https://github.com/micromatch/micromatch#extended-globbing) 來配對路徑 |                  |

預設值

```yaml
skip_render: "mypage/**/*"
# will output `source/mypage/index.html` and `source/mypage/code.js` without altering them.

## This also can be used to exclude posts,
skip_render: "_posts/test-post.md"
# will ignore the `source/_posts/test-post.md`.
```

### 寫作

| 設定                      | 描述                                                                                 | Default        |
| ----------------------- | ---------------------------------------------------------------------------------- | -------------- |
| `new_post_name`         | The filename format for new posts                                                  | `:title.md`    |
| `default_layout`        | Default layout                                                                     | `post`         |
| `titlecase`             | 把標題轉換為 title case                                                                  | `false`        |
| `external_link`         | Open external links in a new tab?                                                  |                |
| `external_link.enable`  | Open external links in a new tab?                                                  | `true`         |
| `external_link.field`   | 應用至整個 `site` 或僅只於 `post`                                                           | `site`         |
| `external_link.exclude` | 主機名稱除外。 適用於特指子網域，包含 `www`                                                          | `[]`           |
| `filename_case`         | 把檔案名稱轉換為: `1` 小寫或 `2` 大寫                                                           | `0`            |
| `render_drafts`         | 顯示草稿                                                                               | `false`        |
| `post_asset_folder`     | 啟動 [Asset 資料夾](asset-folders.html)                                                 | `false`        |
| `relative_link`         | 把連結改為與根目錄的相對位址                                                                     | `false`        |
| `future`                | 顯示未來的文章                                                                            | `true`         |
| `syntax_highlighter`    | 程式碼區塊語法強調 (highlight) 設定，請見使用方式指南的[語法強調](/zh-tw/docs/syntax-highlight)區塊           | `highlight.js` |
| `highlight`             | 程式碼區塊語法強調設定，請見使用方式指南的 [Highlight.js](/zh-tw/docs/syntax-highlight#Highlight-js) 區塊 |                |
| `prismjs`               | 程式碼區塊的設定，請見使用方式指南的 [PrismJS](/zh-tw/docs/syntax-highlight#PrismJS) 區塊              |                |

### Home page setting

| 設定                               | 描述                                                                                                              | Default |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------- |
| `index_generator`                | Generate an archive of posts, powered by [hexo-generator-index](https://github.com/hexojs/hexo-generator-index) |         |
| `index_generator.path`           | Root path for your blog's index page                                                                            | `''`    |
| `index_generator.per_page`       | Posts displayed per page.                                                                                       | `10`    |
| `index_generator.order_by`       | Posts order. Order by descending date (new to old) by default.                                                  | `-date` |
| `index_generator.pagination_dir` | URL format, see [Pagination](#Pagination) setting below                                                         | `page`  |

### 分類 & 標籤

| 設定                 | 描述                 | Default         |
| ------------------ | ------------------ | --------------- |
| `default_category` | 分類別名               | `uncategorized` |
| `category_map`     | 預設分類               |                 |
| `tag_map`          | Override tag slugs |                 |

預設值

```yaml
category_map:
  "yesterday's thoughts": yesterdays-thoughts
  "C++": c-plus-plus
```

### 日期 / 時間格式

Hexo 使用 [Moment.js](http://momentjs.com/) 來解析和顯示時間。

| 設定               | 描述                                                                  | Default      |
| ---------------- | ------------------------------------------------------------------- | ------------ |
| `date_format`    | 日期格式                                                                | `YYYY-MM-DD` |
| `time_format`    | 時間格式                                                                | `HH:mm:ss`   |
| `updated_option` | 當 front-matter 沒有提供 [`updated`](/zh-tw/docs/variables#頁面變數) 的值則使用此值 | `mtime`      |

{% note info updated_option %}
當 front-matter 沒有提供 `updated` 值，則 `updated_option` 控制此值：

- `mtime`: 使用檔案修改日期作為 `updated`。 Hexo 自從 3.0.0 版本開始有這個預設行為。
- `date`: 使用 `date` 作為 `updated`。 通常與 Git 的工作流程搭配使用，與檔案修改日期可能不同。
- `empty`: 當沒有提供時直接捨棄 `updated`。 可能與多數的主題及外掛不相容。

`use_date_for_updated` 已在版本 v7.0.0 開始移除。 請使用 `updated_option: 'date'` 作為代替。
{% endnote %}

### 分頁

| 設定               | 描述                                                              | Default |
| ---------------- | --------------------------------------------------------------- | ------- |
| `per_page`       | Number of posts displayed on each page. 一頁顯示的文章量 (`0` = 關閉分頁功能) | `10`    |
| `pagination_dir` | URL format                                                      | `page`  |

範例:

```yaml
pagination_dir: 'page'
# http://example.com/page/2

pagination_dir: 'awesome-page'
# http://example.com/awesome-page/2
```

### 擴充套件

| 設定                                          | 描述                                                                                                                                      |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `theme`                                     | Theme name. `false` disables theming                                                                                                    |
| `使用主題名稱, 設為 <code>false` 表示關閉主題功能</code> | Theme configuration. Include any custom theme settings under this key to override theme defaults.                                       |
| `deploy`                                    | 佈署設定                                                                                                                                    |
| `meta_generator`                            | [Meta generator](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#Attributes) tag. `false` disables injection of the tag. |

### 包含/排除 檔案或資料夾

Use the following options to explicitly process or ignore certain files/folders. Support [glob expressions](https://github.com/micromatch/micromatch#extended-globbing) for path matching.

`include` 以及 `exclude` 選項只會應用在 `source/` 資料夾， 然而 `ignore` 選項則會應用在所有的資料夾。

| 預設值       | Description                                                                                                      |
| --------- | ---------------------------------------------------------------------------------------------------------------- |
| `include` | Include hidden files (including files/folders with a name that starts with an underscore, with an exception\*) |
| `exclude` | 原始檔案資料夾，這個資料夾用於存放您的內容                                                                                            |
| `ignore`  | 忽略檔案以及資料夾                                                                                                        |

分頁目錄

```yaml
# 包含/排除 檔案或資料夾
include:
  - ".nojekyll"
  # 包括 'source/css/_typing.css'
  - "css/_typing.css"
  # Include any file in 'source/_css/'.
  - "_css/*"
  # Include any file and subfolder in 'source/_css/'.
  - "_css/**/*"

exclude:
  # Exclude 'source/js/test.js'.
  - "js/test.js"
  # Exclude any file in 'source/js/'.
  - "js/*"
  # Exclude any file and subfolder in 'source/js/'.
  - "js/**/*"
  # Exclude any file with filename that starts with 'test' in 'source/js/'.
  - "js/test*"
  # Exclude any file with filename that starts with 'test' in 'source/js/' and its subfolders.
  - "js/**/test*"
  # Do not use this to exclude posts in the 'source/_posts/'.
  # Use skip_render for that. Or prepend an underscore to the filename.
  # - "_posts/hello-world.md" # Does not work.

ignore:
  # 忽略任何名稱為 'foo' 的資料夾。
  - "**/foo"
  # 只忽略 'themes/' 中的 'foo' 資料夾。
  - "**/themes/*/foo"
  # Same as above, but applies to every subfolders of 'themes/'.
  - "**/themes/**/foo"
```

Each value in the list must be enclosed with single/double quotes.

`include` 和 `exclude` 並不適用於 `themes/` 目錄下的檔案。 如果需要忽略 `themes/` 目錄下的部分檔案或資料夾，可以使用 `ignore` 或在檔案名之前添加下劃線 `_`。

\* Notable exception is the `source/_posts` folder, but any file or folder with a name that starts with an underscore under that folder would still be ignored. Using `include:` rule in that folder is not recommended.

### 使用替代配置檔

使用 `hexo` 指令時，只要在指令後面加上 `--config` 參數與自訂配置檔 (需為 JSON 或 YAML 檔) 路徑即可指定此次想要搭配使用的配置檔。 該參數也可以是以逗號分隔的檔案列表 (注意中間不得有空格) 來滿足一次使用多個配置檔的需求。

```bash
# use 'custom.yml' in place of '_config.yml'
$ hexo server --config custom.yml

# use 'custom.yml' & 'custom2.json', prioritizing 'custom2.json'
$ hexo server --config custom.yml,custom2.json
```

使用多個配置檔會合併產生一個 `_multiconfig.yml`。 當合併遇到衝突時，列在愈後面的檔案，有愈高的優先權。 可以使用任意數量帶有任意層級物件的 JSON 或 YAML 檔。 注意**檔案列表字串中不得有空白**。

以前述的多個配置檔範例來說明，若 `custom.yml` 中有 `foo: bar`，且 `custom2.json` 中有 `"foo": "dinosaur"`，最終在 `_multiconfig.yml` 裡的將會是 `foo: dinosaur`。

### 備用的主題設定

Hexo 主題是獨立的專案，具有個別的 `_config.yml` 檔案。

Instead of forking a theme, and maintaining a custom version with your settings, you can configure it from somewhere else:

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

檔案應該要被放在 site 資料夾中，`yml` 和 `json` 兩種格式都支援。 在 `_config.yml` 中的 `theme` 必須進行設定，讓 Hexo 可以讀取 `_config.[theme].yml`

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
我們強烈建議您將主題設定只存放在一個地方。 但如果你有將主題設定存放在不同地方，下列的資訊是有些重要的：在頁面主要設定檔案中的 `theme_config` 在合併的時候具有最高優先權，而在專用的主題設定檔案中，主題資料夾中的 `_config.yml` 檔案則是最低優先權。 The `_config.yml` file under the theme directory has the lowest priority.
{% endnote %}
