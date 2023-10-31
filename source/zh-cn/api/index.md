---
title: API
---
本文件提供您更丰富的 API 信息，使您更容易修改 Hexo 源代码或编写插件。如果您只是想查询 Hexo 的基本使用方法，请参阅 [文档](../docs/)。

在开始之前，请注意本文件仅适用于 Hexo 3 及以上版本。

## 初始化

首先，我们必须建立一个 Hexo 实例（instance），第一个参数是网站的根目录，也就是 `base_dir`，而第二个参数则是初始化的选项。接着执行 `init` 方法后，Hexo 会加载插件及配置文件。

``` js
var Hexo = require('hexo');
var hexo = new Hexo(process.cwd(), {});

hexo.init().then(function(){
  // ...
});
```

参数 | 描述 | 默认值
--- | --- | ---
`debug` | 开启调试模式。在终端中显示调试信息，并在根目录中存储 `debug.log` 日志文件。| `false`
`safe` | 开启安全模式。不加载任何插件。| `false`
`silent` | 开启安静模式。不在终端中显示任何信息。| `false`
`config` | 指定配置文件的路径。| `_config.yml`
`draft` / `drafts`| 是否将草稿加入到文章列表中。<br>例如在 `hexo.locals.get('posts')` 中获取草稿内容 | _config.yml 中 `render_drafts` 的值

## 加载文件

Hexo 提供了两种方法来加载文件：`load`, `watch`，前者用于加载 `source` 文件夹内的所有文件及主题资源；而后者除了执行 `load` 以外，还会继续监视文件变动。

这两个方法实际上所做的，就是加载文件列表，并把文件传给相对应的处理器（Processor），当文件全部处理完毕后，就会执行生成器（Generator）来建立路由。

``` js
hexo.load().then(function(){
  // ...
});

hexo.watch().then(function(){
  // 之后可以调用 hexo.unwatch()，停止监视文件
});
```

## 执行指令

您可以通过 `call` 方法来调用控制台（Console），第一个参数是控制台的名称，而第二个参数是选项——根据不同控制台有所不同。

``` js
hexo.call('generate', {}).then(function(){
  // ...
});
```

## 退出

无论控制台命令完成与否，都应调用 `exit` 方法。这样 Hexo 就能优雅地退出，并完成保存数据库等重要工作。

``` js
hexo.call('generate').then(function(){
  return hexo.exit();
}).catch(function(err){
  return hexo.exit(err);
});
```
