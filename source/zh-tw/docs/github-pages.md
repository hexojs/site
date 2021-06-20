---
title: 在 GitHub Pages 上部署 Hexo
---

本文將使用 [Travis CI](https://travis-ci.com/) 部署 Github Pages 。若要免費使用 Travis CI 請將儲存庫 (repo) 的主分支 (Master) 設定至公開狀態 (public) 。否則請閱覽本文的 [Private repository](#Private-repository) 部分或採用其他儲存庫服務。

1. 新增名為 `<GitHub 用戶名>.github.io` 的儲存庫。如果你之前上載了 Hexo 到其他儲存庫，請重新命名該資料庫。
2. 把 Hexo 檔案推播 (push) 到你的資料庫。檢查 `.gitignore` 裡已加上 `public` 一行。在預設狀態中， `public/` 不應會被上載到資料庫，你的 GitHub Pages 資料庫除了 [範例](https://github.com/hexojs/hexo-starter) 中的 `.gitmodules` 外，應該大致上與範例相同。
3. 新增 [Travis CI](https://github.com/marketplace/travis-ci) 到 GitHub 帳戶中。
4. 前往 GitHub 的 [Applications settings](https://github.com/settings/installations) 設定 Travis CI ，使 Travis CI 擁有有足夠權限存取您的 GitHub Pages 儲存庫。
5. 系統會重定向 Travis 頁面。否則，請 [按此](https://travis-ci.com/) 手動前往。
6. 在瀏覽器添加新頁面，[按此](https://github.com/settings/tokens)允許資料庫的權限 generate (產生)一個新的 Token ，將請該 Token 數值記下。
7. 前往 Travis CI 的 Github Pages 資料庫目錄，在設定頁面中的 **Environment Variables** 下，建立 `GH_TOKEN` 一列，把剛才記下的 **Token** 填在 **Value** 中。最後點選 **Add** 儲存。
8. 在儲存庫目錄中新增 `Travis.yml` :

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

9. Travis CI 完成部署後，新的文件會被推播到 GitHub Pages 儲存庫的 gh-pages 分支。
10. 在 GitHub Pages 儲存庫設定頁，把 `gh-pages` 更改至 Source 。
11. 瀏覽 `<GitHub 用戶名>.github.io` 檢查你的網站能否運作。

## 專案頁面

如果妳更希望妳的站點部署在 `<妳的 GitHub 用戶名>.github.io` 的子目錄中，妳的 repository 需要直接命名為子目錄的名字，這樣妳的站點可以通過 `https://<妳的 GitHub 用戶名>.github.io/<repository 的名字>` 訪問。妳需要檢查妳的 Hexo 配置文件，將 `url` 修改為 `https://<妳的 GitHub 用戶名>.github.io/<repository 的名字>`、將 `root` 的值修改為 `/<repository 的名字>/`

## 私人儲存庫

以下教學改編自 [一鍵部署](/docs/one-command-deployment) .

1. 安裝 [hexo-deployer-git](https://github.com/hexojs/hexo-deployer-git).
2. 清空 `_config.yml` 的現有資料，並新增以下組態:

  ``` yml
  deploy:
    type: git
    repo: https://github.com/<username>/<project>
    # example, https://github.com/hexojs/hexojs.github.io
    branch: gh-pages
  ```

3. 執行 `hexo clean && hexo deploy` 。
4. 瀏覽 `<GitHub 用戶名>.github.io` 檢查你的網站能否運作。

{% note info Windows 用戶 %}
[Awesome Hexo](https://github.com/hexojs/awesome-hexo) 中收錄了更多有關在 GitHub Pages 上部署 Hexo ，你也可透過搜尋引擎了解更多。
歡迎更多有誌之士前來改善 Hexo 文檔，不勝感激。
{% endnote %}

## 參考鏈接

- [GitHub Pages 使用文檔](https://help.github.com/categories/github-pages-basics/)
- [Travis CI 使用文檔](https://docs.travis-ci.com/user/tutorial/)
