title: Permalinks
---
`_config.yml` 파일 또는 각 포스트의 front-matter에 permalink의 형식을 지정할 수 있습니다.

### 변수

당신은 아래의 변수들은 물론 permalink의 모든 속성을 다 사용할 수 있습니다.

변수 | 설명
--- | ---
`:year` | 포스트를 배포한 연도 (4-digit)
`:month` | 포스트를 배포한 월 (2-digit)
`:i_month` | 포스트를 배포한 월 (앞에 붙는 0은 생략)
`:day` | 포스트를 배포한 날 (2-digit)
`:i_day` | 포스트를 배포한 날 (앞에 붙는 0은 생략)
`:title` | 파일명
`:id` | 포스트 ID
`:category` | 포스트가 속한 카테고리. 지정하지 않으면 `default_category` 값을 사용합니다.

Permalink 내의 각 변수의 기본 값을 `permalink_defaults` 설정을 통해 정의할 수 있습니다.

``` yaml
permalink_defaults:
  lang: en
```

### 예시

`source/_posts` 내에 `hello-world.md`라는 포스트가 아래와 같이 있다고 하겠습니다.

``` yaml
title: Hello World
date: 2013-07-14 17:01:34
categories:
- foo
- bar
```

설정 | 결과
--- | ---
`:year/:month/:day/:title/` | 2013/07/14/hello-world
`:year-:month-:day-:title.html` | 2013-07-14-hello-world.html
`:category/:title` | foo/bar/hello-world

### 다국어 지원

다국어 지원 사이트를 생성하기 위해, `new_post_name`과 `permalink`를 다음과 같이 수정해야 합니다.

``` yaml
new_post_name: :lang/:title.md
permalink: :lang/:title/
```

새 post를 생성할 때, 다음과 같이 저장해야 합니다.

``` bash
$ hexo new "Hello World" --lang tw
# => source/_posts/tw/Hello-World.md
```

그리고 URL은 다음과 같아야 합니다.

``` plain
http://localhost:4000/tw/hello-world/
```
