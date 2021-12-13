---
title: Постоянные ссылки
---
Вы можете указать постоянные ссылки для своего сайта в "_config.yml" или в заголовке для каждого сообщения.

### Переменные

Помимо следующих переменных, вы можете использовать любые атрибуты в постоянной ссылке.

Переменная | Описание
--- | ---
`:year` | Год публикации статьи (4-значный)
`:month` | Месяц публикации статьи (2-значный)
`:i_month` | Месяц публикации статьи (без ведущих нулей)
`:day` | Число публикации статьи (2-значный)
`:i_day` | Число публикации статьи (без ведущих нулей)
`:hour` | Час публикации статьи (2-значный)
`:minute` | Минута публикации статьи (2-значный)
`:second` | Секунда публикации статьи (2-значный)
`:title` | Имя файла (относительно папки "source/_posts/")
`:name` | Имя файла
`:post_title` | Заголовок статьи
`:id` | ID статьи (Идентификатор записи (_ не сохраняется при [сбросе кэша] (/docs/commands#clean)_)
`:category` | Категории. Если сообщение не классифицировано, оно будет использовать значение "default_category".
`:hash` | Хэш SHA1 имени файла (такой же, как `:title`) и даты (12-шестнадцатеричный)

Вы можете определить значение по умолчанию для каждой переменной в постоянной ссылке с помощью параметра `permalink_defaults`:

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

### Поддержка нескольких языков

Чтобы создать многоязычный сайт, вы можете изменить настройки `new_post_name` и `permalink` следующим образом:

``` yaml
new_post_name: :lang/:title.md
permalink: :lang/:title/
```

Когда вы создадите новую публикацию, она будет сохранена в:

``` bash
$ hexo new "Hello World" --lang tw
# => source/_posts/tw/Hello-World.md
```

и URL-адрес будет:

``` plain
http://localhost:4000/tw/hello-world/
```
