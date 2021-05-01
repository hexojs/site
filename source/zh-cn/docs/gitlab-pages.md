---
title: 将 Hexo 部署到 GitLab Pages
---

在本教程中，我们将会使用 GitLab CI 将 Hexo 博客部署到 GitLab Pages 上。

1. 新建一个 repository。如果你希望你的站点能通过 `<你的 GitLab 用户名>.gitlab.io` 域名访问，你的 repository 应该直接命名为 `<你的 GitLab 用户名>.gitlab.io`。
2. 将你的 Hexo 站点文件夹推送到 repository 中。默认情况下 `public` 目录将不会（并且不应该）被推送到 repository 中，建议你检查 `.gitignore` 文件中是否包含 `public` 一行，如果没有请加上。
3. 在你的站点文件夹中新建 `.gitlab-ci.yml` 文件：

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

4. GitLab CI 应该会自动开始运行，构建成功以后你应该可以在 `https://<你的 GitLab 用户名>.gitlab.io` 查看你的网站。
5. (可选) 如果你需要查看生成的文件，可以在 [job artifact](https://docs.gitlab.com/ee/user/project/pipelines/job_artifacts.html) 中找到。

{% note info %}
在 GitLab.com 上，GitLab CI 是默认启用的。如果你使用的是自托管的 GitLab，你可能需要在 `Settings -> CI / CD -> Shared Runners` 启用 GitLab CI。
{% endnote %}

## Project page

如果你更希望你的站点部署在 `<你的 GitLab 用户名>.gitlab.io` 的子目录中，你的 repository 需要直接命名为子目录的名字，这样你的站点可以通过 `https://<你的 GitLab 用户名>.gitlab.io/<repository 的名字>` 访问。你需要检查你的 Hexo 配置文件，将 `url` 的值修改为 `https://<你的 GitLab 用户名>.gitlab.io/<repository 的名字>`、将 `root` 的值修改为 `/<repository 的名字>/`

## Useful links

- [GitLab Pages 相关文档](https://docs.gitlab.com/ee/user/project/pages/index.html)
- [GitLab CI 相关文档](https://docs.gitlab.com/ee/ci/README.html)
- [在百度上搜索 "Hexo GitLab"](https://www.baidu.com/s?wd=Hexo%20GitLab)
