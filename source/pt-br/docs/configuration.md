title: Configuração
---
Você pode modificar as configurações do site em `_config.yml` ou em um [arquivo de configuração alternativo](#Using-an-Alternate-Config).
### Site

Configuração | Descriçao
--- | ---
`title` | O título do seu site
`subtitle` | O subtítulo do seu site
`description` | A descrição do seu site
`author` | Seu nome
`language` | O idioma do seu site. Use a [2-lettter ISO-639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). Padrão é `en`.
`timezone` | O fuso horário do seu site. O Hexo usa a configuração em seu computador por padrão. Você pode encontrar a lista de fuso horário disponível [aqui](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). Alguns exemplos são `America/New_York`, `Japan`, e `UTC`.

### URL

Configuração | Descriçao | Padrão
--- | --- | ---
`url` | A URL do seu site |
`root` | O diretório raiz do seu site |
`permalink` | O [permalink](permalinks.html) é o formato de artigos | `:year/:month/:day/:title/`
`permalink_defaults` | Valores padrão de cada segmento no permalink |

{% note info Website in subdirectory %}
Se o seu site estiver em um subdiretório (tal como `http://example.org/blog`) configure `url` em `http://example.org/blog` e configure `root` para `/blog/`.
{% endnote %}

### Diretório

Configuração | Descriçao | Padrão
--- | --- | ---
`source_dir` |  Pasta de origem. Onde seu conteúdo está armazenado | `source`
`public_dir` | Pasta pública. Onde o site estático será gerado | `public`
`tag_dir` | Diretório de tags | `tags`
`archive_dir` | Diretório de arquivo | `archives`
`category_dir` | Diretório de categorias | `categories`
`code_dir` | Incluir diretório de código | `downloads/code`
`i18n_dir` | Diretório i18n  | `:lang`
`skip_render` | Caminhos que não devem ser renderizados. Você pode usar [expressões regulares](https://github.com/isaacs/minimatch) para fazer correspondência de caminho |

### Escrevendo

Configuração | Descriçao | Padrão
--- | --- | ---
`new_post_name` | O formato do nome do arquivo para novas postagens | `:title.md`
`default_layout` | Layout padrão | `post`
`titlecase` | Transformar títulos em caso de título? | `false`
`external_link` | Abra links externos na nova guia? | `true`
`filename_case` | Transforme nomes de arquivos para `1` minúsculas; `2` maiúscula | `0`
`render_drafts` | Exibir rascunhos? | `false`
`post_asset_folder` | Ativar a [pasta asset](asset-folders.html)? | `false`
`relative_link` | Faça links para a pasta raiz? | `false`
`future` | Exibir postagens futuras?? | `true`
`highlight` | Configurações de bloco de código |

### Category & Tag

Configuração | Descriçao | Padrão
--- | --- | ---
`default_category` | Categoria padrão | `uncategorized`
`category_map` | Categoria de slugs |
`tag_map` | Tag slugs |

### Data / Formato de hora

Hexo usa [Moment.js](http://momentjs.com/) para processar datas.

Configuração | Descriçao | Padrão
--- | --- | ---
`date_format` | Formato de data | `YYYY-MM-DD`
`time_format` | Formado de hora | `HH:mm:ss`

### Paginação

Configuração | Descriçao | Padrão
--- | --- | ---
`per_page` | A quantidade de postagens exibidas em uma única página. `0` desabilita paginação | `10`
`pagination_dir` | Pagination directory | `page`

### Extensões

Configuração | Descriçao
--- | ---
`theme` | Nome do tema. `false` desabilita o tema
`deploy` | Configuração de implantação


### Incluir / Excluir arquivos ou pastas

No arquivo de configuração, defina a chave de include/exlude para que o hexo processe ou ignore explicitamente determinados arquivos / pastas.

Configuração | Descriçao
--- | ---
`include` | Hexo ignora os arquivos e pastas ocultos, mas configurar este campo fará com que o Hexo os processe também
`exclude` | O processo Hexo ignorará a lista de arquivos abaixo deste campo


Sample:
```yaml
# Include/Exclude Files/Folders
include:
  - .nojekyll
exclude:
  - .DS_Store
```

### Usango outras alternativas de configuração
Um caminho de arquivo de configuração personalizado pode ser especificado adicionando o sinalizador `--config` aos comandos `hexo` com um caminho para um arquivo de configuração YAML ou JSON alternativo ou uma lista separada por vírgulas (sem espaços) de múltiplos YAMLs ou JSON arquivos.

``` bash
# use 'custom.yml' in place of '_config.yml'
$ hexo server --config custom.yml

# use 'custom.yml' & 'custom2.json', prioritizing 'custom2.json'
$ hexo server --config custom.yml,custom2.json
```

Uso de vários arquivos combina todos os arquivos de configuração e salva as configurações mescladas para `_multiconfig.yml`.
Os valores posteriores prevalecem. Ele funciona com qualquer número de arquivos JSON e YAML com objetos arbitrariamente profundos. Observe que **nenhum espaço é permitido na lista**.

Por exemplo, no exemplo acima se `foo: bar` estiver em `custom.yml`, mas `"foo": "dinosaur"` está em `custom2.json`, `_multiconfig.yml` conterá `foo: dinosaur`.
