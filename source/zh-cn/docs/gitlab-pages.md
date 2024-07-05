---
title: 将 Hexo 部署到 GitLab Pages
---

1. 如果你更希望你的站点部署在 `<你的 GitLab 用户名>.gitlab.io` 的子目录中，你的 repository 需要直接命名为子目录的名字，这样你的站点可以通过 `https://<你的 GitLab 用户名>.gitlab.io/<repository 的名字>` 访问。 你需要检查你的 Hexo 配置文件，将 `url` 的值修改为 `https://<你的 GitLab 用户名>.gitlab.io/<repository 的名字>`、将 `root` 的值修改为 `/<repository 的名字>/`
2. Enable Shared Runners via **Settings** > **CI/CD** > **Runners** > **Enable shared runners for this project**.
3. 将你的 Hexo 站点文件夹推送到 repository 中。 默认情况下 `public` 目录将不会（并且不应该）被推送到 repository 中，建议你检查 `.gitignore` 文件中是否包含 `public` 一行，如果没有请加上。 The folder structure should be roughly similar to [this repo](https://gitlab.com/pages/hexo).
4. Check what version of Node.js you are using on your local machine with `node --version`. Make a note of the major version (e.g., `v16.y.z`)
5. Add `.gitlab-ci.yml` file to the root folder of your repo (alongside \_config.yml & package.json) with the following content (replacing `16` with the major version of Node.js you noted in previous step):

```yml
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

6. GitLab CI 应该会自动开始运行，构建成功以后你应该可以在 `https://<你的 GitLab 用户名>.gitlab.io` 查看你的网站。
7. (可选) 如果你需要查看生成的文件，可以在 [job artifact](https://docs.gitlab.com/ee/ci/pipelines/job_artifacts.html) 中找到。

## Project page

If you prefer to have a project page on GitLab:

1. Go to **Settings** > **General** > **Advanced** > **Change path**. Change the value to a name, so the website is available at <b>username.gitlab.io/_repository_</b>. It can be any name, like _blog_ or _hexo_.
2. Edit **\_config.yml**, change the `url:` value to `https://username.gitlab.io/repository`.
3. Commit and push.

## 参考链接

- [GitLab Pages 相关文档](https://docs.gitlab.com/ee/user/project/pages/)
- [GitLab CI 相关文档](https://docs.gitlab.com/ee/ci/yaml/)
