title: Templates
---
템플릿은 당신의 웹 사이트를 외관을 어떻게 표현할지 정의합니다. 아래 표는 페이지에 따른 적절한 템플릿을 소개합니다. 테마는 최소한 `index` 템플릿은 가지고 있어야 합니다. 

템플릿 | 페이지 | 대비책
--- | --- | ---
`index` | Home page |
`post` | Posts | `index`
`page` | Pages | `index`
`archive` | Archives | `index`
`category` | Category archives | `archive`
`tag` | Tag archives | `archive`

## 레이아웃

페이지들이 비슷한 구조를 공유하는 경우 - 예를 들어, header와 footer를 갖는 두 개의 템플릿이 있다고 할 때 - 당신은 `layout`을 사용하여 구조적인 유사성을 나타낼 수 있습니다. 모든 레이아웃 파일은 템플릿의 컨텐츠를 표시할 `body` 변수를 가지고 있어야 합니다.

``` html index.ejs
index
```

``` html layout.ejs
<!DOCTYPE html>
<html>
  <body><%- body %></body>
</html>
```

yields:

``` html
<!DOCTYPE html>
<html>
  <body>index</body>
</html>
```

기본적으로 `layout` 템플릿은 다른 모든 템플릿에서 사용합니다. 추가적인 레이아웃을 front-matter 내부에 지정할 수도 있고 `false`로 설정하여 비활성화 시킬 수도 있습니다. 심지어 최상위 레이아웃에 레이아웃 템플릿을 더 포함시켜서 복잡하게 중첩된 구조를 만들 수도 있습니다.

## Partials

Partial은 템플릿끼리 구성 요소를 공유할 때 유용합니다. 일반적인 예로 header, footer, sidebar가 있습니다. Partial을 각각의 파일에 포함시켜서 당신의 웹 사이트를 좀 더 간단하게 유지보수 할 수 있습니다.

``` html partial/header.ejs
<h1 id="logo"><%= config.title %></h1>
```

``` html index.ejs
<%- partial('partial/header') %>
<div id="content">Home page</div>
```

yields:

``` html
<h1 id="logo">My Site</h1>
<div id="content">Home page</div>
```

## 지역 변수

템플릿 내에 지역 변수를 정의할 수 있고 이를 다른 팀플릿 내에서 사용할 수 있습니다.

``` html partial/header.ejs
<h1 id="logo"><%= title></h1>
```

``` html index.ejs
<%- partial('partial/header', {title: 'Hello World'}) %>
<div id="content">Home page</div>
```

yields:

``` html
<h1 id="logo">Hello World</h1>
<div id="content">Home page</div>
```

## 최적화

당신의 테마가 대단히 복잡하거나 매우 많은 수의 파일을 생성한다면, Hexo의 파일 생성 속도가 상당히 느려질 수 있습니다. 이 외에도 테마를 단순화 함으로써 Hexo 2.7에서 소개한 Fragment Caching을 사용할 수도 있습니다.

이 기능은 [Ruby on Rails](http://guides.rubyonrails.org/caching_with_rails.html#fragment-caching)에서 차용하였습니다. 이는 컨텐츠를 조각으로 나누어 저장하고 추가 요청이 발생할 때를 위해 캐시합니다. 이 방법으로 데이터베이스 쿼리 빈도를 낮출 수 있고 파일 생성 속도를 단축시킬 수 있습니다.

Fragment caching은 header, footer, sidebar, 다른 정적인 컨텐츠를 사용할 때 최고입니다.

``` js
<%- fragment_cache('header', function(){
  return '<header></header>';
});
```

그렇다 하더라도 Partial을 사용하는 것이 더 쉬울 수 있습니다.

``` js
<%- partial('header', {}, {cache: true});
```

`relative_link`가 활성화 상태일 때에는 fragment caching을 사용하지 마세요. 사용하게 되면 이슈가 발생할 수 있습니다. 왜냐하면 상대 링크는 표시되는 페이지에 따라 다를 수도 있기 때문입니다.
