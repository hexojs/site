---
title: 贡献
---

我们非常欢迎您加入 Hexo 的开发。 🤗

## 开发

我们非常欢迎您加入 Hexo 的开发。 这份文件将帮助您了解开发流程。

### 开始之前

请首先阅读[《贡献者行为准则》](https://github.com/hexojs/hexo/blob/master/CODE_OF_CONDUCT.md)，并确保您不会违反它。

请使用以下代码风格：

- 遵守 [Google JavaScript 代码风格](https://google.github.io/styleguide/jsguide.html)。
- 缩进使用 2 个空格。
- 不要把逗号放在最前面。

另外，Hexo 拥有自己的 [ESLint 配置](https://github.com/hexojs/eslint-config-hexo)，因此请确保您的贡献能够通过 ESLint。

### 工作流

1. 分叉（fork） [hexojs/hexo][]。
2. 把库（repository）复制到电脑上，并安装所依赖的插件。

```bash
$ git clone https://github.com/<username>/hexo.git
$ cd hexo
$ npm install
$ git submodule update --init
```

3. 创建一个功能分支。

```bash
$ git checkout -b new_feature
```

4. Start hacking.
5. 推送分支：

```
$ git push origin new_feature
```

6. 建立一个新的合并申请（pull request）并描述变动。

### 注意事项

- 不要修改 `package.json` 的版本号。
- 只有在测试通过的情况下您的合并申请才会被批准。 在提交前别忘了进行测试。

```bash
$ npm test
```

## 更新官方插件

我们也欢迎给 [Hexo 官方插件](https://github.com/hexojs) 提交 PR 和 Issue 🤗 🤗

## 更新文档

Hexo 文档开放源代码，您可以在 [hexojs/site][] 找到源代码。

### 工作流

1. 分叉（fork） [hexojs/site][]
2. 把库（repository）复制到电脑上，并安装所依赖的插件。

```bash
$ npm install hexo-cli -g # If you don't have hexo-cli installed
$ git clone https://github.com/<username>/site.git
$ cd site
$ npm install
```

3. 开始编辑文件。 您可以通过服务器预览变动。

```bash
$ hexo server
```

4. 推送（push）分支。
5. 建立一个新的合并申请（pull request）并描述变动。

### 翻译

#### 贡献翻译

[![Crowdin](https://badges.crowdin.net/hexo/localized.svg)](https://crowdin.com/project/hexo)

现在我们使用 [Crowdin](https://crowdin.com/project/hexo) 平台进行翻译，任何人都可以贡献翻译并投票支持翻译，而不需要手动git 操作。

#### 添加新语言

1. 提交一个新议题（issue）让我们知道。 拥有权限 [Crowdin 项目](https://crowdin.com/project/hexo) 的成员在设置中添加语言。
1. 在 Crowdin 中添加语言后，任何人都可以贡献翻译。
1. 在 `source/_data/language.yml` 中新增语言。
1. 将 `en.yml` 复制到 `themes/navy/languages`中并命名为语言名称（全小写）。

## 报告问题

当您在使用 Hexo 时遇到问题，您可以尝试在 [问题解答](troubleshooting.html) 中寻找解答，或是在 [GitHub](https://github.com/hexojs/hexo/issues) 或 [Google Group](https://groups.google.com/group/hexo) 上提问。 如果你没有找答案，请在 Github 报告它。

1. 在 [调试模式](commands.html#调试模式) 中重现问题。
2. 在 GitHub 上提交 Issue 时，请遵循 Issue 模板中的步骤提供调试消息和版本信息。

[hexojs/hexo]: https://github.com/hexojs/hexo
[hexojs/site]: https://github.com/hexojs/site
