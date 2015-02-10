title: Deployment
---
This command is used to deploy your site to remote services.

``` bash
$ hexo deploy
```

## Settings

Before you start deployment, you have to configure deployment settings in `_config.yml`. A valid deployment setting must have `type` at least.

``` yaml
deploy:
  type: git
```

You can set multiple deployers in settings. Hexo will run each deployer in order.

``` yaml
deploy:
- type: git
  repo: 
- type: heroku
  repo:
```

## Git

### Install

``` bash
$ npm install hexo-deployer-git --save
```

### Settings

``` yaml
deploy:
  type: git
  repo: <repo url>
  branch: [branch]
  message: [message]
```

Option | Description | Default
--- | --- | ---
`repo` | Git repository URL (Better to use HTTPS) |
`branch` | Branch setting. This deployer will detect the branch automatically if you use GitHub or GitCafe. | master
`message` | Customize commit message | `{% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`

### Remove

``` bash
$ rm -rf .deploy_git
```

## Heroku

### Install

``` bash
$ npm install hexo-deployer-heroku --save
```

### Settings

``` yaml
deploy:
  type: heroku
  repo: <repo url>
  message: [message]
```

Option | Description | Default
--- | --- | ---
`repo` | Git repository URL (Better to use HTTPS) |
`message` | Customize commit message | `{% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`

### Remove

``` bash
$ rm -rf .deploy_heroku
```

## OpenShift

### Install

``` bash
$ npm install hexo-deployer-openshift --save
```

### Settings

``` yaml
deploy:
  type: openshift
  repo: <repo url>
  message: [message]
```

Option | Description | Default
--- | --- | ---
`repo` | Git repository URL (Better to use HTTPS) |
`message` | Customize commit message | `{% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`

### Remove

``` bash
$ rm -rf .deploy_openshift
```

## Rsync

### Install

``` bash
$ npm install hexo-deployer-rsync --save
```

### Settings

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