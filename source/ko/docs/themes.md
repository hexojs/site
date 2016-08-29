title: Themes
---
Hexo theme를 만드는 것은 쉽습니다. - 새로운 폴더를 생성하기만 하면 됩니다. 당신의 테마의 사용을 위해 `_config.yml` 파일의 theme` 설정을 수정하세요. 테마는 아래의 구조를 가져야 합니다.

``` plain
.
├── _config.yml
├── languages
├── layout
├── scripts
└── source
```

### _config.yml

테마의 환경설정 파일입니다. server를 재시작하지 않고도 이 파일을 수정할 수 있습니다.

### languages

언어 폴더입니다. 더 자세한 정보는 [internationalization (i18n)](internationalization.html)를 참조하세요.

### layout

레이아웃 폴더입니다. 이 폴더는 당신의 웹 사이트를 어떻게 보여줄지 정의한 테마 템플릿 파일을 포함합니다. Hexo는 기본적으로 [Swig] 템플릿 엔진을 준비해 두었습니다. 하지만 당신은 [EJS], [Haml], [Jade] 등 엔진을 대체할 다른 플러그인을 쉽게 설치할 수 있습니다. Hexo는 템플릿의 파일 확장자를 기반으로 템플릿 엔진을 선택합니다.

``` plain
layout.ejs   - uses EJS
layout.swig  - uses Swig
```

[templates](templates.html)에서 더 자세한 정보를 확인할 수 있습니다.

### scripts

스크립트 폴더입니다. Hexo는 초기화 과정에서 이 폴더의 모든 JavaScript 파일을 자동으로 불러옵니다. [plugins](plugins.html)에서 더 자세한 정보를 확인할 수 있습니다.

### source

소스 폴더입니다. Asset 파일(CSS, JavaScript 등)을 이곳에 넣어두세요. Hexo는 숨겨진 파일 및 `_`(underscore)로 시작하는 파일과 폴더를 무시합니다.

Hexo는 모든 렌더링 가능한 파일들을 처리한 후 `public` 폴더에 저장합니다. 렌더링이 불가능한 파일들은 `public` 폴더로 직접 복사합니다.

### 배포

테마의 제작이 완료되면, [테마 목록](/themes)에 배포할 수 있습니다. 이 동작을 수행하기 전에 정상 동작을 보증하기 위해 [테마 유닛 테스트](https://github.com/hexojs/hexo-theme-unit-test)를 수행하세요. 테마를 배포하는 단계들은 [문서의 갱신](contributing.html#Updating_Documentation) 과정과 매우 유사합니다.

1. Fork [hexojs/site]
2. 저장소를 당신의 컴퓨터에 clone하고 의존 사항들을 설치합니다.

    ```shell
    $ git clone https://github.com/<username>/site.git
    $ cd site
    $ npm install
    ```

3. `source/_data/themes.yml`를 수정하고 테마를 추가하세요.

    ```yaml
    - name: landscape
      description: A brand new default theme for Hexo.
      link: https://github.com/hexojs/hexo-theme-landscape
      preview: http://hexo.io/hexo-theme-landscape
      tags:
        - official
        - responsive
        - widget
        - two_column
        - one_column
    ```

4. `source/themes/screenshots`에 스크린샷을 추가하세요. 스크린샷의 이름은 테마와 동일해야 하며 반드시 사이즈가 800*500 픽셀인 PNG 파일이어야 합니다.
5. Branch에 push하세요.
6. 변경사항에 대한 설명을 포함하여 Pull request를 생성합니다.

[EJS]: https://github.com/hexojs/hexo-renderer-ejs
[Swig]: http://paularmstrong.github.com/swig/
[Haml]: https://github.com/hexojs/hexo-renderer-haml
[Jade]: https://github.com/hexojs/hexo-renderer-jade
[hexojs/site]: https://github.com/hexojs/site
