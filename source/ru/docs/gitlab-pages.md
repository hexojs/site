---
title: GitLab Pages
---

1. Создайте новый репозиторий под названием <b>_username_.gitlab.io</b>, где `username` — ваше имя пользователя GitLab. Если вы уже загрузили файлы в репозиторий с другим названием, просто переименуйте его.
2. Включите возможность Shared Runners через настройки `Settings -> CI / CD -> Shared Runners`.
3. Запушьте файлы вашей папки Hexo в этот репозиторий. Папка `public/` не должна загружаться по умолчанию, проверьте, что файл `.gitignore` содержит строку `public/`. Структура папки должна быть такой же, как в [этом репозитории](https://gitlab.com/pages/hexo).
4. Check what version of Node.js you are using on your local machine with `node --version`. Make a note of the major version (e.g., `v16.y.z`)
5. Добавьте файл `.gitlab-ci.yml` в ваш репозиторий (рядом с \_config.yml & package.json) со следующий контентом:

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

6. _username_.gitlab.io должен заработать, как только GitLab CI закончит деплой.
7. (Опционально) Если вы хотите проверить содержимое папок с материалами (html, css, js и т.д.), они могут быть найдены в разделе[job artifact](https://docs.gitlab.com/ee/ci/jobs/job_artifacts.html).

## Страница проекта

Если вы препочитаете страницу проекта на GitLab:

1. Перейдите в настройки `Settings -> General -> Advanced -> Change path`. Измените значение на имя так, чтобы сайт был доступен по адресу <b>username.gitlab.io/_name_</b>. Это может быть любое слово, как _blog_ или _hexo_.
2. Редактируйте **\_config.yml**, изменив значение `root:` с `""` на `"name"`.
3. Закоммитьте и запушьте.

## Полезные ссылки

- [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/)
- [Документация GitLab CI](https://docs.gitlab.com/ee/ci/yaml/)
