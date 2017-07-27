title: Configuração
---
Uma vez instalado o Hexo, execute os seguintes comandos para inicializar o Hexo no alvo `<folder>`.

``` bash
$ hexo init <folder>
$ cd <folder>
$ npm install
```

Uma vez inicializado, aqui está o aspecto da sua pasta de projeto:

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

Site [configuração](configuration.html) arquivo. Você pode configurar a maioria das configurações aqui.

### package.json

Dados do aplicativo. O [EJS](http://embeddedjs.com/), [Stylus](http://learnboost.github.io/stylus/) e [Markdown](http://daringfireball.net/projects/markdown/) são renderizadores instalados por padrão. Se desejar, você pode desinstalá-los mais tarde.

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

[Scaffold](writing.html#Scaffolds) pasta. Quando você cria uma nova postagem, a Hexo baseia o novo arquivo no scaffold.

### source

A pasta `source`. É aqui que você coloca o conteúdo do seu site. Hexo ignora arquivos ocultos e arquivos ou pastas cujos nomes são prefixados com `_` (sublinhado) - exceto a pasta `_posts`. Os arquivos renderizáveis (por exemplo, Markdown, HTML) serão processados e colocados na pasta `public`, enquanto outros arquivos serão simplesmente copiados.


### Temas

A pasta [Theme](themes.html). O Hexo gera um site estático combinando os conteúdos do site com o tema.
