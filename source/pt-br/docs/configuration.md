---
title: Configuração
---

Você pode modificar as configurações do site em `_config.yml` ou em um [arquivo de configuração alternativo](#Usando-uma-Configuracao-Alternativa).

### Site

Configuração | Descrição
--- | ---
`title` | O título do seu site
`subtitle` | O subtítulo do seu site
`description` | A descrição do seu site
`author` | Seu nome
`language` | O idioma do seu site. Use a [2-lettter ISO-639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). O padrão é `en`.
`timezone` | O fuso horário do seu site. O Hexo usa a configuração do seu computador por padrão. Você pode encontrar a lista de fusos horários disponíveis [aqui](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). Alguns exemplos são `America/New_York`, `Japan` e `UTC`.

### URL

Configuração | Descrição | Padrão
--- | --- | ---
`url` | A URL do seu site |
`root` | O diretório raiz do seu site |
`permalink` | O formato de [permalink](permalinks.html) dos artigos | `:year/:month/:day/:title/`
`permalink_defaults` | Valores padrão de cada segmento no permalink |

{% note info Site em subdiretório %}
Se o seu site estiver em um subdiretório (como por exemplo `http://example.org/blog`) defina `url` para `http://example.org/blog` e defina `root` para `/blog/`.
{% endnote %}

### Diretório

Configuração | Descrição | Padrão
--- | --- | ---
`source_dir` | Diretório dos fonte. Onde seu conteúdo está armazenado | `source`
`public_dir` | Diretório dos arquivos públicos. Onde o site estático será gerado | `public`
`tag_dir` | Diretório de tags | `tags`
`archive_dir` | Diretório de archives | `archives`
`category_dir` | Diretório de categorias | `categories`
`code_dir` | Diretório de código (subdiretório de `source_dir`) | `downloads/code`
`i18n_dir` | Diretório de internacionalização (i18n) | `:lang`
`skip_render` | Caminhos que não devem ser renderizados. Você pode usar [expressões globais](https://github.com/isaacs/minimatch) para fazer correspondência de caminho |

### Escrita

Configuração | Descrição | Padrão
--- | --- | ---
`new_post_name` | O formato do nome do arquivo para novas postagens | `:title.md`
`default_layout` | Layout padrão | `post`
`titlecase` | Transformar títulos em maiúsculo? | `false`
`external_link` | Abrir links externos em uma nova aba? | `true`
`filename_case` | Converter nomes de arquivos para minúsculos `1`; maiúsculos `2` | `0`
`render_drafts` | Exibir rascunhos? | `false`
`post_asset_folder` | Ativar o [diretório de Asset](asset-folders.html)? | `false`
`relative_link` | Links para o diretório raiz? | `false`
`future` | Exibir postagens futuras? | `true`
`highlight` | Configurações de bloco de código |

### Categoria & Tag

Configuração | Descrição | Padrão
--- | --- | ---
`default_category` | Categoria padrão | `uncategorized`
`category_map` | Mapa de Categoria |
`tag_map` | Mapa de Tag |

### Formato de Data / Hora

Hexo usa [Moment.js](http://momentjs.com/) para processar datas.

Configuração | Descrição | Padrão
--- | --- | ---
`date_format` | Formato de data | `YYYY-MM-DD`
`time_format` | Formado de hora | `HH:mm:ss`

### Paginação

Configuração | Descrição | Padrão
--- | --- | ---
`per_page` | A quantidade de postagens exibidas em uma única página. `0` desabilita paginação | `10`
`pagination_dir` | Diretório de paginação | `page`

### Extensões

Configuração | Descrição
--- | ---
`theme` | Nome do tema. `false` desabilita o tema
`theme_config` | Configuração do tema. Inclui quaisquer configurações de tema personalizado sob esta chave para substituir os padrões do tema.
`deploy` | Configurações de implantação

### Incluir/Excluir Arquivos ou Diretórios

No arquivo de configuração, defina a chave de include/exclude para que o hexo processe ou ignore, explicitamente, determinados arquivos/diretórios.

Configuração | Descrição
--- | ---
`include` | Por padrão, o Hexo ignora os arquivos e diretórios ocultos, mas configurar este campo fará com que o Hexo os processe também
`exclude` | O Hexo irá ignorar os arquivos e diretórios listados abaixo deste campo

Exemplo:
```yaml
# Incluir/Excluir Arquivos/Diretórios
include:
  - .nojekyll
exclude:
  - .DS_Store
```

### Usando uma Configuração Alternativa

Um arquivo de configuração personalizado pode ser especificado adicionando o sinalizador `--config` aos comandos do `hexo` com o caminho para o arquivo alternativo de configuração YAML ou JSON, ou até mesmo uma lista separada por vírgulas (sem espaços) de múltiplos arquivos YAML ou JSON.

``` bash
# usando 'custom.yml' no lugar de '_config.yml'
$ hexo server --config custom.yml

# usando 'custom.yml' e 'custom2.json', priorizando 'custom2.json'
$ hexo server --config custom.yml,custom2.json
```

O uso de vários arquivos combina todos os arquivos de configuração e salva as configurações mescladas para `_multiconfig.yml`. Os valores posteriores prevalecem. Este recurso funciona com qualquer quantidade de arquivos JSON e YAML com objetos arbitrariamente profundos. Observe que **nenhum espaço é permitido na lista**.

Por exemplo, no exemplo acima se `foo: bar` estiver em `custom.yml`, mas `"foo": "dinosaur"` estiver em `custom2.json`, `_multiconfig.yml` irá conter `foo: dinosaur`.

### Sobrescrevendo as Configurações do Tema

Os temas do Hexo são projetos independentes, com arquivos `_config.yml` separados.

Em vez de dar fork em um tema e manter uma branch personalizada com suas configurações, você pode configurá-lo a partir do arquivo de configuração principal do seu site.

Exemplo de configuração:

```yml
# _config.yml
theme_config:
  bio: "My awesome bio"
```

```yml
# themes/my-theme/_config.yml
bio: "Some generic bio"
logo: "a-cool-image.png"
```

Resultado da configuração do tema:

```json
{
  bio: "My awesome bio",
  logo: "a-cool-image.png"
}
```
