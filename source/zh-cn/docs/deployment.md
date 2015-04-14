title: 部署
---
Hexo 提供了快速方便的一键部署功能，让您只需一条命令就能将网站部署到服务器上。

``` bash
$ hexo deploy
```

在开始之前，您必须先在 `_config.yml` 中修改参数，一个正确的部署配置中至少要有 `type` 参数，例如：

``` yaml
deploy:
  type: git
```

您可同时使用多个 deployer，Hexo 会依照顺序执行每个 deployer。

``` yaml
deploy:
- type: git
  repo: 
- type: heroku
  repo:
```

## Git

安装 [hexo-deployer-git]。

``` bash
$ npm install hexo-deployer-git --save
```

修改配置。

``` yaml
deploy:
  type: git
  repo: <repository url>
  branch: [branch]
  message: [message]
```

参数 | 描述
--- | ---
`repo` | 库（Repository）地址
`branch` | 分支名称。如果您使用的是 GitHub 或 GitCafe 的话，程序会尝试自动检测。
`message` | 自定提交信息 (默认为 `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`)

## Heroku

安装 [hexo-deployer-heroku]。

``` bash
$ npm install hexo-deployer-heroku --save
```

修改配置。

``` yaml
deploy:
  type: heroku
  repo: <repository url>
  message: [message]
```

参数 | 描述
--- | ---
`repo` | Heroku 库（Repository）地址
`message` | 自定提交信息 (默认为 `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`)

## Rsync

安装 [hexo-deployer-rsync]。

``` bash
$ npm install hexo-deployer-rsync --save
```

修改配置。

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

参数 | 描述 | 默认值
--- | --- | ---
`host` | 远程主机的地址 |
`user` | 使用者名称 |
`root` | 远程主机的根目录 |
`port` | 端口 | 22
`delete` | 删除远程主机上的旧文件 | true
`verbose` | 显示调试信息 | true
`ignore_errors` | 忽略错误 | false

## OpenShift

安装 [hexo-deployer-openshift]。

``` bash
$ npm install hexo-deployer-openshift --save
```

修改配置。

``` yaml
deploy:
  type: openshift
  repo: <repository url>
  message: [message]
```

参数 | 描述
--- | ---
`repo` | OpenShift 库（Repository）地址
`message` | 自定提交信息 (默认为 `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`)

## FTPSync

安装 [hexo-deployer-ftpsync]。

``` bash
$ npm install hexo-deployer-ftpsync --save
```

修改配置。

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

参数 | 描述 | 默认值
--- | --- | ---
`host` | 远程主机的地址 |
`user` | 使用者名称 |
`pass` | 密码 |
`remote` | 远程主机的根目录 | `/`
`port` | 端口 | 21
`ignore` | 忽略的文件或目录 |
`connections` | 使用的连接数 | 1
`verbose` | 显示调试信息 | false

## 其他方法

Hexo 生成的所有文件都放在 `public` 文件夹中，您可以将它们复制到您喜欢的地方。

[hexo-deployer-git]: https://github.com/hexojs/hexo-deployer-git
[hexo-deployer-heroku]: https://github.com/hexojs/hexo-deployer-heroku
[hexo-deployer-rsync]: https://github.com/hexojs/hexo-deployer-rsync
[hexo-deployer-openshift]: https://github.com/hexojs/hexo-deployer-openshift
[hexo-deployer-ftpsync]: https://github.com/hexojs/hexo-deployer-ftpsync
