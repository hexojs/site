title: Documentation
---
Welcome to the Hexo documentation. If you encounter any problems when using Hexo, have a look at the  [troubleshooting guide](troubleshooting.html), raise an issue on [GitHub](https://github.com/hexojs/hexo/issues) or start a topic on the [Google Group](https://groups.google.com/group/hexo).

## What is Hexo?

Hexo is a fast, simple and powerful blog framework. You write posts in [Markdown](http://daringfireball.net/projects/markdown/) (or other languages) and Hexo generates static files with a beautiful theme in seconds.

## Installation

It only takes few minutes to set up Hexo. If you encounter a problem and can't find the solution here, please [submit a GitHub issue](https://github.com/hexojs/hexo/issues) and I'll try to solve it.

### Requirements

Installing Hexo is quite easy. However, you do need to have a couple of other things installed first:

- [Node.js](http://nodejs.org/)
- [Git](http://git-scm.com/)

If your computer already has these, congratulations! Just install Hexo with npm:

``` bash
$ npm install -g hexo-cli
```

If not, please follow the following instructions to install all the requirements.

{% note warn For Mac users %}
You may encounter some problems when compiling. Please install Xcode from App Store first. After Xcode is installed, open Xcode and go to **Preferences -> Download -> Command Line Tools -> Install** to install command line tools.
{% endnote %}

### Install Git

- Windows: Download & install [git](https://git-scm.com/download/win).
- Mac: Install it with [Homebrew](http://mxcl.github.com/homebrew/), [MacPorts](http://www.macports.org/) or [installer](http://sourceforge.net/projects/git-osx-installer/).
- Linux (Ubuntu, Debian): `sudo apt-get install git-core`
- Linux (Fedora, Red Hat, CentOS): `sudo yum install git-core`

### Install Node.js

The best way to install Node.js is with [nvm](https://github.com/creationix/nvm).

cURL:

``` bash
$ curl https://raw.github.com/creationix/nvm/master/install.sh | sh
```

Wget:

``` bash
$ wget -qO- https://raw.github.com/creationix/nvm/master/install.sh | sh
```

Once nvm is installed, restart the terminal and run the following command to install Node.js.

``` bash
$ nvm install 0.12
```

Alternatively, download and run [the installer](http://nodejs.org/).

### Install Hexo

Once all the requirements are installed, you can install Hexo with npm.

``` bash
$ npm install -g hexo-cli
```
