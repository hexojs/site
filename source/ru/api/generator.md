title: Генератор
---
Генератор создаёт ссылки на основе обработанных файлов.

## Краткий обзор

``` js
hexo.extend.generator.register(name, function(locals){
  // ...
});
```

Аргумент `locals` передается в функцию, содержащую переменные сайта. Нужно использовать этот аргумент, чтобы получить [переменные сайта](../docs/variables.html#Переменные-сайта), тем самым убирается необходимость обращаться к базе данных напрямую.

## Обновление путей

``` js
hexo.extend.generator.register('test', function(locals){
  // Object
  return {
    path: 'foo',
    data: 'foo'
  };

  // Array
  return [
    {path: 'foo', data: 'foo'},
    {path: 'bar', data: 'bar'}
  ];
});
```

Атрибут | Описание
--- | ---
`path` | Путь не включает префикс `/`.
`data` | Данные
`layout` | Макет. Укажите макеты для рендеринга. Значение может быть строкой или массивом. Если это проигнорировать, то путь будет возвращать данные `data` напрямую.

Когда исходные файлы обновляются, Hexo выполняет генерацию и пересоздаёт ссылки. **Пожалуйста, генерируйте данные, а не создавайте ссылки напрямую.**

## Примеры

### Страница архива

Создаёт страницу архива в `archives/index.html`. Проходит по данным всех постов, указанных в шаблонах. Эти данные соответствуют переменной `page` в шаблонах.

Далее, устанавливается атрибут `layout` для рендеринга шаблонов. В этом примере два варианта: если макета для `archive` нет, будет использоваться макет `index`.

``` js
hexo.extend.generator.register('archive', function(locals){
  return {
    path: 'archives/index.html',
    data: locals.posts,
    layout: ['archive', 'index']
  }
});
```

### Страница архива с постраничным разбиением

Можно использовать удобный официальный инструмент [hexo-pagination], для легкого создания страниц с постраничной нумерацией.

``` js
var pagination = require('hexo-pagination');

hexo.extend.generator.register('archive', function(locals){
  return pagination('archives/index.html', locals.posts, {
    perPage: 10,
    layout: ['archive', 'index'],
    data: {}
  });
});
```

### Генерация всех постов

Перебирает все посты из переменной `locals.posts` и создаёт пути для всех найденных.

``` js
hexo.extend.generator.register('post', function(locals){
  return locals.posts.map(function(post){
    return {
      path: post.path,
      data: post,
      layout: 'post'
    };
  });
});
```

### Копирование файлов

На этот раз не обойтись без явного возврата данных, но вместо отправки `data` в функцию, используется `fs.ReadStream`. Но только при необходимости.

``` js
var fs = require('hexo-fs');

hexo.extend.generator.register('asset', function(locals){
  return {
    path: 'file.txt',
    data: function(){
      return fs.createReadStream('path/to/file.txt')
    }
  };
});
```

[hexo-pagination]: https://github.com/hexojs/hexo-pagination
