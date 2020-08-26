---
title: Renderer
---

Um `renderer` é utilizado para renderizar conteúdos.

## Resumo

``` js
hexo.extend.renderer.register(name, output, function(data, options){
  // ...
}, sync);
```

Argumento | Descrição
--- | ---
`name` | Extensão do arquivo de entrada (caixa baixa, sem o `.` inicial)
`output` | Extensão do arquivo de saída (caixa baixa, sem o `.` inicial)
`sync` | Modo de sincronização

Dois argumentos devem ser passados para a função renderer:

Argumento | Descrição
--- | ---
`data` | Inclui dois atributos: Caminho do arquivo (`path`) e o conteúdo do arquivo (`text`). Não é necessário que `path` exista.
`option` | Opções

## Exemplo

### Modo Assíncrono

``` js
var stylus = require('stylus');

// Callback
hexo.extend.renderer.register('styl', 'css', function(data, options, callback){
  stylus(data.text).set('filename', data.path).render(callback);
});

// Promise
hexo.extend.renderer.register('styl', 'css', function(data, options){
  return new Promise(function(resolve, reject){
    resolve('test');
  });
});
```

### Modo Síncrono

``` js
var ejs = require('ejs');

hexo.extend.renderer.register('ejs', 'html', function(data, options){
  options.filename = data.path;
  return ejs.render(data.text, options);
}, true);
```

### Disable Nunjucks tags

Nunjucks tags `{{ }}` or `{% %}` (utilized by [tag plugin](/docs/tag-plugins)) are processed by default, to disable:

``` js
function lessFn(data, options) {
  // do something
}

lessFn.disableNunjucks = true

hexo.extend.renderer.register('less', 'css', lessFn);
```
