---
title: 文章
---

## 建立文章

```js
hexo.post.create(data, replace);
```

| Argument  | 描述     |
| --------- | ------ |
| `data`    | 資料     |
| `replace` | 取代現有檔案 |

The attributes of a post can be defined in `data`. The table below is not exhaustive. Additional attributes may be appended to the front-matter.

| 資料       | 描述                                  |
| -------- | ----------------------------------- |
| `title`  | 標題                                  |
| `slug`   | 網址                                  |
| `layout` | 佈局。 預設為 `default_layout` 設定。        |
| `path`   | 路徑。 預設會根據 `new_post_path` 設定建構文章路徑。 |
| `date`   | 日期。 預設為目前時間。                        |

## Publish a Draft

```js
hexo.post.publish(data, replace);
```

| Argument  | 描述     |
| --------- | ------ |
| `data`    | 資料     |
| `replace` | 取代現有檔案 |

The attributes of a post can be defined in `data`. The table below is not exhaustive. Additional attributes may be appended to the front-matter.

| 資料       | 描述                           |
| -------- | ---------------------------- |
| `slug`   | 檔案名稱（必須）                     |
| `layout` | 佈局。 預設為 `default_layout` 設定。 |

## 渲染

```js
hexo.post.render(source, data);
```

| Argument | 描述           |
| -------- | ------------ |
| `source` | 檔案的完整路徑（可忽略） |
| `data`   | 資料           |

The data must contain the `content` attribute. If not, Hexo will try to read the original file. The execution steps of this function are as follows:

- 執行 `before_post_render` 過濾器
- 使用 Markdown 或其他渲染器渲染（根據副檔名而定）
- 使用 [Nunjucks][] 渲染
- 執行 `after_post_render` 過濾器

[Nunjucks]: https://mozilla.github.io/nunjucks/
