---
title: 將 Hexo 部署到 GitHub Pages
---

在本教程中，我們將會使用 [Travis CI](https://travis-ci.com/) 將 Hexo 博客部署到 GitHub Pages 上。Travis CI 對於開源 repository 是免費的，但是這意味著妳的站點文件將會是公開的。如果妳希望妳的站點文件不被公開，請直接前往本文 [Private repository](#Private-repository) 部分。

1. 新建壹個 repository。如果妳希望妳的站點能通過 `<妳的 GitHub 用戶名>.github.io` 域名訪問，妳的 repository 應該直接命名為 `<妳的 GitHub 用戶名>.github.io`。
2. 將妳的 Hexo 站點文件夾推送到 repository 中。默認情況下不應該 `public` 目錄將不會被推送到 repository 中，妳應該檢查 `.gitignore` 文件中是否包含 `public` 壹行，如果沒有請加上。
3. 將 [Travis CI](https://github.com/marketplace/travis-ci) 添加到妳的 GitHub 賬戶中。
4. 前往 GitHub 的 [Applications settings](https://github.com/settings/installations)，配置 Travis CI 權限，使其能夠訪問妳的 repository。
5. 妳應該會被重定向到 Travis CI 的頁面。如果沒有，請 [手動前往](https://travis-ci.com/)。
6. 在瀏覽器新建壹個標簽頁，前往 GitHub [新建 Personal Access Token](https://github.com/settings/tokens)，只勾選 `repo` 的權限並生成壹個新的 Token。Token 生成後請復制並保存好。
7. 回到 Travis CI，前往妳的 repository 的設置頁面，在 **Environment Variables** 下新建壹個環境變量，**Name** 為 `GH_TOKEN`，**Value** 為剛才妳在 GitHub 生成的 Token。確保 **DISPLAY VALUE IN BUILD LOG** 保持 **不被勾選** 避免妳的 Token 泄漏。點擊 **Add** 保存。
8. 在妳的 Hexo 站點文件夾中新建壹個 `.travis.yml` 文件：

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

9. 將 `.travis.yml` 推送到 repository 中。Travis CI 應該會自動開始運行，並將生成的文件推送到同壹 repository 下的 `gh-pages` 分支下
10. 在 GitHub 中前往妳的 repository 的設置頁面，修改 `GitHub Pages` 的部署分支為 `gh-pages`。
11. 前往 `https://<妳的 GitHub 用戶名>.github.io` 查看妳的站點是否可以訪問。這可能需要壹些時間。

### Project page

如果妳更希望妳的站點部署在 `<妳的 GitHub 用戶名>.github.io` 的子目錄中，妳的 repository 需要直接命名為子目錄的名字，這樣妳的站點可以通過 `https://<妳的 GitHub 用戶名>.github.io/<repository 的名字>` 訪問。妳需要檢查妳的 Hexo 配置文件，將 `url` 修改為 `https://<妳的 GitHub 用戶名>.github.io/<repository 的名字>`、將 `root` 的值修改為 `/<repository 的名字>/`


## Private repository

The following instruction is adapted from [one-command deployment](/docs/one-command-deployment) page.

1. Install [hexo-deployer-git](https://github.com/hexojs/hexo-deployer-git).
2. Add the following configurations to **_config.yml**, (remove existing lines if any)

  ``` yml
  deploy:
    type: git
    repo: https://github.com/<username>/<project>
    # example, https://github.com/hexojs/hexojs.github.io
    branch: gh-pages
  ```

3. Run `hexo clean && hexo deploy`.
4. Check the webpage at *username*.github.io.

{% note info Windows 用戶 %}
在 [Awesome Hexo](https://github.com/hexojs/awesome-hexo) 中收錄有壹些在 GitHub 部署 Hexo 更仔細的教程。通過搜索引擎可以找到更多教程。
也歡迎更多有誌之士前來改善 Hexo 文檔，不勝感激。
{% endnote %}

## 有用的參考鏈接

- [GitHub Pages 使用文檔](https://help.github.com/categories/github-pages-basics/)
- [Travis CI 使用文檔](https://docs.travis-ci.com/user/tutorial/)
- [Awesome Hexo](https://github.com/hexojs/awesome-hexo)
- [在Google上搜索 "Hexo GitHub"](https://www.google.com/search?q=hexo+github)
