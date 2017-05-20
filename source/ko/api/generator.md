title: Generator
---
Generator는 처리된 파일들을 기준으로 경로(route)를 생성합니다.

## 개요

``` js
hexo.extend.generator.register(name, function(locals){
  // ...
});
```

`locals`인자는 [사이트 변수(site variables)](../docs/variables.html#Site-Variables)를 포함하며 함수를 통해 전달될 것입니다. 이 인자를 사용하면 데이터베이스에 직접 접근하지 않고도 웹 사이트의 데이터를 얻을 수 있습니다.

## 경로(route) 업데이트

``` js
hexo.extend.generator.register('test', function(locals){
  // Object
  return {
    path: 'foo',
    data: 'foo'
  };

  // Array
  return [
    {path: 'foo', data: 'foo'},
    {path: 'bar', data: 'bar'}
  ];
});
```

속성 | 설명
--- | ---
`path` | 접두사 `/`를 포함하지 않는 경로.
`data` | 데이터
`layout` | 레이아웃. 렌더링할 레이아웃을 지정합니다. 이 값은 string 또는 array입니다. 이 값이 무시된다면 `data`의 직접적인 경로가 반환됩니다.

소스 파일들이 업데이트 되면, Hexo는 모든 generator들을 실행하고 경로(route)를 재구성합니다. **제발 라우터에 직접 접근하지 마시고 데이터를 리턴하세요.**

## 예제

### Archive Page

Archive page를 `archives/index.html`에 생성합니다. 우리는 모든 포스트 데이터를 템플릿으로 전달합니다.이 데이터는 템플릿의 `page` 변수와 같습니다.

다음, 테마 템플릿 렌더링을 위한 `layout` 속성을 설정합니다. 아래 예시에서 두 개의 레이아웃 설정을 확인할 수 있습니다. 만약 `archive` 레이아웃이 존재하지 않는다면 `index` 레이아웃이 사용될 것입니다.

``` js
hexo.extend.generator.register('archive', function(locals){
  return {
    path: 'archives/index.html',
    data: locals.posts,
    layout: ['archive', 'index']
  }
});
```

### Archive Page에 Pagination 사용하기

Hexo 공식 툴인 [hexo-pagination]을 사용하여 간편하게 pagination을 구현할 수 있습니다.

``` js
var pagination = require('hexo-pagination');

hexo.extend.generator.register('archive', function(locals){
  return pagination('archives/index.html', locals.posts, {
    perPage: 10,
    layout: ['archive', 'index'],
    data: {}
  });
});
```

### 모든 포스트 생성하기

`locals.posts`에 포함된 모든 포스트들을 순회하고 각각의 포스트에 대한 경로(route)를 생성합니다.

``` js
hexo.extend.generator.register('post', function(locals){
  return locals.posts.map(function(post){
    return {
      path: post.path,
      data: post,
      layout: 'post'
    };
  });
});
```

### 파일 복사

이 시점에 우리는 명시적인 데이터를 반환하지 않고 필요한 경우에만 경로(route)는 `fs.ReadStream`를 생성하기 위해 함수에 `data`를 설정합니다.

``` js
var fs = require('hexo-fs');

hexo.extend.generator.register('asset', function(locals){
  return {
    path: 'file.txt',
    data: function(){
      return fs.createReadStream('path/to/file.txt')
    }
  };
});
```

[hexo-pagination]: https://github.com/hexojs/hexo-pagination
