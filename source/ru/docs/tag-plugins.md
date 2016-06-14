title: Плагины тэгов
---
Плагины тэгов отличаются от тегов в посте. Они портированы с Octopress и обеспечивают удобный способ, чтобы быстро добавить контент для ваших постов.

## Блок цитаты

Подходит для добавления цитаты в свой пост, с указанием автора, источника и информационным заголовком.

**Блок данных:** цитата

```
{% blockquote [author[, source]] [link] [source_link_title] %}
content
{% endblockquote %}
```

### Примеры

**Без аргументов. Обычная цитата.**

```
{% blockquote %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit lacus ut purus iaculis feugiat. Sed nec tempor elit, quis aliquam neque. Curabitur sed diam eget dolor fermentum semper at eu lorem.
{% endblockquote %}
```

{% blockquote %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit lacus ut purus iaculis feugiat. Sed nec tempor elit, quis aliquam neque. Curabitur sed diam eget dolor fermentum semper at eu lorem.
{% endblockquote %}

**Цитата из книги**

```
{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}
```

{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}

**Цитата из Twitter**

```
{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
NEW: DevDocs now comes with syntax highlighting. http://devdocs.io
{% endblockquote %}
```

{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
NEW: DevDocs now comes with syntax highlighting. http://devdocs.io
{% endblockquote %}

**Цитата из статьи в интернете**

```
{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}
```

{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}

## Блок с кодом

Полезная функция для добавления фрагментов кода в пост.

**Блок данных:** код

```
{% codeblock [title] [lang:language] [url] [link text] %}
code snippet
{% endcodeblock %}
```

### Примеры

**Простой блок кода**

```
{% codeblock %}
alert('Hello World!');
{% endcodeblock %}
```

{% codeblock %}
alert('Hello World!');
{% endcodeblock %}

**С указанием языка**

```
{% codeblock lang:objc %}
[rectangle setX: 10 y: 10 width: 20 height: 20];
{% endcodeblock %}
```

{% codeblock lang:objc %}
[rectangle setX: 10 y: 10 width: 20 height: 20];
{% endcodeblock %}

**С добавление заголовка**

```
{% codeblock Array.map %}
array.map(callback[, thisArg])
{% endcodeblock %}
```

{% codeblock Array.map %}
array.map(callback[, thisArg])
{% endcodeblock %}

**С добавлением заголовка и ссылки**

```
{% codeblock _.compact http://underscorejs.org/#compact Underscore.js %}
_.compact([0, 1, false, 2, '', 3]);
=> [1, 2, 3]
{% endcodeblock %}
```

{% codeblock _.compact http://underscorejs.org/#compact Underscore.js %}
_.compact([0, 1, false, 2, '', 3]);
=> [1, 2, 3]
{% endcodeblock %}

## Блок кода в кавычках

Тот же блок кода, но использует три обратные кавычки для отделения блока.

{% raw %}
&#96`` [language] [title] [url] [link text]
code snippet
&#96;``
{% endraw %}

## Цитата

Добавляет цитату в пост:

```
{% pullquote [class] %}
content
{% endpullquote %}
```

## jsFiddle

Размещает фрагмент с jsFiddle:

```
{% jsfiddle shorttag [tabs] [skin] [width] [height] %}
```

## Gist

Размещает фрагмент с Gist:

```
{% gist gist_id [filename] %}
```

## iframe

Размещает iframe:

```
{% iframe url [width] [height] %}
```

## Картинка

Вставляет картинку с заданными размерами.

```
{% img [class names] /path/to/image [width] [height] [title text [alt text]] %}
```

## Ссылка

Вставляет ссылку с атрибутом `target="_blank"`.

```
{% link text url [external] [title] %}
```

## Include Code

Вставляет фрагменты кода из папки `source/downloads/code`.

```
{% include_code [title] [lang:language] path/to/file %}
```

## YouTube

Вставка видео с YouTube.

```
{% youtube video_id %}
```

## Vimeo

Вставка видео с Vimeo.

```
{% vimeo video_id %}
```

## Включения из постов

Содержит ссылку на другой пост.

```
{% post_path slug %}
{% post_link slug [title] %}
```

## Вставка материала

Содержит содержимое материала.

```
{% asset_path slug %}
{% asset_img slug [title] %}
{% asset_link slug [title] %}
```

## Сырцы

Если определённый контент вызывает ошибки обработки в ваших постах, оберните его тэгом `raw`, чтобы избежать ошибок обработки.

```
{% raw %}
content
{% endraw %}
```
