---
title: Escritura
---

{% youtube AIqBubK6ZLc %}

Para crear un nuevo artículo o página, se puede ejecutar el siguiente comando:

```bash
$ hexo new [layout] <title>
```

`post` (artículo) es el `layout` (diseño) por defecto,  pero puedes indicar el tuyo propio. Puedes modificar el diseño por defecto editando la opción `default_layout` en `_config.yml`.

## Diseño

Hay tres diseños distintos en Hexo: `post` (artículo), `page` (página) y `draft` (borrador). Los ficheros creados por cada uno de ellos se guardan en rutas diferentes. Los nuevos artículos se guardan en el directorio `source/_posts`.

| Diseño  | Ruta             |
| ------- | ---------------- |
| `post`  | `source/_posts`  |
| `page`  | `source`         |
| `draft` | `source/_drafts` |

{% note tip Deshabilitando el diseño %}
Si no quieres que un artículo o página sea procesado mediante un tema visual, establece `layout: false` en el frontispicio. Consulta [esta sección](/docs/front-matter#Layout) para más detalles.
{% endnote %}

## Nombre de fichero

Hexo usa el título del artículo como nombre del fichero por defecto. Se puede editar la opción `new_post_name` en `_config.yml` para cambiar el nombre del fichero por defecto. Por ejemplo, `:year-:month-:day-:title.md` prefijará la fecha de creación al el título como nombre del fichero. Se pueden usar los siguientes marcadores:

| Marcador   | Descripción                                                                    |
| ---------- | ------------------------------------------------------------------------------ |
| `:title`   | Título del artículo (en minúsculas, con los espacios reemplazados por guiones) |
| `:year`    | Año de creación, p. e., `2015`                                                 |
| `:month`   | Mes de creación (con cero a la izquierda), p.e., `04`                          |
| `:i_month` | Mes de creación (sin cero a la izquierda), p. e., `4`                          |
| `:day`     | Día de creación (con cero a la izquierda), p. e., `07`                         |
| `:i_day`   | Día de creación (sin cero a la izquierda), p. e., `7`                          |

## Borradores

Anteriormente, hemos mencionado un diseño especial en Hexo: `draft`. Los artículos inicializados con este diseño se guardan en el directorio `source/_drafts`. Puedes usar el comando `publish` para trasladar los borradores al directorio `source/_posts`. `publish` funciona de manera similar al comando `new`.

```bash
$ hexo publish [layout] <title>
```

Los borradores no se muestran por defecto. Puedes incluir la opción `--draft` cuando se ejecuta Hexo o habilitar la opción `render_drafts` en `_config.yml` para renderizar los borradores.

## Moldes

Cuando se crea un artículo o página a partir de un diseño, Hexo lo construirá basándose en el fichero molde correspondiente del directorio `scaffolds`. Por ejemplo:

```bash
$ hexo new photo "My Gallery"
```

Cuando ejecutas este comando, Hexo intentará encontrar el fichero molde `photo.md` en el directorio `scaffolds` y construir la página basada en él. Estos son los marcadores disponibles en los ficheros molde:

| Marcador | Descripción                   |
| -------- | ----------------------------- |
| `layout` | Diseño                        |
| `title`  | Título                        |
| `date`   | Fecha de creación del fichero |

## Formatos aceptados

Hexo permite escribir artículos en cualquier formato, siempre que el complemento de renderizado correspondiente esté instalado.

Por ejemplo, Hexo viene con `hexo-renderer-marked` y `hexo-renderer-ejs` instalados por defecto, de forma que puedes escribir tus artículos en `markdown` o en `ejs`. Si tienes instalado `hexo-renderer-pug`, puedes escribir tus artículos con el lenguaje de plantillas pug.

Puedes renombrar tus artículos modificando la extensión de `.md` a `.ejs`y Hexo usará el complemento `hexo-renderer-ejs` para renderizar el fichero. El funcionamiento es equivalente para otros formatos.
