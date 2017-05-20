title: 路由
---
路由儲存了網站中所用到的所有路徑。

## 取得路徑

`get` 方法會傳回一個 [Stream]，例如把該路徑的資料儲存到某個指定位置。

``` js
var data = hexo.route.get('index.html');
var dest = fs.createWriteStream('somewhere');

data.pipe(dest);
```

## 設定路徑

您可在 `set` 方法中使用字串、[Buffer] 或函數，如下：

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

您還可設定該路徑是否更新，這樣在生成檔案時便能忽略未更動的檔案，加快生成時間。

``` js
hexo.route.set('index.html', {
    data: 'index',
    modified: false
});

// hexo.route.isModified('index.html') => false
```

## 移除路徑

``` js
hexo.route.remove('index.html');
```

## 取得路由表

``` js
hexo.route.list();
```

## 格式化路徑

`format` 方法可將字串轉為合法的路徑。

``` js
hexo.route.format('archives/');
// archives/index.html
```

[Stream]: http://nodejs.org/api/stream.html
[Buffer]: http://nodejs.org/api/buffer.html