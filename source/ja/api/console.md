---
title: コンソール
---
コンソールはHexoとそのユーザー間の橋渡しをする役割を果たします。利用可能なコンソールコマンドを登録し説明します。

## 概要

``` js
hexo.extend.console.register(name, desc, options, function(args){
  // ...
});
```

引数 | 説明
--- | ---
`name` | 名前
`desc` | 説明
`options`| オプション

関数には引数`args`が渡されます。これはユーザーがターミナルに入力する引数です。[Minimist]によって解析されます。

## オプション

### usage

コンソールコマンドの使用方法。例えば:

``` js
{usage: '[layout] <title>'}
// hexo new [layout] <title>
```

### arguments

コンソールコマンドの各引数の説明。例えば:

``` js
{
  arguments: [
    {name: 'layout', desc: '投稿のレイアウト'},
    {name: 'title', desc: '投稿のタイトル'}
  ]
}
```

### options

コンソールコマンドの各オプションの説明。例えば:

``` js
{
  options: [
    {name: '-r, --replace', desc: '既存のファイルを置き換える'}
  ]
}
```

### desc

コンソールコマンドについてのより詳細な情報。

## 例

``` js
hexo.extend.console.register('config', '設定を表示する', function(args){
  console.log(hexo.config);
});
```

[Minimist]: https://github.com/minimistjs/minimist
