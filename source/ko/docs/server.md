title: Server
---
## [hexo-server]

Hexo 3의 릴리즈와 함께, server를 메인 모듈과 분리시켰습니다. server를 사용하여 시작하기 위해서는 먼저 [hexo-server]를 설치해야 합니다.

``` bash
$ npm install hexo-server --save
```

설치가 완료되었다면 server를 시작하기 위해 아래 명령을 수행해야 합니다. 당신의 웹 사이트는 기본값에 의해 `http://localhost:4000`로 실행됩니다. server가 구동되는 동안 Hexo는 파일이 변경되는 것을 감지하여 자동으로 업데이트 합니다. 따라서 수동으로 server를 재시작할 필요가 없습니다.

``` bash
$ hexo server
```

포트를 변경하고 싶거나 `EADDRINUSE` 에러가 발생한다면 `-p` 옵션을 사용하여 다른 포트를 설정해 보세요.

``` bash
$ hexo server -p 5000
```

### Static Mode

Static mode에서는 `public` 폴더의 파일들만 제공되며 파일 감시 기능은 비활성화됩니다. server를 시작하기 전에 `hexo generate`를 수행해야 합니다. 이 방법은 production에서 주로 사용됩니다.

``` bash
$ hexo server -s
```

### IP 변경

Hexo는 기본적으로 `0.0.0.0`을 기본값으로 수행됩니다. 아래와 같은 방법으로 IP 설정을 변경할 수 있습니다.

``` bash
$ hexo server -i 192.168.1.1
```

## Pow

[Pow]는 Mac을 위한 zero-config Rack server입니다.

### 설치하기

``` bash
$ curl get.pow.cx | sh
```

### 설정하기

`~/.pow`에 대해 심볼릭 링크를 설정합니다.

``` bash
$ cd ~/.pow
$ ln -s /path/to/myapp
```

당신의 웹 사이트는 `http://myapp.dev` 상에서 실행될 것입니다. URL은 심볼릭 링크의 이름을 기준으로 합니다.

[hexo-server]: https://github.com/hexojs/hexo-server
[Pow]: http://pow.cx/
