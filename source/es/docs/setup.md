---
title: Configuración inicial
---

{% youtube 0m2HnATkHOk %}

Una vez instalado Hexo, ejecuta los siguientes comandos para inicializar Hexo en el directorio objetivo `<folder>`.

```bash
$ hexo init <folder>
$ cd <folder>
$ npm install
```

Una vez inicializado, esta es la estructura de directorios del proyecto:

```plain
.
├── _config.yml
├── package.json
├── scaffolds
├── source
|   ├── _drafts
|   └── _posts
└── themes
```

### \_config.yml

El fichero de [configuración](configuration.html). Donde puedes establecer la mayoría de ajustes.

### package.json

Datos de la aplicación. Los renderizadores [EJS](https://ejs.co/), [Stylus](http://learnboost.github.io/stylus/) y [Markdown](http://daringfireball.net/projects/markdown/) vienen instalados por defecto. Si lo deseas, puedes eliminarlos a posteriori.

```json package.json
{
  "name": "hexo-site",
  "version": "0.0.0",
  "private": true,
  "hexo": {
    "version": ""
  },
  "dependencies": {
    "hexo": "^7.0.0",
    "hexo-generator-archive": "^2.0.0",
    "hexo-generator-category": "^2.0.0",
    "hexo-generator-index": "^3.0.0",
    "hexo-generator-tag": "^2.0.0",
    "hexo-renderer-ejs": "^2.0.0",
    "hexo-renderer-stylus": "^3.0.0",
    "hexo-renderer-marked": "^6.0.0",
    "hexo-server": "^3.0.0",
    "hexo-theme-landscape": "^1.0.0"
  }
}
```

### scaffolds

El directorio de moldes ([scaffolds](writing.html#Scaffolds)). Cuando creas un nuevo artículo, Hexo usa genera el fichero mediante el modelo correspondiente.

### source

El directorio `source`. Aquí es donde colocas el contenido de tu sitio. Hexo ignora los ficheros y directorios ocultos, aquellos que empiezan con un  `_` (guion bajo) - excepto el directorio `_posts`. Los ficheros renderizables (p. ej. Markdown, HTML) serán procesados y colocados en el directorio `public`, mientras que otros ficheros serán simplemente copiados.

### themes

El directorio [themes](themes.html). Hexo generará un sitio web estático combinando los contenidos con el tema.
