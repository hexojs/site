title: Front-matter
---
Front-matter 是檔案最上方以 `---` 分隔的區域，用於指定個別檔案的變數，舉例來說：

``` yaml
title: Hello World
date: 2013/7/13 20:46:25
---
```

以下是預先定義的設定，您可在模板中取得這些設定值並加以利用。

設定 | 描述 | 預設值
--- | --- | ---
`layout` | 佈局 | 
`title` | 標題 |
`date` | 建立日期 | 檔案建立日期
`updated` | 更新日期 | 檔案更新日期
`comments` | 開啟文章的留言功能 | true
`tags` | 標籤（不適用於分頁） |
`categories` | 分類（不適用於分頁）|
`permalink` | 覆蓋文章網址 |

### 分類和標籤

分類和標籤只有文章才支援，您可以在 Front-matter 中設定。在其他系統中，分類和標籤可能聽起來很接近，但是在 Hexo 中有著決定性的差別：分類是有順序和階層性的，也就是說 `Foo, Bar` 不等於 `Bar, Foo`；而標籤沒有順序和階層。

``` yaml
categories:
- Diary
tags:
- PS3
- Games
```

### JSON Front-matter

除了 YAML 外，你也可利用 JSON 來撰寫 Front-matter，只要將 `---` 代換成 `;;;` 即可。

``` json
"title": "Hello World",
"date": "2013/7/13 20:46:25"
;;;
```