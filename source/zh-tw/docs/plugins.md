title: 外掛
---
Hexo 有強大的外掛系統，使您能輕鬆擴展功能而不用修改核心模組的原始碼。在 Hexo 中有兩種形式的外掛：

### 腳本（Scripts）

如果您的程式碼很簡單，建議您撰寫腳本，您只需要把 JavaScript 檔案放到 `scripts` 資料夾，在啟動時就會自動載入。

### 套件（Packages）

如果您的程式碼較複雜，或是您想要發佈到 NPM 上，建議您撰寫套件。首先，在 `node_modules` 資料夾中建立資料夾，資料夾名稱開頭必須為 `hexo-`，如此一來 Hexo 才會在啟動時載入。資料夾內至少要包含 2 個檔案：一個是主程式，另一個是 `package.json`，描述套件的用途和相依套件。

``` plain
.
├── index.js
└── package.json
```

`package.json` 中至少要包含 `name`, `version`, `main` 屬性，例如：

``` json package.json
{
  "name": "hexo-my-plugin",
  "version": "0.0.1",
  "main": "index"
}
```

### 開發

Hexo 共有九種外掛，您可以在 API 頁面中獲得更多資訊：

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

您可善用 Hexo 提供的官方工具套件來加速開發：

- [hexo-fs]：檔案 IO
- [hexo-util]：工具程式
- [hexo-i18n]：本地化（i18n）
- [hexo-pagination]：產生分頁資料

### 發佈

[hexo-fs]: https://github.com/hexojs/fs
[hexo-util]: https://github.com/hexojs/util
[hexo-i18n]: https://github.com/hexojs/i18n
[hexo-pagination]: https://github.com/hexojs/hexo-pagination