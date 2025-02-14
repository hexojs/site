---
title: 標籤外掛（Tag Plugins）
---

Tag plugins are different from post tags. They are ported from Octopress and provide a useful way for you to quickly add specific content to your posts.

Although you can write your posts in any format, the tag plugins will always be available and syntax remains the same.

{% youtube I07XMi7MHd4 %}

_標籤外掛不應該被包裝在 Markdown 語法當中，例如： `[]({% post_path lorem-ipsum %})` 是不支援的。_

## 引用區塊 (Block Quote)

Perfect for adding quotes to your post, with optional author, source and title information.

**捷徑：** quote

```
{% blockquote [author[, source]] [link] [source_link_title] %}
content
{% endblockquote %}
```

### 範例

**No arguments. Plain blockquote.**

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
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy. Seek happiness for all. Through kindness. Through mercy.
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

## 程式碼區塊 (Code Block)

A useful feature for adding code snippets to your post.

**捷徑：** code

```
{% codeblock [title] [lang:language] [url] [link text] [additional options] %}
code snippet
{% endcodeblock %}
```

以 `option:value` 格式設定額外的選項，例如：`line_number:false first_line:5`。

| 額外選項             | 文章摘要                                                                                            | Default |
| ---------------- | ----------------------------------------------------------------------------------------------- | ------- |
| `line_number`    | 顯示行號                                                                                            | `true`  |
| `line_threshold` | Only show line numbers as long as the numbers of lines of the code block exceed such threshold. | `0`     |
| `highlight`      | 啟用程式碼強調                                                                                         | `true`  |
| `first_line`     | Specify the first line number                                                                   | `1`     |
| `mark`           | 強調特定的程式碼行號，每個值會以逗點區分。 特定的程式碼區間則使用破折號 (dash)<br>範例：`mark:1,4-7,10` 會標示行號 1、 4 到 7 以及 10。   |         |
| `wrap`           | 將程式碼區塊包裝在 [`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) 中  | `true`  |

### 說明

**A plain code block**

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

**Adding a caption to the code block**

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
\_.compact([0, 1, false, 2, '', 3]); => [1, 2, 3]
{% endcodeblock %}

## Backtick Code Block

This is identical to using a code block, but instead uses three backticks to delimit the block.

{% raw %}
&#96`[language] [title] [url] [link text]
code snippet
&#96;`
{% endraw %}

## Pull Quote

To add pull quotes to your posts:

```
{% pullquote [class] %}
content
{% endpullquote %}
```

## jsFiddle (`v7.0.0` 中刪除)

{% note warn %}
The tag was removed in Hexo 7.0.0. 如果你使用 `v7.0.0+`，請使用 [hexo-tag-embed](https://github.com/hexojs/hexo-tag-embed) 作為替代。
{% endnote %}

在文章中嵌入 jsFiddle。

```
{% jsfiddle shorttag [tabs] [skin] [width] [height] %}
```

## Gist (`v7.0.0` 中刪除)

{% note warn %}
如果你使用 `v7.0.0+`，請使用 [hexo-tag-embed](https://github.com/hexojs/hexo-tag-embed) 作為替代。
{% endnote %}

To embed a Gist snippet:

```
{% gist gist_id [filename] %}
```

## iframe

在文章中插入 iframe。

```
{% iframe url [width] [height] %}
```

## 圖片

在文章中插入指定大小的圖片。

```
{% img [class names] /path/to/image [width] [height] '"title text" "alt text"' %}
```

## 連結

在文章中插入連結，並在外部連結自動加上 `target="_blank"` 屬性。

```
{% link text url [external] [title] %}
```

## 插入程式碼

插入 `source/downloads/code` 資料夾內的程式檔，資料夾取決於你在設定文件中 `code_dir` 的設定。 The folder location can be specified through the `code_dir` option in the config.

```
{% include_code [title] [lang:language] [from:line] [to:line] path/to/file %}
```

### 影片

**Embed the whole content of test.js**

```
{% include_code lang:javascript test.js %}
```

**Embed line 3 only**

```
{% include_code lang:javascript from:3 to:3 test.js %}
```

**Embed line 5 to 8**

```
{% include_code lang:javascript from:5 to:8 test.js %}
```

**Embed line 5 to the end of file**

```
{% include_code lang:javascript from:5 test.js %}
```

**Embed line 1 to 8**

```
{% include_code lang:javascript to:8 test.js %}
```

## Youtube (`v7.0.0` 中刪除)

{% note warn %}
如果你使用 `v7.0.0+`，請使用 [hexo-tag-embed](https://github.com/hexojs/hexo-tag-embed) 作為替代。
{% endnote %}

在文章中插入 Youtube 影片。

```
{% youtube video_id [type] [cookie] %}
```

### 引用文章

**Embed a video**

```
{% youtube lJIrF4YjHfQ %}
```

**播放列表**

```
{% youtube PL9hW1uS6HUfscJ9DHkOSoOX45MjXduUxo 'playlist' %}
```

**隱私模式**

YouTube's cookie is not used in this mode.

```
{% youtube lJIrF4YjHfQ false %}
{% youtube PL9hW1uS6HUfscJ9DHkOSoOX45MjXduUxo 'playlist' false %}
```

## Vimeo (`v7.0.0` 中刪除)

{% note warn %}
如果你使用 `v7.0.0+`，請使用 [hexo-tag-embed](https://github.com/hexojs/hexo-tag-embed) 作為替代。
{% endnote %}

Inserts a responsive or specified size Vimeo video.

```
{% vimeo video_id [width] [height] %}
```

## Include Posts

Include links to other posts.

```
{% post_path filename %}
{% post_link filename [title] [escape] %}
```

當你使用這個標籤時，你可以忽略永久連結 (permalink) 以及資料夾資訊，如語言及日期。

例如：`{% raw %}{% post_link how-to-bake-a-cake %}{% endraw %}`。

只要文章的檔案名稱是 `how-to-bake-a-cake.md`，甚至文章位於 `source/posts/2015-02-my-family-holiday` 或是具有永久連結 `2018/en/how-to-bake-a-cake` 時都會運作。

你可以自定義要顯示的文字，取代顯示文章的標題。

文章標題及自定義文字預設會逸出 (escape)。 你可以使用選項 `escape` 將逸出關閉。

例如：

**Display title of the post.**

`{% raw %}{% post_link hexo-3-8-released %}{% endraw %}`

{% post_link hexo-3-8-released %}

**Display custom text.**

`{% raw %}{% post_link hexo-3-8-released 'Link to a post' %}{% endraw %}`

{% post_link hexo-3-8-released 'Link to a post' %}

**Escape title.**

```
{% post_link hexo-4-released 'How to use <b> tag in title' %}
```
{% post_link hexo-4-released 'How to use <b> tag in title' %}

**不要逸出標題。**

```
{% post_link hexo-4-released '<b>bold</b> custom title' false %}
```

{% post_link hexo-4-released '<b>bold</b> custom title' false %}

## Include Assets

Include post assets, to be used in conjunction with [`post_asset_folder`](/docs/asset-folders).

```
{% asset_path filename %}
{% asset_img [class names] slug [width] [height] [title text [alt text]] %}
{% asset_link filename [title] [escape] %}
```

### 嵌入圖片

_hexo-renderer-marked 3.1.0+ 可以（可選的）自動解析文章內的圖片路徑，請參考[這個區塊](/zh-tw/docs/asset-folders#使用-markdown-嵌入一張圖片)了解如何啟用它。_

"foo.jpg" 位於 `http://example.com/2020/01/02/hello/foo.jpg`。

**Default (no option)**

`{% asset_img foo.jpg %}`

```html
<img src="/2020/01/02/hello/foo.jpg" />
```

**自訂 Class**

`{% asset_img post-image foo.jpg %}`

```html
<img src="/2020/01/02/hello/foo.jpg" class="post-image" />
```

**顯示尺寸**

`{% asset_img foo.jpg 500 400 %}`

```html
<img src="/2020/01/02/hello/foo.jpg" width="500" height="400" />
```

**Title & Alt**

`{% asset_img foo.jpg "lorem ipsum'dolor'" %}`

```html
<img src="/2020/01/02/hello/foo.jpg" title="lorem ipsum" alt="dolor" />
```

## URL

### url_for (7.0.0+)

回傳一個具有前綴根路徑 URL。 輸出將會自動編碼。

```
{% url_for text path [relative] %}
```

**範例：**

```yml
_config.yml
root: /blog/ # example
```

```
{% url_for blog index.html %}
```

```html
<a href="/blog/index.html">blog</a>
```

相對路徑連結則預設依照選項 `relative_link` 例如：post/page 路徑是 '/foo/bar/index.html'

```yml
_config.yml
relative_link: true
```

```
{% url_for blog index.html %}
```

```html
<a href="../../index.html">blog</a>
```

當 `relative_link` 啟用時，你也可以關閉使其輸出一個非相對路徑連結，反之亦然。

```
{% url_for blog index.html false %}
```

```html
<a href="/index.html">blog</a>
```

### full_url_for (7.0.0+)

回傳一個 `config.url` 前綴的 URL。 輸出將會自動編碼。

```
{% full_url_for text path %}
```

**範例：**

```yml
_config.yml
url: https://example.com/blog # 範例
```

```
{% full_url_for index /a/path %}
```

```html
<a href="https://example.com/blog/a/path">index</a>
```

## Raw

If certain content is causing processing issues in your posts, wrap it with the `raw` tag to avoid rendering errors.

```
{% raw %}
content
{% endraw %}
```

## Post Excerpt

使用在 `<!-- more -->` 標籤之前的文字作為為這篇文章的摘要。 [front-matter](/docs/front-matter#Settings-amp-Their-Default-Values) 中的 `excerpt:` 值如果被特指的話，將會將其優先使用。

**範例：**

```
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
<!-- more -->
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
```
