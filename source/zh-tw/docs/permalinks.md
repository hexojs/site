---
title: Permalinks
---

You can specify the permalinks for your site in `_config.yml` or in the front-matter for each post.

### 變數

除了下列變數外，您還可使用除了 `:path` 和 `:permalink` 之外 Front-matter 中的所有屬性。

| 變數            | 描述                                                                        |
| ------------- | ------------------------------------------------------------------------- |
| `:year`       | 文章的發表年份（4 位數）                                                             |
| `:month`      | Published month of posts (2-digit)                                        |
| `:i_month`    | 文章的發表月份（去掉開頭的零）                                                           |
| `:day`        | Published day of posts (2-digit)                                          |
| `:i_day`      | Published day of posts (Without leading zeros)                            |
| `:hour`       | Published hour of posts (2-digit)                                         |
| `:minute`     | Published minute of posts (2-digit)                                       |
| `:second`     | Published second of posts (2-digit)                                       |
| `:title`      | 檔案名稱 (relative to "source/\_posts/" folder)                             |
| `:name`       | 檔案名稱                                                                      |
| `:post_title` | 文章標題                                                                      |
| `:id`         | 文章 ID (_not persistent across [cache reset](/zh-tw/docs/commands#clean)_) |
| `:category`   | 分類。 如果文章沒有分類，則是 `default_category` 設定。                                    |
| `:hash`       | SHA1 hash of filename (same as `:title`) and date (12-hexadecimal)        |

您可在 `permalink_defaults` 設定中調整永久連結中各變數的預設值：

```yaml
permalink_defaults:
  lang: en
```

### 範例

```yaml source/_posts/hello-world.md
title: Hello World
date: 2013-07-14 17:01:34
categories:
  - foo
  - bar
```

| 設定                              | 結果                          |
| ------------------------------- | --------------------------- |
| `:year/:month/:day/:title/`     | 2013/07/14/hello-world/     |
| `:year-:month-:day-:title.html` | 2013-07-14-hello-world.html |
| `:category/:title/`             | foo/bar/hello-world/        |
| `:title-:hash/`                 | hello-world-a2c8ac003b43/   |

```yaml source/_posts/lorem/hello-world.md
title: Hello World
date: 2013-07-14 17:01:34
categories:
  - foo
  - bar
```

| 設定                          | 結果                            |
| --------------------------- | ----------------------------- |
| `:year/:month/:day/:title/` | 2013/07/14/lorem/hello-world/ |
| `:year/:month/:day/:name/`  | 2013/07/14/hello-world/       |

### 多語系支援

若要建立一個多語系的網站，您可修改 `new_post_name` 和 `permalink` 設定，如下：

```yaml
new_post_name: :lang/:title.md
permalink: :lang/:title/
```

當您建立新文章時，文章會被儲存至：

```bash
$ hexo new "Hello World" --lang tw
# => source/_posts/tw/Hello-World.md
```

而網址會是：

```plain
http://localhost:4000/tw/hello-world/
```
