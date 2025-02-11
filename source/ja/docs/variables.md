---
title: 変数
---

{% youtube T9oAax-IRw0 %}

### グローバル変数

| 変数       | 説明                                 | タイプ                               |
| -------- | ---------------------------------- | --------------------------------- |
| `site`   | サイト全体の情報。                          | `object`; [サイト変数][]を参照            |
| `page`   | ページ固有の情報とFront Matterで設定されたカスタム変数。 | `object`; [ページ変数][]を参照            |
| `config` | サイト設定。                             | `object` (あなたのサイトの\_configファイル) |
| `theme`  | テーマ設定。 サイト設定から継承。                  | `object` (あなたのテーマの\_configファイル) |
| `path`   | 現在のページのパス                          | `string`                          |
| `url`    | 現在のページの完全なURL                      | `string`                          |
| `env`    | 環境変数                               | ???                               |

{% note warn %}
LodashはHexo 5.0.0でグローバル変数から削除されました。 [You-Dont-Need-Lodash-Underscore](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore)が移行に役立つかもしれません。
{% endnote %}

### サイト変数

| 変数                | 説明      | タイプ                    |
| ----------------- | ------- | ---------------------- |
| `site.posts`      | 全ての記事   | `post` オブジェクトの配列       |
| `site.pages`      | 全てのページ  | `page` オブジェクトの配列       |
| `site.categories` | 全てのカテゴリ | [Query][queryo] object |
| `site.tags`       | 全てのタグ   | [Query][queryo] object |

### ページ変数

**ページ (`page`)**

| 変数                 | 説明                                                       | タイプ                  |
| ------------------ | -------------------------------------------------------- | -------------------- |
| `page.title`       | ページのタイトル                                                 | `string`             |
| `page.date`        | ページの作成日                                                  | [Moment.js][] オブジェクト |
| `page.updated`     | ページの最終更新日                                                | [Moment.js][] オブジェクト |
| `page.comments`    | コメントが有効か？                                                | `boolean`            |
| `page.layout`      | レイアウト名                                                   | `string`             |
| `page.content`     | ページの完全な生成結果                                              | `string`             |
| `page.excerpt`     | ページ生成結果の抜粋                                               | `string`             |
| `page.more`        | 抜粋を除いたページの内容                                             | `string`             |
| `page.source`      | ソースファイルのパス                                               | `string`             |
| `page.full_source` | ソースファイルの完全なパス                                            | `string`             |
| `page.path`        | ページのURL（ルートURLを除く）。 テーマでは通常 `url_for(page.path)` を使用します。 | `string`             |
| `page.permalink`   | ページの完全な（エンコードされた）URL                                     | `string`             |
| `page.prev`        | 前のページ、最初のページの場合は `null`                                  | ???                  |
| `page.next`        | 次のページ、最後のページの場合は `null`                                  | ???                  |
| `page.raw`         | ページのローデータ                                                | ???                  |
| `page.photos`      | ページの写真（ギャラリーページで使用）                                      | array of ???         |
| `page.link`        | ページの外部リンク（リンクページで使用）                                     | `string`             |

**記事 (`post`):** `page` レイアウトと同じですが、以下の変数が追加されます。

| 変数                | 説明               | タイプ            |
| ----------------- | ---------------- | -------------- |
| `page.published`  | 記事が下書きでない場合はTrue | `boolean`      |
| `page.categories` | 記事の全カテゴリ         | `array` of ??? |
| `page.tags`       | 記事の全タグ           | `array` of ??? |

**ホーム (`index`)**

| 変数                 | 説明                                                          | タイプ      |
| ------------------ | ----------------------------------------------------------- | -------- |
| `page.per_page`    | 1ページあたりの記事表示数                                               | `number` |
| `page.total`       | ページの総数                                                      | `number` |
| `page.current`     | 現在のページ番号                                                    | `number` |
| `page.current_url` | 現在のページのURL                                                  | `string` |
| `page.posts`       | このページの記事 ([データモデル](https://hexojs.github.io/warehouse/))    | `object` |
| `page.prev`        | 前のページ番号。 現在のページが最初の場合は `0`。                                 | `number` |
| `page.prev_link`   | 前のページのURL。 現在のページが最初の場合は `''`。                              | `string` |
| `page.next`        | 次のページ番号。 現在のページが最後の場合は `0`。                                 | `number` |
| `page.next_link`   | 次のページのURL。 現在のページが最後の場合は `''`。                              | `string` |
| `page.path`        | 現在のページのURL（ルートURLを除く）。 テーマでは通常 `url_for(page.path)` を使用します。 | `string` |

**カテゴリ (`category`):** `index` レイアウトと同じですが、以下の変数が追加されます。

| 変数             | 説明                 | タイプ       |
| -------------- | ------------------ | --------- |
| `page.archive` | 固定値 `true`         | `boolean` |
| `page.year`    | アーカイブの年（4桁）        | `number`  |
| `page.month`   | アーカイブの月（先頭ゼロなしの2桁） | `number`  |

**タグ (`tag`):** `index` レイアウトと同じですが、以下の変数が追加されます。

| 変数              | 説明    | タイプ      |
| --------------- | ----- | -------- |
| `page.category` | カテゴリ名 | `string` |

**アーカイブ (`archive`):** `index` レイアウトと同じですが、以下の変数が追加されます。

| 変数         | 説明  | タイプ      |
| ---------- | --- | -------- |
| `page.tag` | タグ名 | `string` |

[queryo]: https://hexojs.github.io/warehouse/classes/query.default.html

[Moment.js]: http://momentjs.com/
[サイト変数]: #サイト変数
[ページ変数]: #ページ変数
