---
title: Complementos
---

Hexo tiene un potente sistema de complementos (*plugins*), que permite extender fácilmente las funcionalidades sin necesidad de modificar el código fuente del núcleo. Hay dos tipos de complementos en Hexo:

### Script

Si tu complemento es relativamente sencillo, se recomienda usar un *script*. Todo lo que se necesita es incluir los ficheros JavaScript en la carpeta `scripts` y Hexo las cargará durante la inicialización.

### Plugin

Si tu código es complicado y deseas publicarlo dentro del registro NPM, recomendamos usar un *plugin*. Primero, crea un directorio en el directorio `node_modules`. El nombre del directorio debe empezar por `hexo-` o Hexo lo ignorará.

El nuevo directorio debe contener al menos dos ficheros: uno conteniendo el código JavaScript y otro un fichero `package.json` que describirá el cometido del *plugin* y establecerá sus dependencias.

```plain
.
├── index.js
└── package.json
```

Como mínimo, se debe incluir las entradas del nombre `name`, `version` y `main` en `package.json`. Por ejemplo:

```json package.json
{
  "name": "hexo-my-plugin",
  "version": "0.0.1",
  "main": "index"
}
```

También se requiere listar tu *plugin* como una dependencia del `package.json` dentro del directorio raíz de la instancia para que Hexo lo detecte y lo cargue.

### Herramientas

Se puede hacer uso de las herramientas oficiales ofrecidas por Hexo para acelerar el desarrollo:

- [hexo-fs][]：File IO
- [hexo-util][]：Utilidades
- [hexo-i18n][]：Localización (i18n)
- [hexo-pagination][]：Generación de datos de paginación

### Publicación

Cuando tu *plugin* esté listo, puedes considerar su publicación en el [listado de plugins](/plugins) para invitar a otras personas a que lo utilicen. La publicación de tus propios *plugins* es muy similar a la [actualización de la documentación](contributing.html#Updating_Documentation).

1. Bifurca [hexojs/site][]
2. Clona el repositorio en tu ordenador e instala las dependencias.

   ```shell
   $ git clone https://github.com/<username>/site.git
   $ cd site
   $ npm install
   ```

3. Crea un nuevo fichero yaml en `source/_data/plugins/`, usa el nombre de tu *plugin* como nombre del fichero

4. Edita `source/_data/plugins/<nombre-del-plugin-name>.yml` e incluye tu *plugin*. Por ejemplo:

   ```yaml
   description: Server module for Hexo.
   link: https://github.com/hexojs/hexo-server
   tags:
     - official
     - server
     - console
   ```

5. Sube tu rama.
6. Crea un *pull request* y describe el cambio.

[hexo-fs]: https://github.com/hexojs/hexo-fs
[hexo-util]: https://github.com/hexojs/hexo-util
[hexo-i18n]: https://github.com/hexojs/hexo-i18n
[hexo-pagination]: https://github.com/hexojs/hexo-pagination
[hexojs/site]: https://github.com/hexojs/site
