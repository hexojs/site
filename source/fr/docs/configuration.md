title: Configuration
---
Vous pouvez modifier les paramètres du site dans le fichier `config.yml`.

### Site

Paramètre | Description
--- | ---
`title` | Le titre de votre site
`subtitle` | Le sous-titre de votre site
`description` | La description de votre site
`author` | Votre nom
`language` | La langue de votre site. Utiliser un [code ISO-639-1 alpha-2](https://fr.wikipedia.org/wiki/List_of_ISO_639-1_codes). Par défaut, la valeur est `en`.
`timezone` | Le fuseau horaire de votre site. Par défaut, Hexo utilise les paramètres de votre ordinateur. Vous pouvez trouver une liste des fuseaux horaires disponible [ici](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). Voici des exemples : `America/Montreal`, `Paris` et `UTC`.

### URL

Paramètre | Description | Défaut
--- | --- | ---
`url` | L'URL de votre site |
`root` | Le dossier racine de votre site |
`permalink` | Le format du [permalien](permalinks.html) des articles | `:year/:month/:day/:title/`
`permalink_default` | La valeur par défaut de chacun des segments dans le permalien |

{% note info Site internet dans un sous-dossier %}
Si votre site est dans un sous-dossier (tel que `http://exemple.org/blog`), la valeur de  `url` doit être `http://exemple.org/blog` et celle de `root` doit être `/blog/`.
{% endnote %}

### Dossier et Marqueur

Paramètre | Description | Défaut
--- | --- | ---
`source_dir` | Le dossier Source. C'est ici que le contenu est stocké | `source`
`public_dir` | Le dossier Public. C'est ici que le site static sera généré | `public`
`tag_dir` | Le marqueur des étiquettes | `tags`
`archive_dir` | Le marqueur des archives | `archives`
`category_dir` | Le marqueur des categories | `categories`
`code_dir` | Le marqueur du code inclut | `downloads/code`
`i18n_dir` | Le marqueur i18n | `:lang`
`skip_render` | Les chemins ne sont pas créés. Vous pouvez utiliser les [expressions globales](https://github.com/isaacs/minimatch) pour la correspondance des chemins |

### Rédaction

Paramètre | Description | Défaut
--- | --- | ---
`new_post_name` | Le format du nom de fichier pour l'article | `:titre.md`
`default_layout` | Modèle par défaut | `post`
`titlecase` | Mettre en majuscule la première lettre des mots? | `false`
`external_link` | Ouvrir les liens externes dans un nouvel onglet? | `true`
`filename_case` | Formater le nom des fichiers `1` en minuscule; `2` en majuscule | `0`
`render_drafts` | Afficher les brouillons? | `false`
`post_asset_folder` | Activer le dossier des [Asset](asset-folders.html)? | `false`
`relative_link` | Faire en sorte que les liens soient relatif au dossier racine? | `false`
`future` | Afficher les articles post-datés? | `true`
`highlight` | Paramètres des blocs de code |

### Catégorie et Étiquette

Paramètre | Description | Défaut
--- | --- | ---
`default_category` | Catégorie par défaut | `uncategorized`
`category_map` | Identifiant de la catégorie |
`tag_map` | Identifiant de l'étiquette |

### Format Date / Heure

Hexo utilise [Moment.js](http://momentjs.com/) pour traités les dates.

Paramètre | Description | Défaut
--- | --- | ---
`date_format` | Format de la date | `MMM D YYYY`
`time_format` | Format de l'heure | `H:mm:ss`

### Pagination

Paramètre | Description | Défaut
--- | --- | ---
`per_page` | Le nombre d'article à afficher sur une page. `0` désactiver la pagination | `10`
`pagination_dir` | Le marqueur de structure de la pagination | `page`

### Extensions

Paramètre | Description
--- | ---
`theme` | Nom du thème. `false` désactiver le thème.
`deploy` | Paramètres de déploiement.
