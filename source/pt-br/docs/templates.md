title: Templates
---

Os templates definem a apresentação do seu site, descrevendo o que cada página deve ser semelhante. A tabela abaixo mostra o modelo correspondente para cada página disponível. No mínimo, um tema deve conter um modelo de `index`.

Template | Página | Fallback
--- | --- | ---
`index` | Home |
`post` | Publicações | `index`
`page` | Páginas | `index`
`archive` | Arquivos | `index`
`category` | Categorias | `archive`
`tag` | Tags | `archive`

## Layouts

Quando as páginas compartilham uma estrutura semelhante - por exemplo, quando dois templates possuem um cabeçalho e um rodapé - você pode considerar usar um `layout` para declarar essas semelhanças estruturais. Todo arquivo de layout deve conter uma variável `body` para exibir o conteúdo do modelo em questão. Por exemplo:

``` html index.ejs
index
```

``` html layout.ejs
<!DOCTYPE html>
<html>
  <body><%- body %></body>
</html>
```

yields:

``` html
<!DOCTYPE html>
<html>
  <body>index</body>
</html>
```

Por padrão, o modelo de `layout` é usado por todos os outros modelos. Você pode especificar layouts adicionais na parte da frente ou configurá-lo como `false` para desativá-lo. É até possível criar uma estrutura aninhada complexa ao incluir mais modelos de layout no seu layout superior.

## Partials

Os partials são úteis para compartilhar componentes entre seus modelos. Exemplos típicos incluem cabeçalhos, rodapés ou barras laterais. Você pode querer colocar seus partials em arquivos separados para tornar a manutenção do seu site significativamente mais conveniente. Por exemplo:


``` html partial/header.ejs
<h1 id="logo"><%= config.title %></h1>
```

``` html index.ejs
<%- partial('partial/header') %>
<div id="content">Home page</div>
```

yields:

``` html
<h1 id="logo">My Site</h1>
<div id="content">Home page</div>
```

## Variáveis Locais

Você pode definir variáveis locais em modelos e usá-los em outros modelos.

``` html partial/header.ejs
<h1 id="logo"><%= title></h1>
```

``` html index.ejs
<%- partial('partial/header', {title: 'Hello World'}) %>
<div id="content">Home page</div>
```

yields:

``` html
<h1 id="logo">Hello World</h1>
<div id="content">Home page</div>
```

## Otimização

Se o seu tema for extremamente complexo ou se o número de arquivos a gerar for muito grande, o desempenho da geração de arquivos do Hexo pode começar a diminuir consideravelmente. Além de simplificar o seu tema, você também pode tentar Fragment Caching, que foi introduzido no Hexo 2.7.

Este recurso foi emprestado de [Ruby on Rails](http://guides.rubyonrails.org/caching_with_rails.html#fragment-caching). Isso faz com que o conteúdo seja salvo como fragmentos e armazenados em cache quando forem feitos pedidos adicionais. Isso pode reduzir o número de consultas do banco de dados e também pode acelerar a geração de arquivos.

O armazenamento em cache de fragmentação é melhor usado para cabeçalhos, rodapés, barras laterais ou outro conteúdo estático que é improvável que mude de modelo para modelo. Por exemplo:

``` js
<%- fragment_cache('header', function(){
  return '<header></header>';
});
```

Embora seja mais fácil usar partials:

``` js
<%- partial('header', {}, {cache: true});
```

Não use o cache de fragmentos quando a configuração `relative_link` foi ativada. Isso pode causar problemas porque os links relativos podem e provavelmente serão diferentes dependendo das páginas em que aparecem.
