---
title: 配置
---

您可以在 `_config.yml` 或 [代替配置文件](#使用代替配置文件) 中修改大部分的配置。

### 网站

| Setting       | 描述                                                                                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`       | 网站标题                                                                                                                                                                            |
| `subtitle`    | 网站副标题                                                                                                                                                                           |
| `description` | 网站描述                                                                                                                                                                            |
| `keywords`    | 网站的关键词。 支持多个关键词。                                                                                                                                                                |
| `author`      | 您的名字                                                                                                                                                                            |
| `language`    | 网站使用的语言。 Use a [2-letter ISO-639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) or optionally [its variant](/docs/internationalization). Default is `en`.       |
| `timezone`    | 网站时区。 Hexo 默认使用您电脑的时区。 请参考 [时区列表](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) 进行设置，如 `America/New_York`, `Japan`, 和 `UTC` 。 一般的，对于中国大陆地区可以使用 `Asia/Shanghai`。 |

### 网址

| Setting                      | 描述                                                             | 默认值                         |
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
# 比如，一个页面的永久链接是 http://example.com/foo/bar/index.html
pretty_urls:
  trailing_index: false
# 此时页面的永久链接会变为 http://example.com/foo/bar/
```

### 目录

| Setting        | 描述                                                                                                                | 默认值              |
| -------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------- |
| `source_dir`   | Source folder. Where your content is stored                                                                       | `source`         |
| `public_dir`   | Public folder. Where the static site will be generated                                                            | `public`         |
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

| Setting                 | 描述                                                                         | 默认值            |
| ----------------------- | -------------------------------------------------------------------------- | -------------- |
| `new_post_name`         | 新文章的文件名称                                                                   | `:title.md`    |
| `default_layout`        | 预设布局                                                                       | `post`         |
| `titlecase`             | 把标题转换为 title case                                                          | `false`        |
| `external_link`         | 在新标签中打开链接                                                                  |                |
| `external_link.enable`  | 在新标签中打开链接                                                                  | `true`         |
| `external_link.field`   | 对整个网站（`site`）生效或仅对文章（`post`）生效                                             | `site`         |
| `external_link.exclude` | 需要排除的域名。 主域名和子域名如 `www` 需分别配置                                              | `[]`           |
| `filename_case`         | Transform filenames to `1` lower case; `2` upper case                      | `0`            |
| `render_drafts`         | 显示草稿                                                                       | `false`        |
| `post_asset_folder`     | 启用 [资源文件夹](asset-folders.html)                                             | `false`        |
| `relative_link`         | 把链接改为与根目录的相对位址                                                             | `false`        |
| `future`                | 显示未来的文章                                                                    | `true`         |
| `syntax_highlighter`    | 代码块的设置, 请参考 [代码高亮](/zh-cn/docs/syntax-highlight) 进行设置                      | `highlight.js` |
| `highlight`             | 代码块的设置, 请参考 [Highlight.js](/zh-cn/docs/syntax-highlight#Highlight-js) 进行设置 |                |
| `prismjs`               | 代码块的设置, 请参考 [PrismJS](/zh-cn/docs/syntax-highlight#PrismJS) 进行设置           |                |

### Home page setting

| Setting                          | 描述                                                                                                              | 默认值     |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------- |
| `index_generator`                | Generate an archive of posts, powered by [hexo-generator-index](https://github.com/hexojs/hexo-generator-index) |         |
| `index_generator.path`           | Root path for your blog's index page                                                                            | `''`    |
| `index_generator.per_page`       | Posts displayed per page.                                                                                       | `10`    |
| `index_generator.order_by`       | Posts order. Order by descending date (new to old) by default.                                                  | `-date` |
| `index_generator.pagination_dir` | URL format, see [Pagination](#Pagination) setting below                                                         | `page`  |

### 分类 & 标签

| Setting            | 描述   | 默认值             |
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

| Setting          | 描述                                                                           | 默认值          |
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

| Setting          | 描述                                                              | 参数     |
| ---------------- | --------------------------------------------------------------- | ------ |
| `per_page`       | Number of posts displayed on each page. `0` disables pagination | `10`   |
| `pagination_dir` | URL format                                                      | `page` |

例如：

```yaml
pagination_dir: 'page'
# http://example.com/page/2

pagination_dir: 'awesome-page'
# http://example.com/awesome-page/2
```

### 扩展

| Setting          | 描述                                                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `theme`          | 当前主题名称。 值为`false`时禁用主题                                                                                                               |
| `theme_config`   | 主题的配置文件。 在这里放置的配置会覆盖主题目录下的 `_config.yml` 中的配置                                                                                        |
| `deploy`         | 部署部分的设置                                                                                                                              |
| `meta_generator` | [Meta generator](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta#%E5%B1%9E%E6%80%A7) 标签。 值为 `false` 时 Hexo 不会在头部插入该标签 |

### 包括或不包括目录和文件

Use the following options to explicitly process or ignore certain files/folders. Support [glob expressions](https://github.com/micromatch/micromatch#extended-globbing) for path matching.

`include` 和 `exclude` 选项只会应用到 `source/` ，而 `ignore` 选项会应用到所有文件夹.

| Setting   | Description                                                                                                      |
| --------- | ---------------------------------------------------------------------------------------------------------------- |
| `include` | Include hidden files (including files/folders with a name that starts with an underscore, with an exception\*) |
| `exclude` | 资源文件夹，这个文件夹用来存放内容。                                                                                               |
| `ignore`  | Ignore files/folders                                                                                             |

例如，使用 `--config` 指定了两个自定义配置文件：

```yaml
# 处理或不处理目录或文件
include:
  - ".nojekyll"
  # 处理 'source/css/_typing.css'
  - "css/_typing.css"
  # 处理 'source/_css/' 中的任何文件，但不包括子目录及其其中的文件。
  - "css/_typing.css"
  # Include any file in 'source/_css/'.
  - "_css/*"
  # Include any file and subfolder in 'source/_css/'.
  - "_css/*"
  # 处理 'source/_css/' 中的任何文件和子目录下的任何文件
  - "_css/**/*"

exclude:
  # 不处理 'source/js/test.js'
  - "js/test.js"
  # 不处理 'source/js/' 中的文件、但包括子目录下的所有目录和文件
  - "js/*"
  # 不处理 'source/js/' 中的文件和子目录下的任何文件
  - "js/**/*"
  # 不处理 'source/js/' 目录下的所有文件名以 'test' 开头的文件，但包括其它文件和子目录下的单文件
  - "js/test*"
  # 不处理 'source/js/' 及其子目录中任何以 'test' 开头的文件
  - "js/**/test*"
  # 不要用 exclude 来忽略 'source/_posts/' 中的文件。
  - "js/test.js"
  # Exclude any file in 'source/js/'.
  - "js/*"
  # Exclude any file and subfolder in 'source/js/'.
  - "js/**/*"
  # Exclude any file with filename that starts with 'test' in 'source/js/'.
  - "js/test*"
  # Exclude any file with filename that starts with 'test' in 'source/js/' and its subfolders.
  - "js/**/test*"
  # Do not use this to exclude posts in the 'source/_posts/'.
  # Use skip_render for that. Or prepend an underscore to the filename.
  # - "_posts/hello-world.md" # Does not work.

ignore:
  # Ignore any folder named 'foo'.
  ignore:
  # 忽略任何一个名叫 'foo' 的文件夹
  - "**/foo"
  # 只忽略 'themes/' 下的 'foo' 文件夹
  - "**/themes/*/foo"
  # 对 'themes/' 目录下的每个文件夹中忽略名叫 'foo' 的子文件夹
  - "**/themes/**/foo"
  - "**/themes/*/foo"
  # Same as above, but applies to every subfolders of 'themes/'.
  - "**/themes/**/foo"
```

列表中的每一项都必须用单引号或双引号包裹起来。

`include` 和 `exclude` 并不适用于 `themes/` 目录下的文件。 如果需要忽略 `themes/` 目录下的部分文件或文件夹，可以使用 `ignore` 或在文件名之前添加下划线 `_`。

`source/_posts` 文件夹是一个例外，但该文件夹下任何名称以 `_` 开头的文件或文件夹仍会被忽略。 不建议在该文件夹中使用 `include` 规则。

### 使用代替配置文件

可以在 hexo-cli 中使用 `--config` 参数来指定自定义配置文件的路径。 你可以使用一个 YAML 或 JSON 文件的路径，也可以使用逗号分隔（无空格）的多个 YAML 或 JSON 文件的路径。

```bash
$ hexo generate --config custom.yml,custom2.json
```

当你指定了多个配置文件以后，Hexo 会按顺序将这部分配置文件合并成一个 `_multiconfig.yml`。 The later values take precedence. 这个原则适用于任意数量、任意深度的 YAML 和 JSON 文件。 Note that **no spaces are allowed in the list**.

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
我们强烈建议你将所有的主题配置集中在一处。 如果你不得不在多处配置你的主题，那么这些信息对你将会非常有用：Hexo 在合并主题配置时，Hexo 配置文件中的 `theme_config` 的优先级最高，其次是 `_config.[theme].yml` 文件，最后是位于主题目录下的 `_config.yml` 文件。 The `_config.yml` file under the theme directory has the lowest priority.
{% endnote %}
