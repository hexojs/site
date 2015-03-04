title: 控制台（Console）
---
控制台是 Hexo 與使用者之間溝通的橋樑。

## 概要

``` js
hexo.extend.console.register(name, desc, options, function(args){
  // ...
});
```

參數 | 描述
--- | ---
`name` | 名稱
`desc` | 描述
`options`| 選項

在函數中會傳入 `args` 參數，此參數是使用者在終端機所傳入的參數，是一個經 [Minimist] 解析的物件。

## 選項

### usage

控制台的操作方法，例如：

``` js
{usage: '[layout] <title>'}
// hexo new [layout] <title>
```

### arguments

控制台各個參數的說明，例如：

``` js
{
  arguments: [
    {name: 'layout', desc: 'Post layout'},
    {name: 'title', desc: 'Post title'}
  ]
}
```

### options

控制台的選項，例如：

``` js
{
  options: [
    {name: '-r, --replace', desc: 'Replace existing files'}
  ]
}
```

### desc

控制台更詳細的說明。

## 範例

``` js
hexo.extend.console.register('config', 'Display configuration', function(args){
  console.log(hexo.config);
});
```

[Minimist]: https://github.com/substack/minimist