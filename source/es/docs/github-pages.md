---
title: GitHub Pages
---

En este tutorial, usaremos [GitHub Actions](https://docs.github.com/en/actions) para desplegar GitHub Pages. Funciona tanto en repositorios privados como públicos. Salta a sección [despliegue en un único comando](#One-command-deployment) si no desear subir el directorio `source` a GitHub.

1. Crea un repositorio llamado <b>_username_.github.io</b>, donde *username* is tu nombre de usuario en GitHub. Si ya tienes subido el repositorio con otro nombre, renombra el repositorio.
2. Sube los ficheros de tu directorio Hexo a la rama principal del repositorio. La rama por defecto se denomina generalmente **main**, repositorios antiguos podrían usar la rama **master**.

- Para subir la rama `main` a GitHub:

  ```
  $ git push -u origin main
  ```

- El directorio `public/` no es (y no debería ser) subido por defecto, asegúrate que `.gitignore` contiene la línea `public/`. La estructura de directorios debería ser parecido a [este repositorio](https://github.com/hexojs/hexo-starter).

3. Comprueba que la versión de Node.js que estás usando en tu ordenador con `node --versión`. Recuerda o anota la versión principal (p. ej., `v20.y.z`)
4. En las opciones del repositorio en GitHub, navega a **Settings** > **Pages** > **Source**. Modifica el código de **GitHub Actions** y guarda.
5. Crea `.github/workflows/pages.yml` en tu repositorio con el siguiente contenido (substituyendo `20` con la versión principal de Node.js obtenida en el paso previo):

```yml .github/workflows/pages.yml
name: Pages

on:
  push:
    branches:
      - main # default branch

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          # If your repository depends on submodule, please see: https://github.com/actions/checkout
          submodules: recursive
      - name: Use Node.js 20
        uses: actions/setup-node@v4
        with:
          # Examples: 20, 18.19, >=16.20.2, lts/Iron, lts/Hydrogen, *, latest, current, node
          # Ref: https://github.com/actions/setup-node#supported-version-syntax
          node-version: "20"
      - name: Cache NPM dependencies
        uses: actions/cache@v4
        with:
          path: node_modules
          key: ${{ runner.OS }}-npm-cache
          restore-keys: |
            ${{ runner.OS }}-npm-cache
      - name: Install Dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./public
  deploy:
    needs: build
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

6. Cuando el despliegue finalice, comprueba la página web _username_.github.io.

Aviso - si especificas un nombre de dominio con un `CNAME`, necesitas incluir el fichero `CNAME` al directorio `source/`. [Más información](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Página del proyecto

Si prefieres tener una página de proyecto en GitHub:

1. Navega hasta el repositorio en GitHub. Ve a la pestaña de **Settings**. Modifica **Repository name** de forma que tu blog esté disponible en <b>username.github.io/_repository_</b>, **repository** puede ser cualquier cosa, como _blog_ o _hexo_.
2. Edita **\_config.yml**, cambia el valor de `url:` a <b>https://_username_.github.io/_repository_</b>.
3. En los ajustes del repositorio en GitHub, navega a **Settings** > **Pages** > **Source**. Modifica el **GitHub Actions** y guarda.
4. Confirma los cambios y súbelos a la rama principal (*commit & push*).
5. Una vez el despliegue finalice, revisa la página web en _username_.github.io/_repository_.

## Despliegue en un comando

Las siguientes instrucciones están adaptadas de la página [despliegue en un comando](/docs/one-command-deployment).

1. Instala [hexo-deployer-git](https://github.com/hexojs/hexo-deployer-git).
2. Incluye la siguiente configuración a **\_config.yml**, (elimina líneas si fuera necesario).

```yml
deploy:
  type: git
  repo: https://github.com/<username>/<project>
  # example, https://github.com/hexojs/hexojs.github.io
  branch: gh-pages
```

3. Ejecuta `hexo clean && hexo deploy`.
4. Comprueba la página web en _username_.github.io.

## Enlaces de interés

- [GitHub Pages](https://docs.github.com/es/pages)
- [Publicación con un flujo de trabajo GitHub Actions personalizado](https://docs.github.com/es/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow)
- [actions/deploy-github-pages-site](https://github.com/marketplace/actions/deploy-github-pages-site)
