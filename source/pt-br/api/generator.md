---
title: Generator
---

Um `generator` constrói rotas a partir de arquivos processados.

## Resumo

``` js
hexo.extend.generator.register(name, function(locals){
  // ...
});
```

Um argumento `locals` será passado para dentro da função, contendo as [variáveis do site](../docs/variables.html#Variaveis-do-Site). Você deve utilizar esse argumento para obter os dados do site, evitando assim, acessar a base de dados diretamente.

## Atualizar Rotas

``` js
hexo.extend.generator.register('test', function(locals){
  // Object
  return {
    path: 'foo',
    data: 'foo'
  };

  // Array
  return [
    {path: 'foo', data: 'foo'},
    {path: 'bar', data: 'bar'}
  ];
});
```

Atributo | Descrição
--- | ---
`path` | Caminho, sem incluir o prefixo `/`.
`data` | Dados
`layout` | Layout. Especifica os layouts para renderização. O valor pode ser uma string ou um array. Se ignorado, a rota retornará `data` diretamente.

Quando os arquivos fonte são atualizados, o Hexo executará todos os geradores e recriará as rotas. **Atenção: Retornar os dados em vez de acessar o roteador diretamente!**

## Exemplo

### Páginas de Arquivo

Crie uma página de arquivo em `archives/index.html`. Iremos passar uma lista com todos as postagens como `data` para os templates. Assim, `data` é equivalente à variável `page` nos templates.

Após isso, defina o atributo `layout` para renderizar a página com os templates do tema. Nesse exemplo são definidos dois layouts: se o layout de `archive` não existir, o layout de `index` será utilizado em seu lugar.

``` js
hexo.extend.generator.register('archive', function(locals){
  return {
    path: 'archives/index.html',
    data: locals,
    layout: ['archive', 'index']
  }
});
```

### Páginas de Arquivo com Paginação

Você pode utilizar uma ótima ferramenta oficial chamada [hexo-pagination] para criar facilmente uma página de arquivos com paginação.

``` js
var pagination = require('hexo-pagination');

hexo.extend.generator.register('archive', function(locals){
  // hexo-pagination makes an index.html for the /archives route
  return pagination('archives', locals.posts, {
    perPage: 10,
    layout: ['archive', 'index'],
    data: {}
  });
});
```

### Gerar Todas as Postagens

Percorra a lista de postagens em `locals.posts` e crie rotas para cada um.

``` js
hexo.extend.generator.register('post', function(locals){
  return locals.posts.map(function(post){
    return {
      path: post.path,
      data: post,
      layout: 'post'
    };
  });
});
```

### Copiar Arquivos

Dessa vez não iremos retornar `data` explicitamente, mas atribuir uma função para que a rota construa `fs.ReadStream` apenas quando necessário.

``` js
var fs = require('hexo-fs');

hexo.extend.generator.register  ('asset', function(locals){
  return {
    path: 'file.txt',
    data: function(){
      return fs.createReadStream('path/to/file.txt')
    }
  };
});
```

[hexo-pagination]: https://github.com/hexojs/hexo-pagination
