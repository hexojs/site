---
title: マイグレーター
---
マイグレーターは、他のシステムからHexoへの移行をユーザーが行うのを助けます。

## 概要

``` js
hexo.extend.migrator.register(name, function(args){
  // ...
});
```

関数には引数`args`が渡されます。この引数には、ユーザーがターミナルに入力した内容が含まれます。
