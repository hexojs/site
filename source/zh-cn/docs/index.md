---
title: 文档
---

欢迎使用 Hexo，本文档将帮助您快速上手。如果您在使用过程中遇到问题，请查看 [问题解答](troubleshooting.html) 中的解答，或者在 [GitHub](https://github.com/hexojs/hexo/issues)、[Google Group](https://groups.google.com/group/hexo) 上提问。

## 什么是 Hexo？

Hexo 是一个快速、简洁且高效的博客框架。Hexo 使用 [Markdown](http://daringfireball.net/projects/markdown/)（或其他渲染引擎）解析文章，在几秒内，即可利用靓丽的主题生成静态网页。

{% youtube bCj0iVVqkSg %}

## 安装

安装 Hexo 只需几分钟时间，若您在安装过程中遇到问题或无法找到解决方式，请[提交问题](https://github.com/hexojs/hexo/issues)，我会尽力解决您的问题。

### 安装前提

安装 Hexo 相当简单。然而在安装前，您必须检查电脑中是否已安装下列应用程序：

- [Node.js](http://nodejs.org/) (Should be at least nodejs 6.9)
- [Git](http://git-scm.com/)

如果您的电脑中已经安装上述必备程序，那么恭喜您！接下来只需要使用 npm 即可完成 Hexo 的安装。

``` bash
$ npm install -g hexo-cli
```

如果您的电脑中尚未安装所需要的程序，请根据以下安装指示完成安装。

{% note warn Mac 用户 %}
您在编译时可能会遇到问题，请先到 App Store 安装 Xcode，Xcode 完成后，启动并进入 **Preferences -> Download -> Command Line Tools -> Install** 安装命令行工具。
{% endnote %}

{% note warn For Mac / Linux 用户 %}
如果你是 macOS 用户，或者是通过软件管理器从默认软件仓库安装 Node.js 的 Linux 用户，在使用 npm 的 `-g` 参数时可能会遇到一些权限相关的问题。请遵循 [由 npmjs 发布的指导](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally) 修复该问题，**并且不要使用 root、sudo 等方法覆盖权限**
{% endnote %}

### 安装 Git

- Windows：下载并安装 [git](https://git-scm.com/download/win).
- Mac：使用 [Homebrew](http://mxcl.github.com/homebrew/), [MacPorts](http://www.macports.org/) ：`brew install git`;或下载 [安装程序](http://sourceforge.net/projects/git-osx-installer/) 安装。
- Linux (Ubuntu, Debian)：`sudo apt-get install git-core`
- Linux (Fedora, Red Hat, CentOS)：`sudo yum install git-core`

{% note warn Windows 用户 %}
由于众所周知的原因，从上面的链接下载git for windows最好挂上一个代理，否则下载速度十分缓慢。也可以参考[这个页面](https://github.com/waylau/git-for-win)，收录了存储于百度云的下载地址。
{% endnote %}

### 安装 Node.js

安装 Node.js 的最佳方式是使用 [nvm](https://github.com/nvm-sh/nvm)。nvm 的开发者提供了一个自动安装 nvm 的简单脚本：

cURL:

``` bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | sh
```

Wget:

``` bash
$ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | sh
```

安装完成后，重启终端并执行下列命令即可安装 Node.js。

``` bash
$ nvm install stable
```

或者您也可以下载 [安装程序](http://nodejs.org/) 来安装。

{% note info Windows 用户 %}
对于windows用户来说，建议使用安装程序进行安装。安装时，请勾选**Add to PATH**选项。
另外，您也可以使用**Git Bash**，这是git for windows自带的一组程序，提供了Linux风格的shell，在该环境下，您可以直接用上面提到的命令来安装Node.js。打开它的方法很简单，在任意位置单击右键，选择“Git Bash Here”即可。由于Hexo的很多操作都涉及到命令行，您可以考虑始终使用**Git Bash**来进行操作。
{% endnote %}

{% note info Linux 用户 %}
大部分 Linux 发行版都会在它们的默认软件包仓库中分发 Node.js。第三方仓库 [NodeSource](https://github.com/nodesource/distributions) 通常能分发最新版本的 Node.js。
{% endnote %}

### 安装 Hexo

所有必备的应用程序安装完成后，即可使用 npm 安装 Hexo。

``` bash
$ npm install -g hexo-cli
```


