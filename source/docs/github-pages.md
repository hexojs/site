---
title: GitHub Pages
---

In this tutorial, we use [Travis CI](https://travis-ci.com/) to deploy Github Pages. It is free for open source repository, meaning your repository's `master` branch has to be public. Please skip to the [Private repository](#Private-repository) section if you prefer to keep the repo private, or prefer not to upload your source folder to GitHub.

1. Create a repo named <b>*username*.github.io</b>, where username is your username on GitHub. If you have already uploaded to other repo, rename the repo instead.
2. Push the files of your Hexo folder to the repository. The `public/` folder is not (and should not be) uploaded by default, make sure the `.gitignore` file contains `public/` line. The folder structure should be roughly similar to [this repo](https://github.com/hexojs/hexo-starter), without the `.gitmodules` file.
3. Add [Travis CI](https://github.com/marketplace/travis-ci) to your account.
4. Go to [Applications settings](https://github.com/settings/installations), configure Travis CI to have access to the repo.
5. You'll be redirected to Travis page.
6. On a new tab, generate a [new token](https://github.com/settings/tokens) with **repo** scopes. Note down the token value.
7. On the Travis page, go to your repo's setting. Under **Environment Variables**, put **GH_TOKEN** as name and paste the token onto value. Click Add to save it.
8. Add `.travis.yml` file to your repo (alongside _config.yml & package.json) with the following content:
```yml
sudo: false
language: node_js
node_js:
  - 10 # use nodejs v10 LTS
cache: npm
branches:
  only:
    - master # build master branch only
script:
  - hexo generate # generate static files
deploy:
  provider: pages
  skip-cleanup: true
  github-token: $GH_TOKEN
  keep-history: true
  on:
    branch: master
  local-dir: public
```
9. Once Travis CI finish the deployment, the generated pages can be found in the `gh-pages` branch of your repository
10. In your GitHub repo's setting, navigate to "GitHub Pages" section and change Source to **gh-pages branch**.
11. Check the webpage at *username*.github.io.

Note - if you specify a custom domain name with a `CNAME`, you need to add the `CNAME` file to the `source/` folder.

## Project page

If you prefer to have a project page on GitHub:

1. Navigate to your repo on GitHub. Go to the **Settings** tab. Change the **Repository name** so your blog is available at <b>username.github.io/*repository*</b>,  **repository** can be any name, like *blog* or *hexo*.
2. Edit your **_config.yml**, change the `root:` value to the `/<repository>/` (must starts and ends with a slash, without the brackets).
3. Commit and push.

## Private repository

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
