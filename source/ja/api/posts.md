---
title: 記事
---

## 記事の作成

```js
hexo.post.create(data, replace);
```

| 引数        | 説明             |
| --------- | -------------- |
| `data`    | データ            |
| `replace` | 既存のファイルを置き換えるか |

投稿の属性は `data`で定義します。 以下の表は全てを網羅していないかもしれません。 追加の属性がFront Matterに存在する場合もあります。

| Data     | 説明                                                 |
| -------- | -------------------------------------------------- |
| `title`  | タイトル                                               |
| `slug`   | URL                                                |
| `layout` | レイアウト。 `default_layout`設定がデフォルトです。                 |
| `path`   | パス。 デフォルトでは`new_post_path`設定に基づいて記事のパスをHexoが構築します。 |
| `date`   | 日付。 デフォルトでは現在の日付です。                                |

## 下書きの公開

```js
hexo.post.publish(data, replace);
```

| 引数        | 説明             |
| --------- | -------------- |
| `data`    | データ            |
| `replace` | 既存のファイルを置き換えるか |

投稿の属性は `data`で定義します。 以下の表は全てを網羅していないかもしれません。 追加の属性がFront Matterに存在する場合もあります。

| Data     | 説明                                 |
| -------- | ---------------------------------- |
| `slug`   | ファイル名（必須）                          |
| `layout` | レイアウト。 `default_layout`設定がデフォルトです。 |

## レンダリング

```js
hexo.post.render(source, data);
```

| 引数       | 説明             |
| -------- | -------------- |
| `source` | ファイルの完全なパス（任意） |
| `data`   | データ            |

データには`content`属性が含まれている必要があります。 そうでない場合、Hexoは元のファイルを読み込もうとします。 この関数の実行順序は以下の通りです:

- `before_post_render`フィルターを実行
- Markdownや他のレンダラー（拡張子名に依存）でレンダリング
- [Nunjucks][]でレンダリング
- `after_post_render`フィルターを実行

[Nunjucks]: https://mozilla.github.io/nunjucks/
