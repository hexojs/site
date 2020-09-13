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

## Unregister Tags

Use `unregister()` to replace existing [tag plugins](/docs/tag-plugins) with custom functions.

``` js
hexo.extend.tag.unregister(name);
```

**Example**

``` js
const tagFn = (args, content) => {
  content = 'something';
  return content;
};

// https://hexo.io/docs/tag-plugins#YouTube
hexo.extend.tag.unregister('youtube');

hexo.extend.tag.register('youtube', tagFn);
```

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

## Front-matter and user configuration

Any of the following options is valid:

1.

``` js
hexo.extend.tag.register('foo', function (args) {
  const [firstArg] = args;

  // User config
  const { config } = hexo;
  const editor = config.author + firstArg;

  // Theme config
  const { config: themeCfg } = hexo.theme;
  if (themeCfg.fancybox) // do something...

  // Front-matter
  const { title } = this; // article's (post/page) title

  // Article's content
  const { _content } = this; // original content
  const { content } = this; // HTML-rendered content

  return 'foo';
});
```

2.

``` js index.js
hexo.extend.tag.register('foo', require('./lib/foo')(hexo));
```

``` js lib/foo.js
module.exports = hexo => {
  return function fooFn(args) {
    const [firstArg] = args;

    const { config } = hexo;
    const editor = config.author + firstArg;

    const { config: themeCfg } = hexo.theme;
    if (themeCfg.fancybox) // do something...

    const { title, _content, content } = this;

    return 'foo';
  };
};
```

[Nunjucks]: http://mozilla.github.io/nunjucks/
[Swig]: http://paularmstrong.github.io/swig/
