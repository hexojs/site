title: Writing
---
We're going to create the very first new post in the blog. You can modify the existing post "Hello World". But we recommended you to learn the `new` command.

``` bash
$ hexo new [layout] <title>
```

You can set the layout of specified posts. It's `post` by default. You can modify `default_layout` in `_config.yml` to change the default layout.

### Layout

There're three default layouts in Hexo: `post`, `page` and `draft`. Each of them has different paths. Other customized layouts is same to `post`. They will be saved to `source/_posts` folder.

Layout | Path
--- | ---
`post` | `source/_posts`
`page` | `source`
`draft` | `source/_drafts`

{% note tip Don't process my posts! %}
If you don't want your posts processed, you can set `layout: false` in front-matter.
{% endnote %}

### Filename

Hexo uses the title as file name by default. You can edit `new_post_name` setting to change the default file name. For example, set to `:year-:month-:day-:title.md` can make you more convenient to manage posts.

Variable | Description
--- | ---
`:title` | Escaped title (lower case and replace spaces with dash)
`:year` | Created year (4-digit)
`:month` | Created month (2-digit)
`:i_month` | Created month (Without leading zeros)
`:day` | Created day (2-digit)
`:i_day` | Created day (Without leading zeros)

### Drafts

Previously we mentioned a special layout in Hexo: `draft`. This layout will be saved to `source/_drafts` folder. You can use `publish` command to move drafts to `source/_posts` folder. The usage of this command is very simliar to `new` command. You can also set `layout` in the command to specify layout.

``` bash
$ hexo publish [layout] <title>
```

Drafts are not displayed by default. You can add `--draft` option when running Hexo or enable `render_drafts` setting to preview drafts.

### Scaffolds

When creating posts, Hexo will build files based on the corresponding file in `scaffolds` folder. For example:

``` bash
$ hexo new photo "My Gallery"
```

When you running this command, Hexo will try to find `photo.md` in `scaffolds` folder and build the post based on it. The following is the available variables in scaffolds:

Variable | Description
--- | ---
`layout` | Layout
`title` | Title
`date` | File created date