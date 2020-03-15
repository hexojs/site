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

## Outros Métodos

Todos os arquivos gerados são salvos no diretório `public`. Você pode copiá-los para onde quiser.

[hexo-deployer-git]: https://github.com/hexojs/hexo-deployer-git
[hexo-deployer-heroku]: https://github.com/hexojs/hexo-deployer-heroku
[hexo-deployer-rsync]: https://github.com/hexojs/hexo-deployer-rsync
[hexo-deployer-openshift]: https://github.com/hexojs/hexo-deployer-openshift
[hexo-deployer-ftpsync]: https://github.com/hexojs/hexo-deployer-ftpsync
[hexo-deployer-sftp]: https://github.com/lucascaro/hexo-deployer-sftp
