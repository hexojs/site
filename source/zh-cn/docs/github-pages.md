---
title: 将 Hexo 部署到 GitHub Pages
---

在本教程中，我们将会使用 [Travis CI](https://travis-ci.com/) 将 Hexo 博客部署到 GitHub Pages 上。Travis CI 对于开源 repository 是免费的，但是这意味着你的站点文件将会是公开的。如果你希望你的站点文件不被公开，请直接前往本文 [Private repository](#Private-repository) 部分。

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


## Private repository

由于在 Private Repository 启用 Travis CI 需要付费，因此你可能需要自己构建。

1. 新建一个 repository。如果你希望你的站点能通过 `<你的 GitHub 用户名>.github.io` 域名访问，你的 repository 应该直接命名为 `<你的 GitHub 用户名>.github.io`。如果你不想上传你的 Hexo 站点文件夹到 GitHub 请直接跳到第三步。
2. 将你的 Hexo 站点文件夹推送到 GitHub，默认情况下不应该 `public` 目录将不会被推送到 repository 中，你应该检查 `.gitignore` 文件中是否包含 `public` 一行，如果没有请加上。
3. 执行 `hexo g` 生成站点目录，并将生成的 `public` 复制到别处。
4. 在 Hexo 站点目录下新建一个 `gh-pages` 分支，我们推荐创建一个 orphan 分支（一个干净的、没有任何 commit 历史的分支）：

```bash
$ git checkoud --orphan gh-pages
```

5. 将 Hexo 站点文件夹下除了 `.git` 以外的任何文件和目录全部删除（不要担心，它们还能被找回来的）
6. 找到之前复制到别处的的 `public` 目录，将其中的的所有文件复制回 Hexo 站点文件夹。
7. 使用以下指令发布站点

``` bash
$ git add .
$ git commit -a -m "Initial commit"
$ git push origin gh-pages
```

8. 前往你的 GitHub 的 repository 设置页面，将 **GitHub Pages** 的部署分支设置为 `gh-paghes` 分支。
9. 前往 `https://<你的 GitHub 用户名>.github.io` 查看你的站点是否可以访问。这可能需要一些时间。
10. 回到你的 Hexo 站点文件夹，使用下面指令

``` bash
$ git checkout master
```

11. 你的 Hexo 站点文件就回来了。

{% note info Windows 用户 %}
请注意，以上教程翻译自 Hexo 文档英文版，仅做参考；译者在翻译过程中发现很多语焉不详的内容。
在 [Awesome Hexo](https://github.com/hexojs/awesome-hexo) 中收录有一些在 GitHub 部署 Hexo 的教程。通过搜索引擎可以找到更多教程。
也欢迎更多有志之士前来改善 Hexo 文档，不胜感激。
{% endnote %}

## 有用的参考链接

- [GitHub Pages 使用文档](https://help.github.com/categories/github-pages-basics/)
- [Travis CI 使用文档](https://docs.travis-ci.com/user/tutorial/)
- [Awesome Hexo](https://github.com/hexojs/awesome-hexo)
- [在百度上搜索 "Hexo GitHub"](https://www.baidu.com/s?wd=Hexo%20GitHub)
