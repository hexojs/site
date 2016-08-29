title: Рендер
---
Рендер используется для создания содержимого.

## Краткий обзор

``` js
hexo.extend.renderer.register(name, output, function(data, options){
  // ...
}, sync);
```

Аргумент | Описание
--- | ---
`name` | Вводится расширение входного файла (нижний регистр, без ведущей `.`)
`output` | Выводится расширение входного файла (нижний регистр, без ведущей `.`)
`sync` | Режим синхронизации

В функцию рендера передаются два аргумента:

Аргумент | Описание
--- | ---
`data` | Включает два атрибута: путь к файлу `path` и содержимое файла  `text`. Переменная `path` не является обязательной.
`option` | Опции

## Пример

### Асинхронный режим

``` js
var stylus = require('stylus');

// Обратный вызов
hexo.extend.renderer.register('styl', 'css', function(data, options, callback){
  stylus(data.text).set('filename', data.path).render(callback);
});

// Запрос
hexo.extend.renderer.register('styl', 'css', function(data, options){
  return new Promise(function(resolve, reject){
    resolve('test');
  });
});
```

### Синхронный режим

``` js
var ejs = require('ejs');

hexo.extend.renderer.register('ejs', 'html', function(data, options){
  options.filename = data.path;
  return ejs.render(data.text, options);
}, true);
```
