title: Configuration
---
`_config.yml` 파일의 사이트 환경 설정을 수정할 수 있습니다.

### Site

설정 | 설명
--- | ---
`title` | 웹 사이트의 제목
`subtitle` | 웹 사이트의 부제
`description` | 웹 사이트에 대한 설명
`author` | 작성자 이름
`language` | 웹 사이트의 주 사용언어. [2-lettter ISO-639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) 참조. 기본값은 `en`.
`timezone` | 웹 사이트에서 사용하는 timezone. Hexo는 기본적으로 PC의 시간값을 사용합니다. 사용 가능한 timezone의 종류는 [여기](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)에서 확인할 수 있습니다. 다음과 같은 형식으로 사용하세요. `America/New_York`, `Japan`, `UTC`.

### URL

설정 | 설명 | 기본값
--- | --- | ---
`url` | 웹 사이트의 URL |
`root` | 웹 사이트의 루트 디렉토리 |
`permalink` | 게시글의 [permalink](permalinks.html) 형식 | `:year/:month/:day/:title/`
`permalink_defaults` | Permalink 각 부분(segment)의 기본값 |

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
`skip_render` | 렌더링하지 않을 경로. 경로 매칭을 위해 [glob expressions](https://github.com/isaacs/minimatch)를 사용할 수 있습니다. |

### Writing

설정 | 설명 | 기본값
--- | --- | ---
`new_post_name` | 새 포스트의 파일명 형식 | `:title.md`
`default_layout` | 기본 레이아웃 | `post`
`titlecase` | 제목을 제목에 맞는 대/소문자로 변경할 것인지 선택 | `false`
`external_link` | 외부 링크를 새 탭에서 열 것인지 선택 | `true`
`filename_case` | 파일명을 소문자(`1`) 또는 대문자(`2`)로 변경 | `0`
`render_drafts` | Draft 문서를 표시할 것인지 선택 | `false`
`post_asset_folder` | [Asset 폴더](asset-folders.html)를 활성화 할 것인지 선택 | `false`
`relative_link` | 루트 폴더에 대한 상대 경로로 링크를 만들 것인지 선택 | `false`
`future` | 미래의 포스트를 표시할 것인지 선택 | `true`
`highlight` | Code block의 설정 |

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
`time_format` | 시간 형식 | `H:mm:ss`

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
