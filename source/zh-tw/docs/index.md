title: 文件
---
歡迎使用 Hexo，此文件將幫助您快速開始使用。如果您在使用途中遇到任何問題，您可以在 [解決問題](troubleshooting.html) 中找到解答，或者也可以在 [GitHub](https://github.com/hexojs/hexo/issues) 或 [Google Group](https://groups.google.com/group/hexo) 上詢問。

## 什麼是 Hexo？

Hexo 是一個快速、簡單且強大的網誌框架。Hexo 使用 [Markdown](http://daringfireball.net/projects/markdown/)（或其他渲染引擎）解析您的文章，並在幾秒鐘內，透過漂亮的主題產生靜態檔案。

## 安裝

讓 Hexo 準備就緒僅需幾分鐘，若您在安裝時遭遇問題而且找不到任何解決方式，請 [回報問題](https://github.com/hexojs/hexo/issues)，我會試著解決您的問題。

### 安裝需求

安裝 Hexo 相當簡單；然而，在安裝前您必須先檢查下列您的電腦是否已經安裝下列軟體：

- [Node.js](http://nodejs.org/)
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

安裝 Node.js 的最佳方式是透過 [nvm](https://github.com/creationix/nvm)。

cURL:

``` bash
$ curl https://raw.github.com/creationix/nvm/master/install.sh | sh
```

Wget:

``` bash
$ wget -qO- https://raw.github.com/creationix/nvm/master/install.sh | sh
```

一旦安裝完成，重啟終端機並執行下列指令以安裝 Node.js。

``` bash
$ nvm install 0.12
```

或者您也可以下載 [安裝程式](http://nodejs.org/) 來安裝。

### 安裝 Hexo

一旦所有的必備軟體都安裝完畢後，即可透過 npm 安裝 Hexo。

``` bash
$ npm install -g hexo-cli
```