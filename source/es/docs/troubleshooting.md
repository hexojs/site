---
title: Resolución de problemas
---

En caso de que experimentes problemas mientras usas Hexo, aquí encontrarás una lista de soluciones para las incidencias más comunes. Si esta página no resuelva tu problema, trata de buscar en [GitHub](https://github.com/hexojs/hexo/issues) o en nuestro [Google Group](https://groups.google.com/group/hexo).

## Errores de análisis sintáctico de YAML

```plain
JS-YAML: incomplete explicit mapping pair; a key node is missed at line 18, column 29:
      last_updated: Last updated: %s
```

Encierra la cadena de texto entre comillas dobles si contiene dos puntos (`:`).

```plain
JS-YAML: bad indentation of a mapping entry at line 18, column 31:
      last_updated:"Last updated: %s"
```

Asegúrate de incluir sangría con espacios e incluir un espacio después de `:`.

Puedes consultar las [especificaciones de YAML](http://www.yaml.org/spec/1.2/spec.html) para más detalles.

## EMFILE Error

```plain
Error: EMFILE, too many open files
```

Aunque Node.js tiene E/S no bloqueante, el máximo número de E/S síncrona está limitada por el sistema. Puede surgir un error EMFILE cuando se intenta generar una gran cantidad de ficheros. Puedes ejecutar el siguiente comando para aumentar este límite en las operaciones E/S síncronas.

```bash
$ ulimit -n 10000
```

**Error: cannot modify limit**

En caso de encontrar este error:

```bash
$ ulimit -n 10000
ulimit: open files: cannot modify limit: Operation not permitted
```

Significa que alguna configuración general está impidiendo aumentar `ulimit` a cierto límite.

Entonces, para saltarse este límite:

1. Incluye la siguiente línea en "/etc/security/limits.conf":

```
* - nofile 10000

# '*' applies to all users and '-' set both soft and hard limits
```

- El ajuste superior puede no funcionar en algunos casos, asegúrate "/etc/pam.d/login" y "/etc/pam.d/lightdm" contienen la siguiente línea. (Ignora este paso si esos ficheros no existen)

```
session required pam_limits.so
```

2. Si te encuentras en una distribución [basada en systemd](https://en.wikipedia.org/wiki/Systemd#Adoption), systemd puede sobreescribir "limits.conf". Para establecer el límite en systemd, incluye la próxima línea en "/etc/systemd/system.conf" y "/etc/systemd/user.conf":

```
DefaultLimitNOFILE=10000
```

3. Reinicio

## Proceso sin memoria suficiente

Cuando encuentras este error durante la generación:

```
FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - process out of memory
```

Aumenta la memoria del *heap* cambiando la primera línea de `hexo-cli` (ejecuta `which hexo` para buscar el fichero).

```
#!/usr/bin/env node --max_old_space_size=8192
```

[Out of memory while generating a huge blog · Issue #1735 · hexojs/hexo](https://github.com/hexojs/hexo/issues/1735)

## Problemas de despliegue con Git

### RPC failed

```plain
error: RPC failed; result=22, HTTP code = 403

fatal: 'username.github.io' does not appear to be a git repository
```

Asegúrate que has [configurado git](https://help.github.com/articles/set-up-git) en tu ordenador correctamente o trata de usar la URL HTTPS del repositorio.

### Error: ENOENT: no such file or directory

Si obtienes un error como `Error: ENOENT: no such file or directory` es debido a mezclar mayúsculas y minúsculas en tus etiquetas, categorías, o ficheros. Git no puede automáticamente combinar este cambio, así que rompe la ramificación automática.

Para solucionar esto, intenta

1. Comprueba todos los caracteres de las etiquetas y categorías y asegúrate de que son todas del mismo tipo (mayúsculas o minúsculas).
1. Commit
1. Limpia y genera: `./node_modules/.bin/hexo clean && ./node_modules/.bin/hexo generate`
1. Copia manualmente el directorio al escritorio
1. Cambia desde la rama principal a la rama de despliegue localmente
1. Copia los contenidos del directorio público de tu escritorio en la rama de despliegue
1. Commit. Deberías ver cualesquiera conflictos de combinación que puedes resolver manualmente.
1. Cambia de nuevo a la rama principal y despliega normalmente: `./node_modules/.bin/hexo deploy`

## Problemas de servidor

```plain
Error: listen EADDRINUSE
```

Puede que hayas empezado dos servidores Hexo al mismo tiempo o podría ser que otra aplicación esté usando el mismo puerto. Intenta modificar el ajuste de `port` o inicia el servidor Hexo con `-p`.

```bash
$ hexo server -p 5000
```

## Problemas de instalación de complementos

```plain
npm ERR! node-waf configure build
```

Este error puede ocurrir cuando intentas instalar un complemento escrito en C, C++ u otro lenguaje distinto a JavaScript. Asegúrate que tienes instalado el compilador correcto en tu ordenador.

## Error con DTrace (Mac OS X)

```plain
{ [Error: Cannot find module './build/Release/DTraceProviderBindings'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './build/default/DTraceProviderBindings'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './build/Debug/DTraceProviderBindings'] code: 'MODULE_NOT_FOUND' }
```

La instalación de DTrace puede estar fallando, ejecuta esto:

```sh
$ npm install hexo --no-optional
```

Consulta [#1326](https://github.com/hexojs/hexo/issues/1326#issuecomment-113871796)

## Itera el modelo de datos entre Jade o Swig

Hexo usa [Warehouse][] para su modelo de datos. No es un array, así que puede debas transformar objetos en iterables.

```
{% for post in site.posts.toArray() %}
{% endfor %}
```

## La información no se actualiza

Algunos datos no pueden ser actualizados, o los nuevos ficheros generados son idénticos a los de la última versión. Limpia la caché e inténtalo de nuevo.

```bash
$ hexo clean
```

## Ningún comando se ejecuta

Cuando no puedes ejecutar ningún comando excepto `help`, `init` y `version` y obtienes el contenido de `hexo help`, puede ser debido a que falta `hexo` en `package.json`:

```json
{
  "hexo": {
    "version": "3.2.2"
  }
}
```

## Escapado de contenido

Hexo usa [Nunjucks][] para renderizar artículos ([Swig][] se usaba en versiones más antiguas, que comparte una sintaxis similar). El contenido encerrado con `{{ }}` o `{% %}` será analizado y puede generar problemas. Se puede saltar el análisis de sintaxis encerrándolos con el complemento de etiquetas [`raw`](/docs/tag-plugins#Raw) un acento grave `` `{{ }}` `` o triple. De forma alternativa, las etiquetas Nunjucks pueden deshabilitarse a través del ajuste de renderizado (en caso de estar permitido), [API](/api/renderer#Disable-Nunjucks-tags) o en el [frontispicio](/docs/front-matter).

```
{% raw %}
Hello {{ world }}
{% endraw %}
```

````
```
Hello {{ world }}
```
````

## ENOSPC Error (Linux)

En ciertas ocasiones, ejecutar el comando `$ hexo server` retorna un error:

```
Error: watch ENOSPC ...
```

Puede ser solucionado ejecutando `$ npm dedupe` o, si eso no ayuda, intenta lo siguiente en la consola de Linux:

```
$ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

Esto aumentará el límite de ficheros que puedes vigilar.

## EMPERM Error (Windows Subsystem for Linux)

Cuando ejecutas `$ hexo server` en un entorno BashOnWindows, retorna el siguiente error:

```
Error: watch /path/to/hexo/theme/ EMPERM
```

Desafortunadamente, WSL no permite vigilantes del sistema de archivos. Por tanto, la característica de actualización en vivo del servidor de hexo no está disponible. Puedes ejecutar el servidor desde un entorno WSL generando primero los ficheros y luego corriendo el servidor en modo estático.

```sh
$ hexo generate
$ hexo server -s
```

Esto es una [incidencia en BashOnWindows conocida](https://github.com/Microsoft/BashOnWindows/issues/216), y el 15 de agosto de 2016, el equipo de Windows indicó que estaba trabajando en ella. Puedes consultar las actualizaciones sobre el progreso y solicitar que la prioriticen en [ página de sugerencias de incidencias de UserVoice](https://wpdev.uservoice.com/forums/266908-command-prompt-console-bash-on-ubuntu-on-windo/suggestions/13469097-support-for-filesystem-watchers-like-inotify).

## Error de renderizado de plantilla

En ocasiones, cuando se ejecuta el comando `$ hexo generate` se devuelve el siguiente error:

```
FATAL Something's wrong. Maybe you can find the solution here: http://hexo.io/docs/troubleshooting.html
Template render error: (unknown path)
```

Posibles motivos:

- Hay algunas palabras irreconocibles en tu fichero, p. ej. caracteres de longitud cero.
- Uso incorrecto o limitación del [complemento de etiquetas](/docs/tag-plugins).

  - El estilo de bloque del complemento de etiquetas con contenido no cerrado de forma incorrecta `{% endplugin_name %}`

  ```
  # Incorrect
  {% codeblock %}
  fn()
  {% codeblock %}

  # Incorrect
  {% codeblock %}
  fn()

  # Correct
  {% codeblock %}
  fn()
  {% endcodeblock %}
  ```

  - Tener sintaxis del tipo Nunjucks dentro de un complemento de etiqueta, p. ej. [`{% raw %} {# {% endraw %}`](https://mozilla.github.io/nunjucks/templating.html#comments). Una forma de evitar este error para este ejemplo es usar el [triplete acento grave](/docs/tag-plugins#Backtick-Code-Block). La sección [transliteración de contenidos](/docs/troubleshooting#Escape-Contents) incluye más detalles.

  ```
  {% codeblock lang:bash %}
  Size of array is ${#ARRAY}
  {% endcodeblock %}
  ```

## YAMLException (Issue [#4917](https://github.com/hexojs/hexo/issues/4917))

Actualizar a `hexo^6.1.0` desde una versión anterior, puede ocasionr el siguiente error cuando se ejecuta `$ hexo generate`:

```
YAMLException: Specified list of YAML types (or a single Type object) contains a non-Type object.
    at ...
```

Esto puede estar ocasionado por una dependencia incorrecta (p. ej. `js-yaml`) que no puede ser resuelta automáticamente por el gestor de paquetes, y quizás debas actualizarlo manualmente ejecutando:

```sh
$ npm install js-yaml@latest
```

o

```sh
$ yarn add js-yaml@latest
```

si usas `yarn`.

[Warehouse]: https://github.com/hexojs/warehouse
[Swig]: https://node-swig.github.io/swig-templates/
[Nunjucks]: https://mozilla.github.io/nunjucks/
