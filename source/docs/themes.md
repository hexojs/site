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

Hexo supports **Layout** and **Partial**. Every template file use `layout.ejs` as layout by default. You can set `layout: false` in front-matter or delete `layout.ejs` to disable the layout.

{% note info Customize layouts %}
If you want to customize a layout for your posts. You have to add a new layout file in `layout` folder or it'll fallback to `post` layout. Page variables in the custom layout is same as `post` layout.
{% endnote %}

### scripts

Script folder. JavaScript files in this folder will be loaded when Hexo started. This feature requires Hexo 2.4 and above.

For more info, see [Plugins](plugins.html).

### source

Source folder. Asset files like CSS and Javascript files should be placed in this folder. File or folder whose name is prefixed with `_` (underscore) and hidden files will be ignored. 

Files which are able to rendered by renderer plugins will be rendered, such as Stylus files. Hexo provides built-in [Stylus] renderer plugin (with [nib] support). You can install some renderer plugins for [Less], [CoffeeScript] support.

{% note info Get config in Stylus File %}
You can get global and theme configuration by using `hexo-config(key)` in stylus file.
{% endnote %}

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