---
title: ヘルパー
---

ヘルパーを使うことで、テンプレートにスニペットを素早く挿入できます。 ソースファイル内では使用できません。

独自のカスタムヘルパーを簡単に[作成する](../api/helper.html)ほか、既に用意されているヘルパーを使うこともできます。

{% youtube Uc53pW0GJHU %}

## URL

### url_for

ルートパスが先頭に付与されたURLを返します。 出力は自動的にエンコードされます。

```js
<%- url_for(path, [option]) %>
```

| オプション      | 説明       | デフォルト                    |
| ---------- | -------- | ------------------------ |
| `relative` | 相対リンクを出力 | `config.relative_link`の値 |

**例:**

```yml
_config.yml
root: /blog/ # example
```

```js
<%- url_for('/a/path') %>
// /blog/a/path
```

相対リンクはデフォルトで`relative_link`オプションに従います。 例えば、記事やページのパスが '/foo/bar/index.html' の場合:

```yml
_config.yml
relative_link: true
```

```js
<%- url_for('/css/style.css') %>
// ../../css/style.css

/* オプションの上書き
 * `relative_link`が有効な状態でも絶対リンクを出力、
 * またはその逆も行えます。
 */
<%- url_for('/css/style.css', {relative: false}) %>
// /css/style.css
 */
<%- url_for('/css/style.css', {relative: false}) %>
// /css/style.css
```

### relative_url

`from`から`to`への相対URLを返します。

```js
<%- relative_url(from, to) %>
```

**例:**

```js
<%- relative_url('foo/bar/', 'css/style.css') %>
// ../../css/style.css
```

### full_url_for

`config.url`を先頭に付与したURLを返します。 出力は自動的にエンコードされます。

```js
<%- full_url_for(path) %>
```

**例:**

```yml
_config.yml
url: https://example.com/blog # example
```

```js
<%- full_url_for('/a/path') %>
// https://example.com/blog/a/path
```

### gravatar

メールアドレスからGravatar画像URLを返します。

[options] パラメータを指定しない場合、デフォルトのオプションが適用されます。 指定する場合、サイズパラメータとして Gravatar に渡される数値を設定します。 最後に、これをオブジェクトに設定すると、Gravatar のパラメーターのクエリ文字列に変換されます。

```js
<%- gravatar(email, [options]) %>
```

| オプション | 説明        | デフォルト |
| ----- | --------- | ----- |
| `s`   | 出力する画像サイズ | 80    |
| `d`   | デフォルト画像   |       |
| `f`   | デフォルトを強制  |       |
| `r`   | レーティング    |       |

詳細: [Gravatar](https://en.gravatar.com/site/implement/images/)

**例:**

```js
<%- gravatar('a@abc.com') %>
// https://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787

<%- gravatar('a@abc.com', 40) %>
// https://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787?s=40

<%- gravatar('a@abc.com' {s: 40, d: 'https://via.placeholder.com/150'}) %>
// https://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787?s=40&d=https%3A%2F%2Fvia.placeholder.com%2F150
```

## HTMLタグ

### css

CSSファイルを読み込みます。 `path` には文字列、配列、オブジェクト、またはオブジェクトの配列を指定できます。 [`/<root>/`](configuration#URL)の値が先頭に付与され、`.css` 拡張子が `path` に追加されます。 カスタム属性にはオブジェクトを指定します。

```js
<%- css(path, ...) %>
```

**例:**

```js
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

JavaScriptファイルを読み込みます。 `path` には文字列、配列、オブジェクト、またはオブジェクトの配列を指定できます。 [`/<root>/`](configuration#URL)の値が先頭に付与され、`.js` 拡張子が `path` に追加されます。 カスタム属性にはオブジェクトを指定します。

```js
<%- js(path, ...) %>
```

**例:**

```js
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

```js
<%- link_to(path, [text], [options]) %>
```

| オプション      | 説明             | デフォルト |
| ---------- | -------------- | ----- |
| `external` | リンクを新しいタブで開くか？ | false |
| `class`    | クラス名           |       |
| `id`       | ID             |       |

**例:**

```js
<%- link_to('http://www.google.com') %>
// <a href="http://www.google.com" title="http://www.google.com">http://www.google.com</a>

<%- link_to('http://www.google.com', 'Google') %>
// <a href="http://www.google.com" title="Google">Google</a>

<%- link_to('http://www.google.com', 'Google', {external: true}) %>
// <a href="http://www.google.com" title="Google" target="_blank" rel="noopener">Google</a>
```

### mail_to

メールリンクを挿入します。

```js
<%- mail_to(path, [text], [options]) %>
```

| オプション     | 説明     |
| --------- | ------ |
| `class`   | クラス名   |
| `id`      | ID     |
| `subject` | メールの件名 |
| `cc`      | CC     |
| `bcc`     | BCC    |
| `body`    | メールの内容 |

**例:**

```js
<%- mail_to('a@abc.com') %>
// <a href="mailto:a@abc.com" title="a@abc.com">a@abc.com</a>

<%- mail_to('a@abc.com', 'Email') %>
// <a href="mailto:a@abc.com" title="Email">Email</a>
```

### image_tag

画像を挿入します。

```js
<%- image_tag(path, [options]) %>
```

| オプション    | 説明        |
| -------- | --------- |
| `alt`    | 画像の代替テキスト |
| `class`  | クラス名      |
| `id`     | ID        |
| `width`  | 画像の幅      |
| `height` | 画像の高さ     |

### favicon_tag

ファビコンを挿入します。

```js
<%- favicon_tag(path) %>
```

### feed_tag

フィードリンクを挿入します。

```js
<%- feed_tag(path, [options]) %>
```

| オプション   | 説明        | デフォルト          |
| ------- | --------- | -------------- |
| `title` | フィードのタイトル | `config.title` |
| `type`  | フィードのタイプ  |                |

**例:**

```js
<%- feed_tag('atom.xml') %>
// <link rel="alternate" href="/atom.xml" title="Hexo" type="application/atom+xml">

<%- feed_tag('rss.xml', { title: 'RSS Feed', type: 'rss' }) %>
// <link rel="alternate" href="/atom.xml" title="RSS Feed" type="application/atom+xml">

/* Defaults to hexo-generator-feed's config if no argument */
<%- feed_tag() %>
// <link rel="alternate" href="/atom.xml" title="Hexo" type="application/atom+xml">
```

## 条件付きタグ

### is_current

`path`が現在のページのURLと一致するかチェックします。 厳密な比較を行う場合`strict`オプションを指定します。

```js
<%- is_current(path, [strict]) %>
```

### is_home

現在のページがホームページの最初のページかチェックします。

```js
<%- is_home() %>
```

### is_home_first_page (+6.3.0)

現在のページがホームページの最初のページかチェックします。

```js
<%- is_home_first_page() %>
```

### is_post

現在のページが固定ページかチェックします。

```js
<%- is_post() %>
```

### is_page

現在のページが記事ページかチェックします。

```js
<%- is_page() %>
```

### is_archive

現在のページが年別アーカイブページかチェックします。

```js
<%- is_archive() %>
```

### is_year

現在のページが月別アーカイブページかチェックします。

```js
<%- is_year() %>
```

### is_month

現在のページがアーカイブページかチェックします。

```js
<%- is_month() %>
```

### is_category

現在のページがカテゴリーページかチェックします。 パラメータとして文字列が与えられた場合、現在のページが与えられたカテゴリーと一致するかチェックします。

```js
<%- is_category() %>
<%- is_category('hobby') %>
```

### is_tag

現在のページがタグページかチェックします。 パラメータとして文字列が与えられた場合、現在のページが与えられたタグと一致するかチェックします。

```js
<%- is_tag() %>
<%- is_tag('hobby') %>
```

## 文字列操作

### trim

文字列の前後の空白を除去します。

```js
<%- trim(string) %>
```

### strip_html

文字列からすべてのHTMLタグを除去します。

```js
<%- strip_html(string) %>
```

**例:**

```js
<%- strip_html('It\'s not <b>important</b> anymore!') %>
// It's not important anymore!
```

### titlecase

文字列をタイトルケースに変換します。

```js
<%- titlecase(string) %>
```

**例:**

```js
<%- titlecase('this is an apple') %>
# This is an Apple
```

### markdown

Markdown文字列をレンダリングします。

```js
<%- markdown(str) %>
```

**例:**

```js
<%- markdown('make me **strong**') %>
// make me <strong>strong</strong>
```

### render

文字列をレンダリングします。

```js
<%- render(str, engine, [options]) %>
```

**例:**

```js
<%- render('p(class="example") Test', 'pug'); %>
// <p class="example">Test</p>
```

詳細については、[レンダリング](../api/rendering)を参照してください。

### word_wrap

テキストを指定された`length`以内に折り返します。 `length`はデフォルトで80です。

```js
<%- word_wrap(str, [length]) %>
```

**例:**

```js
<%- word_wrap('Once upon a time', 8) %>
// Once upon\n a time
```

### truncate

テキストを指定された`length`以内に切り捨てます。 デフォルトは30文字です。

```js
<%- truncate(text, [options]) %>
```

**例:**

```js
<%- truncate('Once upon a time in a world far far away', {length: 17}) %>
// Once upon a ti...

<%- truncate('Once upon a time in a world far far away', {length: 17, separator: ' '}) %>
// Once upon a...

<%- truncate('And they found that many people were sleeping better.', {length: 25, omission: '... (continued)'}) %>
// And they f... (continued)
```

### escape_html

文字列中のHTMLエンティティをエスケープします。

```js
<%- escape_html(str) %>
```

**例:**

```js
<%- escape_html('<p>Hello "world".</p>') %>
// &lt;p&gt;Hello &quot;world&quot;.&lt;&#x2F;p&gt;
```

## テンプレート

### partial

他のテンプレートファイルを読み込みます。 `locals`でローカル変数を定義できます。

```js
<%- partial(layout, [locals], [options]) %>
```

| オプション   | 説明                                           | デフォルト   |
| ------- | -------------------------------------------- | ------- |
| `cache` | コンテンツをキャッシュします（フラグメントキャッシュを使用）               | `false` |
| `only`  | 厳格なローカル変数。 テンプレート内で`locals`に設定された変数のみを使用します。 | `false` |

### fragment_cache

フラグメント内のコンテンツをキャッシュします。 以降のリクエストではそれを使います。

```js
<%- fragment_cache(id, fn);
```

**例:**

```js
<%- fragment_cache('header', function(){
  return '<header></header>';
}) %>
```

## 日付と時刻

### date

フォーマットされた日付を挿入します。 `date`にはunix時刻、ISO文字列、Dateオブジェクト、または[Moment.js][]オブジェクトを指定できます。 `format`はデフォルトで`date_format`設定が使われます。

```js
<%- date(date, [format]) %>
```

**例:**

```js
<%- date(Date.now()) %>
// 2013-01-01

<%- date(Date.now(), 'YYYY/M/D') %>
// Jan 1 2013
```

### date_xml

XMLフォーマットで日付を挿入します。 `date`にはunix時刻、ISO文字列、Dateオブジェクト、または[Moment.js][]オブジェクトを指定できます。

```js
<%- date_xml(date) %>
```

**例:**

```js
<%- date_xml(Date.now()) %>
// 2013-01-01T00:00:00.000Z
```

### time

フォーマットされた時刻を挿入します。 `date`にはunix時刻、ISO文字列、Dateオブジェクト、または[Moment.js][]オブジェクトを指定できます。 `format`はデフォルトで`time_format`設定が使われます。

```js
<%- time(date, [format]) %>
```

**例:**

```js
<%- time(Date.now()) %>
// 13:05:12

<%- time(Date.now(), 'h:mm:ss a') %>
// 1:05:12 pm
```

### full_date

フォーマットされた日付と時刻を挿入します。 `date`にはunix時刻、ISO文字列、Dateオブジェクト、または[Moment.js][]オブジェクトを指定できます。 `format`はデフォルトで`date_format + time_format`の設定が使われます。

```js
<%- full_date(date, [format]) %>
```

**例:**

```js
<%- full_date(new Date()) %>
// Jan 1, 2013 0:00:00

<%- full_date(new Date(), 'dddd, MMMM Do YYYY, h:mm:ss a') %>
// Tuesday, January 1st 2013, 12:00:00 am
```

### relative_date

現在からの相対的な時間を挿入します。 `date`にはunix時刻、ISO文字列、Dateオブジェクト、または[Moment.js][]オブジェクトを指定できます。

```js
<%- relative_date(date) %>
```

**例:**

```js
<%- relative_date(new Date()) %>
// a few seconds ago

<%- relative_date(new Date(1000000000000)) %>
// 22 years ago
```

### time_tag

timeタグを挿入します。 `date`にはunix時刻、ISO文字列、Dateオブジェクト、または[Moment.js][]オブジェクトを指定できます。 `format`はデフォルトで`date_format`の設定です。

```js
<%- time_tag(date, [format]) %>
```

**例:**

```js
<%- time_tag(new Date()) %>
// <time datetime="2024-01-22T06:35:31.108Z">2024-01-22</time>

<%- time_tag(new Date(), 'MMM-D-YYYY') %>
// <time datetime="2024-01-22T06:35:31.108Z">Jan-22-2024</time>
```

### moment

[Moment.js][]ライブラリ。

## 一覧

### list_categories

カテゴリの一覧を挿入します。

```js
<%- list_categories([options]) %>
```

| オプション        | 説明                                                                              | デフォルト    |
| ------------ | ------------------------------------------------------------------------------- | -------- |
| `orderby`    | カテゴリの順序                                                                         | name     |
| `order`      | 並び順。 `1`,`asc` で昇順；`-1`,`desc` で降順                                              | 1        |
| `show_count` | 各カテゴリの記事数を表示するか？                                                                | true     |
| `style`      | 一覧の表示スタイル。 `list` は順序なしリストでカテゴリを表示。 `false` または他の値で無効化。                         | list     |
| `separator`  | カテゴリの区切り文字。 （`style` が `list` でない場合のみ機能）                                        | ,        |
| `depth`      | 表示するカテゴリのレベル。 `0` で全カテゴリと子カテゴリを表示；`-1` は `0` と同様だがフラットに表示；`1` でトップレベルのカテゴリのみ表示。 | 0        |
| `class`      | 一覧のクラス名。                                                                        | category |
| `transform`  | カテゴリ名の表示を変更する関数。                                                                |          |
| `suffix`     | リンクに接尾辞を追加。                                                                     | None     |

**例:**

```js
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

タグの一覧を挿入します。

```js
<%- list_tags([options]) %>
```

| オプション        | 説明                                                        | デフォルト |
| ------------ | --------------------------------------------------------- | ----- |
| `orderby`    | タグの順序                                                     | name  |
| `order`      | 並び順。 `1`,`asc` で昇順；`-1`,`desc` で降順                        | 1     |
| `show_count` | 各タグの記事数を表示するか？                                            | true  |
| `style`      | 一覧の表示スタイル。 `list` は順序なしリストでタグを表示。 `false` または他の値で無効化。     | list  |
| `separator`  | タグの区切り文字。 （`style` が `list` でない場合のみ機能）                    | ,     |
| `class`      | 一覧のクラス名（文字列）または各タグのクラスをカスタマイズ（オブジェクト、以下を参照）。              | tag   |
| `transform`  | タグ名の表示を変更する関数。 [list_categories](#list-categories) の例を参照。 |       |
| `amount`     | 表示するタグの数（0 = 無制限）                                         | 0     |
| `suffix`     | リンクに接尾辞を追加。                                               | None  |

クラスの高度なカスタマイズ:

| オプション         | 説明                                                                                             | デフォルト                                               |
| ------------- | ---------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| `class.ul`    | `<ul>` のクラス名（`list` スタイルのみ）                                                              | `tag-list` (`list` スタイル)                            |
| `class.li`    | `<li>` のクラス名（`list` スタイルのみ）                                                              | `tag-list-item` (`list` スタイル)                       |
| `class.a`     | `<a>` のクラス名                                                                              | `tag-list-link` (`list` スタイル) `tag-link` (通常スタイル)   |
| `class.label` | タグラベルを格納する `<span>` のクラス名（通常スタイルで`class.label` が設定されている場合のみ、ラベルは `<span>` に入れられます） | `tag-label` (通常スタイル)                                |
| `class.count` | タグカウンタが格納される `<span>` のクラス名（`show_count` が `true` の場合のみ）                                 | `tag-list-count` (`list` スタイル) `tag-count` (通常スタイル) |

例:

```ejs
<%- list_tags(site.tags, {class: 'classtest', style: false, separator: ' | '}) %>
<%- list_tags(site.tags, {class: 'classtest', style: 'list'}) %>
<%- list_tags(site.tags, {class: {ul: 'ululul', li: 'lilili', a: 'aaa', count: 'ccc'}, style: false, separator: ' | '}) %>
<%- list_tags(site.tags, {class: {ul: 'ululul', li: 'lilili', a: 'aaa', count: 'ccc'}, style: 'list'}) %>
```

### list_archives

記事の一覧を挿入します。

```js
<%- list_archives([options]) %>
```

| オプション        | 説明                                                           | デフォルト     |
| ------------ | ------------------------------------------------------------ | --------- |
| `type`       | 一覧の種類。 `yearly` または `monthly` を指定できます。                       | monthly   |
| `order`      | 並び順。 `1`,`asc` で昇順；`-1`,`desc` で降順                           | 1         |
| `show_count` | 各アーカイブの記事数を表示するか？                                            | true      |
| `format`     | 日付の形式                                                        | MMMM YYYY |
| `style`      | 一覧の表示スタイル。 `list` は順序なしリストでアーカイブを表示。 `false` または他の値で無効化。     | list      |
| `separator`  | アーカイブの区切り文字。 （`style` が `list` でない場合のみ機能）                    | ,         |
| `class`      | 一覧のクラス名。                                                     | archive   |
| `transform`  | アーカイブ名の表示を変更する関数。 [list_categories](#list-categories) の例を参照。 |           |

### list_posts

アーカイブの一覧を挿入します。

```js
<%- list_posts([options]) %>
```

| オプション       | 説明                                                        | デフォルト |
| ----------- | --------------------------------------------------------- | ----- |
| `orderby`   | 記事の順序                                                     | date  |
| `order`     | 並び順。 `1`,`asc` で昇順；`-1`,`desc` で降順                        | 1     |
| `style`     | 一覧の表示スタイル。 `list` は順序なしリストで記事を表示。 `false` または他の値で無効化。     | list  |
| `separator` | 記事の区切り文字。 （`style` が `list` でない場合のみ機能）                    | ,     |
| `class`     | 一覧のクラス名。                                                  | post  |
| `amount`    | 表示する記事の数（0 = 無制限）                                         | 6     |
| `transform` | 記事名の表示を変更する関数。 [list_categories](#list-categories) の例を参照。 |       |

### tagcloud

タグクラウドを挿入します。

```js
<%- tagcloud([tags], [options]) %>
```

| オプション                  | 説明                                                                                                                                              | デフォルト     |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `min_font`             | 最小フォントサイズ                                                                                                                                       | 10        |
| `max_font`             | 最大フォントサイズ                                                                                                                                       | 20        |
| `unit`                 | フォントサイズの単位                                                                                                                                      | px        |
| `amount`               | タグの総数                                                                                                                                           | unlimited |
| `orderby`              | タグの順序                                                                                                                                           | name      |
| `order`                | 並び順。 `1`,`asc` で昇順；`-1`,`desc` で降順                                                                                                              | 1         |
| `color`                | タグクラウドを色付けするか？                                                                                                                                  | false     |
| `start_color`          | 開始色。 hex (`#b700ff`), rgba (`rgba(183, 0, 255, 1)`), hsla (`hsla(283, 100%, 50%, 1)`) または [色キーワード][] を指定可能。 このオプションは `color` が true の場合のみ機能します。 |           |
| `end_color`            | 終了色。 hex (`#b700ff`), rgba (`rgba(183, 0, 255, 1)`), hsla (`hsla(283, 100%, 50%, 1)`) または [色キーワード][] を指定可能。 このオプションは `color` が true の場合のみ機能します。 |           |
| `class`                | タグのクラス名の接頭辞                                                                                                                                     |           |
| `level`                | 異なるクラス名の数。 このオプションは `class` が設定されている場合のみ機能します。                                                                                                  | 10        |
| `show_count` (+6.3.0)  | 各タグの記事数を表示                                                                                                                                      | false     |
| `count_class` (+6.3.0) | タグカウントのクラス名                                                                                                                                     | count     |

**例:**

```js
// Default options
<%- tagcloud() %>

// Limit number of tags to 30
<%- tagcloud({amount: 30}) %>
```

## その他の機能

### paginator

ページネーターを挿入します。

```js
<%- paginator(options) %>
```

| オプション                      | 説明                                                            | デフォルト         |
| -------------------------- | ------------------------------------------------------------- | ------------- |
| `base`                     | ベースURL                                                        | /             |
| `format`                   | URL形式                                                         | page/%d/      |
| `total`                    | ページの総数                                                        | 1             |
| `current`                  | 現在のページ番号                                                      | 0             |
| `prev_text`                | 前のページへのリンクテキスト。 `prev_next`がtrueに設定されている場合のみ機能します。            | Prev          |
| `next_text`                | 次のページへのリンクテキスト。 `prev_next`がtrueに設定されている場合のみ機能します。            | Next          |
| `space`                    | スペーステキスト                                                      | &hellp;       |
| `prev_next`                | 前後のリンクを表示するか？                                                 | true          |
| `end_size`                 | 開始と終了の直前と直後に表示されるページの数                                        | 1             |
| `mid_size`                 | 現在のページの前後に表示されるページの数                                          | 2             |
| `show_all`                 | すべてのページを表示するか？ これがtrueに設定されている場合、`end_size`と`mid_size`は機能しません | false         |
| `escape`                   | HTMLタグをエスケープ                                                  | true          |
| `page_class` (+6.3.0)      | ページクラス名                                                       | `page-number` |
| `current_class` (+6.3.0)   | 現在のページクラス名                                                    | `current`     |
| `space_class` (+6.3.0)     | スペースクラス名                                                      | `space`       |
| `prev_class` (+6.3.0)      | 前のページクラス名                                                     | `extend prev` |
| `next_class` (+6.3.0)      | 次のページクラス名                                                     | `extend next` |
| `force_prev_next` (+6.3.0) | 前後のリンクを強制的に表示                                                 | false         |

**例:**

```js
<%- paginator({
  prev_text: '<',
  next_text: '>'
}) %>
```

```html
<!-- Rendered as -->
<a href="/1/">&lt;</a>
<a href="/1/">1</a>
2
<a href="/3/">3</a>
<a href="/3/">&gt;</a>
```

```js
<%- paginator({
  prev_text: '<i class="fa fa-angle-left"></i>',
  next_text: '<i class="fa fa-angle-right"></i>',
  escape: false
}) %>
```

```html
<!-- Rendered as -->
<a href="/1/"><i class="fa fa-angle-left"></i></a>
<a href="/1/">1</a>
2
<a href="/3/">3</a>
<a href="/3/"><i class="fa fa-angle-right"></i></a>
```

### search_form

Google検索フォームを挿入します。

```js
<%- search_form(options) %>
```

| オプション    | 説明                                                          | デフォルト       |
| -------- | ----------------------------------------------------------- | ----------- |
| `class`  | フォームのクラス名                                                   | search-form |
| `text`   | 検索ヒントワード                                                    | Search      |
| `button` | 検索ボタンを表示。 booleanまたはstringを指定できます。 stringの場合はボタンのテキストになります。 | false       |

### number_format

数値をフォーマットします。

```js
<%- number_format(number, [options]) %>
```

| オプション       | 説明                         | デフォルト |
| ----------- | -------------------------- | ----- |
| `precision` | 数値の精度。 `false`または非負の整数を指定。 | false |
| `delimiter` | 千の位の区切り文字                  | ,     |
| `separator` | 整数部と小数部を分けるセパレータ           | .     |

**例:**

```js
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

```js
<%- meta_generator() %>
```

**例:**

```js
<%- meta_generator() %>
// <meta name="generator" content="Hexo 4.0.0">
```

### open_graph

[Open Graph][] データを挿入します。

```js
<%- open_graph([options]) %>
```

| オプション           | 説明                                    | デフォルト                                                   |
| --------------- | ------------------------------------- | ------------------------------------------------------- |
| `title`         | ページタイトル (`og:title`)                  | `page.title`                                            |
| `type`          | ページタイプ (`og:type`)                    | article(post page)<br>website(non-post page)      |
| `url`           | ページURL (`og:url`)                     | `url`                                                   |
| `image`         | ページ画像 (`og:image`)                    | コンテンツ内の全画像                                              |
| `author`        | 記事の著者 (`og:article:author`)           | `config.author`                                         |
| `date`          | 記事の公開時刻 (`og:article:published_time`) | ページの公開時刻                                                |
| `updated`       | 記事の更新時刻 (`og:article:modified_time`)  | ページの更新時刻                                                |
| `language`      | 記事の言語 (`og:locale`)                   | `page.lang \|\| page.language \|\| config.language` |
| `site_name`     | サイト名 (`og:site_name`)                 | `config.title`                                          |
| `description`   | ページの説明 (`og:description`)             | ページの抜粋またはコンテンツの最初の200文字                                 |
| `twitter_card`  | Twitter カードタイプ (`twitter:card`)       | summary                                                 |
| `twitter_id`    | Twitter ID (`twitter:creator`)        |                                                         |
| `twitter_site`  | Twitter サイト (`twitter:site`)          |                                                         |
| `twitter_image` | Twitter 画像 (`twitter:image`)          |                                                         |
| `google_plus`   | Google+ プロフィールリンク                     |                                                         |
| `fb_admins`     | Facebook 管理者ID                        |                                                         |
| `fb_app_id`     | Facebook アプリID                        |                                                         |

### toc

コンテンツ内の全ての見出しタグ (h1~h6) を解析し、目次を挿入します。

```js
<%- toc(str, [options]) %>
```

| オプション                   | 説明              | デフォルト             |
| ----------------------- | --------------- | ----------------- |
| `class`                 | クラス名            | `toc`             |
| `class_item` (+6.3.0)   | アイテムのクラス名       | `${class}-item`   |
| `class_link` (+6.3.0)   | リンクのクラス名        | `${class}-link`   |
| `class_text` (+6.3.0)   | テキストのクラス名       | `${class}-text`   |
| `class_child` (+6.3.0)  | 子のクラス名          | `${class}-child`  |
| `class_number` (+6.3.0) | 番号のクラス名         | `${class}-number` |
| `class_level` (+6.3.0)  | レベルのクラス名接頭辞     | `${class}-level`  |
| `list_number`           | リスト番号を表示するか？    | true              |
| `max_depth`             | 生成される目次の最大見出し深さ | 6                 |
| `min_depth`             | 生成される目次の最小見出し深さ | 1                 |
| `max_items` (+7.3.0)    | 生成される目次の最大項目数   | `Infinity`        |

**例:**

```js
<%- toc(page.content) %>
```

#### data-toc-unnumbered (+6.1.0)

属性 `data-toc-unnumbered="true"` を持つ見出しは番号無しとしてマークされます（リスト番号が表示されません）。

{% note warn "Warning!" %}
`data-toc-unnumbered="true"` を使用するには、CSSクラスを追加できるレンダラーを使う必要があります。

以下のPRを参照してください。

- https://github.com/hexojs/hexo/pull/4871
- https://github.com/hexojs/hexo-util/pull/269
- https://github.com/hexojs/hexo-renderer-markdown-it/pull/174
  {% endnote %}

[色キーワード]: http://www.w3.org/TR/css3-color/#svg-color
[Moment.js]: http://momentjs.com/
[Open Graph]: http://ogp.me/
