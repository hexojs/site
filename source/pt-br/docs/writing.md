title: Escrevendo
---

Para criar um novo post ou uma nova página, você precisa rodar o seguinte comando:

``` bash
$ hexo new [layout] <title>
```

`post` é o `layout` padrão, mas você pode fornecer o seu próprio. Você pode alterar o layout padrão editando a configuração `default_layout` em` _config.yml`.

### Layout

Existem três layouts padrões no Hexo: `post`, `page` e `draft`. Os arquivos criados por cada um deles são salvos em um caminho diferente. As postagens criadas recentemente são salvas na pasta `source/_posts`.

Layout | Caminho
--- | ---
`post` | `source/_posts`
`page` | `source`
`draft` | `source/_drafts`

{% note tip Não processe minhas postagens! %}
    Se você não quer que suas postagens sejam processadas, você pode configurar `layout: false` na frente.
{% endnote %}

### Nome de arquivo

Por padrão, o Hexo usa o título da postagem como seu nome de arquivo. Você pode editar a configuração `new_post_name` em `_config.yml` para alterar o nome do arquivo padrão. Por exemplo, `: year-: month-: day-: title.md` prefixará nomes de arquivos com a data de criação de postagem. Você pode usar os seguintes espaços reservados:

Placeholder | Descrição
--- | ---
`:title` | Título do post (minúsculas, com espaços substituídos por hyphens)
`:year` | Ano criado, ex: `2015`
`:month` | Mês criado (zeros à esquerda), ex: `04`
`:i_month` | Mês criado (sem zeros), ex: `4`
`:day` | Dia criado (zeros à esquerda), ex: `07`
`:i_day` | Dia criado (sem zeros à esquerda), ex: `7`

### Rascunhos

Anteriormente, mencionamos um layout especial no Hexo: `draft`. As mensagens inicializadas com este layout são salvas na pasta `source / _drafts`. Você pode usar o comando `publish` para mover rascunhos para a pasta `source / _posts`. `publish` funciona de forma semelhante ao comando `new`.

``` bash
$ hexo publish [layout] <title>
```

Os rascunhos não são exibidos por padrão. Você pode adicionar a opção `--draft` ao executar o Hexo ou habilitar a configuração `render_drafts` em _config.yml` para renderizar rascunhos.

### Scaffolds

Ao criar postagens, a Hexo irá construir arquivos com base no arquivo correspondente na pasta `scaffolds`. Por exemplo:

``` bash
$ hexo new photo "My Gallery"
```

Quando você executa este comando, o Hexo tentará encontrar `photo.md` na pasta `scaffolds` e criar a postagem com base nela. Os seguintes espaços reservados estão disponíveis em andaimes:

Placeholder | Descrição
--- | ---
`layout` | Layout
`title` | Title
`date` | Data criada no arquivo
