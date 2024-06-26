---
title: API
---

Эта документация содержит подробную информацию об API и будет особенно полезна для людей, желающих изменить исходный код Hexo или писать новые плагины. Если Вас интересуют основы использования Hexo, пожалуйста, используйте [документацию](../docs).

Обратите внимание, эта документация действительна только для Hexo 3 и выше.

## Инициализация

Во-первых, нужно создать экземпляр Hexo. Он принимает два аргумента: корневой каталог сайта `base_dir` и объект, содержащий параметры инициализации. Далее для инициализации выполняется метод `init`, он вызывает Hexo и загружает настройки и плагины.

```js
var Hexo = require("hexo");
var hexo = new Hexo(process.cwd(), {});

hexo.init().then(function () {
  // ...
});
```

| Опция    | Описание                                                                                                                             | Значение по умолчанию |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------ | --------------------- |
| `debug`  | Включает режим отладки. Отображает отладочные сообщения в консоль и сохраняет в файл `debug.log`, находящийся в корневой директории. | `false`               |
| `safe`   | Включает безопасный режим. Пропускается загрузка всех плагинов.                                                                      | `false`               |
| `silent` | Включает тихий режим. Скрывает отображение любых сообщений в терминале.                                                              | `false`               |
| `config` | Указывает путь к файлу конфигурации.                                                                                                 | `_config.yml`         |

## Загрузка файлов

Hexo предусматривает два способа загрузки файлов: `load` и `watch`. `load` используется для загрузки всех файлов из исходной папки и данных темы. `watch` делает то же самое, а также следит за файлами и запускает обработку при их изменении.

Оба метода позволяют загрузить список файлов и передать их в соответствующие обработчики. После того, как все файлы будут обработаны, они вызовут генератор создания ссылок.

```js
hexo.load().then(function () {
  // ...
});

hexo.watch().then(function () {
  // Можно использовать hexo.unwatch() позже для отмены отслеживания изменений в файлах.
});
```

## Выполнение команд

Любую консольную команду можно вызвать явно с помощью метода `call` в экземпляре Hexo. Такой вызов принимает два аргумента: команду и её опции. Для каждой команды доступны свои опции.

```js
hexo.call("generate", {}).then(function () {
  // ...
});
```

## Выход

После успешного или неудачного завершения команд в консоли нужно вызывать метод `exit`. Это позволяет Hexo корректно завершить и закончить важные задачи, например, сохранение базы данных.

```js
hexo
  .call("generate")
  .then(function () {
    return hexo.exit();
  })
  .catch(function (err) {
    return hexo.exit(err);
  });
```
