---
title: Front-matter
---

{% youtube Rl48Yk4A_V8 %}

Front-matter is a block of YAML or JSON at the beginning of the file that is used to configure settings for your writings. Front-matter is terminated by three dashes when written in YAML or three semicolons when written in JSON.

**YAML**

```yaml
---
title: Hello World
date: 2013/7/13 20:46:25
---
```

**JSON Front-matter**

```json
"title": "Hello World",
"date": "2013/7/13 20:46:25"
;;;
```

### Settings & Their Default Values

| 設定                | 描述                                                                                    | Default                                                |
| ----------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| `layout`          | Layout                                                                                | [`config.default_layout`](/docs/configuration#Writing) |
| `title`           | 標題                                                                                    | 文章的檔案名                                                 |
| `date`            | 建立日期                                                                                  | 檔案建立日期                                                 |
| `updated`         | 更新日期                                                                                  | 檔案更新日期                                                 |
| `comments`        | 開啟文章的留言功能                                                                             | `true`                                                 |
| `tags`            | 標籤（不適用於分頁）                                                                            |                                                        |
| `categories`      | 分類（不適用於分頁）                                                                            |                                                        |
| `permalink`       | Overrides the default permalink of the post. Permalink should end with `/` or `.html` | `null`                                                 |
| `excerpt`         | 純文字的頁面摘要。 使用[這個外掛](/zh-tw/docs/tag-plugins#文章摘要)進行文字格式化。                              |                                                        |
| `disableNunjucks` | 當啟用時，禁止 Nunjucks 標籤 `{{ }}`/`{% %}` 以及[標籤外掛](/zh-tw/docs/tag-plugins)的渲染功能            | false                                                  |
| `lang`            | 設定語言並寫[自動偵測](/zh-tw/docs/internationalization#路徑)                                     | 繼承自 `_config.yml`                                      |
| `published`       | Whether the post should be published                                                  | 在 `_posts` 中的文章為 `true`；而在 `_draft` 中的文章則為 `false`     |

#### Layout

依照 `_config.yml` 中所設定的 [`default_layout`](/zh-tw/docs/configuration#寫作) 值，預設的佈局為 `post`。 當在文章中取消佈局 (`layout: false`)，則不會為它套用主題。 然而，這依然會在任意的渲染引擎 (renderer) 中渲染，若一個文章是用 Markdown 編寫且已經安裝了 Markdown 算圖引擎（如預設的[hexo-renderer-marked](https://github.com/hexojs/hexo-renderer-marked)），則會被渲染為 HTML。

無論任何佈局，[標籤外掛](/zh-tw/docs/tag-plugins)一定會進行處理，除非禁止 `disableNunjucks` 的設定或是[渲染引擎](/zh-tw/api/renderer#Disable-Nunjucks-tags).

#### 分類和標籤

Only posts support the use of categories and tags. Categories apply to posts in order, resulting in a hierarchy of classifications and sub-classifications. Tags are all defined on the same hierarchical level so the order in which they appear is not important.

**Example**

```yaml
categories:
  - Sports
  - Baseball
tags:
  - Injury
  - Fight
  - Shocking
```

If you want to apply multiple category hierarchies, use a list of names instead of a single name. If Hexo sees any categories defined this way on a post, it will treat each category for that post as its own independent hierarchy.

**Example**

```yaml
categories:
  - [Sports, Baseball]
  - [MLB, American League, Boston Red Sox]
  - [MLB, American League, New York Yankees]
  - Rivalries
```
