---
title: 佈署
---

{% youtube B0yVJ46CTR8 %}

Hexo 提供了快速方便的一鍵佈署功能，讓您只需一個指令就能將網站佈署到伺服器上。

``` bash
$ hexo deploy
```

在開始之前，您必須先在 `_config.yml` 中修改設定，一個正確的部署設定中至少要有 `type` 欄位，例如：

``` yaml
deploy:
  type: git
```

您可同時使用多個 deployer，Hexo 會依照順序執行每個 deployer。

``` yaml
deploy:
- type: git
  repo:
- type: heroku
  repo:
```

Refer to the [Plugins](https://hexo.io/plugins/) list for more deployment plugins.

## Git

1. 安裝 [hexo-deployer-git]。

``` bash
$ npm install hexo-deployer-git --save
```

2. 修改_config.yml設定(下面的註解顯示了參數的範例)。

``` yaml
deploy:
  type: git
  repo: <repository url> #https://bitbucket.org/JohnSmith/johnsmith.bitbucket.io
  branch: [branch]
  message: [message]
```

選項 | 描述 | 默認
--- | --- | ---
`repo` | 儲存庫（Repository）網址 |
`branch` | 分支名稱。| `gh-pages` (GitHub)<br>`coding-pages` (Coding.net)<br>`master` (others)
`message` | 自定提交訊息 | `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`)
`token` | Optional token value to authenticate with the repo. Prefix with `$` to read token from environment variable

3. 上傳你的網站。執行 `hexo clean && hexo deploy`。

  - You will be prompted with username and password of the target repository, unless you authenticate with a token or ssh key.
  - hexo-deployer-git does not store your username and password. Use [git-credential-cache](https://git-scm.com/docs/git-credential-cache) to store them temporarily.

4. 在Github/BitBucket/Gitlab前往妳的repo設定，並將你的主要分支從`master`設為`gh-pages`(或著任何你在_config.yml裡設定的名子)。現在你的網站就是你的帳號首頁。

## Heroku

安裝 [hexo-deployer-heroku]。

``` bash
$ npm install hexo-deployer-heroku --save
```

修改設定。

``` yaml
deploy:
  type: heroku
  repo: <repository url>
  message: [message]
```

選項 | 描述
--- | ---
`repo` | Heroku 儲存庫（Repository）網址
`message` | 自定提交訊息 (預設是 `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`)

## Rsync

安裝 [hexo-deployer-rsync]。

``` bash
$ npm install hexo-deployer-rsync --save
```

修改設定。

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

選項 | 描述 | 預設值
--- | --- | ---
`host` | 遠端主機的位址 |
`user` | 使用者名稱 |
`root` | 遠端主機的根目錄 |
`port` | 連接埠 | 22
`delete` | 刪除遠端主機上的舊檔案 | true
`verbose` | 顯示除錯訊息 | true
`ignore_errors` | 忽略錯誤 | false

## OpenShift

安裝 [hexo-deployer-openshift]。

``` bash
$ npm install hexo-deployer-openshift --save
```

修改設定。

``` yaml
deploy:
  type: openshift
  repo: <repository url>
  message: [message]
```

選項 | 描述
--- | ---
`repo` | OpenShift 儲存庫（Repository）網址
`message` | 自定提交訊息 (預設是 `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`)

## FTPSync

安裝 [hexo-deployer-ftpsync]。

``` bash
$ npm install hexo-deployer-ftpsync --save
```

修改設定。

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

選項 | 描述 | 預設值
--- | --- | ---
`host` | 遠端主機位址 |
`user` | 使用者名稱 |
`pass` | 密碼 |
`remote` | 遠端主機的根目錄 | `/`
`port` | 連接埠 | 21
`ignore` | 忽略本機或遠端的檔案 |
`connections` | 連接數 | 1
`verbose` | 顯示除錯訊息 | false

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

## 21雲盒子

1. 在 [21云盒子](https://www.21yunbox.com) 中， 創建一个新的 `靜態網頁`，然後使用以下配置：

- **構建命令:** `yarn && hexo deploy`
- **發佈目錄:** `public`

2. 點擊 "部署" 按鈕！

樣例已經部署在 [HTTPs://hexo.21yunbox.com/](HTTps://hexo.21yunbox.com/).

請查看 [用 21雲盒子 部署一個 Hexo 樣例](HTTPs://www.21yunbox.com/docs/#/deploy-hexo).

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

[RSS3](https://rss3.io) 是一個為 Web 3.0 時代的內容和社交網路設計的開放協議。

1. 安裝 [hexo-deployer-rss3]

2. 修改配置。

  ``` yaml
  deploy: # 所有部署器的根配置塊
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

|        參數        |          描述         |
| ----------------- | ---------------------- |
| `endpoint`        | 一個 RSS3 Hub 的鏈接    |
| `privateKey`      | 您的私鑰， 64 字節      |
| `ipfs/deploy`     | 是否部署到 IPFS 上      |
| `ipfs/gateway`    | IPFS API 網關          |
| `ipfs/api/key`    | IPFS 網關相關的驗證內容 |
| `ipfs/api/secret` | IPFS 網關相關的驗證內容 |

3. 生成靜態文件

4. 部署

關於具體部署相關的註意事項，您可以參閱 [我們的文檔](https://github.com/NaturalSelectionLabs/hexo-deployer-rss3/tree/develop/docs/zh_TW/start.md) 。

## 其他方法

Hexo 產生的所有檔案都放在 `public` 資料夾，您可以將它們拷貝到您喜歡的地方。

[hexo-deployer-git]: https://github.com/hexojs/hexo-deployer-git
[hexo-deployer-heroku]: https://github.com/hexojs/hexo-deployer-heroku
[hexo-deployer-rsync]: https://github.com/hexojs/hexo-deployer-rsync
[hexo-deployer-openshift]: https://github.com/hexojs/hexo-deployer-openshift
[hexo-deployer-ftpsync]: https://github.com/hexojs/hexo-deployer-ftpsync
[hexo-deployer-rss3]: https://github.com/NaturalSelectionLabs/hexo-deployer-rss3
