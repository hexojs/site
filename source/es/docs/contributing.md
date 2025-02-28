---
title: Contribución
---

Te damos la bienvenida al desarrollo de Hexo. 🤗

## Desarrollo

Te damos la bienvenida al desarrollo de Hexo. Este documento te guiará en el proceso.

### Antes de empezar

Por favor, lee antes el [código de conducta del pacto de colaboradores](https://github.com/hexojs/hexo/blob/master/CODE_OF_CONDUCT.md).

Por favor, sigue el estilo de codificación:

- Sigue la [guía de estilo de JavaScript de Google](https://google.github.io/styleguide/jsguide.html).
- Usa tabulaciones blandas con una sangría/identación de dos espacios.
- No pongas comas primero.

También, Hexo tiene su propia [configuración ESLint](https://github.com/hexojs/eslint-config-hexo), así que, asegúrate que tu contribución haga feliz a ESLint.

### Flujo de trabajo

1. Bifurca [hexojs/hexo][].
2. Clona el repositorio en tu ordenador e instala las dependencias.

```bash
$ git clone https://github.com/<username>/hexo.git
$ cd hexo
$ npm install
$ git submodule update --init
```

3. Crea una rama de funcionalidad.

```bash
$ git checkout -b new_feature
```

4. Empieza a programar.
5. Sube la rama:

```
$ git push origin new_feature
```

6. Crea un *pull request* y describe el cambio.

### Advertencia

- Por favor, no modifiques el número de versión en `package.json`.
- Tu *pull request* soló se fusionará cuando pase los tests. No olvides ejecutar los tests antes de enviar tu código.

```bash
$ npm test
```

## Actualización de complementos oficiales

También aceptamos PR o incidencias a [complementos oficiales](https://github.com/hexojs). 🤗

## Actualizando la documentación

La documentación de Hexo es de código abierto y puedes encontrar el código fuente en [hexojs/site][].

### Flujo de trabajo

1. Bifurca [hexojs/site][]
2. Clona el repositorio e instala las dependencias.

```bash
$ npm install hexo-cli -g # If you don't have hexo-cli installed
$ git clone https://github.com/<username>/site.git
$ cd site
$ npm install
```

3. Comienza a editar la documentación. Puedes arrancar el servidor visionado previo en vivo.

```bash
$ hexo server
```

4. Empuja la rama.
5. Crea un pull request y describe el cambio.

### Traducción

#### Contribución a las traducciones

[![Crowdin](https://badges.crowdin.net/hexo/localized.svg)](https://crowdin.com/project/hexo)

Usamos la plataforma [Crowdin](https://crowdin.com/project/hexo) para la traducción, donde cualquiera puede contribuir a las traducciones y votar sin operaciones manuales en git.

#### Añadir un nuevo idioma

1. Sube una nueva incidencia para hacérnoslo saber. Los miembros con acceso al [proyecto en Crowdin](https://crowdin.com/project/hexo) incluirán el idioma en los ajustes.
1. Después de añadir el idioma en Crowdin, cualquiera puede contribuir a las traducciones a través de la plataforma.
1. Incluye el nuevo idioma a [`source/_data/language.yml`](https://github.com/hexojs/site/blob/master/source/_data/languages.yml).
1. Copia `en.yml` en [`themes/navy/languages`](https://github.com/hexojs/site/tree/master/themes/navy/languages) y renómbralo al nombre del idioma (en minúsculas).

## Notificando incidencias

Cuando encuentres problemas usando Hexo, puedes buscar en la [solución de problemas](troubleshooting.html) o preguntarme en [GitHub](https://github.com/hexojs/hexo/issues) o [Google Group](https://groups.google.com/group/hexo). Si no encuentras la solución, por favor, informa de él en GitHub.

1. Reproduce el problema en [debug mode](commands.html#Debug_mode).
2. Sigue los pasos de la plantilla de incidencias para incluir un mensaje de depuración y versión cuando notifiques una nueva incidencia en GitHub.

[hexojs/hexo]: https://github.com/hexojs/hexo
[hexojs/site]: https://github.com/hexojs/site
