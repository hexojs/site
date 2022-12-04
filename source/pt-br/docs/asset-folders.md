---
title: Diretórios de Recursos (Asset)
---
## Diretório Global de Recursos

Os recursos, ou assets, são arquivos (imagens, CSS, JavaScript e etc) usados para compor as páginas do site. No Hexo, os recursos ficam dentro do diretório `source`. Por exemplo, se você só vai ter algumas imagens no projeto Hexo, então a maneira mais fácil é mantê-las em um diretório como `source/images`. Então, você pode acessá-las usando algo como `![](images/image.jpg)`.

## Diretório de Recursos por Postagem

{% youtube feIDVQ2tz0o %}

Para os usuários que esperam exibir imagens e/ou outros recursos regularmente, e para aqueles que preferem separar seus recursos por publicação, o Hexo também fornece uma maneira mais organizada de fazer este gerenciamento. Para ativar o gerenciamento de recursos por publicação, defina a configuração `post_asset_folder` no arquivo `_config.yml` como o valor `true`.

``` yaml _config.yml
post_asset_folder: true
```

Com o gerenciamento de recursos habilitado, o Hexo criará um diretório sempre que você fizer uma nova postagem com o comando `hexo new [layout] <title>`. Este diretório de recursos terá o mesmo nome que o arquivo markdown associado à postagem. Coloque todos os recursos relacionados à sua postagem no diretório associado, e você poderá fazer referência a eles usando um caminho relativo, tornando mais fácil e conveniente o fluxo de trabalho.

## Tag Plugins para Referência ao Caminho Relativo

Referenciar imagens, ou outros recursos, usando a sintaxe normal do markdown e com caminhos relativos pode fazer com que elas sejam exibidas incorretamente em páginas de arquivo (archive) ou índice. Alguns plugins foram criados pela comunidade para abordar esta questão no Hexo 2. No entanto, com o lançamento do Hexo 3, várias novas [tag plugins](/docs/tag-plugins#Include-Assets) foram adicionadas ao seu núcleo. Estas permitem que você faça referência aos seus recursos nas postagens de formas mais facilitada:

```
{% asset_path slug %}
{% asset_img slug [title] %}
{% asset_link slug [title] %}
```

Por exemplo, com os diretórios de recursos de postagem ativados, se você colocar uma imagem `example.jpg` no seu diretório de recursos, ela *não* aparecerá na página de índice se você fizer referência a ela usando um caminho relativo com a expressão `![](example.jpg)` da sintaxe do markdown (no entanto, isto funcionará como esperado na publicação em si).

A maneira correta de fazer referência à imagem será usando a sintaxe de tag plugin em vez do markdown:

```
{% asset_img example.jpg This is an example image %}
{% asset_img "spaced asset.jpg" "spaced title" %}
```

Desta forma, a imagem aparecerá dentro da publicação e nas páginas de índice e arquivo.

## Embedding an image using markdown

[hexo-renderer-marked](https://github.com/hexojs/hexo-renderer-marked) 3.1.0 introduced a new option that allows you to embed an image in markdown without using `asset_img` tag plugin.

To enable:

``` yml _config.yml
post_asset_folder: true
marked:
  prependRoot: true
  postAsset: true
```

Once enabled, an asset image will be automatically resolved to its corresponding post's path. For example, "image.jpg" is located at "/2020/01/02/foo/image.jpg", meaning it is an asset image of "/2020/01/02/foo/" post, `![](image.jpg)` will be rendered as `<img src="/2020/01/02/foo/image.jpg">`.
