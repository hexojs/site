---
title: Documentation
---
Welcome to the Hexo documentation. If you encounter any problems when using Hexo, have a look at the  [troubleshooting guide](troubleshooting.html), raise an issue on [GitHub](https://github.com/hexojs/hexo/issues) or start a topic on the [Google Group](https://groups.google.com/group/hexo).

## What is Hexo?

Hexo is a fast, simple and powerful blog framework. You write posts in [Markdown](http://daringfireball.net/projects/markdown/) (or other languages) and Hexo generates static files with a beautiful theme in seconds.

## Installation

It only takes a few minutes to set up Hexo. If you encounter a problem and can't find the solution here, please [submit a GitHub issue](https://github.com/hexojs/hexo/issues) and I'll try to solve it.

{% youtube ARted4RniaU %}

### Requirements

Installing Hexo is quite easy and only requires the following beforehand:

- [Node.js](http://nodejs.org/) (Should be at least Node.js 8.6, recommends 10.0 or higher)
- [Git](http://git-scm.com/)

If your computer already has these, congratulations! You can skip to the [Hexo installation](#Install-Hexo) step.

If not, please follow the following instructions to install all the requirements.

{% note warn For Mac users %}
You may encounter some problems when compiling. Please install Xcode from App Store first. After Xcode is installed, open Xcode and go to **Preferences -> Download -> Command Line Tools -> Install** to install command line tools.
{% endnote %}

{% note warn For Mac / Linux users %}
If you are a macOS user, or a Linux user who install Node.js through your package manager with default repository, you might run into some permission error when using `npm install -g`. Please follow [the guide provided by npmjs](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally) to solve the issue, AND DO NOT USE ROOT USER OR SUDO TO OVERRIDE.
{% endnote %}

### Install Git

- Windows: Download & install [git](https://git-scm.com/download/win).
- Mac: Install it with [Homebrew](https://brew.sh/), [MacPorts](http://www.macports.org/) or [installer](http://sourceforge.net/projects/git-osx-installer/).
- Linux (Ubuntu, Debian): `sudo apt-get install git-core`
- Linux (Fedora, Red Hat, CentOS): `sudo yum install git-core`

### Install Node.js

- Windows: Install it with [nvs](https://github.com/jasongin/nvs/) (recommended) or [nvm](https://github.com/nvm-sh/nvm). (Either also recommended for Mac and Linux to avoid possible permission issue)
- Mac: Install it with [Homebrew](https://brew.sh/) or [MacPorts](http://www.macports.org/).
- Linux (DEB/RPM-based): Install it with [NodeSource](https://github.com/nodesource/distributions).
- Linux (other): Install it through respective package manager (if Node.js >= 10.0 is available) or use the installation scripts mentioned in Windows.

Alternatively, download and run the [official installer](https://nodejs.org/en/download/) provided by Node.js.

### Install Hexo

Once all the requirements are installed, you can install Hexo with npm:

``` bash
$ npm install -g hexo-cli
```

### Advanced installation and usage

Advanced users may prefer to install and use `hexo` package instead.

``` bash
$ npm install hexo
```

Once installed, you can run Hexo in two ways:

1. `npx hexo <command>`
2. Linux users can set relative path of `node_modules/` folder:

  ``` bash
  echo 'PATH="$PATH:./node_modules/.bin"' >> ~/.profile
  ```

  then run Hexo using `hexo <command>`
