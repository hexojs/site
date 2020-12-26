---
title: Migration
---
## RSS

First, install the `hexo-migrator-rss` plugin.

``` bash
$ npm install hexo-migrator-rss --save
```

Once the plugin is installed, run the following command to migrate all posts from RSS. `source` can be a file path or URL.

``` bash
$ hexo migrate rss <source>
```

## Jekyll

Move all files in the Jekyll `_posts` folder to the `source/_posts` folder.

Modify the `new_post_name` setting in `_config.yml`:

``` yaml
new_post_name: :year-:month-:day-:title.md
```

## Octopress

Move all files in the Octopress `source/_posts` folder to `source/_posts` 

Modify the `new_post_name` setting in `_config.yml`:

``` yaml
new_post_name: :year-:month-:day-:title.md
```

## WordPress

First, install the `hexo-migrator-wordpress` plugin.

``` bash
$ npm install hexo-migrator-wordpress --save
```

Export your WordPress site by going to "Tools" → "Export" → "WordPress" in the WordPress dashboard (see the [WordPress support page](http://en.support.wordpress.com/export/) for more details).

Now run:

``` bash
$ hexo migrate wordpress <source>
```

Where `source` is the file path or URL to the WordPress export file.

## Joomla

First, install the `hexo-migrator-joomla` plugin.

```bash
$ npm install hexo-migrator-joomla --save
```

Export your Joomla articles using the [J2XML](http://extensions.joomla.org/extensions/migration-a-conversion/data-import-a-export/12816?qh=YToxOntpOjA7czo1OiJqMnhtbCI7fQ%3D%3D) component.

Now run:

```bash
$ hexo migrate joomla <source>
```

Where `source` is the file path or URL to the Joomla export file.
