title: Migração
---
## RSS

Primeiro, instale o `hexo-migrator-rss` plugin.

``` bash
$ npm install hexo-migrator-rss --save
```

Uma vez que o plugin esteja instalado, execute o seguinte comando para migrar todas as mensagens do RSS. `source` pode ser um caminho de arquivo ou URL.

``` bash
$ hexo migrate rss <source>
```

## Jekyll

Mova todos os arquivos na pasta Jekyll `_posts` para a pasta `source/_posts` folder.

Modifique a configuração `new_post_name` em `_config.yml`:

``` yaml
new_post_name: :year-:month-:day-:title.md
```

## Octopress

Mova todos os arquivos na pasta `source/_posts` do Octopress para `source/_posts`

Modifique a configuração `new_post_name` em `_config.yml`:

``` yaml
new_post_name: :year-:month-:day-:title.md
```

## WordPress

Primeiro, instale o plugin `hexo-migrator-wordpress`.

``` bash
$ npm install hexo-migrator-wordpress --save
```

Exporte o seu site WordPress indo para ""Ferramentas" → "Exportar" → "WordPress" no painel do WordPress (veja a [página de suporte do WordPress](http://en.support.wordpress.com/export/) fpara mais detalhes).

Agora rode:

``` bash
$ hexo migrate wordpress <source>
```

Onde `source` é o caminho do arquivo ou URL para o arquivo de exportação do WordPress.

## Joomla

Primeiro, instale o plugin `hexo-migrator-joomla`.

```bash
$ npm install hexo-migrator-joomla --save
```

Exporte seus artigos Joomla usando o [J2XML](http://extensions.joomla.org/extensions/migration-a-conversion/data-import-a-export/12816?qh=YToxOntpOjA7czo1OiJqMnhtbCI7fQ%3D%3D) component.

Agora rode:

```bash
$ hexo migrate joomla <source>
```

Onde `source` é o caminho do arquivo ou URL para o arquivo de exportação Joomla.
