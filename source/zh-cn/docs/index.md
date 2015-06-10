title: 文档
---

欢迎使用 Hexo，本文档将帮助您快速上手。如果您在使用过程中遇到问题，请查看 [问题解答](troubleshooting.html) 中的解答，或者在 [GitHub](https://github.com/hexojs/hexo/issues)、[Google Group](https://groups.google.com/group/hexo) 上提问。

## 什么是 Hexo？

Hexo 是一个快速、简洁且高效的博客框架。Hexo 使用 [Markdown](http://daringfireball.net/projects/markdown/)（或其他渲染引擎）解析文章，在几秒内，即可利用靓丽的主题生成静态网页。

## 安装

安装 Hexo 只需几分钟时间，若您在安装过程中遇到问题或无法找到解决方式，请[提交问题](https://github.com/hexojs/hexo/issues)，我会尽力解决您的问题。

### 安装前提

安装 Hexo 相当简单。然而在安装前，您必须检查电脑中是否已安装下列应用程序：

- [Node.js](http://nodejs.org/)
- [Git](http://git-scm.com/)

如果您的电脑中已经安装上述必备程序，那么恭喜您！接下来只需要使用 npm 即可完成 Hexo 的安装。

``` bash
$ npm install -g hexo-cli
```

如果您的电脑中尚未安装所需要的程序，请根据以下安装指示完成安装。

{% note warn Mac 用户 %}
您在编译时可能会遇到问题，请先到 App Store 安装 Xcode，Xcode 完成后，启动并进入 **Preferences -> Download -> Command Line Tools -> Install** 安装命令行工具。
{% endnote %}

### 安装 Git

- Windows：下载并安装 [git](https://git-scm.com/download/win).
- Mac：使用 [Homebrew](http://mxcl.github.com/homebrew/), [MacPorts](http://www.macports.org/) 或下载 [安装程序](http://sourceforge.net/projects/git-osx-installer/) 安装。
- Linux (Ubuntu, Debian)：`sudo apt-get install git-core`
- Linux (Fedora, Red Hat, CentOS)：`sudo yum install git-core`

### 安装 Node.js

安装 Node.js 的最佳方式是使用 [nvm](https://github.com/creationix/nvm)。

cURL:

``` bash
$ curl https://raw.github.com/creationix/nvm/master/install.sh | sh
```

Wget:

``` bash
$ wget -qO- https://raw.github.com/creationix/nvm/master/install.sh | sh
```

安装完成后，重启终端并执行下列命令即可安装 Node.js。

``` bash
$ nvm install 0.10
```

或者您也可以下载 [应用程序](http://nodejs.org/) 来安装。

### 安装 Hexo

所有必备的应用程序安装完成后，即可使用 npm 安装 Hexo。

``` bash
$ npm install -g hexo-cli
```
