---
title: 部署
---

{% youtube B0yVJ46CTR8 %}

Hexo 提供了快速方便的一键部署功能，让您只需一条命令就能将网站部署到服务器上。

``` bash
$ hexo deploy
```

在开始之前，您必须先在 `_config.yml` 中修改参数，一个正确的部署配置中至少要有 `type` 参数，例如：

``` yaml
deploy:
  type: git
```

您可同时使用多个 deployer，Hexo 会依照顺序执行每个 deployer。

``` yaml
deploy:
- type: git
  repo:
- type: heroku
  repo:
```

关于更多的部署插件，请参考 [插件](https://hexo.io/plugins/) 列表。

{% note warn 缩进 %}
YAML依靠缩进来确定元素间的从属关系。因此，请确保每个deployer的缩进长度相同，并且使用空格缩进。
{% endnote %}

## Git

1. 安装 [hexo-deployer-git]。

``` bash
$ npm install hexo-deployer-git --save
```

2. 修改配置。

``` yaml
deploy:
  type: git
  repo: <repository url> #https://bitbucket.org/JohnSmith/johnsmith.bitbucket.io
  branch: [branch]
  message: [message]
```

参数 | 描述 | 默认
--- | --- | ---
`repo` | 库（Repository）地址 |
`branch` | 分支名称 | `gh-pages` (GitHub)<br>`coding-pages` (Coding.net)<br>`master` (others)
`message` | 自定义提交信息 | `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`)
`token` | 可选的令牌值，用于认证 repo。用 `$` 作为前缀从而从环境变量中读取令牌

3. 生成站点文件并推送至远程库。执行 `hexo clean && hexo deploy`。

  - 除非你使用令牌或 SSH 密钥认证，否则你会被提示提供目标仓库的用户名和密码。
  - hexo-deployer-git 并不会存储你的用户名和密码. 请使用 [git-credential-cache](https://git-scm.com/docs/git-credential-cache) 来临时存储它们。

4. 登入 Github/BitBucket/Gitlab，请在库设置（Repository Settings）中将默认分支设置为`_config.yml`配置中的分支名称。稍等片刻，您的站点就会显示在您的Github Pages中。

### 这一切是如何发生的？

当执行 `hexo deploy` 时，Hexo 会将 `public` 目录中的文件和目录推送至 `_config.yml` 中指定的远端仓库和分支中，并且**完全覆盖**该分支下的已有内容。

{% note warn For 使用 Git 管理站点目录的用户 %}
由于 Hexo 的部署默认使用分支 `master`，所以如果你同时正在使用 Git 管理你的站点目录，你应当注意你的部署分支应当不同于写作分支。
一个好的实践是将站点目录和 Pages 分别存放在两个不同的 Git 仓库中，可以有效避免相互覆盖。
Hexo 在部署你的站点生成的文件时并不会更新你的站点目录。因此你应该手动提交并推送你的写作分支。
{% endnote %}

此外，如果您的 Github Pages 需要使用 CNAME 文件**自定义域名**，请将 CNAME 文件置于 `source` 目录下，只有这样 `hexo deploy` 才能将 CNAME 文件一并推送至部署分支。

## Heroku

安装 [hexo-deployer-heroku]。

``` bash
$ npm install hexo-deployer-heroku --save
```

修改配置。

``` yaml
deploy:
  type: heroku
  repo: <repository url>
  message: [message]
```

参数 | 描述
--- | ---
`repo` | Heroku 库（Repository）地址
`message` | 自定提交信息 (默认为 `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`)

## Netlify

[Netlify](https://www.netlify.com/) 是一个提供网络托管的综合平台。它集持续集成（CI）CDN 自定义域名 HTTPS 持续部署（CD）等诸多功能于一身。您可以通过以下两种方式将Hexo站点部署到Netlify。

首先，也是最通用的方式，就是使用Netlify提供的网页端用户界面。前往[新建一个网站页面](https://app.netlify.com/start)，选择需要关联的 Github/BitBucket/Gitlab 库，然后遵循网站提示。

另一种方式是使用Netlify提供的命令行客户端工具 [Node based CLI](https://www.netlify.com/docs/cli/) 管理和部署您的站点。

此外，您还可以在项目的README中增加一个 [部署至Netlify按钮](https://www.netlify.com/docs/deploy-button/)，这样其他用户在fork或clone了您的项目之后可以方便快捷地一键部署。

## Rsync

安装 [hexo-deployer-rsync]。

``` bash
$ npm install hexo-deployer-rsync --save
```

修改配置。

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

参数 | 描述 | 默认值
--- | --- | ---
`host` | 远程主机的地址 |
`user` | 使用者名称 |
`root` | 远程主机的根目录 |
`port` | 端口 | 22
`delete` | 删除远程主机上的旧文件 | true
`verbose` | 显示调试信息 | true
`ignore_errors` | 忽略错误 | false

{% note info rsync部署模块的工作方式 %}
需要注意的是，要求您提供的实际上是一个能通过SSH登陆远程主机的Linux用户。Hexo会自动处理关于rsync使用的一切操作。因此，您需要在远程主机上为您的Hexo站点建立一个用户，并允许其通过SSH登陆。不过，这里的`port`，的确是指rsync监听的端口，请确保防火墙打开了该端口。
{% endnote %}

## OpenShift

安装 [hexo-deployer-openshift]。

``` bash
$ npm install hexo-deployer-openshift --save
```

修改配置。

``` yaml
deploy:
  type: openshift
  repo: <repository url>
  message: [message]
```

参数 | 描述
--- | ---
`repo` | OpenShift 库（Repository）地址
`message` | 自定提交信息 (默认为 `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`)

## FTPSync

安装 [hexo-deployer-ftpsync]。

``` bash
$ npm install hexo-deployer-ftpsync --save
```

修改配置。

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

参数 | 描述 | 默认值
--- | --- | ---
`host` | 远程主机的地址 |
`user` | 使用者名称 |
`pass` | 密码 |
`remote` | 远程主机的根目录 | `/`
`port` | 端口 | 21
`ignore` | 忽略的文件或目录 |
`connections` | 使用的连接数 | 1
`verbose` | 显示调试信息 | false

{% note warn FTP部署可能出现的问题 %}
您可能需要预先通过其他方式将所有文件上传到远程主机中。否则初次使用ftpsync插件就可能出现报错。另外，由于FTP协议的特征，它每传送一个文件就需要一次握手，相对速度较慢。
{% endnote %}

## SFTP

安装 [hexo-deployer-sftp]。

``` bash
$ npm install hexo-deployer-sftp --save
```

修改配置。

``` yaml
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

参数 | 描述 | 默认值
--- | --- | ---
`host` | 远程主机的地址 |
`user` | 使用者名称 |
`pass` | 密码 |
`remotePath` | 远程主机的根目录 | `/`
`port` | 端口 | 22
`privateKey` | ssh私钥的目录地址 |
`passphrase` | （可省略）ssh私钥的密码短语 |
`agent` | ssh套接字的目录地址 | `$SSH_AUTH_SOCK`

## Vercel

[Vercel](https://vercel.com) 是一个云平台，使开发人员能够托管 Jamstack 网站和网络服务，这些网站和服务可即时部署，自动扩展，无需监督，零配置。他们提供全球边缘网络、SSL 加密、资源压缩、缓存失效等服务。

步骤 1: 在你的 `package.json` 文件中添加一个构建脚本：

```json
{
  "scripts": {
    "build": "hexo generate"
  }
}
```

步骤 2: 将你的 Hexo 网站部署到 Vercel 上

要通过 [Git整合Vercel](https://vercel.com/docs/git-integrations) 部署 Hexo 应用程序，请确保它已被推送到 Git 仓库。

使用 [导入流](https://vercel.com/import/git) 将该项目导入 Vercel。在导入过程中，你会发现所有相关的选项都是预先配置好的；但是，你可以选择改变其中的任何选项，这些选项的清单可以在 [这里](https://vercel.com/docs/build-step#build-&-development-settings) 找到。

在你的项目被导入后，所有后续推送到分支的内容都会产生 [预览部署](https://vercel.com/docs/platform/deployments#preview) ，而对 [生产分支](https://vercel.com/docs/git-integrations#production-branch)（通常是“主分支”）所做的所有更改都会导致 [生产部署](https://vercel.com/docs/platform/deployments#production)。

此外，你也可以点击下面的部署按钮来创建一个新的项目：

[![部署Vercel](https://vercel.com/button)](https://vercel.com/new/hexo)

## Bip

[Bip](https://bip.sh) 是一项商业托管服务，为静态网站提供零停机部署、全球 CDN、SSL、无限带宽等。计划以以每个域为基础，随用随付的方式提供。

由于 Bip 为 Hexo 提供了开箱即用的支持，因此开始使用是很容易的。本指南假定你已经有 [一个Bip域和已经安装Bip CLI](https://bip.sh/getstarted)。

1: 初始化你的项目目录

```bash
$ bip init
```

按照提示，你会被提问到你想部署到哪个域。Bip 会检测到你正在使用 Hexo ，并自动设置项目设置，如源文件目录。

2: 部署你的网站

```bash
$ hexo generate —deploy && bip deploy
```

几分钟后，你的网站将被部署。

## RSS3

[RSS3](https://rss3.io) 是一个为 Web 3.0 时代的内容和社交网络设计的开放协议。

1. 安装 [hexo-deployer-rss3]

2. 修改配置。

  ``` yaml
  deploy: # 所有部署器的根配置块
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

|        参数        |          描述         |
| ----------------- | ---------------------- |
| `endpoint`        | 一个 RSS3 Hub 的链接    |
| `privateKey`      | 您的私钥， 64 字节      |
| `ipfs/deploy`     | 是否部署到 IPFS 上      |
| `ipfs/gateway`    | IPFS API 网关          |
| `ipfs/api/key`    | IPFS 网关相关的验证内容 |
| `ipfs/api/secret` | IPFS 网关相关的验证内容 |

3. 生成静态文件

4. 部署

关于具体部署相关的注意事项，您可以参阅 [我们的文档](https://github.com/NaturalSelectionLabs/hexo-deployer-rss3/tree/develop/docs/zh_CN/start.md) 。

## 其他方法

Hexo 生成的所有文件都放在 `public` 文件夹中，您可以将它们复制到您喜欢的地方。

[hexo-deployer-git]: https://github.com/hexojs/hexo-deployer-git
[hexo-deployer-heroku]: https://github.com/hexojs/hexo-deployer-heroku
[hexo-deployer-rsync]: https://github.com/hexojs/hexo-deployer-rsync
[hexo-deployer-openshift]: https://github.com/hexojs/hexo-deployer-openshift
[hexo-deployer-ftpsync]: https://github.com/hexojs/hexo-deployer-ftpsync
[hexo-deployer-sftp]: https://github.com/lucascaro/hexo-deployer-sftp
[hexo-deployer-rss3]: https://github.com/NaturalSelectionLabs/hexo-deployer-rss3
