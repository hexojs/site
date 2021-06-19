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
`keywords` | The keywords of your website. Supports multiple values.
`author` | Your name
`language` | The language of your website. Use a [2-letter ISO-639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) or optionally [its variant](/docs/internationalization). Default is `en`.
`timezone` | The timezone of your website. Hexo uses the setting on your computer by default. You can find the list of available timezones [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). Some examples are `America/New_York`, `Japan`, and `UTC`.

### URL

Setting | Description | Default
--- | --- | ---
`url` | The URL of your website, must starts with `http://` or `https://` |
`root` | The root directory of your website | `url's pathname`
`permalink` | The [permalink](permalinks.html) format of articles | `:year/:month/:day/:title/`
`permalink_defaults` | Default values of each segment in permalink |
`pretty_urls` | Rewrite the [`permalink`](variables.html) variables to pretty URLs |
`pretty_urls.trailing_index` | Trailing `index.html`, set to `false` to remove it  | `true`
`pretty_urls.trailing_html` | Trailing `.html`, set to `false` to remove it (_does not apply to trailing `index.html`_)  | `true`

{% note info Website in subdirectory %}
If your website is in a subdirectory (such as `http://example.org/blog`) set `url` to `http://example.org/blog` and set `root` to `/blog/`.
{% endnote %}

Examples:

``` yaml
# e.g. page.permalink is http://example.com/foo/bar/index.html
pretty_urls:
  trailing_index: false
# becomes http://example.com/foo/bar/
```

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
`skip_render` | Paths that will be copied to `public` raw, without being rendered. You can use [glob expressions](https://github.com/micromatch/micromatch#extended-globbing) for path matching.

Examples:

``` yaml
skip_render: "mypage/**/*"
# will output `source/mypage/index.html` and `source/mypage/code.js` without altering them.

## This also can be used to exclude posts,
skip_render: "_posts/test-post.md"
# will ignore the `source/_posts/test-post.md`.
```

### Writing

Setting | Description | Default
--- | --- | ---
`new_post_name` | The filename format for new posts | `:title.md`
`default_layout` | Default layout | `post`
`titlecase` | Transform titles into title case? | `false`
`external_link` | Open external links in a new tab? |
`external_link.enable` | Open external links in a new tab? | `true`
`external_link.field` | Applies to the whole `site` or `post` only | `site`
`external_link.exclude` | Exclude hostname. Specify subdomain when applicable, including `www` | `[]`
`filename_case` | Transform filenames to `1` lower case; `2` upper case | `0`
`render_drafts` | Display drafts? | `false`
`post_asset_folder` | Enable the [Asset Folder](asset-folders.html)? | `false`
`relative_link` | Make links relative to the root folder? | `false`
`future` | Display future posts? | `true`
`highlight` | Code block syntax highlight settings, see [Highlight.js](/docs/syntax-highlight#Highlight-js) section for usage guide |
`prismjs` | Code block syntax highlight settings, see [PrismJS](/docs/syntax-highlight#PrismJS) section for usage guide |

### Home page setting

Setting | Description | Default
--- | --- | ---
`index_generator` | Generate an archive of posts, powered by [hexo-generator-index](https://github.com/hexojs/hexo-generator-index) |
`index_generator.path` | Root path for your blog's index page | `''`
`index_generator.per_page` | Posts displayed per page. | `10`
`index_generator.order_by` | Posts order. Order by descending date (new to old) by default. | `-date`
`index_generator.pagination_dir` | URL format, see [Pagination](#Pagination) setting below | `page`

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
`updated_option` | The [`updated`](/docs/variables#Page-Variables) value to used when not provided in the front-matter | `mtime`

{% note info updated_option %}
`updated_option` controls the `updated` value when not provided in the front-matter:

- `mtime`: Use file modification date as `updated`. It is the default behavior of Hexo since 3.0.0
- `date`: Use `date` as `updated`. Typically used with Git workflow when file modification date could be different.
- `empty`: Simply drop `updated` when not provided. May not be compatible with most themes and plugins.

`use_date_for_updated` is deprecated and will be removed in next major version. Please use `updated_option: 'date'` instead.
{% endnote %}

### Pagination

Setting | Description | Default
--- | --- | ---
`per_page` | Number of posts displayed on each page. `0` disables pagination | `10`
`pagination_dir` | URL format | `page`

Examples:

``` yaml
pagination_dir: 'page'
# http://example.com/page/2

pagination_dir: 'awesome-page'
# http://example.com/awesome-page/2
```

### Extensions

Setting | Description
--- | ---
`theme` | Theme name. `false` disables theming
`theme_config` | Theme configuration. Include any custom theme settings under this key to override theme defaults.
`deploy` | Deployment settings
`meta_generator` | [Meta generator](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#Attributes) tag. `false` disables injection of the tag.

### Include/Exclude Files or Folders

Use the following options to explicitly process or ignore certain files/folders. Support [glob expressions](https://github.com/micromatch/micromatch#extended-globbing) for path matching.

`include` and `exclude` options only apply to the `source/` folder, whereas `ignore` option applies to all folders.

Setting | Description
--- | ---
`include` | Include hidden files (including files/folders with a name that start with an underscore, with an exception*)
`exclude` | Exclude files/folders
`ignore` | Ignore files/folders

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
  # Do not use this to exclude posts in the 'source/_posts/'.
  # Use skip_render for that. Or prepend an underscore to the filename.
  # - "_posts/hello-world.md" # Does not work.

ignore:
  # Ignore any folder named 'foo'.
  - "**/foo"
  # Ignore 'foo' folder in 'themes/' only.
  - "**/themes/*/foo"
  # Same as above, but applies to every subfolders of 'themes/'.
  - "**/themes/**/foo"
```

Each value in the list must be enclosed with single/double quotes.

`include:` and `exclude:` do not apply to the `themes/` folder. Either use `ignore:` or alternatively, prepend an underscore to the file/folder name to exclude.

\* Notable exception is the `source/_posts` folder, but any file or folder with a name that starts with an underscore under that folder would still be ignored. Using `include:` rule in that folder is not recommended.

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

### Alternate Theme Config

Hexo themes are independent projects, with separate `_config.yml` files.

Instead of forking a theme, and maintaining a custom version with your settings, you can configure it from somewhere else:

**from `theme_config` in site's primary configuration file**

> Supported since Hexo 2.8.2

```yml
# _config.yml
theme: "my-theme"
theme_config:
  bio: "My awesome bio"
  foo:
    bar: 'a'
```

```yml
# themes/my-theme/_config.yml
bio: "Some generic bio"
logo: "a-cool-image.png"
  foo:
    baz: 'b'
```

Resulting in theme configuration:

```json
{
  bio: "My awesome bio",
  logo: "a-cool-image.png",
  foo: {
    bar: "a",
    baz: "b"
  }
}
```

**from a dedicated `_config.[theme].yml` file**

> Supported since Hexo 5.0.0

The file should be placed in your site folder, both `yml` and `json` are supported. `theme` inside `_config.yml` must be configured for Hexo to read `_config.[theme].yml`

```yml
# _config.yml
theme: "my-theme"
```

```yml
# _config.my-theme.yml
bio: "My awesome bio"
foo:
  bar: 'a'
```

```yml
# themes/my-theme/_config.yml
bio: "Some generic bio"
logo: "a-cool-image.png"
  foo:
    baz: 'b'
```

Resulting in theme configuration:

```json
{
  bio: "My awesome bio",
  logo: "a-cool-image.png",
  foo: {
    bar: "a",
    baz: "b"
  }
}
```

{% note %}
We strongly recommend you to store your theme configuration in one place. But in case you have to store your theme configuration separately, you need to know the priority of those configurations: The `theme_config` inside site's primary configuration file has the highest priority during merging, then the dedicated theme configuration file.
The `_config.yml` file under the theme directory has the lowest priority.
{% endnote %}
