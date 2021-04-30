---
title: Шапка файла
---
Шапка файла это блок в формате YAML или JSON, расположенный в начале файла, который используется для изменения настроек написанного материала. Окончание шапки определяется строкой `---` или `;;;` при написании в формате JSON.

**YAML**

``` yaml
---
title: Hello World
date: 2013/7/13 20:46:25
---
```

**JSON**

``` json
"title": "Hello World",
"date": "2013/7/13 20:46:25"
;;;
```

### Параметры и значения по умолчанию

Параметр | Описание | Значение по умолчанию
--- | --- | ---
`layout` | Макет | [`config.default_layout`](/ru/docs/configuration#Написание)
`title` | Заголовок | Filename (posts only)
`date` | Дата публикации | Дата создания файла
`updated` | Дата обновления | Дата обновления файла
`comments` | Включение поддержки комментариев в посте | true
`tags` | Теги (Недоступно для страниц) |
`categories` | Категории (Не доступно для страниц) |
`permalink` | Переопределяет ссылку по умолчанию |
`excerpt` | Page excerpt in plain text. Use [this plugin](/docs/tag-plugins#Post-Excerpt) to format the text |
`disableNunjucks` | Disable rendering of Nunjucks tag `{{ }}`/`{% %}` and [tag plugins](/docs/tag-plugins) when enabled
`lang` | Set the language to override [auto-detection](/docs/internationalization#Path) | Inherited from `_config.yml`

#### Макет

The default layout is `post`, in accordance to the value of [`default_layout`]((/docs/configuration#Writing)) setting in `_config.yml`. When the layout is disabled (`layout: false`) in an article, it will not be processed with a theme. However, it will still be rendered by any available renderer: if an article is written in Markdown and a Markdown renderer (like the default [hexo-renderer-marked](https://github.com/hexojs/hexo-renderer-marked)) is installed, it will be rendered to HTML.

[Tag plugins](/docs/tag-plugins) are always processed regardless of layout, unless disabled by the `disableNunjucks` setting or [renderer](/api/renderer#Disable-Nunjucks-tags).

#### Категории и теги

Только посты поддерживают использование категорий и тегов. Категории считываются в порядке их написания, в результате чего сохраняется иерархия классификации и подклассификации. Теги определены на одном иерархическом уровне, не важен порядок написания.

**Например**

``` yaml
categories:
- Sports
- Baseball
tags:
- Injury
- Fight
- Shocking
```
