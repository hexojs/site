---
title: Configuración
---

Puedes modificar la configuración del sitio en `_config.yml` o en un [fichero alternativo de configuración](#Using-an-Alternate-Config).

### Sitio

| Ajuste        | Descripción                                                                                                                                                                                                                                         |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`       | El título de tu sitio web                                                                                                                                                                                                                           |
| `subtitle`    | El subtítulo de tu sitio web                                                                                                                                                                                                                        |
| `description` | La descripción del sitio web                                                                                                                                                                                                                        |
| `keywords`    | Las palabras clave de tu sitio web. Permite múltiples valores.                                                                                                                                                                                      |
| `author`      | Tu nombre                                                                                                                                                                                                                                           |
| `language`    | El idioma de tu sitio web. Usa un [código de 2 letras ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) u opcionalmente [sus variantes](/docs/internationalization). El valor por defecto es `en`.                                  |
| `timezone`    | El huso horario de tu sitio. Hexo usa el ajuste de tu ordenador por defecto. Puedes encontrar el listado de husos horarios [aquí](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). Por ejemplo, `America/New_York`, `Japan`, y `UTC`. |

### URL

| Ajuste                       | Descripción                                                                                                                   | Valor por defecto           |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| `url`                        | La URL de tu sitio, debe comenzar por `http://` o `https://`                                                                  |                             |
| `root`                       | El directorio raíz de tu sitio                                                                                                | `url's pathname`            |
| `permalink`                  | El formato del [enlace permanente](permalinks.html) de los artículos                                                          | `:year/:month/:day/:title/` |
| `permalink_defaults`         | Valores por defecto de cada segmento del enlace permanente                                                                    |                             |
| `pretty_urls`                | Reescritura de las variables del [`permalink`](permalinks.html) para embellecer las URL                                       |                             |
| `pretty_urls.trailing_index` | Mostrar `index.html` al final en la URL, para ocultarlo establece el ajuste a `false`                                         | `true`                      |
| `pretty_urls.trailing_html`  | Mostrar `.html` al final en la URL, establece `false` para ocultarlo del final de la URL (_no afecta al ajuste `index.html`_) | `true`                      |

{% note info Sitio web en subdirectorio %}
Si tu sitio web se aloja en un subdirectorio (tal como `http://example.org/blog`) asigna `url` a `http://example.org/blog` y asigna `root` a `/blog/`.
{% endnote %}

Ejemplos:

```yaml
# e.g. page.permalink is http://example.com/foo/bar/index.html
pretty_urls:
  trailing_index: false
# becomes http://example.com/foo/bar/
```

### Directorio

| Ajuste         | Descripción                                                                                                                                                                            | Valor por defecto |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `source_dir`   | Directorio fuente. Donde se guarda tu contenido                                                                                                                                        | `source`          |
| `public_dir`   | Directorio público. Donde se generará el contenido estático del sitio                                                                                                                  | `public`          |
| `tag_dir`      | Directorio de etiquetas (clasificatorias)                                                                                                                                              | `tags`            |
| `archive_dir`  | Directorio de históricos                                                                                                                                                               | `archives`        |
| `category_dir` | Directorio de categorías                                                                                                                                                               | `categories`      |
| `code_dir`     | Incluye directorio de código (subdirectorio de `source_dir`)                                                                                                                           | `downloads/code`  |
| `i18n_dir`     | Directorio i18n o internacionalización                                                                                                                                                 | `:lang`           |
| `skip_render`  | Rutas copiadas a `public` de forma directa, sin renderizado. Se pueden usar [expresiones glob](https://github.com/micromatch/micromatch#extended-globbing) para coincidencia de rutas. |                   |

Ejemplos:

```yaml
skip_render: "mypage/**/*"
# will output `source/mypage/index.html` and `source/mypage/code.js` without altering them.

## This also can be used to exclude posts,
skip_render: "_posts/test-post.md"
# will ignore the `source/_posts/test-post.md`.
```

### Escritura

| Ajuste                  | Descripción                                                                                                                                      | Valor por defecto |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| `new_post_name`         | El formato de nombre de ficheros para nuevos artículos                                                                                           | `:title.md`       |
| `default_layout`        | Diseño por defecto                                                                                                                               | `post`            |
| `titlecase`             | ¿Transformar títulos con capitalización de títulos?                                                                                              | `false`           |
| `external_link`         | ¿Abrir enlaces externos en nuevas pestañas?                                                                                                      |                   |
| `external_link.enable`  | ¿Abrir enlaces externos en nuevas pestañas?                                                                                                      | `true`            |
| `external_link.field`   | Aplicar al sitio completo con `sitio` o solo artículos con `post`                                                                                | `site`            |
| `external_link.exclude` | Excluir el nombre del host. Especifica el subdominio cuando sea aplicable, incluyendo `www`                                                      | `[]`              |
| `filename_case`         | Transforma nombres de ficheros a minúscula con `1`; mayúsculas con`2`                                                                            | `0`               |
| `render_drafts`         | ¿Mostrar borradores?                                                                                                                             | `false`           |
| `post_asset_folder`     | ¿Habilita el [directorio de recursos](asset-folders.html)?                                                                                       | `false`           |
| `relative_link`         | ¿Crear los enlaces relativos al directorio raíz?                                                                                                 | `false`           |
| `future`                | ¿Muestra artículos futuros?                                                                                                                      | `true`            |
| `syntax_highlighter`    | Ajustes del resaltado de sintaxis, consulta la sección [resaltado de sintaxis](/docs/syntax-highlight) para guía de uso                          | `highlight.js`    |
| `highlight`             | Ajustes del resaltado de sintaxis de bloques de código, consulta la sección [Highlight.js](/docs/syntax-highlight#Highlight-js) para guía de uso |                   |
| `prismjs`               | Ajustes del resaltado de sintaxis de bloques de código, consulta la sección [PrismJS](/docs/syntax-highlight#PrismJS) para guía de uso           |                   |

### Configuración de página de inicio

| Ajuste                           | Descripción                                                                                                      | Valor por defecto |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------- |
| `index_generator`                | Genera un histórico de artículos mediante [hexo-generator-index](https://github.com/hexojs/hexo-generator-index) |                   |
| `index_generator.path`           | Ruta raíz para la página de inicio de tu blog                                                                    | `''`              |
| `index_generator.per_page`       | Artículos mostrados por página.                                                                                  | `10`              |
| `index_generator.order_by`       | Orden de artículos. Ordenación descendente por fecha (de más nuevos a más antiguos) por defecto.                 | `-date`           |
| `index_generator.pagination_dir` | Formato de URL, consulta el ajuste de [paginación](#Pagination) más abajo                                        | `page`            |

### Categoría y etiqueta

| Ajuste             | Descripción                   | Valor por defecto |
| ------------------ | ----------------------------- | ----------------- |
| `default_category` | Categoría por defecto         | `uncategorized`   |
| `category_map`     | Sobreescribe *category slugs* |                   |
| `tag_map`          | Sobreescribe *tag slugs*      |                   |

Ejemplos:

```yaml
category_map:
  "yesterday's thoughts": yesterdays-thoughts
  "C++": c-plus-plus
```

### Formato fecha / hora

Hexo usa [Moment.js](http://momentjs.com/) para el procesamiento de las fechas.

| Ajuste           | Descripción                                                                                                  | Valor por defecto |
| ---------------- | ------------------------------------------------------------------------------------------------------------ | ----------------- |
| `date_format`    | Formato de fecha                                                                                             | `YYYY-MM-DD`      |
| `time_format`    | Formato de hora                                                                                              | `HH:mm:ss`        |
| `updated_option` | El valor de actualización [`updated`](/docs/variables#Page-Variables) cuando no se indica en el frontispicio | `mtime`           |

{% note info updated_option %}
`updated_option` controla el valor de `updated` cuando no se indica uno en el frontispicio:

- `mtime`: Usa la fecha de modificación del fichero como `updated`. Ha sido el comportamiento por defecto de Hexo desde la versión 3.0.0
- `date`: Usa `date` como `updated`. En general, usado junto a flujos de trabajo con Git cuando la modificación de fechas puede ser diferente.
- `empty`: Simplemente ignora `updated` cuando no se especifica. Puede que no sea compatible con la mayoría de complementos y temas.

`use_date_for_updated` fue eliminado en v7.0.0+. En su lugar, usa `updated_option: 'date'`.
{% endnote %}

### Paginación

| Ajustes          | Descripción                                                                   | Valor por defecto |
| ---------------- | ----------------------------------------------------------------------------- | ----------------- |
| `per_page`       | Número de artículos mostrados para cada página. `0` deshabilita la paginación | `10`              |
| `pagination_dir` | Formato URL                                                                   | `page`            |

Ejemplos:

```yaml
pagination_dir: 'page'
# http://example.com/page/2

pagination_dir: 'awesome-page'
# http://example.com/awesome-page/2
```

### Extensiones

| Ajustes          | Descripción                                                                                                                                               |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `theme`          | Nombre del tema. `false` deshabilita los temas                                                                                                            |
| `theme_config`   | Configuración de tema. Incluye cualquier ajuste de tema bajo esta clave para sobreescribir valores por defecto del tema.                                  |
| `deploy`         | Ajustes de despliegue                                                                                                                                     |
| `meta_generator` | Generador de etiqueta [meta](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#Attributes). `false` deshabilita la inyección de la etiqueta. |

### Inclusión o exclusión de ficheros y directorios

Usa las siguientes opciones para procesar o ignorar explícitamente ciertos ficheros/directorios. Permite el uso [ expresiones glob](https://github.com/micromatch/micromatch#extended-globbing) para la coincidencia de rutas.

Las opciones `include` y `exclude` solo se aplican al directorio `source/`, mientras que la opción `ignore` afecta a todos los directorios.

| Ajuste    | Descripción                                                                                                                   |
| --------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `include` | Incluye ficheros ocultos (incluyendo ficheros/directorios con nombres que comienzan con un guion bajo, con una excepción\*) |
| `exclude` | Excluye ficheros/directorios                                                                                                  |
| `ignore`  | Ignora ficheros/directorios                                                                                                   |

Ejemplos:

```yaml
# Include/Exclude Files/Folders
include:
  - ".nojekyll"
  # Include 'source/css/_typing.css'.
  - "css/_typing.css"
  # Include any file in 'source/_css/'.
  - "_css/*"
  # Include any file and subfolder in 'source/_css/'.
  - "_css/**/*"

exclude:
  # Exclude 'source/js/test.js'.
  - "js/test.js"
  # Exclude any file in 'source/js/'.
  - "js/*"
  # Exclude any file and subfolder in 'source/js/'.
  - "js/**/*"
  # Exclude any file with filename that starts with 'test' in 'source/js/'.
  - "js/test*"
  # Exclude any file with filename that starts with 'test' in 'source/js/' and its subfolders.
  - "js/**/test*"
  # Do not use this to exclude posts in the 'source/_posts/'.
  # Usa skip_render para esto. O antepone un guion bajo al nombre del fichero
  # - "_posts/hello-world.md" # No funciona

ignore:
  # Ignora cualquier directorio nombrado 'foo'.
  - "**/foo"
  # Ignora el directorio 'foo' en 'themes/' únicamente.
  - "**/themes/*/foo"
  # Igual que arriba, pero aplicado a los subdirectorios de 'themes/'.
  - "**/themes/**/foo"
```

Cada valor en la lista debe ser encerrado con comillas simples/dobles.

`include:` y `exclude:` no se aplican al directorio `themes/`. O bien usa `ignore:` o alternativamente, antepone un guion bajo al fichero/directorio a excluir.

\* El directorio `source/_posts` es la excepción más notable, pero cualquier fichero o carpeta cuyo nombre comience con un guion bajo y este bajo este directorio seguirá siendo ignorado. No se recomienda usar la regla `include:` en ese directorio.

### Usando una configuración alternativa

La ruta a un fichero de configuración personalizado puede ser especificada incluyendo la opción `--config` a los comandos de `hexo` con una ruta a un fichero de configuración alternativo, en formato YAML o JSON, o una lista, separada por comas (sin espacios), de múltiples ficheros YAML o JSON.

```bash
# use 'custom.yml' in place of '_config.yml'
$ hexo server --config custom.yml

# use 'custom.yml' & 'custom2.json', prioritizing 'custom2.json'
$ hexo server --config custom.yml,custom2.json
```

Al usar múltiples ficheros de configuración, estos combinan los ajustes en `_multiconfig.yml`. Los valores posteriores tienen precedencia. Funciona con cualquier número de ficheros JSON y YAML con objetos de profundidad arbitraria. Ten en cuenta que **los espacios no están permitidos en la lista**

Siguiendo con el ejemplo superior, si `foo: bar` se encuentra en `custom.yml`, pero `"foo": "dinosaur"` está en `custom2.json`, `_multiconfig.yml` contendrá `foo: dinosaur`.

### Configuración de tema alternativo

Los temas de Hexo son proyectos independientes, con ficheros `_config.yml` separados.

En vez de bifurcar un tema, y mantener una versión personalizada con tus ajustes, lo puedes configurar desde otro sitio:

**desde `theme_config` en el fichero principal de configuración del sitio**

> Permitido desde Hexo 2.8.2

```yml
# _config.yml
theme: "my-theme"
theme_config:
  bio: "My awesome bio"
  foo:
    bar: "a"
```

```yml
# themes/my-theme/_config.yml
bio: "Some generic bio"
logo: "a-cool-image.png"
  foo:
    baz: 'b'
```

Resultando en la siguiente configuración de tema:

```json
{
  "bio": "My awesome bio",
  "logo": "a-cool-image.png",
  "foo": {
    "bar": "a",
    "baz": "b"
  }
}
```

**desde un fichero específico `_config.[theme].yml`**

> Permitido desde Hexo 5.0.0

El fichero debería colococarse en el directorio del sitio, tanto `yml` como `json` son formatos válidos. `theme` en `_config.yml` debe ser configurado para que Hexo lea `_config.[theme].yml`

```yml
# _config.yml
theme: "my-theme"
```

```yml
# _config.my-theme.yml
bio: "My awesome bio"
foo:
  bar: "a"
```

```yml
# themes/my-theme/_config.yml
bio: "Some generic bio"
logo: "a-cool-image.png"
  foo:
    baz: 'b'
```

Resultando en la configuración del tema:

```json
{
  "bio": "My awesome bio",
  "logo": "a-cool-image.png",
  "foo": {
    "bar": "a",
    "baz": "b"
  }
}
```

{% note %}
Recomendamos enérgicamente que guardes la configuración de tu tema en un único lugar. Pero en caso que guardes la configuración del tema separada, debes conocer la prioridad de cada forma de configuración: el ajuste `theme_config` dentro del fichero de configuración principal del sitio tiene la más alta prioridad durante la combinacion, después el fichero de configuración dedicado al tema. El fichero `_config.yml` almacenado en el directorio del tema tiene la prioridad más baja.
{% endnote %}
