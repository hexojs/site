---
title: Темы
---

`hexo.theme` является наследником [модулей](box.html) и сохраняет шаблоны.

## Получить визуализацию

```js
hexo.theme.getView(path);
```

## Установить визуализацию

```js
hexo.theme.setView(path, data);
```

## Удалить визуализацию

```js
hexo.theme.removeView(path);
```

## Визуализация

Визуализация использует два метода: `render` и `renderSync`. These two methods are identical, but the former is asynchronous and the latter is synchronous. Для простоты будет рассмотрен только метод `render`.

```js
var view = hexo.theme.getView("layout.swig");

view.render({ foo: 1, bar: 2 }).then(function (result) {
  // ...
});
```

Можно передать параметры в метод `render`, и он попытается обработать шаблон соответствующим обработчиком и загрузить [помощников](helper.html). Когда обработка завершена, ищется макет. Если макет `layout` установлен в значение `false` или не существует, результат возвращается напрямую.
