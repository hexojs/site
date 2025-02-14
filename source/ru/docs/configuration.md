---
title: Конфигурация
---

Можно изменить настройки в файле `_config.yml`.

### Сайт

| Настройки     | Описание                                                                                                                                                                                                                                       |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`       | Название сайта                                                                                                                                                                                                                                 |
| `subtitle`    | Подзаголовок сайта                                                                                                                                                                                                                             |
| `description` | Описание сайта                                                                                                                                                                                                                                 |
| `keywords`    | Ключевые слова вашего сайта. Поддерживает несколько значений.                                                                                                                                                                                  |
| `author`      | Ваше имя                                                                                                                                                                                                                                       |
| `language`    | Язык сайта. Используйте [2-значный код ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). По умолчанию: `en`.                                                                                                                  |
| `timezone`    | Временной пояс. Hexo использует настройки компьютера по умолчанию. Список доступных часовых поясов можно найти [здесь](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). Несколько примеров: `America/New_York`, `Japan` и `UTC`. |

### URL

| Параметр                     | Описание                                                                                                        | Карта тегов                 |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------- |
| `url`                        | URL-адрес сайта, должен начинаться с `http://` или `https://`                                                   |                             |
| `root`                       | Корневая папка сайта                                                                                            | `url's pathname`            |
| `permalink`                  | [Постоянная ссылка](permalinks.html) используются ссылки на статьи                                              | `:year/:month/:day/:title/` |
| `permalink_defaults`         | Значение по умолчанию для каждого сегмента постоянной ссылки                                                    |                             |
| `pretty_urls`                | Переопределите [`permalink`](variables.html) переменную для создания "красивых" URLs ссылок.                    |                             |
| `pretty_urls.trailing_index` | Включает показывание `index.html`, установите значение `false` для удаления.                                    | `true`                      |
| `pretty_urls.trailing_html`  | Включает показывание `.html`, установите значение `false` для удаления (_не применяется к показу `index.html`_) | `true`                      |

{% note info Сайт в подпапке %}
Если ваш сайт располагается в поддиректории (к примеру `http://example.org/blog`) поменяйте значение `url` на `http://example.org/blog` и установите переменной `root` значение `/blog/`.
{% endnote %}

Примеры:

```yaml
# e.g. page.permalink is http://example.com/foo/bar/index.html
pretty_urls:
  trailing_index: false
# becomes http://example.com/foo/bar/
```

### Каталог разбивки

| Параметр       | Описание                                                                                                                                                          | Параметры публикации |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| `source_dir`   | Папка с исходниками. Здесь хранится контент                                                                                                                       | `source`             |
| `public_dir`   | Папка публикации. Здесь хранится сгенерированный сайт                                                                                                             | `public`             |
| `tag_dir`      | Папка с тегами                                                                                                                                                    | `tags`               |
| `archive_dir`  | Папка с архивами                                                                                                                                                  | `archives`           |
| `category_dir` | Папка с категориями                                                                                                                                               | `categories`         |
| `code_dir`     | Include code directory (subdirectory of `source_dir`)                                                                                                             | `downloads/code`     |
| `i18n_dir`     | Папка i18n                                                                                                                                                        | `:lang`              |
| `skip_render`  | Пути, которые исключены из обработки. Можно использовать [глобальные выражения](https://github.com/micromatch/micromatch#extended-globbing) для определения путей |                      |

Папка с кодом

```yaml
skip_render: "mypage/**/*"
# will output `source/mypage/index.html` and `source/mypage/code.js` without altering them.

## This also can be used to exclude posts,
skip_render: "_posts/test-post.md"
# will ignore the `source/_posts/test-post.md`.
```

### Написание

| Параметр                | Описание                                                                                                               | По умолчанию Hexo игнорирует скрытые архивы и директории, укажите это значение, чтобы Hexo их обрабатывал |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `new_post_name`         | Имя файла для создания новых постов                                                                                    | `:title.md`                                                                                               |
| `default_layout`        | Макет по умолчанию                                                                                                     | `post`                                                                                                    |
| `titlecase`             | Преобразовать заголовки в заглавные буквы?                                                                             | `false`                                                                                                   |
| `external_link`         | Открывать внешние ссылки в новой вкладке?                                                                              |                                                                                                           |
| `external_link.enable`  | Открывать внешние ссылки в новой вкладке?                                                                              | `true`                                                                                                    |
| `external_link.field`   | Применяется только ко всему `site` или `post`                                                                          | `site`                                                                                                    |
| `external_link.exclude` | Исключить имя хоста. Укажите поддомен, когда это применимо, включая `www`                                              | `[]`                                                                                                      |
| `filename_case`         | Преобразовать имена файлов в `1` нижний регистр; `2` верхний регистр                                                   | `0`                                                                                                       |
| `render_drafts`         | Display drafts?                                                                                                        | `false`                                                                                                   |
| `post_asset_folder`     | Включать [папку с материалами](asset-folders.html)?                                                                    | `false`                                                                                                   |
| `relative_link`         | Создание ссылок относительно корневой папки?                                                                           | `false`                                                                                                   |
| `future`                | Отображать будущие посты?                                                                                              | `true`                                                                                                    |
| `syntax_highlighter`    | Code block syntax highlight settings, see [Syntax Highlight](/docs/syntax-highlight) section for usage guide           | `highlight.js`                                                                                            |
| `highlight`             | Настройки блоков кода, см. [Highlight.js](/docs/syntax-highlight#Highlight-js) раздел для руководства по использованию |                                                                                                           |
| `prismjs`               | Настройки блоков кода, см. [PrismJS](/docs/syntax-highlight#PrismJS) раздел для руководства по использованию           |                                                                                                           |

### Home page setting

| Параметр                         | Описание                                                                                                        | Умолчание |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------- |
| `index_generator`                | Generate an archive of posts, powered by [hexo-generator-index](https://github.com/hexojs/hexo-generator-index) |           |
| `index_generator.path`           | Root path for your blog's index page                                                                            | `''`      |
| `index_generator.per_page`       | Posts displayed per page.                                                                                       | `10`      |
| `index_generator.order_by`       | Posts order. Order by descending date (new to old) by default.                                                  | `-date`   |
| `index_generator.pagination_dir` | URL format, see [Pagination](#Pagination) setting below                                                         | `page`    |

### Категории и теги

| Параметр           | Описание                | Умолчание       |
| ------------------ | ----------------------- | --------------- |
| `default_category` | Карта категорий         | `uncategorized` |
| `category_map`     | Override category slugs |                 |
| `tag_map`          | Override tag slugs      |                 |

Умолчание

```yaml
category_map:
  "yesterday's thoughts": yesterdays-thoughts
  "C++": c-plus-plus
```

### Даты / Времени формат

Hexo использует [Moment.js](http://momentjs.com/) для работы с датами.

| Параметр         | Описание                                                                                                        | Умолчание    |
| ---------------- | --------------------------------------------------------------------------------------------------------------- | ------------ |
| `date_format`    | Формат даты                                                                                                     | `YYYY-MM-DD` |
| `time_format`    | Формат времени                                                                                                  | `HH:mm:ss`   |
| `updated_option` | Значение [`обновлено`](/ru/docs/variables#Переменные-страницы) используется, если оно не указано в front-matter | `mtime`      |

{% note info updated_option %}
`updated_option` управляет значением `updated` если оно не указано в front-matter:

- `mtime`: Использует дату изменения файла для показа `обновлено`. Это введено в Hexo по умолчанию с версии 3.0.0
- `date`: Использует дату изменения для показа `обновлено`. Обычно используется с рабочим процессом Git, когда дата изменения файла может отличаться.
- `empty`: Просто не использует `updated`, если оно не указано. Может быть несовместимо с большинством тем и плагинов.

`use_date_for_updated` устарел и будет удален в следующей основной версии. Пожалуйста, используйте вместо этого `updated_option: 'date'`.
{% endnote %}

### Разбивка на страницы

| Параметр         | Описание                                                             | Категория по умолчанию |
| ---------------- | -------------------------------------------------------------------- | ---------------------- |
| `per_page`       | Количество постов, отображаемых на странице. `0` отключает разбивку. | `10`                   |
| `pagination_dir` | URL format                                                           | `page`                 |

Умолчание

```yaml
pagination_dir: 'page'
# http://example.com/page/2

pagination_dir: 'awesome-page'
# http://example.com/awesome-page/2
```

### Расширения

| Параметр         | Описание                                                                                                                         |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `theme`          | Имя темы. `false` отключает применение тем                                                                                       |
| `theme_config`   | Theme configuration. Include any custom theme settings under this key to override theme defaults.                                |
| `deploy`         | Deployment settings                                                                                                              |
| `meta_generator` | [Meta generator](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#Attributes) тегов. `false` отключает ввод тегов. |

### Включить/Исключить файлы или каталоги

Use the following options to explicitly process or ignore certain files/folders. Support [glob expressions](https://github.com/micromatch/micromatch#extended-globbing) for path matching.

`include` и `exclude` опции применяются только к папке `source/`, тогда как опция `ignore` применяется ко всем папкам.

| Setting   | Description                                                                                                      |
| --------- | ---------------------------------------------------------------------------------------------------------------- |
| `include` | Include hidden files (including files/folders with a name that starts with an underscore, with an exception\*) |
| `exclude` | Папки                                                                                                            |
| `ignore`  | Игнорирует файлы/папки                                                                                           |

Умолчание

```yaml
# Incluir/Excluir Arquivos/Diretórios
include:
  - ".nojekyll"
  # Include 'source/css/_typing.css'.
  - "css/_typing.css"
  # Include any file in 'source/_css/'.
  - "_css/*"
  # Include any file and subfolder in 'source/_css/'.
  - "_css/**/*"

exclude:
  # Exclude 'source/js/test.js'.
  - "js/test.js"
  # Exclude any file in 'source/js/'.
  - "js/*"
  # Exclude any file and subfolder in 'source/js/'.
  - "js/**/*"
  # Exclude any file with filename that starts with 'test' in 'source/js/'.
  - "js/test*"
  # Exclude any file with filename that starts with 'test' in 'source/js/' and its subfolders.
  - "js/**/test*"
  # Do not use this to exclude posts in the 'source/_posts/'.
  # Use skip_render for that. Or prepend an underscore to the filename.
  # - "_posts/hello-world.md" # Does not work.

ignore:
  # Ignore any folder named 'foo'.
  - "**/foo"
  # Ignore 'foo' folder in 'themes/' only.
  - "**/themes/*/foo"
  # Same as above, but applies to every subfolders of 'themes/'.
  - "**/themes/**/foo"
```

Каждое значение в списке должно быть заключено в одинарные/двойные кавычки.

`include:` и `exclude:` не применяются к папке `themes/`. Либо используйте `ignore:`, либо, как вариант, добавьте подчеркивание к имени файла/папки, чтобы исключить.

\* Заметным исключением является папка `source/_posts`, но любой файл или папка с именем, начинающимся с подчеркивания в этой папке, все равно будут игнорироваться. Использование правила `include:` в этой папке не рекомендуется.

### Указание альтернативного файла конфигурации

Пользовательский файл конфигурации может быть указан при добавлении флага `--config` в команду `hexo` с указанием пути к альтрнативному файу конфигурации YAML или JSON, или даже списку с разделителями-запятыми (без пробелов) нескольких файлов YAML или JSON.

```bash
# use 'custom.yml' in place of '_config.yml'
$ hexo server --config custom.yml

# use 'custom.yml' & 'custom2.json', prioritizing 'custom2.json'
$ hexo server --config custom.yml,custom2.json
```

Использование нескольких файлов включает в себя все файлы, настройки и указанные параметры объединены в `_multiconfig.yml`. Значения последующих преобладают. Эта функция работает с любым количеством файлов JSON и YAML с объектами, сколь угодно глубоких. Обратите внимание, что **нет места разрешается в списке**.

Например, в приведенном выше примере, если `foo: bar` находящийся в файле `custom.yml`, но `"foo": "dinosaur"` в `"custom2".json`, `_multiconfig.yml` будет сохранено значение `"foo": "dinosaur"`.

### Альтернативная конфигурация темы

Темы Hexo - это независимые проекты с отдельными файлами `_config.yml`.

Вместо того чтобы делать ответвление(форк) темы и поддерживать пользовательскую ветвь с вашими настройками, вы можете настроить ее где-нибудь в другом месте.

**** `theme_config` в основном файле конфигурации сайта****

> Поддерживается начиная с Hexo 2.8.2

```yml
# _config.yml
theme: "my-theme"
theme_config:
  bio: "My awesome bio"
  foo:
    bar: "a"
```

```yml
# themes/my-theme/_config.yml
bio: "Some generic bio"
logo: "a-cool-image.png"
  foo:
    baz: 'b'
```

В результате чего создастся конфигурация темы:

```json
{
  "bio": "My awesome bio",
  "logo": "a-cool-image.png",
  "foo": {
    "bar": "a",
    "baz": "b"
  }
}
```

**альтернативный `_config.[theme].yml` файл**

> Поддерживается начиная с Hexo 5.0.0

Файл должен быть помещен в папку вашего сайта, поддерживаются как `yml`, так и `json`. `theme` внутри `_config.yml` должна быть настроена так, чтобы Hexo считывал `_config.[theme].yml`

```yml
# _config.yml
theme: "my-theme"
```

```yml
# _config.my-theme.yml
bio: "My awesome bio"
foo:
  bar: "a"
```

```yml
# themes/my-theme/_config.yml
bio: "Some generic bio"
logo: "a-cool-image.png"
  foo:
    baz: 'b'
```

В результате чего создается конфигурация темы:

```json
{
  "bio": "My awesome bio",
  "logo": "a-cool-image.png",
  "foo": {
    "bar": "a",
    "baz": "b"
  }
}
```

{% note %}
Мы настоятельно рекомендуем вам хранить конфигурацию вашей темы в одном месте. Но, в случае, если вам нужно хранить конфигурацию темы отдельно, эта информация очень важна: `theme_config` внутри основного файла конфигурации сайта имеет наивысший приоритет при объединении, затем выделенный файл конфигурации темы. Файл `_config.yml` в каталоге темы имеет самый низкий приоритет.
{% endnote %}
