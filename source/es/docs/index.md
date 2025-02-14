---
title: Documentación
---

Bienvenido a la documentación de Hexo. Si encuentras cualquier problema usando Hexo, consulta la [guía de solución de problemas](troubleshooting.html), crea una incidencia en [GitHub](https://github.com/hexojs/hexo/issues) o inicia una conversación en [Google Group](https://groups.google.com/group/hexo).

## ¿Qué es Hexo?

Hexo es un *framework* de blogs rápido, sencillo y potente. Escribe artículos en [Markdown](http://daringfireball.net/projects/markdown/) (u otros lenguajes de marcado) y Hexo genera ficheros estáticos con preciosos temas de diseño visuales en segundos.

## Instalación

Solo toma unos pocos minutos configurar Hexo. Si encuentras un problema y no encuentras la solución aquí, por favor [crea una incidencia en GigHub](https://github.com/hexojs/hexo/issues) y te ayudaremos.

{% youtube ARted4RniaU %}

### Requisitos previos

Instalar Hexo es muy sencillo y solo requiere disponer previamente de:

- [Node.js](http://nodejs.org/) (Debe ser al menos Node.js 10.13, recomendado 12.0 o superiores)
- [Git](http://git-scm.com/)

Si tu ordenador ya los tiene, ¡enhorabuena! Puede ir directamente al paso de la [instalación de Hexo](#Install-Hexo).

Si no, sigue las instrucciones siguientes para instalar todos los requisitos previos.

### Instalar Git

- Windows: Descarga e instala [git](https://git-scm.com/download/win).
- Mac: Instala con [Homebrew](https://brew.sh/), [MacPorts](http://www.macports.org/) o el [instalador](http://sourceforge.net/projects/git-osx-installer/).
- Linux (Ubuntu, Debian): `sudo apt-get install git-core`
- Linux (Fedora, Red Hat, CentOS): `sudo yum install git-core`

{% note warn Para usuarios Mac %}
Puedes encontrar algunos problemas con la compilación. Instala Xcode desde la App Store primero. Después de la instalación de Xcode, abre Xcode y navega hasta **Preferences -> Download -> Command Line Tools -> Install** para instalar las herramientas de la línea de comandos.
{% endnote %}

### Instalar Node.js

Node.js ofrece un [instalador oficial](https://nodejs.org/en/download/) para la mayoría de plataformas.

Métodos de instalación alternativos:

- Windows: Instala con [nvs](https://github.com/jasongin/nvs/) (recomendado) o [nvm](https://github.com/nvm-sh/nvm).
- Mac: Instala con [Homebrew](https://brew.sh/) o [MacPorts](http://www.macports.org/).
- Linux (DEB/RPM-based): Instala con [NodeSource](https://github.com/nodesource/distributions).
- Otros: Instala con el gestor de paquetes correspondiente. Consulta [esta guía](https://nodejs.org/en/download/package-manager/) ofrecida por Node.js.

nvs está también recomendado para Mac y Linux para evitar posibles problemas de permisos.

{% note info Windows %}
Si usas el instalador oficial, asegúrate que esté **incluido en el PATH** y activado (está activado por defecto).
{% endnote %}

{% note warn Mac / Linux %}
Si encuentras el error de permiso `EACCES` cuando intentas instalar Hexo, sigue [esta solución](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally) ofrecida por npmjs; ejecutar con root/sudo está altamente desaconsejado.
{% endnote %}

{% note info Linux %}
Si instalas Node.js con Snap, podrías necesitar ejecutar manualmente `npm install` en el directorio destino durante la [inicialización](/docs/commands#init) de un blog.
{% endnote %}

### Instalar Hexo

Una vez que todos los requisitos previos están instalados, puedes instalar Hexo con npm:

```bash
$ npm install -g hexo-cli
```

### Instalación avanzada y uso

Los usuarios avanzados pueden preferir instalar y usar el paquete `hexo`.

```bash
$ npm install hexo
```

Una vez instalado, puedes correr Hexo de dos formas:

1. `npx hexo <command>`
2. Usuarios de Linux pueden establecer la ruta relativa al directorio `node_modules/`:

```bash
echo 'PATH="$PATH:./node_modules/.bin"' >> ~/.profile
```

y ejecutar hexo usando `hexo <command>`

### Versión requerida de Node.js

Si debes usar una versión antigua de Node.js, puedes considerar instalar una versión pasada de Hexo.

Ten en consideración que no ofrecemos correcciones de errores a versiones pasadas de Hexo.

Recomendamos encarecidamente instalar siempre la [última versión](https://www.npmjs.com/package/hexo?activeTab=versions) de Hexo y la [versión recomendada](#Requirements) de Node.js, siempre que sea posible.

| Versión Hexo | Mínima (versión Node.js) | Menor que (versión que Node.js) |
| ------------ | ------------------------ | ------------------------------- |
| 7.0+         | 14.0.0                   | latest                          |
| 6.2+         | 12.13.0                  | latest                          |
| 6.0+         | 12.13.0                  | 18.5.0                          |
| 5.0+         | 10.13.0                  | 12.0.0                          |
| 4.1 - 4.2    | 8.10                     | 10.0.0                          |
| 4.0          | 8.6                      | 8.10.0                          |
| 3.3 - 3.9    | 6.9                      | 8.0.0                           |
| 3.2 - 3.3    | 0.12                     | desconocida                     |
| 3.0 - 3.1    | 0.10 o iojs              | desconocida                     |
| 0.0.1 - 2.8  | 0.10                     | desconocida                     |
