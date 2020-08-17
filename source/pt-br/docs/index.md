---
title: Documentação
---

Bem-vindo à documentação do Hexo. Se você encontrar algum problema ao usar o Hexo, dê uma olhada no  [guia de solução de problemas](troubleshooting.html), abra uma issue no [GitHub](https://github.com/hexojs/hexo/issues) ou inicie um tópico no [Google Group](https://groups.google.com/group/hexo).

## O que é o Hexo?

O Hexo é uma ferramenta simples, rápida e poderosa para criação blog. Você escreve postagens em [Markdown](http://daringfireball.net/projects/markdown/) (ou outras linguagens) e o Hexo gera arquivos estáticos com um lindo tema em segundos.

## Instalação

Demora apenas alguns minutos para configurar o Hexo. Se você encontrar um problema e não conseguir encontrar a solução aqui, por favor [abra uma issue no GitHub](https://github.com/hexojs/hexo/issues) e vamos tentar resolvê-lo.

{% youtube ARted4RniaU %}

### Requerimentos

Instalar o Hexo é bastante fácil. No entanto, você precisa ter algumas outras coisas instaladas primeiro:

- [Node.js](http://nodejs.org/) (Should be at least Node.js 10.13, recommends 12.0 or higher)
- [Git](http://git-scm.com/)

Se o seu computador já possui estes, parabéns! Basta instalar o Hexo com o npm:

``` bash
$ npm install -g hexo-cli
```

Caso contrário, siga as instruções a seguir para instalar todos os requisitos.

{% note warn Para usuários Mac %}
Você pode encontrar alguns problemas ao compilar. Instale o Xcode da App Store primeiro. Depois que o Xcode estiver instalado, abra o Xcode e vá para **Preferences -> Download -> Command Line Tools -> Install** para instalar as ferramentas de linhas de comandos.
{% endnote %}

### Instalando o Git

- Windows: Download e instalação do [Git](https://git-scm.com/download/win).
- Mac: Intalação com o [Homebrew](http://mxcl.github.com/homebrew/), [MacPorts](http://www.macports.org/) ou [installer](http://sourceforge.net/projects/git-osx-installer/).
- Linux (Ubuntu, Debian): `sudo apt-get install git-core`
- Linux (Fedora, Red Hat, CentOS): `sudo yum install git-core`

### Instalando o Node.js

A melhor maneira de instalar o Node.js é com o [Node Version Manager](https://github.com/nvm-sh/nvm).
Felizmente, os criadores do nvm fornecem um script simples que instala automaticamente o nvm:

cURL:

``` bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

Wget:

``` bash
$ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

Uma vez que o nvm esteja instalado, reinicie o terminal e execute o seguinte comando para instalar o Node.js:

``` bash
$ nvm install node
```

{% note info For Windows users %}
We recommend to use [Node Version Switcher](https://github.com/jasongin/nvs/) as an alternative to nvm on Windows, which has similar command-line syntax with nvm and can be installed through provided Windows Installer (MSI) package.
{% endnote %}

Alternativamente, é possível baixar e executar [o instalador do Node.js](http://nodejs.org/).

### Instalando Hexo

Uma vez que todos os requisitos estão instalados, você pode instalar o Hexo com npm:

``` bash
$ npm install -g hexo-cli
```

### Minimum required Node.js version

If you are stuck with older Node.js, you can consider installing a past version of Hexo.

Please note we do not provide bugfixes to past versions of Hexo.

We highly recommend to always install the [latest version](https://www.npmjs.com/package/hexo?activeTab=versions) of Hexo and the [recommended version](#Requirements) of Node.js, whenever possible.

Hexo version | Minimum Node.js version
--- | ---
5.0+ | 10.13.0
4.1 - 4.2 | 8.10
4.0 | 8.6
3.3 - 3.9 | 6.9
3.2 - 3.3 | 0.12
3.0 - 3.1 | 0.10 or iojs
0.0.1 - 2.8 | 0.10
