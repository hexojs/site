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

You can define the attributes of a post in data. Besides the following attributes, others will be appended to the front-matter too.

Data | Description
--- | ---
`title` | Title
`slug` | URL
`layout` | Layout. Default to the `default_layout` setting.
`path` | Path. Hexo builds the post path based on the `new_post_path` setting by default.
`date` | Date. Default to the current date.

## Publish a Draft

``` js
hexo.post.publish(data, replace);
```

Argument | Description
--- | ---
`data` | Data
`replace` | Replace existing files

You can define the attributes of a post in data. Besides the following attributes, others will be appended to the front-matter too.

Data | Description
--- | ---
`slug` | File name (Required)
`layout` | Layout. Default to the `default_layout` setting.

## Render

``` js
hexo.post.render(source, data);
```

Argument | Description
--- | ---
`source` | Full path of a file (Optional)
`data` | Data

The data must contains the `content` attribute. If not, Hexo will try to read the original file. The execution steps of this function are:

- Execute `before_post_render` filters
- Render with Markdown or other renderers (depends on the extension name)
- Render with [Nunjucks]
- Execute `after_post_render` filters

[Nunjucks]: http://mozilla.github.io/nunjucks/