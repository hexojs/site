title: 過濾器（Filter）
---
過濾器用於修改特定資料，Hexo 將資料依序傳給過濾器，而過濾器可以針對資料進行修改，這個概念是從 [WordPress](http://codex.wordpress.org/Plugin_API#Filters) 借來的。

## 概要

``` js
hexo.extend.filter.register(type, function(){
  // ...
}, priority);
```

您可指定過濾器的優先度 `priority`，`priority` 值越低的過濾器會越先執行，預設的 `priority` 是 10。

## 執行過濾器

``` js
hexo.extend.filter.exec(type, data, options);
hexo.extend.filter.execSync(type, data, options);
```

選項 | 描述
--- | ---
`context` | Context
`args` | 參數。必須為陣列。

`data` 會作為第一個參數傳入每個過濾器，而您可在過濾器中透過回傳值改變下一個過濾器中的 `data`，如果什麼都沒回傳的話則會保持原本的 `data`。您還可使用 `args` 指定過濾器的其他參數。舉例來說：

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

您也可使用以下方法來執行過濾器：

``` js
hexo.execFilter(type, data, options);
hexo.execFilterSync(type, data, options);
```

## 移除過濾器

``` js
hexo.extend.filter.unregister(type, filter);
```

## 過濾器列表

以下是 Hexo 所使用的過濾器。

### before_post_render

在文章開始渲染前執行。您可參考 [文章渲染](posts.html#渲染) 以瞭解執行順序。

舉例來說，把標題轉為小寫：

``` js
hexo.extend.filter.register('before_post_render', function(data){
  data.title = data.title.toLowerCase();
  return data;
});
```

### after_post_render

在文章渲染完成後執行。您可參考 [文章渲染](posts.html#渲染) 以瞭解執行順序。

舉例來說，把 `@username` 取代為 Twitter 的使用者連結。

``` js
hexo.extend.filter.register('after_post_render', function(data){
  data.content = data.content.replace(/@(\d+)/, '<a href="http://twitter.com/$1">#$1</a>');
  return data;
});
```

### before_exit

在 Hexo 即將結束時執行，也就是在 `hexo.exit` 被呼叫後執行。

``` js
hexo.extend.filter.register('before_exit', function(){
  // ...
});
```

### before_generate

在產生器執行開始前執行。

``` js
hexo.extend.filter.register('before_generate', function(){
  // ...
});
```

### after_generate

在產生器執行結束後執行。

``` js
hexo.extend.filter.register('after_generate', function(){
  // ...
});
```

### template_locals

修改模板的 [區域變數](../docs/variables.html)。

舉例來說，在模板的區域變數中新增目前的時間：

``` js
hexo.extend.filter.register('template_locals', function(locals){
  locals.now = Date.now();
  return locals;
});
```

### after_init

在 Hexo 初始化完成後執行，也就是在 `hexo.init` 執行完成後執行。

``` js
hexo.extend.filter.register('after_init', function(){
  // ...
});
```

### new_post_path

用來決定新建文章的路徑，在建立文章時執行。

``` js
hexo.extend.filter.register('new_post_path', function(data, replace){
  // ...
});
```

### post_permalink

用來決定文章的永久連結。

``` js
hexo.extend.filter.register('post_permalink', function(data){
  // ...
});
```

### after_render

在渲染後執行，您可參考 [渲染](rendering.html#after_render_過濾器) 以瞭解更多資訊。

### server_middleware

新增伺服器的 Middleware。`app` 是一個 [Connect] 實例。

舉例來說，在回應標頭中新增 `X-Powered-By: Hexo`。

``` js
hexo.extend.filter.register('server_middleware', function(app){
  app.use(function(req, res, next){
    res.setHeader('X-Powered-By', 'Hexo');
    next();
  });
});
```

[Connect]: https://github.com/senchalabs/connect