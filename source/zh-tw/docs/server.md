title: Server
---
## [hexo-server]

Hexo 3 把伺服器獨立成個別模組，您必須先安裝 [hexo-server] 才能使用。

``` bash
$ npm install hexo-server --save
```

安裝完畢後，輸入以下指令以啟動伺服器，您的網站預設會執行於 `http://localhost:4000`，在伺服器啟動期間，Hexo 會監看檔案變動並自動更新，您無須重啟伺服器。

``` bash
$ hexo server
```

如果您想要變更連接埠，或是在執行時遇到了 `EADDRINUSE` 錯誤，可以在執行時使用 `-p` 選項指定其他連接埠。

``` bash
$ hexo server -p 5000
```

### 靜態模式

在靜態模式下，伺服器只會處理 `public` 資料夾內的檔案，而且不會處理檔案變動，在執行時，您應該先自行執行 `hexo generate`，此模式通常用於生產環境（production）下。

``` bash
$ hexo server -s
```

### 自定 IP

伺服器預設運作在 `0.0.0.0`，您可以覆蓋預設的 IP 設定。

``` bash
$ hexo server -i 192.168.1.1
```

## Pow

[Pow] 是一個 Mac 系統上的零配置 Rack 伺服器，它也可作為一個簡單易用的靜態檔案伺服器來使用。

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

[hexo-server]: https://github.com/hexojs/hexo-server
[Pow]: http://pow.cx/