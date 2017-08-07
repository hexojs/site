title: Tag Plugins
---
Os plugins de tags são diferentes das tags de postagem. Eles são portados pela Octopress e fornecem uma maneira útil para você adicionar rapidamente conteúdo específico às suas postagens.

## Block Quote

Perfeito para adicionar citações à sua postagem, com informações autorais, de origem e de título opcionais.

**Alias:** quote

```
{% blockquote [author[, source]] [link] [source_link_title] %}
conteúdo
{% endblockquote %}
```

### Exemplos

**Sem argumentos. Simples blockquote.**

```
{% blockquote %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit lacus ut purus iaculis feugiat. Sed nec tempor elit, quis aliquam neque. Curabitur sed diam eget dolor fermentum semper at eu lorem.
{% endblockquote %}
```

{% blockquote %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit lacus ut purus iaculis feugiat. Sed nec tempor elit, quis aliquam neque. Curabitur sed diam eget dolor fermentum semper at eu lorem.
{% endblockquote %}

**Citação de um livro**

```
{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}
```

{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}

**Citação de um twitter**

```
{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
NEW: DevDocs now comes with syntax highlighting. http://devdocs.io
{% endblockquote %}
```

{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
NEW: DevDocs now comes with syntax highlighting. http://devdocs.io
{% endblockquote %}

**Citação de um artigo da web**

```
{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}
```

{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}

## Bloco de código

Funcionalidade útil para adicionar trechos de código à sua postagem.


**Alias:** code

```
{% codeblock [title] [lang:language] [url] [link text] %}
code snippet
{% endcodeblock %}
```

### Exemplos

**Um bloco de código simples**

```
{% codeblock %}
alert('Hello World!');
{% endcodeblock %}
```

{% codeblock %}
alert('Hello World!');
{% endcodeblock %}

**Linguagem específica**

```
{% codeblock lang:objc %}
[rectangle setX: 10 y: 10 width: 20 height: 20];
{% endcodeblock %}
```

{% codeblock lang:objc %}
[rectangle setX: 10 y: 10 width: 20 height: 20];
{% endcodeblock %}

**Adicionando uma legenda ao código**

```
{% codeblock Array.map %}
array.map(callback[, thisArg])
{% endcodeblock %}
```

{% codeblock Array.map %}
array.map(callback[, thisArg])
{% endcodeblock %}

**Adicionando uma legenda ao código e URL**

```
{% codeblock _.compact http://underscorejs.org/#compact Underscore.js %}
_.compact([0, 1, false, 2, '', 3]);
=> [1, 2, 3]
{% endcodeblock %}
```

{% codeblock _.compact http://underscorejs.org/#compact Underscore.js %}
_.compact([0, 1, false, 2, '', 3]);
=> [1, 2, 3]
{% endcodeblock %}

## Bloco de Código de Backtick

Isso é idêntico ao usar um bloco de código, mas usa três backticks para delimitar o bloco.

{% raw %}
&#96`` [language] [title] [url] [link text]
code snippet
&#96;``
{% endraw %}

## Pull Quote

Para adicionar dicas sobre as suas postagens:

```
{% pullquote [class] %}
content
{% endpullquote %}
```

## jsFiddle

Para incorporar um snippet jsFiddle:

```
{% jsfiddle shorttag [tabs] [skin] [width] [height] %}
```

## Gist

Para incorporar um trecho Gist:

```
{% gist gist_id [filename] %}
```

## iframe

Para incorporar um iframe:

```
{% iframe url [width] [height] %}
```

## Imagem

Insere uma imagem com tamanho especificado.

```
{% img [class names] /path/to/image [width] [height] [title text [alt text]] %}
```

## Link

Insere um link com o atributo `target="_blank"`.

```
{% link text url [external] [title] %}
```

## Incluir código

Insere fragmentos de código na pasta `source/downloads/code`.

```
{% include_code [title] [lang:language] path/to/file %}
```

## YouTube

Insere um vídeo do YouTube.

```
{% youtube video_id %}
```

## Vimeo

Insere um vídeo do Vimeo.

```
{% vimeo video_id %}
```

## Incluir postagens

Inclua links para outras postagens.

```
{% post_path slug %}
{% post_link slug [title] %}
```

## Incluir Assets

Incluir posts ativos.

```
{% asset_path slug %}
{% asset_img slug [title] %}
{% asset_link slug [title] %}
```

## Raw

Se determinado conteúdo estiver causando problemas de processamento em suas postagens, envolva-o com a tag `raw` para evitar erros de renderização.

```
{% raw %}
content
{% endraw %}
```
