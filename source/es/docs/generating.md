---
title: Generación
---

La generación de archivos estáticos con Hexo es bastante sencilla y rápida.

```bash
$ hexo generate
```

{% youtube viEJQPVCoLU %}

### Vigilancia de modificaciones en ficheros

Hexo puede vigilar cambios en los ficheros y regenerarlos inmediatamente. Hexo comparará los códigos de control SHA1 de todos tus ficheros y solo generará aquellos ficheros con modificaciones detectadas.

```bash
$ hexo generate --watch
```

### Despliegue tras generación

Para desplegar después de la generación de ficheros, se puede ejecutar cualquiera de los siguientes comandos. No hay ninguna diferencia entre los dos.

```bash
$ hexo generate --deploy
$ hexo deploy --generate
```
