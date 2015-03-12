title: 產生器（Generator）
---
產生器根據處理後的原始檔案建立路由。

## 概要

``` js
hexo.extend.generator.register(name, function(locals){
  // ...
});
```

在函數中會傳入一個 `locals` 參數，等同於 [網站變數](variables.html#網站變數)，請盡量利用此參數取得網站資料，避免直接存取資料庫。

## 更新路由

``` js
hexo.extend.generator.register('test', function(locals){
  // Object
  return {
    path: 'foo',
    data: 'foo'
  };
  
  // Array
  return [
    {path: 'foo', data: 'foo'},
    {path: 'bar', data: 'bar'}
  ];
});
```

屬性 | 描述
--- | ---
`path` | 路徑。不可包含開頭的 `/`。
`data` | 資料
`layout` | 佈局。指定用於渲染的模板，可為字串或陣列，如果省略此屬性的話則會直接輸出 `data`。

在原始檔案更新時，Hexo 會執行所有產生器並重建路由，**請直接回傳資料，不要直接操作路由**。

## 範例

### 彙整頁面

在 `archives/index.html` 建立一彙整頁面，把所有文章當作資料傳入模板內，這個資料也就等同於模板中的 `page` 變數。

然後，設定 `layout` 屬性好讓 Hexo 使用主題模板來渲染，在此例中同時設定了兩個佈局，當 `archive` 佈局不存在時，會繼續嘗試 `index` 佈局。

``` js
hexo.extend.generator.register('archive', function(locals){
  return {
    path: 'archives/index.html',
    data: locals.posts,
    layout: ['archive', 'index']
  }
});
```

### 有分頁的彙整頁面

您可透過 [hexo-pagination] 這個方便的官方工具程式來輕鬆建立分頁彙整。

``` js
var pagination = require('hexo-pagination');

hexo.extend.generator.register('archive', function(locals){
  return pagination('archives/index.html', locals.posts, {
    perPage: 10,
    layout: ['archive', 'index'],
    data: {}
  });
});
```

### 產生所有文章

遍歷 `locals.posts` 中的所有文章並產生所有文章的路由。

``` js
hexo.extend.generator.register('post', function(locals){
  return locals.posts.map(function(post){
    return {
      path: post.path,
      data: post,
      layout: 'post'
    };
  });
});
```

### 複製檔案

這次不直接在 `data` 中傳回資料而是傳回一個函數，如此一來這個路由唯有在使用時才會建立 `fs.ReadStream`。

``` js
var fs = require('hexo-fs');

hexo.extend.generator.register('asset', function(locals){
  return {
    path: 'file.txt',
    data: function(){
      return fs.createReadStream('path/to/file.txt')
    }
  };
});
```

[hexo-pagination]: https://github.com/hexojs/hexo-pagination