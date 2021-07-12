---
title: Front-matter
---

{% youtube Rl48Yk4A_V8 %}

Front-matter 是檔案最上方以 `---` 分隔的區域，用於指定個別檔案的變數，舉例來說：

``` yaml
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
`comments` | 開啟文章的留言功能 | true
`tags` | 標籤（不適用於分頁） |
`categories` | 分類（不適用於分頁）|
`permalink` | 覆蓋文章網址 |
`excerpt` | Page excerpt in plain text. Use [this plugin](/docs/tag-plugins#Post-Excerpt) to format the text |
`disableNunjucks` | Disable rendering of Nunjucks tag `{{ }}`/`{% %}` and [tag plugins](/docs/tag-plugins) when enabled
`lang` | Set the language to override [auto-detection](/docs/internationalization#Path) | Inherited from `_config.yml`

### 佈局

The default layout is `post`, in accordance to the value of [`default_layout`]((/docs/configuration#Writing)) setting in `_config.yml`. When the layout is disabled (`layout: false`) in an article, it will not be processed with a theme. However, it will still be rendered by any available renderer: if an article is written in Markdown and a Markdown renderer (like the default [hexo-renderer-marked](https://github.com/hexojs/hexo-renderer-marked)) is installed, it will be rendered to HTML.

[Tag plugins](/docs/tag-plugins) are always processed regardless of layout, unless disabled by the `disableNunjucks` setting or [renderer](/api/renderer#Disable-Nunjucks-tags).

### 分類和標籤

分類和標籤只有文章才支援，您可以在 Front-matter 中設定。在其他系統中，分類和標籤可能聽起來很接近，但是在 Hexo 中有著決定性的差別：分類是有順序和階層性的，也就是說 `Foo, Bar` 不等於 `Bar, Foo`；而標籤沒有順序和階層。

``` yaml
categories:
- Diary
tags:
- PS3
- Games
```

此外我們可以透過 list 來對一篇文章同時定義多個分類。

``` yaml
categories:
- [Diary, PlayStation]
- [Diary, Games]
- [Life]
```

### JSON Front-matter

除了 YAML 外，你也可利用 JSON 來撰寫 Front-matter，只要將 `---` 代換成 `;;;` 即可。

``` json
"title": "Hello World",
"date": "2013/7/13 20:46:25"
;;;
```
