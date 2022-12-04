---
title: Variáveis
---

{% youtube T9oAax-IRw0 %}

### Variáveis Globais

Variável | Descrição | Tipo
--- | --- | ---
`site` | Informações do site. | `object`; veja [Variáveis do Site]
`page` | Informações específicas da página e  variáveis personalizadas definidas no front-matter. | `object`; veja [Variáveis da Página]
`config` | Configuração do site. | `object` (arquivo `_config` do seu site)
`theme` | Configuração do tema. Herda a configuração do site. | `object` (arquivo `_config` do seu tema)
`path` | Caminho da página atual | `string`
`url` | URL completa da página atual | `string`
`env` | Variáveis de ambiente | ???

{% note warn %}
Lodash has been removed from global variables since Hexo 5.0.0. [You-Dont-Need-Lodash-Underscore](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore) might be helpful for your migration.
{% endnote %}

### Variáveis do Site

Variável | Descrição | Tipo
--- | --- | ---
`site.posts` | Todos as postagens | `array` de objetos `post`
`site.pages` | Todas as páginas | `array` de objetos `page`
`site.categories` | Todas as categorias | `array` de ???
`site.tags` | Todas as tags | `array` de ???

### Variáveis da Página

**Artigo (`page`)**

Variável | Descrição | Tipo
--- | --- | ---
`page.title` | Título do artigo | `string`
`page.date` | Data de criação do artigo | [Moment.js] objeto
`page.updated` | Data da última atualização do artigo | [Moment.js] object
`page.comments` | Comentário habilitado ou não | `boolean`
`page.layout` | Nome do layout | `string`
`page.content` | O conteúdo completo processado do artigo | `string`
`page.excerpt` | Trecho do artigo| `string`
`page.more` | Conteúdo exceto trecho do artigo | `string`
`page.source` | O caminho do arquivo de fontes | `string`
`page.full_source` | Caminho completo do arquivo de fontes | `string`
`page.path` | A URL do artigo sem a URL raiz. Usamos geralmente `url_for(page.path)` no tema. | `string`
`page.permalink` | URL completa do artigo | `string`
`page.prev` | A postagem anterior, `null` se for a primeira postagem | ???
`page.next` | A próxima postagem, `null` se for a última postagem | ???
`page.raw` | Os dados brutos do artigo | ???
`page.photos` | As fotos do artigo (Usado em postagens de galeria) | array de ???
`page.link` | O link externo do artigo (Usado em postagens de link) | `string`

**Post (`post`):** O mesmo que o layout `page` mas adicione as seguintes variáveis.

Variável | Descrição | Tipo
--- | --- | ---
`page.published` | Verdadeiro se a postagem não for um rascunho | `boolean`
`page.categories` | Todas as categorias da postagem | `array` de ???
`page.tags` | Todas as tags da postagem | `array` de ???

**Home (`index`)**

Variável | Descrição | Tipo
--- | --- | ---
`page.per_page` | Postagens exibidas por página | `number`
`page.total` | Número total de páginas | `number`
`page.current` | Número da página atual | `number`
`page.current_url` | A URL da página atual | `string`
`page.posts` | Posts in this page ([Data Model](https://hexojs.github.io/warehouse/)) |
`page.prev` | Número da página anterior. `0` se a página atual for a primeira. | `number`
`page.prev_link` | A URL da página anterior. `''` se a página atual for a primeira. | `string`
`page.next` | Número da próxima página. `0` se a página atual for a última. | `number`
`page.next_link` | A URL da próxima página. `''` se a página atual for a última. | `string`
`page.path` | A URL da página atual sem URL raiz. Costumamos usar `url_for(page.path)` no tema. | `string`

**Arquivo (`archive`):** O mesmo que o layout do `index`, mas adicione as seguintes variáveis.

Variável | Descrição | Tipo
--- | --- | ---
`page.archive` | Igual a `true` | `boolean`
`page.year` | Ano do arquivo (4 - dígitos) | `number`
`page.month` | Mês do arquivo (2 dígitos sem zeros à esquerda) | `number`

**Categoria (`category`):** O mesmo que o layout do `index` mas adicione as seguintes variáveis.

Variável | Descrição | Tipo
--- | --- | ---
`page.category` | Nome da categoria | `string`

**Tag (`tag`):** O mesmo que o layout do `index` mas adicione as seguintes variáveis.

Variável | Descrição | Tipo
--- | --- | ---
`page.tag` | Nome da tag | `string`

[Moment.js]: http://momentjs.com/
[Variáveis do Site]: #Variaveis-do-Site
[Variáveis da Página]: #Variaveis-da-Pagina
