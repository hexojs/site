title: Deployment
prev: server
next: permalinks
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
```

Option | Description
--- | ---
`repo`<br>`repository` | GitHub repository URL (Better to use HTTPS)
`branch` | The deployer will detect the branch to use automatically. You can also customize it on your own.

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
```

Option | Description
--- | ---
`repo`<br>`repository` | Heroku repository URL

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
  repo:
    github: <repository url>,[branch]
    gitcafe: <repository url>,[branch]
```

Option | Description
--- | --- | ---
`repo`<br>`repository` | Repository URL and branch. Separated with a comma (`,`). The branch is `master` by default.

## Batch Deploy

You can deploy your site to multiple destinations.

``` yaml
deploy:
- type: github
  repo: ...
- type: heroku
  repo: ...
```

## Other Methods

All generated files are saved in `public` folder. You can copy it to wherever you like.