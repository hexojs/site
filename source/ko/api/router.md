title: Router
---
Router는 사이트의 모든 경로를 저장합니다.

## 경로 가져오기

`get` 메소드는 [Stream]을 반환합니다. 아래는 특정한 목적지로 가기 위한 경로 데이터를 저장하는 동작 예시입니다.

``` js
var data = hexo.route.get('index.html');
var dest = fs.createWriteStream('somewhere');

data.pipe(dest);
```

## 경로 설정하기

`set` 메소드는 문자열과 [Buffer] 또는 함수를 통해 얻어옵니다.

``` js
// String
hexo.route.set('index.html', 'index')

// Buffer
hexo.route.set('index.html', new Buffer('index'));

// Function (Promise)
hexo.route.set('index.html', function(){
  return new Promise(function(resolve, reject){
    resolve('index');
  });
});

// Function (Callback)
hexo.route.set('index.html', function(callback){
  callback(null, 'index');
});
```

경로가 수정되었는지 아닌지에 대해 boolean값을 통해 확인할 수 있습니다. 이는 수정되지 않은 파일을 무시하여 파일의 빠른 생성을 도와줍니다.

``` js
hexo.route.set('index.html', {
    data: 'index',
    modified: false
});

// hexo.route.isModified('index.html') => false
```

## 경로 제거하기

``` js
hexo.route.remove('index.html');
```

## 경로(route) 목록 가져오기

``` js
hexo.route.list();
```

## 경로 형식 지정하기

`format` 메소드는 문자열을 사용 가능한 경로로 변환해줍니다.

``` js
hexo.route.format('archives/');
// archives/index.html
```

[Stream]: http://nodejs.org/api/stream.html
[Buffer]: http://nodejs.org/api/buffer.html
