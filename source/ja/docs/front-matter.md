---
title: Front Matter
---

Front Matterは、ファイルの先頭に配置されるYAMLまたはJSONのブロックで、投稿の設定のために使用されます。YAMLの場合は三つのハイフン、JSONの場合は三つのセミコロンで終了します。

**YAML**

``` yaml
---
title: Hello World
date: 2013/7/13 20:46:25
---
```

**JSON**

``` json
"title": "Hello World",
"date": "2013/7/13 20:46:25"
;;;
```

### 設定とデフォルト値

設定 | 説明 | デフォルト
--- | --- | ---
`layout` | レイアウト | [`config.default_layout`](/docs/configuration#Writing)
`title` | タイトル | ファイル名（投稿のみ）
`date` | 公開日 | ファイル作成日
`updated` | 更新日 | ファイル更新日
`comments` | 投稿へのコメント機能を有効にする | `true`
`tags` | タグ（ページには利用不可） |
`categories` | カテゴリ（ページには利用不可） |
`permalink` | 投稿のデフォルトパーマリンクを上書き。パーマリンクは`/`または`.html`で終わるべき | `null`
`excerpt` | プレーンテキストでのページの抜粋。テキストのフォーマットには[このプラグイン](tag-plugins#投稿の抜粋)を使用 |
`disableNunjucks` | 有効にするとNunjucksタグ`{{ }}`/`{% %}`と[タグプラグイン](tag-plugins)のレンダリングを無効にする | false
`lang` | [自動検出](internationalization#パス)を上書きする言語を設定 | `_config.yml`から継承
`published` | 投稿を公開するか？ | `_posts`配下の投稿では`true`、`_draft`配下の投稿では`false`

#### レイアウト

デフォルトのレイアウトは`post`で、`_config.yml`の[`default_layout`](configuration#執筆)設定に従います。記事でレイアウトが無効にされた場合（`layout: false`）、それはテーマでは処理されません。しかし、利用可能なレンダラーでレンダリングされます。例えば記事がMarkdownで書かれ、Markdownレンダラー（デフォルトの[hexo-renderer-marked](https://github.com/hexojs/hexo-renderer-marked)など）がインストールされている場合、それはHTMLにレンダリングされます。

[タグプラグイン](tag-plugins)は、`disableNunjucks`設定や[レンダラー](../api/renderer#Nunjucksタグを無効にする)によって無効にされない限り、レイアウトに関わらず常に処理されます。

#### カテゴリーとタグ

カテゴリーとタグは投稿でのみサポートされています。カテゴリーは指定された順に、投稿に対する階層やサブ階層として機能します。タグは同じ階層レベルで定義されるため、指定される順序は重要ではありません。

**例**

``` yaml
categories:
- スポーツ
- 野球
tags:
- 怪我
- 乱闘
- 衝撃
```

複数のカテゴリ階層を適用したい場合は、カテゴリ名のリストを単一の名前の代わりに使用します。Hexoが投稿でこのように定義されたカテゴリを見つけると、その投稿の各カテゴリを独自の独立した階層として扱います。

**例**

``` yaml
categories:
- [スポーツ, 野球]
- [MLB, アメリカンリーグ, ボストン・レッドソックス]
- [MLB, アメリカンリーグ, ニューヨーク・ヤンキース]
- ライバル関係
```
