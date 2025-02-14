---
title: Troubleshooting
---

In case you're experiencing problems with using Hexo, here is a list of solutions to some frequently encountered issues. 자주 발생하는 문제에 대해 정리해 두었습니다. 만약 이 문서에서 해결 방안을 찾지 못하였다면 [GitHub](https://github.com/hexojs/hexo/issues) 또는 [Google Group](https://groups.google.com/group/hexo)을 검색해 보세요.

## YAML Parsing Error

```plain
JS-YAML: incomplete explicit mapping pair; a key node is missed at line 18, column 29:
      last_updated: Last updated: %s
```

문자열이 콜론(:)을 포함하고 있다면 따옴표(")로 감싸주세요.

```plain
JS-YAML: bad indentation of a mapping entry at line 18, column 31:
      last_updated:"Last updated: %s"
```

Soft tab의 사용을 명확히 하고 콜론(:) 뒤에는 공백을 추가해 주세요.

[YAML Spec](http://www.yaml.org/spec/1.2/spec.html)에서 더 많은 정보를 확인하실 수 있습니다.

## EMFILE Error

```plain
Error: EMFILE, too many open files
```

Node.js가 non-blocking I/O를 가지고 있음에도 불구하고, 동기적 I/O의 최대 개수는 아직도 시스템에 의해 제한됩니다. 많은 수의 파일을 생성하려 할 때 EMFILE error가 발생할 수 있습니다. 이 경우 동기적 I/O의 개술를 증가시키기 위해 아래의 명령어를 수행해 보세요.

```bash
$ ulimit -n 10000
```

**Error: cannot modify limit**

If you encounter the following error:

```bash
$ ulimit -n 10000
ulimit: open files: cannot modify limit: Operation not permitted
```

It means some system-wide configurations are preventing `ulimit` to being increased to a certain limit.

To override the limit:

1. Add the following line to "/etc/security/limits.conf":

```
* - nofile 10000

# '*' applies to all users and '-' set both soft and hard limits
```

- The above setting may not apply in some cases, ensure "/etc/pam.d/login" and "/etc/pam.d/lightdm" have the following line. (Ignore this step if those files do not exist)

```
session required pam_limits.so
```

2. If you are on a [systemd-based](https://en.wikipedia.org/wiki/Systemd#Adoption) distribution, systemd may override "limits.conf". To set the limit in systemd, add the following line in "/etc/systemd/system.conf" and "/etc/systemd/user.conf":

```
DefaultLimitNOFILE=10000
```

3. Reboot

## process out of memory

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

### RPC failed

```plain
error: RPC failed; result=22, HTTP code = 403

fatal: 'username.github.io' does not appear to be a git repository
```

당신의 컴퓨터에 [GIT 설정](https://help.github.com/articles/set-up-git)이 제대로 되어있는지 확인하거나 HTTPS 저장소 URL을 사용해 보세요.

### Error: ENOENT: no such file or directory

If you get an error like `Error: ENOENT: no such file or directory` it's probably due to mixing uppercase and lowercase letters in your tags, categories, or filenames. Git cannot automatically merge this change, so it breaks the automatic branching.

To fix this, try

1. Check every tag's and category's case and make sure they are the same.
1. Commit
1. Clean and build: `./node_modules/.bin/hexo clean && ./node_modules/.bin/hexo generate`
1. Manually copy the public folder to your desktop
1. Switch branch from your master branch to your deployment branch locally
1. Copy the contents of the public folder from your desktop into the deployment branch
1. Commit. You should see any merge conflicts appear that you can manually resolve.
1. Switch back to your master branch and deploy normally: `./node_modules/.bin/hexo deploy`

## Server Problems

```plain
Error: listen EADDRINUSE
```

동시에 두 개의 Hexo server를 실행시키려 하거나 다른 어플리케이션이 같은 포트를 사용하려고 할 때 발생합니다. `port` 설정을 수정하거나 Hexo server를 `-p` 플래그와 함께 시작해 보세요.

```bash
$ hexo server -p 5000
```

## Plugin Installation Problems

```plain
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

Hexo는 데이터 모델로 [Warehouse][]을 사용합니다. 이는 배열(array)이 아니기 때문에 iterable하게 object를 변환해야 합니다.

```
{% for post in site.posts.toArray() %}
{% endfor %}
```

## Data Not Updated

몇몇 데이터가 갱신되지 않거나 새로 생성되는 파일들이 마지막 버전과 동일할 경우입니다. 캐시를 정리하고 다시 시도해 보세요.

```bash
$ hexo clean
```

## No command is executed

When you can't get any command except `help`, `init` and `version` to work and you keep getting content of `hexo help`, it could be caused by a missing `hexo` in `package.json`:

```json
{
  "hexo": {
    "version": "3.2.2"
  }
}
```

## Escape Contents

Hexo는 포스트를 렌더링하는데 [Nunjucks][]를 사용합니다([Swig][]은 이전 버전에서 사용했었습니다. `{{ }}` 또는 `{% %}`로 감싼 컨텐츠는 파싱된 후에 문제를 발생시킵니다. You can skip the parsing by wrapping it with the [`raw`](/docs/tag-plugins#Raw) tag plugin, single backtick `` `{{ }}` `` or triple backtick. Alternatively, Nunjucks tags can be disabled through the renderer's option (if supported), [API](/api/renderer#Disable-Nunjucks-tags) or [front-matter](/docs/front-matter).

```
{% raw %}
Hello {{ world }}
{% endraw %}
```

````
```
Hello {{ world }}
```
````

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

## EMPERM Error (Windows Subsystem for Linux)

When running `$ hexo server` in a BashOnWindows environment, it returns the following error:

```
Error: watch /path/to/hexo/theme/ EMPERM
```

Unfortunately, WSL does not currently support filesystem watchers. Therefore, the live updating feature of hexo's server is currently unavailable. You can still run the server from a WSL environment by first generating the files and then running it as a static server:

```sh
$ hexo generate
$ hexo server -s
```

This is [a known BashOnWindows issue](https://github.com/Microsoft/BashOnWindows/issues/216), and on 15 Aug 2016, the Windows team said they would work on it. You can get progress updates and encourage them to prioritize it on [the issue's UserVoice suggestion page](https://wpdev.uservoice.com/forums/266908-command-prompt-console-bash-on-ubuntu-on-windo/suggestions/13469097-support-for-filesystem-watchers-like-inotify).

## Template render error

Sometimes when running the command `$ hexo generate` it returns an error:

```
FATAL Something's wrong. Maybe you can find the solution here: http://hexo.io/docs/troubleshooting.html
Template render error: (unknown path)
```

Possible cause:

- There are some unrecognizable words in your file, e.g. invisible zero width characters.
- Incorrect use or limitation of [tag plugin](/docs/tag-plugins).

  - Block-style tag plugin with content is not enclosed with `{% endplugin_name %}`

  ```
  # Incorrect
  {% codeblock %}
  fn()
  {% codeblock %}

  # Incorrect
  {% codeblock %}
  fn()

  # Correct
  {% codeblock %}
  fn()
  {% endcodeblock %}
  ```

  - Having Nunjucks-like syntax in a tag plugin, e.g. [`{% raw %} {# {% endraw %}`](https://mozilla.github.io/nunjucks/templating.html#comments). A workaround for this example is to use [triple backtick](/docs/tag-plugins#Backtick-Code-Block) instead. [Escape Contents](/docs/troubleshooting#Escape-Contents) section has more details.

  ```
  {% codeblock lang:bash %}
  Size of array is ${#ARRAY}
  {% endcodeblock %}
  ```

## YAMLException (Issue [#4917](https://github.com/hexojs/hexo/issues/4917))

Upgrading to `hexo^6.1.0` from an older version may cause the following error when running `$ hexo generate`:

```
YAMLException: Specified list of YAML types (or a single Type object) contains a non-Type object.
    at ...
```

This may be caused by an incorrect dependency(i.e. `js-yaml`) setting that can't be solved automatically by the package manager, and you may have to update it manually running:

```sh
$ npm install js-yaml@latest
```

or

```sh
$ yarn add js-yaml@latest
```

if you use `yarn`.

[Warehouse]: https://github.com/hexojs/warehouse
[Swig]: http://paularmstrong.github.io/swig/
[Nunjucks]: https://mozilla.github.io/nunjucks/
