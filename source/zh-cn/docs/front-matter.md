---
title: Front-matter
---

{% youtube Rl48Yk4A_V8 %}

Front-matter 是文件开头的 YAML 或 JSON 代码块，用于配置写作设置。 以 YAML 格式书写时，Front-matter 以三个破折号结束；以 JSON 格式书写时，Front-matter 以三个分号结束。

**YAML**

```yaml
---
title: Hello World
date: 2013/7/13 20:46:25
---
```

**JSON**

```json
"title": "Hello World",
"date": "2013/7/13 20:46:25"
;;;
```

### 设置 & 默认值

| 设置                | 描述                                                                        | 默认值                                                    |
| ----------------- | ------------------------------------------------------------------------- | ------------------------------------------------------ |
| `layout`          | 布局                                                                        | [`config.default_layout`](/docs/configuration#Writing) |
| `title`           | 标题                                                                        | 文章的文件名                                                 |
| `date`            | 建立日期                                                                      | 文件建立日期                                                 |
| `updated`         | 更新日期                                                                      | 文件更新日期                                                 |
| `comments`        | 开启文章的评论功能                                                                 | `true`                                                 |
| `tags`            | 标签（不适用于分页）                                                                |                                                        |
| `categories`      | 分类（不适用于分页）                                                                |                                                        |
| `permalink`       | 覆盖文章的永久链接. 永久链接应该以 `/` 或 `.html` 结尾                                       | `null`                                                 |
| `excerpt`         | 纯文本的页面摘要。 使用 [该插件](/zh-cn/docs/tag-plugins#文章摘要和截断) 来格式化文本                |                                                        |
| `disableNunjucks` | 启用时禁用 Nunjucks 标签 `{{ }}`/`{% %}` 和 [标签插件](/zh-cn/docs/tag-plugins) 的渲染功能 | false                                                  |
| `lang`            | 设置语言以覆盖 [自动检测](/zh-cn/docs/internationalization#路径)                       | 继承自 `_config.yml`                                      |
| `published`       | 文章是否发布                                                                    | 对于 `_posts` 下的文章为 `true`，对于 `_draft` 下的文章为 `false`     |

#### 布局

根据 `_config.yml` 中 [`default_layout`](/zh-cn/docs/configuration#文章) 的设置，默认布局是 `post` 。 当文章中的布局被禁用(`layout: false`)，它将不会使用主题处理。 然而，它仍然会被任何可用的渲染引擎渲染：如果一篇文章是用 Markdown 写的，并且安装了 Markdown 渲染引擎（比如默认的 [hexo-renderer-marked](https://github.com/hexojs/hexo-renderer-marked))，它将被渲染成HTML。

除非通过 `disableNunjucks` 设置或 [渲染引擎](/zh-cn/api/renderer#禁用-Nunjucks-标签) 禁用，否则无论布局如何，[标签插件](/zh-cn/docs/tag-plugins) 总是被处理。

#### 分类和标签

只有文章支持分类和标签。 分类按顺序应用于文章，从而形成分类和子分类的层次结构。 标签是在相同的层次结构上定义的，因此它们的出现顺序不重要。

**示例**

```yaml
categories:
  - Sports
  - Baseball
tags:
  - Injury
  - Fight
  - Shocking
```

如果你想应用多个分类层次结构，请使用一个名称列表而不是一个单个名称。 如果 Hexo 在帖子上看到像这种方式定义的分类，它会将该帖子的每个分类视为其自己的独立层次结构。

**示例**

```yaml
categories:
  - [Sports, Baseball]
  - [MLB, American League, Boston Red Sox]
  - [MLB, American League, New York Yankees]
  - Rivalries
```
