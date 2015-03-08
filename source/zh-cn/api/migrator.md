title: 迁移器（Migrator）
---
迁移器帮助开发者从其他系统迁移到 Hexo。

## 概要

``` js
hexo.extend.migrator.register(name, function(args){
  // ...
});
```

在函数中需要传入 `args` 参数，该参数包含了开发者在终端中所传入的参数。