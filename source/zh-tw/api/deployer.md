title: 佈署器（Deployer）
---
佈署器幫助使用者快速將網站佈署到遠端伺服器上，免去複雜的指令。

## 概要

``` js
hexo.extend.deployer.register(name, function(args){
  // ...
});
```

在函數中會傳入 `args` 參數，此參數包含了 `_config.yml` 中的 `deploy` 設定，及使用者在終端機所傳入的參數。