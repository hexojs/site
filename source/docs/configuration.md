---
title: Configuration
---
You can modify site settings in `_config.yml` or in an [alternate config file](#Using-an-Alternate-Config).

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
`permalink_defaults` | Default values of each segment in permalink |

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
`code_dir` | Include code directory (subdirectory of `source_dir`) | `downloads/code`
`i18n_dir` | i18n directory | `:lang`
`skip_render` | Paths that will be copied to `public` raw, without being rendered. You can use [glob expressions](https://github.com/isaacs/minimatch) for path matching.<br /><br />For example, `skip_render: "mypage/**/*"` will output `source/mypage/index.html` and `source/mypage/code.js` without altering them.<br />This also can be used to exclude posts, `skip_render: "_posts/test-post.md"` will ignore the `source/_posts/test-post.md`.|

### Writing

Setting | Description | Default
--- | --- | ---
`new_post_name` | The filename format for new posts | `:title.md`
`default_layout` | Default layout | `post`
`titlecase` | Transform titles into title case? | `false`
`external_link` | Open external links in a new tab? | `true`
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
`per_page` | The amount of posts displayed on a single page. `0` disables pagination | `10`
`pagination_dir` | Pagination directory | `page`

### Extensions

Setting | Description
--- | ---
`theme` | Theme name. `false` disables theming
`theme_config` | Theme configuration. Include any custom theme settings under this key to override theme defaults.
`deploy` | Deployment settings


### Include/Exclude Files or Folders

In the config file, set the include/exclude key to make hexo explicitly process or ignore certain files/folders. You can use [glob expressions](https://github.com/isaacs/minimatch) for path matching.

Setting | Description
--- | ---
`include` | Hexo by default ignores hidden files and folders (including files and folders with a name that start with an underscore, with an exception*), but setting this field will make Hexo process them.
`exclude` | Hexo process will ignore files list under this field.

Examples:
```yaml
# Include/Exclude Files/Folders
include:
  - ".nojekyll"
  # Include 'source/css/_typing.css'.
  - "css/_typing.css"
  # Include any file in 'source/_css/'.
  - "_css/*"
  # Include any file and subfolder in 'source/_css/'.
  - "_css/**/*"
  
exclude:
  # Exclude 'source/js/test.js'.
  - "js/test.js"
  # Exclude any file in 'source/js/'.
  - "js/*"
  # Exclude any file and subfolder in 'source/js/'.
  - "js/**/*"
  # Exclude any file with filename that starts with 'test' in 'source/js/'.
  - "js/test*"
  # Exclude any file with filename that starts with 'test' in 'source/js/' and its subfolders.
  - "js/**/test*"
  # Do not use this to exclude posts or .md files in the 'source/_posts/'.
  # Use skip_render for that. Or prepend an underscore to the filename.
  # - "_posts/hello-world.md" # Does not work.
```

Each value in the list must be enclosed with single/double quotes.

`include:` and `exclude:` do not apply to the `themes/` folder. Prepend an underscore to the files or folders name in that folder to exclude them.

* Notable exception is the `source/_posts` folder, but any file or folder with a name that start with an underscore under that folder would still be ignored. Using `include:` rule in that folder is not recommended.

### Using an Alternate Config

A custom config file path can be specified by adding the `--config` flag to your `hexo` commands with a path to an alternate YAML or JSON config file, or a comma-separated list (no spaces) of multiple YAML or JSON files.

``` bash
# use 'custom.yml' in place of '_config.yml'
$ hexo server --config custom.yml

# use 'custom.yml' & 'custom2.json', prioritizing 'custom2.json'
$ hexo server --config custom.yml,custom2.json
```

Using multiple files combines all the config files and saves the merged settings to `_multiconfig.yml`. The later values take precedence. It works with any number of JSON and YAML files with arbitrarily deep objects. Note that **no spaces are allowed in the list**.

For instance, in the above example if `foo: bar` is in `custom.yml`, but `"foo": "dinosaur"` is in `custom2.json`, `_multiconfig.yml` will contain `foo: dinosaur`.

### Overriding Theme Config

Hexo themes are independent projects, with separate `_config.yml` files.

Instead of forking a theme, and maintaining a custom branch with your settings, you can configure it from your site's primary configuration file.

Example configuration:

```yml
# _config.yml
theme_config:
  bio: "My awesome bio"
```

```yml
# themes/my-theme/_config.yml
bio: "Some generic bio"
logo: "a-cool-image.png"
```

Resulting theme configuration:

```json
{
  bio: "My awesome bio",
  logo: "a-cool-image.png"
}
```
