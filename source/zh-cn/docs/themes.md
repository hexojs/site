---
title: 主题
---

{% youtube 5ROIU_9dYe4 %}

创建 Hexo 主题非常简单，只需创建一个新文件夹即可。 并修改 `_config.yml` 内的 `theme` 设定，即可切换主题。 一个主题可能会有以下的结构：

```plain
.
├── _config.yml
├── languages
├── layout
├── scripts
└── source
```

### \_config.yml

主题的配置文件。 和 Hexo 配置文件不同，主题配置文件修改时会自动更新，无需重启 Hexo Server。

### languages

语言文件夹。 请参见 [国际化 (i18n)](internationalization.html)。

### layout

布局文件夹。 用于存放主题的模板文件，决定了网站内容的呈现方式。 Hexo 内建 [Nunjucks][] 模板引擎，您可以另外安装插件来获得 [EJS][] 或 [Pug][] 支持。 Hexo 根据模板的文件扩展名选择模板引擎（就像帖子一样）。 例如：

```plain
layout.ejs   - 使用 EJS
layout.njk   - 使用 Nunjucks
```

您可参考 [模板](templates.html) 以获得更多信息。

### scripts

脚本文件夹。 在启动时，Hexo 会加载此文件夹内的 JavaScript 文件。 请参见 [plugins](plugins.html). 以获得更多信息。

### source

Source 文件夹。 将您的素材（如 CSS 和 JavaScript 文件）放在这里。 文件或文件夹开头名称为 `_`（下划线）或隐藏的文件会被忽略。

Hexo 将处理所有可渲染的文件，并将它们保存到 `public` 文件夹下。 不可渲染的文件将直接复制到 `public` 文件夹。

### 发布

当您完成主题后，可以考虑将它发布到 [主题列表](/themes)，让更多人能够使用您的主题。 在发布前建议先进行 [主题单元测试](https://github.com/hexojs/hexo-theme-unit-test)，确保每一项功能都能正常使用。 发布主题的步骤和 [更新文档](contributing.html#更新文档) 非常类似。

1. 复刻 [hexojs/site][]
2. 把库（repository）复制到电脑上，并安装所依赖的插件。

   ```shell
   $ git clone https://github.com/<username>/site.git
   $ cd site
   $ npm install
   ```

3. 在 `source/_data/themes/` 中创建一个新的 yaml 文件，使用您的主题名称作为文件名。

4. 编辑 `source/_data/themes/<your-theme-name>.yml` 并添加您的主题。 例如：

   ```yaml
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

5. 在 `source/themes/screenshots` 中添加截图（名称与主题相同）。 图片必须为 800x500 的 PNG 文件。
6. 推送（push）分支。
7. 建立一个新的合并申请（pull request）并描述改动。

[EJS]: https://github.com/hexojs/hexo-renderer-ejs
[Pug]: https://github.com/hexojs/hexo-renderer-pug
[hexojs/site]: https://github.com/hexojs/site
[Nunjucks]: https://mozilla.github.io/nunjucks/
