---
title: 服务器
---

## [hexo-server][]

With the release of Hexo 3, the server has been separated from the main module. Hexo 3.0 把服务器独立成了个别模块，您必须先安装 [hexo-server][] 才能使用。

```bash
$ npm install hexo-server --save
```

Once the server has been installed, run the following command to start the server. 安装完成后，输入以下命令以启动服务器，您的网站会在 `http://localhost:4000` 下启动。 在服务器启动期间，Hexo 会监视文件变动并自动更新，您无须重启服务器。

```bash
$ hexo server
```

如果您想要更改端口，或是在执行时遇到了 `EADDRINUSE` 错误，可以在执行时使用 `-p` 选项指定其他端口，如下：

```bash
$ hexo server -p 5000
```

### 静态模式

In static mode, only files in the `public` folder will be served and file watching is disabled. You have to run `hexo generate` before starting the server. Usually used in production.

```bash
$ hexo server -s
```

### 自定义 IP

服务器默认运行在 `0.0.0.0`，您可以覆盖默认的 IP 设置，如下： You can override the default IP setting.

```bash
$ hexo server -i 192.168.1.1
```

[hexo-server]: https://github.com/hexojs/hexo-server
