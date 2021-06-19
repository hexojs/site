---
title: Box
---

Box é um container usado para processar arquivos em um diretório específico. O Hexo usa dois Boxes diferentes: `hexo.source` e `hexo.theme`. O primeiro é usado para processar o diretório `source` e o segundo para processar o diretório `theme`.

## Carregar Arquivos

O Box fornece dois métodos para carregar arquivos: `process` e `watch`. `process` carrega todos os arquivos no diretório. `watch` faz o mesmo, mas também começa a assistir as mudanças nos arquivos.

``` js
box.process().then(function(){
  // ...
});

box.watch().then(function(){
  // You can call box.unwatch() later to stop watching.
});
```

## Correspondência Caminho (Path Matching)

O Box fornece muitas maneiras para a correspondência de caminho. Você pode usar uma expressão regular, uma função ou uma string no padrão Express-style. Por exemplo:

``` plain
posts/:id => posts/89
posts/*path => posts/2015/title
```

Veja [util.Pattern] para mais informações.

## Processors

Um `processor` é um elemento essencial do Box e é usado para processar arquivos. Você pode usar o path matching conforme descrito acima para restringir o que exatamente o `processor` deve processar. Registre um novo `processor` com o método `addProcessor`.

``` js
box.addProcessor('posts/:id', function(file){
  //
});
```

O Box passa o conteúdo dos arquivos correspondentes aos processadores. Esta informação pode então ser lida diretamente do argumento `file` no retorno do callback:

Atributo | Descrição
--- | ---
`source` | Caminho completo do arquivo.
`path` | Caminho relativo para o Box do arquivo.
`type` | Tipo de arquivo. O valor pode ser `create`, `update`, `skip` ou `delete`.
`params` | A informação do caminho correspondente.

O Box também fornece alguns métodos para que você não precise fazer o IO (entrada e saída) de arquivo por conta própria.

Método | Descrição
--- | ---
`read` | Ler um arquivo.
`readSync` | Ler um arquivo de forma síncrona.
`stat` | Ler o status de um arquivo.
`statSync` | Ler o status de um arquivo de forma síncrona.
`render` | Renderizar um arquivo.
`renderSync` | Renderizar um arquivo de forma síncrona.

[util.Pattern]: https://github.com/hexojs/hexo-util#patternrule
