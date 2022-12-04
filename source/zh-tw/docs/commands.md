---
title: 指令
---

{% youtube mgdXi5npArQ %}

## init

``` bash
$ hexo init [folder]
```

建立一個新的網站。如果沒有設定 `folder` 的話，Hexo 會在目前的資料夾建立網站。

This command is a shortcut that runs the following steps:

1. Git clone [hexo-starter](https://github.com/hexojs/hexo-starter) including [hexo-theme-landscape](https://github.com/hexojs/hexo-theme-landscape) into the current directory or a target folder if specified.
2. Install dependencies using a package manager: [Yarn 1](https://classic.yarnpkg.com/lang/en/), [pnpm](https://pnpm.js.org) or [npm](https://docs.npmjs.com/cli/install), whichever is installed; if there are more than one installed, the priority is as listed. npm is bundled with [Node.js](/docs/#Install-Node-js) by default.

## new

``` bash
$ hexo new [layout] <title>
```

建立一篇新的文章。如果沒有設定 `layout` 的話，則會使用 [_config.yml](configuration.html) 中的 `default_layout` 設定代替。如果標題包含空格的話，請使用引號括起來。

## generate

``` bash
$ hexo generate
```

產生靜態檔案。

選項 | 描述
--- | ---
`-d`, `--deploy` | 產生完成即部署網站
`-w`, `--watch` | 監看檔案變更

## publish

``` bash
$ hexo publish [layout] <filename>
```

發表草稿。

## server

``` bash
$ hexo server
```

啟動伺服器，預設是 `http://localhost:4000/`。

選項 | 描述
--- | ---
`-p`, `--port` | 覆蓋連接埠設定
`-s`, `--static` | 只使用靜態檔案
`-l`, `--log` | 啟動記錄器，或覆蓋記錄格式

## deploy

``` bash
$ hexo deploy
```

部署網站。

選項 | 描述
--- | ---
`-g`, `--generate` | 部署網站前先產生靜態檔案

## render

``` bash
$ hexo render <file> [file2] ...
```

渲染檔案。

選項 | 描述
--- | ---
`-o`, `--output` | 輸出位置

## migrate

``` bash
$ hexo migrate <type>
```

從其他系統 [轉移內容](migration.html)。

## clean

``` bash
$ hexo clean
```

清除快取檔案 (`db.json`) 和已產生的靜態檔案 (`public`)。

## list

``` bash
$ hexo list <type>
```

列出網站資料。

## version

``` bash
$ hexo version
```

顯示版本資訊。

## 選項

### 安全模式

``` bash
$ hexo --safe
```

在安全模式下，不會載入外掛和腳本。當您在安裝新外掛後遭遇問題時，可以嘗試以安全模式重新執行。

### 除錯模式

``` bash
$ hexo --debug
```

在終端機中顯示除錯訊息並儲存記錄檔到 `debug.log`。當您碰到問題時，試著以除錯模式重新執行一次，並 [把除錯訊息貼到 GitHub](https://github.com/hexojs/hexo/issues/new)。

### 安靜模式

``` bash
$ hexo --silent
```

隱藏終端機的訊息。

### 自訂配置檔的路徑

``` bash
$ hexo --config custom.yml
```

自訂配置檔的路徑而不是使用 `_config.yml`。此參數也接受以逗號分隔的 JSON 或 YAML 檔列表字串 (不得含有空格)，它們將會被合併產生一個 `_multiconfig.yml`。

``` bash
$ hexo --config custom.yml,custom2.json
```

### 顯示草稿

``` bash
$ hexo --draft
```

顯示 `source/_drafts` 資料夾中的草稿文章。

### 自定 CWD

``` bash
$ hexo --cwd /path/to/cwd
```

自訂目前工作目錄（Current working directory）的路徑。
