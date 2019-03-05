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

1. Install [hexo-deployer-git].
``` bash
$ npm install hexo-deployer-git --save
```
2. Edit **_config.yml** (with example values shown below as comments):
```yaml
deploy:
  type: git   
  repo: <repository url>  #https://bitbucket.org/JohnSmith/johnsmith.bitbucket.io
  branch: [branch] #published
  message: [message]  #leave this blank
```
Option | Description
--- | ---
`repo` | GitHub/Bitbucket/Coding/GitLab repository URL
`branch` | Branch name. The deployer will detect the branch automatically if you are using GitHub or GitCafe.
`message` | Customize commit message (Default to `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`)
3. Upload your site: `./node_modules/.bin/hexo clean && ./node_modules/.bin/hexo deploy` (or `hexo clean && hexo deploy` if you installed Hexo globally).
4. On Github/BitBucket/Gitlab go to your repository settngs and change your main branch from `master` to `published` (or whatever you called it in your _config.yml). Now your site will show as your account's homepage.

### How does it work exactly?
Your repository will have a **master** branch when you first made it. Keep working on this branch to create your site. When you deploy Hexo will create, or update, a new branch on the remote site (called **published** in the config above). Deployment won't create a new branch locally, nor will it mess with your existing source code in the master branch locally or on the remote. You still need to keep pushing commits to the master branch manually to the remote server to keep your site backed up. In addition, if you are using a CNAME file to customize your Github Pages domain name, you need to put the CNAME file under `source_dir` so that Hexo can push it to the published branch.

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

## Netlify

[Netlify](https://www.netlify.com/) provides continuous deployment (Git-triggered builds), an intelligent global CDN, full DNS (including custom domains), automated HTTPS, asset acceleration, and a lot more. It is a unified platform that automates your code to create high-performant, easily maintainable sites and web apps.

There are two different ways to deploy your sites on Netlify. The most common way is to use the web UI. Go to the [create a new site page](https://app.netlify.com/start), select your project repo from GitHub, GitLab, or Bitbucket, and follow the prompts.

Alternatively, you can use Netlify's [Node based CLI](https://www.netlify.com/docs/cli/) tool to manage and deploy sites on Netlify without leaving your terminal.

You can also add a [Deploy to Netlify Button](https://www.netlify.com/docs/deploy-button/) in your README.file to allow others to create a copy of your repository and be deployed to Netlify via one click.


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

## SFTP

Install [hexo-deployer-sftp]. Deploys the site via SFTP, allowing for passwordless connections using ssh-agent.

``` bash
$ npm install hexo-deployer-sftp --save
```

Edit settings.

``` yaml
deploy:
  type: sftp
  host: <host>
  user: <user>
  pass: <password>
  remotePath: [remote path]
  port: [port]
  privateKey: [path/to/privateKey]
  passphrase: [passphrase]
  agent: [path/to/agent/socket]
```

Option | Description | Default
--- | --- | ---
`host` | Address of remote host |
`user` | Username |
`pass` | Password |
`remotePath` | Root directory of remote host | `/`
`port` | Port | 22
`privateKey` | Path to a ssh private key |
`passphrase` | Optional passphrase for the private key | 
`agent` | Path to the ssh-agent socket | `$SSH_AUTH_SOCK`

## Other Methods

All generated files are saved in the `public` folder. You can copy them to wherever you like.

[hexo-deployer-git]: https://github.com/hexojs/hexo-deployer-git
[hexo-deployer-heroku]: https://github.com/hexojs/hexo-deployer-heroku
[hexo-deployer-rsync]: https://github.com/hexojs/hexo-deployer-rsync
[hexo-deployer-openshift]: https://github.com/hexojs/hexo-deployer-openshift
[hexo-deployer-ftpsync]: https://github.com/hexojs/hexo-deployer-ftpsync
[hexo-deployer-sftp]: https://github.com/lucascaro/hexo-deployer-sftp
