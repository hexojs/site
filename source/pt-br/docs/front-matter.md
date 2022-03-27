---
title: Front-matter
---

{% youtube pfD6FCZdW4Q %}

Front-matter é um bloco de YAML ou JSON no início do arquivo que é usado para definir configurações para o conteúdo que será escrito (como páginas ou postagens). O Front-matter é terminado por três traços quando escrito em YAML ou três ponto e vírgula quando escrito em JSON.

**YAML**

``` yaml
---
title: Hello World
date: 2013/7/13 20:46:25
---
```

**JSON**

``` json
"title": "Hello World",
"date": "2013/7/13 20:46:25"
;;;
```

### Configurações e Seus Valores Padrão

Configuração | Descrição | Padrão
--- | --- | ---
`layout` | Layout | [`config.default_layout`](/pt-br/docs/configuration#Escrita)
`title` | Título | Filename (posts only)
`date` | Data de publicação | Data de criação do arquivo
`updated` | Data de atualização | Data de atualização do arquivo
`comments` | Habilita o recurso de comentário para a postagem | true
`tags` | Tags (Não disponível para páginas) |
`categories` | Categorias (Não disponível para páginas) |
`permalink` | Substitui o permalink padrão da postagem |
`excerpt` | Page excerpt in plain text. Use [this plugin](/docs/tag-plugins#Post-Excerpt) to format the text |
`disableNunjucks` | Disable rendering of Nunjucks tag `{{ }}`/`{% %}` and [tag plugins](/docs/tag-plugins) when enabled
`lang` | Set the language to override [auto-detection](/docs/internationalization#Path) | Inherited from `_config.yml`

#### Layout

The default layout is `post`, in accordance to the value of [`default_layout`]((/docs/configuration#Writing)) setting in `_config.yml`. When the layout is disabled (`layout: false`) in an article, it will not be processed with a theme. However, it will still be rendered by any available renderer: if an article is written in Markdown and a Markdown renderer (like the default [hexo-renderer-marked](https://github.com/hexojs/hexo-renderer-marked)) is installed, it will be rendered to HTML.

[Tag plugins](/docs/tag-plugins) are always processed regardless of layout, unless disabled by the `disableNunjucks` setting or [renderer](/api/renderer#Disable-Nunjucks-tags).

#### Categorias & Tags

Somente postagens aceitam o uso de categorias e tags. As categorias aplicam-se à postagens em ordem, resultando em uma hierarquia de classificações e subclassificações. As tags são todas definidas no mesmo nível hierárquico, de modo que a ordem em que aparecem não é importante.

**Exemplo**

``` yaml
categories:
- Sports
- Baseball
tags:
- Injury
- Fight
- Shocking
```

Se você quiser aplicar várias hierarquias de categorias, use uma lista de nomes em vez de um único nome. Se o Hexo encontar qualquer categoria definida dessa forma em uma postagem, ele tratará cada categoria para essa postagem com sua própria hierarquia independente.

**Exemplo**

``` yaml
categories:
- [Sports, Baseball]
- [MLB, American League, Boston Red Sox]
- [MLB, American League, New York Yankees]
- Rivalries
```
