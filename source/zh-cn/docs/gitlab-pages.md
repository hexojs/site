---
title: 将 Hexo 部署到 GitLab Pages
---

1. 如果你更希望你的站点部署在 `<你的 GitLab 用户名>.gitlab.io` 的子目录中，你的 repository 需要直接命名为子目录的名字，这样你的站点可以通过 `https://<你的 GitLab 用户名>.gitlab.io/<repository 的名字>` 访问。 你需要检查你的 Hexo 配置文件，将 `url` 的值修改为 `https://<你的 GitLab 用户名>.gitlab.io/<repository 的名字>`、将 `root` 的值修改为 `/<repository 的名字>/`
2. 通过 **Settings** > **CI/CD** > **Runners** > **Enable shared runners for this project** 启用共享运行程序。
3. 将你的 Hexo 站点文件夹推送到 repository 中。 默认情况下 `public` 目录将不会（并且不应该）被推送到 repository 中，建议你检查 `.gitignore` 文件中是否包含 `public` 一行，如果没有请加上。 整体文件夹结构应该与 [示例储存库](https://gitlab.com/pages/hexo) 大致相似。
4. 使用 `node --version` 指令检查你电脑上的 Node.js 版本。 记下主要版本（例如，`v16.y.z`）
5. 将 `.gitlab-ci.yml` 文件添加到您的版本库根目录（与 \_config.yml & package.json并列），内容如下（将`16`替换为您在上一步中注意到的 Node.js 主版本）：

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

6. GitLab CI 应该会自动开始运行，构建成功以后你应该可以在 `https://<你的 GitLab 用户名>.gitlab.io` 查看你的网站。
7. (可选) 如果你需要查看生成的文件，可以在 [job artifact](https://docs.gitlab.com/ee/ci/jobs/job_artifacts.html) 中找到。

## 项目页面

如果您希望在 GitLab 上有一个项目页面：

1. 转到 **Settings** > **General** > **Advanced** > **Change path**. 修改仓库名，这样网站就可以在 <b>username.gitlab.io/_repository_</b>。 它可以是任何名字，例如 _blog_ 或 _hexo_。
2. 编辑 **\_config.yml**，将 `url:` 的值更改为 `https://username.gitlab.io/repository`。
3. 提交并推送

## 参考链接

- [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/)
- [GitLab CI 相关文档](https://docs.gitlab.com/ee/ci/yaml/)
