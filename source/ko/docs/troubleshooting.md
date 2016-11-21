title: Troubleshooting
---
Hexo 사용 중에 문제가 발생할 경우, 이 문서에 있는 해결책을 확인해 보세요. 자주 발생하는 문제에 대해 정리해 두었습니다. 만약 이 문서에서 해결 방안을 찾지 못하였다면 [GitHub](https://github.com/hexojs/hexo/issues) 또는 [Google Group](https://groups.google.com/group/hexo)을 검색해 보세요.

## YAML Parsing Error

``` plain
JS-YAML: incomplete explicit mapping pair; a key node is missed at line 18, column 29:
      last_updated: Last updated: %s
```

문자열이 콜론(:)을 포함하고 있다면 따옴표(")로 감싸주세요.

``` plain
JS-YAML: bad indentation of a mapping entry at line 18, column 31:
      last_updated:"Last updated: %s"
```

Soft tab의 사용을 명확히 하고 콜론(:) 뒤에는 공백을 추가해 주세요.

[YAML Spec](http://www.yaml.org/spec/1.2/spec.html)에서 더 많은 정보를 확인하실 수 있습니다.

## EMFILE Error

``` plain
Error: EMFILE, too many open files
```

Node.js가 non-blocking I/O를 가지고 있음에도 불구하고, 동기적 I/O의 최대 개수는 아직도 시스템에 의해 제한됩니다. 많은 수의 파일을 생성하려 할 때 EMFILE error가 발생할 수 있습니다. 이 경우 동기적 I/O의 개술를 증가시키기 위해 아래의 명령어를 수행해 보세요.

``` bash
$ ulimit -n 10000
```

## `process out of memory`

생성(generation)중에 이 error가 발생할 수 있습니다.:
```
FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - process out of memory
```

`hexo-cli`의 첫 줄에 있는 Node.js heap memory size를 증가시키세요(파일을 찾기 위해 `which hexo` 명령을 사용해 보세요).

```
#!/usr/bin/env node --max_old_space_size=8192
```

[Out of memory while generating a huge blog · Issue #1735 · hexojs/hexo](https://github.com/hexojs/hexo/issues/1735)

## Git Deployment Problems

``` plain
error: RPC failed; result=22, HTTP code = 403

fatal: 'username.github.io' does not appear to be a git repository
```

당신의 컴퓨터에 [GIT 설정](https://help.github.com/articles/set-up-git)이 제대로 되어있는지 확인하거나 HTTPS 저장소 URL을 사용해 보세요.

## Server Problems

``` plain
Error: listen EADDRINUSE
```

동시에 두 개의 Hexo server를 실행시키려 하거나 다른 어플리케이션이 같은 포트를 사용하려고 할 때 발생합니다. `port` 설정을 수정하거나 Hexo server를 `-p` 플래그와 함께 시작해 보세요.

``` bash
$ hexo server -p 5000
```

## Plugin Installation Problems

``` plain
npm ERR! node-waf configure build
```

이 에러는 JavaScript가 아닌 C, C++ 등으로 작성된 플러그인을 설치하려 할 때 발생합니다. 컴퓨터에 맞는 올바른 컴파일러를 설치해 보세요.

## Error with DTrace (Mac OS X)

```plain
{ [Error: Cannot find module './build/Release/DTraceProviderBindings'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './build/default/DTraceProviderBindings'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './build/Debug/DTraceProviderBindings'] code: 'MODULE_NOT_FOUND' }
```

DTrace의 설치가 문제를 일으킬 수 있습니다. 아래 명령을 사용해 보세요.
```sh
$ npm install hexo --no-optional
```
[#1326](https://github.com/hexojs/hexo/issues/1326#issuecomment-113871796) 이슈를 확인해 보세요.

## Iterate Data Model on Jade or Swig

Hexo는 데이터 모델로 [Warehouse]을 사용합니다. 이는 배열(array)이 아니기 때문에 iterable하게 object를 변환해야 합니다.

```
{% for post in site.posts.toArray() %}
{% endfor %}
```

## Data Not Updated

몇몇 데이터가 갱신되지 않거나 새로 생성되는 파일들이 마지막 버전과 동일할 경우입니다. 캐시를 정리하고 다시 시도해 보세요.

``` bash
$ hexo clean
```

## Escape Contents

Hexo는 포스트를 렌더링하는데 [Nunjucks]를 사용합니다([Swig]은 이전 버전에서 사용했었습니다. 문법은 비슷합니다.). `{% raw %}{{ }}{% endraw %}` 또는 `{% raw %}{% %}{% endraw %}`로 감싼 컨텐츠는 파싱된 후에 문제를 발생시킵니다. 민감한 컨텐츠는 `raw` 태그 플러그인으로 감싸는 것이 좋습니다.

```
{% raw %}
Hello {{ sensitive }}
{% endraw %}
```
## ENOSPC Error (Linux)
`$ hexo server`명령어가 가끔 error를 반환할 때가 있습니다.
```
Error: watch ENOSPC ...
```
`$ npm dedupe`를 실행하여도 해결되지 않는다면 Linux console에서 아래 명령을 수행해 보세요.
```
$ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```
이 명령어는 감시(watch)할 수 있는 파일의 개수 제한을 증가시킵니다.

[Warehouse]: https://github.com/tommy351/warehouse
[Swig]: http://paularmstrong.github.io/swig/
[Nunjucks]: http://mozilla.github.io/nunjucks/
