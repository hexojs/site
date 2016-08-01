title: Migrator
---
Migrator는 다른 시스템을 사용하던 사용자가 Hexo로의 마이그레이션을 할 수 있게 도와줍니다.

## 개요

``` js
hexo.extend.migrator.register(name, function(args){
  // ...
});
```

`args` 인자는 사용자가 터미널에 입력한 값을 포함하여 함수 내로 전달됩니다.