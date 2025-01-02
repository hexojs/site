---
title: GitLab Pages
---

1. Create a new repository named <b>_username_.gitlab.io</b>, where username is your username on GitLab. If you have already uploaded to other repo, rename the repo instead.
2. Enable Shared Runners via `Settings -> CI / CD -> Shared Runners`.
3. Push the files of your Hexo folder to the repository. The `public/` folder is not (and should not be) uploaded by default, make sure the `.gitignore` file contains `public/` line. The folder structure should be roughly similar to [this repo](https://gitlab.com/pages/hexo).
4. Check what version of Node.js you are using on your local machine with `node --version`. Make a note of the major version (e.g., `v16.y.z`)
5. Add `.gitlab-ci.yml` file to your repo (alongside \_config.yml & package.json) with the following content:

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

6. _username_.gitlab.io should be up and running, once GitLab CI finishes the deployment job,
7. (Optional) If you wish to inspect the generated site assets (html, css, js, etc), they can be found in the [job artifact](https://docs.gitlab.com/ee/ci/jobs/job_artifacts.html).

## Project page

If you prefer to have a project page on GitLab:

1. Go to `Settings -> General -> Advanced -> Change path`. Change the value to a name, so the website is available at <b>username.gitlab.io/_name_</b>. It can be any name, like _blog_ or _hexo_.
2. Edit **\_config.yml**, change the `root:` value from `""` to `"name"`.
3. Commit and push.

## Useful links

- [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/)
- [GitLab CI Docs](https://docs.gitlab.com/ee/ci/yaml/)
