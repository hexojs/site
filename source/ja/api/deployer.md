---
title: デプロイヤー
---
デプロイヤーは、複雑なコマンドなしにユーザーが自分のサイトをリモートサーバーに迅速にデプロイするのを助けます。

## 概要

``` js
hexo.extend.deployer.register(name, function(args){
  // ...
});
```

関数には引数`args`が渡されます。これには`_config.yml`で設定された`deploy`の値と、ユーザーがターミナルに入力した正確な入力が含まれます。
