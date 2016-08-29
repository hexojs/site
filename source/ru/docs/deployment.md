title: Публикация
---
Hexo обеспечивает быстрый и простой способ размещения. Нужна только одна команда, чтобы развернуть свой сайт на сервере.

``` bash
$ hexo deploy
```

Перед первой публикацией сайта, нужно изменить некоторые настройки в `_config.yml`. Правильные параметры развёртывания должны иметь поле `type`. Например:

``` yaml
deploy:
  type: git
```

Вы можете использовать несколько сервисов размещения. Hexo будет выполнять все в том порядке, какой указан в файле.

``` yaml
deploy:
- type: git
  repo:
- type: heroku
  repo:
```

## Git

Установите [hexo-deployer-git].

``` bash
$ npm install hexo-deployer-git --save
```

Изменение параметров.

``` yaml
deploy:
  type: git
  repo: <repository url>
  branch: [branch]
  message: [message]
```

Опция | Описание
--- | ---
`repo` | Адрес GitHub репозитория
`branch` | Имя ветки. Публикатор автоматически определит ветку, если используется GitHub или GitCafe.
`message` | Изменение описания коммита (По умолчанию `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`)

## Heroku

Установите [hexo-deployer-heroku].

``` bash
$ npm install hexo-deployer-heroku --save
```

Изменение параметров.

``` yaml
deploy:
  type: heroku
  repo: <repository url>
  message: [message]
```

Опция | Описание
--- | ---
`repo`, `repository` | Адрес Heroku репозитория
`message` | Изменение описания коммита (По умолчанию: `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`)

## Rsync

Установите [hexo-deployer-rsync].

``` bash
$ npm install hexo-deployer-rsync --save
```

Изменение параметров.

``` yaml
deploy:
  type: rsync
  host: <host>
  user: <user>
  root: <root>
  port: [port]
  delete: [true|false]
  verbose: [true|false]
  ignore_errors: [true|false]
```

Опция | Описание | Умолчание
--- | --- | ---
`host` | Адрес удалённого хоста |
`user` | Имя пользователя |
`root` | Корневой каталог на удалённом хосте |
`port` | Порт | 22
`delete` | Удаление старых файлов на удаленном хосте | true
`verbose` | Выводить подробные сообщения | true
`ignore_errors` | Игнорировать ошибки | false

## OpenShift

Установите [hexo-deployer-openshift].

``` bash
$ npm install hexo-deployer-openshift --save
```

Изменение параметров.

``` yaml
deploy:
  type: openshift
  repo: <repository url>
  message: [message]
```

Опция | Описание
--- | ---
`repo` | Адрес OpenShift репозитория
`message` | Изменение описания коммита (По умолчанию: `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`)

## FTPSync

Установите [hexo-deployer-ftpsync].

``` bash
$ npm install hexo-deployer-ftpsync --save
```

Изменение параметров.

``` yaml
deploy:
  type: ftpsync
  host: <host>
  user: <user>
  pass: <password>
  remote: [remote]
  port: [port]
  ignore: [ignore]
  connections: [connections]
  verbose: [true|false]
```

Опция | Описание | Умолчание
--- | --- | ---
`host` | Адрес удалённого хоста |
`user` | Имя пользователя |
`pass` | Пароль |
`remote` | Корневой каталог на удалённом хосте | `/`
`port` | Порт | 21
`ignore` | Игнорировать файлы на удалённом хосте |
`connections` | Количество подключений | 1
`verbose` | Выводить подробные сообщения | false

## Другие способы

Все созданные файлы сохраняются в папке `public`. Вы можете скопировать их куда угодно.

[hexo-deployer-git]: https://github.com/hexojs/hexo-deployer-git
[hexo-deployer-heroku]: https://github.com/hexojs/hexo-deployer-heroku
[hexo-deployer-rsync]: https://github.com/hexojs/hexo-deployer-rsync
[hexo-deployer-openshift]: https://github.com/hexojs/hexo-deployer-openshift
[hexo-deployer-ftpsync]: https://github.com/hexojs/hexo-deployer-ftpsync
