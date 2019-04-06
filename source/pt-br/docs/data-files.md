---
title: Arquivos de Dados
---
Às vezes, você pode precisar usar alguns dados em templates que não estão diretamente disponíveis em suas postagens, ou ainda, você deseja reutilizar os dados em um outro lugar. Para esses casos de uso, o Hexo 3 introduziu os novos **Data files** (arquivos de dados). Este recurso carrega arquivos YAML ou JSON no diretório `source/_data` para que você possa usá-los em seu site.

{% youtube CN31plHbI-w %}

Por exemplo, adicione `menu.yml` no diretório `source/_data`.

``` yaml
Home: /
Gallery: /gallery/
Archives: /archives/
```

E você pode usá-los nos templates:

```
<% for (var link in site.data.menu) { %>
  <a href="<%= site.data.menu[link] %>"> <%= link %> </a>
<% } %>
```

Renderizado assim:

```
<a href="/"> Home </a>
<a href="/gallery/"> Gallery </a>
<a href="/archives/"> Archives </a>
```
