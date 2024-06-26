---
title: Сервер
---

## [hexo-server]

С релизом Hexo 3 сервер был отделен от основного модуля. Чтобы начать использовать сервер, нужно установить [hexo-server].

```bash
$ npm install hexo-server --save
```

После установки сервера, выполните эту команду для запуска сервера. Ваш сайт будет доступен по адресу `http://localhost:4000` по умолчанию. Когда сервер запущен, Hexo будет отслеживать изменения файлов и автоматически обновлять содержание сайта, поэтому нет нужды вручную перезапускать сервер.

```bash
$ hexo server
```

Если вы хотите изменить порт или появляется ошибка `EADDRINUSE`, используйте опцию `-p` для задания другого порта.

```bash
$ hexo server -p 5000
```

### Статичный режим

В статичном режиме, будут обработаны файлы только в общей папке `public`, отслеживание файлов будет отключено. Нужно запустить `hexo generate` перед запуском сервера. Обычно используется перед публикацией.

```bash
$ hexo server -s
```

### Другой IP

Hexo запускает сервер с IP `127.0.0.1` по умолчанию. Это можно изменить в настройках IP по умолчанию.

```bash
$ hexo server -i 192.168.1.1
```

[hexo-server]: https://github.com/hexojs/hexo-server
