title: Front-matter
---

Front-matter é um bloco de YAML ou JSON no início do arquivo que é usado para configurar configurações para suas escritas. Front-matter é terminado por três traços quando escrito em YAML ou três ponto-e-vírgula quando escrito em JSON.

**YAML**
``` yaml
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

### Configurações e seus valores padrão

Configuração | Descrição | Default
--- | --- | ---
`layout` | Layout |
`title` | Title |
`date` | Data de publicação | Data criada no arquivo
`updated` | Data atualizada | Data atualizada do arquivo
`comments` | Habilita o recurso de comentário para a postagem | true
`tags` | Tags (Não disponível para páginas)
`categories` | Categorias (Não disponível para páginas) |
`permalink` | Substitui o permalink padrão da postagem |

#### Categorias & Tags

Somente posts aceitam o uso de categorias e tags. As categorias aplicam-se a postagens em ordem, resultando em uma hierarquia de classificações e sub-classificações. As tags são todas definidas no mesmo nível hierárquico, de modo que a ordem em que aparecem não é importante.

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
