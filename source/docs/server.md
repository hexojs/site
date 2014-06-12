title: Server
---
## Built-in Server

Hexo uses [Connect] as the built-in server. To start server, run the following command:

``` bash
$ hexo server
```

Your website will running at `http://localhost:4000`. You can edit the server port in `_config.yml` or use flags to override the default port. For example:

``` bash
$ hexo server -p 5000
```

Server will watch for file changes and update automatically. However, server won't update files in `public` folder. You should run `hexo generate` instead.

{% note info Restart Hexo after configuration changed %}
Hexo doesn't watch for configuration file changes. You have to restart Hexo to make the new configurations take effects.
{% endnote %}

### Static Mode

In static mode, only files in `public` folder will be served and file watching is disabled. You have to run `hexo generate` before starting the server. Usually used in production.

``` bash
$ hexo server -s
```

### Custom IP

Hexo runs the server at `0.0.0.0` by default. You can override the default IP setting. For example:

``` bash
$ hexo server -i 192.168.1.1
```

### Drafts

In draft mode, drafts will be served as normal posts. You can preview your drafts on the server. All changes you made on drafts will be updated at once.

``` bash
$ hexo server -d
```

### Logger

To log requests of server, you can enable logger in `_config.yml`. Logger is always enabled in debug mode. You can check [morgan] for more info.

``` yaml
logger: true
logger_format: default
```

Or use flags to override default settings. For example:

``` bash
$ hexo server -l default
```

**Pre-defined formats:**

Format | Description
--- | ---
`default` | `:remote-addr - - [:date] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"`
`short` | `:remote-addr - :method :url HTTP/:http-version :status :res[content-length] - :response-time ms`
`tiny` | `:method :url :status :res[content-length] - :response-time ms`
`dev` | concise output colored by response status for development use

**Tokens:**

Token | Description
--- | ---
`:req[header]` | Request header (e.g. `:req[Accept]`)
`:res[header]` | Response header (e.g. `:res[Content-Length]`)
`:http-version` | HTTP version
`:response-time` | Response time
`:remote-addr` | Remote IP address
`:date` | Request date
`:method` | Method
`:url` | Request URL
`:referrer` | Referrer
`:user-agent` | User agent
`:status` | Status

## Pow

[Pow](http://pow.cx/) is a zero-config Rack server for Mac powered by Node.js.

### Install

Run the following command:

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

## Forever / PM2

To keep the Hexo server alive, you can use [Forever] or [PM2].

Hexo can be run programmatically since 2.5. So you can call Hexo in JavaScript instead of CLI.

**1. Install Hexo in the folder of your site.**

``` bash
$ npm install hexo --save
```

**2. Add a JavaScript file with the following content.**

``` js app.js
require('hexo').init({command: 'server'});
```

**3. Run the JavaScript file you just created with [Forever] or [PM2].**

PM2 has a [known issue](https://github.com/Unitech/pm2#known-bugs-and-workarounds) that the port isn't released when the script is stopped unless PM2 is killed. You have to run the script in fork mode.

``` bash
$ forever start app.js
$ pm2 start app.js -x
```

[Connect]: https://github.com/senchalabs/connect
[morgan]: https://github.com/expressjs/morgan
[Forever]: https://github.com/nodejitsu/forever
[PM2]: https://github.com/Unitech/pm2