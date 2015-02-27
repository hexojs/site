title: Deployment
---
Hexo provides a fasy and easy way for deployment. You only need one command to deploy your site to servers.

``` bash
$ hexo deploy
```

Before we start, you have to modify settings in `_config.yml`. A valid deployment setting must come with `type` field. For example:

``` yaml
deploy:
  type: git
```

You can use multiple deployers. Hexo will execute each deployer in sequence.

``` yaml
deployer:
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
`branch` | Branch name. The deployer will detect branch automatically if you are using GitHub or GitCafe.
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

## Other Methods

All generated files are saved in `public` folder. You can copy it to wherever you like.

[hexo-deployer-git]: https://github.com/hexojs/hexo-deployer-git
[hexo-deployer-heroku]: https://github.com/hexojs/hexo-deployer-heroku
[hexo-deployer-rsync]: https://github.com/hexojs/hexo-deployer-rsync
[hexo-deployer-openshift]: https://github.com/hexojs/hexo-deployer-openshift