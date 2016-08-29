title: Front-matter
---
Front-matter는 파일 시작 시 작성하는 YAML 또는 JSON 구역입니다. 게시물에 대한 환경 설정을 이 곳에서 합니다. Front-matter가 끝나는 부분은 YAML의 경우 세 개의 대시(-) 로, JSON의 경우 세 개의 세미콜론(;)을 넣어서 구분합니다.

**YAML**
``` yaml
title: Hello World
date: 2013/7/13 20:46:25
---
```

**JSON**
``` json
"title": "Hello World",
"date": "2013/7/13 20:46:25"
;;;
```

### 환경설정 및 기본 값

설정 | 설명 | 기본 값
--- | --- | ---
`layout` | 레이아웃 |
`title` | 타이틀 |
`date` | 발행일 | 파일이 생성된 날짜
`updated` | 갱신일 | 파일이 업로드된 날짜
`comments` | 포스트에서 comment 기능을 사용할지 여부 | true
`tags` | 태그 (page에서는 사용 불가능) |
`categories` | 카테고리 (page에서는 사용 불가능) |
`permalink` | 포스트의 기본 permalink를 override합니다. |

#### 카테고리와 태그

카테고리와 태그는 포스트에서만 사용이 가능합니다. 카테고리는 분류와 하위 분류의 계층적인 관계를 가지고 포스트에 적용됩니다. 태그는 모두 같은 계층 단계에 정의되어 있으므로 순서와 상관 없이 작성해도 됩니다.

**Example**

``` yaml
categories:
- Sports
- Baseball
tags:
- Injury
- Fight
- Shocking
```
