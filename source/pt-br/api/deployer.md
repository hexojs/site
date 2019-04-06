---
title: Deployer
---

Um `deployer` ajuda os usuários a implantar o seu site rapidamente em um servidor remoto sem comandos complicados.

## Resumo

``` js
hexo.extend.deployer.register(name, function(args){
  // ...
});
```

Um argumento `args` será passado para a função. Ele contém o valor `deploy` definido no arquivo `_config.yml`, bem como as entradas exatas digitadas pelo usuário no terminal.
