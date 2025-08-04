---
title: Servidor
---

## [hexo-server][]

Con el lanzamiento de Hexo 3 el servidor se separó del módulo principal. Para empezar a usar el servidor, primero debes instalar [hexo-server][].

```bash
$ npm install hexo-server --save
```

Una vez el servidor ha sido instalado, ejecuta el siguiente comando para iniciar el servidor. Tu sitio web será accesible desde `http://localhost:4000` por defecto. Cuando esté ejecutándose, Hexo vigilará las modificaciones de los ficheros y actualizará automáticamente, por lo que no será necesario reiniciar el servidor.

```bash
$ hexo server
```

Si deseas cambiar el puerto, o te saltan errores `EADDRINUSE`, usa la opción `-p` para establecer un puerto distinto.

```bash
$ hexo server -p 5000
```

### Modo estático

En el modo estático, solo los ficheros en el directorio `public` serán accesibles y la vigilancia de modificaciones en los archivos estará deshabilitada. Se debe ejecutar `hexo generate` antes de iniciar el servidor. Por regla general, se usa en producción.

```bash
$ hexo server -s
```

### IP personalizada

Hexo ejecuta el servidor en `0.0.0.0` por defecto. Se puede modificar la IP por defecto.

```bash
$ hexo server -i 192.168.1.1
```

[hexo-server]: https://github.com/hexojs/hexo-server
