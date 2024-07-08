---
title: シンタックスハイライト
---

Hexoには、[highlight.js](https://github.com/highlightjs/highlight.js)と[prismjs](https://github.com/PrismJS/prism)の2つのシンタックスハイライトライブラリが組み込まれています。 このチュートリアルでは、Hexoの組み込みシンタックスハイライトをテンプレートに統合する方法を紹介します。

## 記事でのコードブロックの使用

Hexoは、コードブロックを書く2つの方法をサポートしています。 [タグプラグイン - コードブロック](tag-plugins#コードブロック)と[タグプラグイン - バックティックコードブロック](tag-plugins#バックティックコードブロック)です:

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
3番目の構文はMarkdownの囲みコードブロックの構文で、Hexoはそれを拡張してより多くの機能をサポートしています。 利用可能なオプションを見つけるには、[タグプラグインドキュメント](tag-plugins#コードブロック)をチェックしてください。
> ヒント: Hexoは、対応するレンダラープラグインがインストールされていれば、どの形式で書かれた記事もサポートしています。 それがmarkdown、ejs、swig、nunjucks、pug、asciidocなどであってもです。 使用された形式に関係なく、これらの3つのコードブロック構文は常に利用可能です。
## 設定
v7.0.0より前:

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

v7.0.0以降:

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

上記のYAMLはHexoのデフォルト設定です。

## 無効化

v7.0.0より前:

```yaml
# _config.yml
highlight:
  enable: false
prismjs:
  enable: false
```

v7.0.0以降:

```yaml
# _config.yml
syntax_highlighter: # empty
```

`highlight.enable`と`prismjs.enable`が`false`（v7.0.0より前）か、`syntax_highlighter`が空（v7.0.0以降）の場合、コードブロックの出力HTMLは対応するレンダラーによって制御されます。 例えば、[`marked.js`](https://github.com/markedjs/marked)（Hexoのデフォルトのmarkdownレンダラーである[`hexo-renderer-marked`](https://github.com/hexojs/hexo-renderer-marked)に使用されています）は、`<code>`の`class`に言語コードを追加します:

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

組み込みのシンタックスハイライトが有効になっていない場合は、サードパーティのシンタックスハイライトプラグインをインストールするか、ブラウザサイドのシンタックスハイライター（例: `highlight.js`や`prism.js`はブラウザで実行することをサポートしています）を使用できます。

## Highlight.js

v7.0.0より前:

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

v7.0.0以降:

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

`highlight.js`はデフォルトで有効になっており、Hexo でサーバーサイドのハイライトとして処理されます。ブラウザサイドで`highlight.js`を実行する場合、これを無効にする必要があります。

> サーバーサイドとは、シンタックスハイライトが`hexo generate`または`hexo server`の間に生成されることを意味します。

### auto_detect

`auto_detect`は、コードブロックの言語を自動的に検出する`highlight.js`の機能です。

> ヒント: "sublanguage highlight" を使用したい場合、`auto_detect`を有効にし、コードブロックで言語を無指定にします。

{% note warn "Warning!" %}
`auto_detect`は非常に多くのリソースを消費します。 "sublanguage highlight"が必要でコードブロックに言語を指定しない場合以外、有効にしないでください。
{% endnote %}

### line_number

`highlight.js`は[行番号をサポートしていません](https://highlightjs.readthedocs.io/en/latest/line-numbers.html)。

Hexoは、出力を`<figure>`と`<table>`でラップし行番号を追加します:

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

これは`highlight.js`の動作ではないため、`<figure>`と`<table>`要素のためのカスタムCSSが必要です。 一部のテーマには組み込みのサポートがあります。

また、すべての`class`に`hljs-`の接頭辞がないことに気づくかもしれません。 [後の部分](#hljs)で後述します。

### line_threshold (+6.1.0)

コードブロックの行数がこの閾値を超えた場合のみ、行番号を表示します。 デフォルトは`0`です。

### tab_replace

コードブロック内のタブを指定した文字列で置き換えます。 デフォルトは2スペースです。

### exclude_languages (+6.1.0)

このオプションに一致する言語は、`<pre><code class="lang"></code></pre>`でラップし、コンテンツのすべてのタグ(`span`、`br`)をレンダリングしません。

### wrap

Hexoは、行番号をサポートするため出力を`<figure>`と`<table>`内に _ラップ_ します。 `highlight.js`の元の振る舞いに戻すには、`line_number`と`wrap`の**両方**を無効にする必要があります:

```html
<pre><code class="yaml">
<span class="comment"># _config.yml</span>
<span class="attr">hexo:</span> <span class="string">hexo</span>
</code></pre>
```

{% note warn "Warning!" %}
Because `line_number` feature relies on `wrap`, you can't disable `wrap` with `line_number` enabled: If you set `line_number` to `true`, `wrap` will be automatically enabled.
{% endnote %}

### hljs

`hljs`が`true`に設定されている場合、すべてのHTML出力には`hljs-`で接頭辞付きの`class`が付きます（`wrap`が有効かは問いません）:

```html
<pre><code class="yaml hljs">
<span class="hljs-comment"># _config.yml</span>
<span class="hljs-attr">hexo:</span> <span class="hljs-string">hexo</span>
</code></pre>
```

> ヒント: `line_number`が`false`、`wrap`がfalse、`hljs`が`true`に設定されている場合のみ、`highlight.js`の[テーマ](https://github.com/highlightjs/highlight.js/tree/master/src/styles)を直接使用できます。

## PrismJS

v7.0.0より前:

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

v7.0.0以降:

```yaml
# _config.yml
syntax_highlighter: prismjs
prismjs:
  preprocess: true
  line_number: true
  line_threshold: 0
  tab_replace: ""
```

Prismjsはデフォルトで無効になっています。 prismjsを有効にする前に、v7.0.0より前では`highlight.enable`を`false`に設定するか、v7.0.0以降では`syntax_highlighter`を`prismjs`に設定する必要があります。

### preprocess

Hexoの組み込みprismjsは、ブラウザサイド（`preprocess`を`false`に設定）とサーバーサイド（`preprocess`を`true`に設定）の両方をサポートしています。

サーバーサイドモード（`preprocess`を`true`に設定）を使用する場合、ウェブサイトにはprismjsのテーマ（cssスタイルシート）のみロードします。 ブラウザサイドを使用する場合（`preprocess`を`false`に設定）、javascriptライブラリもロードする必要があります。

Prismjsはブラウザで使用するように設計されているため、`preprocess`モードでは限られたprismjsプラグインのみがサポートされます:

- [Line Highlight](https://prismjs.com/plugins/line-highlight/): Hexoの[タグプラグイン - コードブロック](tag-plugins#コードブロック)と[タグプラグイン - バックティックコードブロック](tag-plugins#バックティックコードブロック)は、行のハイライト構文（`mark`オプション）をサポートしています。 `mark`オプションが与えられた場合、Hexoは対応するHTMLマークアップを生成します。
- [Show Languages](https://prismjs.com/plugins/show-language/): コードブロックに言語が設定されている場合に限り、Hexoは`data-language`属性を追加します。
- 特別なHTMLマークアップを必要としない他のすべてのprismプラグインも同様にサポートされています。 プラグインに応じたJavaScriptをロードしてください。

`preprocess`が`false`に設定されている場合、すべてのprismプラグインがサポートされます。 その場合も、いくつか注意点があります:

- [Line Numbers](https://prismjs.com/plugins/line-numbers/): `preprocess`が`false`に設定されている場合、Hexoは必要なHTMLマークアップを生成しません。 `prism-line-numbers.css`と`prism-line-numbers.js`の両方が必要です。
- [Show Languages](https://prismjs.com/plugins/show-language/): コードブロックに言語が与えられている限り、Hexoは常に`data-language`属性を追加します。
- `highlight.js`はデフォルトで有効になっており、Hexoでサーバーサイドのハイライトとして処理されます。 ブラウザサイドで`highlight.js`を実行する場合、これを無効にする必要があります。

### line_number

`preprocess`と`line_number`の両方が`true`の場合、行番号の表示には`prism-line-numbers.css`のみロードします。 `preprocess`と`line_number`の両方をfalseに設定した場合、`prism-line-numbers.css`と`prism-line-numbers.js`の両方をロードする必要があります。

### line_threshold (+6.1.0)

コードブロックの行数がこの閾値を超えた場合のみ、行番号を表示します。 デフォルトは`0`です。

### tab_replace

コードブロック内の`\t`を指定した文字列で置き換えます。 デフォルトは2スペースです。

## その他の有用な情報

- [Highlight.js](https://highlightjs.readthedocs.io/en/latest/)
- [PrismJS](https://prismjs.com/)

Hexoのシンタックスハイライティングの背後にあるソースコードは、以下で利用可能です:

- [Highlight.jsユーティリティ関数](https://github.com/hexojs/hexo-util/blob/master/lib/highlight.ts)
- [PrismJSユーティリティ関数](https://github.com/hexojs/hexo-util/blob/master/lib/prism.ts)
- [タグプラグイン - コードブロック](https://github.com/hexojs/hexo/blob/master/lib/plugins/tag/code.ts)
- [タグプラグイン - バックティックコードブロック](https://github.com/hexojs/hexo/blob/master/lib/plugins/filter/before_post_render/backtick_code_block.ts)
