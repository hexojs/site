---
title: ジェネレータ
---
ジェネレータは、処理されたファイルに基づいてルートを構築します。

## 概要

``` js
hexo.extend.generator.register(name, function(locals){
  // ...
});
```

関数には`locals`引数が渡され、[サイト変数](../docs/variables.html#Site-Variables)が含まれます。この引数を使用してウェブサイトデータを取得し、直接データベースにアクセスする必要性を避けるべきです。

## ルートの更新

``` js
hexo.extend.generator.register('test', function(locals){
  // オブジェクト
  return {
    path: 'foo',
    data: 'foo'
  };

  // 配列
  return [
    {path: 'foo', data: 'foo'},
    {path: 'bar', data: 'bar'}
  ];
});
```

属性 | 説明
--- | ---
`path` | `/`を含まないパス。
`data` | データ
`layout` | レイアウト。レンダリングに使用するレイアウトを指定します。値は文字列または配列であることができます。無視されると、ルートは`data`を直接返します。

ソースファイルが更新されると、Hexoはすべてのジェネレータを実行し、ルートを再構築します。**データを返し、直接ルーターにアクセスしないでください。**

## 例

### アーカイブページ

`archives/index.html`にアーカイブページを作成します。テンプレートにすべての投稿をデータとして渡します。このデータはテンプレート内の`page`変数と同等です。

次に、`layout`属性を設定してテーマテンプレートでレンダリングします。この例では2つのレイアウトを設定しています：`archive`レイアウトが存在しない場合は、代わりに`index`レイアウトが使用されます。

```js
hexo.extend.generator.register('archive', function(locals){
  return {
    path: 'archives/index.html',
    data: locals,
    layout: ['archive', 'index']
  }
});
```

### ページネーション付きアーカイブページ

公式ツール[hexo-pagination]を使用して、ページネーション付きのアーカイブページを簡単に構築できます。

``` js
var pagination = require('hexo-pagination');

hexo.extend.generator.register('archive', function(locals){
  // hexo-paginationは/archivesルートにindex.htmlを作成します
  return pagination('archives', locals.posts, {
    perPage: 10,
    layout: ['archive', 'index'],
    data: {}
  });
});
```

### すべての投稿を生成

`locals.posts`内のすべての投稿を反復処理し、すべての投稿に対してルートを作成します。

``` js
hexo.extend.generator.register('post', function(locals){
  return locals.posts.map(function(post){
    return {
      path: post.path,
      data: post,
      layout: 'post'
    };
  });
});
```

### ファイルのコピー

今回はデータを明示的に返さず、ルートが必要なときにのみ`fs.ReadStream`を構築するように`data`を関数に設定します。

``` js
var fs = require('hexo-fs');

hexo.extend.generator.register('asset', function(locals){
  return {
    path: 'file.txt',
    data: function(){
      return fs.createReadStream('path/to/file.txt')
    }
  };
});
```

[hexo-pagination]: https://github.com/hexojs/hexo-pagination
