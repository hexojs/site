---
title: 在 GitLab Pages 上部署 Hexo
---

1. 新增名為 `<GitLab 用戶名>.gitlab.io` 的儲存庫。 如果你之前上載了 Hexo 到其他資料庫，那麼只需將該資料庫重新命名為 `<GitLab 用戶名>.gitlab.io` 。
2. 在 GitLab 中的 `Settings -> CI / CD` 啟用 `Shared Runners` 。
3. 將 Hexo 檔案資料夾推播到資料庫中。預設情況下 `public/` 是不會被上載到資料庫，請確保 `.gitignore` 已經包含 `public/` 一行。你的 Hexo 資料庫大致上應該與[這裡](https://gitlab.com/pages/hexo)相同。
4. 於儲存庫目錄中新增 `.gitlab-ci.yml`:

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

5. GitLab CI 完成部署後，你應該能瀏覽 `<GitLab 用戶名>.gitlab.io` 頁面。
6. (可選部分) 若要檢驗你的 site assets (html、 css、 js 等)，你可[點選這裡](https://docs.gitlab.com/ee/user/project/pipelines/job_artifacts.html) 了解。

## 專案頁面

下文將講解如何在 GitLab 上設立專案頁面:

1. 前往 Hexo資料庫的 `Settings -> General -> Advanced -> Change path`。 更改成 `<GitLab 用戶名>.gitlab.io/<任何名稱>` （請將`<任何名稱>`替換成你會用到的名字）
2. 修改 **_config.yml**, 把 `root:` 的 `""` 改成 `"name"`.
3. 確定並推播。

## 參考鏈接

- [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/index.html)
- [GitLab CI Docs](https://docs.gitlab.com/ee/ci/README.html)
