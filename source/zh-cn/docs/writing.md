---
title: 写作
---

{% youtube HLJ9jJy7CMg %}

你可以执行下列命令来创建一篇新文章或者新的页面。

```bash
$ hexo new [layout] <title>
```

`post` is the default `layout`, but you can supply your own. 您可以在命令中指定文章的布局（layout），默认为 `post`，可以通过修改 `_config.yml` 中的 `default_layout` 参数来指定默认布局。

## 布局（Layout）

Hexo 有三种默认布局：`post`、`page` 和 `draft`。 Files created by each of them is saved to a different path. Newly created posts are saved to the `source/_posts` folder.

| 布局      | 路径               |
| ------- | ---------------- |
| `post`  | `source/_posts`  |
| `page`  | `source`         |
| `draft` | `source/_drafts` |

{% note tip 禁用布局 %}
如果你不希望一篇文章（post/page）使用主题处理，请在它的 front-matter 中设置 `layout: false`。 详情请参考[本节](/zh-cn/docs/front-matter#布局)。
{% endnote %}

## 文件名称

By default, Hexo uses the post title as its filename. You can edit the `new_post_name` setting in `_config.yml` to change the default filename. For example, `:year-:month-:day-:title.md` will prefix filenames with the post creation date. 你可以使用以下占位符：

| Placeholder | 描述                   |
| ----------- | -------------------- |
| `:title`    | 标题（小写，空格将会被替换为短杠）    |
| `:year`     | 建立的年份，比如， `2015`     |
| `:month`    | 建立的月份（有前导零），比如， `04` |
| `:i_month`  | 建立的月份（无前导零），比如， `4`  |
| `:day`      | 建立的日期（有前导零），比如， `07` |
| `:i_day`    | 建立的日期（无前导零），比如， `7`  |

## 草稿

Previously, we mentioned a special layout in Hexo: `draft`. Posts initialized with this layout are saved to the `source/_drafts` folder. You can use the `publish` command to move drafts to the `source/_posts` folder. `publish` works in a similar way to the `new` command.

```bash
$ hexo publish [layout] <title>
```

Drafts are not displayed by default. You can add the `--draft` option when running Hexo or enable the `render_drafts` setting in `_config.yml` to render drafts.

## Scaffolds

在新建文章时，Hexo 会根据 `scaffolds` 文件夹内相对应的文件来建立文件，例如： For example:

```bash
$ hexo new photo "My Gallery"
```

在执行这行指令时，Hexo 会尝试在 `scaffolds` 文件夹中寻找 `photo.md`，并根据其内容建立文章，以下是您可以在模版中使用的变量： The following placeholders are available in scaffolds:

| Placeholder | 描述     |
| ----------- | ------ |
| `layout`    | 布局     |
| `title`     | 标题     |
| `date`      | 文件建立日期 |

## 支持的格式

Hexo 支持以任何格式书写文章，只要安装了相应的渲染插件。

例如，Hexo 默认安装了 `hexo-renderer-marked` 和 `hexo-renderer-ejs`，因此你不仅可以用 Markdown 写作，你还可以用 EJS 写作。 如果你安装了 `hexo-renderer-pug`，你甚至可以用 Pug 模板语言书写文章。

只需要将文章的扩展名从 `md` 改成 `ejs`，Hexo 就会使用 `hexo-renderer-ejs` 渲染这个文件，其他格式同理。
