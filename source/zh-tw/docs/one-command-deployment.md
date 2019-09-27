---
title: 佈署
---

{% youtube ZIltKlkG4S0 %}

Hexo 提供了快速方便的一鍵佈署功能，讓您只需一個指令就能將網站佈署到伺服器上。

``` bash
$ hexo deploy
```

在開始之前，您必須先在 `_config.yml` 中修改設定，一個正確的部署設定中至少要有 `type` 欄位，例如：

``` yaml
deploy:
  type: git
```

您可同時使用多個 deployer，Hexo 會依照順序執行每個 deployer。

``` yaml
deploy:
- type: git
  repo: 
- type: heroku
  repo:
```

## Git

1. 安裝 [hexo-deployer-git]。

``` bash
$ npm install hexo-deployer-git --save
```

2. 修改_config.yml設定(下面的註解顯示了參數的範例)。

``` yaml
deploy:
  type: git
  repo: <repository url> #https://bitbucket.org/JohnSmith/johnsmith.bitbucket.io
  branch: [branch] #published
  message: [message] #leave this blank
```

選項 | 描述
--- | ---
`repo` | 儲存庫（Repository）網址
`branch` | 分支名稱。如果您使用的是 GitHub 或 GitCafe 的話，程式會嘗試自動偵測。
`message` | 自定提交訊息 (預設是 `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`)

3. 上傳你的網站`./node_modules/.bin/hexo clean && ./node_modules/.bin/hexo deploy` (或 `hexo clean && hexo deploy`，如果你把HEXO安裝在本機的話).
4. 在Github/BitBucket/Gitlab前往妳的repo設定，並將你的主要分支從`master`設為`published`(或著任何你在_config.yml裡設定的名子)。現在你的網站就是你的帳號首頁。

## Heroku

安裝 [hexo-deployer-heroku]。

``` bash
$ npm install hexo-deployer-heroku --save
```

修改設定。

``` yaml
deploy:
  type: heroku
  repo: <repository url>
  message: [message]
```

選項 | 描述
--- | ---
`repo` | Heroku 儲存庫（Repository）網址
`message` | 自定提交訊息 (預設是 `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`)

## Rsync

安裝 [hexo-deployer-rsync]。

``` bash
$ npm install hexo-deployer-rsync --save
```

修改設定。

``` yaml
deploy:
  type: rsync
  host: <host>
  user: <user>
  root: <root>
  port: [port]
  delete: [true|false]
  verbose: [true|false]
  ignore_errors: [true|false]
```

選項 | 描述 | 預設值
--- | --- | ---
`host` | 遠端主機的位址 |
`user` | 使用者名稱 |
`root` | 遠端主機的根目錄 |
`port` | 連接埠 | 22
`delete` | 刪除遠端主機上的舊檔案 | true
`verbose` | 顯示除錯訊息 | true
`ignore_errors` | 忽略錯誤 | false

## OpenShift

安裝 [hexo-deployer-openshift]。

``` bash
$ npm install hexo-deployer-openshift --save
```

修改設定。

``` yaml
deploy:
  type: openshift
  repo: <repository url>
  message: [message]
```

選項 | 描述
--- | ---
`repo` | OpenShift 儲存庫（Repository）網址
`message` | 自定提交訊息 (預設是 `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`)

## FTPSync

安裝 [hexo-deployer-ftpsync]。

``` bash
$ npm install hexo-deployer-ftpsync --save
```

修改設定。

``` yaml
deploy:
  type: ftpsync
  host: <host>
  user: <user>
  pass: <password>
  remote: [remote]
  port: [port]
  ignore: [ignore]
  connections: [connections]
  verbose: [true|false]
```

選項 | 描述 | 預設值
--- | --- | ---
`host` | 遠端主機位址 |
`user` | 使用者名稱 |
`pass` | 密碼 |
`remote` | 遠端主機的根目錄 | `/`
`port` | 連接埠 | 21
`ignore` | 忽略本機或遠端的檔案 |
`connections` | 連接數 | 1
`verbose` | 顯示除錯訊息 | false

## 其他方法

Hexo 產生的所有檔案都放在 `public` 資料夾，您可以將它們拷貝到您喜歡的地方。

[hexo-deployer-git]: https://github.com/hexojs/hexo-deployer-git
[hexo-deployer-heroku]: https://github.com/hexojs/hexo-deployer-heroku
[hexo-deployer-rsync]: https://github.com/hexojs/hexo-deployer-rsync
[hexo-deployer-openshift]: https://github.com/hexojs/hexo-deployer-openshift
[hexo-deployer-ftpsync]: https://github.com/hexojs/hexo-deployer-ftpsync
