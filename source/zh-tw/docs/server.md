---
title: Server
---

## [hexo-server][]

With the release of Hexo 3, the server has been separated from the main module. Hexo 3 把伺服器獨立成個別模組，您必須先安裝 [hexo-server][] 才能使用。

```bash
$ npm install hexo-server --save
```

Once the server has been installed, run the following command to start the server. Your website will run at `http://localhost:4000` by default. When the server is running, Hexo will watch for file changes and update automatically so it's not necessary to manually restart the server.

```bash
$ hexo server
```

如果您想要變更連接埠，或是在執行時遇到了 `EADDRINUSE` 錯誤，可以在執行時使用 `-p` 選項指定其他連接埠。

```bash
$ hexo server -p 5000
```

### 靜態模式

In static mode, only files in the `public` folder will be served and file watching is disabled. 在靜態模式下，伺服器只會處理 `public` 資料夾內的檔案，而且不會處理檔案變動，在執行時，您應該先自行執行 `hexo generate`，此模式通常用於生產環境（production）下。 Usually used in production.

```bash
$ hexo server -s
```

### 自定 IP

Hexo runs the server at `0.0.0.0` by default. You can override the default IP setting.

```bash
$ hexo server -i 192.168.1.1
```

[hexo-server]: https://github.com/hexojs/hexo-server
