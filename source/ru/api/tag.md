---
title: Тег
---
Тег позволяет легко и быстро вставлять фрагменты в свои посты.

## Краткий обзор

``` js
hexo.extend.tag.register(name, function(args, content){
  // ...
}, options);
```

В функцию тега передаются два аргумента: `args` и `content`. `args` содержит аргументы, передаваемые плагину. `content` оборачивается содержанием с помощью плагина тега.

С момента введения в асинхронное отображение Hexo 3 использует [Nunjucks] для обработки. Его поведение несколько отличается от применяемого в [Swig].

## Опции

### ends


Использовать закрывающие теги. По умолчанию установлено в `false`.

### async

Включает асинхронный режим. По умолчанию установлено в `false`.

## Примеры

### Без закрывающих тегов

Вставка видео с YouTube.

``` js
hexo.extend.tag.register('youtube', function(args){
  var id = args[0];
  return '<div class="video-container"><iframe width="560" height="315" src="http://www.youtube.com/embed/' + id + '" frameborder="0" allowfullscreen></iframe></div>';
});
```

### С закрывающими тегами

Вставка цитаты.

``` js
hexo.extend.tag.register('pullquote', function(args, content){
  var className =  args.join(' ');
  return '<blockquote class="pullquote' + className + '">' + content + '</blockquote>';
}, {ends: true});
```

### Асинхронная обработка

Вставка файла.

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
