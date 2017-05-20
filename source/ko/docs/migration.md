title: Migration
---
## RSS

먼저 `hexo-migrator-rss` 플러그인을 설치하세요.

``` bash
$ npm install hexo-migrator-rss --save
```

플러그인 설치 후에는 아래의 명령어를 수행하여 RSS의 모든 포스트를 마이그레이션 하세요. `source`에는 파일 경로나 URL를 사용할 수 있습니다.

``` bash
$ hexo migrate rss <source>
```

## Jekyll

Jekyll의 `_posts` 폴더의 모든 파일을 Hexo의 `source/_posts` 폴더로 옮기세요.

`_config.yml`파일의 `new_post_name` 설정을 다음과 같이 수정하세요.

``` yaml
new_post_name: :year-:month-:day-:title.md
```

## Octopress

Octopress `source/_posts` 폴더의 모든 파일을 Hexo의 `source/_posts` 폴더로 옮기세요.

`_config.yml`파일의 `new_post_name` 설정을 다음과 같이 수정하세요.

``` yaml
new_post_name: :year-:month-:day-:title.md
```

## WordPress

먼저, `hexo-migrator-wordpress` plugin을 설치하세요.

``` bash
$ npm install hexo-migrator-wordpress --save
```

WordPress의 dashboard에서 "Tools" → "Export" → "WordPress" 를 통해 사용하던 WordPress 사이트를 Export하세요. ([WordPress support page](http://en.support.wordpress.com/export/)에 더 자세한 정보가 있습니다.)

그 후 아래 명령어를 수행하세요:

``` bash
$ hexo migrate wordpress <source>
```

여기서 `source`는 WordPress의 export 파일이 있는 파일 경로 또는 URL을 의미합니다.

## Joomla

먼저, `hexo-migrator-joomla` 플러그인을 설치하세요.

```bash
$ npm install hexo-migrator-joomla --save
```

Joomla 게시물을 [J2XML](http://extensions.joomla.org/extensions/migration-a-conversion/data-import-a-export/12816?qh=YToxOntpOjA7czo1OiJqMnhtbCI7fQ%3D%3D)를 사용하여 export하세요.

그 후 아래 명령어를 ㅅ수행하세요:

```bash
$ hexo migrate joomla <source>
```

여기서 `source`는 Joonla의 export 파일이 있는 파일 경로 또는 URL을 의미합니다.
