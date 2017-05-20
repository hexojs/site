title: Фильтры
---
Фильтры используются для изменения указанных данных. Hexo передает данные для фильтров в определенной последовательности и фильтров изменения данных один за другим. Эта концепция была заимствована из [WordPress](http://codex.wordpress.org/Plugin_API#Filters)

## Краткий обзор

``` js
hexo.extend.filter.register(type, function(){
  // ...
}, priority);
```

Вы можете определить приоритет. Низкий приоритет означает, что он будет выполняться в первую очередь. Приоритет по умолчанию равен 10

## Использование фильтров

``` js
hexo.extend.filter.exec(type, data, options);
hexo.extend.filter.execSync(type, data, options);
```

Опция | Описание
--- | ---
`context` | Контекст
`args` | Аргументы. Должны быть в виде массива.

Первый аргумент, передаваемый в каждый фильтр - `data`. Данные `data`, передаваемые в следующий фильтр могут быть изменены путем возврата нового значения. Если же ничего не возвращается, данные остаются без изменений. Вы даже можете использовать аргументы, чтобы указать другие аргументы в фильтрах. Например:

``` js
hexo.extend.filter.register('test', function(data, arg1, arg2){
  // data === 'some data'
  // arg1 === 'foo'
  // arg2 === 'bar'

  return 'something';
});

hexo.extend.filter.register('test', function(data, arg1, arg2){
  // data === 'something'
});

hexo.extend.filter.exec('test', 'some data', {
  args: ['foo', 'bar']
});
```

Также можно использовать следующие методы для выполнения фильтров:

``` js
hexo.execFilter(type, data, options);
hexo.execFilterSync(type, data, options);
```

## Отмена фильтров

``` js
hexo.extend.filter.unregister(type, filter);
```

## Список фильтров

Здесь находится список фильтров, используемых в Hexo.

### before_post_render

Выполняется перед началом обработки поста. См. [post rendering](posts.html#Render) для изучения этапов обработки.

Например, перевести название в Нижний регистр:

``` js
hexo.extend.filter.register('before_post_render', function(data){
  data.title = data.title.toLowerCase();
  return data;
});
```

### after_post_render

Выполняется после завершения обработки поста. См. [post rendering](posts.html#Обработка) для изучения этапов выполнения.

Например, чтобы заменить `@username` ссылкой на профиль в Twitter:

``` js
hexo.extend.filter.register('after_post_render', function(data){
  data.content = data.content.replace(/@(\d+)/, '<a href="http://twitter.com/$1">#$1</a>');
  return data;
});
```

### before_exit

Выполняется перед выходом из Hexo. Срабатывает сразу после выполнения `hexo.exit`.

``` js
hexo.extend.filter.register('before_exit', function(){
  // ...
});
```

### before_generate

Выполнится перед началом генерации.

``` js
hexo.extend.filter.register('before_generate', function(){
  // ...
});
```

### after_generate

Выполнится после окончания генерации.

``` js
hexo.extend.filter.register('after_generate', function(){
  // ...
});
```

### template_locals

Позволяет изменять [локальные переменные](../docs/variables.html) в шаблонах.

Например, чтобы добавить переменную текущего времени в шаблон:

``` js
hexo.extend.filter.register('template_locals', function(locals){
  locals.now = Date.now();
  return locals;
});
```

### after_init

Выполнится после начала инициализации Hexo - запустится только после того, как полностью отработает команда `hexo.init`.

``` js
hexo.extend.filter.register('after_init', function(){
  // ...
});
```

### new_post_path

Используется при создании поста для определения пути постоянной ссылки.

``` js
hexo.extend.filter.register('new_post_path', function(data, replace){
  // ...
});
```

### post_permalink

Выполняется при создании поста, для определения пути постоянной ссылки.

``` js
hexo.extend.filter.register('post_permalink', function(data){
  // ...
});
```

### after_render

Выполнится после завершения обработки. См. [рендеринг](rendering.html#after_render_Filters) для подробностей.

### server_middleware

Добавляет промежуточные задачи для сервера. `app` является экземпляром [Connect].

Например, чтобы добавить `X-Powered-By: Hexo` в заголовке ответа:

``` js
hexo.extend.filter.register('server_middleware', function(app){
  app.use(function(req, res, next){
    res.setHeader('X-Powered-By', 'Hexo');
    next();
  });
});
```

[Connect]: https://github.com/senchalabs/connect
