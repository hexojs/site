---
title: Router
---

O `router` salva todos os caminhos usados no site.

## Obter um Caminho

O método `get` retorna uma [Stream]. Por exemplo, para salvar os dados do caminho para um destino especificado:

``` js
var data = hexo.route.get('index.html');
var dest = fs.createWriteStream('somewhere');

data.pipe(dest);
```

## Definir um Caminho

O método `set` recebe uma string, um [Buffer] ou uma função.

``` js
// String
hexo.route.set('index.html', 'index')

// Buffer
hexo.route.set('index.html', new Buffer('index'));

// Function (Promise)
hexo.route.set('index.html', function(){
  return new Promise(function(resolve, reject){
    resolve('index');
  });
});

// Function (Callback)
hexo.route.set('index.html', function(callback){
  callback(null, 'index');
});
```

Você também pode definir um booleano para indicar se um caminho foi modificado ou não. Isso pode acelerar a geração de arquivos, pois permite ignorar os arquivos não modificados.

``` js
hexo.route.set('index.html', {
    data: 'index',
    modified: false
});

// hexo.route.isModified('index.html') => false
```

## Remover um Caminho

``` js
hexo.route.remove('index.html');
```

## Obter a Lista de Rotas

``` js
hexo.route.list();
```

## Formatar o Caminho

O método `format` transforma uma string em um caminho válido.

``` js
hexo.route.format('archives/');
// archives/index.html
```

[Stream]: http://nodejs.org/api/stream.html
[Buffer]: http://nodejs.org/api/buffer.html
