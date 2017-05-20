title: Рендеринг
---
Существует два метода обработки файлов или строк для рендеринга: асинхронный `hexo.render.render` и синхронный `hexo.render.renderSync`. Нет ничего удивительного в похожести этих методов. Ниже описываются только асинхронные методы.

## Обработка строки

При рендеринге строки Hexo необходимо указать каким обработчиком (`engine`) её обрабатывать.

``` js
hexo.render.render({text: 'example', engine: 'swig'}).then(function(result){
  // ...
});
```

## Обработка файла

При обработке файла, не нужно указывать `engine`, потому что Hexo сам обнаружит соответствующий рендер автоматически в зависимости от расширения файла. Конечно, возможно и явно задать обработчик.

``` js
hexo.render.render({path: 'path/to/file.swig'}).then(function(result){
  // ...
});
```

## Опции обработчика

Можно задать опции в качестве второго аргумента.

``` js
hexo.render.render({text: ''}, {foo: 'foo'}).then(function(result){
  // ...
});
```

## Фильтр after_render

При окончании обработки Hexo выполнит соответствующие фильтры, заданные в переменной `after_render`. Например эта функция запустит минификацию JavaScript'а.

``` js
var UglifyJS = require('uglify-js');

hexo.extend.filter.register('after_render:js', function(str, data){
  var result = UglifyJS.minify(str);
  return result.code;
});
```

## Проверка существует ли обработчик для типа файла

Можно использовать метод `isRenderable` или `isRenderableSync` для проверки зарегистрирован ли обработчик для типа файла. Только когда соответствующий обработчик был зарегистрирован будет возвращёно true.

``` js
hexo.render.isRenderable('layout.swig') // true
hexo.render.isRenderable('image.png') // false
```

## Определение расширения на выходе

Метод `getOutput` получает расширение на выходе обработчика. Если передать необрабатываемый файл, то обработчик вернёт пустую строку.

``` js
hexo.render.getOutput('layout.swig') // html
hexo.render.getOutput('image.png') // '''
```
