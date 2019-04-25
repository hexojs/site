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
`layout` | Layout |
`title` | Título |
`date` | Data de publicação | Data de criação do arquivo
`updated` | Data de atualização | Data de atualização do arquivo
`comments` | Habilita o recurso de comentário para a postagem | true
`tags` | Tags (Não disponível para páginas) |
`categories` | Categorias (Não disponível para páginas) |
`permalink` | Substitui o permalink padrão da postagem |

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
