title: Deployer
---
Deployer는 복잡한 명령어를 사용하지 않고도 사용자가 사이트를 원격 서버에 빠르게 deploy할 수 있게 도와줍니다.

## 개요

``` js
hexo.extend.deployer.register(name, function(args){
  // ...
});
```

`args`인자는 사용자가 터미널을 통해 입력한 값은 물론 `_config.yml` 파일 내의 `deploy` 값도 포함하여 함수 내로 전달됩니다.
