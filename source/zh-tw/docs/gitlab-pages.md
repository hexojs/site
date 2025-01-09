---
title: GitLab Pages
---

1. 新增名為 `<GitLab 用戶名>.gitlab.io` 的儲存庫。 如果你之前上載了 Hexo 到其他資料庫，那麼只需將該資料庫重新命名為 `<GitLab 用戶名>.gitlab.io` 。
2. Enable Shared Runners via **Settings** > **CI/CD** > **Runners** > **Enable shared runners for this project**.
3. 將 Hexo 檔案資料夾推播到資料庫中。 預設情況下 `public/` 是不會被上載到資料庫，請確保 `.gitignore` 已經包含 `public/` 一行。 你的 Hexo 資料庫大致上應該與[這裡](https://gitlab.com/pages/hexo)相同。
4. Check what version of Node.js you are using on your local machine with `node --version`. Make a note of the major version (e.g., `v16.y.z`)
5. Add `.gitlab-ci.yml` file to the root folder of your repo (alongside \_config.yml & package.json) with the following content (replacing `16` with the major version of Node.js you noted in previous step):

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

6. GitLab CI 完成部署後，你應該能瀏覽 `<GitLab 用戶名>.gitlab.io` 頁面。
7. (可選部分) 若要檢驗你的 site assets (html、 css、 js 等)，你可[點選這裡](https://docs.gitlab.com/ee/ci/jobs/job_artifacts.html) 了解。

## Project page

下文將講解如何在 GitLab 上設立專案頁面:

1. Go to **Settings** > **General** > **Advanced** > **Change path**. 更改成 `<GitLab 用戶名>.gitlab.io/<任何名稱>` （請將`<任何名稱>`替換成你會用到的名字） It can be any name, like _blog_ or _hexo_.
2. 修改 **\_config.yml**, 把 `root:` 的 `""` 改成 `"name"`.
3. Commit and push.

## Useful links

- [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/)
- [GitLab CI Docs](https://docs.gitlab.com/ee/ci/yaml/)
