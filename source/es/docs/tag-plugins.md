---
title: Complementos de etiquetas
---

Los complementos de etiquetas son diferentes de las etiquetas de artículos. Estos se importan de Octopress y ofrecen una forma veloz de incluir contenido específico a los artículos.

Aunque puedes escribir los artículos en cualquier formato, los complementos de etiquetas estarán siempre disponibles y su sintaxis no varía.

{% youtube I07XMi7MHd4 %}

_Los complementos de etiquetas no deben ser encerradas dentro de sintaxis de Markdown, p. ej. `[]({% post_path lorem-ipsum %})` no está permitido._

## Cita en bloque

Ideal para incluir citas en tus artículos, indicando opcionalmente autor, fuente y título de la referencia.

**Alias:** quote

```
{% blockquote [author[, source]] [link] [source_link_title] %}
content
{% endblockquote %}
```

### Ejemplos

**Sin argumentos. Cita simple.**

```
{% blockquote %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit lacus ut purus iaculis feugiat. Sed nec tempor elit, quis aliquam neque. Curabitur sed diam eget dolor fermentum semper at eu lorem.
{% endblockquote %}
```

{% blockquote %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit lacus ut purus iaculis feugiat. Sed nec tempor elit, quis aliquam neque. Curabitur sed diam eget dolor fermentum semper at eu lorem.
{% endblockquote %}

**Cita de un libro**

```
{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}
```

{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}

**Cita de Twitter**

```
{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
NEW: DevDocs now comes with syntax highlighting. http://devdocs.io
{% endblockquote %}
```

{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
NEW: DevDocs now comes with syntax highlighting. http://devdocs.io
{% endblockquote %}

**Cita de un artículo en la web**

```
{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}
```

{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}

## Bloque de código

Esta funcionalidad permite incluir fragmentos de código en el artículo.

**Alias:** code

```
{% codeblock [title] [lang:language] [url] [link text] [additional options] %}
code snippet
{% endcodeblock %}
```

Incluye opciones de adicionales con el formato `option:value`, p.ej. `line_number:false first_line:5`.

| Opciones extra   | Descripción                                                                                                                                                                   | Valores por defecto |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| `line_number`    | Muestra la numeración de líneas                                                                                                                                               | `true`              |
| `line_threshold` | Solo muestra la numeración de la línea en caso de que estén por encima del límite indicado.                                                                                   | `0`                 |
| `highlight`      | Activa el resaltado de sintaxis                                                                                                                                               | `true`              |
| `first_line`     | Especifica el número inicial de las líneas.                                                                                                                                   | `1`                 |
| `mark`           | Resalta una o varias líneas de forma específica, cada una separada por comas. Se pueden indicar rangos<br>Ejemplo: `mark:1,4-7,10` marcará las líneas 1, de 4 a 7 y 10. |                     |
| `wrap`           | Introduce el bloque de código en una tabla [`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)                                                 | `true`              |

### Ejemplos

**Un bloque de código simple**

```
{% codeblock %}
alert('Hello World!');
{% endcodeblock %}
```

{% codeblock %}
alert('Hello World!');
{% endcodeblock %}

**Indicando el lenguaje**

```
{% codeblock lang:objc %}
[rectangle setX: 10 y: 10 width: 20 height: 20];
{% endcodeblock %}
```

{% codeblock lang:objc %}
[rectangle setX: 10 y: 10 width: 20 height: 20];
{% endcodeblock %}

**Incluir un título al bloque de código**

```
{% codeblock Array.map %}
array.map(callback[, thisArg])
{% endcodeblock %}
```

{% codeblock Array.map %}
array.map(callback[, thisArg])
{% endcodeblock %}

**Incluir un título y una URL**

```
{% codeblock _.compact http://underscorejs.org/#compact Underscore.js %}
_.compact([0, 1, false, 2, '', 3]);
=> [1, 2, 3]
{% endcodeblock %}
```

{% codeblock _.compact http://underscorejs.org/#compact Underscore.js %}
\_.compact([0, 1, false, 2, '', 3]); => [1, 2, 3]
{% endcodeblock %}

## Bloque de código con triple tilde grave

Idéntico a un bloque de código del complemento de etiquetas, pero usando un par de triples tildes graves para indicar el inicio y fin del bloque de código.

{% raw %}
&#96`[language] [title] [url] [link text]
code snippet
&#96;`
{% endraw %}

## Cita destacada

Para incluir una cita destacada:

```
{% pullquote [class] %}
content
{% endpullquote %}
```

## jsFiddle (eliminado en `v7.0.0`)

{% note warn %}
Esta etiqueta fue eliminada en Hexo 7.0.0. Ofrecemos un complemento para retrocompatibilidad con tus artículos antiguos [hexo-tag-embed](https://github.com/hexojs/hexo-tag-embed).
{% endnote %}

Para incrustar un fragmento jsFiddle:

```
{% jsfiddle shorttag [tabs] [skin] [width] [height] %}
```

## Gist (eliminado en `v7.0.0`)

{% note warn %}
Debes utilizar [hexo-tag-embed](https://github.com/hexojs/hexo-tag-embed) en caso que uses `v7.0.0+`.
{% endnote %}

Para incrustar un fragmento Gist:

```
{% gist gist_id [filename] %}
```

## iframe

Para incrustar un marco iframe

```
{% iframe url [width] [height] %}
```

## Imagen

Inserta una imagen con un tamaño especificado

```
{% img [class names] /path/to/image [width] [height] '"title text" "alt text"' %}
```

## Enlace

Inserta un enlace con el atributo `target="_blank"` que lo abre en una ventana nueva.

```
{% link text url [external] [title] %}
```

## Inclusión de código

Inserta fragmentos de código en el directorio `source/downloads/code`. La ubicación de este directorio se puede especificar a través del ajuste `code_dir` en la configuración.

```
{% include_code [title] [lang:language] [from:line] [to:line] path/to/file %}
```

### Ejemplos

**Incrusta el contenido del fichero completo de test.js**

```
{% include_code lang:javascript test.js %}
```

**Incrusta solo la línea 3**

```
{% include_code lang:javascript from:3 to:3 test.js %}
```

**Incrusta desde la línea 5 a la 8**

```
{% include_code lang:javascript from:5 to:8 test.js %}
```

**Incrusta desde la línea 5 al final del fichero**

```
{% include_code lang:javascript from:5 test.js %}
```

**Incrusta desde la línea 1 a la línea 8**

```
{% include_code lang:javascript to:8 test.js %}
```

## YouTube (eliminado en `v7.0.0`)

{% note warn %}
Debes utilizar [hexo-tag-embed](https://github.com/hexojs/hexo-tag-embed) en caso de usar `v7.0.0+`.
{% endnote %}

Inserta un vídeo de YouTube

```
{% youtube video_id [type] [cookie] %}
```

### Ejemplos

**Incrusta un vídeo**

```
{% youtube lJIrF4YjHfQ %}
```

**Incrusta una lista de reproducción**

```
{% youtube PL9hW1uS6HUfscJ9DHkOSoOX45MjXduUxo 'playlist' %}
```

**Activa el modo mejorado de privacidad**

La cookie de YouTube no se usa en este modo.

```
{% youtube lJIrF4YjHfQ false %}
{% youtube PL9hW1uS6HUfscJ9DHkOSoOX45MjXduUxo 'playlist' false %}
```

## Vimeo (eliminado en `v7.0.0`)

{% note warn %}
Debes utilizar [hexo-tag-embed](https://github.com/hexojs/hexo-tag-embed) en caso de usar `v7.0.0+`.
{% endnote %}

Inserta un vídeo responsivo o dimensiones específicas de Vimeo.

```
{% vimeo video_id [width] [height] %}
```

## Incluir artículos

Incluye enlaces a otros artículos.

```
{% post_path filename %}
{% post_link filename [title] [escape] %}
```

Se pueden ignorar la información de enlaces permanentes y directorios, como idiomas y fechas, cuando se usa esta etiqueta.

Por ejemplo:`{% raw %}{% post_link how-to-bake-a-cake %}{% endraw %}`.

Esto funcionará siempre que el nombre del fichero del artículo sea `how-to-bake-a-cake.md`, incluso si el artículo está guardado en `source/posts/2015-02-my-family-holiday` y el enlace permanente es `2018/en/how-to-bake-a-cake`.

Se puede personalizar el texto a mostrar como título del artículo.

El título del artículo y el texto personalizado son transliterados por defecto. Se puede deshabilitar la transliteración de símbolos o escapado mediante el ajuste `escape`.

Por ejemplo:

**Mostrar el título del artículo.**

`{% raw %}{% post_link hexo-3-8-released %}{% endraw %}`

{% post_link hexo-3-8-released %}

**Mostrar texto personalizado.**

`{% raw %}{% post_link hexo-3-8-released 'Link to a post' %}{% endraw %}`

{% post_link hexo-3-8-released 'Link to a post' %}

**Título transliterado.**

```
{% post_link hexo-4-released 'How to use <b> tag in title' %}
```
{% post_link hexo-4-released 'How to use <b> tag in title' %}

**Sin transliteración del título.**

```
{% post_link hexo-4-released '<b>bold</b> custom title' false %}
```

{% post_link hexo-4-released '<b>bold</b> custom title' false %}

## Incluir recursos

Incluye recursos utilizados por el artículo, para almacenar conjuntamente con la opción [`post_asset_folder`](/docs/asset-folders).

```
{% asset_path filename %}
{% asset_img [class names] slug [width] [height] [title text [alt text]] %}
{% asset_link filename [title] [escape] %}
```

### Incrustar imagen

_hexo-renderer-marked 3.1.0+ puede (opcionalmente) inferir la ruta de una imagen del artículo automáticamente, consulta [esta sección](/docs/asset-folders#Embedding-an-image-using-markdown) para ver como activar esta función._

"foo.jpg" está guardada en `http://example.com/2020/01/02/hello/foo.jpg`.

**Por defecto (sin opciones)**

`{% asset_img foo.jpg %}`

```html
<img src="/2020/01/02/hello/foo.jpg" />
```

**Clase personalizada**

`{% asset_img post-image foo.jpg %}`

```html
<img src="/2020/01/02/hello/foo.jpg" class="post-image" />
```

**Tamaño a mostrar**

`{% asset_img foo.jpg 500 400 %}`

```html
<img src="/2020/01/02/hello/foo.jpg" width="500" height="400" />
```

**Título y alternativa**

`{% asset_img foo.jpg "lorem ipsum'dolor'" %}`

```html
<img src="/2020/01/02/hello/foo.jpg" title="lorem ipsum" alt="dolor" />
```

## URL

### url_for (7.0.0+)

Devuelve una url con la ruta raíz prefijada. La salida se codifica automáticamente.

```
{% url_for text path [relative] %}
```

**Ejemplos:**

```yml
_config.yml
root: /blog/ # example
```

```
{% url_for blog index.html %}
```

```html
<a href="/blog/index.html">blog</a>
```

Enlace relativo, sigue la opción `relative_link` por defecto p. ej. La ruta post/page es '/foo/bar/index.html'

```yml
_config.yml
relative_link: true
```

```
{% url_for blog index.html %}
```

```html
<a href="../../index.html">blog</a>
```

Es posible deshabilitarla para generar un enlace no relativo, incluso cuando la opción  `relative_link` está habilitada y viceversa.

```
{% url_for blog index.html false %}
```

```html
<a href="/index.html">blog</a>
```

### full_url_for (7.0.0+)

Devuelve una url con `config.url` prefijado. La salida es codificada automáticamente.

```
{% full_url_for text path %}
```

**Ejemplos:**

```yml
_config.yml
url: https://example.com/blog # example
```

```
{% full_url_for index /a/path %}
```

```html
<a href="https://example.com/blog/a/path">index</a>
```

## Raw

Si cierto contenido está causando incidencias al procesarse en tus artículos, acótalo con la etiqueta `raw` para evitar errores de renderización.

```
{% raw %}
content
{% endraw %}
```

## Fragmento del artículo

Usa el texto situado antes de la etiqueta `<!-- more -->` como fragmento (parte inicial) del artículo. El valor de `excerpt:` en el [frontispicio](/docs/front-matter#Settings-amp-Their-Default-Values), si está definido, tomará preferencia.

**Ejemplos:**

```
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
<!-- more -->
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
```
