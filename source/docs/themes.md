title: Themes
---
It's easy to build a Hexo theme. You only have to create a new folder and modify `theme` setting in `_config.yml` and the theme will be changed. A theme may have the following structure:

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

Language folder. See [localization (i18n)](localization.html) for more info.

### layout

Layout folder. This folder is used to put template files of the theme. The appearance of your website is depended on templates. Hexo provides built-in [Swig] template engine. You can install plugins for [EJS], [Haml] or [Jade] support. Hexo choose template engines based on the extension name of files. For example:

``` plain
EJS: layout.ejs
Swig: layout.swig
```

See [templates](templates.html) for more info.

### scripts

Script folder. JavaScript files in this folder will be loaded when Hexo started. For more info, see [Plugins](plugins.html).

### source

Source folder. Asset files like CSS and Javascript files should be placed in this folder. File or folder whose name is prefixed with `_` (underscore) and hidden files will be ignored.

If a file is able to be rendered, then it will be processed and save to `public` folder, or it would be copy to `public` folder directly.

### Publishing

Once your theme has been done, you can consider to publish it to [theme list](/themes) to make more people use your theme. It's recommended to run the [theme unit test](https://github.com/hexojs/hexo-theme-unit-test) and ensure everything is working before you publishing. The steps to publish a theme is very simliar to [updating documentation](contributing.html#Updating_Documentation).

1. Fork [hexojs/site](https://github.com/hexojs/site)
2. Clone the repository to your computer and install dependencies.

    {% code %}
    $ git clone https://github.com/<username>/site.git
    $ cd site
    $ npm install
    {% endcode %}

3. Edit `source/_data/theme.yml` and add your theme. For example:

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

4. Add a screenshot in `source/themes/screenshots` with same name. The picture must be 800X500 px and PNG format.
5. Push the branch.
6. Create a pull request and describe the change.

[EJS]: https://github.com/hexojs/hexo-renderer-ejs
[Swig]: http://paularmstrong.github.com/swig/
[Haml]: https://github.com/hexojs/hexo-renderer-haml
[Jade]: https://github.com/hexojs/hexo-renderer-jade
