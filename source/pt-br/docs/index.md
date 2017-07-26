title: Documentação
---
Bem-vindo à documentação da Hexo. Se você encontrar algum problema ao usar o Hexo, dê uma olhada no  [guia de solução de problemas](troubleshooting.html), levante um problema no [GitHub](https://github.com/hexojs/hexo/issues) ou inicie um tópico No [Google Group](https://groups.google.com/group/hexo).

Bem vindo à documentação do Hexo. Caso encontre algum problema quando estiver usando o Hexo,

## O que é o Hexo?

Hexo é uma estrutura de blog rápida, simples e poderosa. Você escreve posts em [Markdown](http://daringfireball.net/projects/markdown/) (ou outros idiomas) e o Hexo gera arquivos estáticos com um lindo tema em segundos.

## Instalação

Demora apenas alguns minutos para configurar o Hexo. Se você encontrar um problema e não conseguir encontrar a solução aqui, por favor [abra uma issue no GitHub](https://github.com/hexojs/hexo/issues) e vou tentar resolvê-lo.


### Requerimentos

Instalar o Hexo é bastante fácil. No entanto, você precisa ter algumas outras coisas instaladas primeiro:

- [Node.js](http://nodejs.org/)
- [Git](http://git-scm.com/)

Se o seu computador já possui estes, parabéns! Basta instalar o Hexo com npm:

``` bash
$ npm install -g hexo-cli
```

Caso contrário, siga as instruções a seguir para instalar todos os requisitos.

{% note warn Para usuários mac %}
Você pode encontrar alguns problemas ao compilar. Instale o Xcode da App Store primeiro. Depois que o Xcode estiver instalado, abra o Xcode e vá para **Preferences -> Download -> Command Line Tools -> Install** para instalar linhas de comandos..
{% endnote %}

### Instalando Git

- Windows: Download & instalação [git](https://git-scm.com/download/win).
- Mac: Intalação com o [Homebrew](http://mxcl.github.com/homebrew/), [MacPorts](http://www.macports.org/) ou [installer](http://sourceforge.net/projects/git-osx-installer/).
- Linux (Ubuntu, Debian): `sudo apt-get install git-core`
- Linux (Fedora, Red Hat, CentOS): `sudo yum install git-core`

### Instalando Node.js

A melhor maneira de instalar Node.js é com [Node Version Manager](https://github.com/creationix/nvm).
Felizmente, os criadores do nvm fornecem um script simples que instala automaticamente nvm:

cURL:

``` bash
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
```

Wget:

``` bash
$ wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
```

Uma vez que o nvm esteja instalado, reinicie o terminal e execute o seguinte comando para instalar Node.js:

``` bash
$ nvm install stable
```

Alternativa, download e run [the installer](http://nodejs.org/).

### Instalando Hexo

Uma vez que todos os requisitos estão intalados, você pode instalar o Hexo com npm:

``` bash
$ npm install -g hexo-cli
```
