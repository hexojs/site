title: 服务器
---
## [hexo-server]

Hexo 3.0 把服务器独立成了个别模块，您必须先安装 [hexo-server] 才能使用。

``` bash
$ npm install hexo-server --save
```

安装完成后，输入以下命令以启动服务器，您的网站会在 `http://localhost:4000` 下启动。在服务器启动期间，Hexo 会监视文件变动并自动更新，您无须重启服务器。

``` bash
$ hexo server
```

如果您想要更改端口，或是在执行时遇到了 `EADDRINUSE` 错误，可以在执行时使用 `-p` 选项指定其他端口，如下：

``` bash
$ hexo server -p 5000
```

### 静态模式

在静态模式下，服务器只处理 `public` 文件夹内的文件，而不会处理文件变动，在执行时，您应该先自行执行 `hexo generate`，此模式通常用于生产环境（production mode）下。

``` bash
$ hexo server -s
```

### 自定义 IP

服务器默认运行在 `0.0.0.0`，您可以覆盖默认的 IP 设置，如下：

``` bash
$ hexo server -i 192.168.1.1
```

## Pow

[Pow](http://pow.cx/) 是一个 Mac 系统上的零配置 Rack 服务器，它也可以作为一个简单易用的静态文件服务器来使用。

### 安装

``` bash
$ curl get.pow.cx | sh
```

### 设置

在 `~/.pow` 文件夹建立链接（symlink）。

``` bash
$ cd ~/.pow
$ ln -s /path/to/myapp
```

您的网站将会在 `http://myapp.dev` 下运行，网址根据链接名称而定。

## Forever / PM2

为了让 Hexo 服务保持链接，你可以使用 [Forever] 或 [PM2]。

Hexo 从 2.5 版本开始，就可以运行在编程模式下，所以你可以在 JavaScript 中调用 Hexo，而不是使用 CLI。

**1. 在你的站点文件夹中安装 Hexo。**

``` bash
$ npm install hexo --save
```

**2. 新建一个 JavaScript 文件并编写以下代码。**

``` js app.js
require('hexo').init({command: 'server'});
```

**3. 使用刚刚创建的 [Forever] 或 [PM2] 运行这个 JavaScript 文件。**

PM2 的一个 [已知问题] 是，当停止运行脚本后，除非中断 PM2，否则端口不能自动释放。你必须在 fork 模式下运行脚本。

``` bash
$ forever start app.js
$ pm2 start app.js -x
```

[hexo-server]: https://github.com/hexojs/hexo-server
[Connect]: https://github.com/senchalabs/connect
[morgan]: https://github.com/expressjs/morgan
[Forever]: https://github.com/nodejitsu/forever
[PM2]: https://github.com/Unitech/pm2