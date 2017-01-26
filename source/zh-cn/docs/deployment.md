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

{% note warn 缩进 %}
YAML依靠缩进来确定元素间的从属关系。因此，请确保每个deployer的缩进长度相同，并且使用空格缩进。
{% endnote %}

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
`message` | 自定义提交信息 (默认为 `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`)

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

{% note info rsync部署模块的工作方式 %}
需要注意的是，要求您提供的实际上是一个能通过SSH登陆远程主机的Linux用户。Hexo会自动处理关于rsync使用的一切操作。因此，您需要在远程主机上为您的Hexo站点建立一个用户，并允许其通过SSH登陆。不过，这里的`port`，的确是指rsync监听的端口，请确保防火墙打开了该端口。
{% endnote %}

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

{% note warn FTP部署可能出现的问题 %}
您可能需要预先通过其他方式将所有文件上传到远程主机中。否则初次使用ftpsync插件就可能出现报错。另外，由于FTP协议的特征，它每传送一个文件就需要一次握手，相对速度较慢。
{% endnote %}

## 其他方法

Hexo 生成的所有文件都放在 `public` 文件夹中，您可以将它们复制到您喜欢的地方。

[hexo-deployer-git]: https://github.com/hexojs/hexo-deployer-git
[hexo-deployer-heroku]: https://github.com/hexojs/hexo-deployer-heroku
[hexo-deployer-rsync]: https://github.com/hexojs/hexo-deployer-rsync
[hexo-deployer-openshift]: https://github.com/hexojs/hexo-deployer-openshift
[hexo-deployer-ftpsync]: https://github.com/hexojs/hexo-deployer-ftpsync


