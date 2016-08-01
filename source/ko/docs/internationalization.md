title: Internationalization (i18n)
---
당신의 웹 사이트를 서로 다른 언어로 표시하기 위해 internationalization을 사용할 수 있습니다. 기본 언어의 변경은 `_config.yml` 파일의 `language`를 수정하면 됩니다. 다중 언어를 설정할 수도 있고 기본 언어의 순서를 수정할 수도 있습니다.

``` yaml
language: zh-tw

language:
- zh-tw
- en
```

### 언어 파일

언어 파일로 YAML 또는 JSON 파일을 사용할 수 있습니다. 테마의 `languages` 폴더에 이 파일을 넣어두면 됩니다. 언어 파일의 [printf format](https://github.com/alexei/sprintf.js)을 지원합니다. 

### 템플릿

`__` 또는 `_p`를 사용하면 템플릿에서의 문자열의 번역을 위한 helper를 사용할 수 있습니다. `__`는 일반적인 사용 방법이고 `_p`는 여러 개의 문자열을 위해 사용하는 방법입니다. 아래 예시를 보세요.

``` yaml en.yml
index:
  title: Home
  add: Add
  video:
    zero: No videos
    one: One video
    other: %d videos
```

``` js
<%= __('index.title') %>
// Home

<%= _p('index.video', 3) %>
// 3 videos
```

### 경로

페이지에서 사용할 언어는 front-matter에서도 설정이 가능합니다. `_config.yml` 파일의 `i18n_dir` 항목을 수정하면 Hexo가 자동으로 감지할 수 있습니다.

``` yaml
i18n_dir: :lang
```

`i18n_dir` 설정의 기본 값은 `:lang` 이며, Hexo는 URL의 첫 번째 세그먼트에서 언어를 감지합니다.

``` plain
/index.html => en
/archives/index.html => en
/zh-tw/index.html => zh-tw
```

언어 파일이 존재할 때에만 문자열이 서로 다른 언어로 제공됩니다. 따라서 위 예시에서 `/archives/index.html`의 `archives`는 다른 언어로 제공되지 않습니다.
