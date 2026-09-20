---
title: 設定
---

`_config.yml`または[代替設定ファイル](#代替設定の使用)でサイトの設定を変更できます。

### サイト

| 設定            | 説明                                                                                                                                                                    |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`       | ウェブサイトのタイトル                                                                                                                                                           |
| `subtitle`    | ウェブサイトのサブタイトル                                                                                                                                                         |
| `description` | ウェブサイトの説明                                                                                                                                                             |
| `keywords`    | ウェブサイトのキーワード。 複数の値をサポート。                                                                                                                                              |
| `author`      | あなたの名前                                                                                                                                                                |
| `language`    | ウェブサイトの言語。 [2文字のISO-639-1コード](https://ja.wikipedia.org/wiki/ISO_639-1%E3%82%B3%E3%83%BC%E3%83%89%E4%B8%80%E8%A6%A7)またはその[バリアント](internationalization)を使用。 デフォルトは`en`。 |
| `timezone`    | ウェブサイトのタイムゾーン。 デフォルトではコンピューターの設定を使用。 利用可能なタイムゾーンのリストは[こちら](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)。 例えば`America/New_York`、`Japan`、`UTC`など。      |

### URL

| 設定                           | 説明                                                    | デフォルト                       |
| ---------------------------- | ----------------------------------------------------- | --------------------------- |
| `url`                        | `http://`または`https://`で始まる必要があります。                    |                             |
| `root`                       | ウェブサイトのルートディレクトリ                                      | `url's pathname`            |
| `permalink`                  | 記事の[パーマリンク](permalinks.html)形式                        | `:year/:month/:day/:title/` |
| `permalink_defaults`         | パーマリンクの各セグメントのデフォルト値                                  |                             |
| `pretty_urls`                | [`permalink`](permalinks.html)変数をプリティURLに書き換え         |                             |
| `pretty_urls.trailing_index` | 末尾の`index.html`を削除する場合は`false`に設定                     | `true`                      |
| `pretty_urls.trailing_html`  | 末尾の`.html`を削除する場合は`false`に設定（`index.html`の末尾には適用されない） | `true`                      |

{% note info サブディレクトリ内のウェブサイト %}
ウェブサイトがサブディレクトリ内にある場合（例: `http://example.org/blog`）は、`url`に`http://example.org/blog`を設定し、`root`を`/blog/`に設定します。
{% endnote %}

例:

```yaml
# e.g. page.permalink is http://example.com/foo/bar/index.html
pretty_urls:
  trailing_index: false
# becomes http://example.com/foo/bar/
```

### ディレクトリ

| 設定             | 説明                                                                                                                  | デフォルト            |
| -------------- | ------------------------------------------------------------------------------------------------------------------- | ---------------- |
| `source_dir`   | ソースフォルダ。 コンテンツが保存される場所                                                                                              | `source`         |
| `public_dir`   | パブリックフォルダ。 静的サイトが生成される場所                                                                                            | `public`         |
| `tag_dir`      | タグディレクトリ                                                                                                            | `tags`           |
| `archive_dir`  | アーカイブディレクトリ                                                                                                         | `archives`       |
| `category_dir` | カテゴリディレクトリ                                                                                                          | `categories`     |
| `code_dir`     | コードを含むディレクトリ（`source_dir`のサブディレクトリ）                                                                                 | `downloads/code` |
| `i18n_dir`     | i18nディレクトリ                                                                                                          | `:lang`          |
| `skip_render`  | レンダリングせずに`public`に直接コピーされるパス。 パスのマッチングに[glob表現](https://github.com/micromatch/micromatch#extended-globbing)を使用できます。 |                  |

例:

```yaml
skip_render: "mypage/**/*"
# `source/mypage/index.html` と `source/mypage/code.js` を変更せずに出力します。

## 記事を除外するためにも使用できます，
skip_render: "_posts/test-post.md"
# `source/_posts/test-post.md` を無視します。
```

### 執筆

| 設定                      | 説明                                                                                | デフォルト          |
| ----------------------- | --------------------------------------------------------------------------------- | -------------- |
| `new_post_name`         | 新しい記事のファイル名形式                                                                     | `:title.md`    |
| `default_layout`        | デフォルトのレイアウト                                                                       | `post`         |
| `titlecase`             | タイトルをタイトルケースに変換するか？                                                               | `false`        |
| `external_link`         | 外部リンクを新しいタブで開くか？                                                                  |                |
| `external_link.enable`  | 外部リンクを新しいタブで開くか？                                                                  | `true`         |
| `external_link.field`   | `site`全体に適用するか？ `post`のみか？                                                        | `site`         |
| `external_link.exclude` | ホスト名を除外。 該当する場合はサブドメインを指定、`www`も含む                                                | `[]`           |
| `filename_case`         | ファイル名を `1`小文字; `2`大文字 に変換                                                         | `0`            |
| `render_drafts`         | 下書きを表示するか？                                                                        | `false`        |
| `post_asset_folder`     | [アセットフォルダ](asset-folders.html)を有効にするか？                                            | `false`        |
| `relative_link`         | リンクをルートフォルダに対して相対的にするか？                                                           | `false`        |
| `future`                | 未来の記事を表示するか？                                                                      | `true`         |
| `syntax_highlighter`    | コードブロックのシンタックスハイライト設定。 使い方は[シンタックスハイライト](syntax-highlight)セクションを参照。               | `highlight.js` |
| `highlight`             | コードブロックのシンタックスハイライト設定。 使い方は[Highlight.js](syntax-highlight#Highlight-js)セクションを参照。 |                |
| `prismjs`               | コードブロックのシンタックスハイライト設定。 使い方は[PrismJS](syntax-highlight#PrismJS)セクションを参照。           |                |

### ホームページの設定

| 設定                               | 説明                                                                                  | デフォルト   |
| -------------------------------- | ----------------------------------------------------------------------------------- | ------- |
| `index_generator`                | [hexo-generator-index](https://github.com/hexojs/hexo-generator-index)による記事のアーカイブ生成 |         |
| `index_generator.path`           | ブログのインデックスページのパス                                                                    | `''`    |
| `index_generator.per_page`       | 1ページあたりの記事数                                                                         | `10`    |
| `index_generator.order_by`       | 記事の並び順。 デフォルトでは日付降順（新しいものから古いものへ）。                                                  | `-date` |
| `index_generator.pagination_dir` | URL形式。 [ページネーション](#ページネーション)設定を参照。                                                  | `page`  |

### カテゴリー＆タグ

| 設定                 | 説明            | デフォルト           |
| ------------------ | ------------- | --------------- |
| `default_category` | デフォルトのカテゴリー   | `uncategorized` |
| `category_map`     | カテゴリースラッグを上書き |                 |
| `tag_map`          | タグスラッグを上書き    |                 |

例:

```yaml
category_map:
  "yesterday's thoughts": yesterdays-thoughts
  "C++": c-plus-plus
```

### 日付/時刻形式

Hexoは日付の処理に[Moment.js](http://momentjs.com/)を使用します。

| 設定               | 説明                                                         | デフォルト        |
| ---------------- | ---------------------------------------------------------- | ------------ |
| `date_format`    | 日付形式                                                       | `YYYY-MM-DD` |
| `time_format`    | 時刻形式                                                       | `HH:mm:ss`   |
| `updated_option` | Front Matterで提供されていない場合に使用する[`updated`](variables#ページ変数)の値 | `mtime`      |

{% note info updated_option %}
`updated_option`はFront Matterで`updated`が指定されていない場合に`updated`の値を制御します:

- `mtime`: `updated`としてファイルの更新日を使用します。 これはHexo 3.0.0以降のデフォルトの挙動です。
- `date`: `updated`として`date`を使用します。 一般的にファイルの変更日が異なる可能性があるGitワークフローで使用されます。
- `empty`: `updated`が指定されていない場合は単純に削除します。 多くののテーマやプラグインと互換性がないかもしれません。

`use_date_for_updated`はv7.0.0で削除されました。 代わりに`updated_option: 'date'`を使用してください。
{% endnote %}

### ページネーション

| 設定               | 説明                              | デフォルト  |
| ---------------- | ------------------------------- | ------ |
| `per_page`       | 各ページに表示される記事の数。 `0`はページネーション無効化 | `10`   |
| `pagination_dir` | URL形式                           | `page` |

例:

```yaml
pagination_dir: 'page'
# http://example.com/page/2

pagination_dir: 'awesome-page'
# http://example.com/awesome-page/2
```

### 拡張機能

| 設定               | 説明                                                                                                             |
| ---------------- | -------------------------------------------------------------------------------------------------------------- |
| `theme`          | テーマ名。 `false`はテーマを無効にします                                                                                       |
| `theme_config`   | テーマ設定。 このキーの配下のカスタムテーマ設定は、テーマのデフォルトを上書きします。                                                                    |
| `deploy`         | デプロイ設定                                                                                                         |
| `meta_generator` | [メタジェネレータ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#Attributes)タグ。 `false`はタグの注入を無効にします。 |

### ファイルやフォルダーを含める/除外する

特定のファイルやフォルダーを明示的に処理または無視するために、以下のオプションを使用します。 パスの指定には[glob表現](https://github.com/micromatch/micromatch#extended-globbing)が使えます。

`include`および`exclude`オプションは`source/`フォルダーにのみ適用され、`ignore`オプションはすべてのフォルダーに適用されます。

| 設定        | 説明                                               |
| --------- | ------------------------------------------------ |
| `include` | 隠しファイル（名前がアンダースコアで始まるファイルやフォルダーを含む、例外あり\*）を含める |
| `exclude` | ファイルやフォルダーを除外                                    |
| `ignore`  | ファイルやフォルダーを無視                                    |

例:

```yaml
# Include/Exclude Files/Folders
include:
  - ".nojekyll"
  # Include 'source/css/_typing.css'.
  - "css/_typing.css"
  # Include any file in 'source/_css/'.
  - "_css/*"
  # Include any file and subfolder in 'source/_css/'.
  - "_css/**/*"

exclude:
  # Exclude 'source/js/test.js'.
  - "js/test.js"
  # Exclude any file in 'source/js/'.
  - "js/*"
  # Exclude any file and subfolder in 'source/js/'.
  - "js/**/*"
  # Exclude any file with filename that starts with 'test' in 'source/js/'.
  - "js/test*"
  # Exclude any file with filename that starts with 'test' in 'source/js/' and its subfolders.
  - "js/**/test*"
  # Do not use this to exclude posts in the 'source/_posts/'.
  # この場合、skip_renderを使用するか、 ファイル名にアンダースコアを追加してください。
  # - "_posts/hello-world.md" # 効果がありません。

ignore:
  # 'foo'という名前の全てのフォルダーを無視する。
  - "**/foo"
  # 'themes/'内の'foo'フォルダーのみを無視する。
  - "**/themes/*/foo"
  # 上記と同じですが、'themes/'のすべてのサブフォルダーに適用されます。
  - "**/themes/**/foo"
```

リスト内の値はシングル/ダブルクォートで囲む必要があります。

`include:`および`exclude:`は`themes/`フォルダーには適用されません。 代わりに`ignore:`を使用するか、ファイル/フォルダー名にアンダースコアを追加して除外してください。

\* `source/_posts`フォルダーは例外です。このフォルダー内で名前がアンダースコアで始まるファイルやフォルダーは依然として無視されます。 ここで`include:`ルールを使用することは推奨されません。

### 代替設定の使用

`hexo`コマンドに`--config`フラグを追加し、代替のYAMLまたはJSON設定ファイルへのパスを指定することで、カスタム設定ファイルパスを指定できます。 または、複数のYAMLまたはJSONファイルのカンマ区切りリスト（スペースなし）を指定できます。

```bash
# use 'custom.yml' in place of '_config.yml'
$ hexo server --config custom.yml

# use 'custom.yml' & 'custom2.json', prioritizing 'custom2.json'
$ hexo server --config custom.yml,custom2.json
```

複数のファイルを指定するとすべての設定ファイルが結合され、マージされた設定が`_multiconfig.yml`に保存されます。 この場合、後に指定された値が優先されます。 任意の数のJSONおよびYAMLファイルで、任意の深さのオブジェクトで動作します。 **リスト内にスペースを含めることはできません**。

たとえば、上記の例では`custom.yml`に`foo: bar`が含まれているが、`custom2.json`に`"foo": "dinosaur"`が含まれている場合、`_multiconfig.yml`には`foo: dinosaur`が含まれます。

### 代替テーマ設定

Hexoテーマは独立したプロジェクトであり、それぞれ別の`_config.yml`ファイルを持っています。

テーマをフォークしてカスタムバージョンを維持する代わりに、他の場所から設定を行うことができます:

**サイトのプライマリ設定ファイル内の`theme_config`から**

> Hexo 2.8.2以降でサポート

```yml
# _config.yml
theme: "my-theme"
theme_config:
  bio: "My awesome bio"
  foo:
    bar: "a"
```

```yml
# themes/my-theme/_config.yml
bio: "Some generic bio"
logo: "a-cool-image.png"
  foo:
    baz: 'b'
```

テーマ設定の結果:

```json
{
  "bio": "My awesome bio",
  "logo": "a-cool-image.png",
  "foo": {
    "bar": "a",
    "baz": "b"
  }
}
```

**専用の`_config.[theme].yml`ファイルから**

> Hexo 5.0.0以降でサポート

ファイルはサイトフォルダ内に配置され、`yml`および`json`がサポートされています。 `_config.yml`内の`theme`が設定されている必要があります。

```yml
# _config.yml
theme: "my-theme"
```

```yml
# _config.my-theme.yml
bio: "My awesome bio"
foo:
  bar: "a"
```

```yml
# themes/my-theme/_config.yml
bio: "Some generic bio"
logo: "a-cool-image.png"
  foo:
    baz: 'b'
```

テーマ設定結果:

```json
{
  "bio": "My awesome bio",
  "logo": "a-cool-image.png",
  "foo": {
    "bar": "a",
    "baz": "b"
  }
}
```

{% note %}
テーマ設定を1か所に保存することを強くお勧めします。 しかし、テーマ設定を別々に保存する必要がある場合は、それらの設定の優先順位を把握しておく必要があります: マージ中にサイトのプライマリ設定ファイル内の`theme_config`が最も高い優先順位で、次に専用のテーマ設定ファイルが続きます。 テーマディレクトリ下の`_config.yml`ファイルの優先順位は最も低いです。
{% endnote %}
