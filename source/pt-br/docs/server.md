---
title: Servidor
---

## [hexo-server]

Com o lançamento do Hexo 3, o servidor foi separado do módulo principal. Para começar a usar o servidor, primeiro você deve instalar o pacote [hexo-server].

``` bash
$ npm install hexo-server --save
```

Uma vez instalado o servidor, execute o comando a seguir para iniciar o servidor. Seu site será acessível em `http://localhost:4000` por padrão. Quando o servidor estiver sendo executado, o Hexo assistirá por alterações nos arquivos do projeto e atualizará automaticamente a página, por isso não é necessário reiniciar manualmente o servidor.

``` bash
$ hexo server
```

Se você quiser mudar a porta ou se estiver encontrando erros `EADDRINUSE`, use a opção `-p` para configurar uma porta diferente.

``` bash
$ hexo server -p 5000
```

### Modo Estático

No modo estático, somente arquivos do diretório `public` serão servidos e nenhum arquivo será assistido por mudanças. Você deve executar `hexo generate` antes de iniciar o servidor. Em geral, é desta forma que o site é servido em produção.

``` bash
$ hexo server -s
```

### Ip Customizado

O Hexo executa o servidor em `0.0.0.0` por padrão. Você pode substituir a configuração de IP padrão.

``` bash
$ hexo server -i 192.168.1.1
```

## Pow

[Pow] é um servidor Rack sem configuração para Mac.

### Instalaçãos

``` bash
$ curl get.pow.cx | sh
```

### Configuração

Link simbólico no diretório `~/.pow`

``` bash
$ cd ~/.pow
$ ln -s /path/to/myapp
```

Seu site estará funcionando em `http://myapp.dev`. A URL é baseada no nome do link simbólico.

[hexo-server]: https://github.com/hexojs/hexo-server
[Pow]: http://pow.cx/
