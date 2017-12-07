title: Variáveis Locais
---
As váriaveis locais são usadas para renderização de modelo, que é a variávels `site` em modelos

## Variáveis padrão

Variáveis | Descrição
--- | ---
`posts` | Todos os posts
`pages` | Todas as páginas
`categories` | Todas as categorias
`tags` | Todas as tags

## Obtendo uma variável

``` js
hexo.locals.get('posts')
```

## Atribuindo na variável

``` js
hexo.locals.set('posts', function(){
  return ...
});
```

## Remoe uma variável

``` js
hexo.locals.remove('posts');
```

## Obtendo todos as variáveis

``` js
hexo.locals.toObject();
```

## Invalidar o cache

``` js
hexo.locals.invalidate();
```
