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

## Git

Instale o pacote [hexo-deployer-git].

``` bash
$ npm install hexo-deployer-git --save
```

Editando as configurações.

``` yaml
deploy:
  type: git
  repo: <repository url>
  branch: [branch]
  message: [message]
```

Opção | Descrição
--- | ---
`repo` | URL do repositório GitHub/Bitbucket/Coding/GitLab
`branch` | Nome do branch. O implantador detectará o branch automaticamente se estiver usando o GitHub ou GitCafe.
`message` | Customiza a mensagem de commit (O padrão é `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`)

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
