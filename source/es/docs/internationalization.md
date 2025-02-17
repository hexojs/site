---
title: Internacionalización (i18n)
---

Se puede usar la internacionalización para mostrar en distintos idiomas en el sitio. El idioma por defecto se establece modificando el ajuste `language` en `_config.yml`. Se pueden indicar varios idiomas y alterar el orden de los idiomas por defecto.

```yaml
language: zh-tw

language:
- zh-tw
- en
```

### Ficheros de idiomas

Los ficheros de idiomas pueden ser ficheros YAML o JSON. Se deben guardar bajo el directorio `languages` dentro del tema. Existe soporte para [formato printf](https://github.com/alexei/sprintf.js) dentro de los ficheros de idiomas.

### Plantillas

Use los auxiliadores `__` o `_p` dentro de las plantillas para obtener la traducción de las cadenas de texto. El primero es para el uso normal y el segundo para la traducción de plurales. Por ejemplo:

```yaml en.yml
index:
  title: Home
  add: Add
  video:
    zero: No videos
    one: One video
    other: %d videos
```

```js
<%= __('index.title') %>
// Home

<%= _p('index.video', 3) %>
// 3 videos
```

### Ruta

Se puede indicar el idioma de las páginas en el frontispicio, o modificar el ajuste `i18n_dir` en `_config.yml` para habilitar la detección automática de Hexo.

```yaml
i18n_dir: :lang
```

El valor por defecto del ajuste `i18n_dir` es `:lang`, lo que significa que Hexo detectará el idioma a través del primer segmento de la URL. Por ejemplo:

```plain
/index.html => en
/archives/index.html => en
/zh-tw/index.html => zh-tw
```

La cadena de texto solo será entregada como un idioma si el idioma existe. Así que `archives` en `/archives/index.html` (ejemplo 2) no serán servidos en otro idioma.
