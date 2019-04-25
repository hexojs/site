---
title: API
---

Essa documentação fornece informações mais detalhadas sobre a API e será útil para pessoas que desejam modificar o código-fonte do Hexo ou escrever novos plugins. Se você está interessado em um uso mais básico do Hexo, consulte a [documentação](../docs).

Por favor, note que essa documentação é válida apenas para o Hexo 3 ou superior.

## Inicializar

Primeiro, temos que criar uma instancia do Hexo. Uma nova instancia recebe dois argumentos: o diretório raiz do site, `base_dir`, e um objeto com as opções de inicialização. Em seguida, inicializamos essa instância chamando o método `init`, que irá carregar as configurações e plugins do Hexo.

``` js
var Hexo = require('hexo');
var hexo = new Hexo(process.cwd(), {});

hexo.init().then(function(){
  // ...
});
```

Opção | Descrição | Padrão
--- | --- | ---
`debug` | Habilita o modo debug. Mostra as mensagens de debug no terminal e cria o arquivo `debug.log` no diretório raiz. | `false`
`safe` | Habilita o modo seguro. Não carrega nenhum plugin. | `false`
`silent` | Habilita o modo silencioso. Não mostra nenhuma mensagem no terminal. | `false`
`config` | Especifica o caminho do arquivo de configuração. | `_config.yml`

## Carregar Arquivos

O Hexo fornece dois métodos para carregar arquivos: `load` e `watch`. O método `load` é usado para carregador todos os arquivos do diretório `source` e também os dados do tema. O método `watch` faz a mesma coisa que o `load`, mas também assiste por mudanças nos arquivos continuamente.

Ambos os métodos irão carregar a lista de arquivos e passá-los para os processadores correspondentes. Depois de todos os arquivos terem sido processados, eles irão chamar os geradores para criar as rotas.

``` js
hexo.load().then(function(){
  // ...
});

hexo.watch().then(function(){
  // You can call hexo.unwatch() later to stop watching.
});
```

## Executar Comandos

Qualquer comando de console pode ser chamado explicitamente usando o método `call` na instancia do Hexo. Cada chamada recebe dois argumentos: o nome do comando do console, e um argumento de opções. Existem diferentes opções disponíveis para os diferentes comandos.

``` js
hexo.call('generate', {}).then(function(){
  // ...
});
```

## Sair

Você deve chamar o método `exit` após a conclusão bem sucedida ou mal sucedida de um comando. Isso permite que o Hexo saia e termine coisas importantes, como salvar o banco de dados.

``` js
hexo.call('generate').then(function(){
  return hexo.exit();
}).catch(function(err){
  return hexo.exit(err);
});
```
