---
title: テンプレート
---

テンプレートは、ウェブサイトの外観の構造を定義します。 つまり、各ページがどのように表示されるべきか記述します。 下記の表は、利用可能な各ページに対応するテンプレートを示しています。 最低限、テーマには`index`テンプレートが必要です。

{% youtube mb65bQ4iUc4 %}

| テンプレート     | ページ        | フォールバック   |
| ---------- | ---------- | --------- |
| `index`    | ホームページ     |           |
| `post`     | 記事         | `index`   |
| `page`     | ページ        | `index`   |
| `archive`  | アーカイブ      | `index`   |
| `category` | カテゴリーアーカイブ | `archive` |
| `tag`      | タグアーカイブ    | `archive` |

## レイアウト

ページが似通った構造を持つ場合（例えば、二つのテンプレートがヘッダーとフッターを持つ場合）、これらの構造上の類似性を宣言するために`layout`を使用できます。 すべてのレイアウトファイルには、該当するテンプレートの内容を表示するための`body`変数が必要です。 例えば:

```html index.ejs
index
```

```html layout.ejs
<!doctype html>
<html>
  <body>
    <%- body %>
  </body>
</html>
```

これは次のようになります:

```html
<!doctype html>
<html>
  <body>
    index
  </body>
</html>
```

デフォルトでは、`layout`テンプレートが他のすべてのテンプレートより使用されます。 Front Matterで他のレイアウトを設定したり、`false`に設定無効することができます。 トップレイアウトにさらに多くのレイアウトテンプレートを含めることで、複雑なネスト構造を構築することも可能です。

## パーシャル

パーシャルを利用し、テンプレート間でコンポーネントを共有できます。 典型的な例には、ヘッダー、フッター、サイドバーなどがあります。 メンテナンスを便利にするために、パーシャルを別のファイルに置くことができます。 例えば:

```html partial/header.ejs
<h1 id="logo"><%= config.title %></h1>
```

```html index.ejs
<%- partial('partial/header') %>
<div id="content">Home page</div>
```

これは次のようになります:

```html
<h1 id="logo">My Site</h1>
<div id="content">Home page</div>
```

## ローカル変数

テンプレート内でローカル変数を定義し、他のテンプレートから利用できます。

```html partial/header.ejs
<h1 id="logo"><%= title %></h1>
```

```html index.ejs
<%- partial('partial/header', {title: 'Hello World'}) %>
<div id="content">Home page</div>
```

これは次のようになります:

```html
<h1 id="logo">Hello World</h1>
<div id="content">Home page</div>
```

## 最適化

テーマが極端に複雑であるか、生成するファイルの数が非常に多い場合、Hexoのファイル生成の速度が大幅に低下することがあります。 テーマを単純化する以外に、Fragment Cachingを試すことができます。 これはHexo 2.7で導入されました。

この機能は[Ruby on Rails](http://guides.rubyonrails.org/caching_with_rails.html#fragment-caching)を参考にしています。 コンテンツをフラグメントとして保存し、後で使われる時のためにキャッシュします。 これにより、データベースクエリの回数を減らし、ファイル生成をスピードアップします。

Fragment cachingは、テンプレート間で変わらないと予想される、ヘッダー、フッター、サイドバー、その他の静的コンテンツに最適です。 例えば:

```js
<%- fragment_cache('header', function(){
  return '<header></header>';
});
```

パーシャルを使用する方が簡単かもしれません:

```js
<%- partial('header', {}, {cache: true});
```

{% note warn %}
`fragment_cache()`はレンダリング結果をキャッシュし、他のページにキャッシュされた結果を出力します。 これは、異なるページ間で変更されることが**ない**と予想されるパーシャルにのみ使用されるべきです。 そうでなければ、有効にすべき**ではありません**。 例えば、config内で`relative_link`が有効になっている場合は無効にすべきです。 例えば、config内で`relative_link`が有効になっている場合は無効にすべきです。 これは、相対リンクがページ間で異なるように見える可能性があるためです。
{% endnote %}
