---
title: 在 GitHub Pages 上部署 Hexo
---

本文将使用 [GitHub Actions](https://docs.github.com/zh/actions) 部署至 GitHub Pages，此方法适用于公开或私人储存库。若你不希望将源文件夹上传到 GitHub，请参阅 [一键部署](#一键部署)。

1. 建立名为 `<你的 GitHub 用户名>.github.io` 的储存库，若之前已将 Hexo 上传至其他储存库，将该储存库重命名即可。
2. 将 Hexo 文件夹中的文件 push 到储存库的默认分支，默认分支通常名为 `main`，旧一点的储存库可能名为 `master`。

- 将 `main` 分支 push 到 GitHub：

  ```
  $ git push -u origin main
  ```

- 默认情况下 `public/` 不会被上传(也不该被上传)，确保 `.gitignore` 文件中包含一行 `public/`。整体文件夹结构应该与 [示例储存库](https://github.com/hexojs/hexo-starter) 大致相似。

3. 使用 `node --version` 指令检查你电脑上的 Node.js 版本，并记下该版本 (例如：`v16.y.z`)
4. 在储存库中前往 `Settings > Pages > Source`，并将 `Source` 改为 `GitHub Actions`。
5. 在储存库中建立 `.github/workflows/pages.yml`，并填入以下内容 (将 `16` 替换为上个步骤中记下的版本)：

```yml .github/workflows/pages.yml
name: Pages

on:
  push:
    branches:
      - main # default branch

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          # If your repository depends on submodule, please see: https://github.com/actions/checkout
          submodules: recursive
      - name: Use Node.js 16.x
        uses: actions/setup-node@v2
        with:
          node-version: '16'
      - name: Cache NPM dependencies
        uses: actions/cache@v2
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
        uses: actions/upload-pages-artifact@v2
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
        uses: actions/deploy-pages@v2
```

6. 部署完成后，前往 `https://<你的 GitHub 用户名>.github.io` 查看网站。

{% note info CNAME %}
若你使用了一个带有 `CNAME` 的自定义域名，你需要在 `source/` 文件夹中新增 `CNAME` 文件。 [更多信息](https://docs.github.com/zh/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
{% endnote %}

## 项目页面

如果你希望网站部署在 `<你的 GitHub 用户名>.github.io` 的子目录中：

1. 建立名为 `<repository 的名字>` 的储存库，这样你的博客网址为 `<你的 GitHub 用户名>.github.io/<repository 的名字>`，repository 的名字可以任意，例如 blog 或 hexo。
2. 编辑你的 `_config.yml`，将 `url:` 更改为 `<你的 GitHub 用户名>.github.io/<repository 的名字>`。
3. 在储存库中前往 `Settings > Pages > Source`，并将 `Source` 改为 `GitHub Actions`。
4. Commit 并 push 到默认分支上。
5. 部署完成后，前往 `https://<你的 GitHub 用户名>.github.io/<repository 的名字>` 查看网站。

## 一键部署

以下教学改编自 [一键部署](/zh-cn/docs/one-command-deployment)。

1. 安装 [hexo-deployer-git](https://github.com/hexojs/hexo-deployer-git)。
2. 在 `_config.yml` 中添加以下配置（如果配置已经存在，请将其替换为如下）:

```yml
deploy:
  type: git
  repo: https://github.com/<username>/<project>
  # example, https://github.com/hexojs/hexojs.github.io
  branch: gh-pages
```

3. 执行 `hexo clean && hexo deploy` 。
4. 浏览 `<GitHub 用户名>.github.io` 检查你的网站能否运作。

{% note info Windows 用户 %}
[Awesome Hexo](https://github.com/hexojs/awesome-hexo) 中收录了更多有关在 GitHub Pages 上部署 Hexo ，你也可通过搜索引擎了解更多。
欢迎更多有志之士前来改善 Hexo 文档，不胜感激。
{% endnote %}

## 参考链接

- [GitHub Pages 使用文档](https://docs.github.com/zh/pages)
- [使用自定义 GitHub Actions 工作流进行发布](https://docs.github.com/zh/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#使用自定义-github-actions-工作流进行发布)
- [actions/deploy-github-pages-site](https://github.com/marketplace/actions/deploy-github-pages-site)
