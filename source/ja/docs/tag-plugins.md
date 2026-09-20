---
title: タグプラグイン
---

タグプラグインは記事に付与するタグとは異なります。 これらはOctopressから移植されました。 特定のコンテンツを記事に素早く追加するのに便利です。

記事は任意のフォーマットで書くことができますが、何れの場合もタグプラグインは利用可能です。 構文には変わりはありません。

{% youtube I07XMi7MHd4 %}

_タグプラグインをMarkdownの構文でラップしてはいけません。 例えば `[]({% post_path lorem-ipsum %})` はサポートされていません。_

## 記事の抜粋

記事に引用を追加します。 オプションで著者、出典、タイトル情報を含めることができます。

**エイリアス:** quote

```
{% blockquote [author[, source]] [link] [source_link_title] %}
content
{% endblockquote %}
```

### 例

**引数なし。 プレーンなブロック引用。**

```
{% blockquote %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit lacus ut purus iaculis feugiat. Sed nec tempor elit, quis aliquam neque. Curabitur sed diam eget dolor fermentum semper at eu lorem.
{% endblockquote %}
```

{% blockquote %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit lacus ut purus iaculis feugiat. Sed nec tempor elit, quis aliquam neque. Curabitur sed diam eget dolor fermentum semper at eu lorem.
{% endblockquote %}

**本からの引用**

```
{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}
```

{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}

**Twitterからの引用**

```
{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
NEW: DevDocs now comes with syntax highlighting. http://devdocs.io
{% endblockquote %}
```

{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
NEW: DevDocs now comes with syntax highlighting. http://devdocs.io
{% endblockquote %}

**ウェブ上の記事からの引用**

```
{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}
```

{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}

## コードブロック

記事にコードスニペットを追加するための便利な機能です。

**エイリアス:** code

```
{% codeblock [title] [lang:language] [url] [link text] [additional options] %}
code snippet
{% endcodeblock %}
```

追加オプションは `option:value` 形式で指定します。 例: `line_number:false first_line:5`。

| 追加オプション          | 説明                                                                                             | デフォルト  |
| ---------------- | ---------------------------------------------------------------------------------------------- | ------ |
| `line_number`    | 行番号を表示                                                                                         | `true` |
| `line_threshold` | コードブロックの行数がこの閾値を超える場合にのみ行番号を表示。                                                                | `0`    |
| `highlight`      | コードのハイライトを有効にする                                                                                | `true` |
| `first_line`     | 最初の行番号を指定                                                                                      | `1`    |
| `mark`           | コンマ区切りで指定された行をハイライト。 範囲指定にはハイフンを使用<br>例: `mark:1,4-7,10` は行1、4から7、10をマークします。             |        |
| `wrap`           | コードブロックを[`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)でラップ | `true` |

### 例

**プレーンなコードブロック**

```
{% codeblock %}
alert('Hello World!');
{% endcodeblock %}
```

{% codeblock %}
alert('Hello World!');
{% endcodeblock %}

**言語指定**

```
{% codeblock lang:objc %}
[rectangle setX: 10 y: 10 width: 20 height: 20];
{% endcodeblock %}
```

{% codeblock lang:objc %}
[rectangle setX: 10 y: 10 width: 20 height: 20];
{% endcodeblock %}

**コードブロックにキャプションを追加**

```
{% codeblock Array.map %}
array.map(callback[, thisArg])
{% endcodeblock %}
```

{% codeblock Array.map %}
array.map(callback[, thisArg])
{% endcodeblock %}

**キャプションとURLを追加**

```
{% codeblock _.compact http://underscorejs.org/#compact Underscore.js %}
_.compact([0, 1, false, 2, '', 3]);
=> [1, 2, 3]
{% endcodeblock %}
```

{% codeblock _.compact http://underscorejs.org/#compact Underscore.js %}
\_.compact([0, 1, false, 2, '', 3]); => [1, 2, 3]
{% endcodeblock %}

## バックティックコードブロック

これはコードブロックの使用と同じですが、ブロックを区切るために3つのバックティックを使用します。

{% raw %}
&#96`[language] [title] [url] [link text]
code snippet
&#96;`
{% endraw %}

## プルクオート

記事にプルクオートを追加するには:

```
{% pullquote [class] %}
content
{% endpullquote %}
```

## jsFiddle (v7.0.0で削除されました)

{% note warn %}
このタグはHexo 7.0.0で削除されました。 既存の記事との後方互換性を提供するために、プラグイン[hexo-tag-embed](https://github.com/hexojs/hexo-tag-embed)を提供しています。
{% endnote %}

jsFiddleスニペットを埋め込むには:

```
{% jsfiddle shorttag [tabs] [skin] [width] [height] %}
```

## Gist (v7.0.0で削除されました)

{% note warn %}
v7.0.0 以上で使用する場合は、代わりに[hexo-tag-embed](https://github.com/hexojs/hexo-tag-embed)を使用してください。
{% endnote %}

Gistスニペットを埋め込むには:

```
{% gist gist_id [filename] %}
```

## iframe

iframeを埋め込むには:

```
{% iframe url [width] [height] %}
```

## 画像

指定されたサイズで画像を挿入します。

```
{% img [class names] /path/to/image [width] [height] '"title text" "alt text"' %}
```

## リンク

`target="_blank"`属性を持つリンクを挿入します。

```
{% link text url [external] [title] %}
```

## コードの挿入

`source/downloads/code`フォルダにあるコードスニペットを挿入します。 フォルダの場所は`code_dir`オプションで設定できます。

```
{% include_code [title] [lang:language] [from:line] [to:line] path/to/file %}
```

### 例

**test.jsの全内容を埋め込む**

```
{% include_code lang:javascript test.js %}
```

**3行目のみを埋め込む**

```
{% include_code lang:javascript from:3 to:3 test.js %}
```

**5行目から8行目を埋め込む**

```
{% include_code lang:javascript from:5 to:8 test.js %}
```

**5行目からファイルの終わりまでを埋め込む**

```
{% include_code lang:javascript from:5 test.js %}
```

**1行目から8行目を埋め込む**

```
{% include_code lang:javascript to:8 test.js %}
```

## YouTube (v7.0.0で削除されました)

{% note warn %}
v7.0.0 以上で使用する場合は、代わりに[hexo-tag-embed](https://github.com/hexojs/hexo-tag-embed)を使用してください。
{% endnote %}

YouTube動画を挿入します。

```
{% youtube video_id [type] [cookie] %}
```

### 例

**動画を埋め込む**

```
{% youtube lJIrF4YjHfQ %}
```

**プレイリストを埋め込む**

```
{% youtube PL9hW1uS6HUfscJ9DHkOSoOX45MjXduUxo 'playlist' %}
```

**プライバシー強化モードを有効にする**

このモードではYouTubeのクッキーは使用されません。

```
{% youtube lJIrF4YjHfQ false %}
{% youtube PL9hW1uS6HUfscJ9DHkOSoOX45MjXduUxo 'playlist' false %}
```

## Vimeo (v7.0.0で削除されました)

{% note warn %}
v7.0.0 以上で使用する場合は、代わりに[hexo-tag-embed](https://github.com/hexojs/hexo-tag-embed)を使用してください。
{% endnote %}

レスポンシブまたは指定されたサイズのVimeo動画を挿入します。

```
{% vimeo video_id [width] [height] %}
```

## 記事へのリンク

他の記事へのリンクを挿入します。

```
{% post_path filename %}
{% post_link filename [title] [escape] %}
```

このタグを使用するときは、パーマリンクやフォルダ情報（言語や日付など）を無視できます。

例えば、`{% raw %}{% post_link how-to-bake-a-cake %}{% endraw %}`というように使用できます。

これは記事のファイル名が`how-to-bake-a-cake.md`である限り、記事が`source/posts/2015-02-my-family-holiday`に位置し、パーマリンクが`2018/en/how-to-bake-a-cake`であっても機能します。

記事のタイトルではなくカスタムテキストを表示することもできます。

記事のタイトルとカスタムテキストはデフォルトでエスケープされます。 `escape`オプションを使用してエスケープを無効にできます。

例:

**記事のタイトルを表示。**

`{% raw %}{% post_link hexo-3-8-released %}{% endraw %}`

{% post_link hexo-3-8-released %}

**カスタムテキストを表示。**

`{% raw %}{% post_link hexo-3-8-released 'Link to a post' %}{% endraw %}`

{% post_link hexo-3-8-released 'Link to a post' %}

**タイトルをエスケープする。**

```
{% post_link hexo-4-released 'How to use <b> tag in title' %}
```
{% post_link hexo-4-released 'How to use <b> tag in title' %}

**タイトルのエスケープを無効にする。**

```
{% post_link hexo-4-released '<b>bold</b> custom title' false %}
```

{% post_link hexo-4-released '<b>bold</b> custom title' false %}

## アセットの参照

[`post_asset_folder`](asset-folders)と一緒に使用する記事アセットを参照します。

```
{% asset_path filename %}
{% asset_img [class names] slug [width] [height] [title text [alt text]] %}
{% asset_link filename [title] [escape] %}
```

### 画像を埋め込む

_hexo-renderer-marked 3.1.0+は、オプションで画像の記事パスを自動的に解決できます。 これを有効にする方法については、[このセクション](asset-folders#マークダウンを使用した画像の埋め込み)を参照してください。_

"foo.jpg"は`http://example.com/2020/01/02/hello/foo.jpg`に位置しています。

**デフォルト（オプションなし）**

`{% asset_img foo.jpg %}`

```html
<img src="/2020/01/02/hello/foo.jpg" />
```

**カスタムクラス**

`{% asset_img post-image foo.jpg %}`

```html
<img src="/2020/01/02/hello/foo.jpg" class="post-image" />
```

**サイズを指定**

`{% asset_img foo.jpg 500 400 %}`

```html
<img src="/2020/01/02/hello/foo.jpg" width="500" height="400" />
```

**タイトル & Alt**

`{% asset_img foo.jpg "lorem ipsum'dolor'" %}`

```html
<img src="/2020/01/02/hello/foo.jpg" title="lorem ipsum" alt="dolor" />
```

## URL

### url_for (7.0.0+)

ルートパスをプレフィックスとして付加したURLを返します。 出力は自動的にエンコードされます。

```
{% url_for text path [relative] %}
```

**例:**

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

`relative_link`が有効になっていても非相対リンクを出力する、あるいはその逆を行うこともできます。

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

相対リンク指定はデフォルトで`relative_link`オプションに従います。 例えば、記事/ページのパスが'/foo/bar/index.html'の場合

```
{% url_for blog index.html false %}
```

```html
<a href="/index.html">blog</a>
```

### full_url_for (7.0.0+)

`config.url`をプレフィックスとして付加したURLを返します。 出力は自動的にエンコードされます。

```
{% full_url_for text path %}
```

**例:**

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

記事の一部のコンテンツが処理中に問題を起こす場合、`raw`タグでラップしてレンダリングエラーを回避します。

```
{% raw %}
content
{% endraw %}
```

## 記事の抜粋

`<!-- more -->`タグの前に置かれたテキストを記事の抜粋として使用します。 Front Matterに指定された`excerpt:`の値がある場合、それが優先されます。

**例:**

```
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
<!-- more -->
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
```
