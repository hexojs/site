---
title: Escrevendo
---

{% youtube AIqBubK6ZLc %}

Para criar uma nova postagem ou uma nova página, você pode rodar o seguinte comando:

``` bash
$ hexo new [layout] <title>
```

O `layout` padrão é o `post`, mas você pode fornecer o seu próprio. Você pode alterar o layout padrão editando a configuração `default_layout` em `_config.yml`.

### Layout

Existem três layouts padrões no Hexo: `post`, `page` e `draft`. Os arquivos criados por cada um deles são salvos em um caminho diferente. As postagens criadas recentemente são salvas no diretório `source/_posts`.

Layout | Caminho
--- | ---
`post` | `source/_posts`
`page` | `source`
`draft` | `source/_drafts`

{% note tip Disabling layout %}
If you don't want an article (post/page) to be processed with a theme, set `layout: false` in its front-matter. Refer to [this section](/docs/front-matter#Layout) for more details.
{% endnote %}

### Nome de Arquivo

Por padrão, o Hexo usa o título da postagem como seu nome de arquivo. Você pode editar a configuração `new_post_name` em `_config.yml` para alterar o nome do arquivo padrão. Por exemplo, `:year-:month-:day-:title.md` prefixará nomes de arquivos com a data de criação de postagem. Você pode usar os seguintes placeholders:

Placeholder | Descrição
--- | ---
`:title` | Título do post (minúsculas, com espaços substituídos por hifens)
`:year` | Ano de criação, ex: `2015`
`:month` | Mês de criação (com zero à esquerda), ex: `04`
`:i_month` | Mês de criação (sem zero à esquerda), ex: `4`
`:day` | Dia de criação (com zero à esquerda), ex: `07`
`:i_day` | Dia de criação (sem zero à esquerda), ex: `7`

### Rascunhos

Anteriormente, mencionamos um layout especial no Hexo: `draft`. As postagens inicializadas com este layout são salvas no diretório `source/_drafts`. Você pode usar o comando `publish` para mover os rascunhos para o diretório `source/_posts`. O comando `publish` funciona de forma semelhante ao comando `new`.

``` bash
$ hexo publish [layout] <title>
```

Os rascunhos não são exibidos por padrão. Você pode adicionar a opção `--draft` ao executar o Hexo ou habilitar a configuração `render_drafts` em `_config.yml` para renderizar rascunhos.

### Scaffolds

Ao criar postagens, o Hexo irá construir arquivos com base no arquivo correspondente no diretório `scaffolds`. Por exemplo:

``` bash
$ hexo new photo "My Gallery"
```

Quando você executa este comando, o Hexo tentará encontrar `photo.md` no diretório `scaffolds` e criar a postagem com base nele. Os seguintes placeholders estão disponíveis em scaffolds:

Placeholder | Descrição
--- | ---
`layout` | Layout
`title` | Título
`date` | Data de criação do arquivo

### Supported Formats

Hexo support posts written in any format, as long as the corresponding renderer plugin is installed.

For example, Hexo has `hexo-renderer-marked` and `hexo-renderer-ejs` installed by default, so you can write your posts in `markdown` or in `ejs`. If you have `hexo-renderer-pug` installed, then you can even write your post in pug template language.

You can rename your posts and change to file extension from `.md` to `.ejs`, then Hexo will use `hexo-renderer-ejs` to render that file, so do the other formats.
