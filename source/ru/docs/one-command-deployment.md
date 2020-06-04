---
title: Публикация
---
Hexo обеспечивает быстрый и простой способ размещения. Нужна только одна команда, чтобы развернуть свой сайт на сервере.

``` bash
$ hexo deploy
```

Перед первой публикацией сайта нужно изменить некоторые настройки в `_config.yml`. Правильные параметры развёртывания должны иметь поле `type`. Например:

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

Refer to the [Plugins](https://hexo.io/plugins/) list for more deployment plugins.

## Git

1. Install [hexo-deployer-git].

```bash
$ npm install hexo-deployer-git --save
```

2. Edit **\_config.yml** (with example values shown below as comments):

```yaml
deploy:
  type: git
  repo: <repository url> #https://bitbucket.org/JohnSmith/johnsmith.bitbucket.io
  branch: [branch]
  message: [message]
```

Option | Description | Default
--- | --- | ---
`repo` | URL of the target repository |
`branch` | Branch name. | `gh-pages` (GitHub)<br>`coding-pages` (Coding.net)<br>`master` (others)
`message` | Customize commit message. | `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`
`token` | Optional token value to authenticate with the repo. Prefix with `$` to read token from environment variable

3. Deploy your site `hexo clean && hexo deploy`.
  - You will be prompted with username and password of the target repository, unless you authenticate with a token or ssh key.
  - hexo-deployer-git does not store your username and password. Use [git-credential-cache](https://git-scm.com/docs/git-credential-cache) to store them temporarily.
4. Navigate to your repository settings and change the "Pages" branch to `gh-pages` (or the branch specified in your config). The deployed site should be live on the link shown on the "Pages" setting.

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

Опция | Описание | Значение по умолчанию
--- | --- | ---
`host` | Адрес удалённого хоста |
`user` | Имя пользователя |
`pass` | Пароль |
`remote` | Корневой каталог на удалённом хосте | `/`
`port` | Порт | 21
`ignore` | Игнорировать файлы на удалённом хосте |
`connections` | Количество подключений | 1
`verbose` | Выводить подробные сообщения | false

## 21YunBox

1. На сайте [21YunBox](https://www.21yunbox.com) настройте новый проект «Статический сайт» от GitHub со следующими настройками:

- **Build command:** `yarn && hexo deploy`
- **Publish directory:** `public`

2. Пресс Развертывание Бутон!

Ну вот! Ваше приложение будет жить на вашем URL 21YunBox, как только сборка заканчивается.

Образец приложения для 'hexo' развернут на сайте [https://hexo.21yunbox.com/](https://hexo.21yunbox.com/).

Для получения более подробной информации, следуйте этому руководству по адресу [https://www.21yunbox.com/docs/'/deploy-hexo](https://www.21yunbox.com/docs/'/deploy-hexo).

## Другие способы

Все созданные файлы сохраняются в папке `public`. Вы можете скопировать их куда угодно.

[hexo-deployer-git]: https://github.com/hexojs/hexo-deployer-git
[hexo-deployer-heroku]: https://github.com/hexojs/hexo-deployer-heroku
[hexo-deployer-rsync]: https://github.com/hexojs/hexo-deployer-rsync
[hexo-deployer-openshift]: https://github.com/hexojs/hexo-deployer-openshift
[hexo-deployer-ftpsync]: https://github.com/hexojs/hexo-deployer-ftpsync
