---
title: GitHub Pages
---

В этом туториале мы используем [Travis CI](https://travis-ci.com/) для деплоя в Github Pages. [Travis CI](https://travis-ci.com/) бесплатен для репозиториев с открытым исходным кодом, то есть ветка `master` вашего репозитория должна быть публичной. Пожалуйста, перейдите в описание [приватного репозитория](#Private-repository), если вы предпочитаете не открывать свой исходный код, либо откажитесь от загрузки своих файлов на GitHub.

1. Создайте репозиторий с названием <b>_username_.github.io</b>, где `username` — ваше имя пользователя GitHub. Если вы уже загрузили файлы в репозиторий с другим названием, просто переименуйте его.
2. Загрузите `push` файлы вашей папки Hexo в этот репозиторий. The default branch is usually **main**, older repositories may use **master** branch.

- To push `main` branch to GitHub:

  ```
  $ git push -u origin main
  ```

- Папка `public/` не должна загружаться по умолчанию, проверьте, что файл `.gitignore` содержит строку `public/`. Структура папки должна быть такой же, как в [этом репозитории](https://github.com/hexojs/hexo-starter), без файла `.gitmodules`.

3. Check what version of Node.js you are using on your local machine with `node --version`. Make a note of the major version (e.g., `v20.y.z`)
4. In your GitHub repo's setting, navigate to **Settings** > **Pages** > **Source**. Change the source to **GitHub Actions** and save.
5. Create `.github/workflows/pages.yml` in your repo with the following contents (substituting `20` to the major version of Node.js that you noted in previous step):

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

6. Проверьте веб-страницу по адресу _username_.github.io.

Note - if you specify a custom domain name with a `CNAME`, you need to add the `CNAME` file to the `source/` folder. [More info](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Страница проекта

Если вы препочитаете страницу проекта на GitHub:

1. Перейдите на страницу своего репо на GitHub. Откройте таб **Settings**. Измените **Repository name**, чтобы ваш блог был доступен на <b>username.github.io/_repository_</b>, **repository** может быть любым словом, как _blog_ или _hexo_.
2. Редактируйте файл **\_config.yml**, изменив значение `root:` на `/<repository>/` (должно начинаться и заканчиваться косой чертой).
3. В новой вкладке сгенерируйте [новый токен](https://github.com/settings/tokens) с областью видимости **repo**. В поле **Environment Variables**, вставьте **GH_TOKEN** в качестве имени и токен в качестве значения. Нажмите `Add` для сохранения.
4. Commit and push to the default branch.
5. Как только Travis CI завершит деплой, сгенерированные страницы появятся в ветке `gh-pages` вашего репо.

## One-command deployment

Следующая инструкция адаптирована со страницы [развёртывание одной командой](/docs/one-command-deployment) page.

1. Запустите `hexo clean && hexo deploy`.
2. Добавьте следующую конфигурацию в **\_config.yml**, (удалите существующие строки, если таковые имеются)

```yml
deploy:
  type: git
  repo: https://github.com/<username>/<project>
  # example, https://github.com/hexojs/hexojs.github.io
  branch: gh-pages
```

3. Установите [hexo-deployer-git](https://github.com/hexojs/hexo-deployer-git).
4. Проверьте страницу на _username_.github.io.

## Полезные ссылки

- [GitHub Pages](https://docs.github.com/en/pages)
- [Publishing with a custom GitHub Actions workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow)
- [actions/deploy-github-pages-site](https://github.com/marketplace/actions/deploy-github-pages-site)
