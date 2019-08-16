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

Installing Hexo is quite easy. However, you do need to have a couple of other things installed first:

- [Node.js](http://nodejs.org/) (Should be at least nodejs 6.9)
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
- Mac: Install it with [Homebrew](http://mxcl.github.com/homebrew/), [MacPorts](http://www.macports.org/) or [installer](http://sourceforge.net/projects/git-osx-installer/).
- Linux (Ubuntu, Debian): `sudo apt-get install git-core`
- Linux (Fedora, Red Hat, CentOS): `sudo yum install git-core`

### Install Node.js

The best way to install Node.js is with [Node Version Manager](https://github.com/nvm-sh/nvm).
Thankfully the creators of nvm provide a simple script that automatically installs nvm:

cURL:

``` bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

Wget:

``` bash
$ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

Once nvm is installed, restart the terminal and run the following command to install Node.js:

``` bash
$ nvm install stable
```

Alternatively, download and run [the installer](http://nodejs.org/). Most Linux distributions ship Node.js in their default repository. [NodeSource](https://github.com/nodesource/distributions) third-party repo usually ships more up-to-date Node.js.

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
