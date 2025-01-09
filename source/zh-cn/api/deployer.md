---
title: 部署器（Deployer）
---

部署器帮助开发者将网站快速部署到远程服务器上，而无需复杂的指令。

## 概要

```js
hexo.extend.deployer.register(name, function (args) {
  // ...
});
```

在函数中会传入 `args` 参数。 该参数包含了 `_config.yml` 中设置的 `deploy` 值，以及用户在终端中输入的内容。
