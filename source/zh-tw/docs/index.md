---
title: 文件
---
歡迎使用 Hexo，此文件將幫助您快速開始使用。如果您在使用途中遇到任何問題，您可以在 [解決問題](troubleshooting.html) 中找到解答，或者也可以在 [GitHub](https://github.com/hexojs/hexo/issues) 或 [Google Group](https://groups.google.com/group/hexo) 上詢問。

{% youtube PsXWbI2Mqu0 %}

## 什麼是 Hexo？

Hexo 是一個快速、簡單且強大的網誌框架。Hexo 使用 [Markdown](http://daringfireball.net/projects/markdown/)（或其他標記語言）解析您的文章，並在幾秒鐘內，透過漂亮的主題產生靜態檔案。

## 安裝

讓 Hexo 準備就緒僅需幾分鐘，若您在安裝時遭遇問題而且找不到任何解決方式，請 [回報問題](https://github.com/hexojs/hexo/issues)，我會試著解決您的問題。

### 安裝需求

安裝 Hexo 相當簡單；然而，在安裝前您必須先檢查下列您的電腦是否已經安裝下列軟體：

- [Node.js](http://nodejs.org/) (Node.js 版本需不低於8.10，建議使用 Node.js 10.0 及以上版本)
- [Git](http://git-scm.com/)

若您的電腦已經安裝上述的必備軟體，那麼恭喜您！只需要透過 npm 即可完成 Hexo 的安裝。

``` bash
$ npm install -g hexo-cli
```

如果您的電腦尚未安裝必備軟體的話，請根據下列的安裝指示來完成安裝。

{% note warn Mac 使用者 %}
您在編譯時可能會碰到問題，請先至 App Store 安裝 Xcode，一旦 Xcode 安裝完成後，開啟它並前往 **Preferences -> Download -> Command Line Tools -> Install** 安裝命令列工具。
{% endnote %}

### 安裝 Git

- Windows：下載並安裝 [git](https://git-scm.com/download/win).
- Mac：使用 [Homebrew](http://mxcl.github.com/homebrew/), [MacPorts](http://www.macports.org/) 或 [安裝程式](http://sourceforge.net/projects/git-osx-installer/) 安裝。
- Linux (Ubuntu, Debian)：`sudo apt-get install git-core`
- Linux (Fedora, Red Hat, CentOS)：`sudo yum install git-core`

### 安裝 Node.js

Node.js 為大多數平台提供了官方的 [安裝程序](https://nodejs.org/en/download/)。對於中國大陸地區用戶，可以前往 [淘寶 Node.js 鏡像](https://npm.taobao.org/mirrors/node) 下載。

其它的安裝方法：

- Windows：通過 [nvs](https://github.com/jasongin/nvs/)（推薦）或者[nvm](https://github.com/nvm-sh/nvm) 安裝。
- Mac：使用 [Homebrew](https://brew.sh/) 或 [MacPorts](http://www.macports.org/) 安裝。
- Linux（DEB/RPM-based）：從 [NodeSource](https://github.com/nodesource/distributions) 安裝。
- 其它：使用相應的軟件包管理器進行安裝，可以參考由 Node.js 提供的 [指導](https://nodejs.org/en/download/package-manager/)

對於 Mac 和 Linux 同樣建議使用 nvs 或者 nvm，以避免可能會出現的權限問題。

{% note info Windows 用戶 %}
使用 Node.js 官方安裝程序時，請確保勾選 **Add to PATH** 選項（默認已勾選）
{% endnote %}

{% note warn For Mac / Linux 用戶 %}
如果在嘗試安裝Hexo 的過程中出現`EACCES` 權限錯誤，請遵循[由npmjs 發布的指導](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally ) 修復該問題。強烈建議 **不要** 使用 root、sudo 等方法覆蓋權限
{% endnote %}

{% note info Linux %}
If you installed Node.js using Snap, you may need to manually run `npm install` in the target folder when [initializing](/docs/commands#init) a blog.
{% endnote %}

### 安裝 Hexo

一旦所有的必備軟體都安裝完畢後，即可透過 npm 安裝 Hexo：

``` bash
$ npm install -g hexo-cli
```

### Minimum required Node.js version

If you are stuck with older Node.js, you can consider installing a past version of Hexo.

Please note we do not provide bugfixes to past versions of Hexo.

We highly recommend to always install the [latest version](https://www.npmjs.com/package/hexo?activeTab=versions) of Hexo and the [recommended version](#安裝需求) of Node.js, whenever possible.

Hexo version | Minimum Node.js version
--- | ---
5.0+ | 10.13.0
4.1 - 4.2 | 8.10
4.0 | 8.6
3.3 - 3.9 | 6.9
3.2 - 3.3 | 0.12
3.0 - 3.1 | 0.10 or iojs
0.0.1 - 2.8 | 0.10
