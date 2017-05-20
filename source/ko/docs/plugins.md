title: Plugins
---
Hexo는 파워풀한 플러그인 시스템을 가지고 있습니다. 코어 모듈의 소스 코드를 수정하지 않고도 쉽게 확장 기능을 구현할 수 있습니다. 아래에서 두 가지 종류의 Hexo 플러그인을 소개해 드립니다.

### 스크립트

플러그인이 상대적으로 간단한 것이라면, 스크립트를 사용하는 것을 추천 합니다. `scripts` 폴더에 JavaScript 파일을 넣어두기만 하면 Hexo가 초기화 과정에서 알아서 로딩해 갑니다.

### 플러그인

코드가 복잡하거나 NPM registry에 배포하기를 원한다면, 플러그인을 사용하는 것을 추천 드립니다. 우선, `node_modules` 폴더 내에 새 폴더를 생성하세요. 폴더의 이름은 `hexo-`로 시작해야 합니다. 그렇지 않다면 Hexo는 그 폴더를 무시합니다.

새 폴더는 반드시 다음 두 개의 파일을 가지고 있어야 합니다. 하나는 실제 JavaScript 코드이며, 하나는 플러그인의 목적 및 의존성에 대해 기술한 `package.json` 파일입니다.

``` plain
.
├── index.js
└── package.json
```

`package.json` 파일에는 최소한 `name`, `version`, `main` 세 가지 항목은 있어야 합니다.

``` json package.json
{
  "name": "hexo-my-plugin",
  "version": "0.0.1",
  "main": "index"
}
```

또한, 루트의 `package.json`에도 당신이 구현한 플러그인의 의존성 대한 정보를 넣어야 합니다. 그래야 Hexo가 당신의 hexo 인스턴스를 발견하고 로딩할 수 있습니다.

### 툴

당신은 Hexo에서 빠른 개발을 위해 제공하는 공식 툴을 사용할 수 있습니다.

- [hexo-fs]：File IO
- [hexo-util]：Utilities
- [hexo-i18n]：Localization (i18n)
- [hexo-pagination]：Generate pagination data

### 배포

플러그인의 구현이 완료되면, 다른 사람들이 플러그인을 사용할 수 있도록 [플러그인 목록](/plugins)에 배포하는 것을 고려해야 합니다. 당신의 플러그인을 배포하는 것은 [문서를 업데이트 하는 것](contributing.html#Updating_Documentation)과 매우 유사합니다.

1. Fork [hexojs/site]
2. 저장소를 당신의 컴퓨터에 clone하고 종속성이 있는 것들을 모두 설치합니다.

    {% code %}
    $ git clone https://github.com/<username>/site.git
    $ cd site
    $ npm install
    {% endcode %}

3. `source/_data/plugins.yml` 파일을 수정하여 당신의 플러그인을 추가합니다.

    {% code %}
    - name: hexo-server
      description: Server module for Hexo.
      link: https://github.com/hexojs/hexo-server
      tags:
        - official
        - server
        - console
    {% endcode %}

4. Branch에 push합니다.
5. Pull request를 생성하여 변경사항에 대해 기술합니다.

[hexo-fs]: https://github.com/hexojs/hexo-fs
[hexo-util]: https://github.com/hexojs/hexo-util
[hexo-i18n]: https://github.com/hexojs/hexo-i18n
[hexo-pagination]: https://github.com/hexojs/hexo-pagination
[hexojs/site]: https://github.com/hexojs/site
