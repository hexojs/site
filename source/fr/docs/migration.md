title: Migration
---
## RSS

Tout d'abord, installez l'extension `hexo-migrator-rss`.

``` bash
$ npm install hexo-migrator-rss --save
```

Une fois que l'extention est installée, exécutez la commande suivante pour migrer tous les articles de votre RSS. La `source` peut être un chemin de fichier ou un URL.

``` bash
$ hexo migrate rss <source>
```

## Jekyll

Déplacez tous les fichiers dans le dossier `_posts` de Jekyll vers le dossier `source/_posts`.

Modifiez le paramètre `new_post_name` dans `_config.yml`:

``` yaml
new_post_name: :year-:month-:day-:title.md
```

## Octopress

Déplacez tous les fichier dans le dossier `source/_posts` d'Octopress vers le dossier `source/_posts`

Modifiez le paramètre `new_post_name` dans `_config.yml`:

``` yaml
new_post_name: :year-:month-:day-:title.md
```

## WordPress

Tout d'abord, installez l'extension `hexo-migrator-wordpress`.

``` bash
$ npm install hexo-migrator-wordpress --save
```

Exportez votre site Wordpress en allant dans "Outils" → "Exporter" → "Wordpress" dans le tableau de bord de Wordpress (voir [la page de support Wordpress](http://en.support.wordpress.com/export/) pour plus d'informations).

Maintenant, exécutez:

``` bash
$ hexo migrate wordpress <source>
```

La valeur de `source` doit être le chemin ou l'URL pointant vers le fichier d'exportation de Wordpress.

## Joomla

Tout d'abord, installez l'extension `hexo-migrator-joomla`.

```bash
$ npm install hexo-migrator-joomla --save
```

Exportez vos articles de Joomla en utilisant l'extension [J2XML](http://extensions.joomla.org/extensions/migration-a-conversion/data-import-a-export/12816?qh=YToxOntpOjA7czo1OiJqMnhtbCI7fQ%3D%3D) de Joomla.

Maintenant, exécutez:

```bash
$ hexo migrate joomla <source>
```

La valeur de `source` doit être le chemin ou l'URL pointant vers le fichier d'exportation de Joomla.
