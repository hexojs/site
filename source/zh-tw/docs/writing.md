title: 寫作
---
接下來，我們要在網誌中建立第一篇新文章，您可以直接從現有的範例文章「Hello World」改寫，但我們更建議您學習 `new` 指令。

``` bash
$ hexo new [layout] <title>
```

您可以在指令中指定文章的佈局（layout），預設為 `post`，您可以透過修改 `_config.yml` 中的 `default_layout` 設定來指定預設佈局。

### 佈局（Layout）

Hexo 有三種預設佈局：`post`、`page` 和 `draft`，它們分別對應不同的路徑，而您所自定的其他佈局和 `post` 相同，都儲存至 `source/_posts` 資料夾。

佈局 | 路徑
--- | ---
`post` | `source/_posts`
`page` | `source`
`draft` | `source/_drafts`

### 檔案名稱

Hexo 預設以標題做為檔案名稱，但您可編輯 `new_post_name` 設定來變更預設的檔案名稱，舉例來說，設為 `:year-:month-:day-:title.md` 可讓您更方便的透過日期來管理文章。

變數 | 描述
--- | ---
`:title` | 標題
`:year` | 建立年份（4 位數）
`:month` | 建立月份（2 位數）
`:i_month` | 建立月份（去掉開頭的零）
`:day` | 建立日期（2 位數）
`:i_day` | 建立日期（去掉開頭的零）

### 草稿

剛剛提到了 Hexo 的一種特殊佈局：`draft`，這種佈局在建立時會被儲存於 `source/_drafts` 資料夾，您可透過 `publish` 指令將草稿移動到 `source/_posts` 資料夾，這項指令的使用方式與 `new` 十分類似，您也可在指令中指定 `layout` 來指定佈局。

``` bash
$ hexo publish [layout] <title>
```

草稿預設不會顯示於頁面中，您可在執行時加上 `--draft` 選項，或是把 `render_drafts` 設定改為 `true` 來預覽草稿。

### 鷹架（Scaffold）

在建立文章時，Hexo 會根據 `scaffolds` 資料夾內相對應的檔案來建立檔案，例如：

``` bash
$ hexo new photo "My Gallery"
```

在執行這行指令時，Hexo 會嘗試在 `scaffolds` 資料夾中找尋 `photo.md`，並根據其內容建立文章，以下是您可在鷹架中使用的變數：

變數 | 描述
--- | ---
`layout` | 佈局
`title` | 標題
`date` | 檔案建立日期