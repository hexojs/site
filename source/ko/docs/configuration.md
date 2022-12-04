---
title: Configuration
---
`_config.yml` 파일의 사이트 환경 설정을 수정할 수 있습니다.

### Site

설정 | 설명
--- | ---
`title` | 웹 사이트의 제목
`subtitle` | 웹 사이트의 부제
`description` | 웹 사이트에 대한 설명
`keywords` | The keywords of your website. Supports multiple values.
`author` | 작성자 이름
`language` | 웹 사이트의 주 사용언어. [2-lettter ISO-639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) 참조. 기본값은 `en`.
`timezone` | 웹 사이트에서 사용하는 timezone. Hexo는 기본적으로 PC의 시간값을 사용합니다. 사용 가능한 timezone의 종류는 [여기](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)에서 확인할 수 있습니다. 다음과 같은 형식으로 사용하세요. `America/New_York`, `Japan`, `UTC`.

### URL

설정 | 설명 | 기본값
--- | --- | ---
`url` | 웹 사이트의 URL, must starts with `http://` or `https://` |
`root` | 웹 사이트의 루트 디렉토리 | `url's pathname`
`permalink` | 게시글의 [permalink](permalinks.html) 형식 | `:year/:month/:day/:title/`
`permalink_defaults` | Permalink 각 부분(segment)의 기본값 |
`pretty_urls` | Rewrite the [`permalink`](variables.html) variables to pretty URLs |
`pretty_urls.trailing_index` | Trailing `index.html`, set to `false` to remove it  | `true`
`pretty_urls.trailing_html` | Trailing `.html`, set to `false` to remove it (_does not apply to trailing `index.html`_)  | `true`

{% note info Website in subdirectory %}
당신의 웹 사이트가 `http://example.org/blog`와 같이 서브디렉토리에 있다면 `url`은 `http://example.org/blog`고 설정하고 `root`는 `/blog/`로 설정하세요.
{% endnote %}

### Directory

설정 | 설명 | 기본값
--- | --- | ---
`source_dir` | 컨텐츠들이 저장되어 있는 소스 폴더 | `source`
`public_dir` | 생성된 정적 사이트들이 저장될 공용 폴더 | `public`
`tag_dir` | 태그 디렉토리 | `tags`
`archive_dir` | 저장소 디렉토리 | `archives`
`category_dir` | 카테고리 디렉토리 | `categories`
`code_dir` | Code 디렉토리 | `downloads/code`
`i18n_dir` | i18n 디렉토리 | `:lang`
`skip_render` | 렌더링하지 않을 경로. 경로 매칭을 위해 [glob expressions](https://github.com/micromatch/micromatch#extended-globbing)를 사용할 수 있습니다. |

### Writing

설정 | 설명 | 기본값
--- | --- | ---
`new_post_name` | 새 포스트의 파일명 형식 | `:title.md`
`default_layout` | 기본 레이아웃 | `post`
`titlecase` | 제목을 제목에 맞는 대/소문자로 변경할 것인지 선택 | `false`
`external_link` | 외부 링크를 새 탭에서 열 것인지 선택
`external_link.enable` | 외부 링크를 새 탭에서 열 것인지 선택 | `true`
`external_link.field` | Applies to the whole `site` or `post` only | `site`
`external_link.exclude` | Exclude hostname. Specify subdomain when applicable, including `www` | `[]`
`filename_case` | 파일명을 소문자(`1`) 또는 대문자(`2`)로 변경 | `0`
`render_drafts` | Draft 문서를 표시할 것인지 선택 | `false`
`post_asset_folder` | [Asset 폴더](asset-folders.html)를 활성화 할 것인지 선택 | `false`
`relative_link` | 루트 폴더에 대한 상대 경로로 링크를 만들 것인지 선택 | `false`
`future` | 미래의 포스트를 표시할 것인지 선택 | `true`
`highlight` | Code block의 설정, see [Highlight.js](/docs/syntax-highlight#Highlight-js) section for usage guide |
`prismjs` | Code block의 설정, see [PrismJS](/docs/syntax-highlight#PrismJS) section for usage guide |

### Category & Tag

설정 | 설명 | 기본값
--- | --- | ---
`default_category` | 기본 분류 | `uncategorized`
`category_map` | 분류 목록 |
`tag_map` | 태그 목록 |

### Date / Time format

Hexo는 날짜 처리 시 [Moment.js](http://momentjs.com/)를 사용합니다.

설정 | 설명 | 기본값
--- | --- | ---
`date_format` | 날짜 형식 | `YYYY-MM-DD`
`time_format` | 시간 형식 | `HH:mm:ss`
`updated_option` | The [`updated`](/ko/docs/variables#페이지 변수) value to used when not provided in the front-matter | `mtime`

{% note info updated_option %}
`updated_option` controls the `updated` value when not provided in the front-matter:

- `mtime`: Use file modification date as `updated`. It is the default behavior of Hexo since 3.0.0
- `date`: Use `date` as `updated`. Typically used with Git workflow when file modification date could be different.
- `empty`: Simply drop `updated` when not provided. May not be compatible with most themes and plugins.

`use_date_for_updated` is deprecated and will be removed in next major version. Please use `updated_option: 'date'` instead.
{% endnote %}

### Pagination

설정 | 설명 | 기본값
--- | --- | ---
`per_page` | 하나의 페이지에 표시할 포스트의 개수. `0`이면 pagination을 표시하지 않습니다. | `10`
`pagination_dir` | Pagination 디렉토리 | `page`

### Extensions

설정 | 설명
--- | ---
`theme` | 테마명. `false`라면 테마를 끕니다.
`deploy` | Deployment 설정
`meta_generator` | [Meta generator](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#Attributes) tag. `false` disables injection of the tag.

### Include/Exclude Files or Folders

Use the following options to explicitly process or ignore certain files/folders. Support [glob expressions](https://github.com/micromatch/micromatch#extended-globbing) for path matching.

`include` and `exclude` options only apply to the `source/` folder, whereas `ignore` option applies to all folders.

Setting | Description
--- | ---
`include` | Include hidden files (including files/folders with a name that start with an underscore, with an exception*)
`exclude` | Exclude files/folders
`ignore` | Ignore files/folders

Examples:

```yaml
# Include/Exclude Files/Folders
include:
  - ".nojekyll"
  # Include 'source/css/_typing.css'.
  - "css/_typing.css"
  # Include any file in 'source/_css/'.
  - "_css/*"
  # Include any file and subfolder in 'source/_css/'.
  - "_css/**/*"

exclude:
  # Exclude 'source/js/test.js'.
  - "js/test.js"
  # Exclude any file in 'source/js/'.
  - "js/*"
  # Exclude any file and subfolder in 'source/js/'.
  - "js/**/*"
  # Exclude any file with filename that starts with 'test' in 'source/js/'.
  - "js/test*"
  # Exclude any file with filename that starts with 'test' in 'source/js/' and its subfolders.
  - "js/**/test*"
  # Do not use this to exclude posts in the 'source/_posts/'.
  # Use skip_render for that. Or prepend an underscore to the filename.
  # - "_posts/hello-world.md" # Does not work.

ignore:
  # Ignore any folder named 'foo'.
  - "**/foo"
  # Ignore 'foo' folder in 'themes/' only.
  - "**/themes/*/foo"
  # Same as above, but applies to every subfolders of 'themes/'.
  - "**/themes/**/foo"
```

Each value in the list must be enclosed with single/double quotes.

`include:` and `exclude:` do not apply to the `themes/` folder. Either use `ignore:` or alternatively, prepend an underscore to the file/folder name to exclude.

\* Notable exception is the `source/_posts` folder, but any file or folder with a name that starts with an underscore under that folder would still be ignored. Using `include:` rule in that folder is not recommended.

### Using an Alternate Config

A custom config file path can be specified by adding the `--config` flag to your `hexo` commands with a path to an alternate YAML or JSON config file, or a comma-separated list (no spaces) of multiple YAML or JSON files.

``` bash
# use 'custom.yml' in place of '_config.yml'
$ hexo server --config custom.yml

# use 'custom.yml' & 'custom2.json', prioritizing 'custom2.json'
$ hexo server --config custom.yml,custom2.json
```

Using multiple files combines all the config files and saves the merged settings to `_multiconfig.yml`. The later values take precedence. It works with any number of JSON and YAML files with arbitrarily deep objects. Note that **no spaces are allowed in the list**.

For instance, in the above example if `foo: bar` is in `custom.yml`, but `"foo": "dinosaur"` is in `custom2.json`, `_multiconfig.yml` will contain `foo: dinosaur`.

### Alternate Theme Config

Hexo themes are independent projects, with separate `_config.yml` files.

Instead of forking a theme, and maintaining a custom branch with your settings, you can configure it from somewhere else.

**`theme_config` in site's primary configuration file**

> Supported since Hexo 2.8.2

```yml
# _config.yml
theme: "my-theme"
theme_config:
  bio: "My awesome bio"
  foo:
    bar: 'a'
```

```yml
# themes/my-theme/_config.yml
bio: "Some generic bio"
logo: "a-cool-image.png"
  foo:
    baz: 'b'
```

Resulting in theme configuration:

```json
{
  bio: "My awesome bio",
  logo: "a-cool-image.png",
  foo: {
    bar: "a",
    baz: "b"
  }
}
```

**dedicated `_config.[theme].yml` file**

> Supported since Hexo 5.0.0

The file should be placed in your site folder, both `yml` and `json` are supported. `theme` inside `_config.yml` must be configured for Hexo to read `_config.[theme].yml`

```yml
# _config.yml
theme: "my-theme"
```

```yml
# _config.my-theme.yml
bio: "My awesome bio"
foo:
  bar: 'a'
```

```yml
# themes/my-theme/_config.yml
bio: "Some generic bio"
logo: "a-cool-image.png"
  foo:
    baz: 'b'
```

Resulting in theme configuration:

```json
{
  bio: "My awesome bio",
  logo: "a-cool-image.png",
  foo: {
    bar: "a",
    baz: "b"
  }
}
```

{% note %}
We strongly recommends you to store your theme configuration in one place. But in case you have to store your theme configuration separately, those information is quite important: The `theme_config` inside site's primary configuration file has the highest priority during merging, then the dedicated theme configuration file. the `_config.yml` file under the theme directory has the lowest priority.
{% endnote %}
