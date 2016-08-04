title: Setup
---
Hexo를 설치했다면, 타겟 `<folder>`의 Hexo를 초기화하기 위해 아래의 명령을 수행하세요.

``` bash
$ hexo init <folder>
$ cd <folder>
$ npm install
```

초기화가 완료되면 다음과 같은 폴더 구조를 가지게 될 것입니다.

``` plain
.
├── _config.yml
├── package.json
├── scaffolds
├── source
|   ├── _drafts
|   └── _posts
└── themes
```

### _config.yml

이 파일은 [환경설정](configuration.html) 파일입니다. 대부분의 설정을 여기서 할 수 있습니다.

### package.json

어플리케이션 데이터 파일입니다. [EJS](http://embeddedjs.com/), [Stylus](http://learnboost.github.io/stylus/), [Markdown](http://daringfireball.net/projects/markdown/) 렌더러들이 기본으로 설치됩니다. 원한다면, 나중에 당신이 제거할 수도 있습니다.

``` json package.json
{
  "name": "hexo-site",
  "version": "0.0.0",
  "private": true,
  "hexo": {
    "version": ""
  },
  "dependencies": {
    "hexo": "^3.0.0",
    "hexo-generator-archive": "^0.1.0",
    "hexo-generator-category": "^0.1.0",
    "hexo-generator-index": "^0.1.0",
    "hexo-generator-tag": "^0.1.0",
    "hexo-renderer-ejs": "^0.1.0",
    "hexo-renderer-stylus": "^0.2.0",
    "hexo-renderer-marked": "^0.2.4",
    "hexo-server": "^0.1.2"
  }
}
```

### scaffolds

[Scaffold](writing.html#Scaffolds) 폴더입니다. 새로운 포스트를 생성할 때, Hexo는 scaffold를 기준으로 새 파일을 생성합니다.

### source

소스 폴더입니다. 당신의 웹 사이트 컨텐츠들을 위치시키는 곳 입니다. Hexo는 숨겨진 파일과 `_` (언더스코어)로 시작하는 파일 및 폴더들을 무시합니다. - `_posts` 폴더는 제외하고 말이죠. 렌더링이 가능한 파일들(예. Markdown, HTML)은 처리된 후 `public` 폴더로 들어가게 됩니다. 그 동안 다른 파일들은 단순히 복사됩니다.

### themes

[테마](themes.html) 폴더입니다. Hexo는 테마와 컨텐츠를 혼합하여 정적인 웹 사이트를 생성합니다.
