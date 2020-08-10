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
  return '<script src="' + path + '"></script>';
});
```

``` js
<%- js('script.js') %>
// <script src="script.js"></script>
```

## FAQ

### Onde pôr um helper personalizado?

Place it under `scripts/` or `themes/<yourtheme>/scripts/` folder.

### How do I use another registered helper in my custom helper?

All helpers are executed in the same context. For example, to use [`url_for()`](/docs/helpers#url-for) inside a custom helper:

``` js
hexo.extend.helper.register('lorem', function(path) {
  return '<script src="' + this.url_for(path) + '"></script>';
});
```

### How do I use a registered helper in another extension (e.g. Filter, Injector, etc)?

`hexo.extend.helper.get` will return the helper function, but it needs to have hexo as its context, so:

``` js
const url_for = hexo.extend.helper.get('url_for').bind(hexo);
```
