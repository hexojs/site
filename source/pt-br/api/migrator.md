---
title: Migrator
---

Um `migrator` ajuda os usuários a migrarem seus sistemas para o Hexo.

## Sinopse

``` js
hexo.extend.migrator.register(name, function(args){
  // ...
});
```

O argumento `args` será passado na função. Esse argumento conterá as entradas do usuário no terminal.
