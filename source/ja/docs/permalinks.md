---
title: パーマリンク
---

`_config.yml`または各記事のFront Matterで、サイトのパーマリンクを設定できます。

### 変数

パーマリンクでは以下の変数に加え、 t `:path` と `:permalink` を除く任意の属性を使用することができます。

| 変数            | 説明                                           |
| ------------- | -------------------------------------------- |
| `:year`       | 記事の公開年（4桁）                                   |
| `:month`      | 記事の公開月（2桁）                                   |
| `:i_month`    | 記事の公開月（先頭ゼロなし）                               |
| `:day`        | 記事の公開日（2桁）                                   |
| `:i_day`      | 記事の公開日（先頭ゼロなし）                               |
| `:hour`       | 記事の公開時（2桁）                                   |
| `:minute`     | 記事の公開分（2桁）                                   |
| `:second`     | 記事の公開秒（2桁）                                   |
| `:title`      | ファイル名（"source/\_posts/"フォルダーからの相対）         |
| `:name`       | ファイル名                                        |
| `:post_title` | 記事のタイトル                                      |
| `:id`         | 記事ID(_[キャッシュ削除](commands#clean)を跨いで永続しない_)   |
| `:category`   | カテゴリー。 記事が未分類の場合、`default_category`の値を使用します。 |
| `:hash`       | ファイル名（`:title`と同じ）と日付のSHA1ハッシュ（12桁の16進数）     |

パーマリンク内の各変数のデフォルト値を`permalink_defaults`設定を通じて定義することができます:

```yaml
permalink_defaults:
  lang: en
```

### 例

```yaml source/_posts/hello-world.md
title: Hello World
date: 2013-07-14 17:01:34
categories:
  - foo
  - bar
```

| 設定                              | 結果                          |
| ------------------------------- | --------------------------- |
| `:year/:month/:day/:title/`     | 2013/07/14/hello-world/     |
| `:year-:month-:day-:title.html` | 2013-07-14-hello-world.html |
| `:category/:title/`             | foo/bar/hello-world/        |
| `:title-:hash/`                 | hello-world-a2c8ac003b43/   |

```yaml source/_posts/lorem/hello-world.md
title: Hello World
date: 2013-07-14 17:01:34
categories:
  - foo
  - bar
```

| 設定                          | 結果                            |
| --------------------------- | ----------------------------- |
| `:year/:month/:day/:title/` | 2013/07/14/lorem/hello-world/ |
| `:year/:month/:day/:name/`  | 2013/07/14/hello-world/       |

### 多言語サポート

多言語サイトを作成するには、`new_post_name`および`permalink`設定を次のように変更します:

```yaml
new_post_name: :lang/:title.md
permalink: :lang/:title/
```

新しい記事を作成すると、記事は以下に保存されます:

```bash
$ hexo new "Hello World" --lang tw
# => source/_posts/tw/Hello-World.md
```

そして、URLは以下になります:

```plain
http://localhost:4000/tw/hello-world/
```
