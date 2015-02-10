title: Setup
---
Once Hexo is installed, run the following command and Hexo will build all the files you need in the target folder.

``` bash
$ hexo init <folder>
$ cd <folder>
$ npm install
```

After build, here's what the project folder looks like:

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

Site [configuration](configuration.html) file. You can configure most options here.

### package.json

Application data. [EJS](http://embeddedjs.com/), [Stylus](http://learnboost.github.io/stylus/) and [Markdown](http://daringfireball.net/projects/markdown/) renderers are installed by default, you can uninstall them later.

``` json package.json
{
  "name": "hexo-site",
  "version": "",
  "private": true,
  "dependencies": {
    "hexo-generator-archive": "*",
    "hexo-generator-category": "*",
    "hexo-generator-index": "*",
    "hexo-generator-tag": "*",
    "hexo-renderer-ejs": "*",
    "hexo-renderer-stylus": "^0.2.0",
    "hexo-renderer-marked": "^0.2.0",
    "hexo-server": "*"
  }
}
```

### scaffolds

[Scaffold](writing.html) folder. When you create a new post, Hexo will build the file based on the scaffold.

### scripts

[Script](plugins.html) folder. Scripts are the easiest way to extend Hexo. JavaScript files in this folder will be executed automatically.

### source

Source folder is where you can put your content. Files or folders whose names are prefixed with `_` (underscore) and hidden files will be ignored except `_posts` folder. Markdown and HTML files will be processed and put into `public` folder, while other files will simply be copied.

### themes

[Theme](themes.html) folder. Hexo will generate files based on the theme.
