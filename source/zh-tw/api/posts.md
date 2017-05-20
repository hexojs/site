title: 文章
---
## 建立文章

``` js
hexo.post.create(data, replace);
```

參數 | 描述
--- | ---
`data` | 資料
`replace` | 取代現有檔案

您可在資料中指定文章的屬性，除了以下的屬性之外，其他屬性也會被加到 front-matter 中。

資料 | 描述
--- | ---
`title` | 標題
`slug` | 網址
`layout` | 佈局。預設為 `default_layout` 設定。
`path` | 路徑。預設會根據 `new_post_path` 設定建構文章路徑。
`date` | 日期。預設為目前時間。

## 發佈草稿

``` js
hexo.post.publish(data, replace);
```

參數 | 描述
--- | ---
`data` | 資料
`replace` | 取代現有檔案

您可在資料中指定文章的屬性，除了以下的屬性之外，其他屬性也會被加到 front-matter 中。

資料 | 描述
--- | ---
`slug` | 檔案名稱（必須）
`layout` | 佈局。預設為 `default_layout` 設定。

## 渲染

``` js
hexo.post.render(source, data);
```

參數 | 描述
--- | ---
`source` | 檔案的完整路徑（可忽略）
`data` | 資料

資料中必須包含 `content` 屬性，如果沒有的話，會試著讀取原始檔案。此函數的執行順序為：

- 執行 `before_post_render` 過濾器
- 使用 Markdown 或其他渲染器渲染（根據副檔名而定）
- 使用 [Nunjucks] 渲染
- 執行 `after_post_render` 過濾器

[Nunjucks]: http://mozilla.github.io/nunjucks/