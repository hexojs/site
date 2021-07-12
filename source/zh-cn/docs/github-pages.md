---
title: 将 Hexo 部署到 GitHub Pages
---

在本教程中，我们将会使用 [Travis CI](https://travis-ci.com/) 将 Hexo 博客部署到 GitHub Pages 上。Travis CI 对于开源 repository 是免费的，但是这意味着你的站点文件将会是公开的。如果你希望你的站点文件不被公开，请直接前往本文 [私有 Repository](#私有 Repository) 部分。

1. 新建一个 repository。如果你希望你的站点能通过 `<你的 GitHub 用户名>.github.io` 域名访问，你的 repository 应该直接命名为 `<你的 GitHub 用户名>.github.io`。
2. 将你的 Hexo 站点文件夹推送到 repository 中。默认情况下不应该 `public` 目录将不会被推送到 repository 中，你应该检查 `.gitignore` 文件中是否包含 `public` 一行，如果没有请加上。
3. 将 [Travis CI](https://github.com/marketplace/travis-ci) 添加到你的 GitHub 账户中。
4. 前往 GitHub 的 [Applications settings](https://github.com/settings/installations)，配置 Travis CI 权限，使其能够访问你的 repository。
5. 你应该会被重定向到 Travis CI 的页面。如果没有，请 [手动前往](https://travis-ci.com/)。
6. 在浏览器新建一个标签页，前往 GitHub [新建 Personal Access Token](https://github.com/settings/tokens)，只勾选 `repo` 的权限并生成一个新的 Token。Token 生成后请复制并保存好。
7. 回到 Travis CI，前往你的 repository 的设置页面，在 **Environment Variables** 下新建一个环境变量，**Name** 为 `GH_TOKEN`，**Value** 为刚才你在 GitHub 生成的 Token。确保 **DISPLAY VALUE IN BUILD LOG** 保持 **不被勾选** 避免你的 Token 泄漏。点击 **Add** 保存。
8. 在你的 Hexo 站点文件夹中新建一个 `.travis.yml` 文件：

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

9. 将 `.travis.yml` 推送到 repository 中。Travis CI 应该会自动开始运行，并将生成的文件推送到同一 repository 下的 `gh-pages` 分支下
10. 在 GitHub 中前往你的 repository 的设置页面，修改 `GitHub Pages` 的部署分支为 `gh-pages`。
11. 前往 `https://<你的 GitHub 用户名>.github.io` 查看你的站点是否可以访问。这可能需要一些时间。

## Project page

如果你更希望你的站点部署在 `<你的 GitHub 用户名>.github.io` 的子目录中，你的 repository 需要直接命名为子目录的名字，这样你的站点可以通过 `https://<你的 GitHub 用户名>.github.io/<repository 的名字>` 访问。你需要检查你的 Hexo 配置文件，将 `url` 修改为 `https://<你的 GitHub 用户名>.github.io/<repository 的名字>`、将 `root` 的值修改为 `/<repository 的名字>/`

## 私有 Repository

下面的指示基于 [一键部署](/docs/one-command-deployment) 编写。

1. 安装 [hexo-deployer-git](https://github.com/hexojs/hexo-deployer-git).
2. 在 **_config.yml**（如果有已存在的请删除）添加如下配置：

  ``` yml
  deploy:
    type: git
    repo: https://github.com/<username>/<project>
    # example, https://github.com/hexojs/hexojs.github.io
    branch: gh-pages
  ```

3. 运行 `hexo clean && hexo deploy` 。
4. 查看 *username*.github.io 上的网页是否部署成功。

## 有用的参考链接

- [GitHub Pages 使用文档](https://help.github.com/categories/github-pages-basics/)
- [Travis CI 使用文档](https://docs.travis-ci.com/user/tutorial/)
- [Awesome Hexo](https://github.com/hexojs/awesome-hexo)
- [在百度上搜索 "Hexo GitHub"](https://www.baidu.com/s?wd=Hexo%20GitHub)
