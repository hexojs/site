---
title: Migrator
---

轉移器幫助使用者從其他系統轉移到 Hexo。

## 概要

```js
hexo.extend.migrator.register(name, function (args) {
  // ...
});
```

An argument `args` will be passed into the function. This argument will contain the user's input into the terminal.
