title: Generating
---
Hexo를 사용하여 매우 쉽고 빠르게 정적인 파일을 생성할 수 있습니다.

``` bash
$ hexo generate
```

### 파일 변경을 감시(watch)하기

Hexo는 파일이 변경되거나 새로 생성되는 경우 쉽게 알아챌 수 있습니다. Hexo는 SHA1 checksum을 비교하여 파일의 변경을 확인합니다.

``` bash
$ hexo generate --watch
```

### 생성 후의 deploy

생성 후에 deploy 하기위해 다음 명령어 중 하나를 실행해야 합니다. 두 명령어는 동일한 동작을 수행합니다.

``` bash
$ hexo generate --deploy
$ hexo deploy --generate
```
