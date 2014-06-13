title: Themes
---
## Structure

``` plain
.
├── _config.yml
├── languages
├── layout
├── scripts
└── source
```

### _config.yml

Theme configuration file. It'll be updated when changed automatically. You don't have to restart the server.

### languages

Language folder. Hexo provides a simple i18n module built-in. To enable this feature, edit `language` setting. The language code must be written in [IETF format]. For example:

``` yaml
language: zh-TW
```

A language folder must contain a language file named `default.yml` at least. Language files can be written in YAML or JSON format.

You can get the localized string in templates from `__` and `_p` helper. The former is for common usage and the letter is for plural strings. You can even use [printf format](https://github.com/alexei/sprintf.js). For example:

``` yaml default.yml
index:
  title: Home
  add: Add
  video:
    zero: No videos
    one: One video
    other: %d videos
```

``` js
<%= __('index.title') %>
// Home

<%= _p('index.video', 3) %>
// 3 videos
```

### layout

Layout folder. File or folder whose name is prefixed with `_` (underscore) and hidden files will be ignored.

Hexo provides built-in [EJS] and [Swig] template engines. You can install some renderer plugins for [Haml], [Jade] support. Hexo chooses template engines based on the extension name of files. For example:

``` plain
EJS: layout.ejs
Swig: layout.swig
```

Every theme should at least contain `index` layout.

Layout | Description | Fallback
--- | --- | ---
`index` | Index layout |
`post` | Post layout | `index`
`page` | Page layout | `index`
`archive` | Archives layout | `index`
`category` | Category archives layout | `archive`
`tag` | Tag archives layout | `archive`

### scripts

Script folder. JavaScript files in this folder will be loaded when Hexo started. This feature requires Hexo 2.4 and above.

For more info, see [Plugins](plugins.html).

### source

Source folder. Asset files like CSS and Javascript files should be placed in this folder. File or folder whose name is prefixed with `_` (underscore) and hidden files will be ignored. 

Files which are able to rendered by renderer plugins will be rendered, such as Stylus files. Hexo provides built-in [Stylus] renderer plugin (with [nib] support). You can install some renderer plugins for [Less], [CoffeeScript] support.

{% note info Get config in Stylus File %}
You can get global and theme configuration by using `hexo-config(key)` in stylus file.
{% endnote %}

## Layout

Layout wraps a template to another layout template. A layout must contain `<%- body %>` so that it can show the contents of the template. For example:

``` html index.ejs
index
```

``` html layout.ejs
<!DOCTYPE html>
<html>
  <body><%- body %></body>
</html>
```

yields:

``` html
<!DOCTYPE html>
<html>
  <body>index</body>
</html>
```

By default, every template file uses `layout.ejs` as the layout. You can specify other layouts in front-matter or use `false` to disable the layout. You can also use a layout in another layout to create nested layouts.

## Partial

Partial helps you share components across templates. For example:

``` html _partial/header.ejs
<header></header>
```

``` html index.ejs
<%- partial('_partial/header') %>
<div id="content"></div>
```

yields:

```
<header></header>
<div id="content"></div>
```

You can pass data to partials by defining local variables:

``` js
<%- partial('_partial/header', {title: 'Hello World'}) %>
```

For more info, see [partial helper](helpers.html#partial).

## Optimization

If your theme is too complicated and too may source files needed to be generate. Generation performance may decrease a lot. Besides simplifying your theme, you can also try **Fragment Caching** introduced in Hexo 2.7.

This feature is stolen from [Ruby on Rails](http://guides.rubyonrails.org/caching_with_rails.html#fragment-caching). It saves the contents within a fragment and serves the cache when the next request comes in. It can reduce database queries and make generation faster.

It can be used in header, footer, sidebar or static contents that won't be changed in your templates. For example:

``` js
<%- fragment_cache('header', function(){
  return '<header></header>';
});
```

It would be easier if you use partial:

``` js
<%- partial('header', {}, {cache: true});
```

## Publishing

You can publish your theme to the [theme list](https://github.com/tommy351/hexo/wiki/Themes) on wiki. Before publishing, you should test it with [Theme Unit Test](https://github.com/hexojs/hexo-theme-unit-test).

[IETF format]: http://www.w3.org/International/articles/language-tags/
[EJS]: https://github.com/visionmedia/ejs
[Swig]: http://paularmstrong.github.com/swig/
[Haml]: https://github.com/hexojs/hexo-renderer-haml
[Jade]: https://github.com/hexojs/hexo-renderer-jade
[Stylus]: http://learnboost.github.com/stylus/
[nib]: http://visionmedia.github.com/nib/
[Less]: https://github.com/hexojs/hexo-renderer-less
[CoffeeScript]: https://github.com/hexojs/hexo-renderer-coffeescript