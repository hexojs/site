title: Local Variables
---
지역 변수는 템플릿의 `site` 변수처럼 템플릿 렌더링을 위해 사용됩니다.

## 기본적인 변수

변수 | 설명
--- | ---
`posts` | 모든 포스트
`pages` | 모든 페이지
`categories` | 모든 카테고리
`tags` | 모든 태그

## 변수 얻어오기

``` js
hexo.locals.get('posts')
```

## 변수 설정

``` js
hexo.locals.set('posts', function(){
  return ...
});
```

## 변수 제거

``` js
hexo.locals.remove('posts');
```

## 모든 변수 얻어오기

``` js
hexo.locals.toObject();
```

## 캐시 무효화

``` js
hexo.locals.invalidate();
```