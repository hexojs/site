---
title: Commands
---

## init

```bash
$ hexo init [folder]
```

웹 사이트를 초기화합니다. `folder`가 준비되어 있지 않다면 Hexo는 현재 디렉토리에 웹 사이트를 세팅합니다.

This command is a shortcut that runs the following steps:

1. Git clone [hexo-starter](https://github.com/hexojs/hexo-starter) including [hexo-theme-landscape](https://github.com/hexojs/hexo-theme-landscape) into the current directory or a target folder if specified.
2. Install dependencies using a package manager: [Yarn 1](https://classic.yarnpkg.com/lang/en/), [pnpm](https://pnpm.js.org) or [npm](https://docs.npmjs.com/cli/install), whichever is installed; if there are more than one installed, the priority is as listed. npm is bundled with [Node.js](/docs/#Install-Node-js) by default.

## new

```bash
$ hexo new [layout] <title>
```

새 글(article)을 생성합니다. `layout`이 준비되어 있지 않다면, Hexo는 [\_config.yml](configuration.html)에 정의된 `default_layout`을 사용합니다. Use the layout `draft` to create a draft. 만약 `title`에 공백이 포함된다면 따옴표로 감싸주세요.

| 옵션                | 설명                                         |
| ----------------- | ------------------------------------------ |
| `-p`, `--path`    | Post path. Customize the path of the post. |
| `-r`, `--replace` | Replace the current post if existed.       |
| `-s`, `--slug`    | Post slug. Customize the URL of the post.  |

By default, Hexo will use the title to define the path of the file. For pages, it will create a directory of that name and an `index.md` file in it. Use the `--path` option to override that behaviour and define the file path:

```bash
hexo new page --path about/me "About me"
```

will create `source/about/me.md` file with the title "About me" set in the front matter.

Please note that the title is mandatory. For example, this will not result in the behaviour you might expect:

```bash
hexo new page --path about/me
```

will create the post `source/_posts/about/me.md` with the title "page" in the front matter. This is because there is only one argument (`page`) and the default layout is `post`.

## generate

```bash
$ hexo generate
```

정적 파일들을 생성합니다.

| 옵션                    | 설명                                                                       |
| --------------------- | ------------------------------------------------------------------------ |
| `-d`, `--deploy`      | 생성이 종료된 후 deploy 합니다.                                                    |
| `-w`, `--watch`       | 파일의 변경사항을 감시(watch)합니다.                                                  |
| `-b`, `--bail`        | Raise an error if any unhandled exception is thrown during generation    |
| `-f`, `--force`       | Force regenerate                                                         |
| `-c`, `--concurrency` | Maximum number of files to be generated in parallel. Default is infinity |

## publish

```bash
$ hexo publish [layout] <filename>
```

Publishes a draft.

## server

```bash
$ hexo server
```

로컬 서버를 구동시킵니다. 기본적으로 `http://localhost:4000/` 를 사용합니다.

| 옵션               | 설명                                  |
| ---------------- | ----------------------------------- |
| `-p`, `--port`   | 기본 포트를 덮어씁니다.                       |
| `-s`, `--static` | 정적인 파일만 구동합니다.                      |
| `-l`, `--log`    | Logger를 활성화 시킵니다. Logger 형식을 덮어씁니다. |

## deploy

```bash
$ hexo deploy
```

웹 사이트를 deploy 합니다.

| 옵션                 | 설명                            |
| ------------------ | ----------------------------- |
| `-g`, `--generate` | Deploy 하기 전에 generate를 수행합니다. |

## render

```bash
$ hexo render <file1> [file2] ...
```

파일을 렌더링합니다.

| 옵션               | Description        |
| ---------------- | ------------------ |
| `-o`, `--output` | Output destination |

## migrate

```bash
$ hexo migrate <type>
```

다른 블로그 시스템의 내용을 Hexo로 [마이그레이션](migration.html) 합니다.

## clean

```bash
$ hexo clean
```

캐시 파일 (`db.json`) 및 생성된 파일들 (`public`) 을 삭제합니다.

## list

```bash
$ hexo list <type>
```

경로(route) 목록을 보여줍니다.

## version

```bash
$ hexo version
```

버전 정보를 보여줍니다.

## config

```bash
$ hexo config [key] [value]
```

Lists the configuration (`_config.yml`). If `key` is specified, only the value of the corresponding `key` in the configuration is shown; if both `key` and `value` are specified, the value of the corresponding `key` in the configuration is changed to `value`.

## `_config.yml` 대신 커스터미이징한 설정 파일을 사용할 수 있습니다.

### 안전 모드

```bash
$ hexo --safe
```

플러그인과 스크립트를 불러오지 않습니다. 새로운 플러그인을 설치한 후 문제가 생기면 이 모드를 사용해 보시기 바랍니다.

### 디버그 모드

```bash
$ hexo --debug
```

터미널에 verbose 로그 메시지를 출력하고 `debug.log` 파일에 저장합니다. Hexo에 문제 발생 시 사용해 보시기 바랍니다. 에러 발견 시 [raise a GitHub issue](https://github.com/hexojs/hexo/issues/new)에 등록해 주세요.

### Silent 모드

```bash
$ hexo --silent
```

Silences output to the terminal.

### 설정 파일의 변경(customizing)

```bash
$ hexo --config custom.yml
```

Uses a custom config file (instead of `_config.yml`). Also accepts a comma-separated list (no spaces) of JSON or YAML config files that will combine the files into a single `_multiconfig.yml`.

```bash
$ hexo --config custom.yml,custom2.json
```

### Draft 포스트 표시

```bash
$ hexo --draft
```

Draft 포스트를 보여줍니다(`source/_drafts` 폴더에 저장되어 있습니다).

### Customize CWD

```bash
$ hexo --cwd /path/to/cwd
```

현재 작업 디렉토리의 경로를 변경할 수 있습니다.
