title: Variáveis
---
### Variáveis globais

Variáveis | Descrição | Tipo
--- | --- | ---
`site` | Informações do site. | `object`; veja [Variáveis do site]
`page` | Informações específicas da página e personalização de variáveis definidas no front. | `object`; veja [Página Variáveis]
`config` | Configuração do site. | `object` (seu site arquivo _config)
`theme` | Configuração de tema. Herda configuração do site. | `object` (seu arquivo de tema _config)
`_` (underscore) | Biblioteca Lodash | Veja [Lodash](https://lodash.com/) documentação
`path` | Path of current page | `string`
`url` | URL completo da página atual | `string`
`env` | Variáveis de ambiente | ???

### Variáveis do site

Variáveis | Descrição | Tipo
--- | --- | ---
`site.posts` | Todos os posts | `array` de `post` objetos
`site.pages` | Todas as páginas | `array` de `page` objetos
`site.categories` | Todas as categorias | `array` de ???
`site.tags` | Todas as tags | `array` de ???

### Variáveis da página

**Artigo (`page`)**

Variáveis | Descrição | Tipo
--- | --- | ---
`page.title` | Artigo título | `string`
`page.date` | Data de criação do artigo | [Moment.js] objeto
`page.updated` | Data da última atualização do artigo | [Moment.js] object
`page.comments` | Comentário habilitado ou não | `boolean`
`page.layout` | Nome do layout | `string`
`page.content` | O conteúdo completo processado do artigo | `string`
`page.excerpt` | Trecho do artigo| `string`
`page.more` | Conteúdo exceto trecho do artigo | `string`
`page.source` | O caminho do arquivo de origem | `string`
`page.full_source` | Caminho completo do arquivo de origem | `string`
`page.path` | O URL do artigo sem URL de raiz. Usamos geralmente `url_for(page.path)` no tema. | `string`
`page.permalink` | URL completo do artigo | `string`
`page.prev` | O post anterior, `null` se for o primeiro post | ???
`page.next` | O próximo post, `null` se for o primeiro post | ???
`page.raw` | Os dados brutos do artigo | ???
`page.photos` | As fotos do artigo (Usado em posts da galeria) | array de ???
`page.link` | O link externo do artigo (Usado em postagens de link) | `string`


**Post (`post`):** O mesmo que o layout `page` mas adicione as seguintes variáveis.

Variáveis | Descrição | Tipo
--- | --- | ---
`page.published` | Verdadeiro se a postagem não for um rascunho | `boolean`
`page.categories` | Todas as categorias da postagem | `array` de ???
`page.tags` | Todas as tags da postagem | `array` de ???

**Home (`index`)**

Variáveis | Descrição | Tipo
--- | --- | ---
`page.per_page` | Publicações exibidas por página | `number`
`page.total` | Número total de páginas | `number`
`page.current` | Número da página atual | `number`
`page.current_url` | O URL da página atual | `string`
`page.posts` | Postagens nesta página ([Modelo de dados]) | ??? (O que é o Data Model?)
`page.prev` | Número da página anterior. `0` se a página atual for a primeira. | `number`
`page.prev_link` | O URL da página anterior. `''` se a página atual for a primeira. | `string`
`page.next` | Número da página seguinte. `0` se a página atual for a última. | `number`
`page.next_link` | O URL da próxima página. `''` se a página atual for a última. | `string`
`page.path` | O URL da página atual sem URL de raiz. Costumamos usar `url_for(page.path)` no tema. | `string`

**Arquivo (`archive`):** O mesmo que o layout do "index", mas adicione as seguintes variáveis.

Variáveis | Descrição | Tipo
--- | --- | ---
`page.archive` | Igual a `true` | `boolean`
`page.year` | Ano do arquivo (4-digitos) | `number`
`page.month` | Mês do arquivo (2 dígitos sem zeros à frente) | `number`

**Categoria (`category`):** O mesmo que o layout do `index` mas adicione as seguintes variáveis.

Variáveis | Descrição | Tipo
--- | --- | ---
`page.category` | Nome da categoria | `string`

**Tag (`tag`):** O mesmo que o layout do `index` mas adicione as seguintes variáveis.

Variáveis | Descrição | Tipo
--- | --- | ---
`page.tag` | Tag nome | `string`

[Moment.js]: http://momentjs.com/
[Site Variables]: #Site-Variables
[Page Variables]: #Page-Variables
