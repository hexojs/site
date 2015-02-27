title: API
---
本文件提供您更豐富的 API 資訊，使您更容易修改 Hexo 原始碼或撰寫外掛。如果您只是想要查詢關於 Hexo 的基本使用方法，請參閱 [文件](../docs/)。

在開始之前，請注意本文件僅適用於 Hexo 3 及以上版本。

## 初始化

首先，我們必須建立一個 Hexo 實例（instance），第一個參數是網站的根目錄，也就是 `base_dir`，而第二個參數則是初始化的選項。接著執行 `init` 方法後，Hexo 會載入外掛及配置檔案。

``` js
var Hexo = require('hexo');
var hexo = new Hexo(process.cwd(), {});

hexo.init().then(function(){
  // ...
});
```

選項 | 描述 | 預設值
--- | --- | ---
`debug` | 開啟除錯模式。在終端機中顯示除錯訊息，並在根目錄中儲存 `debug.log` 記錄檔。| `false`
`safe` | 開啟安全模式。不要載入任何外掛。| `false`
`silent` | 開啟安靜模式。不要在終端機中顯示任何訊息。| `false`
`config` | 指定配置檔案的路徑。| `_config.yml`

## 載入檔案

Hexo 提供了兩種方法來載入檔案：`load`, `watch`，前者用於載入 `source` 資料夾內的所有檔案及主題資料；而後者除了執行 `load` 以外，還會繼續監看檔案變動。

這兩個方法實際上所做的，就是載入檔案列表，並把檔案傳給相對應的處理器（Processor），當檔案全部處理完畢後，就執行產生器（Generator）來建立路由。

``` js
hexo.load().then(function(){
  // ...
});

hexo.watch().then(function(){
  // 之後可呼叫 hexo.unwatch() 停止檔案監看
});
```

## 執行指令

您可透過 `call` 方法來呼叫控制台（Console），第一個參數是控制台的名稱，而第二個參數是選項，根據不同控制台而有所不同。

``` js
hexo.call('generate', {}).then(function(){
  // ...
});
```

## 結束

當指令完畢後，請執行 `exit` 方法讓 Hexo 完成結束前的準備工作（如儲存資料庫）。

``` js
hexo.call('generate').then(function(){
  return hexo.exit();
}).catch(function(err){
  return hexo.exit(err);
});
```