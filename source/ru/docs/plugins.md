---
title: Плагины
---

Hexo имеет мощную систему плагинов, это делает его функции легко расширяемыми, не изменяя код основного модуля. Существует два вида плагинов в Hexo:

### Скрипты

Если плагин является довольно простым, рекомендуется использовать скрипт. Все, что нужно сделать, это положить ваши JavaScript файлы в папку `scripts`, и Hexo загрузит их при инициализации.

### Плагины

Если код довольно сложен, или если вы хотите опубликовать его через NPM, рекомендуется использовать плагин. Сначала создайте папку в папке `node_modules`. Название должно начинаться с `hexo-`, иначе Hexo проигнорирует её.

Папка должна содержать минимум два файла: один содержит фактический код JavaScript и `package.json`, который описывает назначение плагина и устанавливает его зависимости.

```plain
.
├── index.js
└── package.json
```

По крайней мере, нужно указать название `name`, версию `version` и параметр `main` в `package.json`. Например:

```json package.json
{
  "name": "hexo-my-plugin",
  "version": "0.0.1",
  "main": "index"
}
```

Также понадобится перечислить зависимости плагина в корне `package.json` для вашего экземпляра `hexo`, чтобы Hexo обнаружил и загрузил его.

### Инструментарий

Возможно использовать официальные инструменты Hexo для ускорения разработки:

- [hexo-fs][]：Чтение/запись файлов
- [hexo-util][]：Утилиты Hexo
- [hexo-i18n][]：Локализация (i18n)
- [hexo-pagination][]：Постраничная разбивка

### Публикация

Когда плагин будет готов, можно рассмотреть возможность его публикации в список [плагинов](/plugins), чтобы пригласить других людей воспользоваться им. Публикация плагинов очень похожа на [обновление документации](contributing.html#Обновление-документации). Publishing your own plugins is very similar to [updating documentation](contributing.html#Updating_Documentation).

1. Создайте форк [hexojs/site][]
2. Клонируйте репозиторий на компьютер и установите все зависимости.

   ```shell
   $ git clone https://github.com/<username>/site.git
   $ cd site
   $ npm install
   ```

3. Create a new yaml file in `source/_data/plugins/`, use your plugin name as the file name

4. Отредактируйте `source/_data/plugins.yml` добавив свой плагин. Например:

   ```yaml
   description: Server module for Hexo.
   link: https://github.com/hexojs/hexo-server
   tags:
     - official
     - server
     - console
   ```

5. Push the branch.
6. Создайте запрос на слияние с описанием изменений.

[hexo-fs]: https://github.com/hexojs/hexo-fs
[hexo-util]: https://github.com/hexojs/hexo-util
[hexo-i18n]: https://github.com/hexojs/hexo-i18n
[hexo-pagination]: https://github.com/hexojs/hexo-pagination
[hexojs/site]: https://github.com/hexojs/site
