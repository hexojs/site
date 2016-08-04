title: Box
---
Box는 특정 폴더 안의 파일들을 처리하기 위해 사용되는 컨테이너 입니다. Hexo는 `hexo.source`와 `hexo.theme` 두 가지 종류의 Box를 사용합니다: `hexo.source`는 `source` 폴더를 처리할 때 사용되고 `hexo.theme`는 `theme` 폴더를 처리할 때 사용됩니다.

## 파일 불러오기

Box는 `process`와 `watch` 두 가지 종류의 메소드를 지원합니다. `process`는 폴더 안의 모든 파일을 불러옵니다. `watch`도 동일한 동작을 수행하지만 파일이 변경되는 것을 감지(watching)합니다.

``` js
box.process().then(function(){
  // ...
});

box.watch().then(function(){
  // You can call box.unwatch() later to stop watching.
});
```

## 경로 매칭

Box는 다양한 방법을 통해 경로를 매칭시킵니다. 당신은 함수 또는 Express-style pattern string을 통해 정규 표현식을 사용할 수 있습니다. 아래는 예시입니다:

``` plain
posts/:id => posts/89
posts/*path => posts/2015/title
```

[util.Pattern]에서 더 많은 정보를 확인하실 수 있습니다.

## 프로세서

프로세서는 Box의 핵심이 되는 요소이며, 파일을 처리할 때 사용됩니다. 경로 매칭을 사용하여 프로세서가 어떤 프로세스를 처리해야 하는지 제한할 수 있습니다. 새로운 프로세서는 `addProcessor` 메소드를 통해 등록할 수 있습니다.

``` js
box.addProcessor('posts/:id', function(file){
  //
});
```

Box는 매칭된 파일의 콘텐츠를 프로세서로 넘겨줍니다. 이 정보는 callback의 `file` 인자로부터 직접 읽을 수 있습니다.

속성 | 설명
--- | ---
`source` | 파일의 전체 경로
`path` | 파일의 box에 대한 상대 경로
`type` | 파일의 형식. `create`, `update`, `skip`, `delete` 네 가지 값을 가질 수 있습니다.
`params` | 경로 매칭으로부터 얻은 정보.

Box는 개발자의 부담을 덜어주기 위해 file IO에 대한 몇 가지 메소드를 제공합니다.

메소드 | 설명
--- | ---
`read` | 파일을 읽습니다
`readSync` | 파일을 동기적으로 읽습니다
`stat` | 파일의 상태를 읽습니다
`statSync` | 파일의 상태를 동기적으로 읽습니다
`render` | 파일을 생성합니다
`renderSync` | 파일을 동기적으로 생성합니다

[util.Pattern]: https://github.com/hexojs/hexo-util#patternrule
