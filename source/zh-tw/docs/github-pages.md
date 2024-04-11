---
title: 在 GitHub Pages 上部署 Hexo
---

本文將使用 [GitHub Actions](https://docs.github.com/en/actions) 部屬至 GitHub Pages，此方法適用於公開或私人儲存庫。若你不希望將整個資料夾推上 GitHub，請參閱 [一鍵部屬](#一鍵部屬)。

1. 建立名為 `<你的 GitHub 使用者名稱>.github.io` 的儲存庫，username 是你在 GitHub 上的使用者名稱，若之前已將 Hexo 上傳至其他儲存庫，將該儲存庫重命名即可。
2. 將 Hexo 檔案 push 到儲存庫的預設分支，預設分支通常名為 **main**，舊一點的儲存庫可能名為 **master**。

- 將 `main` 分支 push 到 GitHub：

    ```
    $ git push -u origin main
    ```
  - 預設情況下 `public/` 不會被上傳(也不該被上傳)，確認 `.gitignore` 檔案中包含一行 `public/`。整體資料夾結構應會與[範例儲存庫](https://github.com/hexojs/hexo-starter)極為相似。

3. 使用 `node --version` 指令檢查你電腦上的 Node.js 版本，並記下該版本 (例如：`v20.y.z`)
4. 在儲存庫中前往 `Settings > Pages > Source`，並將 `Source` 改為 `GitHub Actions`。
5. 在儲存庫中建立 `.github/workflows/pages.yml`，並填入以下內容 (將 `20` 替換為上個步驟中記下的版本)：

```yml .github/workflows/pages.yml
name: Pages

on:
  push:
    branches:
      - main  # default branch

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          # If your repository depends on submodule, please see: https://github.com/actions/checkout
          submodules: recursive
      - name: Use Node.js 20
        uses: actions/setup-node@v4
        with:
          # Examples: 20, 18.19, >=16.20.2, lts/Iron, lts/Hydrogen, *, latest, current, node
          # Ref: https://github.com/actions/setup-node#supported-version-syntax
          node-version: '20'
      - name: Cache NPM dependencies
        uses: actions/cache@v4
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
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./public
  deploy:
    needs: build
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

6. 當部屬作業完成後，前往 `https://<你的 GitHub 使用者名稱>.github.io` 檢視網站。

{% note info CNAME %}
若你使用 `CNAME` 自訂域名，你需要在 `source/` 資料夾中新增 `CNAME` 檔案。[更多資訊](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
{% endnote %}

## 專案頁面

如果你希望網站部署在 `<你的 GitHub 使用者名稱>.github.io` 的子目錄中：

1. 建立名為 `<repository 的名字>` 的儲存庫，這樣你的部落格網址為 `<你的 GitHub 使用者名稱>.github.io/<repository 的名字>`，repository 的名字可以任意，例如 blog 或 hexo。
2. 編輯你的 `_config.yml`，將 `url:` 更改為 `<你的 GitHub 使用者名稱>.github.io/<repository 的名字>`。
3. 在儲存庫中前往 `Settings > Pages > Source`，並將 `Source` 改為 `GitHub Actions`。
4. Commit 並 push 到預設分支上。
5. 部署完成後，前往 `https://<你的 GitHub 使用者名稱>.github.io/<repository 的名字>` 檢視網站。

## 一鍵部屬

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

## 參考連結

- [GitHub Pages 使用文檔](https://help.github.com/categories/github-pages-basics/)
- [使用自定义 GitHub Actions 工作流进行发布](https://docs.github.com/zh/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#使用自定义-github-actions-工作流进行发布)
- [actions/deploy-github-pages-site](https://github.com/marketplace/actions/deploy-github-pages-site)
