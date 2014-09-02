title: Writing
---
## Create a New Post

You can create a new post by yourself or run the following command. If `layout` isn't defined, it'll be the `default_layout` setting. If there're spaces or other special characters in `title`, wrap it with quotation marks.

``` bash
$ hexo new [layout] <title>
```

### Layout

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

### Filename

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

## Front-matter

Front-matter is a block wrapped with `---` in front of the file. For example:

``` yaml
title: Hello World
date: 2013/7/13 20:46:25
---
```

You can configure all post configuration in the front-matter. The following is predefined settings.

Setting | Description | Default
--- | --- | ---
`layout` | Layout | post/page
`title` | Title |
`date` | Published date | File created date
`updated` | Last updated date | File last updated date
`comments` | Enables comment feature for the post | true
`tags` | Tags (Not available for pages) |
`categories` | Categories (Not available for pages) |
`permalink` | Overrides the default permalink of the post | Filename

{% note warn YAML front-matter %}
Write the front-matter in YAML format. Don't use tabs in the front-matter, use spaces instead. Also, add a space after colons.
{% endnote %}

## Categories & Tags

Hexo supports categories and tags. Categories and tags are only supported in posts and have to be set in the front-matter. For example:

``` yaml
categories:
- Diary
tags:
- PS3
- Games
```

Categories and tags may sound familiar in other systems, but they're totally different in Hexo. Categories are hierarchical and ordered, which means `Foo, Bar` doesn't equal to `Bar, Foo`. Tags are unordered and flat.

## Excerpts

You can hide parts of your post by adding `<!-- more -->` in the content. Index page will only show the post from the first to the second occurrence of `<!-- more -->`.

``` markdown
...

<!-- more -->

...
```

## Code Highlighting

There're 2 ways for you to highlight your code snippets in your posts: **Backtick code block** and **Swig code block**. Both are ported from Octopress.

### Backtick Code Block

{% code %}
``` [language] [title] [url] [link text]
code snippet
```
{% endcode %}

### Swig Code Block

{% raw %}
<figure class="highlight"><pre>{% code [title] [lang:language] [url] [link text] %}
code snippet
{% endcode %}
</pre></figure>
{% endraw %}

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

## Asset Folder

If you put all images and other assets in `source` folder. You can try to enable `post_asset_folder` setting.

``` yaml
post_asset_folder: true
```

After enabling this setting, a folder will be created when you create a new post. This folder is for you to put all asset files used in the post in. It would be much easier to use a image in a post.
