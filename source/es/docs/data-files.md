---
title: Archivos de datos
---

En ciertas ocasiones, puede ser necesario el uso de datos en plantillas, los cuales no están directamente accesibles en tus artículos, o se quieren reutilizar estos datos en algún otro lugar. Para estas situaciones, Hexo 3 introdujo los nuevos **Archivos de datos**. Esta funcionalidad carga los ficheros YAML o JSON del directorio `source/_data`, de forma que se pueden usar en distintas partes del sitio web.

{% youtube CN31plHbI-w %}

Por ejemplo, si añades `menu.yml` al directorio `source/_data`.

```yaml
Home: /
Gallery: /gallery/
Archives: /archives/
```

Puedes usarlos en plantillas:

```
<% for (var link in site.data.menu) { %>
  <a href="<%= site.data.menu[link] %>"> <%= link %> </a>
<% } %>
```

que se renderiza como:

```
<a href="/"> Home </a>
<a href="/gallery/"> Gallery </a>
<a href="/archives/"> Archives </a>
```
