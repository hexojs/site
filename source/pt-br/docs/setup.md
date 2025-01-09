---
title: Setup
---

{% youtube 0m2HnATkHOk %}

Uma vez instalado o Hexo, execute os seguintes comandos para inicializar um site com Hexo em um diretório `<folder>`.

```bash
$ hexo init <folder>
$ cd <folder>
$ npm install
```

Após inicializado, o diretório do seu projeto ficará com a seguinte estrutura:

```plain
.
├── _config.yml
├── package.json
├── scaffolds
├── source
|   ├── _drafts
|   └── _posts
└── themes
```

### \_config.yml

Arquivo de [configuração](configuration.html) do site. Você pode definir a maioria das configurações aqui.

### package.json

Arquivo de dados da aplicação. Os renderizadores [Markdown](http://daringfireball.net/projects/markdown/), [EJS](https://ejs.co/) e [Stylus](http://learnboost.github.io/stylus/) são instalados por padrão. Se desejar, você pode desinstalá-los posteriormente.

```json package.json
{
  "name": "hexo-site",
  "version": "0.0.0",
  "private": true,
  "hexo": {
    "version": ""
  },
  "dependencies": {
    "hexo": "^7.0.0",
    "hexo-generator-archive": "^2.0.0",
    "hexo-generator-category": "^2.0.0",
    "hexo-generator-index": "^3.0.0",
    "hexo-generator-tag": "^2.0.0",
    "hexo-renderer-ejs": "^2.0.0",
    "hexo-renderer-stylus": "^3.0.0",
    "hexo-renderer-marked": "^6.0.0",
    "hexo-server": "^3.0.0",
    "hexo-theme-landscape": "^1.0.0"
  }
}
```

### scaffolds

Diretório de [Scaffold](writing.html#Scaffolds). Quando você cria uma nova postagem, o Hexo cria um arquivo baseado no scaffold.

### source

Diretório de conteúdo. É aqui que você coloca o conteúdo do seu site. O Hexo ignora arquivos ocultos e arquivos ou diretórios cujos nomes são prefixados com `_` (sublinhado) - exceto o diretório `_posts`. Os arquivos renderizáveis (arquivos Markdown e HTML por exemplo) serão processados e colocados no diretório `public`, enquanto outros arquivos serão simplesmente copiados.

### themes

Diretório de [Temas](themes.html). O Hexo gera um site estático combinando o conteúdo do site com o tema.
