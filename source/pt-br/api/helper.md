---
title: Helper
---

Um helper facilita a adição de snippets (trechos de código) aos seus templates. Recomendamos usar helpers em vez de templates quando estiver lidando com código mais complicado.

Os Helpers não podem ser acessados nos arquivos de `source`.

## Resumo

``` js
hexo.extend.helper.register(name, function(){
  // ...
});
```

## Exemplo

``` js
hexo.extend.helper.register('js', function(path){
  return '<script type="text/javascript" src="' + path + '"></script>';
});
```

``` js
<%- js('script.js') %>
// <script type="text/javascript" src="script.js"></script>
```

## FAQ

### Onde pôr um helper personalizado?

Coloque-o dentro de `themes/<yourtheme>/scripts`
