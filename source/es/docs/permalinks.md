---
title: Enlaces permanentes
---

Se puede establecer el enlace permanente (*permalink* en inglés) en tu sitio web en `_config.yml` o en el frontispicio de cada artículo o página.

### Variables

Además de las siguientes variables, se puede usar cualquier atributo en el enlace parmamente excepto el de ruta, `:path`, y el propio `:permalink`.

| Variable      | Descripción                                                                                        |
| ------------- | -------------------------------------------------------------------------------------------------- |
| `:year`       | Año de publicación del artículo con 4 dígitos                                                      |
| `:month`      | Mes de publicación del artículo con 2 dígitos                                                      |
| `:i_month`    | Mes de publicación del artículo sin ceros a la izquierda                                           |
| `:day`        | Día de publicación del artículo con 2 dígitos                                                      |
| `:i_day`      | Día de publicación del artículo sin ceros a la izquierda                                           |
| `:hour`       | Hora de publicación del artículo con 2 dígitos                                                     |
| `:minute`     | Minuto de publicación del artículo con 2 dígitos                                                   |
| `:second`     | Segundo de publicación del artículo con 2 dígitos                                                  |
| `:timestamp`  | Timestamp of post's published [date](./front-matter#Settings-Their-Default-Values)                 |
| `:title`      | Nombre del fichero (relativo al directorio "source/\_posts/")                                    |
| `:name`       | Nombre del fichero                                                                                 |
| `:post_title` | Título del artículo                                                                                |
| `:id`         | ID artículo (_no persistente entre [reinicios de cache](/docs/commands#clean)_)                    |
| `:category`   | Categorías. Si el artículo no tiene categoría definida, usará el valor de `default_category`.      |
| `:hash`       | Código hash SHA1 del nombre del fichero (igual que `:title`) y la fecha (12 dígitos hexadecimales) |

Se puede establecer el valor por defecto de cada variable en el enlace permanente a través del ajuste `permalink_defaults`:

```yaml
permalink_defaults:
  lang: en
```

### Ejemplos

```yaml source/_posts/hello-world.md
title: Hello World
date: 2013-07-14 17:01:34
categories:
  - foo
  - bar
```

| Ajuste                          | Resultado                   |
| ------------------------------- | --------------------------- |
| `:year/:month/:day/:title/`     | 2013/07/14/hello-world/     |
| `:year-:month-:day-:title.html` | 2013-07-14-hello-world.html |
| `:category/:title/`             | foo/bar/hello-world/        |
| `:title-:hash/`                 | hello-world-a2c8ac003b43/   |

```yaml source/_posts/lorem/hello-world.md
title: Hello World
date: 2013-07-14 17:01:34
categories:
  - foo
  - bar
```

| Ajuste                      | Resultado                     |
| --------------------------- | ----------------------------- |
| `:year/:month/:day/:title/` | 2013/07/14/lorem/hello-world/ |
| `:year/:month/:day/:name/`  | 2013/07/14/hello-world/       |

### Soporte de múltiples idiomas

Para crear un sitio múltiples idiomas, puedes modificar los ajustes `new_post_name` y `permalink` de la siguiente manera:

```yaml
new_post_name: :lang/:title.md
permalink: :lang/:title/
```

Cuando se cree un nuevo artículo, se guardará a:

```bash
$ hexo new "Hello World" --lang tw
# => source/_posts/tw/Hello-World.md
```

y la URL será:

```plain
http://localhost:4000/tw/hello-world/
```
