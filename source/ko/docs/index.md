title: Documentation
---
Hexo 문서에 오신 것을 환영합니다. Hexo 사용 중 문제가 발생한다면 [troubleshooting guide](troubleshooting.html)를 살펴보세요. 이슈가 발생했다면 [GitHub](https://github.com/hexojs/hexo/issues) 또는 [Google Group](https://groups.google.com/group/hexo) 에 내용을 등록해 주세요.

## Hexo는 무엇인가요?

Hexo는 빠르고 간단하고 파워풀한 블로그 프레임워크입니다. [Markdown](http://daringfireball.net/projects/markdown/)(또는 다른 언어)을 사용하여 포스트를 작성하면 Hexo는 금세 멋진 테마를 가미해서 정적인 파일을 생성해 드립니다.

## 설치하기

Hexo는 눈 깜박할 새에 설치할 수 있습니다. 설치 시 문제가 생겼는데 해결책을 찾지 못했다면, [submit a GitHub issue](https://github.com/hexojs/hexo/issues)에 등록해 주세요. 제가 해결해 드리겠습니다.

### 요구사항

Hexo의 설치는 꽤 쉽습니다. 하지만, 설치 전에 몇 가지 요구사항이 있습니다.

- [Node.js](http://nodejs.org/)
- [Git](http://git-scm.com/)

컴퓨터에 이미 이런 것들이 설치되어 있다면, 축하드립니다! 이제 npm을 이용하여 Hexo를 설치하기만 하면 됩니다.

``` bash
$ npm install -g hexo-cli
```

설치되어 있지 않다면, 아래의 설명을 따라 요구사항들을 설치하세요.

{% note warn For Mac users %}
컴파일 중에 몇 가지 문제가 발생할 수 있습니다. 우선 앱스토어를 통해 Xcode를 설치하세요. 그 다음, Xcode를 실행하고 **Preferences -> Download -> Command Line Tools -> Install** 의 방법으로 command line tool을 설치하세요.
{% endnote %}

### Git을 설치하세요

- Windows: [git](https://git-scm.com/download/win) 에서 다운로드해서 설치하세요.
- Mac: [Homebrew](http://mxcl.github.com/homebrew/), [MacPorts](http://www.macports.org/), [installer](http://sourceforge.net/projects/git-osx-installer/) 중 하나 선택해서 설치하세요.
- Linux (Ubuntu, Debian): `sudo apt-get install git-core`
- Linux (Fedora, Red Hat, CentOS): `sudo yum install git-core`

### Node.js를 설치하세요

Node.js는 [nvm](https://github.com/creationix/nvm)을 통해 설치하는 것이 가장 좋습니다.

cURL:

``` bash
$ curl https://raw.github.com/creationix/nvm/master/install.sh | sh
```

Wget:

``` bash
$ wget -qO- https://raw.github.com/creationix/nvm/master/install.sh | sh
```

nvm이 설치되어 있다면, 터미널을 재시작하고 아래 명령어를 수행하세요.

``` bash
$ nvm install stable
```

이런 방법 대신, [installer](http://nodejs.org/)를 다운로드 받아서 설치하는 방법도 있습니다.

### Hexo 설치하기

위의 요구사항을 모두 설치하셨다면, npm을 통해 Hexo를 설치하세요.

``` bash
$ npm install -g hexo-cli
```
