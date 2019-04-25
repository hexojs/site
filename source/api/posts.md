---
title: Posts
---
## Create a Post

``` js
hexo.post.create(data, replace);
```

Argument | Description
--- | ---
`data` | Data
`replace` | Replace existing files

The attributes of a post can be defined in `data`. The table below is not exhaustive. Additional attributes may be appended to the front-matter.

Data | Description
--- | ---
`title` | Title
`slug` | URL
`layout` | Layout. Defaults to the `default_layout` setting.
`path` | Path. Hexo builds the post path based on the `new_post_path` setting by default.
`date` | Date. Defaults to the current date.

## Publish a Draft

``` js
hexo.post.publish(data, replace);
```

Argument | Description
--- | ---
`data` | Data
`replace` | Replace existing files

The attributes of a post can be defined in `data`. The table below is not exhaustive. Additional attributes may be appended to the front-matter.

Data | Description
--- | ---
`slug` | File name (Required)
`layout` | Layout. Defaults to the `default_layout` setting.

## Render

``` js
hexo.post.render(source, data);
```

Argument | Description
--- | ---
`source` | Full path of a file (Optional)
`data` | Data

The data must contain the `content` attribute. If not, Hexo will try to read the original file. The execution steps of this function are as follows:

- Execute `before_post_render` filters
- Render with Markdown or other renderers (depending on the extension name)
- Render with [Nunjucks]
- Execute `after_post_render` filters

[Nunjucks]: http://mozilla.github.io/nunjucks/
