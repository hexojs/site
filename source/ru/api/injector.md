---
title: Инъектор
---
Инъектор используется для добавления статического фрагмента кода в `<head>` и/или `<body>` генерируемых HTML-файлов. Hexo производит вставку **до того, как** будет выполнен фильтр `after_render:html`.

## Краткий обзор

```js
hexo.extend.injector.register(entry, value, to)
```

### ввод `<string>`

Используется там, где необходимо ввести код внутрь HTML напрямую.

Поддерживаются такие варианты:

- `head_begin`: ввод фрагмента кода сразу после `<head>` (по умолчанию).
- `head_end`: введите фрагмент кода прямо перед `</head>'.
- `body_begin`: введите фрагмент кода сразу после `<body>`.
- `body_end`: введите фрагмент кода прямо перед `</body>'.

### значение `<string> | <Function>`

> Поддерживаются функции, возвращающие строку.

Фрагмент кода, который нужно ввести.

### to `<string>`

На какой странице будут добавлены фрагменты кода.

- `default`: Ввод на каждой странице (по умолчанию).
- `home`: Вставка произведётся только на домашнюю страницу (у которой переменная `is_home()` имеет значение `true`)
- `post`: Вставка произведётся только на страницы публикаций (у которых переменная `is_post()` имеет значение `true`)
- `page`: Вставка произведётся только на страницы (у которых переменная `is_page()` имеет значение `true`)
- `archive`: Вставка произведётся только на страницы архива (у которых переменная`is_archive()` имеет значение `true`)
- `category`: Вставка произведётся только на страницы категорий (у которых переменная `is_category()` имеет значение `true`)
- `tag`: Вставка произведётся только на страницы тегов (у которых переменная `is_tag()` является `true`)
- Также можно использовать пользовательское имя макета, см. [Запись - Макет](/docs/writing#Layout).

----

Существуют и другие внутренние функции, см. [hexojs/hexo#4049](https://github.com/hexojs/hexo/pull/4049 ) для получения более подробной информации.

## Пример

```js
const css = hexo.extend.helper.get('css').bind(hexo);
const js = hexo.extend.helper.get('js').bind(hexo);

hexo.extend.injector.register('head_end', () => {
  return css('https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css');
}, 'music');

hexo.extend.injector.register('body_end', '<script src="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js">', 'music');

hexo.extend.injector.register('body_end', () => {
  return js('/js/jquery.js');
});
```

Вышеуказанная настройка добавит `APlayer.min.css` (с тегом `<link>`) в `</head>` любой страницы, макет которой установлен как `music`, и `APlayer.min.js` (тег `<script>`) в `</body>` этих страниц. Кроме того, `jquery.js` (с тегом `<script>`) будет вставлен в `</body>` каждой сгенерированной страницы.

## Доступ к пользовательской конфигурации

Используйте любой из следующих вариантов:

1.

``` js
const css = hexo.extend.helper.get('css').bind(hexo);

hexo.extend.injector.register('head_end', () => {
  const { cssPath } = hexo.config.fooPlugin;
  return css(cssPath);
});
```

2.

``` js index.js
/* global hexo */

hexo.extend.injector.register('head_end', require('./lib/inject').bind(hexo))
```

``` js lib/inject.js
module.exports = function () {
  const css = this.extend.helper.get('css');
  const { cssPath } = this.config.fooPlugin;
  return css(cssPath);
}
```

``` js lib/inject.js
function injectFn() {
  const css = this.extend.helper.get('css');
  const { cssPath } = this.config.fooPlugin;
  return css(cssPath);
}

module.exports = injectFn;
```

3.

``` js index.js
/* global hexo */

hexo.extend.injector.register('head_end', require('./lib/inject')(hexo))
```

``` js lib/inject.js
module.exports = (hexo) => () => {
  const css = hexo.extend.helper.get('css').bind(hexo);
  const { cssPath } = hexo.config.fooPlugin;
  return css(cssPath);
};
```

``` js lib/inject.js
const injectFn = (hexo) => {
  const css = hexo.extend.helper.get('css').bind(hexo);
  const { cssPath } = hexo.config.fooPlugin;
  return css(cssPath);
};

module.exports = (hexo) => injectFn(hexo);
```
