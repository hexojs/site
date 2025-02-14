---
title: 文件
---

歡迎使用 Hexo，此文件將幫助您快速開始使用。 如果您在使用途中遇到任何問題，您可以在 [解決問題](troubleshooting.html) 中找到解答，或者也可以在 [GitHub](https://github.com/hexojs/hexo/issues) 或 [Google Group](https://groups.google.com/group/hexo) 上詢問。

## 什麼是 Hexo？

Hexo 是一個快速、簡單且強大的網誌框架。 Hexo 使用 [Markdown](http://daringfireball.net/projects/markdown/)（或其他標記語言）解析您的文章，並在幾秒鐘內，透過漂亮的主題產生靜態檔案。

## 安裝

It only takes a few minutes to set up Hexo. If you encounter a problem and can't find the solution here, please [submit a GitHub issue](https://github.com/hexojs/hexo/issues) and we'll help.

{% youtube PsXWbI2Mqu0 %}

### 安裝需求

安裝 Hexo 相當簡單；然而，在安裝前您必須先檢查下列您的電腦是否已經安裝下列軟體：

- [Node.js](http://nodejs.org/) (Node.js 版本需不低於8.10，建議使用 Node.js 10.0 及以上版本)
- [Git](http://git-scm.com/)

若您的電腦已經安裝上述的必備軟體，那麼恭喜您！ 只需要透過 npm 即可完成 Hexo 的安裝。

If not, please follow the following instructions to install all the requirements.

### 安裝 Git

- Windows：下載並安裝 [git](https://git-scm.com/download/win).
- Mac：使用 [Homebrew](http://mxcl.github.com/homebrew/), [MacPorts](http://www.macports.org/) 或 [安裝程式](http://sourceforge.net/projects/git-osx-installer/) 安裝。
- Linux (Ubuntu, Debian)：`sudo apt-get install git-core`
- Linux (Fedora, Red Hat, CentOS)：`sudo yum install git-core`

{% note warn Mac 使用者 %}
You may encounter some problems when compiling. Please install Xcode from App Store first. 您在編譯時可能會碰到問題，請先至 App Store 安裝 Xcode，一旦 Xcode 安裝完成後，開啟它並前往 **Preferences -> Download -> Command Line Tools -> Install** 安裝命令列工具。
{% endnote %}

### 安裝 Node.js

Node.js 為大多數平台提供了官方的 [安裝程序](https://nodejs.org/en/download/)。

其它的安裝方法：

- Windows：通過 [nvs](https://github.com/jasongin/nvs/)（推薦）或者[nvm](https://github.com/nvm-sh/nvm) 安裝。
- Mac：使用 [Homebrew](https://brew.sh/) 或 [MacPorts](http://www.macports.org/) 安裝。
- Linux（DEB/RPM-based）：從 [NodeSource](https://github.com/nodesource/distributions) 安裝。
- Others: Install it through respective package manager. 其它：使用相應的軟件包管理器進行安裝，可以參考由 Node.js 提供的 [指導](https://nodejs.org/en/download/package-manager/)

對於 Mac 和 Linux 同樣建議使用 nvs 或者 nvm，以避免可能會出現的權限問題。

{% note info Windows %}
使用 Node.js 官方安裝程序時，請確保勾選 **Add to PATH** 選項（默認已勾選）
{% endnote %}

{% note warn Mac / Linux %}
如果在嘗試安裝Hexo 的過程中出現`EACCES` 權限錯誤，請遵循[由npmjs 發布的指導](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally) 修復該問題。
{% endnote %}

{% note info Linux %}
若您使用 Snap 安裝 Node.js，您則需要在[初始化](/zh-tw/docs/commands#init)一個部落格時，於目標資料夾中手動執行 `npm install`。
{% endnote %}

### 安裝 Hexo

一旦所有的必備軟體都安裝完畢後，即可透過 npm 安裝 Hexo：

```bash
$ npm install -g hexo-cli
```

### Advanced installation and usage

Advanced users may prefer to install and use `hexo` package instead.

```bash
$ npm install hexo
```

Once installed, you can run Hexo in two ways:

1. `npx hexo <command>`
2. Linux users can set relative path of `node_modules/` folder:

```bash
echo 'PATH="$PATH:./node_modules/.bin"' >> ~/.profile
```

then run Hexo using `hexo <command>`

### 必要的 Node.js 版本

如果您堅持使用較舊版本的 Node.js，你可以考慮安裝過往版本的 Hexo。

請注意我們並不會對於過往版本的 Hexo 進行錯誤修復。

有可能的話，我們強烈建議總是安裝[最新版本](https://www.npmjs.com/package/hexo?activeTab=versions)的 Hexo 以及[推薦版本](#安裝需求)的 Node.js。

| Hexo 版本     | 最小可行 (Node.js 版本) | 小於 (Node.js 版本) |
| ----------- | ----------------- | --------------- |
| 7.0+        | 14.0.0            | latest          |
| 6.2+        | 12.13.0           | latest          |
| 6.0+        | 12.13.0           | 18.5.0          |
| 5.0+        | 10.13.0           | 12.0.0          |
| 4.1 - 4.2   | 8.10              | 10.0.0          |
| 4.0         | 8.6               | 8.10.0          |
| 3.3 - 3.9   | 6.9               | 8.0.0           |
| 3.2 - 3.3   | 0.12              | unknown         |
| 3.0 - 3.1   | 0.10 or iojs      | unknown         |
| 0.0.1 - 2.8 | 0.10              | unknown         |
