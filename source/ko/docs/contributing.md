title: Contributing
---
## 개발

우리는 당신이 Hexo의 개발에 참여하는 것을 환영합니다. 이 문서는 당신의 개발 프로세스에 도움을 줄 겁니다.

### 시작하기 전에...

아래의 코딩 스타일을 지켜주세요.

- [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)를 따릅니다.
- 두 개의 공백을 사용한 soft-tab을 사용합니다.
- 콤마로 시작하지 마세요.

### 워크플로우

1. Fork [hexojs/hexo].
2. 저장소를 당신의 컴퓨터에 clone하고 의존 사항들을 설치합니다.

    {% code %}
    $ git clone https://github.com/<username>/hexo.git
    $ cd hexo
    $ npm install
    $ git submodule update --init
    {% endcode %}

3. 기능 branch를 생성합니다.

    {% code %}
    $ git checkout -b new_feature
    {% endcode %}

4. 개발합니다.
5. Branch를 push합니다.

    {% code %}
    $ git push origin new_feature
    {% endcode %}

6. 변경사항에 대한 설명을 포함하여 Pull request를 생성합니다.

### 공지사항

- `package.json`의 version number는 수정하지 마세요.
- 당신의 Pull request는 테스트를 통과했을 때에만 merge됩니다. 반영하기 전에 test를 돌려보세요.

    {% code %}
    $ npm test
    {% endcode %}

## 문서의 갱신

Hexo 문서는 opensource이며 [hexojs/site]에서 소스 코드를 검색할 수 있습니다.

### Workflow

1. Fork [hexojs/site]
2. 저장소를 당신의 컴퓨터에 clone하고 의존 사항들을 설치합니다.

    {% code %}
    $ git clone https://github.com/<username>/site.git
    $ cd site
    $ npm install
    {% endcode %}

3. 문서를 수정하세요. Server를 돌려서 실시간으로 확인할 수 있습니다.

    {% code %}
    $ hexo server
    {% endcode %}

4. Branch를 push합니다.
5. 당신의 변경사항에 대한 설명을 포함하여 Pull request를 생성합니다.

### 번역

1. `source` 폴더 안에 새 언어에 대한 폴더를 생성하세요. (소문자로 생성하세요.)
2. `source` 폴더의 Markdown 및 템플릿 파일들을 새 언어 폴더에 복사하세요.
3. `source/_data/language.yml`에 새 언어를 추가하세요.
4. `themes/navy/languages`에 `en.yml` 파일을 복사하고 새 언어로 이름을 변경하세요. (소문자로 변경하세요.)

## 이슈 보고

Hexo를 사용하다가 문제를 발견하면, [Troubleshooting](troubleshooting.html), [GitHub](https://github.com/hexojs/hexo/issues), [Google Group](https://groups.google.com/group/hexo)에서 이슈에 대해 답을 찾아보세요. 만약 답이 없다면 Github에 문제를 보고해 주세요.

1. 문제 재현은 [debug mode](commands.html#Debug_mode)에서 해주세요.
2. `hexo version`명령을 수행해서 버전 정보를 알려주세요.
3. 디버그 메시지와 버전 정보를 Github에 올려주세요.

[hexojs/hexo]: https://github.com/hexojs/hexo
[hexojs/site]: https://github.com/hexojs/site
