title: Маршрутизатор
---
Маршрутизатор сохраняет все ссылки используемые на сайте.

## Получение пути

Метод `get` возвращает поток [Stream]. Пример, для сохранения данных о ссылках в указанное место:

``` js
var data = hexo.route.get('index.html');
var dest = fs.createWriteStream('somewhere');

data.pipe(dest);
```

## Установка пути

Метод `set` принимает строку, [Buffer] или функцию.

``` js
// Строка
hexo.route.set('index.html', 'index')

// Buffer
hexo.route.set('index.html', new Buffer('index'));

// Функция (Запрос)
hexo.route.set('index.html', function(){
  return new Promise(function(resolve, reject){
    resolve('index');
  });
});

// Функция (Обратный вызов)
hexo.route.set('index.html', function(callback){
  callback(null, 'index');
});
```

Можно, также, установить логическое значение была ли изменён путь. Это позволяет увеличить скорость создания файлов, поскольку игнорируются неизменённые ссылки.

``` js
hexo.route.set('index.html', {
    data: 'index',
    modified: false
});

// hexo.route.isModified('index.html') => false
```

## Удаление ссылки

``` js
hexo.route.remove('index.html');
```

## Получение списка ссылок

``` js
hexo.route.list();
```

## Формат пути

Метод `format` преобразует строку в правильную ссылку.

``` js
hexo.route.format('archives/');
// archives/index.html
```

[Stream]: http://nodejs.org/api/stream.html
[Buffer]: http://nodejs.org/api/buffer.html
