title: Tag Plugins
---
태그 플러그인은 포스트의 태그와는 다릅니다. Octopress로부터 가져온 것으로 특별한 컨텐츠를 당신의 포스트에 빠르게 추가할 수 있도록 도와주는 유용한 방법입니다.

## Block Quote

인용구를 post, 소스, 제목에 추가하기 위한 완벽한 방법입니다. 옵션으로 인용구의 원작자를 추가할 수도 있습니다.

**Alias:** quote

```
{% blockquote [author[, source]] [link] [source_link_title] %}
content
{% endblockquote %}
```

### 예시

**인자가 없는 일반 인용**

```
{% blockquote %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit lacus ut purus iaculis feugiat. Sed nec tempor elit, quis aliquam neque. Curabitur sed diam eget dolor fermentum semper at eu lorem.
{% endblockquote %}
```

{% blockquote %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit lacus ut purus iaculis feugiat. Sed nec tempor elit, quis aliquam neque. Curabitur sed diam eget dolor fermentum semper at eu lorem.
{% endblockquote %}

**책 인용하기**

```
{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}
```

{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}

**Twitter 인용하기**

```
{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
NEW: DevDocs now comes with syntax highlighting. http://devdocs.io
{% endblockquote %}
```

{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
NEW: DevDocs now comes with syntax highlighting. http://devdocs.io
{% endblockquote %}

**웹 게시물 인용하기**

```
{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}
```

{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}

## Code Block

코드 조각(snippet)을 포스트에 추가할 수 있는 유용한 기능입니다.

**Alias:** code

```
{% codeblock [title] [lang:language] [url] [link text] %}
code snippet
{% endcodeblock %}
```

### 예시

**일반 code block 사용하기**

```
{% codeblock %}
alert('Hello World!');
{% endcodeblock %}
```

{% codeblock %}
alert('Hello World!');
{% endcodeblock %}

**언어 지정하기**

```
{% codeblock lang:objc %}
[rectangle setX: 10 y: 10 width: 20 height: 20];
{% endcodeblock %}
```

{% codeblock lang:objc %}
[rectangle setX: 10 y: 10 width: 20 height: 20];
{% endcodeblock %}

**Code block에 제목 넣기**

```
{% codeblock Array.map %}
array.map(callback[, thisArg])
{% endcodeblock %}
```

{% codeblock Array.map %}
array.map(callback[, thisArg])
{% endcodeblock %}

**제목과 URL 넣기**

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

이 방법은 code block을 사용하는 것과 같습니다만 block을 구분하기 위해 세 개의 역 따옴표를 사용하는 점이 다릅니다.

{% raw %}
&#96`` [language] [title] [url] [link text]
code snippet
&#96;``
{% endraw %}

## Pull Quote

pull 인용을 추가하기 위한 방법은 다음과 같습니다.

```
{% pullquote [class] %}
content
{% endpullquote %}
```

## jsFiddle

jsFiddle을 포함시킬 수 있습니다.

```
{% jsfiddle shorttag [tabs] [skin] [width] [height] %}
```

## Gist

Gist를 포함시킬 수 있습니다.

```
{% gist gist_id [filename] %}
```

## iframe

iframe을 포함시킬 수 있습니다.

```
{% iframe url [width] [height] %}
```

## Image

이미지의 사이즈를 지정하여 포함시킬 수 있습니다.

```
{% img [class names] /path/to/image [width] [height] [title text [alt text]] %}
```

## Link

`target="_blank"` 속성으로 링크를 포함시킬 수 있습니다.

```
{% link text url [external] [title] %}
```

## Include Code

`source/downloads/code` 폴더에 있는 코드를 포함시킬 수 있습니다.

```
{% include_code [title] [lang:language] path/to/file %}
```

## YouTube

YouTube video를 포함시킬 수 있습니다.

```
{% youtube video_id %}
```

## Vimeo

Vimeo video를 포함시킬 수 있습니다.

```
{% vimeo video_id %}
```

## Include Posts

다른 포스트의 링크를 포함시킬 수 있습니다.

```
{% post_path slug %}
{% post_link slug [title] %}
```

## Include Assets

포스트의 asset을 포함시킬 수 있습니다.

```
{% asset_path slug %}
{% asset_img slug [title] %}
{% asset_link slug [title] %}
```

## Raw

특정 컨텐츠가 당신의 포스트 내에서 문제를 일으킨다면, `raw` 태그를 사용하여 감싸주세요. 그러면 렌더링 에러를 피할 수 있습니다.

```
{% raw %}
content
{% endraw %}
```
