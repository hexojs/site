title: Commandes
---
## init

``` bash
$ hexo init [dossier]
```

Initialise un site. Si aucun `dossier` n'est spécifié, Hexo créera le site dans le dossier courant.

## new

``` bash
$ hexo new [modèle] <titre>
```

Crée un nouvel article. Si aucun `layout` n'est spécifié, Hexo utilisera le `default_layout` depuis le fichier [_config.yml](configuration.html). Si le `title` contient des espaces, vous devez l'entourer par des guillemets.

## generate

``` bash
$ hexo generate
```

Génère les fichiers statiques.

Option | Description
--- | ---
`-d`, `--deploy` | Déploier après que la génération soit terminée
`-w`, `--watch` | Observer les changements dans les fichiers

## publish

``` bash
$ hexo publish [modèle] <nomdufichier>
```

Publier en tant que brouillon.

## server

``` bash
$ hexo server
```

Démarrer un serveur local. Par défaut, il se trouve à l'adresse `http://localhost:4000/`.

Option | Description
--- | ---
`-p`, `--port` | Changer le port par défaut.
`-s`, `--static` | Ne servir que les fichiers statiques.
`-l`, `--log` | Activer la journalisation. Changer le format de la journalisation.

## deploy

``` bash
$ hexo deploy
```

Déployer votre site.

Option | Description
--- | ---
`-g`, `--generate` | Générer avant de déployer.

## render

``` bash
$ hexo render <fichier1> [fichier2] ...
```

Générer les fichiers.

Option | Description
--- | ---
`-o`, `--output` | Chemin de sortie.

## migrate

``` bash
$ hexo migrate <type>
```

[Migrer](migration.html) le contenu en provenance d'un autre système de blog.

## clean

``` bash
$ hexo clean
```

Effacer le fichier en cache (`db.json`) et les fichier (`public`) générés.

## list

``` bash
$ hexo list <type>
```

Lists all routes.
Lister toutes les

## version

``` bash
$ hexo version
```

Afficher les informations de la version.

## Options

### Mode sans échec

``` bash
$ hexo --safe
```

Désactiver le chargement des extensions et des scripts. Essayez ceci si vous rencontrer un problème après l'installation d'une nouvelle extension.

### Mode déboggage

``` bash
$ hexo --debug
```

Afficher la journalisation dans le terminal et enregistrer une copie dans `debug.log`. Essayez ceci si vous rencontrer un problème avec Hexo. Si vous voyez des erreurs, s'il vous plaît, veuillez faire un [signalement de bug sur GitHub](https://github.com/hexojs/hexo/issues/new).

### Mode silencieux

``` bash
$ hexo --silent
```

Ne rien afficher dans le terminal.

### Personnalisé le chemin du fichier config

``` bash
$ hexo --config custom.yml
```

Utiliser un fichier de config personnalisé (à la place de `_config.yml`).

### Afficher les brouillons

``` bash
$ hexo --draft
```

Afficher les brouillons (stocké dans le dossier `source/_drafts`).

### Personnalisé CWD

``` bash
$ hexo --cwd /path/to/cwd
```

Personnalisé le chemin du dossier courant.
