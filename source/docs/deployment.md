title: Deployment
---
Hexo provides a fast and easy deployment strategy. You only need one single command to deploy your site to your servers.

``` bash
$ hexo deploy
```

Before your first deployment, you will have to modify some settings in `_config.yml`. A valid deployment setting must have a `type` field. For example:

``` yaml
deploy:
  type: git
```

You can use multiple deployers. Hexo will execute each deployer in order.

``` yaml
deploy:
- type: git
  repo:
- type: heroku
  repo:
```

## Git

Install [hexo-deployer-git].

``` bash
$ npm install hexo-deployer-git --save
```

Edit settings.

``` yaml
deploy:
  type: git
  repo: <repository url>
  branch: [branch]
  message: [message]
```

Option | Description
--- | ---
`repo` | GitHub repository URL
`branch` | Branch name. The deployer will detect the branch automatically if you are using GitHub or GitCafe.
`message` | Customize commit message (Default to `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`)

## Heroku

Install [hexo-deployer-heroku].

``` bash
$ npm install hexo-deployer-heroku --save
```

Edit settings.

``` yaml
deploy:
  type: heroku
  repo: <repository url>
  message: [message]
```

Option | Description
--- | ---
`repo`, `repository` | Heroku repository URL
`message` | Customize commit message (Default to `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`)

## Rsync

Install [hexo-deployer-rsync].

``` bash
$ npm install hexo-deployer-rsync --save
```

Edit settings.

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

Option | Description | Default
--- | --- | ---
`host` | Address of remote host |
`user` | Username |
`root` | Root directory of remote host |
`port` | Port | 22
`delete` | Delete old files on remote host | true
`verbose` | Display verbose messages | true
`ignore_errors` | Ignore errors | false

## OpenShift

Install [hexo-deployer-openshift].

``` bash
$ npm install hexo-deployer-openshift --save
```

Edit settings.

``` yaml
deploy:
  type: openshift
  repo: <repository url>
  message: [message]
```

Option | Description
--- | ---
`repo` | OpenShift repository URL
`message` | Customize commit message (Default to `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`)

## FTPSync

Install [hexo-deployer-ftpsync].

``` bash
$ npm install hexo-deployer-ftpsync --save
```

Edit settings.

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

Option | Description | Default
--- | --- | ---
`host` | Address of remote host |
`user` | Username |
`pass` | Password |
`remote` | Root directory of remote host | `/`
`port` | Port | 21
`ignore` | Ignore the files on either host or remote |
`connections` | Connections number | 1
`verbose` | Display verbose messages | false

## Other Methods

All generated files are saved in the `public` folder. You can copy them to wherever you like.

[hexo-deployer-git]: https://github.com/hexojs/hexo-deployer-git
[hexo-deployer-heroku]: https://github.com/hexojs/hexo-deployer-heroku
[hexo-deployer-rsync]: https://github.com/hexojs/hexo-deployer-rsync
[hexo-deployer-openshift]: https://github.com/hexojs/hexo-deployer-openshift
[hexo-deployer-ftpsync]: https://github.com/hexojs/hexo-deployer-ftpsync
