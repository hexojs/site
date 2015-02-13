title: Events
---
## Overview

Hexo 继承了 Node.js 的 EventEmitter。您可以提交或发布特定事件。比如：

``` js
hexo.on('ready', function(){
  console.log('Hexo is ready to go!');
});
```

## 事件

### ready

在 Hexo 初始化之后调用且只能调用一次。

### generateBefore

在生成之前调用。

### generateAfter

在生成之后调用。

### processBefore

在逻辑处理前调用。

参数 | 描述
--- | ---
`path` | 处理器的基本路径

### processAfter

在逻辑处理后调用。

参数 | 描述
--- | ---
`path` | 处理器的基本路径

### new

在新建文章后调用。

参数 | 描述
--- | ---
`path` | 新建文章的绝对路径
`content` | 新建文章的内容

### server

在服务器启动后调用。

### exit

在 Hexo 退出后调用。

### deployBefore

在部署前调用。

### deployAfter

在部署后调用。