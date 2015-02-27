title: 主题
---
创建 Hexo 主题非常容易，您只要在 `themes` 文件夹内，新增一个任意名称的文件夹，并修改 `_config.yml` 内的 `theme` 设定，即可切换主题。一个主题可能会有以下的结构：

``` plain
.
├── _config.yml
├── languages
├── layout
├── scripts
└── source
```

### _config.yml

主题的配置文件。修改时会自动更新，无需重启服务器。

### languages

语言文件夹。请参见 [本地化 (i18n)](localization.html)。

### layout

布局文件夹。用于存放主题的模板文件，决定了网站内容的呈现方式，Hexo 内建 [Swig] 模板引擎，您可以另外安装插件来获得 [EJS]、[Haml] 或 [Jade] 支持，Hexo 根据模板文件的扩展名来决定所使用的模板引擎，例如：

``` plain
EJS: layout.ejs
Swig: layout.swig
```

您可参考 [模板](templates.html) 以获得更多信息。

### scripts

脚本文件夹。在启动时，Hexo 会载入此文件夹内的 JavaScript 文件，请参见 [插件](plugins.html) 以获得更多信息。

### source

资源文件夹，除了模板以外的 Asset，例如 CSS、JavaScript 文件等，都应该放在这个文件夹中。文件或文件夹开头名称为 `_`（下划线线）或隐藏的文件会被忽略。

如果文件可以被渲染的话，会经过解析然后储存到 `public` 文件夹，否则会直接拷贝到 `public` 文件夹。

### 发布

[EJS]: https://github.com/hexojs/hexo-renderer-ejs
[Swig]: http://paularmstrong.github.com/swig/
[Haml]: https://github.com/hexojs/hexo-renderer-haml
[Jade]: https://github.com/hexojs/hexo-renderer-jade