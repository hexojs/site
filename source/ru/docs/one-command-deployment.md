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

Расположение списка дополнительных плагинов для развертывания: [Plugins](https://hexo.io/plugins/).

## Git

1. Установка [hexo-deployer-git].

```bash
$ npm install hexo-deployer-git --save
```

2. Отредактируйте **\_config.yml** (примеры значений, показаны ниже в качестве комментариев):

```yaml
deploy:
  type: git
  repo: <repository url> #https://bitbucket.org/JohnSmith/johnsmith.bitbucket.io
  branch: [branch]
  message: [message]
```

Опция | Описание | По умолчанию
--- | --- | ---
`repo` | URL-адрес целевого репозитория |
`branch` | Название ветки. | `gh-pages` (GitHub)<br>`coding-pages` (Coding.net)<br>`master` (другое)
`message` | Конфигурирация сообщения о коммите. | `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`
`token` | Необязательное значение токена для аутентификации в репозитории. Префикс с `$` для чтения, взятый из переменной среды

3. Разместите свой сайт  `hexo clean && hexo deploy`.

  - Вам будет предложено ввести имя пользователя и пароль целевого репозитория, если вы не аутентифицируетесь с помощью токена или ssh-ключа.
  - hexo-deployer-git не хранит ваше имя пользователя и пароль. Используйте [git-credential-cache](https://git-scm.com/docs/git-credential-cache), чтобы временно их хранить.

4. Перейдите в настройки своего репозитория и измените ветвь "Pages" на `gh-pages` (или ветвь, указанную в вашей конфигурации). Развернутый сайт должен быть доступен по ссылке, указанной в параметре "Pages".

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

## Vercel


[Vercel](https://vercel.com) это облачная платформа, которая позволяет разработчикам размещать веб-сайты и веб-службы Jamstackкоторые мгновенно развертываются, автоматически масштабируются и не требуют контроля, все с нулевой конфигурацией. Они обеспечивают глобальную пограничную сеть, шифрование SSL, сжатие ресурсов, аннулирование кэша и многое другое.

Шаг 1: Добавьте сценарий сборки в файл `package.json`:

```json
{
  "scripts": {
    "build": "hexo generate"
  }
}
```

Шаг 2: Разместите свой веб-сайт Hexo в Vercel

Для разворачивания вашего приложения Hexo с помощью [Vercel для интеграции с Git](https://vercel.com/docs/git-integrations), убедитесь, что он был отправлен в репозиторий Git.

Импортируйте проект в Vercel с помощью [Import Flow](https://vercel.com/import/git). Во время импорта вы найдете все соответствующие параметры, предварительно настроенные для вас; однако вы можете изменить любой из этих параметров, список которых можно найти [здесь](https://vercel.com/docs/build-step#build-&-development-settings).

После импорта вашего проекта все последующие изменения в ветви будут создавать [Preview Deployments](https://vercel.com/docs/platform/deployments#preview), и все изменения, внесенные в [Production Branch](https://vercel.com/docs/git-integrations#production-branch ) (обычно "main") приведет к [Production Deployment] (https://vercel.com/docs/platform/deployments#production).

Кроме того, вы можете нажать кнопку разместить ниже, чтобы создать новый проект:

[![Разместить в Vercel](https://vercel.com/button)](https://vercel.com/new/hexo)

## Bip

[Bip](https://bip.sh ) - это коммерческая услуга хостинга, которая обеспечивает развертывание с нулевым временем простоя, глобальную CDN, SSL, неограниченную пропускную способность и многое другое для статических веб-сайтов. Планы доступны с оплатой по факту (pay as you go), в зависимости от домена.

Начало работы происходит быстро и легко, так как Bip обеспечивает стандартную поддержку Hexo. В этом руководстве предполагается, что у вас уже есть [домен Bip и установленный интерфейс командной строки](https://bip.sh/getstarted).


1: Инициализируйте каталог вашего проекта

```bash
$ bip init
```

Следуйте инструкциям, где вас спросят, в каком домене вы хотите выполнить развертывание. Bip обнаружит, что вы используете Hexo, и автоматически установит параметры проекта, такие как каталог исходных файлов.

2: Разместите свой веб-сайт

```bash
$ hexo generate —deploy && bip deploy
```

Через несколько мгновений ваш веб-сайт будет размещён.

## RSS3

[RSS3] (https://rss3.io) - это открытый протокол, разработанный для контента и социальных сетей в эпоху Web 3.0.

1. Установите [hexo-deployer-rss3].

2. Измените конфигурацию.

  ``` yaml
  deploy:
  - type: rss3
    endpoint: https://hub.rss3.io
    privateKey: 47e18d6c386898b424025cd9db446f779ef24ad33a26c499c87bb3d9372540ba
    ipfs:
      deploy: true
      gateway: pinata
      api:
        key: d693df715d3631e489d6
        secret: ee8b74626f12b61c1a4bde3b8c331ad390567c86ba779c9b18561ee92c1cbff0
  ```

| Параметры | Описание |
| ----------------- | ---------------------- |
| `endpoint` | Ссылка на RSS3 Hub |
| `privateKey` | Ваш закрытый ключ, 64 байта |
| `ipfs/deploy` | Следует ли развертывать в IPFS |
| `ipfs/gateway` | IPFS API Gateway |
| `ipfs/api/key` | Проверочный контент, связанный со шлюзом IPFS |
| `ipfs/api/secret` | Проверочный контент, связанный со шлюзом IPFS |

3. Создавайте статические файлы.

4. Развертывание

Меры предосторожности, связанные с конкретным развертыванием, можно найти в [нашей документации](https://github.com/NaturalSelectionLabs/hexo-deployer-rss3/tree/develop/docs/en/start.md).

## Другие способы

Все созданные файлы сохраняются в папке `public`. Вы можете скопировать их куда угодно.

[hexo-deployer-git]: https://github.com/hexojs/hexo-deployer-git
[hexo-deployer-heroku]: https://github.com/hexojs/hexo-deployer-heroku
[hexo-deployer-rsync]: https://github.com/hexojs/hexo-deployer-rsync
[hexo-deployer-openshift]: https://github.com/hexojs/hexo-deployer-openshift
[hexo-deployer-ftpsync]: https://github.com/hexojs/hexo-deployer-ftpsync
[hexo-deployer-rss3]: https://github.com/NaturalSelectionLabs/hexo-deployer-rss3
