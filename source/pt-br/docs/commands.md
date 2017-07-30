title: Commands
---
## init

``` bash
$ hexo init [folder]
```
Inicializa um website. Se não existir `folder`, o Hexo configurará o sita no diretório atual.

## new

``` bash
$ hexo new [layout] <title>
```

Cria um novo artigo. Se nenhum `layout` for fornecido, o Hexo usará o `default_layout` de [_config.yml](configuration.html). e o `title` contiver espaços, rode-o com aspas.

## generate

``` bash
$ hexo generate
```

Gera arquivos estáticos.

Opção | Descrição
--- | ---
`-d`, `--deploy` | Deploy após a conclusão da geração
`-w`, `--watch` | Assiste alterações no aquivo

## publish

``` bash
$ hexo publish [layout] <filename>
```

Publica um rascunho

## server

``` bash
$ hexo server
```

Inicia um servidor local. Por padrão, o local é `http://localhost:4000/`.

Opção | Descrição
--- | ---
`-p`, `--port` | Substituir a porta padrão
`-s`, `--static` | Somente serve arquivos estáticos
`-l`, `--log` | Ativar logger. Substitui o formato do logger.

## deploy

``` bash
$ hexo deploy
```

Implementa o site.

Opção | Descrição
--- | ---
`-g`, `--generate` | Gerar antes do deploy

## render

``` bash
$ hexo render <file1> [file2] ...
```

Renderiza arquivos.

Opção | Descrição
--- | ---
`-o`, `--output` | Destino de saída

## migrate

``` bash
$ hexo migrate <type>
```

[Migração](migration.html) conteúdo de outros sistemas de blog.

## clean

``` bash
$ hexo clean
```

Limpa o arquivo de cache (`db.json`) e os arquivos gerados (`public`).

## list

``` bash
$ hexo list <type>
```

Lista todas as rotas

## version

``` bash
$ hexo version
```

Exibe informações de versão.

## Opções

### Modo safe

``` bash
$ hexo --safe
```

Desativa o carregamento de plugins e scripts. Tente isso se você encontrar problemas depois de instalar um novo plugin.

### Modo debug

``` bash
$ hexo --debug
```

Registra mensagens detalhadas para o terminal e para  `debug.log`. Tente isso se você encontrar algum problema com o Hexo. Se você vir erros, por favor [crie uma GitHub issue](https://github.com/hexojs/hexo/issues/new).

### Modo silent

``` bash
$ hexo --silent
```

Silencia a saída para o terminal.

### Personaliza o caminho do arquivo de configuração

``` bash
$ hexo --config custom.yml
```

Usa um arquivo de configuração personalizado (em vez de `_config.yml`). Aambém aceita uma lista separada por vírgulas (sem espaços) de arquivos de configuração JSON ou YAML que combinará os arquivos em um único `_multiconfig.yml`.

``` bash
$ hexo --config custom.yml,custom2.json
```

### Display drafts

``` bash
$ hexo --draft
```

Exibe os rascunhos (armazenados na pasta `source/_drafts`).

### Customizando CWD

``` bash
$ hexo --cwd /path/to/cwd
```

Personaliza o caminho do diretório de trabalho atual.
