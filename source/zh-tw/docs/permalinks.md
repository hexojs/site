title: 永久連結（Permalinks）
---
您可以在設定中調整網站的永久連結。

### 變數

除了下列變數外，您還可使用 Front-matter 中的所有屬性。

變數 | 描述
--- | ---
`:year` | 文章的發表年份（4 位數）
`:month` | 文章的發表月份（2 位數）
`:i_month` | 文章的發表月份（去掉開頭的零）
`:day` | 文章的發表日期 (2 位數)
`:i_day` | 文章的發表日期（去掉開頭的零）
`:title` | 檔案名稱
`:id` | 文章 ID
`:category` | 分類。如果文章沒有分類，則是 `default_category` 設定。

您可在 `permalink_defaults` 設定中調整永久連結中各變數的預設值：

``` yaml
permalink_defaults:
  lang: en
```

### 範例

假設 `source/_posts` 資料夾中有個 `hello-world.md`，包含以下內容：

``` yaml
title: Hello World
date: 2013-07-14 17:01:34
categories:
- foo
- bar
```

設定 | 結果
--- | ---
`:year/:month/:day/:title/` | 2013/07/14/hello-world
`:year-:month-:day-:title.html` | 2013-07-14-hello-world.html
`:category/:title` | foo/bar/hello-world

### 多語系支援

To create a multi-language site, you can modify `new_post_name` and `permalink` setting like this:

``` yaml
new_post_name: :lang/:title.md
permalink: :lang/:title/
```

When you create a new post, the post will be saved to:

``` bash
$ hexo new "Hello World" --lang tw
# => source/_posts/tw/Hello-World.md
```

and the URL will be:

``` plain
http://localhost:4000/tw/hello-world/
```