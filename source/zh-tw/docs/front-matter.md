---
title: Front-matter
---

{% youtube Rl48Yk4A_V8 %}

Front-matter 是檔案最上方以 `---` 分隔的區域，用於指定個別檔案的變數，舉例來說：

```yaml
---
title: Hello World
date: 2013/7/13 20:46:25
---
```

以下是預先定義的設定，您可在模板中取得這些設定值並加以利用。

設定 | 描述 | 預設值
--- | --- | ---
`layout` | 佈局 | [`config.default_layout`](/zh-tw/docs/configuration#寫作)
`title` | 標題 | 文章的檔案名
`date` | 建立日期 | 檔案建立日期
`updated` | 更新日期 | 檔案更新日期
`comments` | 開啟文章的留言功能 | `true`
`tags` | 標籤（不適用於分頁） |
`categories` | 分類（不適用於分頁）|
`permalink` | 覆蓋文章網址 |
`excerpt` | 純文字的頁面摘要。使用[這個外掛](/zh-tw/docs/tag-plugins#文章摘要)進行文字格式化。 |
`disableNunjucks` | 當啟用時，禁止 Nunjucks 標籤 `{{ }}`/`{% %}` 以及[標籤外掛](/zh-tw/docs/tag-plugins)的渲染功能
`lang` | 設定語言並寫[自動偵測](/zh-tw/docs/internationalization#路徑) | 繼承自 `_config.yml`
`published` | 文章是否發布 | 在 `_posts` 中的文章為 `true`；而在 `_draft` 中的文章則為 `false`

### 佈局

依照 `_config.yml` 中所設定的 [`default_layout`]((/zh-tw/docs/configuration#寫作)) 值，預設的佈局為 `post`。當在文章中取消佈局 (`layout: false`)，則不會為它套用主題。然而，這依然會在任意的渲染引擎 (renderer) 中渲染，若一個文章是用 Markdown 編寫且已經安裝了 Markdown 算圖引擎（如預設的[hexo-renderer-marked](https://github.com/hexojs/hexo-renderer-marked)），則會被渲染為 HTML。

無論任何佈局，[標籤外掛](/zh-tw/docs/tag-plugins)一定會進行處理，除非禁止 `disableNunjucks` 的設定或是[渲染引擎](/zh-tw/api/renderer#Disable-Nunjucks-tags).

### 分類和標籤

分類和標籤只有文章才支援，您可以在 Front-matter 中設定。在其他系統中，分類和標籤可能聽起來很接近，但是在 Hexo 中有著決定性的差別：分類是有順序和階層性的，也就是說 `Foo, Bar` 不等於 `Bar, Foo`；而標籤沒有順序和階層。

```yaml
categories:
  - Diary
tags:
  - PS3
  - Games
```

此外我們可以透過 list 來對一篇文章同時定義多個分類。

```yaml
categories:
  - [Diary, PlayStation]
  - [Diary, Games]
  - [Life]
```

### JSON Front-matter

除了 YAML 外，你也可利用 JSON 來撰寫 Front-matter，只要將 `---` 代換成 `;;;` 即可。

```json
"title": "Hello World",
"date": "2013/7/13 20:46:25"
;;;
```
