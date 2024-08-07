---
title: Локальные переменные
---

Локальные переменные используются для рендеринга шаблона, они доступны через переменную `site` в шаблоне.

## Переменные по умолчанию

| Variable     | Описание      |
| ------------ | ------------- |
| `posts`      | Все посты     |
| `pages`      | Все страницы  |
| `categories` | Все категории |
| `tags`       | Все теги      |

## Получение переменной

```js
hexo.locals.get("posts");
```

## Установка переменной

```js
hexo.locals.set('posts', function(){
  return ...
});
```

## Удаление переменной

```js
hexo.locals.remove("posts");
```

## Получение всех переменных

```js
hexo.locals.toObject();
```

## Invalidate the cache

```js
hexo.locals.invalidate();
```
