title: Tag Plugins
---
Tag plugins are different from tags in posts. They're ported from Octopress and can help you insert specific contents in posts quickly.

## Block Quote

Inserts quotes with author, source and title in posts.

**Alias:** quote

```
{% blockquote [author[, source]] [link] [source_link_title] %}
content
{% endblockquote %}
```

### Example

**No arguments given. Only output plain blockquote**

```
{% blockquote %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit lacus ut purus iaculis feugiat. Sed nec tempor elit, quis aliquam neque. Curabitur sed diam eget dolor fermentum semper at eu lorem.
{% endblockquote %}
```

{% blockquote %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit lacus ut purus iaculis feugiat. Sed nec tempor elit, quis aliquam neque. Curabitur sed diam eget dolor fermentum semper at eu lorem.
{% endblockquote %}

**Quote from a book**

```
{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}
```

{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}

**Quote from Twitter**

```
{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
NEW: DevDocs now comes with syntax highlighting. http://devdocs.io
{% endblockquote %}
```

{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
NEW: DevDocs now comes with syntax highlighting. http://devdocs.io
{% endblockquote %}

**Quote from an article on the web**

```
{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}
```

{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}

## Code Block

Inserts code snippets in posts.

**Alias:** code

```
{% codeblock [title] [lang:language] [url] [link text] %}
code snippet
{% endcodeblock %}
```

### Example

**A normal code block**

```
{% codeblock %}
alert('Hello World!');
{% endcodeblock %}
```

{% codeblock %}
alert('Hello World!');
{% endcodeblock %}

**Specify language**

```
{% codeblock lang:objc %}
[rectangle setX: 10 y: 10 width: 20 height: 20];
{% endcodeblock %}
```

{% codeblock lang:objc %}
[rectangle setX: 10 y: 10 width: 20 height: 20];
{% endcodeblock %}

**Add caption to code block**

```
{% codeblock Array.map %}
array.map(callback[, thisArg])
{% endcodeblock %}
```

{% codeblock Array.map %}
array.map(callback[, thisArg])
{% endcodeblock %}

**Add caption with an optional URL**

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

This plugin is same as code block, but in backtick style.

{% code %}
``` [language] [title] [url] [link text]
code snippet
```
{% endcode %}

## Pull Quote

This plugin helps you insert a pull quote in posts.

```
{% pullquote [class] %}
content
{% endpullquote %}
```

## jsFiddle

Embeds jsFiddle snippets in posts.

```
{% jsfiddle shorttag [tabs] [skin] [width] [height] %}
```

## Gist

Embeds Gist snippets in posts.

```
{% gist gist_id [filename] %}
```

## iframe

Embeds an iframe in posts.

```
{% iframe url [width] [height] %}
```

## Image

Inserts an image in posts with specified size.

```
{% img [class names] /path/to/image [width] [height] [title text [alt text]] %}
```

## Link

Inserts a link with `target="_blank"` attribute.

```
{% link text url [external] [title] %}
```

## Include Code

Inserts code snippets in `source` folder.

```
{% include_code [title] [lang:language] path/to/file %}
```

## Youtube

Inserts a Youtube video in posts.

```
{% youtube video_id %}
```

## Vimeo

Inserts a Vimeo video in posts.

```
{% vimeo video_id %}
```

## Include Posts

Include the link of other posts.

```
{% post_path slug %}
{% post_link slug [title] %}
```

## Include Assets.

Include the assets of posts.

```
{% asset_path slug %}
{% asset_img slug [title] %}
{% asset_link slug [title] %}
```

## Raw

If there're some contents can't be processed in posts, you can wrap it with `raw` tag to avoid rendering errors.

```
{% raw %}
content
{% endraw %}
```
