---
title: Despliegue en un comando
---

Hexo ofrece una estrategia de despliegue rápida y sencilla. Solo necesitas un único comando para desplegar tu sitio en el servidor.

```bash
$ hexo deploy
```

Instala el complemento/s necesario que sea compatible con el método de despliegue de tu repositorio/servidor.

El despliegue se configura generalmente a través de **\_config.yml**. Una configuración válida debe tener el campo `type`. Por ejemplo:

```yaml
deploy:
  type: git
```

Puedes usar múltiples desplegadores. Hexo ejecutará cada desplegador en orden.

```yaml
deploy:
  - type: git
    repo:
  - type: heroku
    repo:
```

Consulta la lista de [Complementos](https://hexo.io/plugins/) para más complementos de despliegue.

## Git

1. Instala [hexo-deployer-git][].

```bash
$ npm install hexo-deployer-git --save
```

2. Edita **\_config.yml** (con los valores correspondientes del ejemplo mostrados más abajo como comentarios):

```yaml
deploy:
  type: git
  repo: <repository url> # https://bitbucket.org/JohnSmith/johnsmith.bitbucket.io
  branch: [branch]
  message: [message]
```

| Opción    | Descripción                                                                                                                 | Valores por defecto                                                                |
| --------- | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `repo`    | URL del repositorio objetivo                                                                                                |                                                                                    |
| `branch`  | Nombre de la rama.                                                                                                          | `gh-pages` (GitHub)<br>`coding-pages` (Coding.net)<br>`master` (otros) |
| `message` | Personaliza el mensaje *commit*.                                                                                            | `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`              |
| `token`   | Valor del token opcional de autenticación en el repo. Añade `$` como prefijo para leer el token de las variables de entorno |                                                                                    |

3. Despliega tu sitio con `hexo clean && hexo deploy`.

- Se te solicitará el nombre usuario y la contraseña del repositorio objetivo, a no ser que la autenticación se realice mediante un token o clave ssh.
- hexo-deployer-git no almacena el nombre de usuario ni la contraseña. Usa [git-credential-cache](https://git-scm.com/docs/git-credential-cache) para almacenarlos temporalmente.

4. Navega a las opciones de tu repositorio modifica la rama "Pages" a `gh-pages` (o la rama especificada en tu configuración). El sitio desplegado debe estar presente en el enlace mostrado el ajuste de "Pages".

## Heroku

Instala [hexo-deployer-heroku][].

```bash
$ npm install hexo-deployer-heroku --save
```

Edita los ajustes.

```yaml
deploy:
  type: heroku
  repo: <repository url>
  message: [message]
```

| Opción               | Descripción                                                                                                       |
| -------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `repo`, `repository` | URL del repositorio de Heroku                                                                                     |
| `message`            | Personaliza el mensaje commit (Por defecto `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`) |

## Netlify

[Netlify](https://www.netlify.com/) ofrece un depliegue continuo (Git-triggered builds), y un CDN global inteligente, DNS completo (incluyendo dominios personalizados), HTTPs automatizado, aceleración de *assets* y mucho más. Es una plataforma unificada que automatiza tu código para alto rendimiento, mantenimiento sencillo de sitios y aplicaciones web.

Hay dos métodos distintos para desplegar tus sitios en Netlify. El más común es usar la interfaz de usuario web. Visita [creación de una nueva página](https://app.netlify.com/start), selecciona el repo de un proyecto en GitHub, GitLab, o Bitbucket, y sigue las instrucciones.

De forma alternativa, puedes usar la herramienta de Netlify [Node based CLI](https://www.netlify.com/docs/cli/) para gestionar y desplegar sitios en Netlify sin abandonar tu terminal.

Puedes también añadir un [Deploy to Netlify Button](https://www.netlify.com/docs/deploy-button/) en tu fichero README.file para permitir a otros crear una copia de tu repositorio y ser desplegado en Netlify mediante un clic.

## Rsync

Instala [hexo-deployer-rsync][].

```bash
$ npm install hexo-deployer-rsync --save
```

Edita los ajustes.

```yaml
deploy:
  type: rsync
  host: <host>
  user: <user>
  root: <root>
  port: [port]
  delete: [true|false]
  verbose: [true|false]
  ignore_errors: [true|false]
```

| Opción          | Descripción                                 | Valor por defecto |
| --------------- | ------------------------------------------- | ----------------- |
| `host`          | Dirección del host remoto                   |                   |
| `user`          | Nombre de usuario                           |                   |
| `root`          | Directorio raíz del host remoto             |                   |
| `port`          | Puerto                                      | 22                |
| `delete`        | Elimina ficheros antiguos en el host remoto | true              |
| `verbose`       | Muestra mensajes detallados                 | true              |
| `ignore_errors` | Ignora errores                              | false             |

## FTPSync

Install [hexo-deployer-ftpsync][].

```bash
$ npm install hexo-deployer-ftpsync --save
```

Edita los ajustes.

```yaml
deploy:
  type: ftpsync
  host: <host>
  user: <user>
  pass: <password>
  remote: [remote]
  port: [port]
  clear: [true|false]
  verbose: [true|false]
```

| Opción    | Descripción                                                                       | Valor por defecto |
| --------- | --------------------------------------------------------------------------------- | ----------------- |
| `host`    | Dirección del host remoto                                                         |                   |
| `user`    | Nombre de usuario                                                                 |                   |
| `pass`    | Contraseña                                                                        |                   |
| `remote`  | Directorio raíz del host remoto                                                   | `/`               |
| `port`    | Puerto                                                                            | 21                |
| `clear`   | Elimina todos los ficheros y directorios del directorio remoto antes de la subida | false             |
| `verbose` | Muestra mensajes detallados                                                       | false             |

## SFTP

Install [hexo-deployer-sftp][]. Despliega el sitio mediante SFTP, permitiendo conexiones sin contraseña usando ssh-agent.

```bash
$ npm install hexo-deployer-sftp --save
```

Edita los ajustes.

```yaml
deploy:
  type: sftp
  host: <host>
  user: <user>
  pass: <password>
  remotePath: [remote path]
  port: [port]
  privateKey: [path/to/privateKey]
  passphrase: [passphrase]
  agent: [path/to/agent/socket]
```

| Opción        | Descripción                                              | Valores por defecto |
| ------------- | -------------------------------------------------------- | ------------------- |
| `host`        | Dirección del host remoto                                |                     |
| `port`        | Puerto                                                   | 22                  |
| `user`        | Nombre de usuario                                        |                     |
| `pass`        | Contraseña                                               |                     |
| `privateKey`  | Ruta la clave privada ssh                                |                     |
| `passphrase`  | Frase de paso opcional para la clave privada             |                     |
| `agent`       | Ruta al socket del ssh-agent                             | `$SSH_AUTH_SOCK`    |
| `remotePath`  | Ruta al directorio raíz del host remoto                  | `/`                 |
| `forceUpload` | Sobreescribe ficheros existentes                         | false               |
| `concurrency` | Número máximo de tareas SFTP procesadas concurrentemente | 100                 |

## Vercel

[Vercel](https://vercel.com) es una plataforma en la nube que habilita a los desarrolladores alojar sitios Jamstack instantáneamente, escalado automático, y no requiere supervisión, con nula configuración. Ofrecen una red perimetral global, cifrado SSL, compresión de recursos, invalidación de caché y más.

Paso 1: Añade un script de generación a tu fichero`package.json`:

```json
{
  "scripts": {
    "build": "hexo generate"
  }
}
```

Paso 2: Despliega tu sitio web Hexo a Vercel

Para desplegar tu aplicación Hexo con una [Vercel for Git Integration](https://vercel.com/docs/git-integrations), asegúrate de que ha sido subido a un repositorio Git.

Importa el proyecto en Vercel usando [Import Flow](https://vercel.com/import/git). Durante la importación, encontrarás opciones relevantes preconfiguradas para ti; sin embargo, puedes elegir modificar cualquiera de estas opciones, una lista de la cual puede ser encontrada [aquí](https://vercel.com/docs/build-step#build-&-development-settings).

Después que tu proyecto haya sido importado, todos las subidas a las ramas generarán [Preview Deployments](https://vercel.com/docs/platform/deployments#preview), y todos los cambios realizados a la [Production Branch](https://vercel.com/docs/git-integrations#production-branch) (generalmente "main") resultará en un a [Production Deployment](https://vercel.com/docs/platform/deployments#production).

De forma alternativa, puedes clicar en el botón de despliegue para crear un nuevo proyecto:

[![Deploy Vercel](https://vercel.com/button)](https://vercel.com/new/hexo)

## Bip

[Bip](https://bip.sh) es un servicio de alojamiento comercial que ofrece despliegue sin tiempo de inactividad, una CDN global, SSL, ancho de banda ilimitado y más para sitios web estáticos. Los planes están disponibles con un modelo de pago por uso, por dominio.

Comenzar a usarlo es rápido y sencillo, dado que Bip ofrece directamente soporte para Hexo. Esta guía asume que dispondes [un dominio Bip y Bip CLI instalado](https://bip.sh/getstarted).

1: Inicializa el directorio de tu proyecto

```bash
$ bip init
```

Sigue las instrucciones y contesta a las preguntas sobre el dominio al que quieres desplegar. Bip detectará que estás usando Hexo, y configurará los ajustes del proyecto como el directorio de código fuente automáticamente.

2: Despliega tu sitio web

```bash
$ hexo generate —deploy && bip deploy
```

Después de unos momentos, tu sitio web estará desplegado.

## Otros métodos

Todos los ficheros generados se guardan en el directorio `public`. Puedes copiarlos donde desees.

[hexo-deployer-git]: https://github.com/hexojs/hexo-deployer-git
[hexo-deployer-heroku]: https://github.com/hexojs/hexo-deployer-heroku
[hexo-deployer-rsync]: https://github.com/hexojs/hexo-deployer-rsync
[hexo-deployer-ftpsync]: https://github.com/hexojs/hexo-deployer-ftpsync
[hexo-deployer-sftp]: https://github.com/lucascaro/hexo-deployer-sftp
