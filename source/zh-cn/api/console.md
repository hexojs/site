title: 控制台（Console）
---
控制台是 Hexo 与开发者之间沟通的桥梁。

## 概要

``` js
hexo.extend.console.register(name, desc, options, function(args){
  // ...
});
```

参数 | 描述
--- | ---
`name` | 名称
`desc` | 描述
`options`| 选项

在函数中会传入 `args` 参数，此参数是使用者在终端中所传入的参数，是一个经 [Minimist] 解析的对象。

## 选项

### usage

控制台的操作方法，例如：

``` js
{usage: '[layout] <title>'}
// hexo new [layout] <title>
```

### arguments

控制台各个参数的说明，例如：

``` js
{
  arguments: [
    {name: 'layout', desc: 'Post layout'},
    {name: 'title', desc: 'Post title'}
  ]
}
```

### options

控制台的选项，例如：

``` js
{
  options: [
    {name: '-r, --replace', desc: 'Replace existing files'}
  ]
}
```

### desc

控制台更详细的说明。

## 范例

``` js
hexo.extend.console.register('config', 'Display configuration', function(args){
  console.log(hexo.config);
});
```

[Minimist]: https://github.com/substack/minimist