title: Documentation
---

Bienvenue sur la documantion de Hexo. Si vous rencontrez un problème en utilisant Hexo, jetez un oeil au [guide de dépannage](troubleshooting.html), créer un signalement de bug sur [GitHub](https://github.com/hexojs/hexo/issues) ou ouvrez une nouvelle discussion sur le [Google Group](https://groups.google.com/group/hexo).

## Qu'est-ce que Hexo?

Hexo est un framework de blog rapide, simple et puissance. Vous écrivez vos articles en [Markdown](http://daringfireball.net/projects/markdown/) (ou dans un autre langage) et Hexo génère des fichiers statiques accompagnié d'un jolie thème en quelques secondes.

## Installation

Hexo ne prend que quelques minutes à configurer. Si vous rencontrez un problème et que vous ne trouvez pas de solution ici, s'il vous plaît [envoyer un Github issue](https://github.com/hexojs/issues) et j'essaierais de le résoudre.

### Pré-requis

Installer Hexo c'est très simple, Toutefois, vous aurez besoin d'installer les programmes ci-bas en premier:

- [Node.js](http://nodejs.org/)
- [Git](http://git-scm.com/)

Si vous avez déjà ces programme sur votre ordinateur, bravo! Vous n'avez qu'à installer Hexo via npm:

``` bash
$ npm install -g hexo-cli
```

Sinon, veuillez suivre les instructions pour installer les pré-requis.

{% note warn Pour les utilisateurs Mac %}
Vous pourriez rencontrer quelques problèmes lors de la compilation. S'il vous plaît, installer tout d'abord Xcode via le App Store. Après Xcode soit installé, ouvrez-le et allez dans **Preferences -> Download -> Command Line Tools -> Install** pour installer les outils de ligne de commande.
{% endnote %}

### Installer Git

- Windows: Télécharger et installer [git](https://git-scm.com/download/win).
- Mac: Installer Git avec [Homebrew](http://mxcl.github.com/homebrew/), [MacPorts](http://www.macports.org/) ou [installer](http://sourceforge.net/projects/git-osx-installer/).
- Linux (Ubuntu, Debian): `sudo apt-get install git-core`
- Linux (Fedora, Red Hat, CentOS): `sudo yum install git-core`

### Installer Node.js

La meilleure façon d'installer Node.js est d'utiliser [nvm](https://github.com/creationix/nvm).

cURL:

``` bash
$ curl https://raw.github.com/creationix/nvm/master/install.sh | sh
```

Wget:

``` bash
$ wget -qO- https://raw.github.com/creationix/nvm/master/install.sh | sh
```

Dès que nvm est installé, redémarrer votre terminal et exécuter les commandes suivantes pour installer Node.js.

``` bash
$ nvm install 4
```

Vous pouvez également télécharger et exécuter [le programme d'installation](http://nodejs.org/).

### Installer Hexo

Une fois que tous les pré-requis sont installés, vous pouvez installé Hexo avec npm.

``` bash
$ npm install -g hexo-cli
```
