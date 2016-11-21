title: Filter
---
Filter는 특정한 데이터를 수정할 때 사용합니다. Hexo는 데이터를 filter로 순차적으로 전달하고 filter들은 교대로 데이터를 수정할 수 있습니다. 이 컨셉은 [WordPress](http://codex.wordpress.org/Plugin_API#Filters)에서 차용하였습니다.

## 개요

``` js
hexo.extend.filter.register(type, function(){
  // ...
}, priority);
```

당신은 `priority`을 정의할 수 있습니다. 기본값은 10이며, 값이 낮을 수록 먼저 실행됩니다.

## Filter의 실행

``` js
hexo.extend.filter.exec(type, data, options);
hexo.extend.filter.execSync(type, data, options);
```

옵션 | 설명
--- | ---
`context` | Context
`args` | 인자. 이 값은 배열(array)입니다.

Filter의 첫 번째 인자는 `data` 입니다. 다음 filter로 전달 된 `data`는 새 값으로 변경되어 반환될 수 있습니다. 아무런 값도 반환되지 않았다면 data의 값이 변경되지 않았다는 의미입니다. Filter의 다른 인자를 지정하기 위해 `args`를 사용할 수도 있습니다. 아래 예시를 봐주세요.
 
``` js
hexo.extend.filter.register('test', function(data, arg1, arg2){
  // data === 'some data'
  // arg1 === 'foo'
  // arg2 === 'bar'

  return 'something';
});

hexo.extend.filter.register('test', function(data, arg1, arg2){
  // data === 'something'
});

hexo.extend.filter.exec('test', 'some data', {
  args: ['foo', 'bar']
});
```

Filter를 실행하기 위해 아래 메소드들을 사용할 수도 있습니다.

``` js
hexo.execFilter(type, data, options);
hexo.execFilterSync(type, data, options);
```

## Filter의 등록 해제

``` js
hexo.extend.filter.unregister(type, filter);
```

## Filter 목록

Hexo에서 사용하는 filter의 목록은 아래와 같습니다.

### before_post_render

Post가 생성되기 전에 실행됩니다. 실행 단계에 대해 더 알아보시길 원한다면 [post rendering](posts.html#Render)를 참조해 주세요.

아래 예시는 title을 소문자로 변경하는 것을 보여줍니다.

``` js
hexo.extend.filter.register('before_post_render', function(data){
  data.title = data.title.toLowerCase();
  return data;
});
```

### after_post_render

Post가 생성된 후 실행됩니다.
Executed after a post is rendered. 실행 단계에 대해 더 알아보시길 원한다면 [post rendering](posts.html#Render)를 참조해 주세요.

아래 예시는 `@username`을 Twitter link로 대체하는 것을 보여줍니다.

``` js
hexo.extend.filter.register('after_post_render', function(data){
  data.content = data.content.replace(/@(\d+)/, '<a href="http://twitter.com/$1">#$1</a>');
  return data;
});
```

### before_exit

Hexo가 종료되기 전에 실행됩니다. -- `hexo.exit`가 호출되는 즉시 실행됩니다.

``` js
hexo.extend.filter.register('before_exit', function(){
  // ...
});
```

### before_generate

생성(generation)이 시작되기 전에 실행됩니다.

``` js
hexo.extend.filter.register('before_generate', function(){
  // ...
});
```

### after_generate

생성(generation)이 끝난 후에 실행됩니다.

``` js
hexo.extend.filter.register('after_generate', function(){
  // ...
});
```

### template_locals

템플릿에서 [지역 변수(Local variables)](../docs/variables.html)를 수정합니다.

아래 예시는 템플릿의 지역 변수에 현재 시간을 추가합니다.

``` js
hexo.extend.filter.register('template_locals', function(locals){
  locals.now = Date.now();
  return locals;
});
```

### after_init

Hexo가 초기화 작업이 완료된 후 실행됩니다. -- `hexo.init`이 완료되는 즉시 실행됩니다.

``` js
hexo.extend.filter.register('after_init', function(){
  // ...
});
```

### new_post_path

새로운 포스트가 생성될 때 포스트의 경로를 결정하기 위해 실행됩니다.

``` js
hexo.extend.filter.register('new_post_path', function(data, replace){
  // ...
});
```

### post_permalink

Post의 permalink를 결정하기 위해 사용합니다.

``` js
hexo.extend.filter.register('post_permalink', function(data){
  // ...
});
```

### after_render

렌더링이 완료된 후 실행됩니다. [Rendering](rendering.html#after_render_Filters)에서 더 많은 정보를 확인하실 수 있습니다.

### server_middleware

서버에 미들웨어를 추가합니다. `app`은 [Connect] 인스턴스입니다.

아래 예시는 response header에 `X-Powered-By: Hexo`를 추가합니다.

``` js
hexo.extend.filter.register('server_middleware', function(app){
  app.use(function(req, res, next){
    res.setHeader('X-Powered-By', 'Hexo');
    next();
  });
});
```

[Connect]: https://github.com/senchalabs/connect
