---
title: 服务器
---

## [hexo-server][]

Hexo 3.0 把服务器独立成了个别模块。 您必须先安装 [hexo-server][] 才能使用。

```bash
$ npm install hexo-server --save
```

安装完成后，输入以下命令以启动服务器。 默认情况下，您的网站会在 `http://localhost:4000` 下启动。 在服务器启动期间，Hexo 会监视文件变动并自动更新，您无须重启服务器。

```bash
$ hexo server
```

如果您想要更改端口，或是在执行时遇到了 `EADDRINUSE` 错误，可以在执行时使用 `-p` 选项指定其他端口，如下：

```bash
$ hexo server -p 5000
```

### 静态模式

在静态模式下，服务器只处理 `public` 文件夹中的文件，并且不会监视文件变化。 您必须在启动服务器之前运行 `hexo generate`。 通常用于生产环境。

```bash
$ hexo server -s
```

### 自定义 IP

Hexo 服务器默认运行在 `0.0.0.0`。 您可以覆盖默认的 IP 设置。

```bash
$ hexo server -i 192.168.1.1
```

[hexo-server]: https://github.com/hexojs/hexo-server
