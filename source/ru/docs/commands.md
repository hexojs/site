---
title: Команды
---

## init

```bash
$ hexo init [folder]
```

Инициализирует сайт. Если переменная `folder` не указана, Hexo создаёт сайт в текущей папке.

Эта команда представляет собой ярлык, который выполняет следующие действия:

1. Создаёт слон Git репозитория [hexo-starter](https://github.com/hexojs/hexo-starter) включая [hexo-theme-landscape](https://github.com/hexojs/hexo-theme-landscape) в текущий каталог или,если указана, в целевую папку.
2. Установите зависимости с помощью менеджера пакетов: [Yarn 1](https://classic.yarnpkg.com/lang/en/), [pnpm](https://pnpm.io/ru/) или [npm](https://docs.npmjs.com/cli/install), в зависимости от того, что установлено; если установлено более одного, приоритет указан в списке. npm поставляется в комплекте с [Node.js](/docs/#Install-Node-js) by default.

## new

```bash
$ hexo new [layout] <title>
```

Будет создана новая статья. Если макет не был указан, Hexo будет использовать значение `default_layout`, указанное в [\_config.yml](configuration.html). Use the layout `draft` to create a draft. Если название содержит пробелы, заключите его в кавычки.

| Параметр          | Описание                                   |
| ----------------- | ------------------------------------------ |
| `-p`, `--path`    | Post path. Customize the path of the post. |
| `-r`, `--replace` | Replace the current post if existed.       |
| `-s`, `--slug`    | Post slug. Customize the URL of the post.  |

By default, Hexo will use the title to define the path of the file. For pages, it will create a directory of that name and an `index.md` file in it. Use the `--path` option to override that behaviour and define the file path:

```bash
hexo new page --path about/me "About me"
```

will create `source/about/me.md` file with the title "About me" set in the front matter.

Please note that the title is mandatory. For example, this will not result in the behaviour you might expect:

```bash
hexo new page --path about/me
```

will create the post `source/_posts/about/me.md` with the title "page" in the front matter. This is because there is only one argument (`page`) and the default layout is `post`.

## generate

```bash
$ hexo generate
```

Генерирует файлы.

| Параметр              | Описание                                                                 |
| --------------------- | ------------------------------------------------------------------------ |
| `-d`, `--deploy`      | Deploy after generation finishes                                         |
| `-w`, `--watch`       | Отслеживать изменения файлов                                             |
| `-b`, `--bail`        | Raise an error if any unhandled exception is thrown during generation    |
| `-f`, `--force`       | Force regenerate                                                         |
| `-c`, `--concurrency` | Maximum number of files to be generated in parallel. Default is infinity |

## publish

```bash
$ hexo publish [layout] <filename>
```

Publishes a draft.

## server

```bash
$ hexo server
```

Запускает локальный сервер. По умолчанию адрес: `http://localhost:4000/`.

| Параметр         | Описание                                                |
| ---------------- | ------------------------------------------------------- |
| `-p`, `--port`   | Переназначает стандартный порт                          |
| `-s`, `--static` | Обрабатывать только статичные файлы                     |
| `-l`, `--log`    | Включить журналирование. Переопределяет формат журнала. |

## deploy

```bash
$ hexo deploy
```

Публикует сайт.

| Параметр           | Описание                       |
| ------------------ | ------------------------------ |
| `-g`, `--generate` | Генерировать перед публикацией |

## render

```bash
$ hexo render <file1> [file2] ...
```

Renders files.

| Опции            | Description |
| ---------------- | ----------- |
| `-o`, `--output` | Путь вывода |

## migrate

```bash
$ hexo migrate <type>
```

[Миграция](migration.html) контента из других систем.

## clean

```bash
$ hexo clean
```

Очищает кэш (`db.json`) и генерирует файлы для опубликования (`public`).

## list

```bash
$ hexo list <type>
```

Список всех путей.

## version

```bash
$ hexo version
```

Отображает информацию о версии Hexo.

## config

```bash
$ hexo config [key] [value]
```

Lists the configuration (`_config.yml`). If `key` is specified, only the value of the corresponding `key` in the configuration is shown; if both `key` and `value` are specified, the value of the corresponding `key` in the configuration is changed to `value`.

## Альтернативная конфигурация

### Безопасный режим

```bash
$ hexo --safe
```

Отключает загрузку плагинов и скриптов. Применяется при возникновении проблем после установки нового плагина.

### Режим отладки

```bash
$ hexo --debug
```

Журнал подробных сообщений в терминале и `debug.log`. Применяется при возникновении проблем с Hexo. Если выдаются ошибки, пожалуйста, задайте вопрос на [GitHub](https://github.com/hexojs/hexo/issues/new?assignees=&labels=&projects=&template=bug_report.yml).

### Тихий режим

```bash
$ hexo --silent
```

Silences output to the terminal.

### Customize config file path

```bash
$ hexo --config custom.yml
```

Использует другой конфигурационный файл (вместо `_config.yml`). Also accepts a comma-separated list (no spaces) of JSON or YAML config files that will combine the files into a single `_multiconfig.yml`.

```bash
$ hexo --config custom.yml,custom2.json
```

### Показать черновики

```bash
$ hexo --draft
```

Отображает черновики (хранящиеся в папке `source/_drafts`).

### Customize CWD

```bash
$ hexo --cwd /path/to/cwd
```

Изменяет путь к текущей рабочей папке.
