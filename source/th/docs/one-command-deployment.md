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

You can use multiple deployers. คุณยังเลื่อก deployer ได้หลายตัว hexo จะ execute deployer ทุกตัวตามลำดับ

```yaml
deploy:
  - type: git
    repo:
  - type: heroku
    repo:
```

Refer to the [Plugins](https://hexo.io/plugins/) list for more deployment plugins.

## Git

1. Install [hexo-deployer-git][].

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

| Option    | Description                                                                                                 | Default                                                                             |
| --------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `repo`    | URL of the target repository                                                                                |                                                                                     |
| `branch`  | Branch name.                                                                                                | `gh-pages` (GitHub)<br>`coding-pages` (Coding.net)<br>`master` (others) |
| `message` | Customize commit message.                                                                                   | `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`               |
| `token`   | Optional token value to authenticate with the repo. Prefix with `$` to read token from environment variable |                                                                                     |

3. Deploy your site `hexo clean && hexo deploy`.

- You will be prompted with username and password of the target repository, unless you authenticate with a token or ssh key.
- hexo-deployer-git does not store your username and password. Use [git-credential-cache](https://git-scm.com/docs/git-credential-cache) to store them temporarily.

4. Navigate to your repository settings and change the "Pages" branch to `gh-pages` (or the branch specified in your config). The deployed site should be live on the link shown on the "Pages" setting.

## Heroku

ติดตั้ง [hexo-deployer-heroku][].

```bash
$ npm install hexo-deployer-heroku --save
```

แก้ไขการตั้งค่า

```yaml
deploy:
  type: heroku
  repo: <repository url>
  message: [message]
```

| Option               | Description                                                                                                 |
| -------------------- | ----------------------------------------------------------------------------------------------------------- |
| `repo`, `repository` | Heroku repository URL                                                                                       |
| `message`            | Customize commit message (Default to `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`) |

## Netlify

[Netlify](https://www.netlify.com/) สนับสนุน deployment ต่อเนื่องกัน (ซึ้งสร้างด้วย git) สนับสนุน CDN แบบทั่วโลก DNS ทุกอย่าง（รวม domain ท่ีตั้งค่าด้วยตนด้วย）HTTPS ท่ีควบคุมโดยขบวนการอัตโนมัติ การเพิ่มความเร็วของวัตถุดิบ และสิ่งอื่นๆอีกมากมาย Netlify เป็นแพลตฟอร์มซึ่งรวมทุกอย่างเป็นหนึ่งเดียว ทำให้การสร้างไซต์หรือแอปของแว็บท่ีมีแระสิทธิภาพและรักษาได้ง่ายนั้นเป็นขบวนการอัตโนมัติ It is a unified platform that automates your code to create high-performance, easily maintainable sites and web apps.

There are two different ways to deploy your sites on Netlify. The most common way is to use the web UI. มีทั้งหมดสองวิธีในเรื่อง deploy เว็บไซต์ของตน วิธีทั่วไปท่ีสุดคือการใช้ web UI คุณสามารถไปท่ี [create a new site page](https://app.netlify.com/start) และเลือก repo ของ project คุณจาก Github Gitlab หรือ Bitbucket และทำตามวิธีการใช้

วิธีท่ีสองคือ การใช้เครื่องมือ [Node based CLI](https://www.netlify.com/docs/cli/) ของ Netlify เพื่อบริหารและ deploy ไซต์บน Netlify โดยไม่ต้องผ่าน terminal

คุณสามารถเพิ่ม [Deploy to Netlify Button](https://www.netlify.com/docs/deploy-button/) ไปถึงไฟล์ README ของคุณ ดังนั้นจะอนุญาตให้คนอื่น copy respository ของคุณและ deploy ไปถึง Netlify ด้วยคลิกเดียว

## Rsync

ติดตั้ง [hexo-deployer-rsync][].

```bash
$ npm install hexo-deployer-rsync --save
```

แก้ไขการตั้งค่า

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

| Option          | Description                     | Default |
| --------------- | ------------------------------- | ------- |
| `host`          | Address of remote host          |         |
| `user`          | Username                        |         |
| `root`          | Root directory of remote host   |         |
| `port`          | Port                            | 22      |
| `delete`        | Delete old files on remote host | true    |
| `verbose`       | Display verbose messages        | true    |
| `ignore_errors` | Ignore errors                   | false   |

## OpenShift

{% note warn %}
`hexo-deployer-openshift` has been deprecated in 2022.
{% endnote %}

ติดตั้ง [hexo-deployer-openshift][].

```bash
$ npm install hexo-deployer-openshift --save
```

แก้ไขการตั้งค่า

```yaml
deploy:
  type: openshift
  repo: <repository url>
  message: [message]
```

| Option    | Description                                                                                                 |
| --------- | ----------------------------------------------------------------------------------------------------------- |
| `repo`    | OpenShift repository URL                                                                                    |
| `message` | Customize commit message (Default to `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`) |

## FTPSync

ติดตั้ง [hexo-deployer-ftpsync][].

```bash
$ npm install hexo-deployer-ftpsync --save
```

แก้ไขการตั้งค่า

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

| Option    | Description                                                              | Default |
| --------- | ------------------------------------------------------------------------ | ------- |
| `host`    | Address of remote host                                                   |         |
| `user`    | Username                                                                 |         |
| `pass`    | Password                                                                 |         |
| `remote`  | Root directory of remote host                                            | `/`     |
| `port`    | Port                                                                     | 21      |
| `clear`   | Remove all files and directories from the remote directory before upload | false   |
| `verbose` | Display verbose messages                                                 | false   |

## SFTP

ติดตั้ง [hexo-deployer-sftp]. deploy ไซต์ได้โดย SFTP และใช้ password ได้ด้วย ssh-agent

```bash
$ npm install hexo-deployer-sftp --save
```

แก้ไขการตั้งค่า

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

| Option        | Description                                     | Default          |
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

{% note warn %}
`hexo-deployer-rss3` has been deprecated in 2023.
{% endnote %}

[RSS3](https://rss3.io) เป็นโปรโตคอลแบบเปิดที่ออกแบบมาสำหรับเนื้อหาและเครือข่ายโซเชียลในยุค Web 3.0

1. ติดตั้ง [hexo-deployer-rss3][]

2. แก้ไขการกำหนดค่า

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

| พารามิเตอร์       | Description                                   |
| ----------------- | --------------------------------------------- |
| `endpoint`        | ลิงก์ไปยัง RSS3 Hub                           |
| `privateKey`      | คีย์ส่วนตัวของคุณ 64 ไบต์                     |
| `ipfs/deploy`     | ว่าจะปรับใช้กับ IPFS หรือไม่                  |
| `ipfs/gateway`    | IPFS API เกตเวย์                              |
| `ipfs/api/key`    | เนื้อหาการตรวจสอบที่เกี่ยวข้องกับเกตเวย์ IPFS |
| `ipfs/api/secret` | การตรวจสอบเนื้อหาที่เกี่ยวข้องกับเกตเวย์ IPFS |

3. สร้างไฟล์แบบคงที่

4. deploy

สำหรับข้อควรระวังที่เกี่ยวข้องกับการทำให้ใช้งานได้โดยเฉพาะ โปรดดู[เอกสารประกอบของเรา](https://github.com/NaturalSelectionLabs/hexo-deployer-rss3/tree/develop/docs/zh_CN/start.md)

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

3. Deployment

```bash
การปรับใช้
```

Alternatively, you can click the deploy button below to create a new project:

[![Deploy To Edgio](https://docs.edg.io/button.svg)](https://app.layer0.co/deploy?repo=https%3A%2F%2Fgithub.com%2Fedgio-docs%2Fedgio-hexo-example)

## Other Methods

All generated files are saved in the `public` folder. You can copy them to wherever you like.

[hexo-deployer-git]: https://github.com/hexojs/hexo-deployer-git
[hexo-deployer-heroku]: https://github.com/hexojs/hexo-deployer-heroku
[hexo-deployer-rsync]: https://github.com/hexojs/hexo-deployer-rsync
[hexo-deployer-openshift]: https://github.com/hexojs/hexo-deployer-openshift
[hexo-deployer-ftpsync]: https://github.com/hexojs/hexo-deployer-ftpsync
[hexo-deployer-rss3]: https://github.com/NaturalSelectionLabs/hexo-deployer-rss3
