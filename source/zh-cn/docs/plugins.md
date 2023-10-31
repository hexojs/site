---
title: 插件
---
Hexo 有强大的插件系统，使您能轻松扩展功能而不用修改核心模块的源码。在 Hexo 中有两种形式的插件：

### 脚本（Scripts）

如果您的代码很简单，建议您编写脚本，您只需要把 JavaScript 文件放到 `scripts` 文件夹，在启动时就会自动加载。

### 插件（Packages）

如果您的代码较复杂，或是您想要发布到 NPM 上，建议您编写插件。首先，在 `node_modules` 文件夹中建立文件夹，文件夹名称开头必须为 `hexo-`，如此一来 Hexo 才会在启动时加载；否则 Hexo 将会忽略它。

文件夹内至少要包含 2 个文件：一个是主程序，另一个是 `package.json`，描述插件的用途和所依赖的插件。

``` plain
.
├── index.js
└── package.json
```

`package.json` 中至少要包含 `name`, `version`, `main` 属性，例如：

``` json package.json
{
  "name": "hexo-my-plugin",
  "version": "0.0.1",
  "main": "index"
}
```

### 工具

您可以使用 Hexo 提供的官方工具插件来加速开发：

- [hexo-fs]：文件 IO
- [hexo-util]：工具程式
- [hexo-i18n]：本地化（i18n）
- [hexo-pagination]：生成分页数据

### 发布

当您完成插件后，可以考虑将它发布到 [插件列表](/plugins)，让更多人能够使用您的插件。发布插件的步骤和 [更新文档](contributing.html#更新文档) 非常类似。

1. Fork [hexojs/site]
2. 把库（repository）复制到电脑上，并安装所依赖的插件。

   ```shell
   $ git clone https://github.com/<username>/site.git
   $ cd site
   $ npm install
   ```

3. 在 `source/_data/plugins/` 中创建一个新的 yaml 文件，使用您的插件名称作为文件名。

4. 编辑 `source/_data/plugins/<your-plugin-name>.yml` 并添加您的插件。例如：

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
