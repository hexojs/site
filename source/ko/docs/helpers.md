title: Helpers
---
Helper는 템플릿에 정보(snippet)를 쉽게 삽입할 수 있도록 도와줍니다. 소스 파일에서는 Helper를 사용할 수 없습니다.

## URL

### url_for

루트 경로를 포함한 url을 반환합니다. Hexo 2.7부터 `config.root + path` 대신 이 helper를 사용할 수 있습니다.

``` js
<%- url_for(path) %>
```

### relative_url

`from`부터 `to`까지의 상대 경로를 반환합니다.

``` js
<%- relative_url(from, to) %>
```

### gravatar

Gravatar 이미지를 삽입합니다.
[options] 파라미터를 지정하지 않은 경우, 기본 값이 적용됩니다. [options] 파라미터를 지정할 경우 숫자로 크기를 지정하여 Gravatar에 전달할 수 있습니다. 또 다른 방법으로, object를 설정할 경우 Gravatar를 위한 query string으로 변환됩니다.

``` js
<%- gravatar(email, [options]);
```

**예시:**

``` js
<%- gravatar('a@abc.com') %>
// http://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787

<%- gravatar('a@abc.com', 40) %>
// http://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787?s=40

<%- gravatar('a@abc.com' {s: 40, d: 'http://example.com/image.png'}) %>
// http://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787?s=40&d=http%3A%2F%2Fexample.com%2Fimage.png
```

## HTML Tags

### css

CSS 파일들을 불러옵니다. `path`에는 문자열(string) 또는 배열(array)을 사용할 수 있습니다. 만약 `path`가 `/` 또는 프로토콜명으로 시작하지 않는다면, 루트 URL이 접두어로 붙습니다. `path` 뒤에 `.css` 파일을 기입하지 않으면 자동으로 추가합니다.

``` js
<%- css(path, ...) %>
```

**예시:**

``` js
<%- css('style.css') %>
// <link rel="stylesheet" href="/style.css" type="text/css">

<%- css(['style.css', 'screen.css']) %>
// <link rel="stylesheet" href="/style.css" type="text/css">
// <link rel="stylesheet" href="/screen.css" type="text/css">
```

### js

JavaScript 파일들을 불러옵니다. `path`에는 문자열(string) 또는 배열(array)을 사용할 수 있습니다. 만약 `path`가 `/` 또는 프로토콜명으로 시작하지 않는다면, 루트 URL이 접두어로 붙습니다. `path` 뒤에 `.js` 파일을 기입하지 않으면 자동으로 추가합니다.

``` js
<%- js(path, ...) %>
```

**예시:**

``` js
<%- js('script.js') %>
// <script type="text/javascript" src="/script.js"></script>

<%- js(['script.js', 'gallery.js']) %>
// <script type="text/javascript" src="/script.js"></script>
// <script type="text/javascript" src="/gallery.js"></script>
```

### link_to

링크를 삽입합니다.

``` js
<%- link_to(path, [text], [options]) %>
```

옵션 | 설명 | 기본 값
--- | --- | ---
`external` | 링크를 새 탭에 엽니다. | false
`class` | Class명 |
`id` | ID |

**예시:**

``` js
<%- link_to('http://www.google.com') %>
// <a href="http://www.google.com" title="http://www.google.com">http://www.google.com</a>

<%- link_to('http://www.google.com', 'Google') %>
// <a href="http://www.google.com" title="Google">Google</a>

<%- link_to('http://www.google.com', 'Google', {external: true}) %>
// <a href="http://www.google.com" title="Google" target="_blank" rel="external">Google</a>
```

### mail_to

메일 링크를 삽입합니다.

``` js
<%- mail_to(path, [text], [options]) %>
```

옵션 | 설명
--- | ---
`class` | Class명
`id` | ID
`subject` | 메일 제목
`cc` | 참조
`bcc` | 비밀참조
`body` | 메일 내용

**예시:**

``` js
<%- mail_to('a@abc.com') %>
// <a href="mailto:a@abc.com" title="a@abc.com">a@abc.com</a>

<%- mail_to('a@abc.com', 'Email') %>
// <a href="mailto:a@abc.com" title="Email">Email</a>
```

### image_tag

이미지를 삽입합니다.

``` js
<%- image_tag(path, [options]) %>
```

옵션 | 설명
--- | ---
`alt` | 이미지 대신 표시할 텍스트
`class` | Class명
`id` | ID
`width` | 이미지의 가로 크기
`height` | 이미지의 세로 크기

### favicon_tag

파비콘을 삽입합니다.

``` js
<%- favicon_tag(path) %>
```

### feed_tag

Feed 링크를 삽입합니다.

``` js
<%- feed_tag(path, [options]) %>
```

옵션 | 설명 | 기본 값
--- | --- | ---
`title` | Feed 제목 |
`type` | Feed 형식 | atom

### 조건 태그

### is_current

`path`가 현재 페이지의 URL과 동일한지 체크합니다. `strict` 옵션을 사용하면 제한적인 매칭을 활성화 합니다.

``` js
<%- is_current(path, [strict]) %>
```

### is_home

현재 페이지가 home 페이지인지 체크합니다.

``` js
<%- is_home() %>
```

### is_post

현재 페이지가 포스트인지 체크합니다.

``` js
<%- is_post() %>
```

### is_archive

현재 페이지가 아카이브 페이지인지 체크합니다.

``` js
<%- is_archive() %>
```

### is_year

현재 페이지가 연간 아카이브 페이지인지 체크합니다.

``` js
<%- is_year() %>
```

### is_month

현재 페이지가 월간 아카이브 페이지인지 체크합니다.

``` js
<%- is_month() %>
```

### is_category

현재 페이지가 카테고리 페이지인지 체크합니다.
파라미터에 문자열을 넣으면, 현재 페이지가 해당 문자열의 카테고리에 속해있는지 체크합니다.

``` js
<%- is_category() %>
<%- is_category('hobby') %>
```

### is_tag

현재 페이지가 태그 페이지인지 체크합니다.
파라미터에 문자열을 넣으면, 현재 페이지가 해당 문자열의 태그에 속해있는지 체크합니다.

``` js
<%- is_tag() %>
<%- is_tag('hobby') %>
```

## 문자열 조작

### trim

문자열에서 공백을 제거합니다.

``` js
<%- trim(string) %>
```

### strip_html

문자열에서 모든 HTML 태그를 제거합니다.

``` js
<%- strip_html(string) %>
```

**예시:**

``` js
<%- strip_html('It's not <b>important</b> anymore!') %>
// It's not important anymore!
```

### titlecase

문자열을 적절한 타이틀 케이스(소문자/대문자)에 맞게 변환합니다.

``` js
<%- titlecase(string) %>
```

**예시:**

``` js
<%- titlecase('this is an apple') %>
# This is an Apple
```

### markdown

Markdown에 맞게 문자열을 렌더링합니다.

``` js
<%- markdown(str) %>
```

**예시:**

``` js
<%- markdown('make me **strong**') %>
// make me <strong>strong</strong>
```

### render

문자열을 렌더링합니다.

``` js
<%- render(str, engine, [options]) %>
```

### word_wrap

주어진 `length`에 맞게 문자열을 포장합니다. `length`의 기본값은 80 입니다.

``` js
<%- word_wrap(str, [length]) %>
```

**예시:**

``` js
<%- word_wrap('Once upon a time', 8) %>
// Once upon\n a time
```

### truncate

`length` 이후의 문자들을 잘라냅니다. 기본 값은 30 입니다.

``` js
<%- truncate(text, [options]) %>
```

**예시:**

``` js
<%- truncate('Once upon a time in a world far far away', {length: 17}) %>
// Once upon a ti...

<%- truncate('Once upon a time in a world far far away', {length: 17, separator: ' '}) %>
// Once upon a...

<%- truncate('And they found that many people were sleeping better.', {length: 25, omission: '... (continued)'}) %>
// And they f... (continued)
```

## 템플릿

### partial

다른 템플릿 파일을 불러옵니다. 지역 변수인 `locals`에 정의할 수 있습니다.

``` js
<%- partial(layout, [locals], [options]) %>
```

옵션 | 설명 | 기본 값
--- | --- | ---
`cache` | 내용을 캐싱합니다. (Fragment cache 사용) | `false`
`only` | 지역 변수에 한정합니다. 템플릿에서 `locals` 변수만 설정할 수 있습니다. | `false`

### fragment_cache

Fragment에 컨텐츠를 캐싱합니다. 컨텐츠를 fragment단위로 저장하고 다음 요청이 들어오면 캐시를 제공합니다.

``` js
<%- fragment_cache(id, fn);
```

**예시:**

``` js
<%- fragment_cache('header', function(){
  return '<header></header>';
}) %>
```

## 날짜와 시간

### date

형식이 정의된 날짜를 삽입합니다. `date`는 unix time, ISO string, date object, [Moment.js] 객체를 사용할 수 있습니다. `format`은 기본 값으로 정의된 `date_format`를 사용합니다.

``` js
<%- date(date, [format]) %>
```

**예시:**

``` js
<%- date(Date.now()) %>
// 2013-01-01

<%- date(Date.now(), 'YYYY/M/D') %>
// Jan 1 2013
```

### date_xml

XML 형식의 날짜를 삽입합니다. `date`는 unix time, ISO string, date object, [Moment.js] 객체를 사용할 수 있습니다.

``` js
<%- date_xml(date) %>
```

**예시:**

``` js
<%- date_xml(Date.now()) %>
// 2013-01-01T00:00:00.000Z
```

### time

형식이 정의된 시간을 사입합니다. `date`는 unix time, ISO string, date object, [Moment.js] 객체를 사용할 수 있습니다. `format`은 기본 값으로 정의된 `time_format`를 사용합니다.

``` js
<%- time(date, [format]) %>
```

**예시:**

``` js
<%- time(Date.now()) %>
// 13:05:12

<%- time(Date.now(), 'h:mm:ss a') %>
// 1:05:12 pm
```

### full_date

형식이 정의된 날짜와 시간을 삽입합니다. `date`는 unix time, ISO string, date object, [Moment.js] 객체를 사용할 수 있습니다. `format`은 기본 값으로 정의된 `date_format + time_format`를 사용합니다.

``` js
<%- full_date(date, [format]) %>
```

**예시:**

``` js
<%- full_date(new Date()) %>
// Jan 1, 2013 0:00:00

<%- full_date(new Date(), 'dddd, MMMM Do YYYY, h:mm:ss a') %>
// Tuesday, January 1st 2013, 12:00:00 am
```

### moment

[Moment.js] 라이브러리 입니다.

## List

### list_categories

모든 카테고리의 목록을 삽입합니다.

``` js
<%- list_categories([options]) %>
```

옵션 | 설명 | 기본 값
--- | --- | ---
`orderby` | 카테고리 정렬 기준 | name
`order` | 정렬 방식. `1`, `asc`은 오름차순; `-1`, `desc`은 내림차순 | 1
`show_count` | 각 카테고리 별 포스트의 번호를 표시합니다. | true
`style` | 카테고리 목록 표시의 스타일. `list`는 카테고리 목록을 순서없이 표시합니다. | list
`separator` | 카테고리 별 구분자. (`style`이 `list`가 아닐 때만 동작합니다.) | ,
`depth` | 카테고리의 계층을 표시합니다. `0`은 모든 카테고리 및 하위 카테고리를 표시합니다.; `-1`은 `0`과 비슷하지만 flat하게 표시합니다.; `1`은 최상위 계층의 카테고리들만 표시합니다. | 0
`class` | 카테고리 목록의 Class명. | category
`transform` | 카테고리 이름의 표시 방식을 변경하는 기능. |
`suffix` | 링크에 접미사를 붙입니다. | None

### list_tags

모든 태그의 목록을 삽입합니다.

``` js
<%- list_tags([options]) %>
```

옵션 | 설명 | 기본 값
--- | --- | ---
`orderby` | 태그 정렬 기준 | name
`order` | 정렬 방식. `1`, `asc`은 오름차순; `-1`, `desc`은 내림차순 | 1
`show_count` | 각 태그 별 포스트의 번호를 표시합니다. | true
`style` | 태그 목록 표시의 스타일. `list`는 태그 목록을 순서없이 표시합니다.  | list
`separator` | 태그 별 구분자. (`style`이 `list`가 아닐 때만 동작합니다.) | ,
`class` | 태그 목록의 Class명. | tag
`transform` | 태그 이름의 표시 방식을 변경하는 기능. |
`amount` | 표시되는 태그의 개수. (0 = 무한대) | 0
`suffix` | 링크에 접미사를 붙입니다. | None

### list_archives

아카이브 목록을 삽입합니다.

``` js
<%- list_archives([options]) %>
```

옵션 | 설명 | 기본 값
--- | --- | ---
`type` | 형식. 이 값은 `yearly` 또는 `monthly`입니다. | monthly
`order` | 정렬 방식. `1`, `asc`은 오름차순; `-1`, `desc`은 내림차순 | 1
`show_count` | 각 아카이브에 대한 포스트의 개수를 표시합니다. | true
`format` | 날짜 형태 | MMMM YYYY
`style` | 아카이브 목록 표시의 스타일. `list`는 아카이브 목록을 순서없이 표시합니다.  | list
`separator` | 아카이브 간 구분자. (`style`이 `list`가 아닐 때만 동작합니다.) | ,
`class` | 아카이브 목록의 Class명. | archive
`transform` | 아카이브 이름의 표시 방식을 변경하는 기능. |

### list_posts

포스트의 목록을 삽입합니다.

``` js
<%- list_posts([options]) %>
```

옵션 | 설명 | 기본 값
--- | --- | ---
`orderby` | 포스트 정렬 기준 | date
`order` | 정렬 방식. `1`, `asc`은 오름차순; `-1`, `desc`은 내림차순 | 1
`style` | 포스트 목록 표시의 스타일. `list`는 포스트 목록을 순서없이 표시합니다.  | list
`separator` | 포스트 간 구분자. (`style`이 `list`각 아닐 때만 동작하빈다.) | ,
`class` | 포스트 목록의 Class명. | post
`amount` | 표시되는 포스트의 개수. (0 = 무한대) | 6
`transform` | 포스트 이름의 표시 방식을 변경하는 기능. |

### tagcloud

태그 클라우드를 삽입합니다.

``` js
<%- tagcloud([tags], [options]) %>
```

옵션 | 설명 | 기본 값
--- | --- | ---
`min_font` | 최소 폰트 크기 | 10
`max_font` | 최대 폰트 크기 | 20
`unit` | 폰트 크기의 단위 | px
`amount` | 태그의 총 개수 | 40
`orderby` | 태그의 정렬 기준 | name
`order` | 정렬 방식. `1`, `asc`은 오름차순; `-1`, `desc`은 내림차순 | 1
`color` | 태그 클라우드에 색상을 입힙니다. | false
`start_color` | 시작 색상. 16진수 색상 (`#b700ff`), rgba (`rgba(183, 0, 255, 1)`), hsla (`hsla(283, 100%, 50%, 1)`), [color keywords]을 사용할 수 있습니다. 이 옵션은 `color`가 true일 때만 동작합니다. |
`end_color` | 종료 색상. 16진수 색상 (`#b700ff`), rgba (`rgba(183, 0, 255, 1)`), hsla (`hsla(283, 100%, 50%, 1)`), [color keywords]. 이 옵션은 `color`가 true일 때만 동작합니다. |

## Miscellaneous

### paginator

Paginator를 삽입합니다.

``` js
<%- paginator(options) %>
```

옵션 | 설명 | 기본 값
--- | --- | ---
`base` | 기준 URL | /
`format` | URL 형식 | page/%d/
`total` | 페이지의 총 개수 | 1
`current` | 현재 페이지의 번호 | 0
`prev_text` | 이전 페이지의 링크 텍스트. `prev_next`가 true일 때만 동작합니다. | Prev
`next_text` | 다음 페이지의 링크 텍스트. `prev_next`가 true일 때만 동작합니다. | Next
`space` | 빈 공간을 나타내는 텍스트 | &hellp;
`prev_next` | 이전, 다음 링크를 표시합니다. | true
`end_size` | 시작/종료 측에 페이지의 개수를 표시합니다. | 1
`mid_size` | 현재 페이지의 양쪽에 페이지의 개수를 표시합니다. 현재 페이지는 포함하지 않은 개수입니다. | 2
`show_all` | 모든 페이지를 표시합니다. true로 설정되어있다면, `end_size`와 `mid_size`는 동작하지 않습니다. | false

### search_form

Google 검색 form을 삽입합니다.

``` js
<%- search_form(options) %>
```

옵션 | 설명 | 기본 값
--- | --- | ---
`class` | Form의 Class명 | search-form
`text` | 검색의 hint에 들어갈 문장 | Search
`button` | 검색 버튼을 표시합니다. boolean 또는 string 값을 가질 수 있습니다. 이 값이 string이면 해당 문자열은 버튼에 표시됩니다. | false

### number_format

숫자의 형식을 지정합니다.

``` js
<%- number_format(number, [options]) %>
```

옵션 | 설명 | 기본 값
--- | --- | ---
`precision` | 수의 정밀도. `false` 또는 음수가 아닌 정수 값을 가집니다. | false
`delimiter` | 1000 단위의 구분자. | ,
`separator` | 분수와 정수의 구분자. | .

**예시:**

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

[Open Graph] 데이터를 삽입합니다.

``` js
<%- open_graph([options]) %>
```

옵션 | 설명 | 기본 값
--- | --- | ---
`title` | 페이지 제목 (`og:title`) | `page.title`
`type` | 페이지 형태 (`og:type`) | blog
`url` | 페이지 URL (`og:url`) | `url`
`image` | 페이지 커버 (`og:image`) | First image in the content
`site_name` | 사이트 이름 (`og:site_name`) | `config.title`
`description` | 페이지 설명 (`og:desription`) | Page excerpt or first 200 characters of the content
`twitter_card` | Twitter card type (`twitter:card`) | summary
`twitter_id` | Twitter ID (`twitter:creator`) |
`twitter_site` | Twitter Site (`twitter:site`) |
`google_plus` | Google+ profile link |
`fb_admins` | Facebook admin ID |
`fb_app_id` | Facebook App ID |

### toc

헤딩 태그(h1~h6)를 파싱하여 목차(Table of Content)를 삽입합니다.

``` js
<%- toc(str, [options]) %>
```

옵션 | 설명 | 기본 값
--- | --- | ---
`class` | Class명 | toc
`list_number` | 목록 번호를 표시합니다. | true

**예시:**

``` js
<%- toc(page.content) %>
```

[color keywords]: http://www.w3.org/TR/css3-color/#svg-color
[Moment.js]: http://momentjs.com/
[Open Graph]: http://ogp.me/
