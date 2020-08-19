---
title: 代码高亮
---

Hexo 对 [highlight.js](https://github.com/highlightjs/highlight.js) 与 [prismjs](https://github.com/PrismJS/prism) 两种代码高亮库提供内建支持。本篇教程将展示如何将 Hexo 的内建语法高亮组件整合至你的模板中。

## 如何在文章中插入代码块

Hexo 支持两种代码块写法——[代码块标签插件](tag-plugins#代码块)和[反引号代码块标签插件](tag-plugins#反引号代码块)：

````markdown
{% codeblock [title] [lang:language] [url] [link text] [additional options] %}
code snippet
{% endcodeblock %}

{% code [title] [lang:language] [url] [link text] [additional options] %}
code snippet
{% endcode %}

``` [language] [title] [url] [link text] [additional options]
code snippet
```
````

上面的第三种是 Markdown 的 fenced code block 语法。Hexo 对其进行了扩展，使其支持更多特性。在[标签插件文档](tag-plugins#代码块)中你可以找到可用的选项。

> 提示：Hexo 支持用任何格式书写文章，只需安装相应渲染插件即可。不论文章以何种格式书写（Markdown、EJS、Swig、Nunjuck、Pug、ASCIIDoc），上述三种代码块语法总是可用。

## 配置

```yaml
# _config.yml
highlight:
  enable: true
  auto_detect: false
  line_number: true
  tab_replace: ''
  wrap: true
  hljs: false
prismjs:
  enable: false
  preprocess: true
  line_number: true
  tab_replace: ''
```

以上为 Hexo 的默认配置。

## 禁用

```yaml
# _config.yml
highlight:
  enable: false
prismjs:
  enable: false
```

当 `highlight.enable` 和 `prismjs.enable` 均为 `false` 时，代码块输出的 HTML 由相应的渲染器控制。举个例子：[`marked.js`](https://github.com/markedjs/marked)（Hexo 的默认 Markdown 渲染器 [`hexo-renderer-marked`](https://github.com/hexojs/hexo-renderer-marked) 由此驱动）会把语言加入 `<code>` 标签的 `class` 中：

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

如果内建语法高亮器均未启用，你可以安装第三方语法高亮插件，也可以使用浏览器端的语法高亮库（例如 `highlight.js` 和 `prism.js` 也都支持在浏览器中运行）。

## Highlight.js

```yaml
# _config.yml
highlight:
  enable: true
  auto_detect: false
  line_number: true
  tab_replace: '  '
  wrap: true
  hljs: false
prismjs:
  enable: false
```

`highlight.js` 默认开启，用作 Hexo 的服务端高亮组件。如果你需要在浏览器端运行 `highlight.js`，请把它关闭。

> 「服务端高亮」指语法高亮在 `hexo generate` 或 `hexo server` 时完成。

### auto_detect

`auto_detect` 是 `highlight.js` 的特性，能够自动检测代码块的语言。

> 提示：如果你想使用「子语言高亮」功能（例如在高亮 HTML 时同时高亮内部嵌入的 JavaScript 代码），请开启 `auto_detect`，并且在文章中插入代码块时不要标注语言。

{% note warn "警告！" %}
`auto_detect` 十分耗费资源。 如果你不需要使用「子语言高亮」功能，或者不介意在书写代码块时标记语言，请不要启用此功能。
{% endnote %}

### line_number

`highlight.js` [不支持](https://highlightjs.readthedocs.io/en/latest/line-numbers.html)行号显示。

Hexo 通过用 `<figure>` 和 `<table>` 包裹其代码块为其添加了行号显示支持:

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

这不是 `highlight.js` 的行为，因此需要为 `<figure>` 和 `<table>` 添加自定义 CSS 代码。部分主题对此提供内建支持。

你大概也注意到了，所有代码块的 `class` 都没有 `hljs-` 前缀。我们 [为此专门准备了一个章节](#hljs)。

### tab_replace

用代码内的 tab (`\t`) 替换为给定值，默认值是两个空格。

### wrap

为了支持行号显示，Hexo 将输出包裹在了 `<figure>` 和 `<table>` 内部。如果要保持 `highlight.js` 原来的行为，你需要将 `line_number` 和 `wrap` **全部**关闭。

```html
<pre><code class="yaml">
<span class="comment"># _config.yml</span>
<span class="attr">hexo:</span> <span class="string">hexo</span>
</code></pre>
```

{% note warn "警告！" %}
因为 `line_number` 功能依赖 `wrap`，你无法在配置中关闭 `wrap` 而又开启 `line_number`。如果你将 `line_number` 设置为 `true` 的话，`wrap` 将被自动开启。
{% endnote %}

### hljs

当 `hljs` 设置为 `true` 时，所有代码块的 HTML 输出均会给 `class` 添加 `hljs-` 前缀（无论 `wrap` 是否开启）：

```html
<pre><code class="yaml hljs">
<span class="hljs-comment"># _config.yml</span>
<span class="hljs-attr">hexo:</span> <span class="hljs-string">hexo</span>
</code></pre>
```

> 提示：当 `line_number` 和 `wrap` 为 `false`，`hljs` 为 `true` 的时候，你可以在站点上直接应用 `highlight.js` 的[主题](https://github.com/highlightjs/highlight.js/tree/master/src/styles)。

## PrismJS

```yaml
# _config.yml
highlight:
  enable: false
prismjs:
  enable: true
  preprocess: true
  line_number: true
  tab_replace: ''
```

PrismJS 默认禁用。启用 PrimeJS 前应设置 `highlight.enable` 为 `false`。

### preprocess

Hexo 内建的 PrismJS 支持浏览器端高亮（`preprocess` 设置为 `false`）和服务器端高亮（`preprocess` 设置为 `true`）两种方式。

使用服务器端高亮时（`preprocess` 设置为 `true`），只需要在站点引入 Prismjs 的主题（CSS 样式表）即可；而使用浏览器端高亮时（`preprocess` 设置为 `false`），需要将 JavaScript 文件也引入。

PrismJS 主要是面向浏览器的。因此，在服务器端高亮模式下只有部分插件可用：

- [行号显示](https://prismjs.com/plugins/line-numbers/)：需要引入`prism-line-numbers.css`，无需引入`prism-line-numbers.js`。Hexo 将生成其所需的 HTML 代码片段。
- [语言显示](https://prismjs.com/plugins/show-language/)：当代码块有标注语言时，Hexo 总会添加 `data-language` 属性。
- Hexo 也支持其它不需要特殊 HTML 代码格式的 PrismJS 插件，不过你需要引入它们的 JavaScript 文件。

`preprocess` 设置为 `false` 时所有 primejs 插件均可用，只需额外注意以下几点：

- [行号显示](https://prismjs.com/plugins/line-numbers/)：当 `preprocess` 设置为 `false` 时，Hexo 不会生成插件所需的 HTML 代码格式。`prism-line-numbers.css` 和 `prism-line-numbers.js`均需被引入。
- [语言显示](https://prismjs.com/plugins/show-language/)：当代码块有标注语言时，Hexo 总会添加 `data-language` 属性。
- [高亮特定行](https://prismjs.com/plugins/line-highlight/): Hexo 的[代码块标签插件](tag-plugins#代码块)和[反引号代码块标签插件](tag-plugins#反引号代码块)都支持高亮特定行的语法（即 `mark` 选项）。当 `mark` 项被设置时，Hexo 将生成其所需的 HTML 代码格式。

### line_number

当 `preprocess` 与 `line_number` 均设置为 `true` 时，只需要引入 `prism-line-numbers.css` 即可启用行号显示。如果 `preprocess` 和 `line_number` 均被关闭，则需要将 `prism-line-numbers.css` 和 `prism-line-numbers.js` 都引入才能启用行号显示。

### tab_replace

用代码内的 tab (`\t`) 替换为给定值，默认值是两个空格。

## 其它参考资料

- [Highlight.js](https://highlightjs.readthedocs.io/en/latest/)
- [PrismJS](https://prismjs.com/)

Hexo 语法高亮部分的源码可参见：

- [Highlight.js 工具函数](https://github.com/hexojs/hexo-util/blob/master/lib/highlight.js)
- [PrismJS 工具函数](https://github.com/hexojs/hexo-util/blob/master/lib/prism.js)
- [代码块标签插件](https://github.com/hexojs/hexo/blob/master/lib/plugins/tag/code.js)
- [反引号代码块标签插件](https://github.com/hexojs/hexo/blob/master/lib/plugins/filter/before_post_render/backtick_code_block.js)
