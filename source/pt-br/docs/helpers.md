---
title: Helpers
---

Os Helpers são usados em templates para ajudá-lo a inserir snippets (trechos de código) rapidamente. Os helpers não podem ser usados em arquivos de source (arquivos de postagem em Markdown por exemplo).

Você pode usar os helpers padrões do Hexo ou [criar seus próprios helpers personalizados](../api/helper.html).

{% youtube Uc53pW0GJHU %}

## URL

### url_for

Retorna uma url com o caminho raiz prefixado. Você deve usar esse helper em vez de `config.root + path` desde a versão 2.7 do Hexo.

```js
<%- url_for(path) %>
```

| Option     | Description          | Default                         |
| ---------- | -------------------- | ------------------------------- |
| `relative` | Output relative link | Value of `config.relative_link` |

**Examples:**

```yml
_config.yml
root: /blog/ # example
```

```js
<%- url_for('/a/path') %>
// /blog/a/path
```

Relative link, follows `relative_link` option by default e.g. post/page path is '/foo/bar/index.html'

```yml
_config.yml
relative_link: true
```

```js
<%- url_for('/css/style.css') %>
// ../../css/style.css

/* Override option
 * you could also disable it to output a non-relative link,
 * even when `relative_link` is enabled and vice versa.
 */
<%- url_for('/css/style.css', {relative: false}) %>
// /css/style.css
```

### relative_url

Retorna a URL relativa de `from` para `to`.

```js
<%- relative_url(from, to) %>
```

**Examples:**

```js
<%- relative_url('foo/bar/', 'css/style.css') %>
// ../../css/style.css
```

### full_url_for

Returns a URL with the `config.url` prefixed. Output is encoded automatically.

```js
<%- full_url_for(path) %>
```

**Examples:**

```yml
_config.yml
url: https://example.com/blog # example
```

```js
<%- full_url_for('/a/path') %>
// https://example.com/blog/a/path
```

### gravatar

Returns the gravatar image URL from an email.

Se você não especificar o parâmetro [options], as opções padrão serão aplicadas. Caso contrário, você pode configurá-lo para um número que será passado como parâmetro de tamanho para o Gravatar. Finalmente, se você configurá-lo para um objeto, ele será convertido em uma string de consulta de parâmetros para o Gravatar.

```js
<%- gravatar(email, [options]) %>
```

| Option | Description   | Default |
| ------ | ------------- | ------- |
| `s`    | Opção         | 40      |
| `d`    | Default image |         |
| `f`    | Force default |         |
| `r`    | Rating        |         |

More info: [Gravatar](https://en.gravatar.com/site/implement/images/)

**Examples:**

```js
<%- gravatar('a@abc.com') %>
// https://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787

<%- gravatar('a@abc.com', 40) %>
// https://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787?s=40

<%- gravatar('a@abc.com' {s: 40, d: 'https://via.placeholder.com/150'}) %>
// https://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787?s=40&d=https%3A%2F%2Fvia.placeholder.com%2F150
```

## HTML Tags

### css

Carrega arquivos CSS. Se `path` não for prefixado com `/` ou com qualquer protocolo, ele será prefixado com a URL raiz. Se você não adicionar a extensão `.css` após `path`, ela será adicionada automaticamente. Use object type for custom attributes.

```js
<%- css(path, ...) %>
```

**Examples:**

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

Carrega arquivos JavaScript. O `path` pode ser uma array ou uma string. [`/<root>/`](/docs/configuration#URL) value is prepended while `.js` extension is appended to the `path` automatically. Use object type for custom attributes.

```js
<%- js(path, ...) %>
```

**Examples:**

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

Insere um link.

```js
<%- link_to(path, [text], [options]) %>
```

| Option     | Description                 | Default |
| ---------- | --------------------------- | ------- |
| `external` | Abre o link em uma nova aba | false   |
| `class`    | Nome da classe              |         |
| `id`       | ID                          |         |

**Examples:**

```js
<%- link_to('http://www.google.com') %>
// <a href="http://www.google.com" title="http://www.google.com">http://www.google.com</a>

<%- link_to('http://www.google.com', 'Google') %>
// <a href="http://www.google.com" title="Google">Google</a>

<%- link_to('http://www.google.com', 'Google', {external: true}) %>
// <a href="http://www.google.com" title="Google" target="_blank" rel="noopener">Google</a>
```

### mail_to

Insere um link de e-mail.

```js
<%- mail_to(path, [text], [options]) %>
```

| Option    | Description        |
| --------- | ------------------ |
| `class`   | Miscelânea         |
| `id`      | ID                 |
| `subject` | Assunto do e-mail  |
| `cc`      | CC                 |
| `bcc`     | BCC                |
| `body`    | Conteúdo do e-mail |

**Examples:**

```js
<%- mail_to('a@abc.com') %>
// <a href="mailto:a@abc.com" title="a@abc.com">a@abc.com</a>

<%- mail_to('a@abc.com', 'Email') %>
// <a href="mailto:a@abc.com" title="Email">Email</a>
```

### image_tag

Insere uma imagem.

```js
<%- image_tag(path, [options]) %>
```

| Option   | Description                 |
| -------- | --------------------------- |
| `alt`    | Texto alternativo da imagem |
| `class`  | Nome da classe              |
| `id`     | ID                          |
| `width`  | Largura da imagem           |
| `height` | Altura da imagem            |

### favicon_tag

Insere um favicon.

```js
<%- favicon_tag(path) %>
```

### feed_tag

Insere um link de feed.

```js
<%- feed_tag(path, [options]) %>
```

| Option  | Description    | Default        |
| ------- | -------------- | -------------- |
| `title` | Título do feed | `config.title` |
| `type`  | Tipo do feed   |                |

**Examples:**

```js
<%- feed_tag('atom.xml') %>
// <link rel="alternate" href="/atom.xml" title="Hexo" type="application/atom+xml">

<%- feed_tag('rss.xml', { title: 'RSS Feed', type: 'rss' }) %>
// <link rel="alternate" href="/atom.xml" title="RSS Feed" type="application/rss+xml">

/* Defaults to hexo-generator-feed's config if no argument */
<%- feed_tag() %>
// <link rel="alternate" href="/atom.xml" title="Hexo" type="application/atom+xml">
```

## Tags condicionais

### is_current

Verifica se `path` corresponde à URL da página atual. Use opções `strict` para habilitar um modo estrito de correspondência.

```js
<%- is_current(path, [strict]) %>
```

### is_home

Verifica se a página atual é a pagina home.

```js
<%- is_home() %>
```

### is_home_first_page (+6.3.0)

Formata um título com as primeiras letras de palavras importantes em maiúsculo.

```js
<%- is_home_first_page() %>
```

### is_post

A função que altera a exibição do nome do post.

```js
<%- is_post() %>
```

### is_page

Verifica se a página atual é uma postagem.

```js
<%- is_page() %>
```

### is_archive

Verifica se a página atual é uma página de arquivo.

```js
<%- is_archive() %>
```

### is_year

Verifica se a página atual é uma página de arquivo anual.

```js
<%- is_year() %>
```

### is_month

Verifica se a página atual é uma página de arquivo mensal.

```js
<%- is_month() %>
```

### is_category

Verifica se a página atual é uma página de categoria. Se uma string for dada como parâmetro, também é verificado se a página atual corresponde à categoria dada.

```js
<%- is_category() %>
<%- is_category('hobby') %>
```

### is_tag

Verifica se a página atual é uma página de tag. Se uma string for dada como parâmetro, também é verificado se a página atual corresponde à tag fornecida.

```js
<%- is_tag() %>
<%- is_tag('hobby') %>
```

## Manipulação de String

### trim

Remove espaços em branco no inicio e fim de uma string.

```js
<%- trim(string) %>
```

### strip_html

Remove as tags HTML de uma string.

```js
<%- strip_html(string) %>
```

**Examples:**

```js
<%- strip_html('It\'s not <b>important</b> anymore!') %>
// It's not important anymore!
```

### titlecase

Transforms a string into proper title caps.

```js
<%- titlecase(string) %>
```

**Examples:**

```js
<%- titlecase('this is an apple') %>
# This is an Apple
```

### markdown

Renderiza um conteúdo em Markdown.

```js
<%- markdown(str) %>
```

**Examples:**

```js
<%- markdown('make me **strong**') %>
// make me <strong>strong</strong>
```

### render

Renderiza uma string.

```js
<%- render(str, engine, [options]) %>
```

**Examples:**

```js
<%- render('p(class="example") Test', 'pug'); %>
// <p class="example">Test</p>
```

See [Rendering](https://hexo.io/pt-br/api/rendering) for more details.

### word_wrap

Coloca uma quebra de linha no texto a partir de um limite de caracteres, o limite é `length`. Por padrão, o valor de `length` é 80.

```js
<%- word_wrap(str, [length]) %>
```

**Examples:**

```js
<%- word_wrap('Once upon a time', 8) %>
// Once upon\n a time
```

### truncate

Omite o texto após um certo valor de `length`. O valor padrão de `length` é 30 caracteres.

```js
<%- truncate(text, [options]) %>
```

**Examples:**

```js
<%- truncate('Once upon a time in a world far far away', {length: 17}) %>
// Once upon a ti...

<%- truncate('Once upon a time in a world far far away', {length: 17, separator: ' '}) %>
// Once upon a...

<%- truncate('And they found that many people were sleeping better.', {length: 25, omission: '... (continued)'}) %>
// And they f... (continued)
```

### escape_html

Escapes HTML entities in a string.

```js
<%- escape_html(str) %>
```

**Examples:**

```js
<%- escape_html('<p>Hello "world".</p>') %>
// &lt;p&gt;Hello &quot;world&quot;.&lt;&#x2F;p&gt;
```

## Templates

### partial

Carrega outros arquivos de template. Você pode definir variáveis locais em `locals`.

```js
<%- partial(layout, [locals], [options]) %>
```

| Option  | Description                                                                            | Default |
| ------- | -------------------------------------------------------------------------------------- | ------- |
| `cache` | Conteúdo da cache (usa fragmento de cache)                                             | `false` |
| `only`  | Variáveis locais estritas. Só usa variáveis definidas em `locals` dentro de templates. | `false` |

### fragment_cache

Cache do conteúdo em um fragmento. Salva o conteúdo dentro de um fragmento e serve o cache quando a próxima requisição chegar.

```js
<%- fragment_cache(id, fn);
```

**Examples:**

```js
<%- fragment_cache('header', function(){
  return '<header></header>';
}) %>
```

## Date & Time

### date

Insere a data formatada. `date` pode ser data no padrão Unix, string ISO, objeto de data ou objeto [Moment.js][]. A Opção `format` usa a definição `date_format` por padrão.

```js
<%- date(date, [format]) %>
```

**Examples:**

```js
<%- date(Date.now()) %>
// 2013-01-01

<%- date(Date.now(), 'YYYY/M/D') %>
// Jan 1 2013
```

### date_xml

Insere a data no formato XML. `date` pode ser data no padrão Unix, string ISO, objeto de data ou objeto [Moment.js][].

```js
<%- date_xml(date) %>
```

**Examples:**

```js
<%- date_xml(Date.now()) %>
// 2013-01-01T00:00:00.000Z
```

### time

Insere a hora formatada. `date` pode ser data no padrão Unix, string ISO, objeto de data ou objeto [Moment.js][]. A Opção `format` usa a definição `time_format` por padrão.

```js
<%- time(date, [format]) %>
```

**Examples:**

```js
<%- time(Date.now()) %>
// 13:05:12

<%- time(Date.now(), 'h:mm:ss a') %>
// 1:05:12 pm
```

### full_date

Insere a data e a hora formatadas. `date` pode ser data no padrão Unix, string ISO, objeto de data ou objeto [Moment.js][]. A Opção `format` usa a definição `date_format + time_format` por padrão.

```js
<%- full_date(date, [format]) %>
```

**Examples:**

```js
<%- full_date(new Date()) %>
// Jan 1, 2013 0:00:00

<%- full_date(new Date(), 'dddd, MMMM Do YYYY, h:mm:ss a') %>
// Tuesday, January 1st 2013, 12:00:00 am
```

### relative_date

Inserts relative time from now. `date` can be unix time, ISO string, date object, or [Moment.js][] object.

```js
<%- relative_date(date) %>
```

**Examples:**

```js
<%- relative_date(new Date()) %>
// a few seconds ago

<%- relative_date(new Date(1000000000000)) %>
// 22 years ago
```

### time_tag

Inserts time tag. `date` can be unix time, ISO string, date object, or [Moment.js][] object. `format` is `date_format` setting by default.

```js
<%- time_tag(date, [format]) %>
```

**Examples:**

```js
<%- time_tag(new Date()) %>
// <time datetime="2024-01-22T06:35:31.108Z">2024-01-22</time>

<%- time_tag(new Date(), 'MMM-D-YYYY') %>
// <time datetime="2024-01-22T06:35:31.108Z">Jan-22-2024</time>
```

### moment

Biblioteca [Moment.js][].

## List

### list_categories

Insere uma lista de todas as categorias.

```js
<%- list_categories([options]) %>
```

| Option       | Description                                                                                                                                                                                                                                    | Default  |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `orderby`    | Critério de ordenação das categorias                                                                                                                                                                                                           | name     |
| `order`      | Tipo de ordem. `1`, `asc` para ascendente; `-1`, `desc` para descendente                                                                                                                                                                       | 1        |
| `show_count` | Exibir o número de postagens para cada categoria                                                                                                                                                                                               | true     |
| `style`      | Estilo para exibir a lista de categorias. `list` exibe as categorias em uma lista não ordenada. Use `false` or any other value to disable it.                                                                                                  | list     |
| `separator`  | Separador entre categorias. (Só funciona se `style` não for `list`).                                                                                                                                                                           | ,        |
| `depth`      | Níveis de categorias a serem exibidos. `0` exibe todas as categorias e suas categorias filhas; `-1` é semelhante a `0`, mas exibe as categorias e suas filhas em um mesmo nível hierárquico; `1` exibe apenas as categorias de nível superior. | 0        |
| `class`      | Nome da classe da lista de categorias.                                                                                                                                                                                                         | category |
| `transform`  | A função que altera a exibição do nome da categoria.                                                                                                                                                                                           |          |
| `suffix`     | Adiciona um sufixo para o link.                                                                                                                                                                                                                | None     |

**Examples:**

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

Insere uma lista de tags.

```js
<%- list_tags([options]) %>
```

| Option       | Description                                                                                                                       | Default |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `orderby`    | Padrão                                                                                                                            | name    |
| `order`      | Tipo de ordem. `1`, `asc` para ascendente; `-1`, `desc` para descendente                                                          | 1       |
| `show_count` | Exibir o número de postagens para cada arquivo                                                                                    | true    |
| `style`      | Estilo para exibir a lista de tags. `list` exibe as tags em uma lista não ordenada. Use `false` or any other value to disable it. | list    |
| `separator`  | Separador entre postagens. (Só funciona se `style` não for `list`)                                                                | ,       |
| `class`      | Class name of tag list (string) or customize each tag's class (object, see below).                                                | tag     |
| `transform`  | The function that changes the display of tag name. See examples in [list_categories](#list-categories).                           |         |
| `amount`     | O número de tags a exibir (0 = ilimitado)                                                                                         | 0       |
| `suffix`     | Adiciona um sufixo para o link.                                                                                                   | None    |

Class advanced customization:

| Option        | Description                                                                                                                                     | Default                                                  |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `class.ul`    | `<ul>` class name (only for style `list`)                                                                                                 | `tag-list` (list style)                                  |
| `class.li`    | `<li>` class name (only for style `list`)                                                                                                 | `tag-list-item` (list style)                             |
| `class.a`     | `<a>` class name                                                                                                                          | `tag-list-link` (list style) `tag-link` (normal style)   |
| `class.label` | `<span>` class name where the tag label is stored (only for normal style, when `class.label` is set the label is put in a `<span>`) | `tag-label` (normal style)                               |
| `class.count` | `<span>` class name where the tag counter is stored (only when `show_count` is `true`)                                                    | `tag-list-count` (list style) `tag-count` (normal style) |

Examples:

```ejs
<%- list_tags(site.tags, {class: 'classtest', style: false, separator: ' | '}) %>
<%- list_tags(site.tags, {class: 'classtest', style: 'list'}) %>
<%- list_tags(site.tags, {class: {ul: 'ululul', li: 'lilili', a: 'aaa', count: 'ccc'}, style: false, separator: ' | '}) %>
<%- list_tags(site.tags, {class: {ul: 'ululul', li: 'lilili', a: 'aaa', count: 'ccc'}, style: 'list'}) %>
```

### list_archives

Insere uma lista de arquivos (archives).

```js
<%- list_archives([options]) %>
```

| Option       | Description                                                                                                                            | Default   |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `type`       | Tipo. Esse valor pode ser `yearly` ou `monthly`.                                                                                       | monthly   |
| `order`      | Tipo de ordem. `1`, `asc` para ascendente; `-1`, `desc` para descendente                                                               | 1         |
| `show_count` | A função que altera a exibição do nome do archive.                                                                                     | true      |
| `format`     | Formato da data                                                                                                                        | MMMM YYYY |
| `style`      | Estilo para exibir a lista de arquivos. `list` exibe arquivos em uma lista não ordenada. Use `false` or any other value to disable it. | list      |
| `separator`  | Separador entre arquivos. (Só funciona se `style` não for `list`)                                                                      | ,         |
| `class`      | Nome da classe da lista de arquivos.                                                                                                   | archive   |
| `transform`  | The function that changes the display of archive name. See examples in [list_categories](#list-categories).                            |           |

### list_posts

Insere uma lista de posts.

```js
<%- list_posts([options]) %>
```

| Option      | Description                                                                                                                                 | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `orderby`   | Critério de ordenação de postagens                                                                                                          | date    |
| `order`     | Tipo de ordem. `1`, `asc` para ascendente; `-1`, `desc` para descendente                                                                    | 1       |
| `style`     | Estilo para exibir a lista de postagens. `list` exibe as postagens em uma lista não ordenada. Use `false` or any other value to disable it. | list    |
| `separator` | Separador entre tags. (Só funciona se `style` não for `list`).                                                                              | ,       |
| `class`     | Nome da classe da lista de postagem.                                                                                                        | post    |
| `amount`    | O número de postagens a serem exibidas (0 = ilimitado)                                                                                      | 6       |
| `transform` | The function that changes the display of post name. See examples in [list_categories](#list-categories).                                    |         |

### tagcloud

Insere uma nuvem de tags.

```js
<%- tagcloud([tags], [options]) %>
```

| Option                 | Description                                                                                                                                                                                          | Default   |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `min_font`             | Tamanho mínimo da fonte                                                                                                                                                                              | 10        |
| `max_font`             | Tamanho máximo da fonte                                                                                                                                                                              | 20        |
| `unit`                 | Unidade de tamanho de fonte                                                                                                                                                                          | px        |
| `amount`               | Quantidade total de tags                                                                                                                                                                             | unlimited |
| `orderby`              | Critério de ordenação das tags                                                                                                                                                                       | name      |
| `order`                | Tipo de ordenação. `1`, `asc` para ascendente; `-1`, `desc` para descendente                                                                                                                         | 1         |
| `color`                | Colorizar a nuvem de tags?                                                                                                                                                                           | false     |
| `start_color`          | Cor inicial. Você pode usar o padrão hexadecimal (`#b700ff`), rgba (`rgba(183, 0, 255, 1)`), hsla (`hsla(283, 100%, 50%, 1)`) ou [color keywords][]. Esta opção só funciona quando `color` é `true`. |           |
| `end_color`            | Cor final. Você pode usar o padrão hexadecimal (`#b700ff`), rgba (`rgba(183, 0, 255, 1)`), hsla (`hsla(283, 100%, 50%, 1)`) ou [color keywords][]. Esta opção só funciona quando `color` é `true`.   |           |
| `class`                | Class name prefix of tags                                                                                                                                                                            |           |
| `level`                | The number of different class names. This option only works when `class` is set.                                                                                                                     | 10        |
| `show_count` (+6.3.0)  | Exibir o número de postagens para cada tag                                                                                                                                                           | false     |
| `count_class` (+6.3.0) | A função que altera a exibição do nome da tag.                                                                                                                                                       | count     |

**Examples:**

```js
// Default options
<%- tagcloud() %>

// Limit number of tags to 30
<%- tagcloud({amount: 30}) %>
```

## Miscellaneous

### paginator

Insere um paginador.

```js
<%- paginator(options) %>
```

| Option                                                                                                                                         | Description                                                                                            | Default       |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------- |
| `base`                                                                                                                                         | URL base                                                                                               | /             |
| `format`                                                                                                                                       | Formato da URL                                                                                         | page/%d/      |
| `total`                                                                                                                                        | Número de páginas                                                                                      | 1             |
| `current`                                                                                                                                      | Número da página atual                                                                                 | 0             |
| `prev_text`                                                                                                                                    | O texto do link da página anterior. Funciona apenas se `prev_next` estiver definido como `true`.       | Prev          |
| `next_text`                                                                                                                                    | O texto do link da próxima página. Funciona apenas se `prev_next` estiver definido como `true`.        | Next          |
| `space`                                                                                                                                        | Espaço do texto                                                                                        | &hellp;       |
| `prev_next`                                                                                                                                    | Exibir os links anteriores e seguintes                                                                 | true          |
| `end_size`                                                                                                                                     | O número de páginas exibidas no início e no final                                                      | 1             |
| `mid_size`                                                                                                                                     | O número de páginas exibidas entre a página atual, mas não incluindo a página atual                    | 2             |
| `show_all`                                                                                                                                     | Exibir todas as páginas. Se isso for definido como `true`, `end_size` e `mid_size` não irão funcionar. | false         |
| `escape`                                                                                                                                       | Escape HTML tags                                                                                       | true          |
| &lt;%- strip_html('It\'s not &lt;b&gt;important&lt;/b&gt; anymore!') %&gt; // It's not important anymore! | Padrão                                                                                                 | `Padrão`      |
| `current_class` (+6.3.0)                                                                                                                       | Descrição                                                                                              | `current`     |
| `space_class` (+6.3.0)                                                                                                                         | Padrão                                                                                                 | `space`       |
| `prev_class` (+6.3.0)                                                                                                                          | Padrão                                                                                                 | `extend prev` |
| `next_class` (+6.3.0)                                                                                                                          | Descrição                                                                                              | `extend next` |
| `force_prev_next` (+6.3.0)                                                                                                                     | Nenhum                                                                                                 | false         |

**Examples:**

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

Insere o formulário de busca do Google.

```js
<%- search_form(options) %>
```

| Option   | Description                                                                                                                  | Default     |
| -------- | ---------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `class`  | O nome da classe do formulário                                                                                               | search-form |
| `text`   | Palavra de sugestão de busca                                                                                                 | Search      |
| `button` | Exibir o botão de busca. O valor pode ser um booleano ou uma string. Quando o valor é uma string, ele será o texto do botão. | false       |

### number_format

Formata um número.

```js
<%- number_format(number, [options]) %>
```

| Option      | Description                                                                       | Default |
| ----------- | --------------------------------------------------------------------------------- | ------- |
| `precision` | A precisão do número. O valor pode ser `false` ou um número inteiro não negativo. | false   |
| `delimiter` | O delimitador de casa de milhares                                                 | ,       |
| `separator` | O separador entre os dígitos fracionários e inteiros.                             | .       |

**Examples:**

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

Inserts [generator tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta).

```js
<%- meta_generator() %>
```

**Examples:**

```js
<%- meta_generator() %>
// <meta name="generator" content="Hexo 4.0.0">
```

### open_graph

Insere dados do [Open Graph][].

```js
<%- open_graph([options]) %>
```

| Option          | Description                                          | Default                                                     |
| --------------- | ---------------------------------------------------- | ----------------------------------------------------------- |
| `title`         | Título da página (`og:title`)                        | `page.title`                                                |
| `type`          | Tipo de página (`og:type`)                           | article(post page)<br>website(non-post page)          |
| `url`           | URL da página (`og:url`)                             | `url`                                                       |
| `image`         | Capa da página (`og:image`)                          | All images in the content                                   |
| `author`        | Article author (`og:article:author`)                 | `config.author`                                             |
| `date`          | Article published time (`og:article:published_time`) | Page published time                                         |
| `updated`       | Article modified time (`og:article:modified_time`)   | Page modified time                                          |
| `language`      | Article language (`og:locale`)                       | `page.lang \|\| page.language \|\| config.language`     |
| `site_name`     | Nome do site (`og:site_name`)                        | `config.title`                                              |
| `description`   | Descrição da página (`og:description`)               | Trecho da página ou os 200 primeiros caracteres do conteúdo |
| `twitter_card`  | Tipo de Twitter card (`twitter:card`)                | summary                                                     |
| `twitter_id`    | Twitter ID (`twitter:creator`)                       |                                                             |
| `twitter_site`  | Site do Twitter (`twitter:site`)                     |                                                             |
| `twitter_image` | Exemplo:                                             |                                                             |
| `google_plus`   | Link de perfil do Google+                            |                                                             |
| `fb_admins`     | ID de administrador do Facebook                      |                                                             |
| `fb_app_id`     | ID da aplicação do Facebook                          |                                                             |

### toc

Analisa todas as tags de título (h1~h6) no conteúdo e insere um índice.

```js
<%- toc(str, [options]) %>
```

| Option                  | Description                              | Default           |
| ----------------------- | ---------------------------------------- | ----------------- |
| `class`                 | Nome da classe                           | `toc`             |
| `class_item` (+6.3.0)   | Descrição                                | `${class}-item`   |
| `class_link` (+6.3.0)   | Descrição                                | `${class}-link`   |
| `class_text` (+6.3.0)   | Descrição                                | `${class}-text`   |
| `class_child` (+6.3.0)  | Nome da classe                           | `${class}-child`  |
| `class_number` (+6.3.0) | Padrão                                   | `${class}-number` |
| `class_level` (+6.3.0)  | Critério de ordenação de tags            | `${class}-level`  |
| `list_number`           | Exibe o número da lista                  | true              |
| `max_depth`             | Profundidade máxima do cabeçalho gerado  | 6                 |
| `min_depth`             | Minimum heading depth of generated toc   | 1                 |
| `max_items` (+7.3.0)    | Maximum number of items in generated toc | `Infinity`        |

**Examples:**

```js
<%- toc(page.content) %>
```

#### data-toc-unnumbered (+6.1.0)

Headings with attribute `data-toc-unnumbered="true"` will be marked as unnumbered (list number will not be display).

{% note warn "Warning!" %}
For using `data-toc-unnumbered="true"`, the renderer must have the option to add CSS classes.

Please see below PRs.

- https://github.com/hexojs/hexo/pull/4871
- https://github.com/hexojs/hexo-util/pull/269
- https://github.com/hexojs/hexo-renderer-markdown-it/pull/174
  {% endnote %}

[color keywords]: http://www.w3.org/TR/css3-color/#svg-color
[Moment.js]: http://momentjs.com/
[Open Graph]: http://ogp.me/
