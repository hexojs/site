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

Next, export the WordPress site's content using the Export tool the admin area (see [support page](http://en.support.wordpress.com/export/) for more details). Save the resulting xml file where you can access it from your Hexo installation.

Then run the following command to migrate all posts from the WordPress export. `source` can be the path or URL where the export xml is found.

``` bash
$ hexo migrate wordpress <source>
```
