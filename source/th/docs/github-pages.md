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

## Project page

If you prefer to have a project page on GitHub:

1. Navigate to your repo on GitHub. Go to the **Settings** tab. Change the **Repository name** so your blog is available at <b>username.github.io/*repository*</b>,  **repository** can be any name, like *blog* or *hexo*.
2. Edit your **_config.yml**, change the `root:` value to the `/<repository>/` (must starts and ends with a slash, without the brackets).
3. Commit and push.

## Private repository

This section only applies to private repo.

1. Create a repo named <b>*username*.github.io</b>, where username is your username on GitHub. If you have already uploaded to other repo, rename the repo instead. _(Skip to step 3 if you prefer not to upload your source folder to GitHub at all)_
2. Push the files of your Hexo folder to the repository. The `public/` folder is not (and should not be) uploaded by default, make sure the `.gitignore` file contains `public/` line. The folder structure should be roughly similar to [this repo](https://github.com/hexojs/hexo-starter), without the `.gitmodules` file.
3. Run `hexo generate` and copy the `public/` folder to somewhere else (in your workstation).
4. Create a new `gh-pages` git branch from your Hexo folder, we recommend creating an orphan branch (to create a new branch without commit history):

``` bash
$ git checkout --orphan gh-pages
```

5. Remove everything including any hidden files **except** the `.git/` folder. Fret not, those files are still residing at the master branch.
6. Move the _content_ of the `public/` folder back.
7. Commit and push the gh-pages branch.

``` bash
$ git add .
$ git commit -a -m "Initial commit"
$ git push origin gh-pages
```

8. In your repo's setting, navigate to "GitHub Pages" section and change Source is **gh-pages branch**.
9. Check the webpage at your-username.github.io.
10. To navigate back to your source folder,

``` bash
$ git checkout master
```

## Useful links

- [GitHub Pages](https://help.github.com/categories/github-pages-basics/)
- [Travis CI Docs](https://docs.travis-ci.com/user/tutorial/)
