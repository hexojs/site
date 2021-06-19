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
`keywords` | The keywords of your website. Supports multiple values.
`author` | Seu nome
`language` | O idioma do seu site. Use a [2-lettter ISO-639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). O padrão é `en`.
`timezone` | O fuso horário do seu site. O Hexo usa a configuração do seu computador por padrão. Você pode encontrar a lista de fusos horários disponíveis [aqui](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). Alguns exemplos são `America/New_York`, `Japan` e `UTC`.

### URL

Configuração | Descrição | Padrão
--- | --- | ---
`url` | A URL do seu site, must starts with `http://` or `https://` |
`root` | O diretório raiz do seu site | `url's pathname`
`permalink` | O formato de [permalink](permalinks.html) dos artigos | `:year/:month/:day/:title/`
`permalink_defaults` | Valores padrão de cada segmento no permalink |
`pretty_urls` | Rewrite the [`permalink`](variables.html) variables to pretty URLs |
`pretty_urls.trailing_index` | Trailing `index.html`, set to `false` to remove it  | `true`
`pretty_urls.trailing_html` | Trailing `.html`, set to `false` to remove it (_does not apply to trailing `index.html`_)  | `true`

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
`skip_render` | Caminhos que não devem ser renderizados. Você pode usar [expressões globais](https://github.com/micromatch/micromatch#extended-globbing) para fazer correspondência de caminho |

### Escrita

Configuração | Descrição | Padrão
--- | --- | ---
`new_post_name` | O formato do nome do arquivo para novas postagens | `:title.md`
`default_layout` | Layout padrão | `post`
`titlecase` | Transformar títulos em maiúsculo? | `false`
`external_link` | Abrir links externos em uma nova aba?
`external_link.enable` | Abrir links externos em uma nova aba? | `true`
`external_link.field` | Applies to the whole `site` or `post` only | `site`
`external_link.exclude` | Exclude hostname. Specify subdomain when applicable, including `www` | `[]`
`filename_case` | Converter nomes de arquivos para minúsculos `1`; maiúsculos `2` | `0`
`render_drafts` | Exibir rascunhos? | `false`
`post_asset_folder` | Ativar o [diretório de Asset](asset-folders.html)? | `false`
`relative_link` | Links para o diretório raiz? | `false`
`future` | Exibir postagens futuras? | `true`
`highlight` | Configurações de bloco de código, see [Highlight.js](/docs/syntax-highlight#Highlight-js) section for usage guide |
`prismjs` | Configurações de bloco de código, see [PrismJS](/docs/syntax-highlight#PrismJS) section for usage guide |

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
`updated_option` | The [`updated`](/pt-br/docs/variables#Variaveis-da-Pagina) value to used when not provided in the front-matter | `mtime`

{% note info updated_option %}
`updated_option` controls the `updated` value when not provided in the front-matter:

- `mtime`: Use file modification date as `updated`. It is the default behavior of Hexo since 3.0.0
- `date`: Use `date` as `updated`. Typically used with Git workflow when file modification date could be different.
- `empty`: Simply drop `updated` when not provided. May not be compatible with most themes and plugins.

`use_date_for_updated` is deprecated and will be removed in next major version. Please use `updated_option: 'date'` instead.
{% endnote %}

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
`meta_generator` | [Meta generator](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#Attributes) tag. `false` disables injection of the tag.

### Incluir/Excluir Arquivos ou Diretórios

No arquivo de configuração, defina a chave de include/exclude para que o hexo processe ou ignore, explicitamente, determinados arquivos/diretórios.

`include` and `exclude` options only apply to the `source/` folder, whereas `ignore` option applies to all folders.

Configuração | Descrição
--- | ---
`include` | Por padrão, o Hexo ignora os arquivos e diretórios ocultos, mas configurar este campo fará com que o Hexo os processe também
`exclude` | O Hexo irá ignorar os arquivos e diretórios listados abaixo deste campo
`ignore` | Ignore files/folders

Exemplo:

```yaml
# Incluir/Excluir Arquivos/Diretórios
include:
  - ".nojekyll"
  # Include 'source/css/_typing.css'.
  - "css/_typing.css"
  # Include any file in 'source/_css/'.
  - "_css/*"
  # Include any file and subfolder in 'source/_css/'.
  - "_css/**/*"

exclude:
  # Exclude 'source/js/test.js'.
  - "js/test.js"
  # Exclude any file in 'source/js/'.
  - "js/*"
  # Exclude any file and subfolder in 'source/js/'.
  - "js/**/*"
  # Exclude any file with filename that starts with 'test' in 'source/js/'.
  - "js/test*"
  # Exclude any file with filename that starts with 'test' in 'source/js/' and its subfolders.
  - "js/**/test*"
  # Do not use this to exclude posts in the 'source/_posts/'.
  # Use skip_render for that. Or prepend an underscore to the filename.
  # - "_posts/hello-world.md" # Does not work.

ignore:
  # Ignore any folder named 'foo'.
  - "**/foo"
  # Ignore 'foo' folder in 'themes/' only.
  - "**/themes/*/foo"
  # Same as above, but applies to every subfolders of 'themes/'.
  - "**/themes/**/foo"
```

Each value in the list must be enclosed with single/double quotes.

`include:` and `exclude:` do not apply to the `themes/` folder. Either use `ignore:` or alternatively, prepend an underscore to the file/folder name to exclude.

\* Notable exception is the `source/_posts` folder, but any file or folder with a name that starts with an underscore under that folder would still be ignored. Using `include:` rule in that folder is not recommended.

### Alternate Theme Config

Hexo themes are independent projects, with separate `_config.yml` files.

Instead of forking a theme, and maintaining a custom branch with your settings, you can configure it from somewhere else.

**`theme_config` in site's primary configuration file**

> Supported since Hexo 2.8.2

```yml
# _config.yml
theme: "my-theme"
theme_config:
  bio: "My awesome bio"
  foo:
    bar: 'a'
```

```yml
# themes/my-theme/_config.yml
bio: "Some generic bio"
logo: "a-cool-image.png"
  foo:
    baz: 'b'
```

Resulting in theme configuration:

```json
{
  bio: "My awesome bio",
  logo: "a-cool-image.png",
  foo: {
    bar: "a",
    baz: "b"
  }
}
```

**dedicated `_config.[theme].yml` file**

> Supported since Hexo 5.0.0

The file should be placed in your site folder, both `yml` and `json` are supported. `theme` inside `_config.yml` must be configured for Hexo to read `_config.[theme].yml`

```yml
# _config.yml
theme: "my-theme"
```

```yml
# _config.my-theme.yml
bio: "My awesome bio"
foo:
  bar: 'a'
```

```yml
# themes/my-theme/_config.yml
bio: "Some generic bio"
logo: "a-cool-image.png"
  foo:
    baz: 'b'
```

Resulting in theme configuration:

```json
{
  bio: "My awesome bio",
  logo: "a-cool-image.png",
  foo: {
    bar: "a",
    baz: "b"
  }
}
```

{% note %}
We strongly recommends you to store your theme configuration in one place. But in case you have to store your theme configuration separately, those information is quite important: The `theme_config` inside site's primary configuration file has the highest priority during merging, then the dedicated theme configuration file. the `_config.yml` file under the theme directory has the lowest priority.
{% endnote %}
