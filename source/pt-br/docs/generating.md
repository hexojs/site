---
title: Gerando
---

Gerar arquivos estáticos com o Hexo é bastante fácil e rápido.

``` bash
$ hexo generate
```

{% youtube viEJQPVCoLU %}

### Observando Alterações em Arquivo

O Hexo pode ficar observando as alterações nos arquivos e regerar arquivos imediatamente. O hexo compara a hash (SHA1) dos seus arquivos e somente regenera aqueles que sofreram modificações.

``` bash
$ hexo generate --watch
```

### Deploy Depois da Geração

Para fazer o deploy depois de gerar os arquivos, você pode executar um dos seguintes comandos. Não há diferença entre os dois.

``` bash
$ hexo generate --deploy
$ hexo deploy --generate
```
