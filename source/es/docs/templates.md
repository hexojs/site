---
title: Plantillas
---

Las plantillas definen la presentación de tu sitio web describiendo el diseño de cada página. La tabla inferior muestra las plantillas correspondientes para cada página disponible. Como mínimo, un tema debe incluir una plantilla `index`.

{% youtube mb65bQ4iUc4 %}

| Plantilla  | Página                  | Sustituto |
| ---------- | ----------------------- | --------- |
| `index`    | Página de inicio        |           |
| `post`     | Artículos               | `index`   |
| `page`     | Páginas                 | `index`   |
| `archive`  | Histórico               | `index`   |
| `category` | Histórico de categorías | `archive` |
| `tag`      | Histórico de etiquetas  | `archive` |

## Plantillas

Cuando las páginas mantienen una estructura similar - por ejemplo, cuando dos plantillas tienen un encabezado y un pie de página - se puede considerar usar un `layout` (diseño) para declarar estas similitudes estructurales. Cada diseño debe contener una variable `body` que incluya los contenidos de la plantilla en cuestión. Por ejemplo:

```html index.ejs
index
```

```html layout.ejs
<!doctype html>
<html>
  <body>
    <%- body %>
  </body>
</html>
```

genera:

```html
<!doctype html>
<html>
  <body>
    index
  </body>
</html>
```

Por defecto, la plantilla `layout` se usa por todas las demás plantillas. Puedes especificar diseños adicionales en el frontispicio o establecer su valor como `false` para deshabilitarlo. Es posible construir una estructura anidada compleja incluyendo más plantillas de diseño en el diseño superior.

## Porciones

Las porciones son útiles para compartir componentes entre modelos. Algunos ejemplos típicos incluyen encabezados, pies de página o menús laterales. Puede ser práctico mantener estas porciones en ficheros separados para facilitar el mantenimiento del sitio web. Por ejemplo:

```html partial/header.ejs
<h1 id="logo"><%= config.title %></h1>
```

```html index.ejs
<%- partial('partial/header') %>
<div id="content">Home page</div>
```

genera:

```html
<h1 id="logo">My Site</h1>
<div id="content">Home page</div>
```

## Variables locales

Se pueden definir variables locales en las plantillas y usarlas en otras plantillas.

```html partial/header.ejs
<h1 id="logo"><%= title %></h1>
```

```html index.ejs
<%- partial('partial/header', {title: 'Hello World'}) %>
<div id="content">Home page</div>
```

genera:

```html
<h1 id="logo">Hello World</h1>
<div id="content">Home page</div>
```

## Optimización

En caso de que tu tema sea excesivamente complejo o el número de ficheros para generar de Hexo llegue a ser demasiado grande, el rendimiento puede decrecer considerablemente. Además de simplificar tu tema, puedes también intentar usar el "cacheado fragmentado" (*Fragment Caching*), que se introdujo con Hexo 2.7.

Esta funcionalidad fue copiada desde [Ruby on Rails](http://guides.rubyonrails.org/caching_with_rails.html#fragment-caching). Permite que el contenido se guarde en fragmentos y caché para cuando solicitudes adicionales lo requieran. Esto puede reducir el número de consultas a la base de datos y acelerar la generación de ficheros.

La funcionalidad *Fragment caching* se usa especialmente para encabezados, pies de página, menús laterales, y otros contenidos estáticos que es poco probable que se modifiquen de una plantilla a otra. Por ejemplo:

```js
<%- fragment_cache('header', function(){
  return '<header></header>';
});
```

Aunque puede ser más sencillo usar porciones:

```js
<%- partial('header', {}, {cache: true});
```

{% note warn %}
`fragment_cache()` guardará en la caché el resultado renderizado y emitirá el fragmento en la caché a otras páginas. Esto solo debe utilizarse en porciones que se espera que **no** cambien entre diferentes páginas. En otro caso, **no** debe ser habilitada. Por ejemplo, se debe deshabilitar cuando `relative_link` está habilitada en la configuración. Esto es debido a que los enlaces relativos pueden variar entre diferentes páginas.
{% endnote %}
