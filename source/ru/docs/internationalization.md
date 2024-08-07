---
title: Интернационализация (i18n)
---

Можно использовать интернационализацию на вашем сайте для поддержки многоязычности. Язык по умолчанию устанавливается путём изменения настройки языка `language` в `_config.yml`. Возможно также установить несколько языков и изменить их порядок по умолчанию.

```yaml
language: zh-tw

language:
- zh-tw
- en
```

### Языковые файлы

Языковые файлы могут быть в формате YAML или JSON. Нужно поместить их в папку языков `languages` в теме. Также поддерживается формат [printf](https://github.com/alexei/sprintf.js).

### Шаблоны

Используйте `__` или `_p` в шаблонах помощников, чтобы получить переведённые строки. Первое предназначено для нормального использования, а второе для многострочного использования. Например:

```yaml en.yml
index:
  title: Home
  add: Add
  video:
    zero: No videos
    one: One video
    other: %d videos
```

```js
<%= __('index.title') %>
// Home

<%= _p('index.video', 3) %>
// 3 videos
```

### Путь

Вы можете установить язык в шапке страницы или изменить `i18n_dir`, установив значение в `_config.yml` для поддержки автоматического обнаружения в Hexo.

```yaml
i18n_dir: :lang
```

Значение по умолчанию `i18n_dir` параметр `:lang` означает, что Hexo будет определять язык в первом сегменте URL-адреса. Например:

```plain
/index.html => en
/archives/index.html => en
/zh-tw/index.html => zh-tw
```

Строка языка применяется только при наличии языкового файла. Так архивы `archives` в `/archives/index.html` (из второй строки примера) не будет обработана как другой язык.
