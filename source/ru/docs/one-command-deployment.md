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

## Vercel

[Vercel](https://vercel.com) is a cloud platform that enables developers to host Jamstack websites and web services that deploy instantly, scale automatically, and requires no supervision, all with zero configuration. They provide a global edge network, SSL encryption, asset compression, cache invalidation, and more.

Step 1: Add a build script to your `package.json` file:

```json
{
  "scripts": {
    "build": "hexo generate"
  }
}
```

Step 2: Deploy your Hexo Website to Vercel

To deploy your Hexo app with a [Vercel for Git Integration](https://vercel.com/docs/git-integrations), make sure it has been pushed to a Git repository.

Import the project into Vercel using the [Import Flow](https://vercel.com/import/git). During the import, you will find all relevant options preconfigured for you; however, you can choose to change any of these options, a list of which can be found [here](https://vercel.com/docs/build-step#build-&-development-settings).

After your project has been imported, all subsequent pushes to branches will generate [Preview Deployments](https://vercel.com/docs/platform/deployments#preview), and all changes made to the [Production Branch](https://vercel.com/docs/git-integrations#production-branch) (commonly "main") will result in a [Production Deployment](https://vercel.com/docs/platform/deployments#production).

Alternatively, you can click the deploy button below to create a new project:

[![Deploy Vercel](https://vercel.com/button)](https://vercel.com/new/hexo)

## 21YunBox

1. На сайте [21YunBox](https://www.21yunbox.com) настройте новый проект «Статический сайт» от GitHub со следующими настройками:

- **Build command:** `yarn && hexo deploy`
- **Publish directory:** `public`

2. Пресс Развертывание Бутон!

Ну вот! Ваше приложение будет жить на вашем URL 21YunBox, как только сборка заканчивается.

Образец приложения для 'hexo' развернут на сайте [https://hexo.21yunbox.com/](https://hexo.21yunbox.com/).

Для получения более подробной информации, следуйте этому руководству по адресу [https://www.21yunbox.com/docs/'/deploy-hexo](https://www.21yunbox.com/docs/'/deploy-hexo).

## Bip

[Bip](https://bip.sh) is a commercial hosting service which provides zero downtime deployment, a global CDN, SSL, unlimited bandwidth and more for static websites. Plans are available on a pay as you go, per domain basis.

Getting started is quick and easy, as Bip provides out the box support for Hexo. This guide assumes you already have [a Bip domain and Bip CLI installed](https://bip.sh/getstarted).

1: Initialise your project directory

```bash
$ bip init
```

Follow the prompts, where you'll be asked which domain you'd like to deploy to. Bip will detect that you're using Hexo, and set project settings like the source file directory automatically.

2: Deploy your website

```bash
$ hexo generate —deploy && bip deploy
```

After a few moments, your website will be deployed.

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

Меры предосторожности, связанные с конкретным развертыванием, можно найти в [нашей документации] (https://github.com/NaturalSelectionLabs/hexo-deployer-rss3/tree/develop/docs/zh_CN/start.md).

## Другие способы

Все созданные файлы сохраняются в папке `public`. Вы можете скопировать их куда угодно.

[hexo-deployer-git]: https://github.com/hexojs/hexo-deployer-git
[hexo-deployer-heroku]: https://github.com/hexojs/hexo-deployer-heroku
[hexo-deployer-rsync]: https://github.com/hexojs/hexo-deployer-rsync
[hexo-deployer-openshift]: https://github.com/hexojs/hexo-deployer-openshift
[hexo-deployer-ftpsync]: https://github.com/hexojs/hexo-deployer-ftpsync
[hexo-deployer-rss3]: https://github.com/NaturalSelectionLabs/hexo-deployer-rss3
