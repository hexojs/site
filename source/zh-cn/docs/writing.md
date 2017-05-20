title: 写作
---
你可以执行下列命令来创建一篇新文章。

``` bash
$ hexo new [layout] <title>
```

您可以在命令中指定文章的布局（layout），默认为 `post`，可以通过修改 `_config.yml` 中的 `default_layout` 参数来指定默认布局。

### 布局（Layout）

Hexo 有三种默认布局：`post`、`page` 和 `draft`，它们分别对应不同的路径，而您自定义的其他布局和 `post` 相同，都将储存到 `source/_posts` 文件夹。

布局 | 路径
--- | ---
`post` | `source/_posts`
`page` | `source`
`draft` | `source/_drafts`

{% note tip 不要处理我的文章 %}
如果你不想你的文章被处理，你可以将 Front-Matter 中的`layout:` 设为 `false` 。
{% endnote %}

### 文件名称

Hexo 默认以标题做为文件名称，但您可编辑 `new_post_name` 参数来改变默认的文件名称，举例来说，设为 `:year-:month-:day-:title.md` 可让您更方便的通过日期来管理文章。

变量 | 描述
--- | ---
`:title` | 标题（小写，空格将会被替换为短杠）
`:year` | 建立的年份，比如， `2015`
`:month` | 建立的月份（有前导零），比如， `04`
`:i_month` | 建立的月份（无前导零），比如， `4`
`:day` | 建立的日期（有前导零），比如， `07`
`:i_day` | 建立的日期（无前导零），比如， `7`

### 草稿

刚刚提到了 Hexo 的一种特殊布局：`draft`，这种布局在建立时会被保存到 `source/_drafts` 文件夹，您可通过 `publish` 命令将草稿移动到 `source/_posts` 文件夹，该命令的使用方式与 `new` 十分类似，您也可在命令中指定 `layout` 来指定布局。

``` bash
$ hexo publish [layout] <title>
```

草稿默认不会显示在页面中，您可在执行时加上 `--draft` 参数，或是把 `render_drafts` 参数设为 `true` 来预览草稿。

## 模版（Scaffold）

在新建文章时，Hexo 会根据 `scaffolds` 文件夹内相对应的文件来建立文件，例如：

``` bash
$ hexo new photo "My Gallery"
```

在执行这行指令时，Hexo 会尝试在 `scaffolds` 文件夹中寻找 `photo.md`，并根据其内容建立文章，以下是您可以在模版中使用的变量：

变量 | 描述
--- | ---
`layout` | 布局
`title` | 标题
`date` | 文件建立日期