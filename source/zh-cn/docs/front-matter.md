---
title: Front-matter
---

{% youtube Rl48Yk4A_V8 %}

Front-matter 是文件最上方以 `---` 分隔的区域，用于指定个别文件的变量，举例来说：

``` yaml
---
title: Hello World
date: 2013/7/13 20:46:25
---
```

以下是预先定义的参数，您可在模板中使用这些参数值并加以利用。

参数 | 描述 | 默认值
--- | --- | ---
`layout` | 布局 | [`config.default_layout`](/zh-cn/docs/configuration#文章)
`title` | 标题 | 文章的文件名
`date` | 建立日期 | 文件建立日期
`updated` | 更新日期 | 文件更新日期
`comments` | 开启文章的评论功能 | true
`tags` | 标签（不适用于分页） |
`categories` | 分类（不适用于分页）|
`permalink` | 覆盖文章的永久链接，永久链接应该以 `/` 或 `.html` 结尾 | `null`
`excerpt` | 纯文本的页面摘要。使用 [该插件](/zh-cn/docs/tag-plugins#文章摘要和截断) 来格式化文本 |
`disableNunjucks` | 启用时禁用 Nunjucks 标签 `{{ }}`/`{% %}` 和 [标签插件](/zh-cn/docs/tag-plugins) 的渲染功能 | false
`lang` | 设置语言以覆盖 [自动检测](/zh-cn/docs/internationalization#路径) | 继承自 `_config.yml`

## 布局

根据 `_config.yml` 中 [`default_layout`](/zh-cn/docs/configuration#文章) 的设置，默认布局是 `post` 。当文章中的布局被禁用(`layout: false`)，它将不会使用主题处理。然而，它仍然会被任何可用的渲染引擎渲染：如果一篇文章是用 Markdown 写的，并且安装了 Markdown 渲染引擎（比如默认的 [hexo-renderer-marked](https://github.com/hexojs/hexo-renderer-marked))，它将被渲染成HTML。

除非通过 `disableNunjucks` 设置或 [渲染引擎](/zh-cn/api/renderer#禁用-Nunjucks-标签) 禁用，否则无论布局如何，[标签插件](/zh-cn/docs/tag-plugins) 总是被处理。

## 分类和标签

只有文章支持分类和标签，您可以在 Front-matter 中设置。在其他系统中，分类和标签听起来很接近，但是在 Hexo 中两者有着明显的差别：分类具有顺序性和层次性，也就是说 `Foo, Bar` 不等于 `Bar, Foo`；而标签没有顺序和层次。

``` yaml
categories:
- Diary
tags:
- PS3
- Games
```

{% note warn 分类方法的分歧 %}
如果您有过使用 WordPress 的经验，就很容易误解 Hexo 的分类方式。WordPress 支持对一篇文章设置多个分类，而且这些分类可以是同级的，也可以是父子分类。但是 Hexo 不支持指定多个同级分类。下面的指定方法：

```yaml
categories:
  - Diary
  - Life
```

会使分类 `Life` 成为 `Diary` 的子分类，而不是并列分类。因此，有必要为您的文章选择尽可能准确的分类。

如果你需要为文章添加多个分类，可以尝试以下 list 中的方法。

```yaml
categories:
- [Diary, PlayStation]
- [Diary, Games]
- [Life]
```

此时这篇文章同时包括三个分类： `PlayStation` 和 `Games` 分别都是父分类 `Diary` 的子分类，同时 `Life` 是一个没有子分类的分类。
{% endnote %}

## JSON Front-matter

除了 YAML 外，你也可以使用 JSON 来编写 Front-matter，只要将 `---` 代换成 `;;;` 即可。

``` json
"title": "Hello World",
"date": "2013/7/13 20:46:25"
;;;
```
