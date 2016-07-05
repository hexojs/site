title: Commencer
---
Dès que Hexo est installé, exécutez les commandes suivantes pour initialiser Hexo dans le dossier cible `<dossier>`.

``` bash
$ hexo init <folder>
$ cd <folder>
$ npm install
```

Une fois l'initialisation terminée, le dossier de votre projet devrait ressembler à ça:

``` plain
.
├── _config.yml
├── package.json
├── scaffolds
├── source
|   ├── _drafts
|   └── _posts
└── themes
```

### _config.yml

C'est le fichier de [configuration](configuration.html) du site. Vous pouvez configurer la plupart des paramètres ici.

### package.json

C'est le fichier des données d'application. Les *renderers* [EJS](http://embeddedjs.com/), [Stylus](http://learnboost.github.io/stylus/) et [Markdown](http://daringfireball.net/projects/markdown/) sont installés par défaut. Si vous voulez, vous pouvez les déinstallés plus tard.

``` json package.json
{
  "name": "hexo-site",
  "version": "0.0.0",
  "private": true,
  "hexo": {
    "version": ""
  },
  "dependencies": {
    "hexo": "^3.0.0",
    "hexo-generator-archive": "^0.1.0",
    "hexo-generator-category": "^0.1.0",
    "hexo-generator-index": "^0.1.0",
    "hexo-generator-tag": "^0.1.0",
    "hexo-renderer-ejs": "^0.1.0",
    "hexo-renderer-stylus": "^0.2.0",
    "hexo-renderer-marked": "^0.2.4",
    "hexo-server": "^0.1.2"
  }
}
```

### scaffolds

Le dossier [Scaffold](writing.html#Scaffolds). Lorsque vous créez un nouvel article, Hexo base les nouveaux fichiers sur le *scaffold*.

### source

Le dossier Source. C'est ici que vous mettez le contenu de votre site. Hexo ignore les fichiers cachés ainsi que les fichiers ou les dossiers dont les noms ont le préfix `_` (barre de soulignement) - sauf le dossier `_posts`. Les fichiers *renderable* (Markdown, HTML) seront traités et mis dans le dossier `public` tandis que les autres fichiers seront copié tel quel.

### themes

Le dossier [Theme](themes.html). Hexo génère le site static en combinant le contenu du site avec le thème.
