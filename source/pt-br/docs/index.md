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

- [Node.js](http://nodejs.org/) (Should be at least nodejs 6.9)
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

A melhor maneira de instalar o Node.js é com o [Node Version Manager](https://github.com/creationix/nvm).
Felizmente, os criadores do nvm fornecem um script simples que instala automaticamente o nvm:

cURL:

``` bash
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```

Wget:

``` bash
$ wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```

Uma vez que o nvm esteja instalado, reinicie o terminal e execute o seguinte comando para instalar o Node.js:

``` bash
$ nvm install stable
```

Alternativamente, é possível baixar e executar [o instalador do Node.js](http://nodejs.org/).

### Instalando Hexo

Uma vez que todos os requisitos estão instalados, você pode instalar o Hexo com npm:

``` bash
$ npm install -g hexo-cli
```
