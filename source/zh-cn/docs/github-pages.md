---
title: 在 GitHub Pages 上部署 Hexo
---

本文将使用 [GitHub Actions](https://docs.github.com/en/actions) 部署至 GitHub Pages，此方法适用于公开或私人储存库。若你不希望将整个资料夹推上 GitHub，请参阅 [一键部署](#一键部署)。

1. 建立名为 <b>_username_.github.io</b> 的储存库，username 是你在 GitHub 上的使用者名称，若之前已将 Hexo 上传至其他储存库，将该储存库重命名即可。
2. 将 Hexo 档案 push 到储存库的预设分支，预设分支通常名为 **main**，旧一点的储存库可能名为 **master**。

- 将 `main` 分支 push 到 GitHub：

  ```
  $ git push -u origin main
  ```

- 预设情况下 `public/` 不会被上传(也不该被上传)，确认 `.gitignore` 档案中包含一行 `public/`。整体资料夹结构应会与[范例储存库](https://github.com/hexojs/hexo-starter)极为相似。

3. 使用 `node --version` 指令检查你电脑上的 Node.js 版本，并记下该版本 (例如：`v16.y.z`)
4. 在储存库中建立 `.github/workflows/pages.yml`，并填入以下内容 (将 `16` 替换为上个步骤中记下的版本)：

```yml .github/workflows/pages.yml
name: Pages

on:
  push:
    branches:
      - main # default branch

jobs:
  pages:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js 16.x
        uses: actions/setup-node@v2
        with:
          node-version: "16"
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
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```
5. 当部署作业完成后，产生的页面会放在储存库中的 `gh-pages` 分支。
6. 在储存库中前往 **Settings** > **Pages** > **Source**，并将 branch 改为 `gh-pages`。
7. 前往 _username_.github.io 查看网站。

{% note info CNAME %}
若你使用 `CNAME` 自订域名，你需要在 `source/` 资料夹中新增 `CNAME` 档案。 [更多资讯](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
{% endnote %}

## 专案页面

如果你希望网站部署在 `<你的 GitHub 用户名>.github.io` 的子目录中：

1. 开启你在 GitHub 的储存库，并前往 **Settings** 页面。更改你的 **Repository name** 使你的部落格网址变成 <b>username.github.io/_repository_</b>，_repository_ 可以是任何名称，例如 _blog_ 或 _hexo_。
2. 编辑你的 **\_config.yml**，将 `url:` 更改为 <b>https://_username_.github.io/_repository_</b>。
3. Commit 并 push 到预设分支上。
4. 当部属完成后，在 `gh-pages` 分支可以找到产生的网页。
5. 在 GitHub 储存库中，前往 **Settings** > **Pages** > **Source**，并将 branch 改为 `gh-pages` 后储存。
6. 前往 _username_.github.io/_repository_ 查看。

## 一键部署

以下教学改编自 [一键部署](/zh-cn/docs/one-command-deployment) .

1. 安装 [hexo-deployer-git](https://github.com/hexojs/hexo-deployer-git).
2. 清空 `_config.yml` 的现有资料，并新增以下组态:

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
[Awesome Hexo](https://github.com/hexojs/awesome-hexo) 中收录了更多有关在 GitHub Pages 上部署 Hexo ，你也可透过搜寻引擎了解更多。
欢迎更多有志之士前来改善 Hexo 文档，不胜感激。
{% endnote %}

## 参考链接

- [GitHub Pages 使用文档](https://help.github.com/categories/github-pages-basics/)
- [peaceiris/actions-gh-pages](https://github.com/marketplace/actions/github-pages-action)