title: First Post
---
You can create a new post by yourself or run the following command. If `layout` isn't defined, it'll be the `default_layout` setting. If there're spaces or other special characters in `title`, wrap it with quotation marks.

``` bash
$ hexo new [layout] <title>
```

## Layout

Hexo has 2 default layouts: `post` and `page`. Other layouts will be saved in `source/_posts` by default.

Layout | Destination
--- | ---
`post` (Default) | source/_posts
`page` | source

{% note tip Don't process my posts! %}
If you don't want your posts processed, you can set `layout: false` in front-matter.
{% endnote %}

### Example

``` bash
$ hexo new "New Post"
# => The file will be created at source/_posts/new-post.md

$ hexo new page "New Page"
# => The file will be created at source/new-page/index.html
```

## Filename

You can modify the name of files created by Hexo in `new_post_name` setting.

Variable | Description
--- | ---
`:title` | Escaped title (lower case and replace spaces with dash)
`:year` | Created year (4-digit)
`:month` | Created month (2-digit)
`:i_month` | Created month (Without leading zeros)
`:day` | Created day (2-digit)
`:i_day` | Created day (Without leading zeros)

{% note tip Organize your posts by date %}
You can set `new_post_name` as `:year-:month-:day-:title.md` to make your posts ordered by date.
{% endnote %}

## Scaffold

Hexo will create a new post based on the correspond scaffold. For example:

``` bash
$ hexo new photo "My Gallery"
# => The file will be created at source/_posts/my-gallery.md
```

Hexo will find the scaffold file named `photo` in the `scaffolds` folder. If the scaffold not exists, use the post scaffold instead.

### Example

Variables are wrapped by double curly brackets. For example:

``` plain
layout: {% raw %}{{ layout }}{% endraw %}
title: {% raw %}{{ title }}{% endraw %}
date: {% raw %}{{ date }}{% endraw %}
---
```

### Variables

Variable | Description
--- | ---
`layout` | Layout name
`title` | Post title
`date` | File created date