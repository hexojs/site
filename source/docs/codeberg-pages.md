---
title: Codeberg Pages
---
Push your website to your Codeberg repository at `ssh://git@codeberg.org/username/repository.git`.

By default, Codeberg Pages will serve the `main` branch of `pages` repository under a username or organization at `https://username.codeberg.page` . Any content at any other branch or repository will be served under `https://username.codeberg.page/repository/@branch` . You might noticed that it had been possible to visit `https://branch.repository.username.codeberg.page` but this has been deprecated since `codeberg.page` implemented HSTS, and their wildcard certificate is not covering 4th or 5th level sub-domain.

If you do not need a custom domain and is willing to make use of `username.codeberg.page` subdomain, please consider using a branch other than "main" to host your website root directory, and make sure `public` folder will be using "main" branch.

To use Codeberg Pages to deploy your website with a custom domain, add a `.domains` file at the `/source` folder. If your website is at `pages` branch of `pages` repository, it should contain the following content: 

```text
example.org
www.example.org
username.codeberg.page
pages.username.codeberg.page
pages.pages.username.codeberg
```

In practice, if you only need it to be available at one domain, you can simply add one line only. If you need to redirect `www` subdomain or `username.codeberg.page` to the main domain, please include all the domains for redirection.

And set it as `skip_render`:

```yaml
skip_render:
 - '.domains'
```

# Using Forgejo Actions

1. Open your repository on Codeberg and direct to Settings -> Units -> Actions.

2. Tickle the box, and click "Save Settings".

3. Add a folder `.forgejo/workflows` in your website, and touch `hexo.yaml`:

```yaml
name: Hexo

on:
  push:
    branches:
      # If you want to build from a different branch, change it here.
      - main
  workflow_dispatch:

jobs:
    build:
      runs-on: codeberg-tiny-lazy ## You can find the list of available runners on https://codeberg.org/actions/meta, or run one yourself.
      steps:
        - name: Clone the repository
          uses: https://code.forgejo.org/actions/checkout@v4
          with:
            submodules: recursive
            fetch-depth: 0
        - name: Use Node.js 22
          uses: https://code.forgejo.org/actions/setup-node@v4
          with:
            node-version: "22"
        - name: Cache NPM dependencies
          uses: https://code.forgejo.org/actions/cache@v4
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
          uses: https://code.forgejo.org/actions/upload-artifact@v3
          with:
            path: ./public/
            include-hidden-files: true
            name: Generated files

    deploy:
      needs: [ build ]
      runs-on: codeberg-tiny-lazy 
      steps:
        - name: Clone the repository
          uses: https://code.forgejo.org/actions/checkout@v4
          with:
          submodules: recursive
          fetch-depth: 0
        - name: Checkout the target branch and clean it up
        # If you want to commit to a branch other than "pages", change the two references below, as well as the reference in the last step. 
          run: |
            git checkout pages || git switch --orphan pages && \
            rm -Rfv $(ls -A | egrep -v '^(\.git|LICENSE)$')
        - name: Download generated files
          uses: https://code.forgejo.org/actions/download-artifact@v3
          with:
            name: Generated files
        - name: Publish the website
          run: |
            git config user.email codeberg-ci && \
            git config user.name "Codeberg CI" && \
            git add . && \
            git commit --allow-empty --message "Codeberg build for ${GITHUB_SHA}" && \
            git push origin pages -f
```

4. add the new file to git, and push it to Codeberg.

# Using Woodpecker CI

1. To use Woodpecker CI, you should [request](https://codeberg.org/Codeberg-e.V./requests/issues/new?template=ISSUE_TEMPLATE%2fWoodpecker-CI.yaml) access to it. If your request gets approved, you will be able to login to [ci.codeberg.org](https://ci.codeberg.org) via your Codeberg account. To start builds for your repository, you must enable them in Woodpecker specifically using https://ci.codeberg.org/repos/add. Repositories owned by your codeberg account should automatically be available as options to select.

2. add a file `.woodpecker.yaml` at the root of your website:

```yaml

# Needs a codeberg access token (codeberg_token) as a secret in Woodpecker config
# Make sure the codeberg_token has "Repository and Organization Access" -> "package" -> "Read and Write"
# Also uses another secret (mail) with email address for git config
# The HEXO_OUTPUT variable must be set to the build output folder configured in Hexo
# Exclude page pipeline to be run on "pages" branch
when: 
  branch: 
    exclude: pages
  event: 
    - push
    - pull_request

# Recursive cloning is used to fully clone the themes given as Git submodules
clone:
  git:
    image: woodpeckerci/plugin-git
    settings:
      recursive: true

steps:

# Build hexo static files
build:
  image: node:latest
  commands:
    - cd /
    - npm install hexo-cli -g
    - npm i
    - hexo g
  when:
    event:
      - pull_request
      - push

publish:
  image: bitnami/git
  environment:
    HEXO_OUTPUT: public
    MAIL: from_secret: mail
    CODEBERG_TOKEN: from_secret: codeberg_token
  commands:
    # Git configuration
    - git config --global user.email $MAIL
    - git config --global user.name "Woodpecker CI"
    - git clone -b pages https://$CODEBERG_TOKEN@codeberg.org/$CI_REPO.git $CI_REPO_NAME
    # Copy build step output to repository folder
    - cp -ar $HEXO_OUTPUT/. $CI_REPO_NAME/
    # Needed for custom domains, UNCOMMENT if your .domains file is at root directory of website
    # - cp .domains $CI_REPO_NAME || true 
    # Commit and push all static files with pipeline started timestamp
    - cd $CI_REPO_NAME
    - git add .
    - git commit -m "Woodpecker CI ${CI_COMMIT_SHA}"
    - git push
  when:
    event: push
```
Your site should start building and deploying automatically now.

# Useful links

https://docs.codeberg.org/codeberg-pages/
https://codeberg.org/Codeberg-CI/examples