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

## Git

[hexo-deployer-git]을 설치합니다.

``` bash
$ npm install hexo-deployer-git --save
```

설정을 수정합니다.

``` yaml
deploy:
  type: git
  repo: <repository url>
  branch: [branch]
  message: [message]
```

옵션 | 설명
--- | ---
`repo` | GitHub 저장소 URL
`branch` | Branch명. 당신이 GitHub 또는 GitCafe를 사용한다면 deployer는 자동으로 branch를 찾아냅니다.
`message` | Commit message를 수정합니다. (기본값 - `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`)

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

## 다른 메소드들

생성되는 모든 파일들은 `public` 폴더에 저장됩니다. 이 파일들을 당신이 원하는 곳 아무데나 복사하여 사용할 수 있습니다.

[hexo-deployer-git]: https://github.com/hexojs/hexo-deployer-git
[hexo-deployer-heroku]: https://github.com/hexojs/hexo-deployer-heroku
[hexo-deployer-rsync]: https://github.com/hexojs/hexo-deployer-rsync
[hexo-deployer-openshift]: https://github.com/hexojs/hexo-deployer-openshift
[hexo-deployer-ftpsync]: https://github.com/hexojs/hexo-deployer-ftpsync
