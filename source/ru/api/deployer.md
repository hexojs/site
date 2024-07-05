---
title: Deployer
---

Позволяет быстро развернуть свой сайт на удалённом сервере без сложных команд.

## Краткий обзор

```js
hexo.extend.deployer.register(name, function (args) {
  // ...
});
```

В аргумент `args` передаётся функция, которая содержит развернутое значение, взятое из `_config.yml`. It contains the `deploy` value set in `_config.yml`, as well as the exact input users typed into their terminal.
