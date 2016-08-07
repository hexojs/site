title: 配置
---
您可以在 `_config.yml` 中修改大部份的配置。

## 网站

参数 | 描述
--- | ---
`title` | 网站标题
`subtitle` | 网站副标题
`description` | 网站描述
`author` | 您的名字
`language` | 网站使用的语言
`timezone` | 网站时区。Hexo 默认使用您电脑的时区。[时区列表](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)。比如说：`America/New_York`, `Japan`, 和 `UTC` 。

## 网址

参数 | 描述 | 默认值
--- | --- | ---
`url` | 网址 |
`root` | 网站根目录 |
`permalink` | 文章的 [永久链接](permalinks.html) 格式 | `:year/:month/:day/:title/`
`permalink_default` | 永久链接中各部分的默认值 |

{% note info 网站存放在子目录 %}
如果您的网站存放在子目录中，例如 `http://yoursite.com/blog`，则请将您的 `url` 设为 `http://yoursite.com/blog` 并把 `root` 设为 `/blog/`。
{% endnote %}

## 目录

参数 | 描述 | 默认值
--- | --- | ---
`source_dir` | 资源文件夹，这个文件夹用来存放内容。 | `source`
`public_dir` | 公共文件夹，这个文件夹用于存放生成的站点文件。 | `public`
`tag_dir` | 标签文件夹 | `tags`
`archive_dir` | 归档文件夹 | `archives`
`category_dir` | 分类文件夹 | `categories`
`code_dir` | Include code 文件夹 | `downloads/code`
`i18n_dir` | 国际化（i18n）文件夹 | `:lang`
`skip_render` | 跳过指定文件的渲染，您可使用 [glob 表达式](https://github.com/isaacs/node-glob)来匹配路径。 |

## 文章

参数 | 描述 | 默认值
--- | --- | ---
`new_post_name` | 新文章的文件名称 | :title.md
`default_layout` | 预设布局 | post
`auto_spacing` | 在中文和英文之间加入空格 | false
`titlecase` | 把标题转换为 title case | false
`external_link` | 在新标签中打开链接 | true
`filename_case` | 把文件名称转换为 (1) 小写或 (2) 大写 | 0
`render_drafts` | 显示草稿 | false
`post_asset_folder` | 启动 [Asset 文件夹](asset-folders.html) | false
`relative_link` | 把链接改为与根目录的相对位址 | false
`future` | 显示未来的文章 | true
`highlight` | 代码块的设置 |

## 分类 & 标签

参数 | 描述 | 默认值
--- | --- | ---
`default_category` | 默认分类 | `uncategorized`
`category_map` | 分类别名 |
`tag_map` | 标签别名 |

## 日期 / 时间格式

Hexo 使用 [Moment.js](http://momentjs.com/) 来解析和显示时间。

参数 | 描述 | 默认值
--- | --- | ---
`date_format` | 日期格式 | `YYYY-MM-DD`
`time_format` | 时间格式 | `H:mm:ss`

## 分页

参数 | 描述 | 默认值
--- | --- | ---
`per_page` | 每页显示的文章量 (0 = 关闭分页功能) | `10`
`pagination_dir` | 分页目录 | `page`

## 扩展

参数 | 描述
--- | ---
`theme` | 当前主题名称。值为`false`时禁用主题
`deploy` | 部署部分的设置
