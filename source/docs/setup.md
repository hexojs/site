title: Setup
---
Once Hexo is installed, run the following commands to initialise Hexo in the target `<folder>`.

``` bash
$ hexo init <folder>
$ cd <folder>
$ npm install
```

Once initialised, here's what your project folder will look like:

``` plain
.
├── _config.yml
├── package.json
├── scaffolds
├── scripts
├── source
|   ├── _drafts
|   └── _posts
└── themes
```

### _config.yml

Site [configuration](configuration.html) file. You can configure most settings here.

### package.json

Application data. The [EJS](http://embeddedjs.com/), [Stylus](http://learnboost.github.io/stylus/) and [Markdown](http://daringfireball.net/projects/markdown/) renderers are installed by default. If you want, you can uninstall them later.

``` json package.json
{
  "name": "hexo-site",
  "version": "0.0.0",
  "private": true,
  "hexo": {
    "version": ""
  },
  "dependencies": {
    "hexo": "^3.0.0",
    "hexo-generator-archive": "^0.1.0",
    "hexo-generator-category": "^0.1.0",
    "hexo-generator-index": "^0.1.0",
    "hexo-generator-tag": "^0.1.0",
    "hexo-renderer-ejs": "^0.1.0",
    "hexo-renderer-stylus": "^0.2.0",
    "hexo-renderer-marked": "^0.2.4",
    "hexo-server": "^0.1.2"
  }
}
```

### scaffolds

[Scaffold](writing.html#Scaffolds) folder. When you create a new post, Hexo bases the new file on the scaffold.

### scripts

[Script](plugins.html#Scripts) folder. Scripts are the easiest way to extend Hexo. JavaScript files in this folder are executed automatically.

### source

Source folder. This is where you put your site's content. Hexo ignores hidden files and files or folders whose names are prefixed with `_` (underscore) - except the `_posts` folder. Renderable files (e.g. Markdown, HTML) will be processed and put into the `public` folder, while other files will simply be copied.

### themes

[Theme](themes.html) folder. Hexo generates a static website by combining the site contents with the theme.
