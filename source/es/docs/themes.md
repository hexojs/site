---
title: Temas visuales
---

{% youtube 5ROIU_9dYe4 %}

Es sencillo construir un tema de Hexo - simplemente crea un nuevo directorio. Para empezar a usarlo, modifica el ajuste `theme` en `_config.yml`. Un tema debe tener la siguiente estructura:

```plain
.
├── _config.yml
├── languages
├── layout
├── scripts
└── source
```

### \_config.yml

Fichero de configuración del tema. A diferencia del fichero principal de configuración del sitio, las modificaciones en este no requieren un reinicio del servidor.

### languages

Directorio de los idiomas. Consulta [internacionalización (i18n)](internationalization.html) para más información.

### layout

El directorio del diseño. Este directorio contiene las plantillas del tema, las cuales definen la apariencia del sitio web. Hexo ofrece el motor de plantilla [Nunjucks][] por defecto, pero se pueden instalar complementos adicionales que soporten motores alternativos, tales como [EJS][] o [Pug][]. Hexo selecciona el motor de plantilla en función de la extensión del fichero de la plantilla (como con los artículos). Por ejemplo:

```plain
layout.ejs   - usa EJS
layout.njk   - usa Nunjucks
```

Consulta [plantillas](templates.html) para más información.

### scripts

El directorio de *scripts*. Hexo carga automáticamente todos los ficheros JavaScript de este directorio durante el arranque. Para más información, consulta [complementos](plugins.html).

### source

El directorio fuente (`source`). Coloca tus recursos o *assets* (p. ej. ficheros CSS y JavaScript) aquí. Hexo ignora ficheros ocultos y ficheros o carpetas con el prefijo `_` (guion bajo).

Hexo procesará y guardará cualquier fichero renderizable al directorio`public`. Ficheros no renderizables serán copiados directamente en la carpeta `public` .

### Publicación

Cuando el tema esté terminado, lo puedes publicar en el [directorio de temas](/themes). Antes de hacerlo, deberías pasarle la batería de [pruebas unitarias](https://github.com/hexojs/hexo-theme-unit-test) para asegurarte que todo funciona correctamente. Los pasos para publicar un tema son muy similares a aquellos para [actualizar la documentación](contributing.html#Updating_Documentation).

1. Bifurca [hexojs/site][]
2. Clona el repositorio a tu ordenador e instala las dependencias.

   ```shell
   $ git clone https://github.com/<username>/site.git
   $ cd site
   $ npm install
   ```

3. Crea un nuevo fichero yaml en `source/_data/themes/`, usa el nombre del tema como nombre del fichero

4. Edita `source/_data/themes/<your-theme-name>.yml` y añade tu tema. Por ejemplo:

   ```yaml
   description: A brand new default theme for Hexo.
   link: https://github.com/hexojs/hexo-theme-landscape
   preview: http://hexo.io/hexo-theme-landscape
   tags:
     - official
     - responsive
     - widget
     - two_column
     - one_column
   ```

5. Incluye una imagen (con el mismo nombre del tema) a `source/themes/screenshots`. Debe tener estas dimensiones 800\*500px y formato PNG.
6. Sube la rama.
7. Crea un *pull request* y describe las modificaciones.

[EJS]: https://github.com/hexojs/hexo-renderer-ejs
[Pug]: https://github.com/hexojs/hexo-renderer-pug
[hexojs/site]: https://github.com/hexojs/site
[Nunjucks]: https://mozilla.github.io/nunjucks/
