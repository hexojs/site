title: Deployment
---
To deploy your site with Hexo, you only need one command.

``` bash
$ hexo deploy
```

## GitHub

Edit `_config.yml`.

``` yaml
deploy:
  type: github
  repo: <repository url>
  branch: [branch]
  message: [message]
```

Option | Description
--- | ---
`repo`, `repository` | GitHub repository URL (Better to use HTTPS)
`branch` | The deployer will detect the branch to use automatically. You can also customize it on your own.
`message` | Customize commit message (Default is `Site updated: {{ now('YYYY-MM-DD HH:mm:ss') }}`)

### Remove

Remove `.deploy` folder.

``` bash
$ rm -rf .deploy
```

### Custom Domain

Create a file named `CNAME` in `source` folder with the following content.

```
example.com
```

- **Top-level Domain:** Add A records: `192.30.252.153`, `192.30.252.154`.
- **Subdomain**: Add CNAME record `blog.example.com`.

Check [GitHub Pages](https://help.github.com/articles/setting-up-a-custom-domain-with-pages) for more info.

## Heroku

Edit `_config.yml`.

``` yaml
deploy:
  type: heroku
  repo: <repository url>
  message: [message]
```

Option | Description
--- | ---
`repo`, `repository` | Heroku repository URL
`message` | Customize commit message (Default is `Site updated: {{ now('YYYY-MM-DD HH:mm:ss') }}`)

### Remove

Remove `.git`, `app.js` & `Procfile`.

## Rsync

Edit `_config.yml`.

``` yaml
deploy:
  type: rsync
  host: <host>
  user: <user>
  root: <root>
  port: [port] # Default is 22
  delete: [true|false] # Default is true
```

Option | Description | Default
--- | --- | ---
`host` | Address of remote host |
`user` | Username |
`root` | Root directory of remote host |
`port` | Port | 22
`delete` | Delete old files on remote host | true

## OpenShift DIY Cartridge

Edit `_config.yml`.

``` yaml
deploy:
  type: openshift
  remote: <upstream git remote>
  branch: [upstream git branch] # Default is master
```

Option | Description | Default
--- | --- | ---
`remote` | Upstream Git remote |
`branch` | Upstream Git branch | master

## Git

Edit `_config.yml`.

``` yaml
deploy:
  type: git
  message: [message]
  repo:
    github: <repository url>,[branch]
    gitcafe: <repository url>,[branch]
```

Option | Description
--- | --- | ---
`repo`, `repository` | Repository URL and branch. Separated with a comma (`,`). The branch is `master` by default.
`message` | Customize commit message (Default is `Site updated: {{ now('YYYY-MM-DD HH:mm:ss') }}`)

## Batch Deploy

You can deploy your site to multiple destinations.

``` yaml
deploy:
- type: github
  repo: ...
- type: heroku
  repo: ...
```

## Commit message

You can customize commit message in **github**, **heroku**, **git** deployer.

Swig is availble in commit message. You can use `now(format)` to display deployment time. For example, the default message is `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`:

``` js
Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}
// Site updated: 2014-05-12 00:02:25
```

Commit message can be set either in shell

``` bash
$ hexo deploy -m "Commit message"
```

or in `_config.yml`.

``` yaml
deploy:
  type: github
  repo: ...
  message: "Commit message"
```

## Other Methods

All generated files are saved in `public` folder. You can copy it to wherever you like.
