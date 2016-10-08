title: Themes
---
It's easy to build a Hexo theme - you just have to create a new folder. To start using your theme, modify the `theme` setting in your site's `_config.yml`. A theme should have the following structure:

``` plain
.
├── _config.yml
├── languages
├── layout
├── scripts
└── source
```

### _config.yml

Theme configuration file. Modifying this doesn't require a server restart.

### languages

Language folder. See [internationalization (i18n)](internationalization.html) for more info.

### layout

Layout folder. This folder contains the theme's template files, which define the appearance of your website. Hexo provides the [Swig] template engine by default, but you can easily install additional plugins to support alternative engines such as [EJS], [Haml], [Jade], or [Pug]. Hexo chooses the template engine based on the file extension of the template. For example:

``` plain
layout.ejs   - uses EJS
layout.swig  - uses Swig
```

See [templates](templates.html) for more info.

### scripts

Script folder. Hexo will automatically load all JavaScript files in this folder during initialization. For more info, see [plugins](plugins.html).

### source

Source folder. Place your assets (e.g. CSS and JavaScript files) here. Hexo ignores hidden files and files or folders prefixed with `_` (underscore).

Hexo will process and save all renderable files to the `public` folder. Non-renderable files will be copied to the `public` folder directly.

### Publishing

When you have finished building your theme, you can publish it to the [theme list](/themes). Before doing so, you should run the [theme unit test](https://github.com/hexojs/hexo-theme-unit-test) to ensure that everything works. The steps for publishing a theme are very similar to those for [updating documentation](contributing.html#Updating_Documentation).

1. Fork [hexojs/site]
2. Clone the repository to your computer and install dependencies.

    ```shell
    $ git clone https://github.com/<username>/site.git
    $ cd site
    $ npm install
    ```

3. Edit `source/_data/themes.yml` and add your theme. For example:

    ```yaml
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
    ```

4. Add a screenshot (with the same name as the theme) to `source/themes/screenshots`. It must be a 800*500px PNG.
5. Push the branch.
6. Create a pull request and describe the change.

[EJS]: https://github.com/hexojs/hexo-renderer-ejs
[Swig]: https://github.com/paularmstrong/swig
[Haml]: https://github.com/hexojs/hexo-renderer-haml
[Jade]: https://github.com/hexojs/hexo-renderer-jade
[Pug]: https://github.com/maxknee/hexo-render-pug
[hexojs/site]: https://github.com/hexojs/site
