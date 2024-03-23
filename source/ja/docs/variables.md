---
title: 変数
---

{% youtube T9oAax-IRw0 %}

### グローバル変数

変数 | 説明 | タイプ
--- | --- | ---
`site` | サイト全体の情報。 | `object`; [サイト変数]を参照
`page` | ページ固有の情報とFront Matterで設定されたカスタム変数。 | `object`; [ページ変数]を参照
`config` | サイト設定。 | `object` (あなたのサイトの_configファイル)
`theme` | テーマ設定。サイト設定から継承。 | `object` (あなたのテーマの_configファイル)
`path` | 現在のページのパス | `string`
`url` | 現在のページの完全なURL | `string`
`env` | 環境変数 | ???

{% note warn %}
LodashはHexo 5.0.0以降、グローバル変数から削除されました。[You-Dont-Need-Lodash-Underscore](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore)が移行に役立つかもしれません。
{% endnote %}

### サイト変数

変数 | 説明 | タイプ
--- | --- | ---
`site.posts` | 全ての投稿 | `array` of `post` objects
`site.pages` | 全てのページ | `array` of `page` objects
`site.categories` | 全てのカテゴリ | `array` of ???
`site.tags` | 全てのタグ | `array` of ???

### ページ変数

**記事 (`page`)**

変数 | 説明 | タイプ
--- | --- | ---
`page.title` | 記事のタイトル | `string`
`page.date` | 記事の作成日 | [Moment.js] オブジェクト
`page.updated` | 記事の最終更新日 | [Moment.js] オブジェクト
`page.comments` | コメントが有効か？ | `boolean`
`page.layout` | レイアウト名 | `string`
`page.content` | 記事の完全な処理済みコンテンツ | `string`
`page.excerpt` | 記事の抜粋 | `string`
`page.more` | 抜粋を除いた記事の内容 | `string`
`page.source` | ソースファイルのパス | `string`
`page.full_source` | ソースファイルの完全なパス | `string`
`page.path` | 記事のURL（ルートURLを除く）。テーマでは通常 `url_for(page.path)` を使用します。 | `string`
`page.permalink` | 記事の完全な（エンコードされた）URL | `string`
`page.prev` | 前の投稿、最初の投稿の場合は `null` | ???
`page.next` | 次の投稿、最後の投稿の場合は `null` | ???
`page.raw` | 記事の生データ | ???
`page.photos` | 記事の写真（ギャラリー投稿で使用） | array of ???
`page.link` | 記事の外部リンク（リンク投稿で使用） | `string`

**投稿 (`post`):** `page` レイアウトと同じですが、以下の変数が追加されます。

変数 | 説明 | タイプ
--- | --- | ---
`page.published` | 投稿が下書きでない場合はTrue | `boolean`
`page.categories` | 投稿の全カテゴリ | `array` of ???
`page.tags` | 投稿の全タグ | `array` of ???

**ホーム (`index`)**

変数 | 説明 | タイプ
--- | --- | ---
`page.per_page` | 1ページあたりの投稿表示数 | `number`
`page.total` | ページの総数 | `number`
`page.current` | 現在のページ番号 | `number`
`page.current_url` | 現在のページのURL | `string`
`page.posts` | このページの投稿 ([データモデル](https://hexojs.github.io/warehouse/)) | `object`
`page.prev` | 前のページ番号。現在のページが最初の場合は `0`。 | `number`
`page.prev_link` | 前のページのURL。現在のページが最初の場合は `''`。 | `string`
`page.next` | 次のページ番号。現在のページが最後の場合は `0`。 | `number`
`page.next_link` | 次のページのURL。現在のページが最後の場合は `''`。 | `string`
`page.path` | 現在のページのURL（ルートURLを除く）。テーマでは通常 `url_for(page.path)` を使用します。 | `string`

**アーカイブ (`archive`):** `index` レイアウトと同じですが、以下の変数が追加されます。

変数 | 説明 | タイプ
--- | --- | ---
`page.archive` | `true`に等しい | `boolean`
`page.year` | アーカイブの年（4桁） | `number`
`page.month` | アーカイブの月（先頭ゼロなしの2桁） | `number`

**カテゴリ (`category`):** `index` レイアウトと同じですが、以下の変数が追加されます。

変数 | 説明 | タイプ
--- | --- | ---
`page.category` | カテゴリ名 | `string`

**タグ (`tag`):** `index` レイアウトと同じですが、以下の変数が追加されます。

変数 | 説明 | タイプ
--- | --- | ---
`page.tag` | タグ名 | `string`

[Moment.js]: http://momentjs.com/
[サイト変数]: #サイト変数
[ページ変数]: #ページ変数
