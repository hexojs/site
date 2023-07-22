---
title: Конфигурация
---
Можно изменить настройки в файле `_config.yml`.

### Сайт

Настройки | Описание
--- | ---
`title` | Название сайта
`subtitle` | Подзаголовок сайта
`description` | Описание сайта
`keywords` | Ключевые слова вашего сайта. Поддерживает несколько значений.
`author` | Ваше имя
`language` | Язык сайта. Используйте [2-значный код ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). По умолчанию: `en`.
`timezone` | Временной пояс. Hexo использует настройки компьютера по умолчанию. Список доступных часовых поясов можно найти [здесь](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). Несколько примеров: `America/New_York`, `Japan` и `UTC`.

### URL

Параметр | Описание | Умолчание
--- | --- | ---
`url` | URL-адрес сайта, должен начинаться с `http://` или `https://` |
`root` | Корневая папка сайта | `url's pathname`
`permalink` | [Постоянная ссылка](permalinks.html) используются ссылки на статьи | `:year/:month/:day/:title/`
`permalink_defaults` | Значение по умолчанию для каждого сегмента постоянной ссылки |
`pretty_urls` | Переопределите [`permalink`](variables.html) переменную для создания "красивых" URLs ссылок. |
`pretty_urls.trailing_index` | Включает показывание `index.html`, установите значение `false` для удаления.  | `true`
`pretty_urls.trailing_html` | Включает показывание `.html`, установите значение `false` для удаления (_не применяется к показу `index.html`_)  | `true`

{% note info Сайт в подпапке %}
Если ваш сайт располагается в поддиректории (к примеру `http://example.org/blog`) поменяйте значение `url` на `http://example.org/blog` и установите переменной `root` значение `/blog/`.
{% endnote %}

### Папки

Параметр | Описание | Умолчание
--- | --- | ---
`source_dir` | Папка с исходниками. Здесь хранится контент | `source`
`public_dir` | Папка публикации. Здесь хранится сгенерированный сайт | `public`
`tag_dir` | Папка с тегами | `tags`
`archive_dir` | Папка с архивами | `archives`
`category_dir` | Папка с категориями | `categories`
`code_dir` | Папка с кодом | `downloads/code`
`i18n_dir` | Папка  i18n | `:lang`
`skip_render` | Пути, которые исключены из обработки. Можно использовать [глобальные выражения](https://github.com/micromatch/micromatch#extended-globbing) для определения путей |

### Написание

Параметр | Описание | Умолчание
--- | --- | ---
`new_post_name` | Имя файла для создания новых постов | `:title.md`
`default_layout` | Макет по умолчанию | `post`
`titlecase` | Преобразовать заголовки в заглавные буквы? | `false`
`external_link` | Открывать внешние ссылки в новой вкладке? | `true`
`external_link.enable` | Открывать внешние ссылки в новой вкладке? | `true`
`external_link.field` | Применяется только ко всему `site` или `post` | `site`
`external_link.exclude` | Исключить имя хоста. Укажите поддомен, когда это применимо, включая `www` | `[]`
`filename_case` | Преобразовать имена файлов в `1` нижний регистр; `2` верхний регистр | `0`
`render_drafts` | Отображать черновики? | `false`
`post_asset_folder` | Включать [папку с материалами](asset-folders.html)? | `false`
`relative_link` | Создание ссылок относительно корневой папки? | `false`
`future` | Отображать будущие посты? | `true`
`highlight` | Настройки блоков кода, см. [Highlight.js](/docs/syntax-highlight#Highlight-js) раздел для руководства по использованию |
`prismjs` | Настройки блоков кода, см. [PrismJS](/docs/syntax-highlight#PrismJS) раздел для руководства по использованию |

### Категории и теги

Параметр | Описание | Умолчание
--- | --- | ---
`default_category` | Категория по умолчанию | `uncategorized`
`category_map` | Карта категорий |
`tag_map` | Карта тегов |

### Даты / Времени формат

Hexo использует [Moment.js](http://momentjs.com/) для работы с датами.

Параметр | Описание | Умолчание
--- | --- | ---
`date_format` | Формат даты | `YYYY-MM-DD`
`time_format` | Формат времени | `HH:mm:ss`
`updated_option` | Значение [`обновлено`](/ru/docs/variables#Переменные-страницы) используется, если оно не указано в front-matter | `mtime`

{% note info updated_option %}
`updated_option` управляет значением `updated` если оно не указано в front-matter:

- `mtime`: Использует дату изменения файла для показа `обновлено`. Это введено в Hexo по умолчанию с версии 3.0.0
- `date`: Использует дату изменения для показа `обновлено`. Обычно используется с рабочим процессом Git, когда дата изменения файла может отличаться.
- `empty`: Просто не использует `updated`, если оно не указано. Может быть несовместимо с большинством тем и плагинов.

`use_date_for_updated` устарел и будет удален в следующей основной версии. Пожалуйста, используйте вместо этого `updated_option: 'date'`.
{% endnote %}

### Разбивка на страницы

Параметр | Описание | Умолчание
--- | --- | ---
`per_page` | Количество постов, отображаемых на странице. `0` отключает разбивку. | `10`
`pagination_dir` | Каталог разбивки | `page`

### Расширения

Параметр | Описание
--- | ---
`theme` | Имя темы. `false` отключает применение тем
`deploy` | Параметры публикации
`meta_generator` | [Meta generator](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#Attributes) тегов. `false` отключает ввод тегов.

### Включить/Исключить файлы или каталоги

В файле конфигурации, установите ключ include/exclude, чтобы hexo обрабатывал или игнорировал, указанные файлы/каталоги.

`include` и `exclude` опции применяются только к папке `source/`, тогда как опция `ignore` применяется ко всем папкам.

Параметр | Описание
--- | ---
`include` | По умолчанию Hexo игнорирует скрытые архивы и директории, укажите это значение, чтобы Hexo их обрабатывал
`exclude` | В Hexo будет игнорировать файлы и каталоги, перечисленные в этой переменной
`ignore` | Игнорирует файлы/папки

Примеры:

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

``` bash
# usando 'custom.yml' no lugar de '_config.yml'
$ hexo server --config custom.yml

# usando 'custom.yml' e 'custom2.json', priorizando 'custom2.json'
$ hexo server --config custom.yml,custom2.json
```

Использование нескольких файлов включает в себя все файлы, настройки и указанные параметры объединены в `_multiconfig.yml`. Значения последующих преобладают. Эта функция работает с любым количеством файлов JSON и YAML с объектами, сколь угодно глубоких. Обратите внимание, что **нет места разрешается в списке**.

Например, в приведенном выше примере, если `foo: bar` находящийся в файле `custom.yml`, но `"foo": "dinosaur"` в ` "custom2".json`, `_multiconfig.yml` будет сохранено значение `"foo": "dinosaur"`.

### Альтернативная конфигурация темы

Темы Hexo - это независимые проекты с отдельными файлами `_config.yml`.

Вместо того чтобы делать ответвление(форк) темы и поддерживать пользовательскую ветвь с вашими настройками, вы можете настроить ее где-нибудь в другом месте.

** `theme_config` в основном файле конфигурации сайта**

> Поддерживается начиная с Hexo 2.8.2

```yml
# _config.yml
theme: "my-theme"
theme_config:
  bio: "My awesome bio"
  foo:
    bar: 'a'
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
  bio: "My awesome bio",
  logo: "a-cool-image.png",
  foo: {
    bar: "a",
    baz: "b"
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
  bar: 'a'
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
  bio: "My awesome bio",
  logo: "a-cool-image.png",
  foo: {
    bar: "a",
    baz: "b"
  }
}
```

{% note %}
Мы настоятельно рекомендуем вам хранить конфигурацию вашей темы в одном месте. Но, в случае, если вам нужно хранить конфигурацию темы отдельно, эта информация очень важна: `theme_config` внутри основного файла конфигурации сайта имеет наивысший приоритет при объединении, затем выделенный файл конфигурации темы. Файл `_config.yml` в каталоге темы имеет самый низкий приоритет.
{% endnote %}
