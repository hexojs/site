---
title: Front-matter
---

{% youtube pfD6FCZdW4Q %}

El frontispicio (*front-matter* en inglés) es un bloque de YAML o JSON al inicio del fichero que se usa para configurar opciones para el contenido posterior. El frontispicio se inserta entre dos tríos de guiones si se usa YAML, o finaliza con un triplete de puntos y comas si se usa JSON.

**YAML**

```yaml
---
title: Hello World
date: 2013/7/13 20:46:25
---
```

**JSON**

```json
"title": "Hello World",
"date": "2013/7/13 20:46:25"
;;;
```

### Ajustes y valores por defecto

| Ajuste            | Descripción                                                                                                                              | Valor por defecto                                                                                   |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `layout`          | Diseño                                                                                                                                   | [`config.default_layout`](/docs/configuration#Writing)                                              |
| `title`           | Título                                                                                                                                   | Nombre de fichero (artículos exclusivamente)                                                        |
| `date`            | Fecha de publicación                                                                                                                     | Fecha de creación del fichero                                                                       |
| `updated`         | Fecha de modificación                                                                                                                    | Fecha de modificación del fichero                                                                   |
| `comments`        | Habilita la función de comentarios en el artículo                                                                                        | `true`                                                                                              |
| `tags`            | *Tags* o etiquetas (no disponible para páginas)                                                                                          |                                                                                                     |
| `categories`      | Categorías (no disponible para páginas)                                                                                                  |                                                                                                     |
| `permalink`       | Sobreescribe el valor por defecto del enlace permanente (*permalink*) del artículo. El enlace permanente debe terminar con `/` o `.html` | `null`                                                                                              |
| `excerpt`         | Fragmento de la página en texto plano. Usa [este complemento](/docs/tag-plugins#Post-Excerpt) para formatear el texto                    |                                                                                                     |
| `disableNunjucks` | Deshabilita el renderizado de etiquetas Nunjucks `{{ }}`/`{% %}` y [complemento de etiquetas](/docs/tag-plugins) cuando se habilita      | false                                                                                               |
| `lang`            | Establece el idioma para ignorar la [autodetección](/docs/internationalization#Path)                                                     | Heredado desde `_config.yml`                                                                        |
| `published`       | Determina si el artículo debería ser publicado                                                                                           | Para artículos en `_posts`, es `true` (verdadero), y para artículos en `_draft`, es `false` (falso) |

#### Diseño

El diseño por defecto es `post`, en concordancia con el valor de la opción [`default_layout`](/docs/configuration#Writing) en `_config.yml`. Cuando el diseño está deshabilitado (`layout: false`) en un artículo, no será procesado con un tema. Sin embargo, será renderizada por el renderizador disponible: si un artículo se escribe en Markdown y hay un renderizador Markdown (como el que viene por defecto instalado [hexo-renderer-marked](https://github.com/hexojs/hexo-renderer-marked)) este se renderizará a HTML.

Las etiquetas [de los complementos de etiquetas](/docs/tag-plugins) son siempre procesadas independientemente del procesado del diseño, excepto si se deshabilita con el ajuste `disableNunjucks` o el [renderizador](/api/renderer#Disable-Nunjucks-tags).

#### Categorías y etiquetas

Solo los artículos aceptan categorías y etiquetas. Las categorías se aplican al artículo en orden, permitiendo la construcción de jerarquías de clasificación y sub-clasificación. Las etiquetas, en cambio, son definidas en un único nivel jerárquico, por lo que su orden es irrelevante.

**Ejemplo**

```yaml
categories:
  - Sports
  - Baseball
tags:
  - Injury
  - Fight
  - Shocking
```

Si se quiere aplicar múltiples jerarquías de categorías, se puede crear una lista de nombres en vez de un nombre único. Si Hexo ve varias categorías definidas de esta forma en un artículo, tratará cada categoría para el artículo en jerarquías propias independientes.

**Ejemplo**

```yaml
categories:
  - [Sports, Baseball]
  - [MLB, American League, Boston Red Sox]
  - [MLB, American League, New York Yankees]
  - Rivalries
```
