---
title: GitLab Pages
---

1. Create a new repository named <b>*username*.gitlab.io</b>, where username is your username on GitLab. If you have already uploaded to other repo, rename the repo instead.
2. Enable Shared Runners via `Settings -> CI / CD -> Shared Runners`.
3. Push the files of your Hexo folder to the repository. The `public/` folder is not (and should not be) uploaded by default, make sure the `.gitignore` file contains `public/` line. The folder structure should be roughly similar to [this repo](https://gitlab.com/pages/hexo).
4. Add `.gitlab-ci.yml` file to your repo (alongside _config.yml & package.json) with the following content:
``` yml
image: node:10-alpine # use nodejs v10 LTS
cache:
  paths:
    - node_modules/

before_script:
  - npm install hexo-cli -g
  - npm install

pages:
  script:
    - hexo generate
  artifacts:
    paths:
      - public
  only:
    - master
```
5. *username*.gitlab.io should be up and running, once GitLab CI finishes the deployment job,
6. (Optional) If you wish to inspect the generated site assets (html, css, js, etc), they can be found in the [job artifact](https://docs.gitlab.com/ee/user/project/pipelines/job_artifacts.html).

## Project page

If you prefer to have a project page on GitLab:

1. Go to `Settings -> General -> Advanced -> Change path`. Change the value to a name, so the website is available at <b>username.gitlab.io/*name*</b>. It can be any name, like *blog* or *hexo*.
2. Edit **_config.yml**, change the `root:` value from `""` to `"name"`.
3. Commit and push.


## Useful links

- [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/index.html)
- [GitLab CI Docs](https://docs.gitlab.com/ee/ci/README.html)
