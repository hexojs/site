title: Configuration
---
You can modify most options in `_config.yml`.

## Configuration

### Site

Setting | Description
--- | ---
`title` | The title of your website
`subtitle` | The subtitle of your website
`description` | The description of your website
`author` | Your name
`language` | The language used in your website.
`timezone` | The timezone of your website. Hexo uses the setting on your computer by default. You can find the list of available timezones [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

### URL

Setting | Description | Default
--- | --- | ---
`url` | The URL of your website |
`root` | The root directory of your website |
`permalink` | The [permalink](permalinks.html) format of articles | :year/:month/:day/:title/
`permalink_default` | Default values of each segment in permalink. |

{% note info Website in subdirectory %}
If your website is put in a subdirectory such as `http://yoursite.com/blog`, set `url` to `http://yoursite.com/blog` and set `root` to `/blog/`.
{% endnote %}

### Directory 

Setting | Description | Default
--- | --- | ---
`source_dir` | Source folder. This folder is where you can put your content. | source
`public_dir` | Public folder. This folder is where the generated files will be. | public
`tag_dir` | Tag directory | tags
`archive_dir` | Archive directory | archives
`category_dir` | Category directory | categories
`code_dir` | Include code directory | downloads/code
`i18n_dir` | i18n directory | :lang
`skip_render` | Skip render for specified paths. You can use glob expressions for path matching. |

### Writing

Setting | Description | Default
--- | --- | ---
`new_post_name` | The filename of the new post | :title.md
`default_layout` | Default layout | post
`titlecase` | Transform title into proper title case | false
`external_link` | Open external links in new tab | true
`filename_case` | Transform filename into (1) lower case or (2) upper case | 0
`render_drafts` | Display drafts | false
`post_asset_folder` | Enables [Asset Folder](writing.html#Asset_Folder) | false
`relative_link` | Make links relative to root folder | false
`future` | Display future posts | true
`highlight` | Code block settings |

### Category & Tag

Setting | Description | Default
--- | --- | ---
`default_category` | Default category | uncategorized
`category_map` | Category slugs |
`tag_map` | Tag slugs |

### Date / Time format

Hexo uses [Moment.js](http://momentjs.com/) to parse and display date.

Setting | Description | Default
--- | --- | ---
`date_format` | Date format | MMM D YYYY
`time_format` | Time format | H:mm:ss

### Pagination

Setting | Description | Default
--- | --- | ---
`per_page` | The amount of the posts displayed in a single page (0 = Disable pagination) | 10
`pagination_dir` | Pagination directory | page

### Extensions

Setting | Description
--- | ---
`theme` | Theme name. Set `false` to disable theme.
`deploy` | Deployment setting.