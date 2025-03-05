---
title: Migración
---

## RSS

Primero debes instalar el complemento `hexo-migrator-rss`.

```bash
$ npm install hexo-migrator-rss --save
```

Con el complemento instalado, ejecuta el siguiente comando para migrar todas las entradas desde RSS. `source` puede ser una ruta de fichero o una URL.

```bash
$ hexo migrate rss <source>
```

## Jekyll

Mueve todos los ficheros de Jekyll del directorio `_posts` al directorio `source/_posts`.

Modifica el ajuste `new_post_name` en `_config.yml`:

```yaml
new_post_name: :year-:month-:day-:title.md
```

## Octopress

Mueve todos los ficheros de Octopress del directorio `source/_posts` a `source/_posts`

Modifica el ajuste de `new_post_name` en `_config.yml`:

```yaml
new_post_name: :year-:month-:day-:title.md
```

## WordPress

Primero debes instalar el complemento `hexo-migrator-wordpress`.

```bash
$ npm install hexo-migrator-wordpress --save
```

Exporta tu sitio WordPress navegando a "Tools" → "Export" → "WordPress" en el panel de control de WordPress (consulta [la página de soporte de WordPress](http://en.support.wordpress.com/export/) para más detalles).

Ejecuta a continuación:

```bash
$ hexo migrate wordpress <source>
```

Donde `source` es la ruta de fichero o la URL al fichero de exportación de WordPress.

## Joomla

Primero debes instalar el complemento `hexo-migrator-joomla`.

```bash
$ npm install hexo-migrator-joomla --save
```

Exporta tus artículos de Joomla usando el componente [J2XML](http://extensions.joomla.org/extensions/migration-a-conversion/data-import-a-export/12816?qh=YToxOntpOjA7czo1OiJqMnhtbCI7fQ%3D%3D).

Ejecuta a continuación:

```bash
$ hexo migrate joomla <source>
```

Donde `source` es la ruta de fichero o la URL al fichero de exportación de Joomla.
