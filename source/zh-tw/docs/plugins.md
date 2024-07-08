---
title: Plugins
---

Hexo 有強大的外掛系統，使您能輕鬆擴展功能而不用修改核心模組的原始碼。 在 Hexo 中有兩種形式的外掛：

### 腳本（Scripts）

If your plugin is relatively simple, it's recommended to use a script. 首先，在 `node_modules` 資料夾中建立資料夾，資料夾名稱開頭必須為 `hexo-`，如此一來 Hexo 才會在啟動時載入。

### Plugin

If your code is complicated or if you want to publish it to the NPM registry, we recommend using a plugin. First, create a folder in the `node_modules` folder. The name of this folder must begin with `hexo-` or Hexo will ignore it.

資料夾內至少要包含 2 個檔案：一個是主程式，另一個是 `package.json`，描述套件的用途和相依套件。

```plain
.
├── index.js
└── package.json
```

`package.json` 中至少要包含 `name`, `version`, `main` 屬性，例如： For example:

```json package.json
{
  "name": "hexo-my-plugin",
  "version": "0.0.1",
  "main": "index"
}
```

You'll also need to list your plugin as a dependency in the root `package.json` of your hexo instance in order for Hexo to detect and load it.

### 工具

您可善用 Hexo 提供的官方工具套件來加速開發：

- [hexo-fs][]：檔案 IO
- [hexo-util][]：工具程式
- [hexo-i18n][]：本地化（i18n）
- [hexo-pagination][]：產生分頁資料

### Publishing

當您完成外掛後，可以考慮將它發佈到 [外掛列表](/plugins)，讓更多人能夠使用您的外掛。 發佈外掛的步驟和 [更新文件](contributing.html#更新文件) 非常類似。

1. Fork [hexojs/site][]
2. Clone the repository to your computer and install dependencies.

   ```shell
   $ git clone https://github.com/<username>/site.git
   $ cd site
   $ npm install
   ```

3. 編輯 `source/_data/plugins.yml`，在檔案中新增您的外掛，例如：

4. Edit `source/_data/plugins/<your-plugin-name>.yml` and add your plugin. For example:

   ```yaml
   description: Server module for Hexo.
   link: https://github.com/hexojs/hexo-server
   tags:
     - official
     - server
     - console
   ```

5. 推送（push）分支。
6. Create a pull request and describe the change.

[hexo-fs]: https://github.com/hexojs/hexo-fs
[hexo-util]: https://github.com/hexojs/hexo-util
[hexo-i18n]: https://github.com/hexojs/hexo-i18n
[hexo-pagination]: https://github.com/hexojs/hexo-pagination
[hexojs/site]: https://github.com/hexojs/site
