---
title: One-Command Deployment
---

Hexo는 빠르고 쉬운 deployment전략을 제공합니다. 웹 사이트를 서버에 deploy하기 위해 하나의 명령어만 수행하면 됩니다.

```bash
$ hexo deploy
```

Install the necessary plugin(s) that is compatible with the deployment method provided by your server/repository.

Deployment is usually configured through **\_config.yml**. A valid configuration must have the `type` field. For example:

```yaml
deploy:
  type: git
```

여러 곳에 동시에 deploy할 수도 있습니다. Hexo는 순차적으로 deploy를 수행합니다.

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

[hexo-deployer-heroku][]을 설치합니다.

```bash
$ npm install hexo-deployer-heroku --save
```

옵션

```yaml
deploy:
  type: heroku
  repo: <repository url>
  message: [message]
```

| Option               | Description                                                                                          |
| -------------------- | ---------------------------------------------------------------------------------------------------- |
| `repo`, `repository` | Heroku 저장소 URL                                                                                       |
| `message`            | Commit message를 수정합니다. (기본값 - `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`) |

## Netlify

[Netlify](https://www.netlify.com/) provides continuous deployment (Git-triggered builds), an intelligent global CDN, full DNS (including custom domains), automated HTTPS, asset acceleration, and a lot more. It is a unified platform that automates your code to create high-performance, easily maintainable sites and web apps.

There are two different ways to deploy your sites on Netlify. The most common way is to use the web UI. Go to the [create a new site page](https://app.netlify.com/start), select your project repo from GitHub, GitLab, or Bitbucket, and follow the prompts.

Alternatively, you can use Netlify's [Node based CLI](https://www.netlify.com/docs/cli/) tool to manage and deploy sites on Netlify without leaving your terminal.

You can also add a [Deploy to Netlify Button](https://www.netlify.com/docs/deploy-button/) in your README.file to allow others to create a copy of your repository and be deployed to Netlify via one click.

## Rsync

[hexo-deployer-rsync][]를 설치합니다.

```bash
$ npm install hexo-deployer-rsync --save
```

설정을 수정합니다.

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

| Option          | Description            | Default |
| --------------- | ---------------------- | ------- |
| `host`          | 원격 호스트의 주소             |         |
| `user`          | 사용자명                   |         |
| `root`          | 원격 호스트의 루트 디렉토리        |         |
| `port`          | 포트                     | 22      |
| `delete`        | 원격 호스트의 오래된 파일을 삭제합니다. | true    |
| `verbose`       | Verbose 메시지를 표시합니다.    | true    |
| `ignore_errors` | 에러를 무시합니다.             | false   |

## OpenShift

{% note warn %}
`hexo-deployer-openshift` has been deprecated in 2022.
{% endnote %}

[hexo-deployer-openshift][]를 설치합니다.

```bash
$ npm install hexo-deployer-openshift --save
```

설정을 수정합니다.

```yaml
deploy:
  type: openshift
  repo: <repository url>
  message: [message]
```

| Option    | Description                                                                                          |
| --------- | ---------------------------------------------------------------------------------------------------- |
| `repo`    | OpenShift 저장소 URL                                                                                    |
| `message` | Commit message를 수정합니다. (기본값 - `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`) |

## FTPSync

[hexo-deployer-ftpsync][]를 설치합니다.

```bash
$ npm install hexo-deployer-ftpsync --save
```

설정을 수정합니다.

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
| `host`    | 원격 호스트의 주소                                                               |         |
| `user`    | 사용자명                                                                     |         |
| `pass`    | 비밀번호                                                                     |         |
| `remote`  | 원격 호스트의 루트 디렉토리                                                          | `/`     |
| `port`    | 포트                                                                       | 21      |
| `clear`   | Remove all files and directories from the remote directory before upload | false   |
| `verbose` | Verbose 메시지를 표시합니다.                                                      | false   |

## SFTP

Install [hexo-deployer-sftp][]. Deploys the site via SFTP, allowing for passwordless connections using ssh-agent.

```bash
$ npm install hexo-deployer-sftp --save
```

설정을 수정합니다.

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

[RSS3](https://rss3.io)는 Web 3.0 시대의 콘텐츠 및 소셜 네트워크를 위해 설계된 개방형 프로토콜입니다.

1. [hexo-deployer-rss3][] 설치

2. 구성을 수정합니다.

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

| 매개변수              | Description         |
| ----------------- | ------------------- |
| `endpoint`        | RSS3 Hub에 대한 링크     |
| `privateKey`      | 개인 키, 64바이트         |
| `ipfs/deploy`     | IPFS에 배포할지 여부       |
| `ipfs/gateway`    | IPFS API 게이트웨이      |
| `ipfs/api/key`    | IPFS 게이트웨이 관련 검증 내용 |
| `ipfs/api/secret` | IPFS 게이트웨이 관련 검증 내용 |

3. 정적 파일 생성

4. 배포

특정 배포와 관련된 주의 사항은 [당사 문서](https://github.com/NaturalSelectionLabs/hexo-deployer-rss3/blob/develop/README.md)를 참조하세요.

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
설명
```

Alternatively, you can click the deploy button below to create a new project:

[![Deploy To Edgio](https://docs.edg.io/button.svg)](https://app.layer0.co/deploy?repo=https%3A%2F%2Fgithub.com%2Fedgio-docs%2Fedgio-hexo-example)

## 다른 메소드들

생성되는 모든 파일들은 `public` 폴더에 저장됩니다. 이 파일들을 당신이 원하는 곳 아무데나 복사하여 사용할 수 있습니다.

[hexo-deployer-git]: https://github.com/hexojs/hexo-deployer-git
[hexo-deployer-heroku]: https://github.com/hexojs/hexo-deployer-heroku
[hexo-deployer-rsync]: https://github.com/hexojs/hexo-deployer-rsync
[hexo-deployer-openshift]: https://github.com/hexojs/hexo-deployer-openshift
[hexo-deployer-ftpsync]: https://github.com/hexojs/hexo-deployer-ftpsync
[hexo-deployer-sftp]: https://github.com/lucascaro/hexo-deployer-sftp
[hexo-deployer-rss3]: https://github.com/NaturalSelectionLabs/hexo-deployer-rss3
