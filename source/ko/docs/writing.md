title: Writing
---
새 포스트나 페이지를 생성하기 위해 아래 명령어를 입력하세요.

``` bash
$ hexo new [layout] <title>
```

`post` 는 기본 `layout`입니다. 하지만 `_config.yml` 파일의 `default_layout` 설정을 변경하여 당신이 만든 것으로 변경할 수 있습니다.

### 레이아웃

Hexo에는 세 개의 기본 레이아웃이 존재합니다. `post`, `page`, `draft` 입니다. 이 각각의 레이아웃에 의해 생성된 파일들은 서로 다른 경로에 저장됩니다. 새롭게 생성된 포스트는 `source/_posts` 폴더에 저장됩니다.

레이아웃 | 경로
--- | ---
`post` | `source/_posts`
`page` | `source`
`draft` | `source/_drafts`

{% note tip Don't process my posts! %}
당신의 post가 처리되는 것을 원치 않는다면 front-matter에 `layout: false`를 선언하면 됩니다.
{% endnote %}

### 파일명

기본적으로, Hexo는 post의 제목을 파일명과 동일하게 사용합니다. `_config.yml` 파일의 `new_post_name` 설정을 변경하여 기본 파일명을 바꿀 수 있습니다. 예를 들어, `:year-:month-:day-:title.md`는 포스트가 생성된 날짜를 파일명의 접두사로 사용하게 합니다. 당신은 아래와 같은 placeholder를 사용할 수 있습니다.

Placeholder | 설명
--- | ---
`:title` | Post 제목 (소문자, 공백은 '-'하이픈으로 변경됩니다.)
`:year` | 연도를 생성합니다. 예. `2015`
`:month` | 월을 생성합니다. (0이 붙습니다.), 예. `04`
`:i_month` | 월을 생성합니다. (0이 붙지 않습니다.), 예. `4`
`:day` | 일을 생성합니다. (0이 붙습니다.), 예. `07`
`:i_day` | 일을 생성합니다. (0이 붙지 않습니다.), 예. `7`

### Draft

이전에, 우리는 Hexo의 특별한 레이아웃에 대해 언급한 적이 있습니다. 바로 `draft`입니다. Post는 이 레이아웃으로 초기화되며 `source/_drafts`폴더에 저장됩니다. 당신은 `publish` 명령어를 통해 draft를 `source/_posts`폴더로 옮길 수 있습니다. `publish`는 `new` 명령어와 비슷하게 동작합니다.

``` bash
$ hexo publish [layout] <title>
```

기본적으로 Draft는 표시되지 않습니다. Hexo 실행 시 `--draft` 옵션을 추가하거나 `_config.yml`파일에서 `render_drafts`를 활성화 하면 draft를 렌더링할 수 있습니다.

### Scaffold

포스트 생성 시 Hexo는 `scaffolds` 폴더 내의 적당한 파일을 기반으로 구성합니다.

``` bash
$ hexo new photo "My Gallery"
```

이 명령어가 수행되면 Hexo는 `scaffolds` 폴더 내에서 `photo.md`를 찾기 시작하고 이를 기반으로 한 포스트를 구성합니다. Scaffolds 내에서는 아래의 placeholder를 사용할 수 있습니다.

Placeholder | 설명
--- | ---
`layout` | 레이아웃
`title` | 제목
`date` | 파일 생성일
