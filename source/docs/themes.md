title: Themes
---
It's easy to build a Hexo theme - you just have to create a new folder. To start using your theme, modify the `theme` setting in your site's `_config.yml`. A theme may have the following structure:

``` plain
.
├── _config.yml
├── languages
├── layout
├── scripts
└── source
```

### _config.yml

Theme configuration file. You don't need to restart the server after changing this.

### languages

Language folder. See [localization (i18n)](localization.html) for more info.

### layout

Layout folder. This folder contains the theme's template files, which define the appearance of your website. Hexo provides the [Swig] template engine. You can install plugins to support alternative engines such as [EJS], [Haml] or [Jade]. Hexo chooses the template engine based on the file extension of the template. For example:

``` plain
layout.ejs   - uses EJS
layout.swig  - uses Swig
```

See [templates](templates.html) for more info.

### scripts

Script folder. JavaScript files in this folder will be loaded when Hexo starts. For more info, see [plugins](plugins.html).

### source

Source folder. Assets (e.g. CSS and JavaScript files) should be placed here. Hexo ignores hidden files and files or folders prefixed with `_` (underscore).

Files that can be rendered are processed and saved to the `public` folder. Other files are copied to the `public` folder directly.

### Publishing

Once your theme is complete, you can publish it to the [theme list](/themes). Before publishing, you should run the [theme unit test](https://github.com/hexojs/hexo-theme-unit-test) and ensure everything works. The steps for publishing a theme are very simliar to those for [updating documentation](contributing.html#Updating_Documentation).

1. Fork [hexojs/site]
2. Clone the repository to your computer and install dependencies.

    {% code %}
    $ git clone https://github.com/<username>/site.git
    $ cd site
    $ npm install
    {% endcode %}

3. Edit `source/_data/themes.yml` and add your theme. For example:

    {% code %}
    - name: landscape
      description: A brand new default theme for Hexo.
      link: https://github.com/hexojs/hexo-theme-landscape
      preview: http://hexo.io/hexo-theme-landscape
      tags:
        - official
        - responsive
        - widget
        - two_column
        - one_column
    {% endcode %}

4. Add a screenshot (with the same name as the theme) to `source/themes/screenshots`. It must be a 800*500px PNG.
5. Push the branch.
6. Create a pull request and describe the change.

[EJS]: https://github.com/hexojs/hexo-renderer-ejs
[Swig]: http://paularmstrong.github.com/swig/
[Haml]: https://github.com/hexojs/hexo-renderer-haml
[Jade]: https://github.com/hexojs/hexo-renderer-jade
[hexojs/site]: https://github.com/hexojs/site
