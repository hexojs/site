title: Rendering
---
Hexo에서 파일 또는 문자열을 렌더링 하기위해 두 가지의 메소드를 사용할 수 있습니다. 비동기 메소드인 `hexo.render.render`와 동기 메소드인 `hexo.render.renderSync`입니다. 두 가지의 메소드는 매우 유사하기 때문에 이 문서에서는 비동기 메소드인 `hexo.render.render` 에 대해 알아보겠습니다.

## 문자열의 렌더링

문자열을 렌더링하기 위해 Hexo가 어떤 엔진을 사용하여 렌더링하면 되는지 `engine` 을 통해 알려줘야 합니다.

``` js
hexo.render.render({text: 'example', engine: 'swig'}).then(function(result){
  // ...
});
```

## 파일의 렌더링

파일을 렌더링할 때에는 `engine`을 반드시 지정할 필요는 없습니다. 왜냐하면 Hexo는 파일 확장자를 보고 자동으로 연관된 렌더링 엔진을 찾기 때문입니다. 물론, 명시적으로 `engine`을 지정해도 상관 없습니다.

``` js
hexo.render.render({path: 'path/to/file.swig'}).then(function(result){
  // ...
});
```

## 렌더링 옵션

두 번째 인자인 옵션은 꼭 넣지 않아도 됩니다.

``` js
hexo.render.render({text: ''}, {foo: 'foo'}).then(function(result){
  // ...
});
```

## after_render Filters

렌더링이 완료되면 Hexo는 적절한 `after_render` filter를 실행합니다. 예를 들어, 우리는 이 기능을 JavaScript minifier를 구현하는데 사용할 수 있습니다.

``` js
var UglifyJS = require('uglify-js');

hexo.extend.filter.register('after_render:js', function(str, data){
  var result = UglifyJS.minify(str);
  return result.code;
});
```

## 렌더링 가능한 파일인지 확인하기

파일의 경로가 렌더링 가능한지 확인하기 위해 `isRenderable` 또는 `isRenderableSync` 메소드를 사용할 수 있습니다. 이 메소드는 적절한 렌더러가 등록되어 있을 때에만 true를 반환합니다.

``` js
hexo.render.isRenderable('layout.swig') // true
hexo.render.isRenderable('image.png') // false
```

## 출력 확장자 가져오기

`getOutput`메소드를 사용하면 렌더링된 출력의 확장자를 불러올 수 있습니다. 파일이 렌더링 불가능하다면, 이 메소드는 빈 문자열을 반환할 것입니다.

``` js
hexo.render.getOutput('layout.swig') // html
hexo.render.getOutput('image.png') // '''
```
