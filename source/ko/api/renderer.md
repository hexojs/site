title: Renderer
---
Renderer는 내용들을 그릴(render) 때 사용합니다.

## 개요

``` js
hexo.extend.renderer.register(name, output, function(data, options){
  // ...
}, sync);
```

인자 | 설명
--- | ---
`name` | 입력 파일의 확장자 (소문자, '.' 사용 불가)
`output` | 출력 파일의 확장자 (소문자, '.' 사용 불가)
`sync` | 동기(Sync) 모드


두 개의 인자가 render 함수로 전달됩니다:

인자 | 설명
--- | ---
`data` |두 개의 속성을 포함합니다: 파일 경로인 `path`와 파일 컨텐츠인 `text`. `path`는 없어도 됩니다.
`option` | 옵션

## 예시

### 비동기(Async) 모드

``` js
var stylus = require('stylus');

// Callback
hexo.extend.renderer.register('styl', 'css', function(data, options, callback){
  stylus(data.text).set('filename', data.path).render(callback);
});

// Promise
hexo.extend.renderer.register('styl', 'css', function(data, options){
  return new Promise(function(resolve, reject){
    resolve('test');
  });
});
```

### 동기(Sync) Mode

``` js
var ejs = require('ejs');

hexo.extend.renderer.register('ejs', 'html', function(data, options){
  options.filename = data.path;
  return ejs.render(data.text, options);
}, true);
```
