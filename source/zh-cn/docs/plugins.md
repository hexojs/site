title: 插件
---
Hexo 有强大的插件系统，使您能轻松扩展功能而不用修改核心模块的源码。在 Hexo 中有两种形式的插件：

### 脚本（Scripts）

如果您的代码很简单，建议您编写脚本，您只需要把 JavaScript 文件放到 `scripts` 文件夹，在启动时就会自动载入。

### 套件（Packages）

如果您的代码较复杂，或是您想要发布到 NPM 上，建议您编写插件。首先，在 `node_modules` 文件夹中建立文件夹，文件夹名称开头必须为 `hexo-`，如此一来 Hexo 才会在启动时载入。文件夹内至少要包含 2 个文件：一个是主程序，另一个是 `package.json`，描述插件的用途和所依赖的插件。

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

### 开发

Hexo 共有九种插件，您可以在 API 页面中获得更多信息：

- Generator
- Renderer
- Helper
- Deployer
- Processor
- Tag
- Console
- Migrator
- Filter

### 工具

您可以使用 Hexo 提供的官方工具插件来加速开发：

- [hexo-fs]：文件 IO
- [hexo-util]：工具程式
- [hexo-i18n]：本地化（i18n）
- [hexo-pagination]：生成分页资料

### 发布

[hexo-fs]: https://github.com/hexojs/fs
[hexo-util]: https://github.com/hexojs/util
[hexo-i18n]: https://github.com/hexojs/i18n
[hexo-pagination]: https://github.com/hexojs/hexo-pagination