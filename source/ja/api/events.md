---
title: イベント
---

Hexoは[EventEmitter][]を継承しています。 Hexoからのイベントの発火を監視するには`on`メソッドを、イベントを発火させるには`emit`メソッドを使用します。 詳細については、Node.jsのAPIドキュメントを参照してください。

### deployBefore

デプロイを開始する前に発火します。

### deployAfter

デプロイが終了した後に発火します。

### exit

Hexoが終了する前に発火します。

### generateBefore

生成を開始する前に発火します。

### generateAfter

生成が終了した後に発火します。

### new

新しい記事が作成された後に発火します。 このイベントには、記事データが返されます:

```js
hexo.on("new", function (post) {
  //
});
```

| データ            | 説明           |
| -------------- | ------------ |
| `post.path`    | 記事ファイルの完全なパス |
| `post.content` | 記事ファイルの内容    |

### processBefore

プロセッサーによる処理が始まる前に発火します。 このイベントには、ボックスのルートディレクトリを表すパスが返されます。

### processAfter

プロセッサーによる処理が終了した後に発火します。 このイベントには、ボックスのルートディレクトリを表すパスが返されます。

### ready

初期化が終了した後に発火します。

[EventEmitter]: https://nodejs.org/dist/latest/docs/api/events.html
