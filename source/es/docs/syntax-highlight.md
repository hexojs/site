---
title: Resaltado de sintaxis
---

Hexo incluye dos librerías de resaltado de sintaxis,[highlight.js](https://github.com/highlightjs/highlight.js) y [prismjs](https://github.com/PrismJS/prism). En este tutorial mostramos como integrar los resaltados de sintaxis dentro de plantillas.

## Como usar bloques de código en tus artículos

Hexo soporta dos formas de escribir un bloque de código: [Tag Plugin - Code Block](tag-plugins#Code-Block) and [Tag Plugin - Backtick Code Block](https://hexo.io/docs/tag-plugins#Backtick-Code-Block):

````markdown
{% codeblock [title] [lang:language] [url] [link text] [additional options] %}
code snippet
{% endcodeblock %}

{% code [title] [lang:language] [url] [link text] [additional options] %}
code snippet
{% endcode %}

```[language] [title] [url] [link text] [additional options]
code snippet
```
````
La tercera sintaxis es mediante un bloque de código *enjaulado* de *Markdown*, y Hexo lo extiende para permitir más funcionalidades. Consulta [Tag Plugin Docs](tag-plugins#Code-Block) para encontrar las opciones disponibles.
> Consejo: Hexo permite escribir artículos en cualquier formato, mientras el renderizado correspondiente esté instalado. Puede ser markdown, ejs, swig, nunjucks, pug, asciidoc, etc. Independientemente del formato usado, esas tres sintaxis de los bloques de código estarán siempre disponibles.
## Configuración
versiones anteriores a v7.0.0:

```yaml
# _config.yml
highlight:
  enable: true
  auto_detect: false
  line_number: true
  line_threshold: 0
  tab_replace: ""
  exclude_languages:
    - example
  wrap: true
  hljs: false
prismjs:
  enable: false
  preprocess: true
  line_number: true
  line_threshold: 0
  tab_replace: ""
```

v7.0.0+:

```yaml
# _config.yml
syntax_highlighter: highlight.js
highlight:
  auto_detect: false
  line_number: true
  line_threshold: 0
  tab_replace: ""
  exclude_languages:
    - example
  wrap: true
  hljs: false
prismjs:
  preprocess: true
  line_number: true
  line_threshold: 0
  tab_replace: ""
```

El YAML superior es la configuración por defecto de Hexo.

## Deshabilitado

versiones inferiores a v7.0.0:

```yaml
# _config.yml
highlight:
  enable: false
prismjs:
  enable: false
```

v7.0.0+:

```yaml
# _config.yml
syntax_highlighter: # empty
```

Cuando `highlight.enable` y `prismjs.enable` son `false` (en versiones inferiores a v7.0.0) o `syntax_highlighter` está vacío (v7.0.0+), la salida HTML del bloque de código es controlada por el renderizador correspondiente. Por ejemplo, [`marked.js`](https://github.com/markedjs/marked) (usado por [`hexo-renderer-marked`](https://github.com/hexojs/hexo-renderer-marked), el renderizador de markdown por defecto de Hexo) añadirá la clase `class` del lenguaje de código en `<code>`:

````markdown
```yaml
hello: hexo
```
````

```html
<pre>
  <code class="yaml">hello: hexo</code>
</pre>
```

Cuando no se habilita ningún resaltador de sintaxis, se puede instalar un complemento de terceros como resaltador de sintaxis, o usar un resaltador de sintaxis en el navegador (p. ej. `highlight.js` y `prism.js` soportan igualmente su funcionamiento en el navegador).

## Highlight.js

versiones anteriores a v7.0.0:

```yaml
# _config.yml
highlight:
  enable: true
  auto_detect: false
  line_number: true
  line_threshold: 0
  tab_replace: "  "
  exclude_languages:
    - example
  wrap: true
  hljs: false
prismjs:
  enable: false
```

v7.0.0+:

```yaml
# _config.yml
syntax_highlighter: highlight.js
highlight:
  auto_detect: false
  line_number: true
  line_threshold: 0
  tab_replace: "  "
  exclude_languages:
    - example
  wrap: true
  hljs: false
```

`highlight.js` está habilitado por defecto y es usado como resaltador desde el servidor en Hexo; requiere ser deshabilitado en caso de preferir ejecutar `highlight.js` en lado del navegador.

> "Desde el servidor" significa, que el resaltado de sintaxis es generado al ejecutar `hexo generate` o `hexo server`.

### auto_detect

`auto_detect` es una característica de `highlight.js` que detecta el lenguaje usado en el bloque de código automáticamente.

> Consejo: Cuando se quiere usar el "resaltado de un sublenguaje", habilite `auto_detect` y no indique el lenguaje cuando escriba el bloque de código.

{% note warn "Aviso" %}
`auto_detect` es muy exigente en recursos. No lo habilite, a no ser que realmente necesite "resaltado de sublenguaje" o prefiera no indicar el lenguaje cuando escriba bloques de código.
{% endnote %}

### line_number

`highlight.js` [no soporta](https://highlightjs.readthedocs.io/en/latest/line-numbers.html) la numeración de líneas.

Hexo incluye el número de línea encapsulando la salida dentro de `<figure>` y `<table>`:

```html
<figure class="highlight yaml">
  <table>
    <tbody>
      <tr>
        <td class="gutter">
          <pre><span class="line">1</span><br></pre>
        </td>
        <td class="code">
          <pre><span class="line"><span class="attr">hello:</span><span class="string">hexo</span></span><br></pre>
        </td>
      </tr>
    </tbody>
  </table>
</figure>
```

No es el comportamiento de `highlight.js` y requiere CSS personalizado para los elementos `<figure>` y `<table>`; algunos temas incluyen este soporte.

También puedes observar que todas las `class` no incluyen el prefijo `hljs-`, volveremos sobre esto [más adelante](#hljs).

### line_threshold (+6.1.0)

Acepta un límite para solo mostrar números de línea siempre que el número de líneas del bloque de código exceda dicho límite. Por defecto es `0`.

### tab_replace

Reemplaza los tabuladores dentro del bloque de código con la cadena de texto indicada. Por defecto son dos espacios.

### exclude_languages (+6.1.0)

Solo encapsula con `<pre><code class="lang"></code></pre>` y no renderiza todas las etiquetas (`span`, y `br`) dentro del contenido si hay lenguajes que soportan esta opción.

### wrap

Hexo _envuelve_ la salida dentro de `<figure>` y `<table>` para permitir la numeración de líneas. Se necesita deshabilitar **tanto** `line_number` como `wrap` para reverir al comportamiento de `highlight.js`:

```html
<pre><code class="yaml">
<span class="comment"># _config.yml</span>
<span class="attr">hexo:</span> <span class="string">hexo</span>
</code></pre>
```

{% note warn "Aviso" %}
Because `line_number` feature relies on `wrap`, you can't disable `wrap` with `line_number` enabled: If you set `line_number` to `true`, `wrap` will be automatically enabled.
{% endnote %}

### hljs

Cuando `hljs` se marca como `true`, todas la salida HTML prefijará `class` con `hljs-` (independientemente si `wrap` está habilitado o no):

```html
<pre><code class="yaml hljs">
<span class="hljs-comment"># _config.yml</span>
<span class="hljs-attr">hexo:</span> <span class="hljs-string">hexo</span>
</code></pre>
```

> Consejo: Cuando `line_number` está desactivado con `false`, `wrap` es falso y `hljs` es `true`, puedes entonces usar `highlight.js` como [tema](https://github.com/highlightjs/highlight.js/tree/master/src/styles) directamente en tu sitio.

## PrismJS

versiones inferiores a v7.0.0:

```yaml
# _config.yml
highlight:
  enable: false
prismjs:
  enable: true
  preprocess: true
  line_number: true
  line_threshold: 0
  tab_replace: ""
```

v7.0.0+:

```yaml
# _config.yml
syntax_highlighter: prismjs
prismjs:
  preprocess: true
  line_number: true
  line_threshold: 0
  tab_replace: ""
```

Prismjs está deshabilitado por defecto. Debe establecer `highlight.enable` a `false` (versiones inferiores a v7.0.0) o indicar `syntax_highlighter` como `prismjs` (v7.0.0+) antes de activar prismjs.

### preprocess

La versión incluida de prismjs en Hexo permite tanto el resaltado en el lado del navegador (`preprocess` a `false`) como en lado del servidor (`preprocess` a `true`).

Cuando se usa desde el servidor (estableciendo `preprocess` a `true`), solo necesita incluir el tema prismjs (con la hoja de estilo css) en su sitio web. Cuando se activa del lado del navegador (`preprocess` debe ser `false`), debe incluir la librería javascript.

Prismjs está diseñado para usarse en el navegador, por lo tanto bajo el modo `preprocess` el complemento prismjs está soportado de forma limitada:

- [Numeración de líneas](https://prismjs.com/plugins/line-numbers/): Solo se necesita `prism-line-numbers.css`, No es necesario incluir `prism-line-numbers.js` en el sitio web. Hexo generará el marcado HTML requerido.
- [Mostrado de lenguajes](https://prismjs.com/plugins/show-language/): Hexo añadirá siempre el atributo `data-language` mientras el lenguaje se indique para el bloque de código.
- Cualquier otro complemento de prism que no necesite marcado HTML especial está soportado tan bien, pero se deberá incluir el JavaScript requerido por dichos complementos.

Todos los complementos están permitidos si `preprocess` se establece como `false`. A continuación hay una serie de elementos a los que se debe prestar atención:

- [Numeración de líneas](https://prismjs.com/plugins/line-numbers/): Hexo no generará el marcado HTML requerido cuando `preprocess` se desactiva con `false`. Se require tanto `prism-line-numbers.css` como `prism-line-numbers.js`.
- [Mostrar lenguajes](https://prismjs.com/plugins/show-language/): Hexo mostrará siempre el atributo `data-language` mientras el lenguaje del bloque de código esté incluido.
- [Resaltado de línea](https://prismjs.com/plugins/line-highlight/): Tanto Hexo[Tag Plugin - Code Block](tag-plugins#Code-Block) como
soportan este reslatado de sintaxis (opción `mark`). Cuando se incluye la opción `mark`, Hexo generará el correspondiente marcado HTML.</li> </ul> 
  
  

### line_number

Cuando las dos opciones `preprocess` y `line_number` se activan con `true`, solo se necesita incluir `prism-line-numbers.css` para permitir que la numeración de líneas funcione. Si `preprocess` y `line_number` son falsas, necesitarás tanto `prism-line-numbers.css` como `prism-line-numbers.js`.



### line_threshold (+6.1.0)

Acepta un límite opcional para mostrar únicamente números de línea en caso de que el número de líneas del bloque de código supere dicho límite. Por defecto es `0`.



### tab_replace

Reemplazo de `\t` dentro del bloque de código con la cadena indicada. Por defecto es 2 espacios.



## Más información relevante

- [Highlight.js](https://highlightjs.readthedocs.io/en/latest/)
- [PrismJS](https://prismjs.com/)

El código fuente detrás del resaltado de sintaxis en Hexo está disponible en:

- [Highlight.js Utility Functions](https://github.com/hexojs/hexo-util/blob/master/lib/highlight.ts)
- [PrismJS Utility Functions](https://github.com/hexojs/hexo-util/blob/master/lib/prism.ts)
- [Tag Plugin - Code Block](https://github.com/hexojs/hexo/blob/master/lib/plugins/tag/code.ts)
- [Tag Plugin - Backtick Code Block](https://github.com/hexojs/hexo/blob/master/lib/plugins/filter/before_post_render/backtick_code_block.ts)
