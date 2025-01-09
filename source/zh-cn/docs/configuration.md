---
title: 配置
---

您可以在 `_config.yml` 或 [代替配置文件](#使用代替配置文件) 中修改大部分的配置。

### 网站

| 设置            | 描述                                                                                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`       | 网站标题                                                                                                                                                                            |
| `subtitle`    | 网站副标题                                                                                                                                                                           |
| `description` | 网站描述                                                                                                                                                                            |
| `keywords`    | 网站的关键词。 支持多个关键词。                                                                                                                                                                |
| `author`      | 您的名字                                                                                                                                                                            |
| `language`    | 网站使用的语言。 使用 [2 个字母的 ISO-639-1 代码](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)，或 [它的变体](/docs/internationalization)。 默认为 `en`。                                        |
| `timezone`    | 网站时区。 Hexo 默认使用您电脑的时区。 请参考 [时区列表](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) 进行设置，如 `America/New_York`, `Japan`, 和 `UTC` 。 一般的，对于中国大陆地区可以使用 `Asia/Shanghai`。 |

### 网址

| 设置                           | 描述                                                             | 默认值                         |
| ---------------------------- | -------------------------------------------------------------- | --------------------------- |
| `url`                        | 网址, 必须以 `http://` 或 `https://` 开头                              |                             |
| `root`                       | 网站根目录                                                          | `url's pathname`            |
| `permalink`                  | 文章的 [永久链接](permalinks.html) 格式                                 | `:year/:month/:day/:title/` |
| `permalink_defaults`         | 永久链接中各部分的默认值                                                   |                             |
| `pretty_urls`                | 改写 [`permalink`](variables.html) 的值来美化 URL                     |                             |
| `pretty_urls.trailing_index` | 是否在永久链接中保留尾部的 `index.html`，设置为 `false` 时去除                     | `true`                      |
| `pretty_urls.trailing_html`  | 是否在永久链接中保留尾部的 `.html`, 设置为 `false` 时去除 (_对尾部的 `index.html`无效_) | `true`                      |

{% note info 网站存放在子目录 %}
如果您的网站存放在子目录中，例如 `http://example.com/blog`，则请将您的 `url` 设为 `http://example.com/blog` 并把 `root` 设为 `/blog/`。
{% endnote %}

例如：

```yaml
# e.g. page.permalink is http://example.com/foo/bar/index.html
pretty_urls:
  trailing_index: false
# becomes http://example.com/foo/bar/
```

### 目录

| 设置             | 描述                                                                                                                | 默认值              |
| -------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------- |
| `source_dir`   | Source 文件夹 存储内容的位置                                                                                                | `source`         |
| `public_dir`   | Public 文件夹 生成静态站点的位置                                                                                              | `public`         |
| `tag_dir`      | 标签文件夹                                                                                                             | `tags`           |
| `archive_dir`  | 归档文件夹                                                                                                             | `archives`       |
| `category_dir` | 分类文件夹                                                                                                             | `categories`     |
| `code_dir`     | Include code 文件夹，`source_dir` 下的子目录                                                                               | `downloads/code` |
| `i18n_dir`     | 国际化（i18n）文件夹                                                                                                      | `:lang`          |
| `skip_render`  | 匹配到的文件将会被不做改动地复制到 `public` 目录中。 您可使用 [glob 表达式](https://github.com/micromatch/micromatch#extended-globbing)来匹配路径。 |                  |

例如：

```yaml
skip_render: "mypage/**/*"
# 将会直接将 `source/mypage/index.html` 和 `source/mypage/code.js` 不做改动地输出到 'public' 目录
# 你也可以用这种方法来跳过对指定文章文件的渲染
skip_render: "_posts/test-post.md"
# 这将会忽略对 'test-post.md' 的渲染

## This also can be used to exclude posts,
skip_render: "_posts/test-post.md"
# will ignore the `source/_posts/test-post.md`.
```

### 文章

| 设置                      | 描述                                                                         | 默认值            |
| ----------------------- | -------------------------------------------------------------------------- | -------------- |
| `new_post_name`         | 新文章的文件名称                                                                   | `:title.md`    |
| `default_layout`        | 预设布局                                                                       | `post`         |
| `titlecase`             | 把标题转换为 title case                                                          | `false`        |
| `external_link`         | 在新标签中打开链接                                                                  |                |
| `external_link.enable`  | 在新标签中打开链接                                                                  | `true`         |
| `external_link.field`   | 对整个网站（`site`）生效或仅对文章（`post`）生效                                             | `site`         |
| `external_link.exclude` | 需要排除的域名。 主域名和子域名如 `www` 需分别配置                                              | `[]`           |
| `filename_case`         | 设置为 `1` ，将文件名转换为小写形式； 设置为 `2` ，将文件名转换为大写形式。                                | `0`            |
| `render_drafts`         | 显示草稿                                                                       | `false`        |
| `post_asset_folder`     | 启用 [资源文件夹](asset-folders.html)                                             | `false`        |
| `relative_link`         | 把链接改为与根目录的相对位址                                                             | `false`        |
| `future`                | 显示未来的文章                                                                    | `true`         |
| `syntax_highlighter`    | 代码块的设置, 请参考 [代码高亮](/zh-cn/docs/syntax-highlight) 进行设置                      | `highlight.js` |
| `highlight`             | 代码块的设置, 请参考 [Highlight.js](/zh-cn/docs/syntax-highlight#Highlight-js) 进行设置 |                |
| `prismjs`               | 代码块的设置, 请参考 [PrismJS](/zh-cn/docs/syntax-highlight#PrismJS) 进行设置           |                |

### 首页设置

| 设置                               | 描述                                                                                  | 默认值     |
| -------------------------------- | ----------------------------------------------------------------------------------- | ------- |
| `index_generator`                | 生成帖子归档。由 [hexo-generator-index](https://github.com/hexojs/hexo-generator-index) 驱动。 |         |
| `index_generator.path`           | 博客索引页面的根路径                                                                          | `''`    |
| `index_generator.per_page`       | 每页显示帖子数                                                                             | `10`    |
| `index_generator.order_by`       | 帖子排列顺序。 默认情况下按日期降序(从新到旧)。                                                           | `-date` |
| `index_generator.pagination_dir` | URL 格式，请参阅下面的 [分页](#Pagination) 设置                                                  | `page`  |

### 分类 & 标签

| 设置                 | 描述   | 默认值             |
| ------------------ | ---- | --------------- |
| `default_category` | 默认分类 | `uncategorized` |
| `category_map`     | 分类别名 |                 |
| `tag_map`          | 标签别名 |                 |

例如：

```yaml
category_map:
  "yesterday's thoughts": yesterdays-thoughts
  "C++": c-plus-plus
```

### 日期 / 时间格式

Hexo 使用 [Moment.js](http://momentjs.com/) 来解析和显示时间。

| 设置               | 描述                                                                           | 默认值          |
| ---------------- | ---------------------------------------------------------------------------- | ------------ |
| `date_format`    | 日期格式                                                                         | `YYYY-MM-DD` |
| `time_format`    | 时间格式                                                                         | `HH:mm:ss`   |
| `updated_option` | 当 Front Matter 中没有指定 [`updated`](/zh-cn/docs/variables#页面变量) 时 `updated` 的取值 | `mtime`      |

{% note info updated_option %}
`updated_option` 控制了当 Front Matter 中没有指定 `updated` 时，`updated` 如何取值：

- `mtime`: 使用文件的最后修改时间。 这是从 Hexo 3.0.0 开始的默认行为。
- `date`: 使用 `date` 作为 `updated` 的值。 可被用于 Git 工作流之中，因为使用 Git 管理站点时，文件的最后修改日期常常会发生改变
- `empty`: 直接删除 `updated`。 使用这一选项可能会导致大部分主题和插件无法正常工作。

`use_date_for_updated` 选项已经在 v7.0.0+ 中被移除。 请改为使用 `updated_option: 'date'`。
{% endnote %}

### 分页

| 设置               | 描述                   | 参数     |
| ---------------- | -------------------- | ------ |
| `per_page`       | 每页显示的帖子数。 `0` 关闭分页功能 | `10`   |
| `pagination_dir` | URL format           | `page` |

例如：

```yaml
pagination_dir: 'page'
# http://example.com/page/2

pagination_dir: 'awesome-page'
# http://example.com/awesome-page/2
```

### 扩展

| 设置               | 描述                                                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `theme`          | 当前主题名称。 值为`false`时禁用主题                                                                                                               |
| `theme_config`   | 主题的配置文件。 在这里放置的配置会覆盖主题目录下的 `_config.yml` 中的配置                                                                                        |
| `deploy`         | 部署部分的设置                                                                                                                              |
| `meta_generator` | [Meta generator](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta#%E5%B1%9E%E6%80%A7) 标签。 值为 `false` 时 Hexo 不会在头部插入该标签 |

### 包括或不包括目录和文件

使用以下选项可明确处理或忽略某些文件/文件夹。 可以使用 [glob 表达式](https://github.com/micromatch/micromatch#extended-globbing) 进行路径匹配。

`include` 和 `exclude` 选项只会应用到 `source/` ，而 `ignore` 选项会应用到所有文件夹.

| 设置        | 描述                                |
| --------- | --------------------------------- |
| `include` | 包含隐藏文件（包括名称以下划线开头的文件/文件夹，\* 除外） |
| `exclude` | 排除文件或文件夹                          |
| `ignore`  | 忽略文件/文件夹                          |

例如：

```yaml
# 处理或不处理目录或文件
include:
  - ".nojekyll"
  # 处理 'source/css/_typing.css'
  - "css/_typing.css"
  # 处理 'source/_css/' 中的任何文件，但不包括子目录及其其中的文件。
  - "_css/*"
  # 处理 'source/_css/' 中的任何文件和子目录下的任何文件。
  - "_css/**/*"

exclude:
  # 不处理 'source/js/test.js'。
  - "js/test.js"
  # 不处理 'source/js/' 中的文件、但包括子目录下的所有目录和文件。
  - "js/*"
  # 不处理 'source/js/' 中的文件和子目录下的任何文件。
  - "js/**/*"
  # 不处理 'source/js/' 目录下的所有文件名以 'test' 开头的文件，但包括其它文件和子目录下的单文件。
  - "js/test*"
  # 不处理 'source/js/' 及其子目录中任何以 'test' 开头的文件。
  - "js/**/test*"
  # 不要用 exclude 来忽略 'source/_posts/' 中的文件。
  # 你应该使用 'skip_render'。 或者在要忽略的文件的文件名之前加一个下划线 '_'。
  # - "_posts/hello-world.md" # 在这里配置是没有用的。

ignore:
  # 忽略任何一个名叫 'foo' 的文件夹。
  - "**/foo"
  # 只忽略 'themes/' 下的 'foo' 文件夹。
  - "**/themes/*/foo"
  # 对 'themes/' 目录下的每个文件夹中忽略名叫 'foo' 的子文件夹。
  - "**/themes/**/foo"
```

列表中的每一项都必须用单引号或双引号包裹起来。

`include` 和 `exclude` 并不适用于 `themes/` 目录下的文件。 如果需要忽略 `themes/` 目录下的部分文件或文件夹，可以使用 `ignore` 或在文件名之前添加下划线 `_`。

`source/_posts` 文件夹是一个例外，但该文件夹下任何名称以 `_` 开头的文件或文件夹仍会被忽略。 不建议在该文件夹中使用 `include` 规则。

### 使用代替配置文件

可以在 hexo-cli 中使用 `--config` 参数来指定自定义配置文件的路径。 你可以使用一个 YAML 或 JSON 文件的路径，也可以使用逗号分隔（无空格）的多个 YAML 或 JSON 文件的路径。

```bash
# use 'custom.yml' in place of '_config.yml'
$ hexo server --config custom.yml

# use 'custom.yml' & 'custom2.json', prioritizing 'custom2.json'
$ hexo server --config custom.yml,custom2.json
```

当你指定了多个配置文件以后，Hexo 会按顺序将这部分配置文件合并成一个 `_multiconfig.yml`。 后面的值优先。 这个原则适用于任意数量、任意深度的 YAML 和 JSON 文件。 请注意，**列表中不允许有空格**。

如果 `custom.yml` 中指定了 `foo: bar`，在 custom2.json 中指定了 `"foo": "dinosaur"`，那么在 `_multiconfig.yml` 中你会得到 `foo: dinosaur`。

### 使用代替主题配置文件

通常情况下，Hexo 主题是一个独立的项目，并拥有一个独立的 `_config.yml` 配置文件。

除了自行维护独立的主题配置文件，你也可以在其它地方对主题进行配置。

**配置文件中的 `theme_config`**

> 该特性自 Hexo 2.8.2 起提供

```yml
# _config.yml
theme: "my-theme"
theme_config:
  bio: "My awesome bio"
  foo:
    bar: "a"
```

```yml
# themes/my-theme/_config.yml
bio: "Some generic bio"
logo: "a-cool-image.png"
  foo:
    baz: 'b'
```

最终主题配置的输出是：

```json
{
  "bio": "My awesome bio",
  "logo": "a-cool-image.png",
  "foo": {
    "bar": "a",
    "baz": "b"
  }
}
```

**独立的 `_config.[theme].yml` 文件**

> 该特性自 Hexo 5.0.0 起提供

独立的主题配置文件应放置于站点根目录下，支持 `yml` 或 `json` 格式。 需要配置站点 `_config.yml` 文件中的 `theme` 以供 Hexo 寻找 `_config.[theme].yml` 文件。

```yml
# _config.yml
theme: "my-theme"
```

```yml
# _config.my-theme.yml
bio: "My awesome bio"
foo:
  bar: "a"
```

```yml
# themes/my-theme/_config.yml
bio: "Some generic bio"
logo: "a-cool-image.png"
  foo:
    baz: 'b'
```

最终主题配置的输出是：

```json
{
  "bio": "My awesome bio",
  "logo": "a-cool-image.png",
  "foo": {
    "bar": "a",
    "baz": "b"
  }
}
```

{% note %}
我们强烈建议你将所有的主题配置集中在一处。 如果你不得不在多处配置你的主题，那么这些信息对你将会非常有用：Hexo 在合并主题配置时，Hexo 配置文件中的 `theme_config` 的优先级最高，其次是 `_config.[theme].yml` 文件。 最后是位于主题目录下的 `_config.yml` 文件。
{% endnote %}
