---
title: Переменные
---

{% youtube T9oAax-IRw0 %}

### Глобальные переменные

| Variable | Описание                                                        | Type                                    |
| -------- | --------------------------------------------------------------- | --------------------------------------- |
| `site`   | Информация о сайте.                                             | `object`; see [Site Variables][]        |
| `page`   | Информация о конкретной странице и переменные в шапке страницы. | `object`; see [Page Variables][]        |
| `config` | Конфигурация сайта.                                             | `object` (your site's \_config file)  |
| `theme`  | Конфигурация темы. Наследуется от конфигурации сайта.           | `object` (your theme's \_config file) |
| `path`   | Путь текущей страницы.                                          | `string`                                |
| `url`    | Полная URL ссылка на текущую страницу.                          | `string`                                |
| `env`    | Переменные среды.                                               | ???                                     |

{% note warn %}
Lodash has been removed from global variables since Hexo 5.0.0. [You-Dont-Need-Lodash-Underscore](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore) might be helpful for your migration.
{% endnote %}

### Переменные сайта

| Variable          | Описание      | Type                   |
| ----------------- | ------------- | ---------------------- |
| `site.posts`      | Все посты     | [Query][queryo] object |
| `site.pages`      | Все страницы  | [Query][queryo] object |
| `site.categories` | Все категории | [Query][queryo] object |
| `site.tags`       | Все теги      | [Query][queryo] object |

### Переменные страницы

**Article (`page`)**

| Variable           | Описание                                                                                         | Type                                              |
| ------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| `page.title`       | Article title                                                                                    | `string`                                          |
| `page.date`        | Article created date                                                                             | Дата последнего обновления (Объект [Moment.js][]) |
| `page.updated`     | Article last updated date                                                                        | Дата создания страницы (Объект [Moment.js][])     |
| `page.comments`    | Включены ли комментарии                                                                          | `boolean`                                         |
| `page.layout`      | Имя макета                                                                                       | `string`                                          |
| `page.content`     | Полностью обработанное содержание страницы                                                       | `string`                                          |
| `page.excerpt`     | Article excerpt                                                                                  | `string`                                          |
| `page.more`        | Содержимое страницы без отрывка                                                                  | `string`                                          |
| `page.source`      | Путь к исходному файлу                                                                           | `string`                                          |
| `page.full_source` | Полный путь к исходному файлу                                                                    | `string`                                          |
| `page.path`        | URL текущей страницы без корневой части адреса. Обычно используется `url_for(page.path)` в теме. | `string`                                          |
| `page.permalink`   | Полный URL-адрес страницы                                                                        | `string`                                          |
| `page.prev`        | Предыдущий пост. `null`, если пост первый.                                                       | ???                                               |
| `page.next`        | Следующий пост. `null`, если пост последний.                                                     | ???                                               |
| `page.raw`         | The raw data of the article                                                                      | ???                                               |
| `page.photos`      | Фотографии из страницы (Используется в галерее постов)                                           | array of ???                                      |
| `page.link`        | Внешняя ссылка на статью (Используется в ссылках поста)                                          | `string`                                          |

**Пост (post)**: такие же переменные, как и у страницы, но добавлены следующие переменные.

| Переменные        | Описание                        | Type           |
| ----------------- | ------------------------------- | -------------- |
| `page.published`  | True if the post is not a draft | `boolean`      |
| `page.categories` | Все категории поста             | `array` of ??? |
| `page.tags`       | Все теги поста                  | `array` of ??? |

**Главная страница (index)**

| Variable           | Описание                                                                                         | Type     |
| ------------------ | ------------------------------------------------------------------------------------------------ | -------- |
| `page.per_page`    | Количество постов, отображаемых на странице                                                      | `number` |
| `page.total`       | Общее число постов                                                                               | `number` |
| `page.current`     | Номер текущей страницы                                                                           | `number` |
| `page.current_url` | URL текущей страницы                                                                             | `string` |
| `page.posts`       | Посты на этой странице ([Data Model])                                                            | `object` |
| `page.prev`        | Номер предыдущей страницы. `0`, если текущая страница является первой.                           | `number` |
| `page.prev_link`   | Ссылка на предыдущую страницу. Равна `''`, если текущая страница является первой.                | `string` |
| `page.next`        | Номер следующей страницы. Равно `0`, если текущая страница является последней.                   | `number` |
| `page.next_link`   | Ссылка на следующую страницу. Равно `''`, если текущая страница является последней.              | `string` |
| `page.path`        | URL текущей страницы без корневой части адреса. Обычно используется `url_for(page.path)` в теме. | `string` |

**Категория (category):** Такая же, как макет `index`, но добавлены следующие переменные.

| Variable       | Описание                                     | Type      |
| -------------- | -------------------------------------------- | --------- |
| `page.archive` | Приравнивается к `true`                      | `boolean` |
| `page.year`    | Год архива (4-х значное)                     | `number`  |
| `page.month`   | Месяц архива (2-х значное без ведущих нулей) | `number`  |

**Тег (tag):** Такой же, как макет `index`, но добавлены следующие переменные.

| Variable        | Описание      | Type     |
| --------------- | ------------- | -------- |
| `page.category` | Имя категории | `string` |

**Архив (archive):** Такой же, как макет `index`, но добавлены следующие переменные.

| Variable   | Описание | Type     |
| ---------- | -------- | -------- |
| `page.tag` | Имя тега | `string` |

[queryo]: https://hexojs.github.io/warehouse/classes/query.default.html

[Moment.js]: http://momentjs.com/
[Site Variables]: #Site-Variables
[Page Variables]: #Page-Variables
