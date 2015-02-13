title: 建站
---

安装 Hexo 完成后，请执行下列命令，Hexo 将会在指定文件夹中新建所需要的文件。

``` bash
$ hexo init <folder>
$ cd <folder>
$ npm install
```

新建完成后，指定文件夹的目录如下：

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

网站的 [配置](configuration.html) 信息，您可以在此配置大部分的参数。

### package.json

应用程序的信息。[EJS](http://embeddedjs.com/), [Stylus](http://learnboost.github.io/stylus/) 和 [Markdown](http://daringfireball.net/projects/markdown/) renderer 已默认安装，您可以自由移除。

``` json package.json
{
  "name": "hexo-site",
  "version": "",
  "private": true,
  "hexo": {
    "version": ""
  },
  "dependencies": {
    "hexo-renderer-ejs": "*",
    "hexo-renderer-stylus": "*",
    "hexo-renderer-marked": "*"
  }
}
```

### scaffolds

[模版](writing.html) 文件夹。当您新建文章时，Hexo 会根据 scaffold 来建立文件。

### scripts

[脚本](plugins.html) 文件夹。脚本是扩展 Hexo 最简易的方式，在此文件夹内的 JavaScript 文件会被自动执行。

### source

资源文件夹是存放用户资源的地方。除 `_posts` 文件夹之外，开头命名为 `_` (下划线)的文件 / 文件夹和隐藏的文件将会被忽略。Markdown 和 HTML 文件会被解析并放到 `public` 文件夹，而其他文件会被拷贝过去。

### themes

[主题](themes.html) 文件夹。Hexo 会根据主题来生成静态页面。