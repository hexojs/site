title: Posts
---
## 포스트 생성

``` js
hexo.post.create(data, replace);
```

인자 | 설명
--- | ---
`data` | 데이터
`replace` | 존재하는 파일을 대체함

포스트의 속성은 `data`에 정의할 수 있습니다. 아래의 표는 완벽하진 않습니다. 추가 속성은 앞의 내용(front-matter)에 추가할 수 있습니다.

데이터 | 설명
--- | ---
`title` | 타이틀
`slug` | URL
`layout` | 레이아웃. 기본 값은 `default_layout` 설정을 따릅니다.
`path` | 경로. Hexo는 기본적으로 `new_post_path`를 기반으로 경로를 설정합니다.
`date` | 날짜. 기본 값은 현재 시간입니다.

## Draft 배포

``` js
hexo.post.publish(data, replace);
```

인자 | 설명
--- | ---
`data` | 데이터
`replace` | 존재하는 파일을 대체함

포스트의 속성은 `data`에 정의할 수 있습니다. 아래의 표는 완벽하진 않습니다. 추가 속성은 앞의 내용(front-matter)에 추가할 수 있습니다.

데이터 | 설명
--- | ---
`slug` | 파일명 (Required)
`layout` | 레이아웃. 기본 값은 `default_layout` 설정을 따릅니다.

## 그리기 (Render)

``` js
hexo.post.render(source, data);
```

인자 | 설명
--- | ---
`source` | 파일의 전체 경로 (Optional)
`data` | 데이터

데이터는 반드시 `content` 속성 내에 포함되어야 합니다. 그렇지 않을 경우, Hexo는 원본 파일을 읽으려고 시도할 것입니다. 이 함수의 실행 단계는 아래와 같습니다.

- `before_post_render` filter를 실행합니다.
- Markdown 또는 다른 렌더러를 통해 렌더링 합니다. (확장자명에 따라 다릅니다.)
- [Nunjucks]를 사용하여 렌더링 합니다.
- `after_post_render` filter를 실행합니다.

[Nunjucks]: http://mozilla.github.io/nunjucks/
