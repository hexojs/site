title: Configuration
---
You can modify site settings in `_config.yml`.

### Site

Setting | Description
--- | ---
`title` | The title of your website
`subtitle` | The subtitle of your website
`description` | The description of your website
`author` | Your name
`language` | The language of your website. Use a [2-lettter ISO-639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). Default is `en`.
`timezone` | The timezone of your website. Hexo uses the setting on your computer by default. You can find the list of available timezones [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). Some examples are `America/New_York`, `Japan`, and `UTC`.

### URL

Setting | Description | Default
--- | --- | ---
`url` | The URL of your website |
`root` | The root directory of your website |
`permalink` | The [permalink](permalinks.html) format of articles | `:year/:month/:day/:title/`
`permalink_default` | Default values of each segment in permalink |

{% note info Website in subdirectory %}
If your website is in a subdirectory (such as `http://example.org/blog`) set `url` to `http://example.org/blog` and set `root` to `/blog/`.
{% endnote %}

### Directory

Setting | Description | Default
--- | --- | ---
`source_dir` | Source folder. Where your content is stored | `source`
`public_dir` | Public folder. Where the static site will be generated | `public`
`tag_dir` | Tag directory | `tags`
`archive_dir` | Archive directory | `archives`
`category_dir` | Category directory | `categories`
`code_dir` | Include code directory | `downloads/code`
`i18n_dir` | i18n directory | `:lang`
`skip_render` | Paths not to be rendered. You can use [glob expressions](https://github.com/isaacs/minimatch) for path matching |

### Writing

Setting | Description | Default
--- | --- | ---
`new_post_name` | The filename format for new posts | `:title.md`
`default_layout` | Default layout | `post`
`titlecase` | Transform titles into title case? | `false`
`external_link` | Open external links in new tab? | `true`
`filename_case` | Transform filenames to `1` lower case; `2` upper case | `0`
`render_drafts` | Display drafts? | `false`
`post_asset_folder` | Enable the [Asset Folder](asset-folders.html)? | `false`
`relative_link` | Make links relative to the root folder? | `false`
`future` | Display future posts? | `true`
`highlight` | Code block settings |

### Category & Tag

Setting | Description | Default
--- | --- | ---
`default_category` | Default category | `uncategorized`
`category_map` | Category slugs |
`tag_map` | Tag slugs |

### Date / Time format

Hexo uses [Moment.js](http://momentjs.com/) to process dates.

Setting | Description | Default
--- | --- | ---
`date_format` | Date format | `YYYY-MM-DD`
`time_format` | Time format | `HH:mm:ss`

### Pagination

Setting | Description | Default
--- | --- | ---
`per_page` | The amount of the posts displayed on a single page. `0` disables pagination | `10`
`pagination_dir` | Pagination directory | `page`

### Extensions

Setting | Description
--- | ---
`theme` | Theme name. `false` disables theming
`deploy` | Deployment setting
