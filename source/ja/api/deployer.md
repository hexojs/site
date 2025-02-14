---
title: デプロイヤー
---

デプロイヤーは、複雑なコマンドなしにウェブサイトをサーバーに素早くデプロイします。

## 概要

```js
hexo.extend.deployer.register(name, function (args) {
  // ...
});
```

関数には引数`args`が渡されます。 これには`_config.yml`で設定された`deploy`の値と、ユーザーによるターミナルへの正確な入力が含まれます。
