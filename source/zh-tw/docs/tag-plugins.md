title: 標籤外掛（Tag Plugins）
---
標籤外掛和 Front-matter 中的標籤不同，它們是用於在文章中快速插入特定內容的外掛。

## Block Quote

在文章中插入引言，可包含作者、來源和標題。

**捷徑：** quote

```
{% blockquote [author[, source]] [link] [source_link_title] %}
content
{% endblockquote %}
```

**沒有提供參數，僅輸出普通的 blockquote**

```
{% blockquote %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit lacus ut purus iaculis feugiat. Sed nec tempor elit, quis aliquam neque. Curabitur sed diam eget dolor fermentum semper at eu lorem.
{% endblockquote %}
```

{% blockquote %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit lacus ut purus iaculis feugiat. Sed nec tempor elit, quis aliquam neque. Curabitur sed diam eget dolor fermentum semper at eu lorem.
{% endblockquote %}

**引用書上的句子**

```
{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}
```

{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}

**引用 Twitter**

```
{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
NEW: DevDocs now comes with syntax highlighting. http://devdocs.io
{% endblockquote %}
```

{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
NEW: DevDocs now comes with syntax highlighting. http://devdocs.io
{% endblockquote %}

**引用網路上的文章**

```
{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}
```

{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}

## Code Block

在文章中插入程式碼。

**捷徑：** code

```
{% codeblock [title] [lang:language] [url] [link text] %}
code snippet
{% endcodeblock %}
```

**普通的程式碼區塊**

```
{% codeblock %}
alert('Hello World!');
{% endcodeblock %}
```

{% codeblock %}
alert('Hello World!');
{% endcodeblock %}

**指定語言**

```
{% codeblock lang:objc %}
[rectangle setX: 10 y: 10 width: 20 height: 20];
{% endcodeblock %}
```

{% codeblock lang:objc %}
[rectangle setX: 10 y: 10 width: 20 height: 20];
{% endcodeblock %}

**加上說明**

```
{% codeblock Array.map %}
array.map(callback[, thisArg])
{% endcodeblock %}
```

{% codeblock Array.map %}
array.map(callback[, thisArg])
{% endcodeblock %}

**加上說明和網址**

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

## Backtick Code Block

另一種形式的程式碼區塊。

{% code %}
``` [language] [title] [url] [link text]
code snippet
```
{% endcode %}

## Pull Quote

在文章中插入 Pull quote。

```
{% pullquote [class] %}
content
{% endpullquote %}
```

## jsFiddle

在文章中嵌入 jsFiddle。

```
{% jsfiddle shorttag [tabs] [skin] [width] [height] %}
```

## Gist

在文章中嵌入 Gist。

```
{% gist gist_id [filename] %}
```

## iframe

在文章中插入 iframe。

```
{% iframe url [width] [height] %}
```

## Image

在文章中插入指定大小的圖片。

```
{% img [class names] /path/to/image [width] [height] [title text [alt text]] %}
```

## Link

在文章中插入連結，並在外連連結自動加上 `target="_blank"` 屬性。

```
{% link text url [external] [title] %}
```

## Include Code

插入 `source` 資料夾內的程式檔。

```
{% include_code [title] [lang:language] path/to/file %}
```

## Youtube

在文章中插入 Youtube 影片。

```
{% youtube video_id %}
```

## Vimeo

在文章中插入 Vimeo 影片。

```
{% vimeo video_id %}
```

## 引用文章

引用其他文章的連結。

```
{% post_path slug %}
{% post_link slug [title] %}
```

## 引用資產

引用文章的資產。

```
{% asset_path slug %}
{% asset_img slug [title] %}
{% asset_link slug [title] %}
```

## Raw

如果您要在文章中插入 Swig 標籤，可以試著使用 Raw 標籤，以免發生解析異常。

```
{% raw %}
content
{% endraw %}
```
