---
title: 写作
---

{% youtube HLJ9jJy7CMg %}

你可以执行下列命令来创建一篇新文章或者新的页面。

```bash
$ hexo new [layout] <title>
```

`post`是默认的`布局`，但你也可以提供自己的布局。 您可以通过编辑 `_config.yml` 中的 `default_layout` 设置来更改默认布局。

## 布局（Layout）

Hexo 有三种默认布局：`post`、`page` 和 `draft`。 每个布局创建的文件会被保存到不同的路径。 新创建的帖子被保存到 `source/_post` 文件夹。

| 布局      | 路径               |
| ------- | ---------------- |
| `post`  | `source/_posts`  |
| `page`  | `source`         |
| `draft` | `source/_drafts` |

{% note tip 禁用布局 %}
如果你不希望一篇文章（post/page）使用主题处理，请在它的 front-matter 中设置 `layout: false`。 详情请参考[本节](/zh-cn/docs/front-matter#布局)。
{% endnote %}

## 文件名称

默认情况下，Hexo 使用帖子标题作为其文件名。 您可以编辑 `_config.yml` 中的 `new_post_name` 设置去更改默认文件名。 例如， `:year-:month-:day-:title.md` 将在文件名前加上创建日期。 你可以使用以下占位符：

| 占位符        | 描述                   |
| ---------- | -------------------- |
| `:title`   | 标题（小写，空格将会被替换为短杠）    |
| `:year`    | 建立的年份，比如， `2015`     |
| `:month`   | 建立的月份（有前导零），比如， `04` |
| `:i_month` | 建立的月份（无前导零），比如， `4`  |
| `:day`     | 建立的日期（有前导零），比如， `07` |
| `:i_day`   | 建立的日期（无前导零），比如， `7`  |

## 草稿

之前，我们在提到了 Hexo 中的一个特殊的布局：`draft`。 使用此布局初始化的帖子将被保存到 `source/_drafts` 文件夹中。 您可以使用 `发布` 命令将草稿移动到 `source/_posts` 文件夹。 `publish` 工作方式类似于 `new` 命令。

```bash
$ hexo publish [layout] <title>
```

默认情况下不显示草稿 您可以在运行 Hexo 时添加 `--draft` 选项或在 `_config.yml` 启用 `render_draft` 设置来渲染草稿。

## 脚手架

在新建文章时，Hexo 会根据 `scaffolds` 文件夹内相对应的文件来建立文件。 例如：

```bash
$ hexo new photo "My Gallery"
```

在执行这行指令时，Hexo 会尝试在 `scaffolds` 文件夹中寻找 `photo.md`，并根据其内容建立文章。 以下是您可以在模版中使用的变量：

| 占位符      | 描述     |
| -------- | ------ |
| `layout` | 布局     |
| `title`  | 标题     |
| `date`   | 文件建立日期 |

## 支持的格式

Hexo 支持以任何格式书写文章，只要安装了相应的渲染插件。

例如，Hexo 默认安装了 `hexo-renderer-marked` 和 `hexo-renderer-ejs`，因此你不仅可以用 Markdown 写作，你还可以用 EJS 写作。 如果你安装了 `hexo-renderer-pug`，你甚至可以用 Pug 模板语言书写文章。

只需要将文章的扩展名从 `md` 改成 `ejs`，Hexo 就会使用 `hexo-renderer-ejs` 渲染这个文件，其他格式同理。
