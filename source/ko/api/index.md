title: API
---
이 문서는 API에 대해 더 자세한 정보를 담고 있습니다. Hexo 소스 코드를 수정하길 원하는 사용자나 새로운 플러그인을 작성하고자 하는 사용자에게 많은 도움이 될 것입니다. 당신이 Hexo의 기본 사용법에 대해 흥미가 있다면 [docs](../docs)를 확인해보세요.

이 문서는 Hexo 3 이상의 버전에 맞추어 작성되었습니다.

## 초기화

우선, 우리는 Hexo 인스턴스를 생성할 필요가 있습니다. 새로운 인스턴스는 두 개의 인자를 갖게 됩니다. 웹 사이트의 루트 디렉토리를 의미하는 `base_dir`와 초기화 옵션을 가지고 있는 객체입니다. 다음으로, `init` 메소드를 호출함으로써 이 인스턴스를 초기화 합니다. 초기화 시 Hexo는 설정값과 플러그인을 불러옵니다.

``` js
var Hexo = require('hexo');
var hexo = new Hexo(process.cwd(), {});

hexo.init().then(function(){
  // ...
});
```

옵션 | 설명 | 기본값
--- | --- | ---
`debug` | 디버그 모드를 활성화 합니다. 디버그 메시지는 터미널에 출력되고 루트 디렉토리의 `debug.log`파일에 저장됩니다. | `false`
`safe` | 보호 모드를 활성화 합니다. 플러그인을 불러오지 않습니다. | `false`
`silent` | 조용한 모드를 활성화 합니다. 어떠한 메시지도 터미널에 표시하지 않습니다. | `false`
`config` | 환경 설정 파일의 경로를 지정합니다. | `_config.yml`

## 파일 불러오기

Hexo는 파일을 불러오기 위해 두 가지의 메소드를 지원합니다. `load`와 `watch` 입니다. `load`는 `source` 테마 데이터를 포함하여 폴더 안의 모든 파일을 불러옵니다. `watch`도 동일한 동작을 수행하지만 파일이 수정되는 것을 감지(watching)합니다.

두 메소드 모드 파일의 목록을 불러와서 적절한 프로세서로 전달합니다. 모든 파일들이 처리된 후, 경로(route)를 생성하기 위해 generator들을 호출합니다.

``` js
hexo.load().then(function(){
  // ...
});

hexo.watch().then(function(){
  // You can call hexo.unwatch() later to stop watching.
});
```

## 명령어의 실행

Hexo 인스턴스의 `call` 메소드를 통해 모든 콘솔 명령어를 호출할 수 있습니다. 호출할 때는 콘솔 명령어와 옵션 두 개의 인자를 포함합니다. 각각의 콘솔 명령어마다 서로 다른 옵션을 가지고 있습니다.

``` js
hexo.call('generate', {}).then(function(){
  // ...
});
```

## 종료

`exit`를 호출하여 콘솔 명령어의 성공적/비성공적 종료를 할 수 있습니다. 이 명령어를 통해 Hexo를 정상적으로 종료하고 데이터베이스를 저장한다거나 하는 중요한 동작들을 마무리할 수 있습니다.

``` js
hexo.call('generate').then(function(){
  return hexo.exit();
}).catch(function(err){
  return hexo.exit(err);
});
```
