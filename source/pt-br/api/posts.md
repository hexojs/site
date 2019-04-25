---
title: Postagens
---

## Criar uma Postagem

``` js
hexo.post.create(data, replace);
```

Argumento | Descrição
--- | ---
`data` | Dados
`replace` | Substitui arquivos existentes

Os atributos de uma postagem podem ser definidos em `data`. A tabela abaixo inclui as informações mais importantes. Atributos adicionais podem vir a ser adicionados no [front-matter](front-matter.html).

Variável | Descrição
--- | ---
`title` | Título
`slug` | URL
`layout` | Layout. Usa a configuração `default_layout` como padrão.
`path` | Caminho. Por padrão, o Hexo constrói o caminho da postagem de acordo com a definição `new_post_path`.
`date` | Data. Utiliza a data atual como padrão.

## Publicar um Rascunho

``` js
hexo.post.publish(data, replace);
```

Argumento | Descrição
--- | ---
`data` | Dados
`replace` | Substitui arquivos existentes

Os atributos de uma postagem podem ser definidos em `data`. A tabela abaixo inclui as informações mais importantes. Atributos adicionais podem vir a ser adicionados no front-matter.

Dados | Descrição
--- | ---
`slug` | Nome do arquivo (Campo obrigatório)
`layout` | Layout. Usa a definição `default_layout` como padrão.

## Renderizar

``` js
hexo.post.render(source, data);
```

Argumento | Descrição
--- | ---
`source` | Caminho completo de um arquivo (Opcional)
`data` | Dados

O argumento `data` deve conter o atributo `content`. Caso não inclua, o Hexo tentará carregar o arquivo inicial. As etapas de execução dessa função são listadas abaixo:

- Executa os filtros de `before_post_render`
- Renderiza utilizando Markdown ou outros renderizadores (dependendo da extensão do arquivo)
- Renderiza utilizando [Nunjucks]
- Executa os filtros de `after_post_render`

[Nunjucks]: http://mozilla.github.io/nunjucks/
