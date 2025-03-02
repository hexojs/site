---
title: Comandos
---

## init

```bash
$ hexo init [folder]
```

Inicializa un sitio web. Si no se indica ningún directorio, `folder` en inglés, Hexo generará el sitio en directorio actual.

Este comando es un atajo que ejecuta los siguientes pasos:

1. Git clone [hexo-starter](https://github.com/hexojs/hexo-starter) incluyendo [hexo-theme-landscape](https://github.com/hexojs/hexo-theme-landscape) dentro del actual directorio o el directorio destino especificado.
2. Instala las dependencias usando algún gestor de paquetes: [Yarn 1](https://classic.yarnpkg.com/lang/en/), [pnpm](https://pnpm.io) o [npm](https://docs.npmjs.com/cli/install), cualquiera que esté instalado; si hay más de uno, la prioridad es como se indica en el orden previo. npm viene junto a  [Node.js](/docs/#Install-Node-js) por defecto.

## new

```bash
$ hexo new [layout] <title>
```

Crea un nuevo artículo. Si no se indica un diseño, `layout` en inglés, Hexo usará `default_layout` de [\_config.yml](configuration.html). Usa el diseño `draft` para crear  un borrador. Si el título, `title`, contiene espacios, lo debes entrecomillar con dobles comillas.

| Opción            | Descripción                                        |
| ----------------- | -------------------------------------------------- |
| `-p`, `--path`    | Ruta al artículo. Personaliza la ruta al artículo. |
| `-r`, `--replace` | Reemplaza el artículo actual en caso de existir.   |
| `-s`, `--slug`    | *Post slug*.  Personaliza la URL del artículo.     |

Hexo usará el título para definir la ruta al fichero por defecto. Para páginas, creará un directorio con dicho nombre y un fichero `index.md` en su interior. Usa la opción `--path` para sobreescribir este comportamiento y definir la ruta del fichero:

```bash
hexo new page --path about/me "About me"
```

creará el fichero `source/about/me.md` con el título "About me" en el frontispicio.

El título es obligatorio. Por ejemplo, esto no resultará en el comportamiento que podrías esperar:

```bash
hexo new page --path about/me
```

creará un artículo `source/_posts/about/me.md` con el título "page" en el frontispicio. Esto es debido a que sólo hay un argumento (`page`) y el diseño por defecto es `post`.

## generate

```bash
$ hexo generate
```

Genera los ficheros estáticos.

| Opción                | Descripción                                                               |
| --------------------- | ------------------------------------------------------------------------- |
| `-d`, `--deploy`      | Despliega después de terminar la generación                               |
| `-w`, `--watch`       | Vigila las modificaciones de los ficheros                                 |
| `-b`, `--bail`        | Levanta un error si  cualquier excepción es lanzada durante la generación |
| `-f`, `--force`       | Fuerza la regeneración                                                    |
| `-c`, `--concurrency` | Máximo número de ficheros a generar en paralelo. Por defecto infinito.    |

## publish

```bash
$ hexo publish [layout] <filename>
```

Publica un borrador.

## server

```bash
$ hexo server
```

Inicia un servidor local. Esto es en `http://localhost:4000/` por defecto.

| Opción           | Descripción                                            |
| ---------------- | ------------------------------------------------------ |
| `-p`, `--port`   | Modifica el número de puerto                           |
| `-s`, `--static` | Solo muestra ficheros estáticos                        |
| `-l`, `--log`    | Habilita el *logger*. Modifica el formato de *logger*. |

## deploy

```bash
$ hexo deploy
```

Despliega tu sitio web.

| Opción             | Descripción                 |
| ------------------ | --------------------------- |
| `-g`, `--generate` | Genera antes del despliegue |

## render

```bash
$ hexo render <file1> [file2] ...
```

Renderiza ficheros.

| Opción           | Descripción          |
| ---------------- | -------------------- |
| `-o`, `--output` | Destino de la salida |

## migrate

```bash
$ hexo migrate <type>
```

[Migra](migration.html) contenido de otros sistemas de blogs.

## clean

```bash
$ hexo clean
```

Limpia el fichero caché (`db.json`) y ficheros generados (`public`).

## list

```bash
$ hexo list <type>
```

Lista todas las rutas.

## version

```bash
$ hexo version
```

Muestra información de la versión.

## config

```bash
$ hexo config [key] [value]
```

Lista la configuración de (`_config.yml`). Si la clave, `key` en inglés, se especifica, solo el valor de la clave correspondiente se mostrará; si la clave y el valor, `value` en inglés, se especifican, entonces, se modificará el valor de dicha opción `key` con `value`.

## Opciones

### Modo seguro

```bash
$ hexo --safe
```

Deshabilita la carga de complementos y *scripts*. Intenta esto si encuentras problemas después de instalar algún complemento.

### Modo depuración

```bash
$ hexo --debug
```

Se registran mensajes informativos a la terminal y al fichero `debug.log`.  Intenta esto si encuentras problemas de cualquier tipo con Hexo. Si encuentras errores, por favor [crea una incidencia en GitHub](https://github.com/hexojs/hexo/issues/new?assignees=&labels=&projects=&template=bug_report.yml).

### Modo silencioso

```bash
$ hexo --silent
```

Omite cualquier salida en la terminal.

### Personaliza la ruta al fichero de configuración

```bash
$ hexo --config custom.yml
```

Usa un fichero de configuración personalizado (en vez de `_config.yml`). También acepta una lista separada por comas (sin espacios) de ficheros de configuración JSON o YAML que se combinarán en un único fichero llamado `_multiconfig.yml`.

```bash
$ hexo --config custom.yml,custom2.json
```

### Mostrar borradores

```bash
$ hexo --draft
```

Muestra los borradores (guardados en el directorio `source/_drafts`).

### Personaliza el CWD

```bash
$ hexo --cwd /path/to/cwd
```

Personaliza la ruta del directorio de trabajo actual (CWD por sus siglas en inglés).
