title: Servidor
---
## [hexo-server]

Com o lançamento do Hexo 3, o servidor foi separado do módulo principal. Para começar a usar o servidor, primeiro você deve instalar o [hexo-server].

``` bash
$ npm install hexo-server --save
```
Uma vez instalado o servidor, execute o seguinte comando para iniciar o servidor. Seu site será executado em `http://localhost: 4000` por padrão. Quando o servidor estiver sendo executado, o Hexo assistirá por alterações nos arquivos do projeto e atualzará automaticamente a página, por isso não é necessário reiniciar manualmente o servidor.

``` bash
$ hexo server
```

Se você quiser mudar a porta ou se estiver encontrando erros do `EADDRINUSE`, use a opção` -p` para configurar uma porta diferente.

``` bash
$ hexo server -p 5000
```

### Modo estático

No modo estático, somente arquivos na pasta `public` serão executados e nenhum arquivo será monitorado por mudanças. Você deve executar `hexo generate` antes de iniciar o servidor. Geralmente usado em produção.

``` bash
$ hexo server -s
```

### Ip customizado

Hexo executa o servidor em `0.0.0.0` por padrão. Você pode substituir a configuração de IP padrão.

``` bash
$ hexo server -i 192.168.1.1
```

## Pow

[Pow] é um servidor de Rack zero-config para Mac.

### Instalando

``` bash
$ curl get.pow.cx | sh
```

### Configurando

Symlink a pasta em `~/.pow`

``` bash
$ cd ~/.pow
$ ln -s /path/to/myapp
```

Seu site estará funcionando em `http://myapp.dev`. O URL é baseado no nome do link simbólico

[hexo-server]: https://github.com/hexojs/hexo-server
[Pow]: http://pow.cx/
