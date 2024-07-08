---
title: 插件
---

Hexo 有强大的插件系统，使您能轻松扩展功能而不用修改核心模块的源码。 在 Hexo 中有两种形式的插件：

### 脚本（Scripts）

如果您的代码较复杂，或是您想要发布到 NPM 上，建议您编写插件。 首先，在 `node_modules` 文件夹中建立文件夹，文件夹名称开头必须为 `hexo-`，如此一来 Hexo 才会在启动时加载；否则 Hexo 将会忽略它。

### 插件（Packages）

如果您的代码很复杂或者您想将其发布到 NPM，建议使用插件。 首先，在`node_modules`文件夹中创建一个文件夹。 该文件夹的名称必须以 `hexo-` 开头，否则 Hexo 将忽略它。

文件夹内至少要包含 2 个文件：一个是主程序，另一个是 `package.json`，描述插件的用途和所依赖的插件。

```plain
.
├── index.js
└── package.json
```

编辑 `source/_data/plugins/<your-plugin-name>.yml` 并添加您的插件。 例如：

```json package.json
{
  "name": "hexo-my-plugin",
  "version": "0.0.1",
  "main": "index"
}
```

You'll also need to list your plugin as a dependency in the root `package.json` of your hexo instance in order for Hexo to detect and load it.

### 工具

您可以使用 Hexo 提供的官方工具插件来加速开发：

- [hexo-fs][]：文件 IO
- [hexo-util][]：工具程式
- [hexo-i18n][]：本地化（i18n）
- [hexo-pagination][]：生成分页数据

### 发布

当您完成插件后，可以考虑将它发布到 [插件列表](/plugins)，让更多人能够使用您的插件。 发布插件的步骤和 [更新文档](contributing.html#更新文档) 非常类似。

1. Fork [hexojs/site][]
2. 把库（repository）复制到电脑上，并安装所依赖的插件。

   ```shell
   $ git clone https://github.com/<username>/site.git
   $ cd site
   $ npm install
   ```

3. 在 `source/_data/plugins/` 中创建一个新的 yaml 文件，使用您的插件名称作为文件名。

4. 编辑 `source/_data/plugins/<your-plugin-name>.yml` 并添加您的插件。 例如：

   ```yaml
   description: Server module for Hexo.
   link: https://github.com/hexojs/hexo-server
   tags:
     - official
     - server
     - console
   ```

5. 推送（push）分支。
6. 建立一个新的合并申请（pull request）并描述改动。

[hexo-fs]: https://github.com/hexojs/hexo-fs
[hexo-util]: https://github.com/hexojs/hexo-util
[hexo-i18n]: https://github.com/hexojs/hexo-i18n
[hexo-pagination]: https://github.com/hexojs/hexo-pagination
[hexojs/site]: https://github.com/hexojs/site
