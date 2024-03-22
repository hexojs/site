---
title: ヘルパー
---
ヘルパーを使うことで、テンプレートにスニペットを素早く挿入できます。ソースファイル内では使用できません。

あなた自身のカスタムヘルパーを簡単に[作成する](https://hexo.io/api/helper.html)ほか、既に用意されているヘルパーを利用することもできます。

## URL

### url_for

ルートパスが前置されたURLを返します。出力は自動的にエンコードされます。

``` js
<%- url_for(path, [option]) %>
```

オプション | 説明 | デフォルト
--- | --- | ---
`relative` | 相対リンクを出力します | `config.relative_link`の値

**例:**

``` yml
_config.yml
root: /blog/ # example
```

``` js
<%- url_for('/a/path') %>
// /blog/a/path
```

相対リンクは、デフォルトで`relative_link`オプションに従います。
例えば、投稿やページのパスが '/foo/bar/index.html' の場合:

``` yml
_config.yml
relative_link: true
```

``` js
<%- url_for('/css/style.css') %>
// ../../css/style.css

/* オプションの上書き
 * `relative_link`が有効な状態でも、絶対リンクを出力、またはその逆も行えます。
 */
<%- url_for('/css/style.css', {relative: false}) %>
// /css/style.css
```

### relative_url

`from`から`to`への相対URLを返します。

``` js
<%- relative_url(from, to) %>
```

**例:**

``` js
<%- relative_url('foo/bar/', 'css/style.css') %>
// ../../css/style.css
```

### full_url_for

`config.url`を前置したURLを返します。出力は自動的にエンコードされます。

``` js
<%- full_url_for(path) %>
```

**例:**

``` yml
_config.yml
url: https://example.com/blog # example
```

``` js
<%- full_url_for('/a/path') %>
// https://example.com/blog/a/path
```

### gravatar

メールアドレスからGravatar画像URLを返します。

``` js
<%- gravatar(email, [options]) %>
```

オプション | 説明 | デフォルト
--- | --- | ---
`s` | 出力する画像サイズ | 80
`d` | デフォルト画像 |
`f` | デフォルトを強制 |
`r` | レーティング |

詳細: [Gravatar](https://en.gravatar.com/site/implement/images/)

**例:**

``` js
<%- gravatar('a@abc.com') %>
// https://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787

<%- gravatar('a@abc.com', 40) %>
// https://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787?s=40

<%- gravatar('a@abc.com' {s: 40, d: 'https://via.placeholder.com/150'}) %>
// https://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787?s=40&d=https%3A%2F%2Fvia.placeholder.com%2F150
```

## HTMLタグ

### css

CSSファイルを読み込みます。 `path` は文字列、配列、オブジェクト、またはオブジェクトの配列にすることができます。[`/<root>/`](/docs/configuration#URL)の値が自動的に前置され、`.css` 拡張子が `path` に自動的に追加されます。カスタム属性にはオブジェクトタイプを指定します。

``` js
<%- css(path, ...) %>
```

**例:**

``` js
<%- css('style.css') %>
// <link rel="stylesheet" href="/style.css">

<%- css(['style.css', 'screen.css']) %>
// <link rel="stylesheet" href="/style.css">
// <link rel="stylesheet" href="/screen.css">

<%- css({ href: 'style.css', integrity: 'foo' }) %>
// <link rel="stylesheet" href="/style.css" integrity="foo">

<%- css([{ href: 'style.css', integrity: 'foo' }, { href: 'screen.css', integrity: 'bar' }]) %>
// <link rel="stylesheet" href="/style.css" integrity="foo">
// <link rel="stylesheet" href="/screen.css" integrity="bar">
```

### js

JavaScriptファイルを読み込みます。 `path` は文字列、配列、オブジェクト、またはオブジェクトの配列にすることができます。[`/<root>/`](/docs/configuration#URL)の値が自動的に前置され、`.js` 拡張子が `path` に自動的に追加されます。カスタム属性にはオブジェクトタイプを指定します。

``` js
<%- js(path, ...) %>
```

**例:**

``` js
<%- js('script.js') %>
// <script src="/script.js"></script>

<%- js(['script.js', 'gallery.js']) %>
// <script src="/script.js"></script>
// <script src="/gallery.js"></script>

<%- js({ src: 'script.js', integrity: 'foo', async: true }) %>
// <script src="/script.js" integrity="foo" async></script>

<%- js([{ src: 'script.js', integrity: 'foo' }, { src: 'gallery.js', integrity: 'bar' }]) %>
// <script src="/script.js" integrity="foo"></script>
// <script src="/gallery.js" integrity="bar"></script>
```

### link_to

リンクを挿入します。

``` js
<%- link_to(path, [text], [options]) %>
```

オプション | 説明 | デフォルト
--- | --- | ---
`external` | リンクを新しいタブで開く | false
`class` | クラス名 |
`id` | ID |

**例:**

``` js
<%- link_to('http://www.google.com') %>
// <a href="http://www.google.com" title="http://www.google.com">http://www.google.com</a>

<%- link_to('http://www.google.com', 'Google') %>
// <a href="http://www.google.com" title="Google">Google</a>

<%- link_to('http://www.google.com', 'Google', {external: true}) %>
// <a href="http://www.google.com" title="Google" target="_blank" rel="noopener">Google</a>
```

### mail_to

メールリンクを挿入します。

``` js
<%- mail_to(path, [text], [options]) %>
```

オプション | 説明
--- | ---
`class` | クラス名
`id` | ID
`subject` | メールの件名
`cc` | CC
`bcc` | BCC
`body` | メールの内容

**例:**

``` js
<%- mail_to('a@abc.com') %>
// <a href="mailto:a@abc.com" title="a@abc.com">a@abc.com</a>

<%- mail_to('a@abc.com', 'Email') %>
// <a href="mailto:a@abc.com" title="Email">Email</a>
```

### image_tag

画像を挿入します。

``` js
<%- image_tag(path, [options]) %>
```

オプション | 説明
--- | ---
`alt` | 画像の代替テキスト
`class` | クラス名
`id` | ID
`width` | 画像の幅
`height` | 画像の高さ

### favicon_tag

ファビコンを挿入します。

``` js
<%- favicon_tag(path) %>
```

### feed_tag

フィードリンクを挿入します。

``` js
<%- feed_tag(path, [options]) %>
```

オプション | 説明 | デフォルト
--- | --- | ---
`title` | フィードのタイトル | `config.title`
`type` | フィードのタイプ | 

**例:**

``` js
<%- feed_tag('atom.xml') %>
// <link rel="alternate" href="/atom.xml" title="Hexo" type="application/atom+xml">

<%- feed_tag('rss.xml', { title: 'RSS Feed', type: 'rss' }) %>
// <link rel="alternate" href="/atom.xml" title="RSS Feed" type="application/atom+xml">

/* 引数が指定されない場合 hexo-generator-feed のデフォルトに従う*/
<%- feed_tag() %>
// <link rel="alternate" href="/atom.xml" title="Hexo" type="application/atom+xml">
```

## 条件付きタグ

### is_current

`path`が現在のページのURLと一致するかどうかをチェックします。厳密な一致を有効にするには`strict`オプションを使用します。

``` js
<%- is_current(path, [strict]) %>
```

### is_home

現在のページがホームページかどうかをチェックします。

``` js
<%- is_home() %>
```

### is_home_first_page (+6.3.0)

現在のページがホームページの最初のページかどうかをチェックします。

``` js
<%- is_home_first_page() %>
```

### is_post

現在のページが投稿ページかどうかをチェックします。

``` js
<%- is_post() %>
```

### is_page

現在のページが固定ページかどうかをチェックします。

``` js
<%- is_page() %>
```

### is_archive

現在のページがアーカイブページかどうかをチェックします。

``` js
<%- is_archive() %>
```

### is_year

現在のページが年別アーカイブページかどうかをチェックします。

``` js
<%- is_year() %>
```

### is_month

現在のページが月別アーカイブページかどうかをチェックします。

``` js
<%- is_month() %>
```

### is_category

現在のページがカテゴリーページかどうかをチェックします。
パラメータとして文字列が与えられた場合、与えられたカテゴリーと現在のページが一致するかどうかをチェックします。

``` js
<%- is_category() %>
<%- is_category('hobby') %>
```

### is_tag

現在のページがタグページかどうかをチェックします。
パラメータとして文字列が与えられた場合、与えられたタグと現在のページが一致するかどうかをチェックします。

``` js
<%- is_tag() %>
<%- is_tag('hobby') %>
```

## 文字列操作

### trim

文字列の前後の空白を削除します。

``` js
<%- trim(string) %>
```

### strip_html

文字列からすべてのHTMLタグを取り除きます。

``` js
<%- strip_html(string) %>
```

**例:**

``` js
<%- strip_html('It\'s not <b>important</b> anymore!') %>
// It's not important anymore!
```

### titlecase

文字列をタイトルケースに変換します。

``` js
<%- titlecase(string) %>
```

**例:**

``` js
<%- titlecase('this is an apple') %>
# This is an Apple
```

### markdown

文字列をMarkdownでレンダリングします。

``` js
<%- markdown(str) %>
```

**例:**

``` js
<%- markdown('make me **strong**') %>
// make me <strong>strong</strong>
```

### render

文字列をレンダリングします。

``` js
<%- render(str, engine, [options]) %>
```

**例:**

``` js
<%- render('p(class="example") Test', 'pug'); %>
// <p class="example">Test</p>
```

詳細については、[レンダリング](https://hexo.io/api/rendering)を参照してください。

### word_wrap

テキストを指定された`length`より長くならないように折り返します。`length`はデフォルトで80です。

``` js
<%- word_wrap(str, [length]) %>
```

**例:**

``` js
<%- word_wrap('Once upon a time', 8) %>
// Once upon\n a time
```

### truncate

特定の`length`の後でテキストを切り捨てます。デフォルトは30文字です。

``` js
<%- truncate(text, [options]) %>
```

**例:**

``` js
<%- truncate('Once upon a time in a world far far away', {length: 17}) %>
// Once upon a ti...

<%- truncate('Once upon a time in a world far far away', {length: 17, separator: ' '}) %>
// Once upon a...

<%- truncate('And they found that many people were sleeping better.', {length: 25, omission: '... (continued)'}) %>
// And they f... (continued)
```

### escape_html

文字列中のHTMLエンティティをエスケープします。

``` js
<%- escape_html(str) %>
```

**例:**

``` js
<%- escape_html('<p>Hello "world".</p>') %>
// &lt;p&gt;Hello &quot;world&quot;.&lt;&#x2F;p&gt;
```

## テンプレート

### partial

他のテンプレートファイルを読み込みます。`locals`でローカル変数を定義できます。

``` js
<%- partial(layout, [locals], [options]) %>
```

オプション | 説明 | デフォルト
--- | --- | ---
`cache` | コンテンツをキャッシュします（フラグメントキャッシュを使用） | `false`
`only` | 厳格なローカル変数。テンプレート内で`locals`に設定された変数のみを使用します。 | `false`

### fragment_cache

フラグメント内のコンテンツをキャッシュします。フラグメント内のコンテンツを保存し、次のリクエストが来たときにキャッシュを提供します。

``` js
<%- fragment_cache(id, fn);
```

**例:**

``` js
<%- fragment_cache('header', function(){
  return '<header></header>';
}) %>
```

## 日付と時間

### date

フォーマットされた日付を挿入します。`date`はunix時間、ISO文字列、日付オブジェクト、または[Moment.js]オブジェクトにすることができます。`format`はデフォルトで`date_format`の設定です。

``` js
<%- date(date, [format]) %>
```

**例:**

``` js
<%- date(Date.now()) %>
// 2013-01-01

<%- date(Date.now(), 'YYYY/M/D') %>
// Jan 1 2013
```

### date_xml

XMLフォーマットで日付を挿入します。`date`はunix時間、ISO文字列、日付オブジェクト、または[Moment.js]オブジェクトにすることができます。

``` js
<%- date_xml(date) %>
```

**例:**

``` js
<%- date_xml(Date.now()) %>
// 2013-01-01T00:00:00.000Z
```

### time

フォーマットされた時間を挿入します。`date`はunix時間、ISO文字列、日付オブジェクト、または[Moment.js]オブジェクトにすることができます。`format`はデフォルトで`time_format`の設定です。

``` js
<%- time(date, [format]) %>
```

**例:**

``` js
<%- time(Date.now()) %>
// 13:05:12

<%- time(Date.now(), 'h:mm:ss a') %>
// 1:05:12 pm
```

### full_date

フォーマットされた日付と時間を挿入します。`date`はunix時間、ISO文字列、日付オブジェクト、または[Moment.js]オブジェクトにすることができます。`format`はデフォルトで`date_format + time_format`の設定です。

``` js
<%- full_date(date, [format]) %>
```

**例:**

``` js
<%- full_date(new Date()) %>
// Jan 1, 2013 0:00:00

<%- full_date(new Date(), 'dddd, MMMM Do YYYY, h:mm:ss a') %>
// Tuesday, January 1st 2013, 12:00:00 am
```

### relative_date

現在からの相対的な時間を挿入します。`date`はunix時間、ISO文字列、日付オブジェクト、または[Moment.js]オブジェクトにすることができます。

```js
<%- relative_date(date) %>
```

**例:**

``` js
<%- relative_date(new Date()) %>
// a few seconds ago

<%- relative_date(new Date(1000000000000)) %>
// 22 years ago
```

### time_tag

時間タグを挿入します。`date`はunix時間、ISO文字列、日付オブジェクト、または[Moment.js]オブジェクトにすることができます。`format`はデフォルトで`date_format`の設定です。

```js
<%- time_tag(date, [format]) %>
```

**例:**

``` js
<%- time_tag(new Date()) %>
// <time datetime="2024-01-22T06:35:31.108Z">2024-01-22</time>

<%- time_tag(new Date(), 'MMM-D-YYYY') %>
// <time datetime="2024-01-22T06:35:31.108Z">Jan-22-2024</time>
```

### moment

[Moment.js]ライブラリ。

## リスト

### list_categories

すべてのカテゴリのリストを挿入します。

``` js
<%- list_categories([options]) %>
```

オプション | 説明 | デフォルト
--- | --- | ---
`orderby` | カテゴリの順序 | name
`order` | 並び替えの種類。`1`, `asc` で昇順；`-1`, `desc` で降順 | 1
`show_count` | 各カテゴリの投稿数を表示 | true
`style` | カテゴリリストの表示スタイル。`list` は無順序リストでカテゴリを表示します。`false` または他の値を使用して無効にします。 | list
`separator` | カテゴリ間の区切り文字。（`style` が `list` でない場合のみ機能） | ,
`depth` | 表示するカテゴリのレベル。`0` で全カテゴリと子カテゴリを表示；`-1` は `0` と似ていますが平らに表示；`1` でトップレベルのカテゴリのみ表示。 | 0
`class` | カテゴリリストのクラス名。 | category
`transform` | カテゴリ名の表示を変更する関数。 |
`suffix` | リンクに接尾辞を追加。 | なし

**例:**

``` js
<%- list_categories(post.categories, {
  class: 'post-category',
  transform(str) {
    return titlecase(str);
  }
}) %>

<%- list_categories(post.categories, {
  class: 'post-category',
  transform(str) {
    return str.toUpperCase();
  }
}) %>
```

### list_tags

すべてのタグのリストを挿入します。

``` js
<%- list_tags([options]) %>
```

オプション | 説明 | デフォルト
--- | --- | ---
`orderby` | カテゴリの順序 | name
`order` | 並び替えの種類。`1`, `asc` で昇順；`-1`, `desc` で降順 | 1
`show_count` | 各タグの投稿数を表示 | true
`style` | タグリストの表示スタイル。`list` は無順序リストでタグを表示します。`false` または他の値を使用して無効にします。 | list
`separator` | カテゴリ間の区切り文字。（`style` が `list` でない場合のみ機能） | ,
`class` | タグリストのクラス名（文字列）または各タグのクラスをカスタマイズ（オブジェクト、以下を参照）。 | tag
`transform` | タグ名の表示を変更する関数。[list_categories](#list-categories) の例を参照。 |
`amount` | 表示するタグの数（0 = 無制限） | 0
`suffix` | リンクに接尾辞を追加。 | なし

クラスの高度なカスタマイズ:

オプション | 説明 | デフォルト
--- | --- | ---
`class.ul` | `<ul>` のクラス名（`list` スタイルのみ） | `tag-list` (`list` スタイル)
`class.li` | `<li>` のクラス名（`list` スタイルのみ） | `tag-list-item` (`list` スタイル)
`class.a` | `<a>` のクラス名 | `tag-list-link` (`list` スタイル) `tag-link` (通常スタイル)
`class.label` | タグラベルが格納される `<span>` のクラス名（通常スタイルでのみ、`class.label` が設定されている場合、ラベルは `<span>` に入れられます） | `tag-label` (通常スタイル)
`class.count` | タグカウンタが格納される `<span>` のクラス名（`show_count` が `true` の場合のみ） | `tag-list-count` (`list` スタイル) `tag-count` (通常スタイル)

例:

```ejs
<%- list_tags(site.tags, {class: 'classtest', style: false, separator: ' | '}) %>
<%- list_tags(site.tags, {class: 'classtest', style: 'list'}) %>
<%- list_tags(site.tags, {class: {ul: 'ululul', li: 'lilili', a: 'aaa', count: 'ccc'}, style: false, separator: ' | '}) %>
<%- list_tags(site.tags, {class: {ul: 'ululul', li: 'lilili', a: 'aaa', count: 'ccc'}, style: 'list'}) %>
```

### list_archives

アーカイブのリストを挿入します。

``` js
<%- list_archives([options]) %>
```

オプション | 説明 | デフォルト
--- | --- | ---
`type` | 種類。この値は `yearly` または `monthly` にできます。 | monthly
`order` | 並び替えの種類。`1`, `asc` で昇順；`-1`, `desc` で降順 | 1
`show_count` | 各アーカイブの投稿数を表示 | true
`format` | 日付の形式 | MMMM YYYY
`style` | アーカイブリストの表示スタイル。`list` は無順序リストでアーカイブを表示します。`false` または他の値を使用して無効にします。 | list
`separator` | アーカイブ間の区切り文字。（`style` が `list` でない場合のみ機能） | ,
`class` | アーカイブリストのクラス名。 | archive
`transform` | アーカイブ名の表示を変更する関数。[list_categories](#list-categories) の例を参照。 |

### list_posts

投稿のリストを挿入します。

``` js
<%- list_posts([options]) %>
```

オプション | 説明 | デフォルト
--- | --- | ---
`orderby` | 投稿の順序 | date
`order` | 並び替えの種類。`1`, `asc` で昇順；`-1`, `desc` で降順 | 1
`style` | 投稿リストの表示スタイル。`list` は無順序リストで投稿を表示します。`false` または他の値を使用して無効にします。 | list
`separator` | 投稿間の区切り文字。（`style` が `list` でない場合のみ機能） | ,
`class` | 投稿リストのクラス名。 | post
`amount` | 表示する投稿の数（0 = 無制限） | 6
`transform` | 投稿名の表示を変更する関数。[list_categories](#list-categories) の例を参照。 |

### tagcloud

タグクラウドを挿入します。

``` js
<%- tagcloud([tags], [options]) %>
```

オプション | 説明 | デフォルト
--- | --- | ---
`min_font` | 最小フォントサイズ | 10
`max_font` | 最大フォントサイズ | 20
`unit` | フォントサイズの単位 | px
`amount` | タグの総数 | 無制限
`orderby` | タグの順序 | name
`order` | 並び替えの順序。`1`, `asc` で昇順；`-1`, `desc` で降順 | 1
`color` | タグクラウドを色付け | false
`start_color` | 開始色。hex (`#b700ff`), rgba (`rgba(183, 0, 255, 1)`), hsla (`hsla(283, 100%, 50%, 1)`) または [色キーワード] を使用できます。このオプションは `color` が true の場合のみ機能します。 |
`end_color` | 終了色。hex (`#b700ff`), rgba (`rgba(183, 0, 255, 1)`), hsla (`hsla(283, 100%, 50%, 1)`) または [色キーワード] を使用できます。このオプションは `color` が true の場合のみ機能します。 |
`class` | タグのクラス名の接頭辞
`level` | 異なるクラス名の数。このオプションは `class` が設定されている場合のみ機能します。 | 10
`show_count` (+6.3.0) | 各タグの投稿数を表示 | false
`count_class` (+6.3.0) | タグカウントのクラス名 | count

**例:**

``` js
// デフォルトオプション
<%- tagcloud() %>

// タグの数を30に制限
<%- tagcloud({amount: 30}) %>
```

## その他の機能

### paginator

ページネーターを挿入します。

``` js
<%- paginator(options) %>
```

オプション | 説明 | デフォルト
--- | --- | ---
`base` | ベースURL | /
`format` | URL形式 | page/%d/
`total` | ページの総数 | 1
`current` | 現在のページ番号 | 0
`prev_text` | 前のページへのリンクテキスト。`prev_next`がtrueに設定されている場合のみ機能します。 | Prev
`next_text` | 次のページへのリンクテキスト。`prev_next`がtrueに設定されている場合のみ機能します。 | Next
`space` | スペーステキスト | &hellip;
`prev_next` | 前後のリンクを表示 | true
`end_size` | 開始と終了側に表示されるページの数 | 1
`mid_size` | 現在のページを除いて表示されるページの数 | 2
`show_all` | すべてのページを表示。これがtrueに設定されている場合、`end_size`と`mid_size`は機能しません | false
`escape` | HTMLタグをエスケープ | true
`page_class` (+6.3.0) | ページクラス名 | `page-number`
`current_class` (+6.3.0) | 現在のページクラス名 | `current`
`space_class` (+6.3.0) | スペースクラス名 | `space`
`prev_class` (+6.3.0) | 前のページクラス名 | `extend prev`
`next_class` (+6.3.0) | 次のページクラス名 | `extend next`
`force_prev_next` (+6.3.0) | 前後のリンクを強制的に表示 | false


**例:**

``` js
<%- paginator({
  prev_text: '<',
  next_text: '>'
}) %>
```

``` html
<!-- Rendered as -->
<a href="/1/">&lt;</a>
<a href="/1/">1</a>
2
<a href="/3/">3</a>
<a href="/3/">&gt;</a>
```

``` js
<%- paginator({
  prev_text: '<i class="fa fa-angle-left"></i>',
  next_text: '<i class="fa fa-angle-right"></i>',
  escape: false
}) %>
```

``` html
<!-- Rendered as -->
<a href="/1/"><i class="fa fa-angle-left"></i></a>
<a href="/1/">1</a>
2
<a href="/3/">3</a>
<a href="/3/"><i class="fa fa-angle-right"></i></a>
```

### search_form

Google検索フォームを挿入します。

``` js
<%- search_form(options) %>
```

オプション | 説明 | デフォルト
--- | --- | ---
`class` | フォームのクラス名 | search-form
`text` | 検索ヒントワード | Search
`button` | 検索ボタンを表示。値はbooleanまたはstringにすることができます。値がstringの場合、それはボタンのテキストになります。 | false

### number_format

数値をフォーマットします。

``` js
<%- number_format(number, [options]) %>
```

オプション | 説明 | デフォルト
--- | --- | ---
`precision` | 数値の精度。値は`false`または非負の整数にすることができます。 | false
`delimiter` | 千の区切り文字 | ,
`separator` | 整数部と小数部を分けるセパレータ | .

**例:**

``` js
<%- number_format(12345.67, {precision: 1}) %>
// 12,345.68

<%- number_format(12345.67, {precision: 4}) %>
// 12,345.6700

<%- number_format(12345.67, {precision: 0}) %>
// 12,345

<%- number_format(12345.67, {delimiter: ''}) %>
// 12345.67

<%- number_format(12345.67, {separator: '/'}) %>
// 12,345/67
```

### meta_generator

[generator タグ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)を挿入します。

``` js
<%- meta_generator() %>
```

**例:**

``` js
<%- meta_generator() %>
// <meta name="generator" content="Hexo 4.0.0">
```

### open_graph

[Open Graph] データを挿入します。

``` js
<%- open_graph([options]) %>
```

オプション | 説明 | デフォルト
--- | --- | ---
`title` | ページタイトル (`og:title`) | `page.title`
`type` | ページタイプ (`og:type`) | blog
`url` | ページURL (`og:url`) | `url`
`image` | ページ画像 (`og:image`) | コンテンツ内の全画像
`author` | 記事の著者 (`og:article:author`) | `config.author`
`date` | 記事の公開時間 (`og:article:published_time`) | ページの公開時間
`updated` | 記事の更新時間 (`og:article:modified_time`) | ページの更新時間
`language` | 記事の言語 (`og:locale`) | `page.lang || page.language || config.language`
`site_name` | サイト名 (`og:site_name`) | `config.title`
`description` | ページの説明 (`og:description`) | ページの抜粋またはコンテンツの最初の200文字
`twitter_card` | Twitter カードタイプ (`twitter:card`) | summary
`twitter_id` | Twitter ID (`twitter:creator`) |
`twitter_site` | Twitter サイト (`twitter:site`) |
`twitter_image` | Twitter 画像 (`twitter:image`) |
`google_plus` | Google+ プロフィールリンク |
`fb_admins` | Facebook 管理者ID |
`fb_app_id` | Facebook アプリID |

### toc

コンテンツ内の全ての見出しタグ (h1~h6) を解析し、目次を挿入します。

``` js
<%- toc(str, [options]) %>
```

オプション | 説明 | デフォルト
--- | --- | ---
`class` | クラス名 | `toc`
`class_item` (+6.3.0) | アイテムのクラス名 | `${class}-item`
`class_link` (+6.3.0) | リンクのクラス名 | `${class}-link`
`class_text` (+6.3.0) | テキストのクラス名 | `${class}-text`
`class_child` (+6.3.0) | 子のクラス名 | `${class}-child`
`class_number` (+6.3.0) | 番号のクラス名 | `${class}-number`
`class_level` (+6.3.0) | レベルのクラス名接頭辞 | `${class}-level`
`list_number` | リスト番号を表示 | true
`max_depth` | 生成される目次の最大見出し深さ | 6
`min_depth` | 生成される目次の最小見出し深さ | 1

**例:**

``` js
<%- toc(page.content) %>
```

#### data-toc-unnumbered (+6.1.0)

属性 `data-toc-unnumbered="true"` を持つ見出しは番号無しとしてマークされます（リスト番号が表示されません）。

{% note warn "Warning!" %}
`data-toc-unnumbered="true"` を使用するには、レンダラーがCSSクラスを追加するオプションを持っている必要があります。

以下のPRを参照してください。

- https://github.com/hexojs/hexo/pull/4871
- https://github.com/hexojs/hexo-util/pull/269
- https://github.com/hexojs/hexo-renderer-markdown-it/pull/174
{% endnote %}

[color keywords]: http://www.w3.org/TR/css3-color/#svg-color
[Moment.js]: http://momentjs.com/
[Open Graph]: http://ogp.me/
