---
title: Помощники
---

Помощники используются в шаблонах, чтобы быстро вставлять фрагменты. Помощники не могут быть использованы в исходных файлах .

You could easily [write your own custom helper](https://hexo.io/api/helper.html) or use our ready-made helpers.

{% youtube Uc53pW0GJHU %}

## URL

### url_for

Возвращает URL-адрес корневого пути с префиксом. Нужно использовать этот помощник вместо `config.root + path`, начиная с Hexo версии 2.7.

```js
<%- url_for(path) %>
```

| Опции      | Описание             | Значение по умолчанию           |
| ---------- | -------------------- | ------------------------------- |
| `relative` | Output relative link | Value of `config.relative_link` |

**Examples:**

```yml
_config.yml
root: /blog/ # example
```

```js
<%- url_for('/a/path') %>
// /blog/a/path
```

Relative link, follows `relative_link` option by default e.g. post/page path is '/foo/bar/index.html'

```yml
_config.yml
relative_link: true
```

```js
<%- url_for('/css/style.css') %>
// ../../css/style.css

/* Override option
 * you could also disable it to output a non-relative link,
 * even when `relative_link` is enabled and vice versa.
 */
<%- url_for('/css/style.css', {relative: false}) %>
// /css/style.css
```

### relative_url

Возвращает относительный URL путь от `from` до `to`.

```js
<%- relative_url(from, to) %>
```

**Examples:**

```js
<%- relative_url('foo/bar/', 'css/style.css') %>
// ../../css/style.css
```

### full_url_for

Returns a URL with the `config.url` prefixed. Output is encoded automatically.

```js
<%- full_url_for(path) %>
```

**Examples:**

```yml
_config.yml
url: https://example.com/blog # example
```

```js
<%- full_url_for('/a/path') %>
// https://example.com/blog/a/path
```

### gravatar

Returns the gravatar image URL from an email.

Если не указать в параметрах, будет применена опция по умолчанию. Иначе можно установить число, которое будет передаваться в качестве параметра размера изображения, получаемого с Gravatar. Наконец, если установить его ссылкой на объект, он будет преобразован в строку запроса параметров для Gravatar.

```js
<%- gravatar(email, [options]) %>
```

| Опция | Описание | Примеры: |
| ----- | -------- | -------- |
| `s`   | Примеры: | 40       |
| `d`   | Примеры: |          |
| `f`   | Примеры: |          |
| `r`   | Rating   |          |

More info: [Gravatar](https://en.gravatar.com/site/implement/images/)

**Examples:**

```js
<%- gravatar('a@abc.com') %>
// https://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787

<%- gravatar('a@abc.com', 40) %>
// https://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787?s=40

<%- gravatar('a@abc.com' {s: 40, d: 'https://via.placeholder.com/150'}) %>
// https://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787?s=40&d=https%3A%2F%2Fvia.placeholder.com%2F150
```

## HTML теги

### css

Загружает CSS-файлы. Если путь не начинается с префикса `/` или с любого протокола, то будет начинаться с корневого URL-адреса. Если не добавить `.css` в конце пути, он будет подставлен автоматически. Используйте тип объекта для пользовательских атрибутов.

```js
<%- css(path, ...) %>
```

**Examples:**

```js
<%- css('style.css') %>
// <link rel="stylesheet" href="/style.css">

<%- css(['style.css', 'screen.css']) %>
// <link rel="stylesheet" href="/style.css">
// <link rel="stylesheet" href="/screen.css">

<%- css({ href: 'style.css', integrity: 'foo' }) %>
// <link rel="stylesheet" href="/style.css" integrity="foo">

<%- css([{ href: 'style.css', integrity: 'foo' }, { href: 'screen.css', integrity: 'bar' }]) %>
// <link rel="stylesheet" href="/style.css" integrity="foo">
// <link rel="stylesheet" href="/screen.css" integrity="bar">
```

### js

Загружает JavaScript файлы. `path` может быть массивом или строкой. [`/<root>/`](/docs/configuration#URL) value is prepended while `.js` extension is appended to the `path` automatically. Используйте тип объекта для пользовательских атрибутов.

```js
<%- js(path, ...) %>
```

**Examples:**

```js
<%- js('script.js') %>
// <script src="/script.js"></script>

<%- js(['script.js', 'gallery.js']) %>
// <script src="/script.js"></script>
// <script src="/gallery.js"></script>

<%- js({ src: 'script.js', integrity: 'foo', async: true }) %>
// <script src="/script.js" integrity="foo" async></script>

<%- js([{ src: 'script.js', integrity: 'foo' }, { src: 'gallery.js', integrity: 'bar' }]) %>
// <script src="/script.js" integrity="foo"></script>
// <script src="/gallery.js" integrity="bar"></script>
```

### link_to

Вставляет ссылку.

```js
<%- link_to(path, [text], [options]) %>
```

| Опция      | Описание                         | Значение по умолчанию |
| ---------- | -------------------------------- | --------------------- |
| `external` | Открывает ссылку в новой вкладке | false                 |
| `class`    | Имя класса                       |                       |
| `id`       | ID                               |                       |

**Examples:**

```js
<%- link_to('http://www.google.com') %>
// <a href="http://www.google.com" title="http://www.google.com">http://www.google.com</a>

<%- link_to('http://www.google.com', 'Google') %>
// <a href="http://www.google.com" title="Google">Google</a>

<%- link_to('http://www.google.com', 'Google', {external: true}) %>
// <a href="http://www.google.com" title="Google" target="_blank" rel="noopener">Google</a>
```

### mail_to

Вставка почтовой ссылки.

```js
<%- mail_to(path, [text], [options]) %>
```

| Опции     | Описание             |
| --------- | -------------------- |
| `class`   | Имя класса           |
| `id`      | ID                   |
| `subject` | Тема письма          |
| `cc`      | CC                   |
| `bcc`     | BCC                  |
| `body`    | Содержание сообщения |

**Examples:**

```js
<%- mail_to('a@abc.com') %>
// <a href="mailto:a@abc.com" title="a@abc.com">a@abc.com</a>

<%- mail_to('a@abc.com', 'Email') %>
// <a href="mailto:a@abc.com" title="Email">Email</a>
```

### image_tag

Вставка изображения.

```js
<%- image_tag(path, [options]) %>
```

| Опция    | Описание                         |
| -------- | -------------------------------- |
| `alt`    | Альтернативный текст изображения |
| `class`  | Имя класса                       |
| `id`     | ID                               |
| `width`  | Ширина изображения               |
| `height` | Высота изображения               |

### favicon_tag

Вставка иконки сайта (favicon).

```js
<%- favicon_tag(path) %>
```

### feed_tag

Вставка ссылки на канал.

```js
<%- feed_tag(path, [options]) %>
```

| Опция   | Описание   | Значение по умолчанию |
| ------- | ---------- | --------------------- |
| `title` | Feed title | `config.title`        |
| `type`  | Тип канала |                       |

**Examples:**

```js
<%- feed_tag('atom.xml') %>
// <link rel="alternate" href="/atom.xml" title="Hexo" type="application/atom+xml">

<%- feed_tag('rss.xml', { title: 'RSS Feed', type: 'rss' }) %>
// <link rel="alternate" href="/atom.xml" title="RSS Feed" type="application/rss+xml">

/* Defaults to hexo-generator-feed's config if no argument */
<%- feed_tag() %>
// <link rel="alternate" href="/atom.xml" title="Hexo" type="application/atom+xml">
```

## Условные теги

### is_current

Проверить, соответствует ли `path` URL-адресу текущей страницы. Используйте `strict` для обеспечения строгого соответствия.

```js
<%- is_current(path, [strict]) %>
```

### is_home

Проверить, является ли текущая страница главной.

```js
<%- is_home() %>
```

### is_home_first_page (+6.3.0)

Check whether the current page is the first of home page.

```js
<%- is_home_first_page() %>
```

### is_post

Проверить, является ли текущая страница постом.

```js
<%- is_post() %>
```

### is_page

Check whether the current page is a page.

```js
<%- is_page() %>
```

### is_archive

Проверить, является ли текущая страница архивом.

```js
<%- is_archive() %>
```

### is_year

Проверить, является ли текущая страница годовым архивом.

```js
<%- is_year() %>
```

### is_month

Проверить, является ли текущая страница месячным архивом.

```js
<%- is_month() %>
```

### is_category

Проверить, является ли текущая страница страницей категории. Если строка содержит параметр, проверяется, соответствует ли текущая страница заданной категории.

```js
<%- is_category() %>
<%- is_category('hobby') %>
```

### is_tag

Проверить, является ли текущая страница страницей тега. Если строка содержит параметр, проверяется, соответствует ли текущая страница заданному тегу.

```js
<%- is_tag() %>
<%- is_tag('hobby') %>
```

## Работа со строками

### trim

Удаляет префиксы и конечные пробелы из строки.

```js
<%- trim(string) %>
```

### strip_html

Санирует(sanitizes) все HTML-теги в строку.

```js
<%- strip_html(string) %>
```

**Examples:**

```js
<%- strip_html('It\'s not <b>important</b> anymore!') %>
// It's not important anymore!
```

### titlecase

Правильно расставляет заглавные буквы в строке заголовка.

```js
<%- titlecase(string) %>
```

**Examples:**

```js
<%- titlecase('this is an apple') %>
# This is an Apple
```

### markdown

Преобразует строку с помощью Markdown.

```js
<%- markdown(str) %>
```

**Examples:**

```js
<%- markdown('make me **strong**') %>
// make me <strong>strong</strong>
```

### render

Обрабатывает строку.

```js
<%- render(str, engine, [options]) %>
```

**Examples:**

```js
<%- render('p(class="example") Test', 'pug'); %>
// <p class="example">Test</p>
```

См. [отрисовка](https://hexo.io/ru/api/rendering) для получения более подробной информации.

### word_wrap

Переносит строки длиннее указанного в `length` количества символов. `length` равняется 80 по умолчанию.

```js
<%- word_wrap(str, [length]) %>
```

**Examples:**

```js
<%- word_wrap('Once upon a time', 8) %>
// Once upon\n a time
```

### truncate

Обрезает текст после определённого в `length` количества символов. По умолчанию `length` 30 символов.

```js
<%- truncate(text, [options]) %>
```

**Examples:**

```js
<%- truncate('Once upon a time in a world far far away', {length: 17}) %>
// Once upon a ti...

<%- truncate('Once upon a time in a world far far away', {length: 17, separator: ' '}) %>
// Once upon a...

<%- truncate('And they found that many people were sleeping better.', {length: 25, omission: '... (continued)'}) %>
// And they f... (continued)
```

### escape_html

Escapes HTML entities in a string.

```js
<%- escape_html(str) %>
```

**Examples:**

```js
<%- escape_html('<p>Hello "world".</p>') %>
// &lt;p&gt;Hello &quot;world&quot;.&lt;&#x2F;p&gt;
```

## Шаблоны

### partial

Загружает другие файлы шаблонов. Можно назначить локальные переменные в `locals`.

```js
<%- partial(layout, [locals], [options]) %>
```

| Опция   | Описание                                                                                   | Значение по умолчанию |
| ------- | ------------------------------------------------------------------------------------------ | --------------------- |
| `cache` | Кэшировать содержимое (Использовать кэш фрагментов.)                                       | `false`               |
| `only`  | Строгие локальные переменные. Использовать только указанные в шаблоне переменные `locals`. | `false`               |

### fragment_cache

Кэширует содержимое фрагмента. Сохраняет содержимое внутри фрагмента в кэш и при следующем запросе берет значения из него.

```js
<%- fragment_cache(id, fn);
```

**Examples:**

```js
<%- fragment_cache('header', function(){
  return '<header></header>';
}) %>
```

## Дата и время

### date

Вставляет отформатированную дату. `date` может быть в формате времени Unix, строки ISO, объекта date, или [Moment.js](https://momentjs.com/) объекта. Параметр `format` по умолчанию равен `date_format`.

```js
<%- date(date, [format]) %>
```

**Examples:**

```js
<%- date(Date.now()) %>
// 2013-01-01

<%- date(Date.now(), 'YYYY/M/D') %>
// Jan 1 2013
```

### date_xml

Вставляет дату в формате XML. `date` может быть в формате времени Unix, строки ISO, объекта date или [Moment.js](https://momentjs.com/) объекта.

```js
<%- date_xml(date) %>
```

**Examples:**

```js
<%- date_xml(Date.now()) %>
// 2013-01-01T00:00:00.000Z
```

### time

Inserts time tag. `date` can be unix time, ISO string, date object, or [Moment.js][] object. `format` is `date_format` setting by default.

```js
<%- time(date, [format]) %>
```

**Examples:**

```js
<%- time(Date.now()) %>
// 13:05:12

<%- time(Date.now(), 'h:mm:ss a') %>
// 1:05:12 pm
```

### full_date

Вставляет отформатированные дату и время. `date` может быть в формате времени Unix, строки ISO, объекта date или [Moment.js](https://momentjs.com/) объекта. Параметр `format` по умолчанию равен `date_format + time_format`.

```js
<%- full_date(date, [format]) %>
```

**Examples:**

```js
<%- full_date(new Date()) %>
// Jan 1, 2013 0:00:00

<%- full_date(new Date(), 'dddd, MMMM Do YYYY, h:mm:ss a') %>
// Tuesday, January 1st 2013, 12:00:00 am
```

### relative_date

Inserts relative time from now. `date` can be unix time, ISO string, date object, or [Moment.js][] object.

```js
<%- relative_date(date) %>
```

**Examples:**

```js
<%- relative_date(new Date()) %>
// a few seconds ago

<%- relative_date(new Date(1000000000000)) %>
// 22 years ago
```

### time_tag

Вставляет отформатированное время. `date` может быть в формате времени Unix, строки ISO, объекта date или [Moment.js](https://momentjs.com/) объекта. Параметр `format` по умолчанию равен `time_format`.

```js
<%- time_tag(date, [format]) %>
```

**Examples:**

```js
<%- time_tag(new Date()) %>
// <time datetime="2024-01-22T06:35:31.108Z">2024-01-22</time>

<%- time_tag(new Date(), 'MMM-D-YYYY') %>
// <time datetime="2024-01-22T06:35:31.108Z">Jan-22-2024</time>
```

### moment

Библиотека [Moment.js](https://momentjs.com/).

## Списки

### list_categories

Вставляет список всех категорий.

```js
<%- list_categories([options]) %>
```

| Опция        | Описание                                                                                                                                                                                | Значение по умолчанию |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `orderby`    | Сортировать по категориям                                                                                                                                                               | name                  |
| `order`      | Порядок сортировки. `1`, `asc` по возрастанию; `-1`, `desc` по убыванию                                                                                                                 | 1                     |
| `show_count` | Отображать количество постов для каждой категории                                                                                                                                       | true                  |
| `style`      | Стиль показа списка категорий. `list` отображает категории в неупорядоченном списке. Use `false` or any other value to disable it.                                                      | list                  |
| `separator`  | Разделитель категорий. (Работает если только стиль `style` не задан как `list`)                                                                                                         | ,                     |
| `depth`      | Глубина вложенных категорий для отображения. `0` отображает все категории и подкатегории; `-1` похож на `0` но отображается в плоскости; `1` отображает только разделы верхнего уровня. | 0                     |
| `class`      | Имя класса списка категорий.                                                                                                                                                            | category              |
| `transform`  | Функция, позволяющая изменить отображаемое имя поста.                                                                                                                                   |                       |
| `suffix`     | Add a suffix to link.                                                                                                                                                                   | None                  |

**Examples:**

```js
<%- list_categories(post.categories, {
  class: 'post-category',
  transform(str) {
    return titlecase(str);
  }
}) %>

<%- list_categories(post.categories, {
  class: 'post-category',
  transform(str) {
    return str.toUpperCase();
  }
}) %>
```

### list_tags

Вставка списка всех тегов.

```js
<%- list_tags([options]) %>
```

| Опция        | Описание                                                                                                            | Значение по умолчанию |
| ------------ | ------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `orderby`    | Упорядочивание категорий                                                                                            | name                  |
| `order`      | Порядок сортировки. `1`, `asc` по возрастанию; `-1`, `desc` по убыванию                                             | 1                     |
| `show_count` | Отобразить количество сообщений для каждого архива                                                                  | true                  |
| `style`      | Стиль показа списка тегов. `list` displays tags in an unordered list. Use `false` or any other value to disable it. | list                  |
| `separator`  | Разделитель постов. (Работает если только стиль `style` не задан как `list`)                                        | ,                     |
| `class`      | Имя класса списка тегов (string) или настройте класс каждого тега (object, см. Ниже).                               | tag                   |
| `transform`  | The function that changes the display of tag name. See examples in [list_categories](#list-categories).             |                       |
| `amount`     | Ограничение количества отображаемых тегов (0 = неограниченно)                                                       | 0                     |
| `suffix`     | Добавьте суффикс к ссылке.                                                                                          | None                  |

Расширенная настройка класса:

| Опция         | Описание                                                                                                                                           | Значение по умолчанию                                       |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| `class.ul`    | `<ul>` имя класса (только для стиля `list`)                                                                                                  | `tag-list` (стиль списка)                                   |
| `class.li`    | `<li>` имя класса (только для стиля `list`)                                                                                                  | `tag-list-item` (стиль списка)                              |
| `class.a`     | `<a>` имя класса                                                                                                                             | `tag-list-link` (list style) `tag-link` (обычный стиль)     |
| `class.label` | имя класса `<span>`, в котором хранится метка тега (только для обычного стиля, когда задан `class.label`, метка помещается в `<span>`) | `tag-label` (обычный стиль)                                 |
| `class.count` | имя класса `<span>`, в котором хранится счетчик тегов (только если `show_count` имеет значение `true`)                                       | `tag-list-count` (стиль списка) `tag-count` (обычный стиль) |

Examples:

```ejs
<%- list_tags(site.tags, {class: 'classtest', style: false, separator: ' | '}) %>
<%- list_tags(site.tags, {class: 'classtest', style: 'list'}) %>
<%- list_tags(site.tags, {class: {ul: 'ululul', li: 'lilili', a: 'aaa', count: 'ccc'}, style: false, separator: ' | '}) %>
<%- list_tags(site.tags, {class: {ul: 'ululul', li: 'lilili', a: 'aaa', count: 'ccc'}, style: 'list'}) %>
```

### list_archives

Вставка списка архивов.

```js
<%- list_archives([options]) %>
```

| Опция        | Описание                                                                                                                  | Значение по умолчанию |
| ------------ | ------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `type`       | Тип. Значение может быть год `yearly` или месяц `monthly`.                                                                | monthly               |
| `order`      | Порядок сортировки. `1`, `asc` по возрастанию; `-1`, `desc` по убыванию                                                   | 1                     |
| `show_count` | Функция, позволяющая изменить отображаемое имя архива.                                                                    | true                  |
| `format`     | Формат даты                                                                                                               | MMMM YYYY             |
| `style`      | Стиль показа списка архивов. `list` displays archives in an unordered list. Use `false` or any other value to disable it. | list                  |
| `separator`  | Разделитель архивов. (Работает если только стиль `style` не задан как `list`)                                             | ,                     |
| `class`      | Имя класса списка архивов.                                                                                                | archive               |
| `transform`  | The function that changes the display of archive name. See examples in [list_categories](#list-categories).               |                       |

### list_posts

Список постов.

```js
<%- list_posts([options]) %>
```

| Опция       | Описание                                                                                                                        | Значение по умолчанию |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `orderby`   | Сортировка постов                                                                                                               | date                  |
| `order`     | Порядок сортировки. `1`, `asc` по возрастанию; `-1`, `desc` по убывантю                                                         | 1                     |
| `style`     | Стиль показа списка постов. `list` отображает категории в неупорядоченном списке. Use `false` or any other value to disable it. | list                  |
| `separator` | Разделитель тегов. (Работает если только стиль `style` не задан как `list`)                                                     | ,                     |
| `class`     | Имя класса списка постов.                                                                                                       | post                  |
| `amount`    | Ограничени количества отображаемых постов (0 = неограниченно)                                                                   | 6                     |
| `transform` | The function that changes the display of post name. See examples in [list_categories](#list-categories).                        |                       |

### tagcloud

Облако тегов.

```js
<%- tagcloud([tags], [options]) %>
```

| Опции                 | Описание                                                                                                                                                                                            | Значение по умолчанию |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `min_font`            | Минимальный размер шрифта                                                                                                                                                                           | 10                    |
| `max_font`            | Максимальный размер шрифта                                                                                                                                                                          | 20                    |
| `unit`                | Единица измерения размера шрифта                                                                                                                                                                    | px                    |
| `amount`              | Общая сумма тегов                                                                                                                                                                                   | unlimited             |
| `orderby`             | Упорядочить по тегу                                                                                                                                                                                 | name                  |
| `order`               | Порядок сортировки. `1`, `asc` для сортировки по возрастанию; `-1`, `desc` для сортировки по убыванию                                                                                               | 1                     |
| `color`               | Цветное облако тегов                                                                                                                                                                                | false                 |
| `start_color`         | Стартовый цвет. Можно использовать hex (`#b700ff`), rgba (`rgba(183, 0, 255, 1)`), hsla (`hsla(283, 100%, 50%, 1)`) или [имена цветов]. Эта опция работает только если `color` установлен в `true`. |                       |
| `end_color`           | Конечный цвет. Можно использовать hex (`#b700ff`), rgba (`rgba(183, 0, 255, 1)`), hsla (`hsla(283, 100%, 50%, 1)`) или [имена цветов]. Эта опция работает только если `color` установлен в `true`.  |                       |
| `class`               | Префикс имени класса тегов                                                                                                                                                                          |                       |
| `level`               | Количество различных имен классов. Эта опция работает только тогда, когда переменная `class` установлена.                                                                                           | 10                    |
| `show_count` (+6.3.0) | Отображать количество постов для каждого тега.                                                                                                                                                      | false                 |
| Примеры:              | Class name of tag count                                                                                                                                                                             | count                 |

**Examples:**

```js
// Default options
<%- tagcloud() %>

// Limit number of tags to 30
<%- tagcloud({amount: 30}) %>
```

## Разное

### paginator

Inserts a paginator.

```js
<%- paginator(options) %>
```

| Опция                                                                                                                                          | Описание                                                                                 | Значение по умолчанию          |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------ |
| `base`                                                                                                                                         | Базовый URL-адрес                                                                        | /                              |
| `format`                                                                                                                                       | Формат URL-адреса                                                                        | page/%d/                       |
| `total`                                                                                                                                        | Количество страниц                                                                       | 1                              |
| `current`                                                                                                                                      | Номер текущей страницы                                                                   | 0                              |
| `prev_text`                                                                                                                                    | Ссылка на предыдущую страницу. Работает только если `prev_next` имеет значение `true`.   | Prev                           |
| `next_text`                                                                                                                                    | Ссылка на следующую страницу. Работает только если `prev_next` имеет значение `true`.    | Next                           |
| `space`                                                                                                                                        | Пространство в тексте                                                                    | &hellp;                        |
| `prev_next`                                                                                                                                    | Отображает ссылки на предыдущую и следующую страницы                                     | true                           |
| `end_size`                                                                                                                                     | Количество страниц, отображаемых с начала и конца.                                       | 1                              |
| `mid_size`                                                                                                                                     | Количество страниц, отображаемых от текущей страницы. Текущая страница не включена.      | 2                              |
| `show_all`                                                                                                                                     | Отобразить все страницы. Если установлено в `true`, `end_size` и `mid_size` не работают. | false                          |
| `escape`                                                                                                                                       | Экранирование HTML-тегов                                                                 | true                           |
| &lt;%- strip_html('It\'s not &lt;b&gt;important&lt;/b&gt; anymore!') %&gt; // It's not important anymore! | Примеры:                                                                                 | `Вставляет нумерацию страниц.` |
| Примеры:                                                                                                                                       | Current page class name                                                                  | `current`                      |
| Примеры:                                                                                                                                       | Примеры:                                                                                 | `space`                        |
| Примеры:                                                                                                                                       | Скрытая копия                                                                            | `extend prev`                  |
| Примеры:                                                                                                                                       | Next page class name                                                                     | `extend next`                  |
| `force_prev_next` (+6.3.0)                                                                                                                     | Force display previous and next links                                                    | false                          |

**Examples:**

```js
<%- paginator({
  prev_text: '<',
  next_text: '>'
}) %>
```

```html
<!-- Rendered as -->
<a href="/1/">&lt;</a>
<a href="/1/">1</a>
2
<a href="/3/">3</a>
<a href="/3/">&gt;</a>
```

```js
<%- paginator({
  prev_text: '<i class="fa fa-angle-left"></i>',
  next_text: '<i class="fa fa-angle-right"></i>',
  escape: false
}) %>
```

```html
<!-- Rendered as -->
<a href="/1/"><i class="fa fa-angle-left"></i></a>
<a href="/1/">1</a>
2
<a href="/3/">3</a>
<a href="/3/"><i class="fa fa-angle-right"></i></a>
```

### search_form

Вставляет форму поиска Google.

```js
<%- search_form(options) %>
```

| Опция    | Описание                                                                                                                              | Значение по умолчанию |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `class`  | Имя класса формы                                                                                                                      | search-form           |
| `text`   | Подсказка поиска                                                                                                                      | Search                |
| `button` | Отображать кнопку поиска. Значение может быть логическим или строковым. Если значение — строка, тогда она подставится в текст кнопки. | false                 |

### number_format

Формат чисел.

```js
<%- number_format(number, [options]) %>
```

| Опция       | Описание                                                                             | Значение по умолчанию |
| ----------- | ------------------------------------------------------------------------------------ | --------------------- |
| `precision` | Точность чисел. Значение можно установить в `false` или неотрицательное целое число. | false                 |
| `delimiter` | Разделитель тысяч                                                                    | ,                     |
| `separator` | Разделитель дробной части числа от целой.                                            | .                     |

**Examples:**

```js
<%- number_format(12345.67, {precision: 1}) %>
// 12,345.68

<%- number_format(12345.67, {precision: 4}) %>
// 12,345.6700

<%- number_format(12345.67, {precision: 0}) %>
// 12,345

<%- number_format(12345.67, {delimiter: ''}) %>
// 12345.67

<%- number_format(12345.67, {separator: '/'}) %>
// 12,345/67
```

### meta_generator

Добавляет [генерирование тегов](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta).

```js
<%- meta_generator() %>
```

**Examples:**

```js
<%- meta_generator() %>
// <meta name="generator" content="Hexo 4.0.0">
```

### open_graph

Вставляет график [Open Graph][].

```js
<%- open_graph([options]) %>
```

| Option          | Description                                           | Копия                                                   |
| --------------- | ----------------------------------------------------- | ------------------------------------------------------- |
| `title`         | Заголовок страницы (`og:title`)                       | `page.title`                                            |
| `type`          | Тип страницы (`og:type`)                              | article(post page)<br>website(non-post page)      |
| `url`           | URL-адрес страницы (`og:url`)                         | `url`                                                   |
| `image`         | Обложка страницы (`og:image`)                         | Все изображения в материалах                            |
| `author`        | Автор статьи (`og:article:author`)                    | `config.author`                                         |
| `date`          | Время публикации статьи (`og:article:published_time`) | Время публикации страницы                               |
| `updated`       | Время изменения статьи (`og:article:modified_time`)   | Время изменения страницы                                |
| `language`      | Язык статьи (`og:locale`)                             | `page.lang \|\| page.language \|\| config.language` |
| `site_name`     | Имя сайта (`og:site_name`)                            | `config.title`                                          |
| `description`   | Описание страницы (`og:description`)                  | Отрывок страницы или первые 200 символов содержимого    |
| `twitter_card`  | Карточка Twitter (`twitter:card`)                     | Краткое изложение                                       |
| `twitter_id`    | Twitter ID (`twitter:creator`)                        |                                                         |
| `twitter_site`  | Сайт Twitter (`twitter:site`)                         |                                                         |
| `twitter_image` | Примеры:                                              |                                                         |
| `google_plus`   | Ссылка на профиль Google+                             |                                                         |
| `fb_admins`     | Facebook ID администратора                            |                                                         |
| `fb_app_id`     | Facebook ID приложения                                |                                                         |

### toc

Анализирует все теги заголовков (H1~н6) на странице и создаёт на их основе оглавление.

```js
<%- toc(str, [options]) %>
```

| Option                | Description                                               | Значение по умолчанию |
| --------------------- | --------------------------------------------------------- | --------------------- |
| `class`               | Имя класса                                                | `toc`                 |
| Примеры:              | Функция, позволяющая изменить отображаемое имя категории. | `${class}-item`       |
| `class_link` (+6.3.0) | Имя канала                                                | `${class}-link`       |
| Примеры:              | Примеры:                                                  | `${class}-text`       |
| Примеры:              | Примеры:                                                  | `${class}-child`      |
| Примеры:              | Примеры:                                                  | `${class}-number`     |
| Примеры:              | Функция, позволяющая изменить отображаемое имя категории. | `${class}-level`      |
| `list_number`         | Отображать нумерацию                                      | true                  |
| `max_depth`           | Максимальная глубина генерации заголовков toc             | 6                     |
| `min_depth`           | Минимальная глубина генерации заголовков toc              | 1                     |
| `max_items` (+7.3.0)  | Maximum number of items in generated toc                  | `Infinity`            |

**Examples:**

```js
<%- toc(page.content) %>
```

#### data-toc-unnumbered (+6.1.0)

Headings with attribute `data-toc-unnumbered="true"` will be marked as unnumbered (list number will not be display).

{% note warn "Warning!" %}
For using `data-toc-unnumbered="true"`, the renderer must have the option to add CSS classes.

Please see below PRs.

- https://github.com/hexojs/hexo/pull/4871
- https://github.com/hexojs/hexo-util/pull/269
- https://github.com/hexojs/hexo-renderer-markdown-it/pull/174
  {% endnote %}

[Moment.js]: http://momentjs.com/
[Open Graph]: http://ogp.me/
