---
title: Filter
---

Um `filter` (filtro) pode ser utilizado para modificar alguns dados. O Hexo passa os dados para filtros em sequência e os filtros, então, modificam esses dados um após o outro. Este é o mesmo conceito utilizado pelo [WordPress](http://codex.wordpress.org/Plugin_API#Filters).

## Resumo

``` js
hexo.extend.filter.register(type, function() {
  // User configuration
  const { config } = this;
  if (config.external_link.enable) // do something...

  // Theme configuration
  const { config: themeCfg } = this.theme;
  if (themeCfg.fancybox) // do something...

}, priority);
```

Você pode definir uma prioridade específica para cada filtro (parâmetro `priority` no exemplo acima). Uma prioridade mais baixa significa que o filtro será executado primeiro. A prioridade padrão é 10.

## Executar Filtros

``` js
hexo.extend.filter.exec(type, data, options);
hexo.extend.filter.execSync(type, data, options);
```

Opção | Descrição
--- | ---
`context` | Contexto
`args` | Argumentos. Deve ser um array.

O primeiro argumento passado para cada filtro é `data`. O próximo filtro da sequência pode receber o argumento `data` modificado ao se retornar um novo valor. Se nada for retornado, `data` continua intacto. Você ainda pode utilizar `args` para especificar outros argumentos dentro dos filtros. Por exemplo:

``` js
hexo.extend.filter.register('test', function(data, arg1, arg2){
  // data === 'some data'
  // arg1 === 'foo'
  // arg2 === 'bar'

  return 'something';
});

hexo.extend.filter.register('test', function(data, arg1, arg2){
  // data === 'something'
});

hexo.extend.filter.exec('test', 'some data', {
  args: ['foo', 'bar']
});
```

Você também pode utilizar os seguintes métodos para executar filtros:

``` js
hexo.execFilter(type, data, options);
hexo.execFilterSync(type, data, options);
```

## Remover Filtros

``` js
hexo.extend.filter.unregister(type, filter);
```

**Example**

``` js
// Unregister a filter which is registered with named function

const filterFn = (data) => {
  data = 'something';
  return data;
};
hexo.extend.filter.register('example', filterFn);

hexo.extend.filter.unregister('example', filterFn);
```

``` js
// Unregister a filter which is registered with commonjs module

hexo.extend.filter.register('example', require('path/to/filter'));

hexo.extend.filter.unregister('example', require('path/to/filter'));
```

## Lista de Filtros

Abaixo são listados os filtros utilizados pelo Hexo.

### before_post_render

Executado antes de uma postagem ser renderizada. Verificar a seção [Renderizar](posts.html#Renderizar) para saber mais sobre as etapas de execução.

Por exemplo, para se transformar um título em _caixa baixa_:

``` js
hexo.extend.filter.register('before_post_render', function(data){
  data.title = data.title.toLowerCase();
  return data;
});
```

### after_post_render

Executado após a postagem ser renderizado. Verificar a seção [Renderizar](posts.html#Renderizar) para saber mais sobre as etapas de execução.

Por exemplo, para substituir `@username` por um link para o perfil do Twitter:

``` js
hexo.extend.filter.register('after_post_render', function(data){
  data.content = data.content.replace(/@(\d+)/, '<a href="http://twitter.com/$1">#$1</a>');
  return data;
});
```

### before_exit

Executado quando o Hexo está prestes a ser terminado -- isso será executado logo após `hexo.exit` ser chamado.

``` js
hexo.extend.filter.register('before_exit', function(){
  // ...
});
```

### before_generate

Executado antes do processo de geração ser iniciado.

``` js
hexo.extend.filter.register('before_generate', function(){
  // ...
});
```

### after_generate

Executado após o processo de geração ser concluído.

``` js
hexo.extend.filter.register('after_generate', function(){
  // ...
});
```

### template_locals

Modifica as [variáveis locais](../docs/variables.html) nos templates.

Por exemplo, para adicionar a hora atual às variáveis locais dos templates:

``` js
hexo.extend.filter.register('template_locals', function(locals){
  locals.now = Date.now();
  return locals;
});
```

### after_init

Executado após a inicialização do Hexo -- este será executado logo após `hexo.init` ser concluído.

``` js
hexo.extend.filter.register('after_init', function(){
  // ...
});
```

### new_post_path

Executado ao criar uma postagem para determinar o caminho das novas postagens.

``` js
hexo.extend.filter.register('new_post_path', function(data, replace){
  // ...
});
```

### post_permalink

Usado para determinar os links permanentes das postagens.

``` js
hexo.extend.filter.register('post_permalink', function(data){
  // ...
});
```

### after_render

Executado após a renderização ser terminada. Mais informações podem ser encontradas na seção de [renderização](rendering.html#Filtros-after-render).

### after_clean

Executados após os arquivos serem gerados e o cache ser removido com o comando `hexo clean`.

``` js
hexo.extend.filter.register('after_clean', function(){
  // remove some other temporary files
});
```

### server_middleware

Adiciona um middleware ao servidor. `app` é uma instância de [Connect].

Por exemplo, para adicionar `X-Powered-By: Hexo` ao cabeçalho de resposta:

``` js
hexo.extend.filter.register('server_middleware', function(app){
  app.use(function(req, res, next){
    res.setHeader('X-Powered-By', 'Hexo');
    next();
  });
});
```

[Connect]: https://github.com/senchalabs/connect
