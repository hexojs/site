---
title: Auxiliadores
---

Los auxiliadores (*helpers* en inglés) se usan para ayudar a insertar elementos rápidamente. Los auxiliadores no se pueden usar en ficheros de código fuente.

Puedes [escribir fácilmente un auxliador personalizado](https://hexo.io/api/helper.html) o usar nuestros auxiliadores ya integrados.

{% youtube Uc53pW0GJHU %}

## URL

### url_for

Retorna una URL con la raíz incluida. La salida se codifica automáticamente.

```js
<%- url_for(path, [option]) %>
```

| Opción     | Descripción                     | Valor por defecto               |
| ---------- | ------------------------------- | ------------------------------- |
| `relative` | La salida es el enlace relativo | Valor de `config.relative_link` |

**Ejemplos:**

```yml
_config.yml
root: /blog/ # example
```

```js
<%- url_for('/a/path') %>
// /blog/a/path
```

Enlace relativo, sigue la opción `relative_link` por defecto, p. ej. la ruta del artículo/página es '/foo/bar/index.html'

```yml
_config.yml
relative_link: true
```

```js
<%- url_for('/css/style.css') %>
// ../../css/style.css

/* Modifica la opción por defecto
 * puedes deshabilitar que la salida sea el enlace completo,
 * incluso cuando esté activada la opción `relative_link` y viceversa.
 */
<%- url_for('/css/style.css', {relative: false}) %>
// /css/style.css
```

### relative_url

Retorna URL relativa de `from` a `to`.

```js
<%- relative_url(from, to) %>
```

**Ejemplos:**

```js
<%- relative_url('foo/bar/', 'css/style.css') %>
// ../../css/style.css
```

### full_url_for

Retorna una URL con el valor de `config.url` incluido. La salida es codificada automáticamente.

```js
<%- full_url_for(path) %>
```

**Ejemplos:**

```yml
_config.yml
url: https://example.com/blog # example
```

```js
<%- full_url_for('/a/path') %>
// https://example.com/blog/a/path
```

### gravatar

Retorna la URL de la imagen del *gravatar* a partir de un email.

Si no especificas el parámetro [options], las opciones por defecto se aplicarán. En otro caso, puedes establecerlo a un número que será transmitido como el parámetro de tamaño a Gravatar. Finalmente, si se establece como un objeto, se convertirá a una cadena de parámetros de consulta para Gravatar.

```js
<%- gravatar(email, [options]) %>
```

| Opción | Descripción                   | Valor por defecto |
| ------ | ----------------------------- | ----------------- |
| `s`    | Tamaño de la imagen de salida | 80                |
| `d`    | Imagen por defecto            |                   |
| `f`    | Forzar por defecto            |                   |
| `r`    | Rating                        |                   |

Más información: [Gravatar](https://en.gravatar.com/site/implement/images/)

**Ejemplos:**

```js
<%- gravatar('a@abc.com') %>
// https://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787

<%- gravatar('a@abc.com', 40) %>
// https://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787?s=40

<%- gravatar('a@abc.com' {s: 40, d: 'https://via.placeholder.com/150'}) %>
// https://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787?s=40&d=https%3A%2F%2Fvia.placeholder.com%2F150
```

## Etiquetas HTML

### css

Carga de archivos CSS. `path` puede ser una cadena de texto, un array, un objeto o un array de objetos. El valor del directorio raíz [`/<root>/`](/docs/configuration#URL) es antepuesto mientras la extensión `.css` es añadido al final de `path` automáticamente. Se debe usar el tipo objeto para atributos personalizados.

```js
<%- css(path, ...) %>
```

**Ejemplos:**

```js
<%- css('style.css') %>
// <link rel="stylesheet" href="/style.css">

<%- css(['style.css', 'screen.css']) %>
// <link rel="stylesheet" href="/style.css">
// <link rel="stylesheet" href="/screen.css">

<%- css({ href: 'style.css', integrity: 'foo' }) %>
// <link rel="stylesheet" href="/style.css" integrity="foo">

<%- css([{ href: 'style.css', integrity: 'foo' }, { href: 'screen.css', integrity: 'bar' }]) %>
// <link rel="stylesheet" href="/style.css" integrity="foo">
// <link rel="stylesheet" href="/screen.css" integrity="bar">
```

### js

Carga ficheros JavaScript. `path` puede ser una cadena de texto, un array, un objeto o un array de objetos. El valor del directorio raíz es incluido al inicio [`/<root>/`](/docs/configuration#URL) mientras que la extensión `.js` es añadida a `path` automáticamente. Se debe usar el tipo objeto para atributos personalizados.

```js
<%- js(path, ...) %>
```

**Ejemplos:**

```js
<%- js('script.js') %>
// <script src="/script.js"></script>

<%- js(['script.js', 'gallery.js']) %>
// <script src="/script.js"></script>
// <script src="/gallery.js"></script>

<%- js({ src: 'script.js', integrity: 'foo', async: true }) %>
// <script src="/script.js" integrity="foo" async></script>

<%- js([{ src: 'script.js', integrity: 'foo' }, { src: 'gallery.js', integrity: 'bar' }]) %>
// <script src="/script.js" integrity="foo"></script>
// <script src="/gallery.js" integrity="bar"></script>
```

### link_to

Inserta un enlace.

```js
<%- link_to(path, [text], [options]) %>
```

| Opción     | Descripción                         | Valor por defecto |
| ---------- | ----------------------------------- | ----------------- |
| `external` | Abre el enlace en una nueva pestaña | false             |
| `class`    | Nombre de la clase                  |                   |
| `id`       | ID                                  |                   |

**Ejemplos:**

```js
<%- link_to('http://www.google.com') %>
// <a href="http://www.google.com" title="http://www.google.com">http://www.google.com</a>

<%- link_to('http://www.google.com', 'Google') %>
// <a href="http://www.google.com" title="Google">Google</a>

<%- link_to('http://www.google.com', 'Google', {external: true}) %>
// <a href="http://www.google.com" title="Google" target="_blank" rel="noopener">Google</a>
```

### mail_to

Inserta un enlace de correo electrónico.

```js
<%- mail_to(path, [text], [options]) %>
```

| Opción    | Descripción       |
| --------- | ----------------- |
| `class`   | Nombre de clase   |
| `id`      | ID                |
| `subject` | Asunto del correo |
| `cc`      | CC                |
| `bcc`     | BCC               |
| `body`    | Cuerpo del correo |

**Ejemplos:**

```js
<%- mail_to('a@abc.com') %>
// <a href="mailto:a@abc.com" title="a@abc.com">a@abc.com</a>

<%- mail_to('a@abc.com', 'Email') %>
// <a href="mailto:a@abc.com" title="Email">Email</a>
```

### image_tag

Inserta una imagen.

```js
<%- image_tag(path, [options]) %>
```

| Opción   | Descripción                    |
| -------- | ------------------------------ |
| `alt`    | Texto alternativo de la imagen |
| `class`  | Nombre de clase                |
| `id`     | ID                             |
| `width`  | Ancho de la imagen             |
| `height` | Alto de la imagen              |

### favicon_tag

Inserta un favicon.

```js
<%- favicon_tag(path) %>
```

### feed_tag

Inserta un enlace de flujo.

```js
<%- feed_tag(path, [options]) %>
```

| Opción  | Descripción      | Valor por defecto |
| ------- | ---------------- | ----------------- |
| `title` | Título del flujo | `config.title`    |
| `type`  | Tipo de flujo    |                   |

**Ejemplos:**

```js
<%- feed_tag('atom.xml') %>
// <link rel="alternate" href="/atom.xml" title="Hexo" type="application/atom+xml">

<%- feed_tag('rss.xml', { title: 'RSS Feed', type: 'rss' }) %>
// <link rel="alternate" href="/atom.xml" title="RSS Feed" type="application/atom+xml">

/* Defaults to hexo-generator-feed's config if no argument */
<%- feed_tag() %>
// <link rel="alternate" href="/atom.xml" title="Hexo" type="application/atom+xml">
```

## Etiquetas condicionales

### is_current

Comprueba si el `path` coincide con la URL de la página actual. Se deben usar las opciones `strict` para habilitar la coincidencia exacta.

```js
<%- is_current(path, [strict]) %>
```

### is_home

Comprueba si la página actual es la página de inicio.

```js
<%- is_home() %>
```

### is_home_first_page (+6.3.0)

Comprueba si la página actual es la primera o la página de inicio.

```js
<%- is_home_first_page() %>
```

### is_post

Comprueba si la página actual es un artículo (`post`).

```js
<%- is_post() %>
```

### is_page

Comprueba si la página actual es una página (`page`).

```js
<%- is_page() %>
```

### is_archive

Comprueba si la página actual es un histórico (*archive page* en inglés).

```js
<%- is_archive() %>
```

### is_year

Comprueba si la página actual es un histórico anual.

```js
<%- is_year() %>
```

### is_month

Comprueba si la página actual es un histórico mensual.

```js
<%- is_month() %>
```

### is_category

Comprueba si la página actual es una página de categoría. Si se indica una cadena de texto como parámetro, comprueba si la página actual coincide con la categoría dada.

```js
<%- is_category() %>
<%- is_category('hobby') %>
```

### is_tag

Comprueba si la página actual es una página de etiqueta (clasificatoria). Si se indica una cadena de texto como parámetro, comprueba si la página actual coincide con la etiqueta dada.

```js
<%- is_tag() %>
<%- is_tag('hobby') %>
```

## Manipulación de cadenas de textos

### trim

Elimina los espacios de inicio y final de la cadena de texto.

```js
<%- trim(string) %>
```

### strip_html

Filtra todas las etiquetas HTML de una cadena de texto.

```js
<%- strip_html(string) %>
```

**Ejemplos:**

```js
<%- strip_html('It\'s not <b>important</b> anymore!') %>
// It's not important anymore!
```

### titlecase

Transforma una cadena de texto en un título adecuadamente capitalizado (con estilo inglés)

```js
<%- titlecase(string) %>
```

**Ejemplos:**

```js
<%- titlecase('this is an apple') %>
# This is an Apple
```

### markdown

Renderiza una cadena de texto con *Markdown*.

```js
<%- markdown(str) %>
```

**Ejemplos:**

```js
<%- markdown('make me **strong**') %>
// make me <strong>strong</strong>
```

### render

Renderiza una cadena de texto.

```js
<%- render(str, engine, [options]) %>
```

**Ejemplos:**

```js
<%- render('p(class="example") Test', 'pug'); %>
// <p class="example">Test</p>
```

Consulta [Rendering](https://hexo.io/api/rendering) para más detalles.

### word_wrap

Reestructura el texto en líneas que no superen la longitud indicada `length`. El valor por defecto de `length` es 80.

```js
<%- word_wrap(str, [length]) %>
```

**Ejemplos:**

```js
<%- word_wrap('Once upon a time', 8) %>
// Once upon\n a time
```

### truncate

Acorta un texto a una longitud `length` determinada. El valor por defecto es 30 caracteres.

```js
<%- truncate(text, [options]) %>
```

**Ejemplos:**

```js
<%- truncate('Once upon a time in a world far far away', {length: 17}) %>
// Once upon a ti...

<%- truncate('Once upon a time in a world far far away', {length: 17, separator: ' '}) %>
// Once upon a...

<%- truncate('And they found that many people were sleeping better.', {length: 25, omission: '... (continued)'}) %>
// And they f... (continued)
```

### escape_html

Escapa las entidades HTML en una cadena de texto.

```js
<%- escape_html(str) %>
```

**Ejemplos:**

```js
<%- escape_html('<p>Hello "world".</p>') %>
// &lt;p&gt;Hello &quot;world&quot;.&lt;&#x2F;p&gt;
```

## Plantillas

### partial

Carga otros ficheros plantilla. Se pueden definir variables locales en `locals`.

```js
<%- partial(layout, [locals], [options]) %>
```

| Opción  | Descripción                                                                                                   | Valor por defecto |
| ------- | ------------------------------------------------------------------------------------------------------------- | ----------------- |
| `cache` | Contenidos en la *cache* (Usa *fragment cache*)                                                               | `false`           |
| `only`  | Uso estricto de variables locales. Solo se usan las variables definidas dentro de `locals` en las plantillas. | `false`           |

### fragment_cache

Guarda en un fragmento los contenidos. Salva el contenido dentro de un fragmento y entrega la *cache* cuando se recibe la siguiente solicitud (*request*).

```js
<%- fragment_cache(id, fn);
```

**Ejemplos:**

```js
<%- fragment_cache('header', function(){
  return '<header></header>';
}) %>
```

## Fecha y hora

### date

Inserta formateada una fecha. `date` puede ser unidad de tiempo *unix*, una cadena de texto ISO, un objeto *date* o un objeto [Moment.js][]. `format` es el ajuste `date_format` por defecto.

```js
<%- date(date, [format]) %>
```

**Ejemplos:**

```js
<%- date(Date.now()) %>
// 2013-01-01

<%- date(Date.now(), 'YYYY/M/D') %>
// Jan 1 2013
```

### date_xml

Inserta una fecha en formato XML. `date` puede ser unidad de tiempo *unix*, una cadena de texto ISO, un objeto *date* o un objeto [Moment.js][].

```js
<%- date_xml(date) %>
```

**Ejemplos:**

```js
<%- date_xml(Date.now()) %>
// 2013-01-01T00:00:00.000Z
```

### time

Inserta una hora con formato. `date` puede ser unidad de tiempo *unix*, una cadena de texto ISO, un objeto *date* o un objeto [Moment.js][]. `format` es el ajuste `time_format` por defecto.

```js
<%- time(date, [format]) %>
```

**Ejemplos:**

```js
<%- time(Date.now()) %>
// 13:05:12

<%- time(Date.now(), 'h:mm:ss a') %>
// 1:05:12 pm
```

### full_date

Inserta una fecha y hora con formato. `date` puede ser unidad de tiempo *unix*, una cadena de texto ISO, un objeto *date* o un objeto [Moment.js][]. `format` es el ajuste `date_format + time_format` por defecto.

```js
<%- full_date(date, [format]) %>
```

**Ejemplos:**

```js
<%- full_date(new Date()) %>
// Jan 1, 2013 0:00:00

<%- full_date(new Date(), 'dddd, MMMM Do YYYY, h:mm:ss a') %>
// Tuesday, January 1st 2013, 12:00:00 am
```

### relative_date

Inserta una marca de tiempo relativa desde el momento actual. `date` puede ser unidad de tiempo *unix*, una cadena de texto ISO, un objeto *date* o un objeto [Moment.js][].

```js
<%- relative_date(date) %>
```

**Ejemplos:**

```js
<%- relative_date(new Date()) %>
// a few seconds ago

<%- relative_date(new Date(1000000000000)) %>
// 22 years ago
```

### time_tag

Inserta una etiqueta de tiempo. `date` puede ser unidad de tiempo *unix*, una cadena de texto ISO, un objeto *date* o un objeto [Moment.js][]. `format` es el ajuste `date_format` por defecto.

```js
<%- time_tag(date, [format]) %>
```

**Ejemplos:**

```js
<%- time_tag(new Date()) %>
// <time datetime="2024-01-22T06:35:31.108Z">2024-01-22</time>

<%- time_tag(new Date(), 'MMM-D-YYYY') %>
// <time datetime="2024-01-22T06:35:31.108Z">Jan-22-2024</time>
```

### moment

Librería [Moment.js][].

## Lista

### list_categories

Inserta una lista de todas las categorías.

```js
<%- list_categories([options]) %>
```

| Opción       | Descripción                                                                                                                                                                                                           | Valor por defecto |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `orderby`    | Orden de las categorías                                                                                                                                                                                               | name              |
| `order`      | Tipo de ordenación. `1`, `asc` por orden ascendente; `-1`, `desc` por orden descendente                                                                                                                               | 1                 |
| `show_count` | Muestra el número de artículos para cada categoría                                                                                                                                                                    | true              |
| `style`      | Estilo para mostrar el listado de categorías. `list` muestra las categorías en una lista no numerada. Usa `false` o cualquier otro valor para deshabilitarlo.                                                         | list              |
| `separator`  | Separador entre categorías. (Solo funciona si `style` no es `list`)                                                                                                                                                   | ,                 |
| `depth`      | Niveles de categorías para ser mostradas. `0` muestra todas las categorías y las distintas subcategorías; `-1` es parecido a `0`, pero las muestra sin jerarquías; `1` muestra solo las categorías de nivel superior. | 0                 |
| `class`      | Nombre de clase de la lista de categorías.                                                                                                                                                                            | category          |
| `transform`  | La función que cambia como se muestra el nombre de la categoría.                                                                                                                                                      |                   |
| `suffix`     | Incluye un sufijo al enlace.                                                                                                                                                                                          | None              |

**Ejemplos:**

```js
<%- list_categories(post.categories, {
  class: 'post-category',
  transform(str) {
    return titlecase(str);
  }
}) %>

<%- list_categories(post.categories, {
  class: 'post-category',
  transform(str) {
    return str.toUpperCase();
  }
}) %>
```

### list_tags

Inserta una lista de todas las etiquetas (clasificatorias).

```js
<%- list_tags([options]) %>
```

| Opción       | Descripción                                                                                                                                                   | Valor por defecto |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `orderby`    | Orden de las etiquetas                                                                                                                                        | name              |
| `order`      | Tipo de ordenación. `1`, `asc` por orden ascendente; `-1`, `desc` por orden descendente                                                                       | 1                 |
| `show_count` | Muestra el número de artículos para cada etiqueta                                                                                                             | true              |
| `style`      | Estilo para mostrar el listado de categorías. `list` muestra las categorías en una lista no numerada. Usa `false` o cualquier otro valor para deshabilitarlo. | list              |
| `separator`  | Separador entre categorías. (Solo funciona si `style` no es `list`)                                                                                           | ,                 |
| `class`      | Nombre de clase para el listado de etiquetas (cadena de texto) o personaliza cada clase de etiqueta (objeto, más detalles abajo).                             | tag               |
| `transform`  | La función que cambia como se muestra el nombre de la etiqueta. Consulta los ejemplos en [list_categories](#list-categories).                                 |                   |
| `amount`     | El número de etiquetas a mostrar (0 = ilimitado)                                                                                                              | 0                 |
| `suffix`     | Añade un sufijo al enlace.                                                                                                                                    | None              |

Personalización avanzada de clases:

| Opción        | Descripción                                                                                                                                                      | Valor por defecto                                           |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| `class.ul`    | Nombre para la clase `<ul>` (solo para estilo `list`)                                                                                                      | `tag-list` (estilo lista)                                   |
| `class.li`    | Nombre para la clase `<li>` (solo para estilo `list`)                                                                                                      | `tag-list-item` (estilo lista)                              |
| `class.a`     | Nombre para la clase `<a>`                                                                                                                                 | `tag-list-link` (estilo lista) `tag-link` (estilo normal)   |
| `class.label` | Nombre para la clase `<span>` donde la etiqueta *label* es guardada (solo para estilo normal, cuando se establece `class.label` se pone un `<span>`) | `tag-label` (estilo normal)                                 |
| `class.count` | Nombre para la clase `<span>` donde el contador de etiquetas (clasificatorias) es guardado (solo cuando `show_count` es `true`)                            | `tag-list-count` (estilo lista) `tag-count` (estilo normal) |

Ejemplos:

```ejs
<%- list_tags(site.tags, {class: 'classtest', style: false, separator: ' | '}) %>
<%- list_tags(site.tags, {class: 'classtest', style: 'list'}) %>
<%- list_tags(site.tags, {class: {ul: 'ululul', li: 'lilili', a: 'aaa', count: 'ccc'}, style: false, separator: ' | '}) %>
<%- list_tags(site.tags, {class: {ul: 'ululul', li: 'lilili', a: 'aaa', count: 'ccc'}, style: 'list'}) %>
```

### list_archives

Inserta una lista de históricos.

```js
<%- list_archives([options]) %>
```

| Opción       | Descripción                                                                                                                                                   | Valor por defecto |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `type`       | Tipo. Este valor puede ser `yearly`  (anualmente) o `monthly` (mensualmente).                                                                                 | monthly           |
| `order`      | Tipo de ordenación. `1`, `asc` por orden ascendente; `-1`, `desc` por orden descendente                                                                       | 1                 |
| `show_count` | Muestra el número de artículos para cada histórico                                                                                                            | true              |
| `format`     | Formato de fecha                                                                                                                                              | MMMM YYYY         |
| `style`      | Estilo para mostrar el listado de históricos. `list` muestra los históricos en una lista no numerada. Usa `false` o cualquier otro valor para deshabilitarlo. | list              |
| `separator`  | Separador entre históricos. (Solo funciona si `style` no es `list`)                                                                                           | ,                 |
| `class`      | Nombre de clase del listado de históricos.                                                                                                                    | archive           |
| `transform`  | La función que cambia como se muestra el nombre de los históricos. Consulta los ejemplos en [list_categories](#list-categories).                              |                   |

### list_posts

Inserta un listado de artículos.

```js
<%- list_posts([options]) %>
```

| Opción      | Descripción                                                                                                                                                 | Valor por defecto |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `orderby`   | Orden de los artículos                                                                                                                                      | date              |
| `order`     | Tipo de ordenación. `1`, `asc` por orden ascendente; `-1`, `desc` por orden descendente                                                                     | 1                 |
| `style`     | Estilo para mostrar el listado de artículos. `list` muestra los artículos en una lista no numerada. Usa `false` o cualquier otro valor para deshabilitarlo. | list              |
| `separator` | Separador entre artículos. (Solo funciona cuando `style` no es `list`)                                                                                      | ,                 |
| `class`     | Nombre de la clase del listado de artículos.                                                                                                                | post              |
| `amount`    | Número de artículos a mostrar (0 = ilimitado)                                                                                                               | 6                 |
| `transform` | La función que cambia como se muestra el nombre de los artículos. Consulta los ejemplos en [list_categories](#list-categories).                             |                   |

### tagcloud

Inserta una nube de etiquetas clasificatorias.

```js
<%- tagcloud([tags], [options]) %>
```

| Opción                 | Descripción                                                                                                                                                                               | Valor por defecto |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `min_font`             | Tamaño de fuente mínima                                                                                                                                                                   | 10                |
| `max_font`             | Tamaño de fuente máxima                                                                                                                                                                   | 20                |
| `unit`                 | Unidad de tamaño de la fuente                                                                                                                                                             | px                |
| `amount`               | Número total de etiquetas                                                                                                                                                                 | unlimited         |
| `orderby`              | Orden de las etiquetas                                                                                                                                                                    | name              |
| `order`                | Tipo de ordenación. `1`, `asc` por orden ascendente; `-1`, `desc` por orden descendente.                                                                                                  | 1                 |
| `color`                | Colorea la nube de etiquetas                                                                                                                                                              | false             |
| `start_color`          | Color inicial. Se puede usar hex (`#b700ff`), rgba (`rgba(183, 0, 255, 1)`), hsla (`hsla(283, 100%, 50%, 1)`) o *[color keywords][]*. Esta opción solo funciona cuando `color` es `true`. |                   |
| `end_color`            | Color final. Se puede usar hex (`#b700ff`), rgba (`rgba(183, 0, 255, 1)`), hsla (`hsla(283, 100%, 50%, 1)`) o *[color keywords][]*. Esta opción solo funciona cuando `color` es `true`.   |                   |
| `class`                | Prefijo del nombre de la clase de las etiquetas                                                                                                                                           |                   |
| `level`                | Prefijo del nombre de la clase de las etiquetas. Esta opción solo funciona cuando se establece `class`.                                                                                   | 10                |
| `show_count` (+6.3.0)  | Muestra el número de artículos para cada etiqueta                                                                                                                                         | false             |
| `count_class` (+6.3.0) | Nombre de clase del contador de etiquetas                                                                                                                                                 | count             |

**Ejemplos:**

```js
// Default options
<%- tagcloud() %>

// Limit number of tags to 30
<%- tagcloud({amount: 30}) %>
```

## Miscelánea

### paginator

Inserta un paginador.

```js
<%- paginator(options) %>
```

| Opción                     | Descripción                                                                                       | Valor por defecto |
| -------------------------- | ------------------------------------------------------------------------------------------------- | ----------------- |
| `base`                     | Base de la URL                                                                                    | /                 |
| `format`                   | Formato de la URL                                                                                 | page/%d/          |
| `total`                    | El número de páginas                                                                              | 1                 |
| `current`                  | Número de página actual                                                                           | 0                 |
| `prev_text`                | Texto del enlace a la página anterior. Funciona solo si `prev_next` es `true`.                    | Prev              |
| `next_text`                | Texto del enlace a la página posterior. Funciona solo si `prev_next` es `true`.                   | Next              |
| `space`                    | Indicador de omisión (espacio)                                                                    | &hellp;           |
| `prev_next`                | Muestra los enlaces a las páginas anterior y posterior                                            | true              |
| `end_size`                 | El número de páginas mostradas al inicio y al final de cada extremo                               | 1                 |
| `mid_size`                 | El número de páginas mostradas a cada lado de la página actual, pero sin incluirla                | 2                 |
| `show_all`                 | Muestra todas las páginas. Si se establece como verdadero, `end_size` y `mid_size` no funcionarán | false             |
| `escape`                   | Escapado de etiquetas HTML                                                                        | true              |
| `page_class` (+6.3.0)      | Nombre de clase de página                                                                         | `page-number`     |
| `current_class` (+6.3.0)   | Nombre de clase de página actual                                                                  | `current`         |
| `space_class` (+6.3.0)     | Nombre de clase del indicador de omisión (`space`)                                                | `space`           |
| `prev_class` (+6.3.0)      | Nombre de clase de página anterior                                                                | `extend prev`     |
| `next_class` (+6.3.0)      | Nombre de clase página posterior                                                                  | `extend next`     |
| `force_prev_next` (+6.3.0) | Fuerza mostrar los enlaces de página anterior y posterior                                         | false             |

**Ejemplos:**

```js
<%- paginator({
  prev_text: '<',
  next_text: '>'
}) %>
```

```html
<!-- Rendered as -->
<a href="/1/">&lt;</a>
<a href="/1/">1</a>
2
<a href="/3/">3</a>
<a href="/3/">&gt;</a>
```

```js
<%- paginator({
  prev_text: '<i class="fa fa-angle-left"></i>',
  next_text: '<i class="fa fa-angle-right"></i>',
  escape: false
}) %>
```

```html
<!-- Rendered as -->
<a href="/1/"><i class="fa fa-angle-left"></i></a>
<a href="/1/">1</a>
2
<a href="/3/">3</a>
<a href="/3/"><i class="fa fa-angle-right"></i></a>
```

### search_form

Inserta un formulario de búsqueda de Google.

```js
<%- search_form(options) %>
```

| Opción   | Descripción                                                                                                                                      | Valor por defecto |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| `class`  | El nombre de la clase del formulario                                                                                                             | search-form       |
| `text`   | Palabra de sugerencia de búsqueda                                                                                                                | Search            |
| `button` | Muestra el botón de búsqueda. El valor puede ser un booleano o una cadena de texto. Si el valor es una cadena de texto, será el texto del botón. | false             |

### number_format

Da formato a un número.

```js
<%- number_format(number, [options]) %>
```

| Opción      | Descripción                                                                        | Valor por defecto |
| ----------- | ---------------------------------------------------------------------------------- | ----------------- |
| `precision` | Precisión del número. El valor puede ser `false` un entero mayor o igual que cero. | false             |
| `delimiter` | Separador de miles                                                                 | ,                 |
| `separator` | Separador de parte decimal.                                                        | .                 |

**Ejemplos:**

```js
<%- number_format(12345.67, {precision: 1}) %>
// 12,345.68

<%- number_format(12345.67, {precision: 4}) %>
// 12,345.6700

<%- number_format(12345.67, {precision: 0}) %>
// 12,345

<%- number_format(12345.67, {delimiter: ''}) %>
// 12345.67

<%- number_format(12345.67, {separator: '/'}) %>
// 12,345/67
```

### meta_generator

Inserta *[generator tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)*.

```js
<%- meta_generator() %>
```

**Ejemplos:**

```js
<%- meta_generator() %>
// <meta name="generator" content="Hexo 4.0.0">
```

### open_graph

Inserta información [Open Graph][].

```js
<%- open_graph([options]) %>
```

| Opción          | Descripción                                                      | Valor por defecto                                                  |
| --------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------ |
| `title`         | Título de página (`og:title`)                                    | `page.title`                                                       |
| `type`          | Tipo de página (`og:type`)                                       | article(post page)<br>website(non-post page)                 |
| `url`           | URL de la página (`og:url`)                                      | `url`                                                              |
| `image`         | Imágenes de página (`og:image`)                                  | Todas las imágenes en el contenido                                 |
| `author`        | Autor del artículo (`og:article:author`)                         | `config.author`                                                    |
| `date`          | Fecha de publicación de la entrada (`og:article:published_time`) | Fecha de publicación de la página                                  |
| `updated`       | Fecha de modificación de la entrada (`og:article:modified_time`) | Fecha de modificación de la página                                 |
| `language`      | Idioma de la entrada (`og:locale`)                               | `page.lang \|\| page.language \|\| config.language`            |
| `site_name`     | Nombre del sitio                                                 | `config.title`                                                     |
| `description`   | Descripción de la página (`og:description`)                      | Fragmento de la página o los primeros 200 caracteres del contenido |
| `twitter_card`  | Tipo de tarjeta Twitter (`twitter:card`)                         | resumen (*summary*)                                                |
| `twitter_id`    | Twitter ID (`twitter:creator`)                                   |                                                                    |
| `twitter_site`  | Sitio de Twitter (`twitter:site`)                                |                                                                    |
| `twitter_image` | Imagen de Twitter (`twitter:image`)                              |                                                                    |
| `google_plus`   | Enlace de perfil Google+                                         |                                                                    |
| `fb_admins`     | Facebook admin ID                                                |                                                                    |
| `fb_app_id`     | Facebook App ID                                                  |                                                                    |

### toc

Analiza todos los títulos (h1~h6) en el contenido e inserta una tabla de contenidos (tdc por sus iniciales).

```js
<%- toc(str, [options]) %>
```

| Opción                  | Descripción                                       | Valor por defecto |
| ----------------------- | ------------------------------------------------- | ----------------- |
| `class`                 | Nombre de clase                                   | `toc`             |
| `class_item` (+6.3.0)   | Nombre de clase de ítem                           | `${class}-item`   |
| `class_link` (+6.3.0)   | Nombre de clase de enlace                         | `${class}-link`   |
| `class_text` (+6.3.0)   | Nombre de clase de texto                          | `${class}-text`   |
| `class_child` (+6.3.0)  | Nombre de clase de hijo                           | `${class}-child`  |
| `class_number` (+6.3.0) | Nombre de clase de número                         | `${class}-number` |
| `class_level` (+6.3.0)  | Prefijo del nombre de clase de nivel              | `${class}-level`  |
| `list_number`           | Muestra las listas numeradas                      | true              |
| `max_depth`             | Máxima profundidad del anidado de la tdc generada | 6                 |
| `min_depth`             | Mínima profundidad del anidado de la tdc generada | 1                 |
| `max_items` (+7.3.0)    | Número máximo de items de la tdc generada         | `Infinity`        |

**Ejemplos:**

```js
<%- toc(page.content) %>
```

#### data-toc-unnumbered (+6.1.0)

Los títulos con atributo `data-toc-unnumbered="true"` serán marcados como sin numeración (el número de lista no será mostrado).

{% note warn "Aviso" %}
Para usar `data-toc-unnumbered="true"` el renderizador debe tener la opción de incluir clases CSS.

Por favor, consulta los siguientes PRs.

- https://github.com/hexojs/hexo/pull/4871
- https://github.com/hexojs/hexo-util/pull/269
- https://github.com/hexojs/hexo-renderer-markdown-it/pull/174
  {% endnote %}

[color keywords]: http://www.w3.org/TR/css3-color/#svg-color
[Moment.js]: http://momentjs.com/
[Open Graph]: http://ogp.me/
