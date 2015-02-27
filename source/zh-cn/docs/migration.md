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

插件安装完成后，执行下列命令来迁移所有文章。`source` 可以是文件路径或网址。

``` bash
$ hexo migrate wordpress <source>
```