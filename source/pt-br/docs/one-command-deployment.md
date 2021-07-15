---
title: Implantação
---
O Hexo fornece uma estratégia de implantação (deployment) rápida e fácil. Você só precisa de um único comando para implantar seu site no servidor.

``` bash
$ hexo deploy
```

Antes da sua primeira implantação, você terá que modificar algumas configurações em `_config.yml`. Uma configuração de implantação válida deve ter um campo `type`. Por exemplo:

``` yaml
deploy:
  type: git
```

Você pode implantar o site em mais de um servidor. O Hexo executará cada implantação na ordem da declaração.

``` yaml
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
  repo: <repository url> #https://bitbucket.org/JohnSmith/johnsmith.bitbucket.io
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

Instale o pacote [hexo-deployer-heroku].

``` bash
$ npm install hexo-deployer-heroku --save
```

Editando as configurações.

``` yaml
deploy:
  type: heroku
  repo: <repository url>
  message: [message]
```

Opção | Descrição
--- | ---
`repo`, `repository` | URL do repositório no Heroku
`message` | Customiza a mensagem de commit (O padão é: `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`)

## Rsync

Instale o pacote [hexo-deployer-rsync].

``` bash
$ npm install hexo-deployer-rsync --save
```

Editando as configurações.

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

Opção | Descrição | Padão
--- | --- | ---
`host` | Endereço do host remoto |
`user` | Nome de usuário |
`root` | Diretório raiz do host remoto |
`port` | Porta | 22
`delete` | Exclui arquivos antigos no host remoto | true
`verbose` | Exibi mensagens detalhadas | true
`ignore_errors` | Ignora erros | false

## OpenShift

Instale o pacote [hexo-deployer-openshift].

``` bash
$ npm install hexo-deployer-openshift --save
```

Editando as configurações.

``` yaml
deploy:
  type: openshift
  repo: <repository url>
  message: [message]
```

Opção | Descrição
--- | ---
`repo` | URL do repositório no OpenShift
`message` | Customiza a mensagem de commit (O padrão é `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`)

## FTPSync

Instale o pacote [hexo-deployer-ftpsync].

``` bash
$ npm install hexo-deployer-ftpsync --save
```

Editando as configurações.

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

Opção | Descrição | Padrão
--- | --- | ---
`host` | Endereço do host remoto |
`user` | Nome de usuário |
`pass` | Senha |
`remote` | Diretório raiz do host remoto | `/`
`port` | Porta | 21
`ignore` | Ignora os arquivos no host remoto |
`connections` | Número de conexões | 1
`verbose` | Exibi mensagens detalhadas | false

## SFTP

Instale o pacote [hexo-deployer-sftp]. Implantação do site via SFTP, permitindo conexões sem senhas usando "ssh-agent".

``` bash
$ npm install hexo-deployer-sftp --save
```

Editando as configurações.

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

Opção | Descrição | Padrão
--- | --- | ---
`host` | Endereço do host remoto |
`user` | Nome de usuário |
`pass` | Senha |
`remotePath` | Diretório raiz do host remoto | `/`
`port` | Porta | 22
`privateKey` | Caminho para uma chave ssh privada |
`passphrase` | Frase secreta opcional para a chave privada |
`agent` | Caminho para o socket do agente ssh | `$SSH_AUTH_SOCK`

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

1. Em [21YunBox](https://www.21yunbox.com), configure um novo projeto 'Site estático' do GitHub com as seguintes configurações:

- **Build command:** `yarn && hexo deploy`
- **Publish directory:** `public`

2. Pressione Implantar Buton!

É isso mesmo! Seu aplicativo estará ao vivo em sua URL 21YunBox assim que a compilação terminar.

O aplicativo de exemplo para 'hexo' é implantado em [https://hexo.21yunbox.com/](https://hexo.21yunbox.com/).

Para obter mais detalhes, siga este guia em [https://www.21yunbox.com/docs/#/deploy-hexo](https://www.21yunbox.com/docs/#/deploy-hexo).

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

[RSS3] (https://rss3.io) é um protocolo aberto projetado para conteúdo e redes sociais na era da Web 3.0.

1. Instale [hexo-deployer-rss3]

2. Modifique a configuração.

  ``` yaml
  deploy:
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

| Parâmetros | Descrição |
| ----------------- | ---------------------- |
| `endpoint` | Um link para o hub RSS3 |
| `privateKey` | Sua chave privada, 64 bytes |
| `ipfs/deploy` | Se deve implantar no IPFS |
| `ipfs/gateway` | Gateway de API IPFS |
| `ipfs/api/key` | Conteúdo de verificação relacionado ao gateway IPFS |
| `ipfs/api/secret` | Conteúdo de verificação relacionado ao gateway IPFS |

3. Gere arquivos estáticos

4. Implantação

Para precauções relacionadas à implantação específica, você pode consultar [nossa documentação] (https://github.com/NaturalSelectionLabs/hexo-deployer-rss3/tree/develop/docs/zh_CN/start.md).

## Outros Métodos

Todos os arquivos gerados são salvos no diretório `public`. Você pode copiá-los para onde quiser.

[hexo-deployer-git]: https://github.com/hexojs/hexo-deployer-git
[hexo-deployer-heroku]: https://github.com/hexojs/hexo-deployer-heroku
[hexo-deployer-rsync]: https://github.com/hexojs/hexo-deployer-rsync
[hexo-deployer-openshift]: https://github.com/hexojs/hexo-deployer-openshift
[hexo-deployer-ftpsync]: https://github.com/hexojs/hexo-deployer-ftpsync
[hexo-deployer-sftp]: https://github.com/lucascaro/hexo-deployer-sftp
[hexo-deployer-rss3]: https://github.com/NaturalSelectionLabs/hexo-deployer-rss3
