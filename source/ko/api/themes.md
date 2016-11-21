title: Themes
---
`hexo.theme`는 [Box](box.html)를 상속하며, 템플릿을 저장합니다.

## View 얻어오기

``` js
hexo.theme.getView(path);
```

## View 설정하기

``` js
hexo.theme.setView(path, data);
```

## View 제거하기

``` js
hexo.theme.removeView(path);
```

## View

View는 `render`와 `renderSync` 두 개의 메소드를 가지고 있습니다. 이 두 메소드들은 같은 동작을 수행하지만 `render`는 비동기적으로 동작하고 `renderSync`는 동기적으로 동작합니다. 단순한 설명을 위해, 여기에서는 `render`에 대해서만 다루겠습니다.

``` js
var view = hexo.theme.getView('layout.swig');

view.render({foo: 1, bar: 2}).then(function(result){
  // ...
});
```

당신은 `render` 메소드로 옵션을 전달할 수 있습니다. 이는 적절한 renderer를 통해 템플릿을 처리하고 [helpers](helper.html)를 로딩합니다. 렌더링이 끝나면, 레이아웃이 존재하는지 확인합니다. 만약 `layout`이 `false`이거나 없다면, 결과가 직접 반환될 것이빈다.
