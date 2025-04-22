---
title: Directorio de recursos
---

## Directorio global de recursos

Los recursos (*assets* en inglés) son aquellos ficheros que no son artículos y se guardan en la carpeta `source`, tales como imágenes, CSS o ficheros JavaScript. Por ejemplo, si vas a usar unas pocas imágenes en tu proyecto Hexo, lo más sencillo es guardarlos en un directorio como `source/images`. De esta forma, puedes acceder a ellas usando `![](/images/image.jpg)`.

## Directorio de recursos por artículo

{% youtube feIDVQ2tz0o %}

Para aquellos usuarios que esperan usar imágenes u otro tipo de recursos habitualmente, y para aquellos, que prefieren guardarlos referidos al artículo donde se usan, Hexo ofrece una manera más organizada de gestionar estos recursos. Este mecanismo requiere más dedicación, pero puede ser muy conveniente para mantener la organización de estos recursos, para activarlo se debe configurar la opción `post_asset_folder` en `_config.yml`  como `true`.

```yaml _config.yml
post_asset_folder: true
```

Con la activación de este mecanismo del directorio de recursos por artículo, Hexo creará un directorio para cada nuevo artículo generado con el comando `hexo new [layout] <title>`. Este directorio de recursos tendrá el mismo nombre que el fichero *markdown* asociado al artículo. Se deben colocar todos los recursos usados por el artículo en el directorio asociado, permitiendo referenciar cada recurso con rutas relativas, facilitando un flujo de trabajo más sencillo y adecuado.

## Complemento de etiquetas para rutas relativas

Referenciar imágenes u otros recursos mediante la sintaxis habitual de *markdown* y rutas relativas puede mostrar incorrecciones en páginas de históricos o de inicio. La comunidad ha creado complementos que solucionan este problema en Hexo 2. Sin embargo, con el lanzamiento de Hexo 3, varios [complementos de etiquetas](/docs/tag-plugins#Include-Assets) se incluyeron al núcleo básico del programa. Esto permite que se pueda referenciar fácilmente en artículos:

```
{% asset_path slug %}
{% asset_img slug [title] %}
{% asset_link slug [title] %}
```

Por ejemplo, con la opción de directorio de recursos por artículo activada, si incluyen una imagen `example.jpg` en el directorio de recursos, está _no_ aparecerá en la página de inicio si la referencias usando el sistema habitual de la sintaxis markdown `![](example.jpg)` (sin embargo, sí funcionará en el propio artículo).

Por lo tanto, la forma correcta de referenciar la imagen será usando la sintaxis del complemento de etiquetado, en vez de markdown:

```
{% asset_img example.jpg This is an example image %}
{% asset_img "spaced asset.jpg" "spaced title" %}
```

De este modo, la imagen aparecerá correctamente tanto en el artículo como en los históricos y la página inicial.

## Incrustando una imagen mediante markdown

[hexo-renderer-marked](https://github.com/hexojs/hexo-renderer-marked) 3.1.0 introduce una nueva opción para incrustar imágenes en markdown sin necesidad de usar el complemento de etiqueta.

Para activarlo:

```yml _config.yml
post_asset_folder: true
marked:
  prependRoot: true
  postAsset: true
```

Una vez habilitado, cada imagen dentro de la carpeta de recursos del artículo, será referenciada correctamente a su ruta correspondiente. Por ejemplo, "imagen.jpg" se guarda en "/2020/01/02/foo/image.jpg", implicando que es una imagen del artículo "/2020/01/02/foo/", `![](image.jpg)` será renderizado como `<img src="/2020/01/02/foo/image.jpg">`.
