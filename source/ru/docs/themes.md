---
title: Темы
---

{% youtube 5ROIU_9dYe4 %}

Создать тему Hexo легко, надо просто создать новую папку. Чтобы начать использовать темы, измените настройки `theme` в файле сайта `_config`. Тема должна иметь следующую структуру:

```plain
.
├── _config.yml
├── languages
├── layout
├── scripts
└── source
```

### \_config.yml

Файл конфигурации темы. Unlike the site's primary configuration file, Изменения не требуют перезагрузки сервера.

### languages

Папка с языковыми файлами. См. подробней [Интернационализация (i18n)](internationalization.html).

### layout

Папка шаблонов. Эта папка содержит файлы шаблонов темы, которые определяют внешний вид сайта. Hexo использует шаблонизатор [Nunjucks][] по умолчанию, но вы легко сможете установить дополнительные плагины, чтобы поддерживать альтернативные системы, такие как [EJS][] или [Pug][]. Hexo выбирает шаблонизатор на основе расширения файла. Например:

```plain
layout.ejs   - uses EJS
layout.njk   - uses Nunjucks
```

Дополнительные сведения см. в разделе [шаблоны](templates.html).

### scripts

Папка скриптов. Hexo автоматически загрузит все JavaScript-файлы в этой папке во время инициализации. Дополнительные сведения см. в разделе [плагины](plugins.html).

### source

Папка исходников. Разместите свои материалы здесь (например, CSS- и javascript-файлы). Hexo игнорирует скрытые файлы и файлы или папки с префиксом `_` (подчёркивание).

Hexo будет сохранять все обработанные файлы в общую папку `public`. Не обрабатываемые файлы будут копироваться в общую папку `public` напрямую.

### Публикация

Когда вы закончили свою тему, можно опубликовать её в [списке тем](/themes). Прежде чем сделать это, нужно запустить [тест модулей темы](https://github.com/hexojs/hexo-theme-unit-test), чтобы убедиться, что все работает, как нужно. Публикация темы очень похожа на обновление документации.

1. Создайте форк [hexojs/site][]
2. Клонируйте репозиторий на компьютер и установите все зависимости.

   ```shell
   $ git clone https://github.com/<username>/site.git
   $ cd site
   $ npm install
   ```

3. Create a new yaml file in `source/_data/themes/`, use your theme name as the file name

4. Отредактируйте `source/_data/themes.yml` и добавьте свою тему. Например:

   ```yaml
   description: A brand new default theme for Hexo.
   link: https://github.com/hexojs/hexo-theme-landscape
   preview: http://hexo.io/hexo-theme-landscape
   tags:
     - official
     - responsive
     - widget
     - two_column
     - one_column
   ```

5. Добавьте скриншот темы (с таким же, как и тема, названием) в папку `source/themes/screenshots`. Он должен быть размером 800\*500px в формате PNG.
6. Push the branch.
7. Создайте запрос на слияние с описанием изменений.

[EJS]: https://github.com/hexojs/hexo-renderer-ejs
[Pug]: https://github.com/hexojs/hexo-renderer-pug
[hexojs/site]: https://github.com/hexojs/site
[Nunjucks]: https://mozilla.github.io/nunjucks/
