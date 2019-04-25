---
title: Variáveis Locais
---

As variáveis locais são usadas para renderização de template, que é a variável `site` em templates.

## Variáveis Padrão

Variável | Descrição
--- | ---
`posts` | Todas as postagens
`pages` | Todas as páginas
`categories` | Todas as categorias
`tags` | Todas as tags

## Obter uma Variável

``` js
hexo.locals.get('posts')
```

## Atribuir uma Variável

``` js
hexo.locals.set('posts', function(){
  return ...
});
```

## Remover uma Variável

``` js
hexo.locals.remove('posts');
```

## Obter Todos as Variáveis

``` js
hexo.locals.toObject();
```

## Invalidar o Cache

``` js
hexo.locals.invalidate();
```
