title: Variables
---
### 전역 변수

변수 | 설명
--- | ---
`site` | 사이트 전체의 정보.
`page` | 페이지 정보와 front-matter의 사용자 정의 변수 집합.
`config` | 사이트 환경설정
`theme` | 테마 환경설정. 사이트 환경설정을 상속합니다.
`_` (하나의 underscore) | [Lodash](https://lodash.com/  "Lodash" target="_blank") 라이브러리
`path` | 현재 페이지의 경로
`url` | 현재 페이지의 전체 경로
`env` | 환경설정 변수

### 사이트 변수

변수 | 설명
--- | ---
`site.posts` | 모든 포스트
`site.pages` | 모든 페이지
`site.categories` | 모든 카테고리
`site.tags` | 모든 태그

### 페이지 변수

**Article (page)**

변수 | 설명
--- | ---
`page.title` | 게시글 제목
`page.date` | 게시글 생성 날짜 ([Moment.js] object)
`page.updated` | 게시글이 마지막으로 갱신된 날짜 ([Moment.js] object)
`page.comments` | 코멘트를 활성화 할지 여부
`page.layout` | 레이아웃명
`page.content` | 게시글에서 full 처리될 컨텐츠
`page.excerpt` | 게시글 발췌
`page.more` | 게시글 발췌를 제외한 컨텐츠
`page.source` | 소스 파일의 경로
`page.full_source` | 소스 파일의 전체 경로
`page.path` | 루트 URL을 제외한 게시글의 URL. 테마에서는 `url_for(page.path)`를 자주 사용합니다.
`page.permalink` | 게시글의 전체 URL
`page.prev` | 이전 포스트, 현재 포스트가 첫 포스트라면 `null`입니다.
`page.next` | 다음 포스트, 현재 포스트가 마지막 포스트라면 `null`입니다.
`page.raw` | 게시글의 raw 데이터
`page.photos` | 게시글의 사진들 (Gallery post를 사용한 것들)
`page.link` | 게시글의 외부 링크 (Link post를 사용한 것들)

**Post (post):** `page` 레이아웃과 동일하지만 아래의 변수를 추가로 갖습니다.

변수 | 설명
--- | ---
`page.published` | Post가 draft상태가 아니라면 true를 반환합니다.
`page.categories` | Post의 모든 카테고리
`page.tags` | Post의 모든 태그

**Home (index)**

변수 | 설명
--- | ---
`page.per_page` | 한 페이지에 보여질 포스트의 수
`page.total` | 페이지의 전체 개수
`page.current` | 현재 페이지의 번호
`page.current_url` | 현재 페이지의 URL
`page.posts` | 이 페이지에 있는 포스트들 ([Data Model])
`page.prev` | 이전 페이지 번호. 현재 페이지가 첫 페이지라면 `0`입니다.
`page.prev_link` | 이전 페이지의 URL. 현재 페이지가 첫 페이지라면 `''`입니다.
`page.next` | 다음 페이지 번호. 현재 페이지가 마지막 페이지라면 `0`입니다.
`page.next_link` | 다음 페이지의 URL. 현재 페이지가 마지막 페이지라면 `''`입니다.
`page.path` | 루트 URL을 제외한 현재 페이지의 URL. 테마에서는 `url_for(page.path)`를 자주 사용합니다.

**Archive (archive):** `index` 레이아웃과 동일하지만 아래의 변수를 추가로 갖습니다.

변수 | 설명
--- | ---
`page.archive` | `true`와 동일합니다.
`page.year` | 아카이브 연도 (4자리 숫자)
`page.month` | 아카이브 월 (0을 제외한 2자리 숫자)

**Category (category):** `index` 레이아웃과 동일하지만 아래의 변수를 추가로 갖습니다.

변수 | 설명
--- | ---
`page.category` | 카테고리명

**Tag (tag):** `index` 레이아웃과 동일하지만 아래의 변수를 추가로 갖습니다.

변수 | 설명
--- | ---
`page.tag` | 태그명

[Moment.js]: http://momentjs.com/
