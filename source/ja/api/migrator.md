---
title: マイグレーター
---

マイグレーターは、他のシステムからHexoへのウェブサイトの移行を行います。

## 概要

```js
hexo.extend.migrator.register(name, function (args) {
  // ...
});
```

関数には引数`args`が渡されます。 この引数には、ユーザーがターミナルに入力した内容が含まれます。
