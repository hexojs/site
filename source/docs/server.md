title: Server
---
## [hexo-server]

Server was separated from the main module in Hexo 3. You have to install [hexo-server] before start using.

``` bash
$ npm install hexo-server --save
```

Once the server is installed, run the following command to start the server. Your website will run at `http://localhost:4000` by default. When server is running, Hexo will watch file changes and update automatically. You don't need to restart the server.

``` bash
$ hexo server
```

If you want to modify the port or encounter `EADDRINUSE` error. You can add `-p` option to set other port.

``` bash
$ hexo server -p 5000
```

### Static Mode

In static mode, only files in `public` folder will be served and file watching is disabled. You have to run `hexo generate` before starting the server. Usually used in production.

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

Your website will be up and running at `http://myapp.dev`. The URL is based on the name of symlink.

[hexo-server]: https://github.com/hexojs/hexo-server
[Pow]: http://pow.cx/