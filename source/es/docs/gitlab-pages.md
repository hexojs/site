---
title: GitLab Pages
---

1. Crea un nuevo repositorio llamado <b>_username_.gitlab.io</b>, donde username es tu nombre de usuario en GitLab. Si ya tienes un subido renómbralo.
2. Habilita *Shared Runners* desde **Settings** > **CI/CD** > **Runners** > **Enable shared runners for this project**.
3. Sube los ficheros de tu directorio proyecto Hexo al repositorio. El directorio `public/` no es (y no debería ser) subido por defecto, asegúrate que el fichero `.gitignore` contiene la línea `public/`. La estructura del directorio debería ser parecida a [este repositorio](https://gitlab.com/pages/hexo).
4. Comprueba que versión de Node.js estás usando en tu máquina local `node --version`. Anota el número de versión principal (p. ej., `v16.y.z`)
5. Incluye el fichero `.gitlab-ci.yml` al directorio raíz de tu repositorio (junto a \_config.yml y package.json) con el siguiente contenido (modificando `16` con la versión de Node.js anotada en el paso previo):

```yml
image: node:16-alpine
cache:
  paths:
    - node_modules/

before_script:
  - npm install hexo-cli -g
  - npm install

pages:
  script:
    - npm run build
  artifacts:
    paths:
      - public
  rules:
    - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH
```

6. _username_.gitlab.io debería estar activa, una vez que GitLab CI termine el trabajo de despliegue,
7. (Opcional) Si desea inspeccionar los recursos del sitio generados (html, css, js, etc.), estos pueden ser localizados en [job artifact](https://docs.gitlab.com/ee/ci/jobs/job_artifacts.html).

## Página del proyecto

Si prefieres tener una página de proyecto en GitLab:

1. Navega a **Settings** > **General** > **Advanced** > **Change path**. Modifica el valor a un nombre, de forma que el sitio web esté disponible en <b>username.gitlab.io/_repository_</b>. Puede ser cualquier nombre, como _blog_ o _hexo_.
2. Edita **\_config.yml**, modifica el valor de la `url:` a `https://username.gitlab.io/repository`.
3. Confirma los cambios con *commit* y súbelos al repositorio con *push*.

## Enlaces de interés

- [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/)
- [GitLab CI Docs](https://docs.gitlab.com/ee/ci/yaml/)
