title: Миграция
---
## RSS

Прежде нужно установить плагин `hexo-migrator-rss`.

``` bash
$ npm install hexo-migrator-rss --save
```

После установки плагина запустите следующую команду для миграции всех постов в RSS. `source`
Once the plugin is installed, run the following command to migrate all posts from RSS. `source` может быть путём к файлу или URL ссылкой.

``` bash
$ hexo migrate rss <source>
```

## Jekyll

Переместите все файлы из папки Jekyll `_posts` в папку `source/_posts`.

Измените переменную `new_post_name` в `_config.yml`:

``` yaml
new_post_name: :year-:month-:day-:title.md
```

## Octopress

Переместите все файлы из папки Octopress `source/_posts` в папку `source/_posts`.

Измените переменную `new_post_name` в `_config.yml`:

``` yaml
new_post_name: :year-:month-:day-:title.md
```

## WordPress

Сначала установите плагин `hexo-migrator-wordpress`.

``` bash
$ npm install hexo-migrator-wordpress --save
```

Экспортируйте WordPress сайт, зайдя в “Инструменты” → “Экспорт” → “Wordplress” в панели WordPress (см. страницу [поддержки WordPress](http://en.support.wordpress.com/export/) для более подробной информации.

Выполните:

``` bash
$ hexo migrate wordpress <source>
```

Где `source`, это путь или URL файла экспортированного из WordPress.

## Joomla

Во-первых, нужно установить плагин `hexo-migrator-joomla`.

```bash
$ npm install hexo-migrator-joomla --save
```

Экспортируйте статьи Joomla с помощью компонента [J2XML](http://extensions.joomla.org/extensions/migration-a-conversion/data-import-a-export/12816?qh=YToxOntpOjA7czo1OiJqMnhtbCI7fQ%3D%3D)

Выполните:

```bash
$ hexo migrate joomla <source>
```

Где `source`, это путь или URL файла экспортированного из Joomla.
