title: 轉移器（Migrator）
---
轉移器幫助使用者從其他系統轉移到 Hexo。

## 概要

``` js
hexo.extend.migrator.register(name, function(args){
  // ...
});
```

在函數中會傳入 `args` 參數，此參數包含了使用者在終端機所傳入的參數。