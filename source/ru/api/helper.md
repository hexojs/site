---
title: Помощник
---
Помощник позволяет легко и быстро добавлять фрагменты кода в шаблоны. Мы рекомендуем использовать помощников в шаблонах, когда вы имеете дело со сложным кодом.

## Краткий обзор

``` js
hexo.extend.helper.register(name, function(){
  // ...
});
```

## Пример

``` js
hexo.extend.helper.register('js', function(path){
  return '<script src="' + path + '"></script>';
});
```

``` js
<%- js('script.js') %>
// <script src="script.js"></script>
```

## FAQ

### Где разместить собственного помощника?

Поместите его в папку `scripts/` или `themes/<ваша_тема>/scripts/`.

### Как мне использовать другого зарегистрированного помощника в моем собственном помощнике?

Все помощники выполняются в одном и том же окружении. Например, чтобы использовать [`url_for()`](/ru/docs/helpers#url-for) внутри собственного помощника:

``` js
hexo.extend.helper.register('lorem', function(path) {
  return '<script src="' + this.url_for(path) + '"></script>';
});
```

### Как мне использовать зарегистрированного помощника в другом расширении (например Фильтра, инжектора и т.д.)?

`hexo.extend.helper.get` вернёт вспомогательную функцию, но в качестве контекста она должна иметь hexo, поэтому:

``` js
const url_for = hexo.extend.helper.get('url_for').bind(hexo);
```
