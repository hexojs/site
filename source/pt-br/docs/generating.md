title: Gerar
---
Gerar arquivos estáticos com o Hexo é bastante fácil e rápido.

``` bash
$ hexo generate
```

### Assitindo as alterações de arquivo

O Hexo pode assistir a alterações de arquivos e regenerar arquivos imediatamente. A Hexo irá comparar a soma de verificação SHA1 dos seus arquivos e apenas escrever se as alterações do arquivo forem detectadas.

``` bash
$ hexo generate --watch
```

### Implantar depois de gerado

Para implantar depois de gerar, você pode executar um dos seguintes comandos. Não há diferença entre os dois.

``` bash
$ hexo generate --deploy
$ hexo deploy --generate
```
