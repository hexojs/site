---
title: Server
---
## [hexo-server]

With the release of Hexo 3, the server has been separated from the main module. To start using the server, you will first have to install [hexo-server].

``` bash
$ npm install hexo-server --save
```

Once the server has been installed, run the following command to start the server. Your website will run at `http://localhost:4000` by default. When the server is running, Hexo will watch for file changes and update automatically so it's not necessary to manually restart the server.

``` bash
$ hexo server
```

If you want to change the port or if you're encountering `EADDRINUSE` errors, use the `-p` option to set a different port.

``` bash
$ hexo server -p 5000
```

### Static Mode

In static mode, only files in the `public` folder will be served and file watching is disabled. You have to run `hexo generate` before starting the server. Usually used in production.

``` bash
$ hexo server -s
```

### Custom IP

Hexo runs the server at `0.0.0.0` by default. You can override the default IP setting.

``` bash
$ hexo server -i 192.168.1.1
```

## Pow

[Pow] is a zero-config Rack server for Mac.

### Install

``` bash
$ curl get.pow.cx | sh
```

### Setup

Symlink the folder into `~/.pow`

``` bash
$ cd ~/.pow
$ ln -s /path/to/myapp
```

Your website will be up and running at `http://myapp.test`. The URL is based on the name of the symlink.

[hexo-server]: https://github.com/hexojs/hexo-server
[Pow]: http://pow.cx/
