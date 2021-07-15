---
title: Deployment
---
Hexo는 빠르고 쉬운 deployment전략을 제공합니다. 웹 사이트를 서버에 deploy하기 위해 하나의 명령어만 수행하면 됩니다.

``` bash
$ hexo deploy
```

처음 개발을 진행하기 전에, `_config.yml` 파일의 설정을 수정할 필요가 있습니다. Deployment를 원하는 곳을 아래 예시처럼 `type` 필드에 넣습니다.

``` yaml
deploy:
  type: git
```

여러 곳에 동시에 deploy할 수도 있습니다. Hexo는 순차적으로 deploy를 수행합니다.

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

[hexo-deployer-heroku]을 설치합니다.

``` bash
$ npm install hexo-deployer-heroku --save
```

설정을 수정합니다.

``` yaml
deploy:
  type: heroku
  repo: <repository url>
  message: [message]
```

옵션 | 설명
--- | ---
`repo`, `repository` | Heroku 저장소 URL
`message` | Commit message를 수정합니다. (기본값 - `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`)

## Rsync

[hexo-deployer-rsync]를 설치합니다.

``` bash
$ npm install hexo-deployer-rsync --save
```

설정을 수정합니다.

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

옵션 | 설명 | 기본값
--- | --- | ---
`host` | 원격 호스트의 주소 |
`user` | 사용자명 |
`root` | 원격 호스트의 루트 디렉토리 |
`port` | 포트 | 22
`delete` | 원격 호스트의 오래된 파일을 삭제합니다. | true
`verbose` | Verbose 메시지를 표시합니다. | true
`ignore_errors` | 에러를 무시합니다. | false

## OpenShift

[hexo-deployer-openshift]를 설치합니다.

``` bash
$ npm install hexo-deployer-openshift --save
```

설정을 수정합니다.

``` yaml
deploy:
  type: openshift
  repo: <repository url>
  message: [message]
```

옵션 | 설명
--- | ---
`repo` | OpenShift 저장소 URL
`message` | Commit message를 수정합니다. (기본값 - `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`)

## FTPSync

[hexo-deployer-ftpsync]를 설치합니다.

``` bash
$ npm install hexo-deployer-ftpsync --save
```

설정을 수정합니다.

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

옵션 | 설명 | 기본값
--- | --- | ---
`host` | 원격 호스트의 주소 |
`user` | 사용자명 |
`pass` | 비밀번호 |
`remote` | 원격 호스트의 루트 디렉토리 | `/`
`port` | 포트 | 21
`ignore` | 호스트 파일들과 원격 파일들을 무시합니다. |
`connections` | 연결 번호 | 1
`verbose` | Verbose 메시지를 표시합니다. | false

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

1. [21YunBox](https://www.21yunbox.com)에서 GitHub에서 다음 설정을 통해 새로운 '정적 사이트' 프로젝트를 설정합니다.

- **Build command:** `yarn && hexo deploy`
- **Publish directory:** `public`

2. 부튼 을 눌러!

그거에요! 앱은 빌드가 완료되는 즉시 21YunBox URL에 표시됩니다.

'hexo'에 대한 샘플 앱은 [https://hexo.21yunbox.com/](https://hexo.21yunbox.com/)에서 배포됩니다.

자세한 내용은 이 가이드를 참조하십시오.[https://www.21yunbox.com/docs/deploy-hexo](https://www.21yunbox.com/docs/#/deploy-hexo)에서 확인할 수 있습니다.

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

[RSS3](https://rss3.io)는 Web 3.0 시대의 콘텐츠 및 소셜 네트워크를 위해 설계된 개방형 프로토콜입니다.

1. [hexo-deployer-rss3] 설치

2. 구성을 수정합니다.

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

|매개변수 |설명 |
| ------------------ | ---------------------- |
| `endpoint` | RSS3 Hub에 대한 링크 |
| `privateKey` | 개인 키, 64바이트 |
| `ipfs/deploy` | IPFS에 배포할지 여부 |
| `ipfs/gateway` | IPFS API 게이트웨이 |
| `ipfs/api/key` | IPFS 게이트웨이 관련 검증 내용 |
| `ipfs/api/secret` | IPFS 게이트웨이 관련 검증 내용 |

3. 정적 파일 생성

4. 배포

특정 배포와 관련된 주의 사항은 [당사 문서](https://github.com/NaturalSelectionLabs/hexo-deployer-rss3/blob/develop/README.md)를 참조하세요.

## 다른 메소드들

생성되는 모든 파일들은 `public` 폴더에 저장됩니다. 이 파일들을 당신이 원하는 곳 아무데나 복사하여 사용할 수 있습니다.

[hexo-deployer-git]: https://github.com/hexojs/hexo-deployer-git
[hexo-deployer-heroku]: https://github.com/hexojs/hexo-deployer-heroku
[hexo-deployer-rsync]: https://github.com/hexojs/hexo-deployer-rsync
[hexo-deployer-openshift]: https://github.com/hexojs/hexo-deployer-openshift
[hexo-deployer-ftpsync]: https://github.com/hexojs/hexo-deployer-ftpsync
[hexo-deployer-rss3]: https://github.com/NaturalSelectionLabs/hexo-deployer-rss3
