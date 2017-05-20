title: 迁移
---
## RSS

首先，安装 `hexo-migrator-rss` 插件。

``` bash
$ npm install hexo-migrator-rss --save
```

插件安装完成后，执行下列命令，从 RSS 迁移所有文章。`source` 可以是文件路径或网址。

``` bash
$ hexo migrate rss <source>
```

## Jekyll

把 `_posts` 文件夹内的所有文件复制到 `source/_posts` 文件夹，并在 `_config.yml` 中修改 `new_post_name` 参数。

``` yaml
new_post_name: :year-:month-:day-:title.md
```

## Octopress

把 Octopress `source/_posts` 文件夹内的所有文件转移到 Hexo 的 `source/_posts` 文件夹，并修改 `_config.yml` 中的 `new_post_name` 参数。

``` yaml
new_post_name: :year-:month-:day-:title.md
```

## WordPress

首先，安装 `hexo-migrator-wordpress` 插件。

``` bash
$ npm install hexo-migrator-wordpress --save
```

在 WordPress 仪表盘中导出数据("Tools" → "Export" → "WordPress")（详情参考[WP支持页面](http://en.support.wordpress.com/export/)）。

插件安装完成后，执行下列命令来迁移所有文章。`source` 可以是 WordPress 导出的文件路径或网址。

``` bash
$ hexo migrate wordpress <source>
```
{% note warn 注意 %}
这个插件并不能完美地实现WordPress->Hexo的数据转换，尤其是在处理WordPress的分类方面存在问题（见[Front-matter中的分类与标签](https://hexo.io/zh-cn/docs/front-matter.html)）。因此，建议您在迁移完成后，手工审阅所有生成的markdown文件，检查其中是否有错误。对于文章数量较大的WordPress站点，这项工作可能要花很长的时间。
{% endnote %}
## Joomla

首先，安装 `hexo-migrator-joomla` 插件。

```bash
$ npm install hexo-migrator-joomla --save
```

使用 [J2XML](http://extensions.joomla.org/extensions/migration-a-conversion/data-import-a-export/12816?qh=YToxOntpOjA7czo1OiJqMnhtbCI7fQ%3D%3D) 组件导出 Joomla 文章。
插件安装完成后，执行下列命令来迁移所有文章。`source` 可以是 Joomla 导出的文件路径或网址。


```bash
$ hexo migrate joomla <source>
```

