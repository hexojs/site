---
title: Постоянные ссылки
---
Вы можете указать формат постоянных ссылок на вашем сайте в файле `_config.yml`. Или в шапке каждого поста.

### Переменные

Помимо переменных можно использовать любые атрибуты постоянной ссылки.

Переменная | Описание
--- | ---
`:year` | Год публикации поста (4-х значный)
`:month` | Месяц публикации поста (2-х значный)
`:i_month` | Месяц публикации поста (Без ведущего нуля)
`:day` | День публикации поста (2-х значный)
`:i_day` | День публикации поста (Без ведущего нуля)
`:hour` | Published hour of posts (2-digit)
`:minute` | Published minute of posts (2-digit)
`:second` | Published second of posts (2-digit)
`:title` | Имя файла (relative to "source/_posts/" folder)
`:name` | Имя файла
`:post_title` | Post title
`:id` | ID поста (_not persistent across [cache reset](/ru/docs/commands#clean)_)
`:category` | Категории. Если категория поста не указана, возьмётся значение по умолчанию из `default_category`.
`:hash` | SHA1 hash of filename (same as `:title`) and date (12-hexadecimal)

Можно определить значение по умолчанию для переменной постоянной ссылки, задав значение `permalink_defaults` в конфигурации:

``` yaml
permalink_defaults:
  lang: en
```

### Примеры

``` yaml source/_posts/hello-world.md
title: Hello World
date: 2013-07-14 17:01:34
categories:
- foo
- bar
```

Настройка | Результат
--- | ---
`:year/:month/:day/:title/` | 2013/07/14/hello-world/
`:year-:month-:day-:title.html` | 2013-07-14-hello-world.html
`:category/:title/` | foo/bar/hello-world/
`:title-:hash/` | hello-world-a2c8ac003b43/

``` yaml source/_posts/lorem/hello-world.md
title: Hello World
date: 2013-07-14 17:01:34
categories:
- foo
- bar
```

Настройка | Результат
--- | ---
`:year/:month/:day/:title/` | 2013/07/14/lorem/hello-world/
`:year/:month/:day/:name/` | 2013/07/14/hello-world/

### Многоязычность

Для создания многоязыкового сайта можно изменить `new_post_name` и `permalink`. Например:

``` yaml
new_post_name: :lang/:title.md
permalink: :lang/:title/
```

При создании нового поста, он будет сохранен в папке указанного языка:

``` bash
$ hexo new "Hello World" --lang tw
# => source/_posts/tw/Hello-World.md
```

ссылка на пост будет:

``` plain
http://localhost:4000/tw/hello-world/
```
