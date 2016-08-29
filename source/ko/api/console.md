title: Console
---
Console은 Hexo와 사용자 간의 교두보 역할을 합니다. 사용 가능한 console 명령어를 등록하고 설명합니다.

## 개요

``` js
hexo.extend.console.register(name, desc, options, function(args){
  // ...
});
```

인자 | 설명
--- | ---
`name` | 이름
`desc` | 설명
`options`| 옵션

`args` 인자는 사용자가 터미널에 입력한 값을 포함하여 함수 내로 전달됩니다. [Minimist]에 의해 파싱됩니다.

## 옵션

### 사용법

Console 명령어의 사용법의 예시입니다:

``` js
{usage: '[layout] <title>'}
// hexo new [layout] <title>
```

### 인자

Console 명령어의 각 인자에 대한 예시입니다:

``` js
{
  arguments: [
    {name: 'layout', desc: 'Post layout'},
    {name: 'title', desc: 'Post title'}
  ]
}
```

### 옵션

Console 명령어의 각 옵션에 대한 예시입니다:

``` js
{
  options: [
    {name: '-r, --replace', desc: 'Replace existing files'}
  ]
}
```

### 설명

Console 명령어에 대한 더 자세한 정보입니다.

## 예시

``` js
hexo.extend.console.register('config', 'Display configuration', function(args){
  console.log(hexo.config);
});
```

[Minimist]: https://github.com/substack/minimist
