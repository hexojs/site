title: Writing
---
To create a new post, you can run the following command:

``` bash
$ hexo new [layout] <title>
```

`post` is the default `layout`, but you can supply your own. You can change the default layout by editing the `default_layout` setting in `_config.yml`.

### Layout

There are three default layouts in Hexo: `post`, `page` and `draft`. Each of them is saved to a different path. Custom layouts are saved to the `source/_posts` folder.

Layout | Path
--- | ---
`post` | `source/_posts`
`page` | `source`
`draft` | `source/_drafts`

{% note tip Don't process my posts! %}
If you don't want your posts processed, you can set `layout: false` in front-matter.
{% endnote %}

### Filename

By default, Hexo uses the post title as its filename. You can edit the `new_post_name` setting in `_config.yml` to change the default filename. For example, `:year-:month-:day-:title.md` will prefix filenames with the post creation date. You can use the following placeholders:

Placeholder | Description
--- | ---
`:title` | Post title (lower case, with spaces replaced by hyphens)
`:year` | Created year, e.g. `2015`
`:month` | Created month (leading zeros), e.g. `04`
`:i_month` | Created month (no leading zeros), e.g. `4`
`:day` | Created day (leading zeros), e.g. `07`
`:i_day` | Created day (no leading zeros), e.g. `7`

### Drafts

Previously, we mentioned a special layout in Hexo: `draft`. Posts initialized with this layout are saved to the `source/_drafts` folder. You can use the `publish` command to move drafts to the `source/_posts` folder. `publish` works in a similar way to the `new` command.

``` bash
$ hexo publish [layout] <title>
```

Drafts are not displayed by default. You can add the `--draft` option when running Hexo or enable the `render_drafts` setting in `_config.yml` to render drafts.

### Scaffolds

When creating posts, Hexo will build files based on the corresponding file in `scaffolds` folder. For example:

``` bash
$ hexo new photo "My Gallery"
```

When you run this command, Hexo will try to find `photo.md` in the `scaffolds` folder and build the post based on it. The following placeholders are available in scaffolds:

Placeholder | Description
--- | ---
`layout` | Layout
`title` | Title
`date` | File created date
