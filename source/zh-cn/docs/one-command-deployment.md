---
title: 一键部署
---

Hexo 提供快速、简便的部署策略。 您只需一条命令即可将网站部署到服务器上。

```bash
$ hexo deploy
```

安装与服务器/存储库提供的部署方法兼容的必要插件。

部署通常通过**\_config.yml**进行配置。 有效配置必须有 `type` 字段。 例如：

```yaml
deploy:
  type: git
```

您可同时使用多个 deployer。 Hexo 会依照顺序执行每个 deployer。

```yaml
deploy:
  - type: git
    repo:
  - type: heroku
    repo:
```

关于更多的部署插件，请参考 [插件](https://hexo.io/plugins/) 列表。

## Git

1. 安装 [hexo-deployer-git][]。

```bash
$ npm install hexo-deployer-git --save
```

2. 编辑 **\_config.yml** （示例值如下所示）：

```yaml
deploy:
  type: git
  repo: <repository url> # https://bitbucket.org/JohnSmith/johnsmith.bitbucket.io
  branch: [branch]
  message: [message]
```

| 选项        | 描述                                       | 默认                                                                                  |
| --------- | ---------------------------------------- | ----------------------------------------------------------------------------------- |
| `repo`    | 目标存储库的 URL                               |                                                                                     |
| `branch`  | 分支名称                                     | `gh-pages` (GitHub)<br>`coding-pages` (Coding.net)<br>`master` (others) |
| `message` | 自定义提交信息                                  | `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`               |
| `token`   | 可选的令牌值，用于认证 repo。 用 `$` 作为前缀从而从环境变量中读取令牌 |                                                                                     |

3. 此外，如果您的 Github Pages 需要使用 CNAME 文件**自定义域名**，请将 CNAME 文件置于 `source` 目录下，只有这样 `hexo deploy` 才能将 CNAME 文件一并推送至部署分支。

- 除非你使用令牌或 SSH 密钥认证，否则你会被提示提供目标仓库的用户名和密码。
- hexo-deployer-git 并不会存储你的用户名和密码。 请使用 [git-credential-cache](https://git-scm.com/docs/git-credential-cache) 来临时存储它们。

4. 登入 Github/BitBucket/Gitlab，请在库设置（Repository Settings）中将默认分支设置为`_config.yml`配置中的分支名称。 稍等片刻，您的站点就会显示在您的Github Pages中。

## Heroku

安装 [hexo-deployer-heroku][]。

```bash
$ npm install hexo-deployer-heroku --save
```

修改配置。

```yaml
deploy:
  type: heroku
  repo: <repository url>
  message: [message]
```

| 选项                   | 描述                                                                                 |
| -------------------- | ---------------------------------------------------------------------------------- |
| `repo`, `repository` | Heroku 库（Repository）地址                                                             |
| `message`            | 自定提交信息 (默认为 `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`) |

## Netlify

[Netlify](https://www.netlify.com/) 提供持续部署（Git 触发构建）、智能全球 CDN、完整 DNS（包括自定义域）、自动 HTTPS、资产加速等功能。 它是一个统一的平台，可自动执行代码，创建高性能、易于维护的网站和网络应用程序。

在 Netlify 上部署站点，有两种不同的方式。 首先，也是最通用的方式，就是使用Netlify提供的网页端用户界面。 前往[新建一个网站页面](https://app.netlify.com/start)，选择需要关联的 Github/BitBucket/Gitlab 库，然后遵循网站提示。

另一种方式是使用Netlify提供的命令行客户端工具 [Node based CLI](https://www.netlify.com/docs/cli/) 管理和部署您的站点。

此外，您还可以在项目的README中增加一个 [部署至Netlify按钮](https://www.netlify.com/docs/deploy-button/)，这样其他用户在fork或clone了您的项目之后可以方便快捷地一键部署。

## Rsync

安装 [hexo-deployer-rsync][]。

```bash
$ npm install hexo-deployer-rsync --save
```

修改配置。

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

| 选项              | 描述          | 默认值   |
| --------------- | ----------- | ----- |
| `host`          | 远程主机的地址     |       |
| `user`          | 使用者名称       |       |
| `root`          | 远程主机的根目录    |       |
| `port`          | 端口          | 22    |
| `delete`        | 删除远程主机上的旧文件 | true  |
| `verbose`       | 显示调试信息      | true  |
| `ignore_errors` | 忽略错误        | false |

## OpenShift

{% note warn %}
`hexo-deployer-openshift` 已于2022年被弃用。
{% endnote %}

安装 [hexo-deployer-openshift][]。

```bash
$ npm install hexo-deployer-openshift --save
```

修改配置。

```yaml
deploy:
  type: openshift
  repo: <repository url>
  message: [message]
```

| 选项        | 描述                                                                                |
| --------- | --------------------------------------------------------------------------------- |
| `repo`    | OpenShift 库（Repository）地址                                                         |
| `message` | 自定提交信息（默认为 `Site updated： {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`) |

## FTPSync

安装 [hexo-deployer-ftpsync][]。

```bash
$ npm install hexo-deployer-ftpsync --save
```

修改配置。

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

| 选项        | 描述                      | 默认值   |
| --------- | ----------------------- | ----- |
| `host`    | 远程主机的地址                 |       |
| `user`    | 使用者名称                   |       |
| `pass`    | 密码                      |       |
| `remote`  | 远程主机的根目录                | `/`   |
| `port`    | 端口                      | 21    |
| `clear`   | 在上传前移除远程主机的根目录下所有的文件和目录 | false |
| `verbose` | 显示调试信息                  | false |

## SFTP

安装 [hexo-deployer-sftp][]。 通过 SFTP 部署站点，允许使用 ssh-agent 进行无密码连接。

```bash
$ npm install hexo-deployer-sftp --save
```

修改配置。

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

| 选项            | 描述                 | 默认值              |
| ------------- | ------------------ | ---------------- |
| `host`        | 远程主机的地址            |                  |
| `port`        | 端口                 | 22               |
| `user`        | 使用者名称              |                  |
| `pass`        | 密码                 |                  |
| `privateKey`  | SSH 私钥的目录地址        |                  |
| `passphrase`  | 私钥的可选密码            |                  |
| `agent`       | ssh套接字的目录地址        | `$SSH_AUTH_SOCK` |
| `remotePath`  | 远程主机的根目录           | `/`              |
| `forceUpload` | 覆盖现有的文件            | false            |
| `concurrency` | 同时处理的 SFTP 任务的最大数量 | 100              |

## Vercel

[Vercel](https://vercel.com) 是一个云平台，使开发人员能够托管 Jamstack 网站和网络服务，这些网站和服务可即时部署，自动扩展，无需监督，零配置。 他们提供全球边缘网络、SSL 加密、资源压缩、缓存失效等服务。

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

使用 [导入流](https://vercel.com/import/git) 将该项目导入 Vercel。 在导入过程中，你会发现所有相关的选项都是预先配置好的；但是，你可以选择改变其中的任何选项，这些选项的清单可以在 [这里](https://vercel.com/docs/build-step#build-&-development-settings) 找到。

在你的项目被导入后，所有后续推送到分支的内容都会产生 [预览部署](https://vercel.com/docs/platform/deployments#preview) ，而对 [生产分支](https://vercel.com/docs/git-integrations#production-branch)（通常是“主分支”）所做的所有更改都会导致 [生产部署](https://vercel.com/docs/platform/deployments#production)。

或者，您可以单击下面的部署按钮创建新项目：

[![部署Vercel](https://vercel.com/button)](https://vercel.com/new/hexo)

## Bip

[Bip](https://bip.sh) 是一项商业托管服务，为静态网站提供零停机部署、全球 CDN、SSL、无限带宽等。 计划以以每个域为基础，随用随付的方式提供。

由于 Bip 为 Hexo 提供了开箱即用的支持，因此开始使用是很容易的。 本指南假定你已经有 [一个Bip域和已经安装Bip CLI](https://bip.sh/getstarted)。

1: 初始化你的项目目录

```bash
$ bip init
```

按照提示，你会被提问到你想部署到哪个域。 Bip 会检测到你正在使用 Hexo ，并自动设置项目设置，如源文件目录。

2: 部署你的网站

```bash
$ hexo generate —deploy && bip deploy
```

几分钟后，你的网站将被部署。

## RSS3

{% note warn %}
`hexo-deployer-rss3` 已于2023年被弃用。
{% endnote %}

[RSS3](https://rss3.io) 是一个为 Web 3.0 时代的内容和社交网络设计的开放协议。

1. 安装 [hexo-deployer-rss3][]

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

| 参数                | 描述              |
| ----------------- | --------------- |
| `endpoint`        | 一个 RSS3 Hub 的链接 |
| `privateKey`      | 您的私钥， 64 字节     |
| `ipfs/deploy`     | 是否部署到 IPFS 上    |
| `ipfs/gateway`    | IPFS API 网关     |
| `ipfs/api/key`    | IPFS 网关相关的验证内容  |
| `ipfs/api/secret` | IPFS 网关相关的验证内容  |

3. 生成静态文件

4. 部署

关于具体部署相关的注意事项，您可以参阅 [我们的文档](https://github.com/NaturalSelectionLabs/hexo-deployer-rss3/tree/develop/docs/zh_CN/start.md) 。

## Edgio (原 Layer0)

[Edgio (原 Layer0)](https://docs.edg.io) 是一个互联网规模的平台，使团队可以轻松构建、发布、保护和加速其 Web 应用程序和 API。

1. 在您的 Hexo 项目目录中，安装 Edgio CLI：

```bash
npm i -g @edgio/cli
```

2. 通过 Edgio 安装 Hexo 连接器：

```bash
edgio init --connector=@edgio/hexo
```

3. 部署

```bash
edgio deploy
```

此外，你也可以点击下面的部署按钮来创建一个新的项目：

[![部署到 Edgio](https://docs.edg.io/button.svg)](https://app.layer0.co/deploy?repo=https%3A%2F%2Fgithub.com%2Fedgio-docs%2Fedgio-hexo-example)

## 其他方法

Hexo 生成的所有文件都放在 `public` 文件夹中。 您可以将它们复制到您喜欢的地方。

[hexo-deployer-git]: https://github.com/hexojs/hexo-deployer-git
[hexo-deployer-heroku]: https://github.com/hexojs/hexo-deployer-heroku
[hexo-deployer-rsync]: https://github.com/hexojs/hexo-deployer-rsync
[hexo-deployer-openshift]: https://github.com/hexojs/hexo-deployer-openshift
[hexo-deployer-ftpsync]: https://github.com/hexojs/hexo-deployer-ftpsync
[hexo-deployer-sftp]: https://github.com/lucascaro/hexo-deployer-sftp
[hexo-deployer-rss3]: https://github.com/NaturalSelectionLabs/hexo-deployer-rss3
