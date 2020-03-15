---
title: Установка
---
После установки Hexo, запустите следующие команды в консоли для инициализации Hexo в папке `<folder>`.

``` bash
$ hexo init <folder>
$ cd <folder>
$ npm install
```

После инициализации папка будет выглядеть так:

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

Файл [конфигурации](configuration.html) сайта. В нём возможно настроить большинство параметров.

### package.json

Данные приложений. [EJS](https://ejs.co/)-, [Stylus](http://learnboost.github.io/stylus/)- и [Markdown](http://daringfireball.net/projects/markdown/)-обработчики устанавливаются по умолчанию. При желании можно удалить их позже.

``` json package.json
{
  "name": "hexo-site",
  "version": "0.0.0",
  "private": true,
  "hexo": {
    "version": ""
  },
  "dependencies": {
    "hexo": "^3.8.0",
    "hexo-generator-archive": "^0.1.5",
    "hexo-generator-category": "^0.1.3",
    "hexo-generator-index": "^0.2.1",
    "hexo-generator-tag": "^0.2.0",
    "hexo-renderer-ejs": "^0.3.1",
    "hexo-renderer-stylus": "^0.3.3",
    "hexo-renderer-marked": "^0.3.2",
    "hexo-server": "^0.3.3"
  }
}
```

### scaffolds

Папка с [заготовками](writing.html#Заготовки). При создании нового поста Hexo формирует файл в папке scaffold.

### source

Папка с исходниками. Это содержащая сайт папка. Hexo игнорирует скрытые файлы и файлы или папки, имена которых начинаются с `_` (подчеркивания). Исключением является папка `_posts`. Обрабатываемые файлы (напр., markdown, HTML) будут вставлены в общую папку, остальные файлы просто копируются.

### themes

Папка с [темами](themes.html). Hexo генерирует статический сайт, комбинируя содержимое сайта с темой.
