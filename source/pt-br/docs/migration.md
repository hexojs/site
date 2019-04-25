---
title: Migração
---
## RSS

Primeiramente, instale o plugin `hexo-migrator-rss`.

``` bash
$ npm install hexo-migrator-rss --save
```

Uma vez que o plugin esteja instalado, execute o seguinte comando para migrar todas as postagens do RSS. A opção `source` pode ser um caminho de arquivo ou uma URL.

``` bash
$ hexo migrate rss <source>
```

## Jekyll

Mova todos os arquivos no diretório `_posts` do Jekyll para o diretório `source/_posts`.

Modifique a configuração `new_post_name` no arquivo `_config.yml`:

``` yaml
new_post_name: :year-:month-:day-:title.md
```

## Octopress

Mova todos os arquivos do diretório `source/_posts` do Octopress para o diretório `source/_posts`.

Modifique a configuração `new_post_name` no arquivo `_config.yml`:

``` yaml
new_post_name: :year-:month-:day-:title.md
```

## WordPress

Primeiro, instale o plugin `hexo-migrator-wordpress`.

``` bash
$ npm install hexo-migrator-wordpress --save
```

Exporte o seu site WordPress indo para "Tools" → "Export" → "WordPress" (ou passos equivalentes para sites em WordPress configurados em um idioma diferente do inglês) no painel do WordPress (veja a [página de suporte do WordPress](http://en.support.wordpress.com/export/) para mais detalhes).

Agora execute:

``` bash
$ hexo migrate wordpress <source>
```

Onde `source` é o caminho do arquivo ou URL para o arquivo de exportação do WordPress.

## Joomla

Primeiro, instale o plugin `hexo-migrator-joomla`.

```bash
$ npm install hexo-migrator-joomla --save
```

Exporte seus artigos no Joomla usando o componente [J2XML](http://extensions.joomla.org/extensions/migration-a-conversion/data-import-a-export/12816?qh=YToxOntpOjA7czo1OiJqMnhtbCI7fQ%3D%3D).

Agora execute:

```bash
$ hexo migrate joomla <source>
```

Onde `source` é o caminho do arquivo ou URL para o arquivo de exportação do Joomla.
