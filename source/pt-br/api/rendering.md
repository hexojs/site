---
title: Renderização
---

Existem dois métodos para renderizar arquivos ou strings no Hexo: o método assíncrono `hexo.render.render` e o método síncrono `hexo.render.renderSync`. Os dois métodos são bastante semelhantes, desta forma, apenas o método `hexo.render.render` assíncrono será um pouco mais discutido nos parágrafos abaixo.

## Renderizar uma String

Ao renderizar uma string, você deve especificar uma `engine` para permitir que o Hexo conheça o mecanismo de renderização que deverá ser  usado.

``` js
hexo.render.render({text: 'example', engine: 'swig'}).then(function(result){
  // ...
});
```

## Renderizar um Arquivo

Ao renderizar um arquivo, não é necessário especificar uma `engine` porque o Hexo detectará automaticamente o mecanismo de renderização mais apropriado com base na extensão do arquivo. Mas se for a caso, você também pode definir explicitamente a `engine`.

``` js
hexo.render.render({path: 'path/to/file.swig'}).then(function(result){
  // ...
});
```

## Opções de Renderização

Você pode passar um conjunto de opções em formato de objeto no segundo argumento.

``` js
hexo.render.render({text: ''}, {foo: 'foo'}).then(function(result){
  // ...
});
```

## Filtros after_render

Quando a renderização estiver completa, o Hexo executará os filtros `after_render` correspondentes. Por exemplo, podemos usar este recurso para implementar um minificador para arquivos JavaScript.

``` js
var UglifyJS = require('uglify-js');

hexo.extend.filter.register('after_render:js', function(str, data){
  var result = UglifyJS.minify(str);
  return result.code;
});
```

## Verificar se um Arquivo é Renderizável

Você pode usar o método `isRenderable` ou `isRenderableSync` para verificar se um caminho de arquivo é renderizável. O retorno do método será `true` apenas se um renderizador correspondente for registrado.

``` js
hexo.render.isRenderable('layout.swig') // true
hexo.render.isRenderable('image.png') // false
```

## Obter a Extensão de Saída

Use o método `getOutput` para obter a extensão da saída renderizada. Se um arquivo não foi renderizado, o método retornará uma string vazia.

``` js
hexo.render.getOutput('layout.swig') // html
hexo.render.getOutput('image.png') // '''
```

## Disable Nunjucks tags

If you are not using a [tag plugin](/docs/tag-plugins) and want to use `{{ }}` or `{% %}` in your post without using content [escaping](/docs/troubleshooting#Escape-Contents), you can disable processing of Nunjucks tag in existing renderer by:

``` js
// following example only applies to '.md' file extension
// you may need to cover other extensions, e.g. '.markdown', '.mkd', etc
const renderer = hexo.render.renderer.get('md')
if (renderer) {
  renderer.disableNunjucks = true
  hexo.extend.renderer.register('md', 'html', renderer)
}
```
