---
title: Migrator
---
migrator ช่วยให้ผู้ใช้ย้าย data จากระบบอื่นมาเข้า hexo

## Synopsis

``` js
hexo.extend.migrator.register(name, function(args){
  // ...
});
```

argument `args` จะเข้า function และ argument นี้จะส่ง input ของผู้ใช้เข้า terminal
