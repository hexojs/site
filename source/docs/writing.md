---
title: Writing
---

{% youtube AIqBubK6ZLc %}

To create a new post or a new page, you can run the following command:

``` bash
$ hexo new [layout] <title>
```

`post` is the default `layout`, but you can supply your own. You can change the default layout by editing the `default_layout` setting in `_config.yml`.

## Layout

There are three default layouts in Hexo: `post`, `page` and `draft`. Files created by each of them is saved to a different path. Newly created posts are saved to the `source/_posts` folder.

Layout | Path
--- | ---
`post` | `source/_posts`
`page` | `source`
`draft` | `source/_drafts`

{% note tip Disabling layout %}
If you don't want an article (post/page) to be processed with a theme, set `layout: false` in its front-matter. Refer to [this section](/docs/front-matter#Layout) for more details.
{% endnote %}

## Filename

By default, Hexo uses the post title as its filename. You can edit the `new_post_name` setting in `_config.yml` to change the default filename. For example, `:year-:month-:day-:title.md` will prefix filenames with the post creation date. You can use the following placeholders:

Placeholder | Description
--- | ---
`:title` | Post title (lower case, with spaces replaced by hyphens)
`:year` | Created year, e.g. `2015`
`:month` | Created month (leading zeros), e.g. `04`
`:i_month` | Created month (no leading zeros), e.g. `4`
`:day` | Created day (leading zeros), e.g. `07`
`:i_day` | Created day (no leading zeros), e.g. `7`

## Drafts

Previously, we mentioned a special layout in Hexo: `draft`. Posts initialized with this layout are saved to the `source/_drafts` folder. You can use the `publish` command to move drafts to the `source/_posts` folder. `publish` works in a similar way to the `new` command.

``` bash
$ hexo publish [layout] <title>
```

Drafts are not displayed by default. You can add the `--draft` option when running Hexo or enable the `render_drafts` setting in `_config.yml` to render drafts.

## Scaffolds

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

## Supported Formats

Hexo support posts written in any format, as long as the corresponding renderer plugin is installed.

For example, Hexo has `hexo-renderer-marked` and `hexo-renderer-ejs` installed by default, so you can write your posts in `markdown` or in `ejs`. If you have `hexo-renderer-pug` installed, then you can even write your post in pug template language.

You can rename your posts and change to file extension from `.md` to `.ejs`, then Hexo will use `hexo-renderer-ejs` to render that file, so do the other formats.
