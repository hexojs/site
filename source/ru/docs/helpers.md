title: Помощники
---
Помощники используются в шаблонах, чтобы быстро вставлять фрагменты. Помощники не могут быть использованы в исходных файлах .

## URL

### url_for

Возвращает URL-адрес корневого пути с префиксом. Нужно использовать этот помощник вместо `config.root + path`, начиная с Hexo версии 2.7.

``` js
<%- url_for(path) %>
```

### relative_url

Возвращает относительный URL путь от `from` до `to`.

``` js
<%- relative_url(from, to) %>
```

### gravatar

Вставка изображения с Gravatar.
Если не указать в параметрах будет применена опция по умолчанию. Иначе можно установить число, которое будет передаваться в качестве параметра размера изображения, получаемого с Gravatar. Наконец, если установить его ссылкой на объект, он будет преобразован в строку запроса параметров для Gravatar.

``` js
<%- gravatar(email, [options]);
```

**Примеры:**

``` js
<%- gravatar('a@abc.com') %>
// http://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787

<%- gravatar('a@abc.com', 40) %>
// http://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787?s=40

<%- gravatar('a@abc.com' {s: 40, d: 'http://example.com/image.png'}) %>
// http://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787?s=40&d=http%3A%2F%2Fexample.com%2Fimage.png
```

## HTML тэги

### css

Загружает CSS-файлы. `path` может быть массивом или строкой. Если путь не начинается префиксом `/` или любым протоколом, то будет начинаться с корневого URL-адреса. Если не добавить `.css`, в конце пути, он будет подставлен автоматически.

``` js
<%- css(path, ...) %>
```

**Примеры:**

``` js
<%- css('style.css') %>
// <link rel="stylesheet" href="/style.css" type="text/css">

<%- css(['style.css', 'screen.css']) %>
// <link rel="stylesheet" href="/style.css" type="text/css">
// <link rel="stylesheet" href="/screen.css" type="text/css">
```

### js

Загружает JavaScript файлы. `path` может быть массивом или строкой. Если путь не начинается префиксом `/` или любым протоколом, то будет начинаться с корневого URL-адреса. Если не добавить `.js`, в конце пути, он будет подставлен автоматически.

``` js
<%- js(path, ...) %>
```

**Примеры:**

``` js
<%- js('script.js') %>
// <script type="text/javascript" src="/script.js"></script>

<%- js(['script.js', 'gallery.js']) %>
// <script type="text/javascript" src="/script.js"></script>
// <script type="text/javascript" src="/gallery.js"></script>
```

### link_to

Вставляет ссылку.

``` js
<%- link_to(path, [text], [options]) %>
```

Опции | Описание | Умолчание
--- | --- | ---
`external` | Открывает ссылку в новой вкладке | false
`class` | Имя класса |
`id` | ID |

**Примеры:**

``` js
<%- link_to('http://www.google.com') %>
// <a href="http://www.google.com" title="http://www.google.com">http://www.google.com</a>

<%- link_to('http://www.google.com', 'Google') %>
// <a href="http://www.google.com" title="Google">Google</a>

<%- link_to('http://www.google.com', 'Google', {external: true}) %>
// <a href="http://www.google.com" title="Google" target="_blank" rel="external">Google</a>
```

### mail_to

Вставка почтовой ссылки.

``` js
<%- mail_to(path, [text], [options]) %>
```

Опция | Описание
--- | ---
`class` | Имя класса
`id` | ID
`subject` | Тема письма
`cc` | Копия
`bcc` | Скрытая копия
`body` | Содержание сообщения

**Примеры:**

``` js
<%- mail_to('a@abc.com') %>
// <a href="mailto:a@abc.com" title="a@abc.com">a@abc.com</a>

<%- mail_to('a@abc.com', 'Email') %>
// <a href="mailto:a@abc.com" title="Email">Email</a>
```

### image_tag

Вставка изображения.

``` js
<%- image_tag(path, [options]) %>
```

Опция | Описание
--- | ---
`alt` | Альтернативный текст изображения
`class` | Имя класса
`id` | ID
`width` | Ширина изображения
`height` | Высота изображения

### favicon_tag

Вставка иконки сайта (favicon).

``` js
<%- favicon_tag(path) %>
```

### feed_tag

Вставка ссылки на канал.

``` js
<%- feed_tag(path, [options]) %>
```

Опции | Описание | Умолчание
--- | --- | ---
`title` | Имя канала |
`type` | Тип канала | atom

### Условные теги

### is_current

Проверить, соответствует ли `path` URL-адресу текущей страницы. Используйте `strict` для обеспечения строгого соответствия.

``` js
<%- is_current(path, [strict]) %>
```

### is_home

Проверить, является ли текущая страница главной.

``` js
<%- is_home() %>
```

### is_post

Проверить, является ли текущая страница постом.

``` js
<%- is_post() %>
```

### is_archive

Проверить, является ли текущая страница архивом.

``` js
<%- is_archive() %>
```

### is_year

Проверить, является ли текущая страница годовым архивом.

``` js
<%- is_year() %>
```

### is_month

Проверить, является ли текущая страница месячным архивом.

``` js
<%- is_month() %>
```

### is_category

Проверить, является ли текущая страница страницей категории.
Если строка содержит параметр, проверяется, соответствует ли текущая страница заданной категории.

``` js
<%- is_category() %>
<%- is_category('hobby') %>
```

### is_tag

Проверить, является ли текущая страница страницей тэга. Если строка содержит параметр, проверяется, соответствует ли текущая страница заданному тэгу.

``` js
<%- is_tag() %>
<%- is_tag('hobby') %>
```

## Работа со строками

### trim

Удаляет префиксы и конечные пробелы из строки.

``` js
<%- trim(string) %>
```

### strip_html

Санирует(sanitizes) все HTML-теги в строку.

``` js
<%- strip_html(string) %>
```

**Примеры:**

``` js
<%- strip_html('It's not <b>important</b> anymore!') %>
// It's not important anymore!
```

### titlecase

Правильно расставляет заглавные буквы в строке заголовка.

``` js
<%- titlecase(string) %>
```

**Примеры:**

``` js
<%- titlecase('this is an apple') %>
# This is an Apple
```

### markdown

Преобразует строку с помощью Markdown.

``` js
<%- markdown(str) %>
```

**Примеры:**

``` js
<%- markdown('make me **strong**') %>
// make me <strong>strong</strong>
```

### render

Обрабатывает строку.

``` js
<%- render(str, engine, [options]) %>
```

### word_wrap

Переносит строки длиннее указанного в `length` количества символов. `length` равняется 80 по умолчанию.

``` js
<%- word_wrap(str, [length]) %>
```

**Примеры:**

``` js
<%- word_wrap('Once upon a time', 8) %>
// Once upon\n a time
```

### truncate

Обрезает текст после определённого в `length` количества символов. По умолчанию `length` 30 символов.

``` js
<%- truncate(text, [options]) %>
```

**Примеры:**

``` js
<%- truncate('Once upon a time in a world far far away', {length: 17}) %>
// Once upon a ti...

<%- truncate('Once upon a time in a world far far away', {length: 17, separator: ' '}) %>
// Once upon a...

<%- truncate('And they found that many people were sleeping better.', {length: 25, omission: '... (continued)'}) %>
// And they f... (continued)
```

## Шаблоны

### partial

Загружает другие файлы шаблонов. Можно назначить локальные переменные в `locals`.

``` js
<%- partial(layout, [locals], [options]) %>
```

Опция | Описание | Умолчание
--- | --- | ---
`cache` | Кэшировать содержимое (Использовать кэш фрагментов.) | `false`
`only` | Строгие локальные переменные. Использовать только указанные в шаблоне переменные `locals`. | `false`

### fragment_cache

Кэширует содержимое фрагмента. Сохраняет содержимое внутри фрагмента в кэш и при следующем запросе берет значения из него.

``` js
<%- fragment_cache(id, fn);
```

**Примеры:**

``` js
<%- fragment_cache('header', function(){
  return '<header></header>';
}) %>
```

## Дата и время

### date

Вставляет отформатированную дату. `date` может быть в формате времени Unix, строки ISO, объекта date, или [Moment.js] объекта. Параметр `format` по умолчанию равен  `date_format`.

``` js
<%- date(date, [format]) %>
```

**Примеры:**

``` js
<%- date(Date.now()) %>
// 2013-01-01

<%- date(Date.now(), 'YYYY/M/D') %>
// Jan 1 2013
```

### date_xml

Вставляет дату в формате XML. `date` может быть в формате времени Unix, строки ISO, объекта date, или [Moment.js] объекта.

``` js
<%- date_xml(date) %>
```

**Примеры:**

``` js
<%- date_xml(Date.now()) %>
// 2013-01-01T00:00:00.000Z
```

### time

Вставляет отформатированное время. `date` может быть в формате времени Unix, строки ISO, объекта date, или [Moment.js] объекта. Параметр `format` по умолчанию равен  `time_format`.

``` js
<%- time(date, [format]) %>
```

**Примеры:**

``` js
<%- time(Date.now()) %>
// 13:05:12

<%- time(Date.now(), 'h:mm:ss a') %>
// 1:05:12 pm
```

### full_date

Вставляет отформатированные дату и время. `date` может быть в формате времени Unix, строки ISO, объекта date, или [Moment.js] объекта. Параметр `format` по умолчанию равен  `date_format + time_format`.

``` js
<%- full_date(date, [format]) %>
```

**Примеры:**

``` js
<%- full_date(new Date()) %>
// Jan 1, 2013 0:00:00

<%- full_date(new Date(), 'dddd, MMMM Do YYYY, h:mm:ss a') %>
// Tuesday, January 1st 2013, 12:00:00 am
```

### moment

Библиотека [Moment.js].

## Списки

### list_categories

Вставляет список всех категорий.

``` js
<%- list_categories([options]) %>
```

Опция | Описание | Умолчание
--- | --- | ---
`orderby` | Упорядочивание категорий | name
`order` | Порядок сортировки. `1`, `asc` для сортировки по увеличению; `-1`, `desc` для сортировки по уменьшению | 1
`show_count` | Отображать количество постов для каждой категории | true
`style` | Стиль показа списка категорий. `list` отображает категории в неупорядоченном списке.  | list
`separator` | Разделитель категорий. (Работает если только стиль `style` не задан как `list`) | ,
`depth` | Глубина вложенных категорий для отображения. `0` отображает все категории и подкатегории; `-1` похож на `0` но отображается в плоскости; `1` отображает только разделы верхнего уровня. | 0
`class` | Имя класса списка категорий. | category
`transform` | Функция, позволяющая изменить отображаемое имя категории. |

### list_tags

Вставка списка всех тэгов.

``` js
<%- list_tags([options]) %>
```

Опция | Описание | Умолчание
--- | --- | ---
`orderby` | Сортировать по категориям | name
`order` | Порядок сортировки. `1`, `asc` по увеличению; `-1`, `desc` по уменьшению | 1
`show_count` | Отображать количество постов для каждого тэга. | true
`style` | Стиль показа списка тэгов. `list` отображает категории в неупорядоченном списке. | list
`separator` | Разделитель тэгов. (Работает если только стиль `style` не задан как `list`) | ,
`class` | Имя класса списка тэгов. | tag
`transform` | Функция, позволяющая изменить отображаемое имя категории. |
`amount` | Ограничение количества отображаемых тэгов (0 = неограниченно) | 0

### list_archives

Вставка списка архивов.

``` js
<%- list_archives([options]) %>
```

Опция | Описание | Умолчание
--- | --- | ---
`type` | Тип. Значение может быть года `yearly` или месяца `monthly`. | monthly
`order` | Порядок сортировки. `1`, `asc` по увеличению; `-1`, `desc` по уменьшению | 1
`show_count` | Отобразить количество сообщений для каждого архива | true
`format` | Формат даты | MMMM YYYY
`style` | Стиль показа списка архивов. `list` отображает категории в неупорядоченном списке.  | list
`separator` | Разделитель архивов. (Работает если только стиль `style` не задан как `list`) | ,
`class` | Имя класса списка архивов. | archive
`transform` | Функция, позволяющая изменить отображаемое имя архива. |

### list_posts

Список постов.

``` js
<%- list_posts([options]) %>
```

Опция | Описание | Умолчание
--- | --- | ---
`orderby` | Сортировка постов | date
`order` | Порядок сортировки. `1`, `asc` по увеличению; `-1`, `desc` по убыванию | 1
`style` | Стиль показа списка постов. `list` отображает категории в неупорядоченном списке.  | list
`separator` | Разделитель постов. (Работает если только стиль `style` не задан как `list`) | ,
`class` | Имя класса списка постов. | post
`amount` | Ограничени количества отображаемых постов (0 = неограниченно) | 6
`transform` | Функция, позволяющая изменить отображаемое имя поста. |

### tagcloud

Облако тэгов.

``` js
<%- tagcloud([tags], [options]) %>
```

Опция | Описание | Умолчание
--- | --- | ---
`min_font` | Минимальный размер шрифта | 10
`max_font` | Максимальный размер шрифта | 20
`unit` | Единица измерения размера шрифта | px
`amount` | Общая сумма тэгов | 40
`orderby` | Упорядочить по тэгу | name
`order` | Порядок сортировки. `1`, `asc` по увеличению; `-1`, `desc` по убыванию | 1
`color` | Цветное облако тэгов | false
`start_color` | Стартовый цвет. Можно использовать hex (`#b700ff`), rgba (`rgba(183, 0, 255, 1)`), hsla (`hsla(283, 100%, 50%, 1)`) или [имена цветов]. Эта опция работает только если `color` установлен в `true`. |
`end_color` | Конечный цвет. Можно использовать hex (`#b700ff`), rgba (`rgba(183, 0, 255, 1)`), hsla (`hsla(283, 100%, 50%, 1)`) или [имена цветов]. Эта опция работает только если `color` установлен в `true`. |

## Разное

### paginator

Вставляет нумерацию страниц.

``` js
<%- paginator(options) %>
```

Опция | Описание | Умолчание
--- | --- | ---
`base` | Базовый URL-адрес | /
`format` | Формат URL-адреса | page/%d/
`total` | Количество страниц | 1
`current` | Номер текущей страницы | 0
`prev_text` | Ссылка на предыдущую страницу. Работает только если `prev_next` имеет значение `true`. | Prev
`next_text` | Ссылка на следующую страницу. Работает только если `prev_next` имеет значение `true`. | Next
`space` | Пространство в тексте | &hellp;
`prev_next` | Отображает ссылки на предыдущую и следующую страницы | true
`end_size` | Количество страниц, отображаемых с начало и конца. | 1
`mid_size` | Количество страниц, отображаемых от текущей страницы. Текущая страница не включена. | 2
`show_all` | Отобразить все страницы. Если установлено в `true`, `end_size` и `mid_size` не работают. | false

### search_form

Вставляет форму поиска Google.

``` js
<%- search_form(options) %>
```

Опции | Описание | Умолчание
--- | --- | ---
`class` | Имя класса форма | search-form
`text` | Подсказка поиска | Search
`button` | Отображать кнопку поиска. Значение может быть логическим или строковым. Если значение - строка, тогда она подставится в текст кнопки. | false

### number_format

Формат чисел.

``` js
<%- number_format(number, [options]) %>
```

Опция | Описание | Умолчание
--- | --- | ---
`precision` | Точность чисел. Значение можно установить в `false` или неотрицательное целое число. | false
`delimiter` | Разделитель тысяч | ,
`separator` | Разделитель дробной части числа от целой. | .

**Примеры:**

``` js
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

### open_graph

Вставляет график [Open Graph].

``` js
<%- open_graph([options]) %>
```

Опция | Описание | Умолчание
--- | --- | ---
`title` | Заголовок страницы (`og:title`) | `page.title`
`type` | Тип страницы (`og:type`) | blog
`url` | URL-адрес страницы (`og:url`) | `url`
`image` | Обложка страницы (`og:image`) | First image in the content
`site_name` | Имя сайта (`og:site_name`) | `config.title`
`description` | Описание страницы (`og:desription`) | Page excerpt or first 200 characters of the content
`twitter_card` | Карточка Twitter (`twitter:card`) | summary
`twitter_id` | Twitter ID (`twitter:creator`) |
`twitter_site` | Сайт Twitter (`twitter:site`) |
`google_plus` | Ссылка на профиль Google+ |
`fb_admins` | Facebook ID администратора |
`fb_app_id` | Facebook ID приложения |

### toc

Анализирует все теги заголовков (H1~н6) на странице и создаёт на их основе оглавление.

``` js
<%- toc(str, [options]) %>
```

Опция | Описание | Умолчание
--- | --- | ---
`class` | Имя класса | toc
`list_number` | Отображать нумерацию | true

**Примеры:**

``` js
<%- toc(page.content) %>
```

[имена цветов]: http://www.w3.org/TR/css3-color/#svg-color
[Moment.js]: http://momentjs.com/
[Open Graph]: http://ogp.me/
