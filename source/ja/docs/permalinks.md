---
title: パーマリンク
---
サイトのパーマリンクは、`_config.yml`または各投稿のフロントマターで指定することができます。

### 変数

以下の変数の他に、パーマリンク内で任意の属性を使用することができます。

変数 | 説明
--- | ---
`:year` | 投稿の公開年（4桁）
`:month` | 投稿の公開月（2桁）
`:i_month` | 投稿の公開月（先行ゼロなし）
`:day` | 投稿の公開日（2桁）
`:i_day` | 投稿の公開日（先行ゼロなし）
`:hour` | 投稿の公開時（2桁）
`:minute` | 投稿の公開分（2桁）
`:second` | 投稿の公開秒（2桁）
`:title` | ファイル名（"source/_posts/"フォルダーに関連）
`:name` | ファイル名
`:post_title` | 投稿のタイトル
`:id` | 投稿ID（[キャッシュリセット](/docs/commands#clean)を跨いで永続しない）
`:category` | カテゴリー。投稿が未分類の場合、`default_category`の値を使用します。
`:hash` | ファイル名（`:title`と同じ）と日付のSHA1ハッシュ（12桁の16進数）

パーマリンク内の各変数のデフォルト値を`permalink_defaults`設定を通じて定義することができます:

``` yaml
permalink_defaults:
  lang: en
```

### 例

``` yaml source/_posts/hello-world.md
title: Hello World
date: 2013-07-14 17:01:34
categories:
- foo
- bar
```

設定 | 結果
--- | ---
`:year/:month/:day/:title/` | 2013/07/14/hello-world/
`:year-:month-:day-:title.html` | 2013-07-14-hello-world.html
`:category/:title/` | foo/bar/hello-world/
`:title-:hash/` | hello-world-a2c8ac003b43/

``` yaml source/_posts/lorem/hello-world.md
title: Hello World
date: 2013-07-14 17:01:34
categories:
- foo
- bar
```

設定 | 結果
--- | ---
`:year/:month/:day/:title/` | 2013/07/14/lorem/hello-world/
`:year/:month/:day/:name/` | 2013/07/14/hello-world/

### 多言語サポート

多言語サイトを作成するには、`new_post_name`および`permalink`設定を次のように変更します:

``` yaml
new_post_name: :lang/:title.md
permalink: :lang/:title/
```

新しい投稿を作成すると、投稿は以下に保存されます:

``` bash
$ hexo new "Hello World" --lang tw
# => source/_posts/tw/Hello-World.md
```

そして、URLは以下になります:

``` plain
http://localhost:4000/tw/hello-world/
```
