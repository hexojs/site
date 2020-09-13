---
title: Tag
---
태그는 사용자가 포스트 내부에 정보(snippet)을 쉽고 빠르게 삽입할 수 있게 도와줍니다.

## 개요

``` js
hexo.extend.tag.register(name, function(args, content){
  // ...
}, options);
```

`args`, `content` 두 개의 인자가 함수를 통해 전달됩니다. `args`는 태그 플러그인으로 전달되는 인자들을 포함하고 `content`는 태그 플러그인에서 사용할 포장된 내용(wrapped content)을 나타냅니다.

Hexo 3에서 비동기 렌더링을 도입한 이후, 우리는 렌더링을 위해 [Nunjucks]를 사용합니다. 이 동작은 [Swig]과는 조금 다를 수 있습니다.

## Unregister Tags

Use `unregister()` to replace existing [tag plugins](/docs/tag-plugins) with custom functions.

``` js
hexo.extend.tag.unregister(name);
```

**Example**

``` js
const tagFn = (args, content) => {
  content = 'something';
  return content;
};

// https://hexo.io/docs/tag-plugins#YouTube
hexo.extend.tag.unregister('youtube');

hexo.extend.tag.register('youtube', tagFn);
```

## 옵션

### ends

end 태그를 사용합니다. 기본값은 `false`입니다.

### async

비동기(async) 모드를 활성화 합니다. 기본값은 `false`입니다.

## 예시

### End 태그를 사용하지 않을 때

Youtube video를 삽입하는 예시입니다.

``` js
hexo.extend.tag.register('youtube', function(args){
  var id = args[0];
  return '<div class="video-container"><iframe width="560" height="315" src="http://www.youtube.com/embed/' + id + '" frameborder="0" allowfullscreen></iframe></div>';
});
```

### End 태그를 사용했을 때

Pull quote를 삽입하는 예시입니다.

``` js
hexo.extend.tag.register('pullquote', function(args, content){
  var className =  args.join(' ');
  return '<blockquote class="pullquote' + className + '">' + content + '</blockquote>';
}, {ends: true});
```

### 비동기 렌더링

파일을 삽입하는 예시입니다.

``` js
var fs = require('hexo-fs');
var pathFn = require('path');

hexo.extend.tag.register('include_code', function(args){
  var filename = args[0];
  var path = pathFn.join(hexo.source_dir, filename);

  return fs.readFile(path).then(function(content){
    return '<pre><code>' + content + '</code></pre>';
  });
}, {async: true});
```

## Front-matter and user configuration

Any of the following options is valid:

1.

``` js
hexo.extend.tag.register('foo', function (args) {
  const [firstArg] = args;

  // User config
  const { config } = hexo;
  const editor = config.author + firstArg;

  // Theme config
  const { config: themeCfg } = hexo.theme;
  if (themeCfg.fancybox) // do something...

  // Front-matter
  const { title } = this; // article's (post/page) title

  // Article's content
  const { _content } = this; // original content
  const { content } = this; // HTML-rendered content

  return 'foo';
});
```

2.

``` js index.js
hexo.extend.tag.register('foo', require('./lib/foo')(hexo));
```

``` js lib/foo.js
module.exports = hexo => {
  return function fooFn(args) {
    const [firstArg] = args;

    const { config } = hexo;
    const editor = config.author + firstArg;

    const { config: themeCfg } = hexo.theme;
    if (themeCfg.fancybox) // do something...

    const { title, _content, content } = this;

    return 'foo';
  };
};
```

[Nunjucks]: http://mozilla.github.io/nunjucks/
[Swig]: http://paularmstrong.github.io/swig/
