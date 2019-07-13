---
title: Events
---

O Hexo herda de [EventEmitter]. Use o método `on` para ouvir os eventos emitidos pelo Hexo, e use o método `emit` para emitir eventos. Para obter mais informações, consulte a documentação da API do Node.js.

### deployBefore

Emitido antes do deployment começar.

### deployAfter

Emitido depois do deployment finalizado.

### exit

Emitido antes de Hexo sair.

### generateBefore

Emitido antes da geração começar.

### generateAfter

Emitido depois da geração finalizada.

### new

Emitido depois de uma nova postagem ter sido criada. Este evento retorna os dados da postagem:

``` js
hexo.on('new', function(post){
  //
});
```

Dados | Descrição
--- | ---
`post.path` | Caminho completo do arquivo da postagem
`post.content` | Conteúdo do arquivo da postagem

### processBefore

Emitido antes do início do processamento. Este evento retorna um caminho que representa o diretório raiz do box.

### processAfter

Emitido depois do processamento finalizado. Este evento retorna um caminho que representa o diretório raiz do `box`.

### ready

Emitido depois da inicialização terminar.

[EventEmitter]: https://nodejs.org/dist/latest/docs/api/events.html
