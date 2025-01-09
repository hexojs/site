---
title: Comandos
---

## init

```bash
$ hexo init [folder]
```

Inicializa um website. Se não existir o diretório `folder`, o Hexo irá configurar o site no diretório atual.

This command is a shortcut that runs the following steps:

1. Git clone [hexo-starter](https://github.com/hexojs/hexo-starter) including [hexo-theme-landscape](https://github.com/hexojs/hexo-theme-landscape) into the current directory or a target folder if specified.
2. Install dependencies using a package manager: [Yarn 1](https://classic.yarnpkg.com/lang/en/), [pnpm](https://pnpm.js.org) or [npm](https://docs.npmjs.com/cli/install), whichever is installed; if there are more than one installed, the priority is as listed. npm is bundled with [Node.js](/docs/#Install-Node-js) by default.

## new

```bash
$ hexo new [layout] <title>
```

Cria um novo artigo. Se nenhum `layout` for fornecido, o Hexo usará o `default_layout` de [\_config.yml](configuration.html). Use the layout `draft` to create a draft. Se o `title` contiver espaços, rode-o com aspas.

| Opção             | Descrição                                  |
| ----------------- | ------------------------------------------ |
| `-p`, `--path`    | Post path. Customize the path of the post. |
| `-r`, `--replace` | Replace the current post if existed.       |
| `-s`, `--slug`    | Post slug. Customize the URL of the post.  |

By default, Hexo will use the title to define the path of the file. For pages, it will create a directory of that name and an `index.md` file in it. Use the `--path` option to override that behaviour and define the file path:

```bash
hexo new page --path about/me "About me"
```

will create `source/about/me.md` file with the title "About me" set in the front matter.

Please note that the title is mandatory. For example, this will not result in the behaviour you might expect:

```bash
hexo new page --path about/me
```

will create the post `source/_posts/about/me.md` with the title "page" in the front matter. This is because there is only one argument (`page`) and the default layout is `post`.

## generate

```bash
$ hexo generate
```

Gera os arquivos estáticos.

| Opção                 | Descrição                                                                                              |
| --------------------- | ------------------------------------------------------------------------------------------------------ |
| `-d`, `--deploy`      | Deploy after generation finishes                                                                       |
| `-w`, `--watch`       | Watch file changes                                                                                     |
| `-b`, `--bail`        | Levanta um erro se qualquer exceção não tratada for lançada durante o processo de geração dos arquivos |
| `-f`, `--force`       | Regeneração forçada                                                                                    |
| `-c`, `--concurrency` | Maximum number of files to be generated in parallel. Default is infinity                               |

## publish

```bash
$ hexo publish [layout] <filename>
```

Publishes a draft.

## server

```bash
$ hexo server
```

Inicia um servidor local. Por padrão, o local é `http://localhost:4000/`.

| Opção            | Descrição                                       |
| ---------------- | ----------------------------------------------- |
| `-p`, `--port`   | Substituir a porta padrão                       |
| `-s`, `--static` | Somente serve arquivos estáticos                |
| `-l`, `--log`    | Ativar o logger. Substitui o formato do logger. |

## deploy

```bash
$ hexo deploy
```

Deploys your website.

| Opção              | Descrição                                   |
| ------------------ | ------------------------------------------- |
| `-g`, `--generate` | Gerar os arquivos estáticos antes do deploy |

## render

```bash
$ hexo render <file1> [file2] ...
```

Renderiza arquivos.

| Implanta o site. | Description      |
| ---------------- | ---------------- |
| `-o`, `--output` | Destino de saída |

## migrate

```bash
$ hexo migrate <type>
```

[Migração](migration.html) de conteúdo de outros sistemas de blog.

## clean

```bash
$ hexo clean
```

Limpa o arquivo de cache (`db.json`) e os arquivos gerados (`public`).

## list

```bash
$ hexo list <type>
```

Lista todas as rotas

## version

```bash
$ hexo version
```

Exibe informações de versão.

## config

```bash
$ hexo config [key] [value]
```

Lists the configuration (`_config.yml`). If `key` is specified, only the value of the corresponding `key` in the configuration is shown; if both `key` and `value` are specified, the value of the corresponding `key` in the configuration is changed to `value`.

## Opções

### Modo safe

```bash
$ hexo --safe
```

Desativa o carregamento de plugins e scripts. Tente isso se você encontrar problemas depois de instalar um novo plugin.

### Modo debug

```bash
$ hexo --debug
```

Registra mensagens detalhadas para o terminal e para o arquivo `debug.log`. Tente isso se você tiver algum problema com o Hexo. Se você encontrar erros, por favor [crie uma issue no GitHub](https://github.com/hexojs/hexo/issues/new).

### Modo silent

```bash
$ hexo --silent
```

Silencia a saída para no terminal.

### Caminho do arquivo de configuração personalizado

```bash
$ hexo --config custom.yml
```

Usa um arquivo de configuração personalizado (em vez de `_config.yml`). Também aceita uma lista separada por vírgulas (sem espaços) de arquivos de configuração JSON ou YAML que combinará os arquivos em um único `_multiconfig.yml`.

```bash
$ hexo --config custom.yml,custom2.json
```

### Mostra rascunhos

```bash
$ hexo --draft
```

Exibe os rascunhos (armazenados no diretório `source/_drafts`).

### Customizando CWD

```bash
$ hexo --cwd /path/to/cwd
```

Personaliza o caminho do diretório de trabalho atual.
