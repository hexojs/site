title: Плагины
---
Hexo имеет мощную систему плагинов, это делает его функции легко расширяемыми, не изменяя код основного модуля. Существует два вида плагинов в Hexo:

### Скрипты

Если плагин является довольно простым, рекомендуется использовать скрипт. Все, что нужно сделать, это положить ваши JavaScript файлы в папку `scripts` и Hexo загрузит их при инициализации.

### Плагины

Если код довольно сложен, или если вы хотите опубликовать его через НПМ, рекомендуется использовать плагин. Во-первых, создайте папку в папке `node_modules`. Название должно начинаться с `hexo-` или Hexo проигнорирует её.

Папка должна содержать минимум два файла: один содержит фактический код JavaScript и `package.json`, который описывает назначение плагина и устанавливает его зависимости.

``` plain
.
├── index.js
└── package.json
```

По крайней мере, нужно должны указать название `name`, версию `version` и основу `main` в  `package.json`. Например:

``` json package.json
{
  "name": "hexo-my-plugin",
  "version": "0.0.1",
  "main": "index"
}
```

Также понадобится перечислить зависимости плагина в корне `package.json` для вашего экземпляра `hexo`, чтобы Hexo обнаружил и загрузил его.

### Инструментарий

Возможно использовать официальные инструменты Hexo, для ускорения разработки:

- [hexo-fs]：Чтение/запись файлов
- [hexo-util]：Утилиты Hexo
- [hexo-i18n]：Локализация (i18n)
- [hexo-pagination]：Постраничная разбивка

### Публикация

Когда плагин будет готов, можно рассмотреть возможность его публикации в список [плагинов](/plugins), чтобы пригласить других людей воспользоваться им. Публикация плагинов очень похожа на [обновление документации](contributing.html#Обновление-документации).

1. Создайте форк [hexojs/site]
1. Клонируйте репозиторий на компьютер и установите все зависимости.

    {% code %}
    $ git clone https://github.com/<username>/site.git
    $ cd site
    $ npm install
    {% endcode %}

1. Отредактируйте `source/_data/plugins.yml` добавив свой плагин. Например:

    {% code %}
    - name: hexo-server
      description: Server module for Hexo.
      link: https://github.com/hexojs/hexo-server
      tags:
        - official
        - server
        - console
    {% endcode %}

1. Загрузите ветку.
1. Создайте запрос на слияние с описанием изменений.

[hexo-fs]: https://github.com/hexojs/hexo-fs
[hexo-util]: https://github.com/hexojs/hexo-util
[hexo-i18n]: https://github.com/hexojs/hexo-i18n
[hexo-pagination]: https://github.com/hexojs/hexo-pagination
[hexojs/site]: https://github.com/hexojs/site
