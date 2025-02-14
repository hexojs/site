---
title: 生成
---

Hexoでの静的ファイルの生成は、とても簡単で高速です。

```bash
$ hexo generate
```

{% youtube viEJQPVCoLU %}

### ファイル変更の監視

Hexoはファイルの変更を監視し、即座にファイルを再生成できます。 HexoはファイルのSHA1チェックサムを比較し、ファイルの変更が検出された場合にのみ書き込みます。

```bash
$ hexo generate --watch
```

### 生成後にデプロイ

生成後にデプロイするには、以下のコマンドのいずれかを実行します。 2つのコマンドの間に違いはありません。

```bash
$ hexo generate --deploy
$ hexo deploy --generate
```
