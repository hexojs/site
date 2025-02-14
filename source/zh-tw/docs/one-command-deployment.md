---
title: One-Command Deployment
---

Hexo provides a fast and easy deployment strategy. You only need one single command to deploy your site to your server.

```bash
$ hexo deploy
```

Install the necessary plugin(s) that is compatible with the deployment method provided by your server/repository.

Deployment is usually configured through **\_config.yml**. A valid configuration must have the `type` field. For example:

```yaml
deploy:
  type: git
```

You can use multiple deployers. Hexo will execute each deployer in order.

```yaml
deploy:
  - type: git
    repo:
  - type: heroku
    repo:
```

Refer to the [Plugins](https://hexo.io/plugins/) list for more deployment plugins.

## Git

1. 安裝 [hexo-deployer-git][]。

```bash
$ npm install hexo-deployer-git --save
```

2. Edit **\_config.yml** (with example values shown below as comments):

```yaml
deploy:
  type: git
  repo: <repository url> # https://bitbucket.org/JohnSmith/johnsmith.bitbucket.io
  branch: [branch]
  message: [message]
```

| 選項        | 描述                                               | Default                                                                         |
| --------- | ------------------------------------------------ | ------------------------------------------------------------------------------- |
| `repo`    | URL of the target repository                     |                                                                                 |
| `branch`  | 分支名稱。                                            | `gh-pages` (GitHub)<br>`coding-pages` (Coding.net)<br>`master` (其他) |
| `message` | Customize commit message.                        | `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`           |
| `token`   | 選填的 token 值用來儲存庫存取身份認證。 以 `$` 作為前綴從環境變數中讀取 token |                                                                                 |

3. 上傳你的網站。 執行 `hexo clean && hexo deploy`。

- 你將會被提示提供目標儲存庫的使用者名稱及密碼，除非你用 token 或是 ssh 金鑰進行身份驗證。
- hexo-deployer-git 不會儲存你的使用者名稱及密碼。 使用 [git-credential-cache](https://git-scm.com/docs/git-credential-cache) 來暫時儲存它們。

4. 在 Github / BitBucket / Gitlab 前往你的儲存庫設定，並將你的主要分支從 `master` 設為 `gh-pages`（或者任何你在 \_config.yml 中設定的名字)。 The deployed site should be live on the link shown on the "Pages" setting.

## Heroku

安裝 [hexo-deployer-heroku][]。

```bash
$ npm install hexo-deployer-heroku --save
```

修改設定。

```yaml
deploy:
  type: heroku
  repo: <repository url>
  message: [message]
```

| 選項                   | 描述                                                                                 |
| -------------------- | ---------------------------------------------------------------------------------- |
| `repo`, `repository` | Heroku 儲存庫網址                                                                       |
| `message`            | 自訂提交訊息 (預設是 `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`) |

## Netlify

[Netlify](https://www.netlify.com/) provides continuous deployment (Git-triggered builds), an intelligent global CDN, full DNS (including custom domains), automated HTTPS, asset acceleration, and a lot more. It is a unified platform that automates your code to create high-performance, easily maintainable sites and web apps.

There are two different ways to deploy your sites on Netlify. The most common way is to use the web UI. Go to the [create a new site page](https://app.netlify.com/start), select your project repo from GitHub, GitLab, or Bitbucket, and follow the prompts.

Alternatively, you can use Netlify's [Node based CLI](https://www.netlify.com/docs/cli/) tool to manage and deploy sites on Netlify without leaving your terminal.

You can also add a [Deploy to Netlify Button](https://www.netlify.com/docs/deploy-button/) in your README.file to allow others to create a copy of your repository and be deployed to Netlify via one click.

## Rsync

安裝 [hexo-deployer-rsync][]。

```bash
$ npm install hexo-deployer-rsync --save
```

修改設定。

```yaml
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

| 選項              | 描述                       | Default |
| --------------- | ------------------------ | ------- |
| `host`          | 遠端主機的位址                  |         |
| `user`          | 使用者名稱                    |         |
| `root`          | 遠端主機的根目錄                 |         |
| `port`          | Port                     | 22      |
| `delete`        | 刪除遠端主機上的舊檔案              | true    |
| `verbose`       | Display verbose messages | true    |
| `ignore_errors` | 忽略錯誤                     | false   |

## OpenShift

{% note warn %}
`hexo-deployer-openshift` 在 2022 時已被棄用。
{% endnote %}

安裝 [hexo-deployer-openshift][]。

```bash
$ npm install hexo-deployer-openshift --save
```

修改設定。

```yaml
deploy:
  type: openshift
  repo: <repository url>
  message: [message]
```

| 選項        | 描述                                                                                 |
| --------- | ---------------------------------------------------------------------------------- |
| `repo`    | OpenShift 儲存庫網址                                                                    |
| `message` | 自訂提交訊息 (預設是 `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`) |

## FTPSync

安裝 [hexo-deployer-ftpsync][]。

```bash
$ npm install hexo-deployer-ftpsync --save
```

修改設定。

```yaml
deploy:
  type: ftpsync
  host: <host>
  user: <user>
  pass: <password>
  remote: [remote]
  port: [port]
  clear: [true|false]
  verbose: [true|false]
```

| 選項        | 描述                       | Default |
| --------- | ------------------------ | ------- |
| `host`    | 遠端主機位址                   |         |
| `user`    | 使用者名稱                    |         |
| `pass`    | 密碼                       |         |
| `remote`  | 遠端主機的根目錄                 | `/`     |
| `port`    | Port                     | 21      |
| `clear`   | 在上傳之前，移除遠端目錄中所有檔案及目錄     | false   |
| `verbose` | Display verbose messages | false   |

## SFTP

Install [hexo-deployer-sftp][]. Deploys the site via SFTP, allowing for passwordless connections using ssh-agent.

```bash
$ npm install hexo-deployer-sftp --save
```

預設值

```yaml
deploy:
  type: sftp
  host: <host>
  user: <user>
  pass: <password>
  remotePath: [remote path]
  port: [port]
  privateKey: [path/to/privateKey]
  passphrase: [passphrase]
  agent: [path/to/agent/socket]
```

| Option        | 描述                                              | Default          |
| ------------- | ----------------------------------------------- | ---------------- |
| `host`        | Address of remote host                          |                  |
| `port`        | Port                                            | 22               |
| `user`        | Username                                        |                  |
| `pass`        | Password                                        |                  |
| `privateKey`  | Path to a ssh private key                       |                  |
| `passphrase`  | Optional passphrase for the private key         |                  |
| `agent`       | Path to the ssh-agent socket                    | `$SSH_AUTH_SOCK` |
| `remotePath`  | Root directory of remote host                   | `/`              |
| `forceUpload` | Override existing files                         | false            |
| `concurrency` | Max number of SFTP tasks processed concurrently | 100              |

## Vercel

[Vercel](https://vercel.com) 是一個雲端平台讓開發者可以架設 Jamstack 網站以及網路服務，且可以快速佈署、自動調整大小 (auto scaling)，且不須監督、無須設定。 他們提供全球邊緣網路、SSL 加密、資產壓縮、快取無效化等服務。

第一步：新增一個建構腳本至到你的 `package.json` 檔案：

```json
{
  "scripts": {
    "build": "hexo generate"
  }
}
```

第二步：佈署你的 Hexo 網站至 Vercel

為了使用 [Vercel for Git Integration](https://vercel.com/docs/git-integrations) 佈署你的 Hexo 應用程式，請確認它已推送到 Git 儲存庫中。

使用 [Import Flow](https://vercel.com/import/git) 輸入專案到 Vercel 中。 在輸入期間，你可以找到所有有關的選項已預先為你進行設定；然而，你可以選擇更改任何選項，你可以在[這裡](https://vercel.com/docs/build-step#build-&-development-settings)找到選項清單。

當你的專案完成輸入之後，所有往後分支中的推送皆會產生[預覽佈署](https://vercel.com/docs/platform/deployments#preview)，在[生產環境分支](https://vercel.com/docs/git-integrations#production-branch)所有的更動，都會呈現結果在[生產環境佈署](https://vercel.com/docs/platform/deployments#production)。

Follow the prompts, where you'll be asked which domain you'd like to deploy to. Bip will detect that you're using Hexo, and set project settings like the source file directory automatically.

[![Deploy Vercel](https://vercel.com/button)](https://vercel.com/new/hexo)

## Bip

[Bip](https://bip.sh) 是一個商業架設服務並提供不斷線佈署，專為靜態網頁提供全球 CDN、SSL、無限頻寬等服務。 提供實支實付 (pay as you go) 的方案，以一個網域為單位。

Getting started is quick and easy, as Bip provides out the box support for Hexo. This guide assumes you already have [a Bip domain and Bip CLI installed](https://bip.sh/getstarted). This guide assumes you already have [a Bip domain and Bip CLI installed](https://bip.sh/getstarted).

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

{% note warn %}
`hexo-deployer-rss3` has been deprecated in 2023.
{% endnote %}

[RSS3](https://rss3.io) 是一個為 Web 3.0 時代的內容和社交網路設計的開放協議。

1. 安裝 [hexo-deployer-rss3][]

2. 修改配置。

```yaml
deploy: # The root configuration block for all deployers
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

| 參數                | Description     |
| ----------------- | --------------- |
| `endpoint`        | 一個 RSS3 Hub 的鏈接 |
| `privateKey`      | 您的私鑰， 64 字節     |
| `ipfs/deploy`     | 是否部署到 IPFS 上    |
| `ipfs/gateway`    | IPFS API 網關     |
| `ipfs/api/key`    | IPFS 網關相關的驗證內容  |
| `ipfs/api/secret` | IPFS 網關相關的驗證內容  |

3. 生成靜態文件

4. 部署

關於具體部署相關的註意事項，您可以參閱 [我們的文檔](https://github.com/NaturalSelectionLabs/hexo-deployer-rss3/tree/develop/docs/zh_TW/start.md) 。

## Edgio (formerly Layer0)

[Edgio (formerly Layer0)](https://docs.edg.io) is an Internet-scale platform that makes it easy for teams to build, release, protect, and accelerate their web apps and APIs.

1. In your hexo project directory, install the Edgio CLI:

```bash
npm i -g @edgio/cli
```

2. Install Hexo connector by Edgio:

```bash
edgio init --connector=@edgio/hexo
```

3. 預設

```bash
edgio deploy
```

或者，你可以點擊下方的佈署按鈕來建立一個新專案：

[![Deploy To Edgio](https://docs.edg.io/button.svg)](https://app.layer0.co/deploy?repo=https%3A%2F%2Fgithub.com%2Fedgio-docs%2Fedgio-hexo-example)

## 其他方法

All generated files are saved in the `public` folder. You can copy them to wherever you like.

[hexo-deployer-git]: https://github.com/hexojs/hexo-deployer-git
[hexo-deployer-heroku]: https://github.com/hexojs/hexo-deployer-heroku
[hexo-deployer-rsync]: https://github.com/hexojs/hexo-deployer-rsync
[hexo-deployer-openshift]: https://github.com/hexojs/hexo-deployer-openshift
[hexo-deployer-ftpsync]: https://github.com/hexojs/hexo-deployer-ftpsync
[hexo-deployer-sftp]: https://github.com/lucascaro/hexo-deployer-sftp
[hexo-deployer-rss3]: https://github.com/NaturalSelectionLabs/hexo-deployer-rss3
