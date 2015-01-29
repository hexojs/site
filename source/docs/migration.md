title: Migration
---
## RSS

First, install `hexo-migrator-rss` plugin.

``` bash
$ npm install hexo-migrator-rss --save
```

Once the plugin is installed, run the following command to migrate all posts from RSS. `source` can be the file path or URL.

``` bash
$ hexo migrate rss <source>
```

## Jekyll

Move all files in `_posts` folder to `source/_posts` folder and modify `new_post_name` setting in `_config.yml`.

``` yaml
new_post_name: :year-:month-:day-:title.md
```

## Octopress

Move all files in `source/_posts` folder of Octopress to `source/_posts` of Hexo and modify `new_post_name` setting in `_config.yml`.

``` yaml
new_post_name: :year-:month-:day-:title.md
```

## WordPress

First, install `hexo-migrator-wordpress` plugin.

``` bash
$ npm install hexo-migrator-wordpress --save
```

Export your WordPress in "Tools" → "Export" → "WordPress" in your dashboard (see [support page](http://en.support.wordpress.com/export/) for more details).

Execute the following command after installed. `source` is the file path or URL of WordPress export file.

``` bash
$ hexo migrate wordpress <source>
```
