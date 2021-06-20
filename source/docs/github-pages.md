---
title: GitHub Pages
---

In this tutorial, we use [GitHub Actions](https://docs.github.com/en/actions) to deploy GitHub Pages. It works in both public and private repository. Skip to the [One-command deployment](#One-command-deployment) section if you prefer not to upload your source folder to GitHub.

1. Create a repo named <b>*username*.github.io</b>, where username is your username on GitHub. If you have already uploaded to other repo, rename the repo instead.
2. Add the following *highlighted* lines to `package.json`: (skip this step if there are existing lines)

{% codeblock lang:json mark:2-4 %}
{
  "scripts": {
    "build": "hexo generate"
  },
  "hexo": {
    "version": "5.0.0"
  },
  "dependencies": {
    "hexo": "^5.0.0",
    ...
  }
}
{% endcodeblock %}

3. Push the files of your Hexo folder to the **`source` branch** of your repository. The `public/` folder is not (and should not be) uploaded by default, make sure the `.gitignore` file contains `public/` line. The folder structure should be roughly similar to [this repo](https://github.com/hexojs/hexo-starter), without the `.gitmodules` file.
  
- To push `source` to GitHub:

  ```
  $ git push origin source
  ```

4. Add `.github/workflows/pages.yml` file to your repo with the following content:

```yml .github/workflows/pages.yml
name: Pages

on:
  push:
    branches:
      - source  # default branch

jobs:
  pages:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js 12.x
        uses: actions/setup-node@v1
        with:
          node-version: '12.x'
      - name: Cache NPM dependencies
        uses: actions/cache@v2
        with:
          path: node_modules
          key: ${{ runner.OS }}-npm-cache
          restore-keys: |
            ${{ runner.OS }}-npm-cache
      - name: Install Dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
          publish_branch: master  # deploying branch
```

5. Once the deployment is finished, the generated pages can be found in the `master` branch of your repository
6. In your GitHub repo's setting, navigate to "GitHub Pages" section and change Source to **master branch**.
7. Check the webpage at *username*.github.io.

Note - if you specify a custom domain name with a `CNAME`, you need to add the `CNAME` file to the `source/` folder.

## Project page

If you prefer to have a project page on GitHub:

1. Navigate to your repo on GitHub. Go to the **Settings** tab. Change the **Repository name** so your blog is available at <b>username.github.io/*repository*</b>,  **repository** can be any name, like *blog* or *hexo*.
2. Edit your **_config.yml**, change the `root:` value to the `/<repository>/` (must starts and ends with a slash, without the brackets).
3. Modify the following lines in `.github/workflows/pages.yml`:

```diff .github/workflows/pages.yml
name: Pages

on:
  push:
    branches:
-      - source  # default branch
+      - master

jobs:
  pages:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
-          publish_branch: master  # deploying branch
+          publish_branch: gh-pages
```

4. Commit and push to **`master` branch**.

- To push `master` branch to GitHub:

  ```
  $ git push origin master
  ```

5. Once the deployment is finished, the generated pages can be found in the `gh-pages` branch of your repository
6. In your GitHub repo's setting, navigate to "GitHub Pages" section and change Source to **gh-pages branch**.

## One-command deployment

The following instruction is adapted from [one-command deployment](/docs/one-command-deployment) page.

1. Install [hexo-deployer-git](https://github.com/hexojs/hexo-deployer-git).
2. Add the following configurations to **_config.yml**, (remove existing lines if any)

  ``` yml
  deploy:
    type: git
    repo: https://github.com/<username>/<project>
    # example, https://github.com/hexojs/hexojs.github.io
    branch: gh-pages
  ```

3. Run `hexo clean && hexo deploy`.
4. Check the webpage at *username*.github.io.

## Useful links

- [GitHub Pages](https://help.github.com/categories/github-pages-basics/)
- [Travis CI Docs](https://docs.travis-ci.com/user/tutorial/)
- [peaceiris/actions-gh-pages](https://github.com/marketplace/actions/github-pages-action)
