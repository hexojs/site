---
title: One-Command Deployment
---

Hexo provides a fast and easy deployment strategy. You only need one single command to deploy your site to your server.

```bash
$ hexo deploy
```

Install the necessary plugin(s) that is compatible with the deployment method provided by your server/repository.

Deployment is usually configured through **\_config.yml**. A valid configuration must have the `type` field. For example:

```yaml
deploy:
  type: git
```

You can use multiple deployers. Hexo will execute each deployer in order.

```yaml
deploy:
- type: git
  repo:
- type: heroku
  repo:
```

Refer to the [Plugins](https://hexo.io/plugins/) list for more deployment plugins.

## Git

1. Install [hexo-deployer-git].

```bash
$ npm install hexo-deployer-git --save
```

2. Edit **\_config.yml** (with example values shown below as comments):

```yaml
deploy:
  type: git
  repo: <repository url> # https://bitbucket.org/JohnSmith/johnsmith.bitbucket.io
  branch: [branch]
  message: [message]
```

Option | Description | Default
--- | --- | ---
`repo` | URL of the target repository |
`branch` | Branch name. | `gh-pages` (GitHub)<br>`coding-pages` (Coding.net)<br>`master` (others)
`message` | Customize commit message. | `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`
`token` | Optional token value to authenticate with the repo. Prefix with `$` to read token from environment variable

3. Deploy your site `hexo clean && hexo deploy`.

  - You will be prompted with username and password of the target repository, unless you authenticate with a token or ssh key.
  - hexo-deployer-git does not store your username and password. Use [git-credential-cache](https://git-scm.com/docs/git-credential-cache) to store them temporarily.

4. Navigate to your repository settings and change the "Pages" branch to `gh-pages` (or the branch specified in your config). The deployed site should be live on the link shown on the "Pages" setting.

## Heroku

Install [hexo-deployer-heroku].

```bash
$ npm install hexo-deployer-heroku --save
```

Edit settings.

```yaml
deploy:
  type: heroku
  repo: <repository url>
  message: [message]
```

| Option               | Description                                                                                                 |
| -------------------- | ----------------------------------------------------------------------------------------------------------- |
| `repo`, `repository` | Heroku repository URL                                                                                       |
| `message`            | Customize commit message (Default to `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`) |

## Netlify

[Netlify](https://www.netlify.com/) provides continuous deployment (Git-triggered builds), an intelligent global CDN, full DNS (including custom domains), automated HTTPS, asset acceleration, and a lot more. It is a unified platform that automates your code to create high-performance, easily maintainable sites and web apps.

There are two different ways to deploy your sites on Netlify. The most common way is to use the web UI. Go to the [create a new site page](https://app.netlify.com/start), select your project repo from GitHub, GitLab, or Bitbucket, and follow the prompts.

Alternatively, you can use Netlify's [Node based CLI](https://www.netlify.com/docs/cli/) tool to manage and deploy sites on Netlify without leaving your terminal.

You can also add a [Deploy to Netlify Button](https://www.netlify.com/docs/deploy-button/) in your README.file to allow others to create a copy of your repository and be deployed to Netlify via one click.

## Rsync

Install [hexo-deployer-rsync].

```bash
$ npm install hexo-deployer-rsync --save
```

Edit settings.

```yaml
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

| Option          | Description                     | Default |
| --------------- | ------------------------------- | ------- |
| `host`          | Address of remote host          |
| `user`          | Username                        |
| `root`          | Root directory of remote host   |
| `port`          | Port                            | 22      |
| `delete`        | Delete old files on remote host | true    |
| `verbose`       | Display verbose messages        | true    |
| `ignore_errors` | Ignore errors                   | false   |

## OpenShift

Install [hexo-deployer-openshift].

```bash
$ npm install hexo-deployer-openshift --save
```

Edit settings.

```yaml
deploy:
  type: openshift
  repo: <repository url>
  message: [message]
```

| Option    | Description                                                                                                 |
| --------- | ----------------------------------------------------------------------------------------------------------- |
| `repo`    | OpenShift repository URL                                                                                    |
| `message` | Customize commit message (Default to `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`) |

## FTPSync

Install [hexo-deployer-ftpsync].

```bash
$ npm install hexo-deployer-ftpsync --save
```

Edit settings.

```yaml
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

| Option        | Description                               | Default |
| ------------- | ----------------------------------------- | ------- |
| `host`        | Address of remote host                    |
| `user`        | Username                                  |
| `pass`        | Password                                  |
| `remote`      | Root directory of remote host             | `/`     |
| `port`        | Port                                      | 21      |
| `ignore`      | Ignore the files on either host or remote |
| `connections` | Connections number                        | 1       |
| `verbose`     | Display verbose messages                  | false   |

## SFTP

Install [hexo-deployer-sftp]. Deploys the site via SFTP, allowing for passwordless connections using ssh-agent.

```bash
$ npm install hexo-deployer-sftp --save
```

Edit settings.

```yaml
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

| Option       | Description                             | Default          |
| ------------ | --------------------------------------- | ---------------- |
| `host`       | Address of remote host                  |
| `user`       | Username                                |
| `pass`       | Password                                |
| `remotePath` | Root directory of remote host           | `/`              |
| `port`       | Port                                    | 22               |
| `privateKey` | Path to a ssh private key               |
| `passphrase` | Optional passphrase for the private key |
| `agent`      | Path to the ssh-agent socket            | `$SSH_AUTH_SOCK` |

## Vercel

[Vercel](https://vercel.com) is a cloud platform that enables developers to host Jamstack websites and web services that deploy instantly, scale automatically, and requires no supervision, all with zero configuration. They provide a global edge network, SSL encryption, asset compression, cache invalidation, and more.

Step 1: Add a build script to your `package.json` file:

```json
{
  "scripts": {
    "build": "hexo generate"
  }
}
```

Step 2: Deploy your Hexo Website to Vercel

To deploy your Hexo app with a [Vercel for Git Integration](https://vercel.com/docs/git-integrations), make sure it has been pushed to a Git repository.

Import the project into Vercel using the [Import Flow](https://vercel.com/import/git). During the import, you will find all relevant options preconfigured for you; however, you can choose to change any of these options, a list of which can be found [here](https://vercel.com/docs/build-step#build-&-development-settings).

After your project has been imported, all subsequent pushes to branches will generate [Preview Deployments](https://vercel.com/docs/platform/deployments#preview), and all changes made to the [Production Branch](https://vercel.com/docs/git-integrations#production-branch) (commonly "main") will result in a [Production Deployment](https://vercel.com/docs/platform/deployments#production).

Alternatively, you can click the deploy button below to create a new project:

[![Deploy Vercel](https://vercel.com/button)](https://vercel.com/new/hexo)

## 21YunBox

1. On [21YunBox](https://www.21yunbox.com), setup up a new `Static Site` project from GitHub with the following settings:

- **Build command:** `yarn && hexo deploy`
- **Publish directory:** `public`

2. Press Deploy Buton！

That’s it! Your app will be live on your 21YunBox URL as soon as the build finishes.

The sample app for `hexo` is deployed at [https://hexo.21yunbox.com/](https://hexo.21yunbox.com/).

For more detail, follow this guide at [https://www.21yunbox.com/docs/#/deploy-hexo](https://www.21yunbox.com/docs/#/deploy-hexo).

## Bip

[Bip](https://bip.sh) is a commercial hosting service which provides zero downtime deployment, a global CDN, SSL, unlimited bandwidth and more for static websites. Plans are available on a pay as you go, per domain basis.

Getting started is quick and easy, as Bip provides out the box support for Hexo. This guide assumes you already have [a Bip domain and Bip CLI installed](https://bip.sh/getstarted).

1: Initialise your project directory

```bash
$ bip init
```

Follow the prompts, where you'll be asked which domain you'd like to deploy to. Bip will detect that you're using Hexo, and set project settings like the source file directory automatically.

2: Deploy your website

```bash
$ hexo generate —deploy && bip deploy
```

After a few moments, your website will be deployed.

## RSS3

[RSS3](https://rss3.io) is an open protocol designed for content and social networks in the Web 3.0 era.

1. Install [hexo-deployer-rss3].

2. Modify the configuration.

  ``` yaml
  deploy: # The root configuration block for all deployers
  - type: rss3
    endpoint: https://hub.rss3.io
    privateKey: 47e18d6c386898b424025cd9db446f779ef24ad33a26c499c87bb3d9372540ba
    ipfs:
      deploy: true
      gateway: pinata
      api:
        key: d693df715d3631e489d6
        secret: ee8b74626f12b61c1a4bde3b8c331ad390567c86ba779c9b18561ee92c1cbff0
  ```

| Parameters | Description |
| ----------------- | ---------------------- |
| `endpoint` | a link to the RSS3 Hub |
| `privateKey` | your private key, 64 bytes |
| `ipfs/deploy` | whether to deploy to IPFS |
| `ipfs/gateway` | IPFS API gateway |
| `ipfs/api/key` | IPFS gateway-related authentication content |
| `ipfs/api/secret` | IPFS gateway-related authentication content |

3. generate static files

4. deploy

For deployment-related considerations, you can refer to [Our documentation](https://github.com/NaturalSelectionLabs/hexo-deployer-rss3/blob/develop/README.md).


## Other Methods

All generated files are saved in the `public` folder. You can copy them to wherever you like.

[hexo-deployer-git]: https://github.com/hexojs/hexo-deployer-git
[hexo-deployer-heroku]: https://github.com/hexojs/hexo-deployer-heroku
[hexo-deployer-rsync]: https://github.com/hexojs/hexo-deployer-rsync
[hexo-deployer-openshift]: https://github.com/hexojs/hexo-deployer-openshift
[hexo-deployer-ftpsync]: https://github.com/hexojs/hexo-deployer-ftpsync
[hexo-deployer-sftp]: https://github.com/lucascaro/hexo-deployer-sftp
[hexo-deployer-rss3]: https://github.com/NaturalSelectionLabs/hexo-deployer-rss3
