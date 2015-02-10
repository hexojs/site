title: Server
---
## [hexo-server]

Hexo 3.0 把伺服器獨立成個別模組，您必須先安裝 [hexo-server] 才能使用。

``` bash
$ npm install hexo-server --save
```

安裝完畢後，輸入以下指令以啟動伺服器，您的網站會在 `http://localhost:4000`，在伺服器啟動期間，Hexo 會監看檔案變動並自動更新，您無須重啟伺服器。

``` bash
$ hexo server
```

如果您想要變更連接埠，或是在執行時遇到了 `EADDRINUSE` 錯誤，可以在執行時使用 `-p` 選項指定其他連接埠，如下：

``` bash
$ hexo server -p 5000
```

### 靜態模式

在靜態模式下，伺服器只會處理 `public` 資料夾內的檔案，而且不會處理檔案變動，在執行時，您應該先自行執行 `hexo generate`，此模式通常用於生產環境（production mode）下。

``` bash
$ hexo server -s
```

### 自定 IP

伺服器預設運作在 `0.0.0.0`，您可以覆蓋預設的 IP 設定，如下：

``` bash
$ hexo server -i 192.168.1.1
```

## Pow

[Pow](http://pow.cx/) 是一個 Mac 系統上的零配置 Rack 伺服器，它也可作為一個簡單易用的靜態檔案伺服器來使用。

### 安裝

``` bash
$ curl get.pow.cx | sh
```

### 設定

在 `~/.pow` 資料夾建立連結（symlink）。

``` bash
$ cd ~/.pow
$ ln -s /path/to/myapp
```

您的網站將會執行於 `http://myapp.dev`，網址是根據連結名稱而定。

## Forever / PM2

To keep the Hexo server alive, you can use [Forever] or [PM2].

Hexo can be run programmatically since 2.5. So you can call Hexo in JavaScript instead of CLI.

**1. Install Hexo in the folder of your site.**

``` bash
$ npm install hexo --save
```

**2. Add a JavaScript file with the following content.**

``` js app.js
require('hexo').init({command: 'server'});
```

**3. Run the JavaScript file you just created with [Forever] or [PM2].**

PM2 has a [known issue](https://github.com/Unitech/pm2#known-bugs-and-workarounds) that the port isn't released when the script is stopped unless PM2 is killed. You have to run the script in fork mode.

``` bash
$ forever start app.js
$ pm2 start app.js -x
```

[hexo-server]: https://github.com/hexojs/hexo-server
[Connect]: https://github.com/senchalabs/connect
[morgan]: https://github.com/expressjs/morgan
[Forever]: https://github.com/nodejitsu/forever
[PM2]: https://github.com/Unitech/pm2