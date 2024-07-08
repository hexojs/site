---
title: Tag Plugins
---

As Tag Plugins são diferentes das tags de postagem. Elas são portadas pela Octopress e fornecem uma maneira útil para você adicionar rapidamente conteúdo específico às suas postagens.

Although you can write your posts in any formats, but the tag plugins will always be available and syntax remains the same.

{% youtube I07XMi7MHd4 %}

_Tag plugins should not be wrapped inside Markdown syntax, e.g. `[]({% post_path lorem-ipsum %})` is not supported._

## Bloco de Citação

Perfeito para adicionar citações à sua postagem, com informações opcionais de autor, fontes e título.

**Alias:** quote (citação)

```
{% blockquote [author[, source]] [link] [source_link_title] %}
content
{% endblockquote %}
```

### Examples

**Sem argumentos. Bloco de citação simples.**

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

## Bloco de Código

Funcionalidade útil para adicionar trechos de código à sua postagem.

**Alias:** code (Código-fonte)

```
{% codeblock [title] [lang:language] [url] [link text] [additional options] %}
code snippet
{% endcodeblock %}
```

Specify additional options in `option:value` format, e.g. `line_number:false first_line:5`.

| Extra Options    | Description                                                                                                                                                            | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `line_number`    | Show line number                                                                                                                                                       | `true`  |
| `line_threshold` | Only show line numbers as long as the numbers of lines of the code block exceed such threshold.                                                                        | `0`     |
| `highlight`      | Enable code highlighting                                                                                                                                               | `true`  |
| `first_line`     | Specify the first line number                                                                                                                                          | `1`     |
| `mark`           | Line highlight specific line(s), each value separated by a comma. Specify number range using a dash<br>Example: `mark:1,4-7,10` will mark line 1, 4 to 7 and 10. |         |
| `wrap`           | Wrap the code block in [`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)                                                              | `true`  |

### Examples

**Um bloco de código simples**

```
{% codeblock %}
alert('Hello World!');
{% endcodeblock %}
```

{% codeblock %}
alert('Hello World!');
{% endcodeblock %}

**Em uma linguagem específica**

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

**Adicionando uma legenda e uma URL**

```
{% codeblock _.compact http://underscorejs.org/#compact Underscore.js %}
_.compact([0, 1, false, 2, '', 3]);
=> [1, 2, 3]
{% endcodeblock %}
```

{% codeblock _.compact http://underscorejs.org/#compact Underscore.js %}
\_.compact([0, 1, false, 2, '', 3]); => [1, 2, 3]
{% endcodeblock %}

## Bloco de Código com Backtick

Isso é idêntico ao usar um bloco de código, mas usa três backticks (acentos grave) para delimitar o bloco.

{% raw %}
&#96`[language] [title] [url] [link text]
code snippet
&#96;`
{% endraw %}

## Pull Quote

Para adicionar pull quotes (citações destacadas) em sua postagem:

```
{% pullquote [class] %}
content
{% endpullquote %}
```

## jsFiddle

{% note warn %}
The tag was removed in Hexo 7.0.0. We have provided a plugin [hexo-tag-embed](https://github.com/hexojs/hexo-tag-embed) for backward compatibility with your existing posts.
{% endnote %}

Para incorporar um snippet (trecho de código) do jsFiddle:

```
{% jsfiddle shorttag [tabs] [skin] [width] [height] %}
```

## Gist (deleted in `v7.0.0`)

{% note warn %}
Please use [hexo-tag-embed](https://github.com/hexojs/hexo-tag-embed) instead if you use `v7.0.0+`.
{% endnote %}

Para incorporar um snippet (trecho de código) do Gist:

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
{% img [class names] /path/to/image [width] [height] '"title text" "alt text"' %}
```

## Link

Insere um link com o atributo `target="_blank"`.

```
{% link text url [external] [title] %}
```

## Incluir Código

Insere trechos de código no diretório `source/downloads/code`. The folder location can be specified through the `code_dir` option in the config.

```
{% include_code [title] [lang:language] [from:line] [to:line] path/to/file %}
```

### Examples

**Embed the whole content of test.js**

```
{% include_code lang:javascript test.js %}
```

**Embed line 3 only**

```
{% include_code lang:javascript from:3 to:3 test.js %}
```

**Embed line 5 to 8**

```
{% include_code lang:javascript from:5 to:8 test.js %}
```

**Embed line 5 to the end of file**

```
{% include_code lang:javascript from:5 test.js %}
```

**Embed line 1 to 8**

```
{% include_code lang:javascript to:8 test.js %}
```

## YouTube (deleted in `v7.0.0`)

{% note warn %}
Please use [hexo-tag-embed](https://github.com/hexojs/hexo-tag-embed) instead if you use `v7.0.0+`.
{% endnote %}

Insere um vídeo do YouTube.

```
{% youtube video_id [type] [cookie] %}
```

### Examples

**Embed a video**

```
{% youtube lJIrF4YjHfQ %}
```

**Embed a playlist**

```
{% youtube PL9hW1uS6HUfscJ9DHkOSoOX45MjXduUxo 'playlist' %}
```

**Enable privacy-enhanced mode**

YouTube's cookie is not used in this mode.

```
{% youtube lJIrF4YjHfQ false %}
{% youtube PL9hW1uS6HUfscJ9DHkOSoOX45MjXduUxo 'playlist' false %}
```

## Vimeo (deleted in `v7.0.0`)

{% note warn %}
Please use [hexo-tag-embed](https://github.com/hexojs/hexo-tag-embed) instead if you use `v7.0.0+`.
{% endnote %}

Inserts a responsive or specified size Vimeo video.

```
{% vimeo video_id [width] [height] %}
```

## Incluir Postagens

Incluir links para outras postagens.

```
{% post_path filename %}
{% post_link filename [title] [escape] %}
```

You can ignore permalink and folder information, like languages and dates, when using this tag.

For instance: `{% raw %}{% post_link how-to-bake-a-cake %}{% endraw %}`.

This will work as long as the filename of the post is `how-to-bake-a-cake.md`, even if the post is located at `source/posts/2015-02-my-family-holiday` and has permalink `2018/en/how-to-bake-a-cake`.

You can customize the text to display, instead of displaying the post's title.

Post's title and custom text are escaped by default. You can use the `escape` option to disable escaping.

For instance:

**Display title of the post.**

`{% raw %}{% post_link hexo-3-8-released %}{% endraw %}`

{% post_link hexo-3-8-released %}

**Display custom text.**

`{% raw %}{% post_link hexo-3-8-released 'Link to a post' %}{% endraw %}`

{% post_link hexo-3-8-released 'Link to a post' %}

**Escape title.**

```
{% post_link hexo-4-released 'How to use <b> tag in title' %}
```
{% post_link hexo-4-released 'How to use <b> tag in title' %}

**Do not escape title.**

```
{% post_link hexo-4-released '<b>bold</b> custom title' false %}
```

{% post_link hexo-4-released '<b>bold</b> custom title' false %}

## Incluir Assets

Include post assets, to be used in conjunction with [`post_asset_folder`](/docs/asset-folders).

```
{% asset_path filename %}
{% asset_img [class names] slug [width] [height] [title text [alt text]] %}
{% asset_link filename [title] [escape] %}
```

### Embed image

_hexo-renderer-marked 3.1.0+ can (optionally) resolves the post's path of an image automatically, refer to [this section](/docs/asset-folders#Embedding-an-image-using-markdown) on how to enable it._

"foo.jpg" is located at `http://example.com/2020/01/02/hello/foo.jpg`.

**Default (no option)**

`{% asset_img foo.jpg %}`

```html
<img src="/2020/01/02/hello/foo.jpg" />
```

**Custom class**

`{% asset_img post-image foo.jpg %}`

```html
<img src="/2020/01/02/hello/foo.jpg" class="post-image" />
```

**Display size**

`{% asset_img foo.jpg 500 400 %}`

```html
<img src="/2020/01/02/hello/foo.jpg" width="500" height="400" />
```

**Title & Alt**

`{% asset_img foo.jpg "lorem ipsum'dolor'" %}`

```html
<img src="/2020/01/02/hello/foo.jpg" title="lorem ipsum" alt="dolor" />
```

## URL

### url_for (7.0.0+)

Returns a url with the root path prefixed. Output is encoded automatically.

```
{% url_for text path [relative] %}
```

**Exemplos**

```yml
_config.yml
root: /blog/ # example
```

```
{% url_for blog index.html %}
```

```html
<a href="/blog/index.html">blog</a>
```

Relative link, follows `relative_link` option by default e.g. post/page path is '/foo/bar/index.html'

```yml
_config.yml
relative_link: true
```

```
{% url_for blog index.html %}
```

```html
<a href="../../index.html">blog</a>
```

You could also disable it to output a non-relative link, even when `relative_link` is enabled and vice versa.

```
{% url_for blog index.html false %}
```

```html
<a href="/index.html">blog</a>
```

### full_url_for (7.0.0+)

Returns a url with the `config.url` prefixed. Output is encoded automatically.

```
{% full_url_for text path %}
```

**Exemplos**

```yml
_config.yml
url: https://example.com/blog # example
```

```
{% full_url_for index /a/path %}
```

```html
<a href="https://example.com/blog/a/path">index</a>
```

## Raw

Se determinado conteúdo estiver causando problemas de processamento em suas postagens, envolva-o com a tag `raw` para evitar erros de renderização.

```
{% raw %}
content
{% endraw %}
```

## Trecho de Postagem

Use o texto colocado antes da marcação `<!-- more -->` como um trecho da publicação. `excerpt:` value in the [front-matter](/docs/front-matter#Settings-amp-Their-Default-Values), if specified, will take precedent.

**Exemplo:**

```
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
<!-- more -->
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
```
