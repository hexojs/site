---
title: Variables
---

{% youtube T9oAax-IRw0 %}

### Variables globales

| Variable | Descripción                                                                                  | Tipo                                       |
| -------- | -------------------------------------------------------------------------------------------- | ------------------------------------------ |
| `site`   | Información genérica del sitio.                                                              | `object`; consulta [Variables de sitios][] |
| `page`   | Información específica de página y variables personalizadas establecidas en el frontispicio. | `object`; consulta [Variables de página][] |
| `config` | Configuración del sitio.                                                                     | `object` (fichero \_config del sitio)    |
| `theme`  | Configuración del tema. Hereda de la configuración del sitio.                                | `object` (fichero \_config del tema)     |
| `path`   | Ruta de la página actual                                                                     | `string`                                   |
| `url`    | URL completa de la página actual                                                             | `string`                                   |
| `env`    | Variables de entorno                                                                         | ???                                        |

{% note warn %}
Lodash ha sido eliminado de las variables globales desde 5.0.0. [You-Dont-Need-Lodash-Underscore](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore) puede ser de utilidad para realizar la migración.
{% endnote %}

### Variables de sitio

| Variable          | Descripción          | Tipo                   |
| ----------------- | -------------------- | ---------------------- |
| `site.posts`      | Todos los artículos  | Objeto [Query][queryo] |
| `site.pages`      | Todas las páginas    | Objeto [Query][queryo] |
| `site.categories` | Todas las categorías | [Query][queryo] object |
| `site.tags`       | Todas las etiquetas  | [Query][queryo] object |

### Variables de página

**Entrada (`page`)**

| Variable           | Descripción                                                                             | Tipo                 |
| ------------------ | --------------------------------------------------------------------------------------- | -------------------- |
| `page.title`       | Título de la entrada                                                                    | `string`             |
| `page.date`        | Fecha de creación de la entrada                                                         | Objeto [Moment.js][] |
| `page.updated`     | Fecha de la última actualización de la entrada                                          | Objeto [Moment.js][] |
| `page.comments`    | Comentarios habilitados o no                                                            | `boolean`            |
| `page.layout`      | Nombre del diseño                                                                       | `string`             |
| `page.content`     | El contenido procesado de la entrada                                                    | `string`             |
| `page.excerpt`     | Fragmento de la entrada                                                                 | `string`             |
| `page.more`        | Contenido del artículo, excepto el fragmento de la entrada                              | `string`             |
| `page.source`      | La ruta al fichero de código fuente                                                     | `string`             |
| `page.full_source` | La ruta completa al fichero de código fuente                                            | `string`             |
| `page.path`        | URL del artículo sin la raíz URL. En el tema se usa habitualmente `url_for(page.path)`. | `string`             |
| `page.permalink`   | URL completa (codificada) de la entrada                                                 | `string`             |
| `page.prev`        | La entrada previa, `null` si es la primera entrada                                      | ???                  |
| `page.next`        | La entrada siguiente, `null` si es la última                                            | ???                  |
| `page.raw`         | El contenido sin procesar de la entrada                                                 | ???                  |
| `page.photos`      | Las fotos de la entrada (usado en artículos de tipo galería)                            | array of ???         |
| `page.link`        | El enlace externo de la entrada (usado en enlaces de artículos)                         | `string`             |

**Artículo (`post`):** Igual que `page`, el diseño incluye las siguientes variables.

| Variable          | Descripción                                | Tipo           |
| ----------------- | ------------------------------------------ | -------------- |
| `page.published`  | Verdadero si el artículo no es un borrador | `boolean`      |
| `page.categories` | Todas las categorías del artículo          | `array` of ??? |
| `page.tags`       | Todas las etiquetas del artículo           | `array` of ??? |

**Inicio (`index`)**

| Variable           | Descripción                                                                                          | Tipo     |
| ------------------ | ---------------------------------------------------------------------------------------------------- | -------- |
| `page.per_page`    | Artículos mostrados por página                                                                       | `number` |
| `page.total`       | Número total de páginas                                                                              | `number` |
| `page.current`     | Número de la página actual                                                                           | `number` |
| `page.current_url` | URL de la página actual                                                                              | `string` |
| `page.posts`       | URL de la página actual ([Data Model](https://hexojs.github.io/warehouse/))                          | `object` |
| `page.prev`        | Número de la página anterior. `0` si la página actual es la primera.                                 | `number` |
| `page.prev_link`   | URL de la página anterior. `''` si la página actual es la primera.                                   | `string` |
| `page.next`        | Número de la página siguiente. `0` si la página siguiente es la última.                              | `number` |
| `page.next_link`   | URL de la página siguiente. `''` si la página siguiente es la última.                                | `string` |
| `page.path`        | URL de la página actual sin la raíz de la URL. En el tema se usa habitualmente `url_for(page.path)`. | `string` |

**Histórico (`archive`):** Igual que el diseño `index` pero incluyendo las siguientes variables.

| Variable       | Descripción                       | Tipo      |
| -------------- | --------------------------------- | --------- |
| `page.archive` | Siempre verdadero                 | `boolean` |
| `page.year`    | Año del histórico (4 dígitos)     | `number`  |
| `page.month`   | Mes numérico del histórico (1-12) | `number`  |

**Categoría (`category`):** Igual que el diseño `index` pero incluyendo las siguientes variables.

| Variable        | Descripción            | Tipo     |
| --------------- | ---------------------- | -------- |
| `page.category` | Nombre de la categoría | `string` |

**Etiqueta (`tag`):** Igual que el diseño `index` pero incluyendo las siguientes variables.

| Variable   | Descripción           | Tipo     |
| ---------- | --------------------- | -------- |
| `page.tag` | Nombre de la etiqueta | `string` |

[queryo]: https://hexojs.github.io/warehouse/classes/query.default.html

[Moment.js]: http://momentjs.com/
[Variables de sitios]: #Site-Variables
[Variables de página]: #Page-Variables
