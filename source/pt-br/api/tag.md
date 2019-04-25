---
title: Tag
---

Uma tag permite que os usuários insiram, de forma rápida e fácil, snippets (trechos de código) dentro de suas postagens.

## Resumo

``` js
hexo.extend.tag.register(name, function(args, content){
  // ...
}, options);
```

Dois argumentos serão passados para dentro da função: `args` e `content`. `args` contém os argumentos passados para o tag plugin e `content` é o conteúdo envolvido do tag plugin.

Desde a introdução da renderização assíncrona, na versão 3 do Hexo, estamos usando o [Nunjucks] para renderização. O comportamento pode ser um pouco diferente do [Swig].

## Opções

### ends

Use as tags end. Esta opção é `false` por padrão.

### async

Habilite o modo assíncrono. Esta opção é `false` por padrão.

## Exemplos

### Sem a Tag End

Insira um vídeo do Youtube.

``` js
hexo.extend.tag.register('youtube', function(args){
  var id = args[0];
  return '<div class="video-container"><iframe width="560" height="315" src="http://www.youtube.com/embed/' + id + '" frameborder="0" allowfullscreen></iframe></div>';
});
```

### Com a Tag End

Insira uma citação.

``` js
hexo.extend.tag.register('pullquote', function(args, content){
  var className =  args.join(' ');
  return '<blockquote class="pullquote' + className + '">' + content + '</blockquote>';
}, {ends: true});
```

### Renderização Assíncrona

Insira um arquivo.

``` js
var fs = require('hexo-fs');
var pathFn = require('path');

hexo.extend.tag.register('include_code', function(args){
  var filename = args[0];
  var path = pathFn.join(hexo.source_dir, filename);

  return fs.readFile(path).then(function(content){
    return '<pre><code>' + content + '</code></pre>';
  });
}, {async: true});
```

[Nunjucks]: http://mozilla.github.io/nunjucks/
[Swig]: http://paularmstrong.github.io/swig/
